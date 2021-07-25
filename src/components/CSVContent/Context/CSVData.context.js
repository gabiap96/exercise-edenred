import React, { createContext, useState } from 'react'

export const CSVDataContext = createContext();

export const CSVDataProvider = ({ children }) => {
    const [csv, setCsv] = useState({ rows: [], headers: [] });

    const setRowsFormated = (rows, headers) => {
        const rowsFormated = rows.map((row, rowIndex) => {
            let obj = { id: rowIndex }
            headers.forEach((header, headerIndex) => {
                obj[header.field] = row[headerIndex]
            })
            return obj;
        })

        const csv = {
            headers: headers,
            rows: rowsFormated
        }

        setCsv(csv)
    }

    const deleteRow = (deletedRowsIds) => {
        setCsv(oldCsv => {
            const { rows, headers } = oldCsv;

            let newCsv = {
                rows: rows.filter(row => !deletedRowsIds.includes(row.id)),
                headers
            }

            return newCsv;
        })
    }

    const addRow = () => {
        setCsv(oldCsv => ({
            headers: oldCsv.headers,
            rows: [...oldCsv.rows, { id: oldCsv.rows.length }]
        }))
    }

    const editRow = (rowId, field, { value }) => {
        setCsv((oldCsv => {
            let { rows } = oldCsv;

            rows.forEach(row => {
                if (row.id === rowId) {
                    row[field] = value
                }
            })

            return {
                rows: rows,
                headers: oldCsv.headers
            }
        }))
    }

    const csvData = () => {
        const { rows } = csv;
        const arrayRows = rows.map(row => {
            let arrayRow = [];
            let keys = Object.keys(row)
            keys.forEach(key => {
                arrayRow.push(row[key])
            })
            return arrayRow
        })
        return arrayRows;
    }

    const dataForChart = (field) => {
        const fieldValues = csv.rows.map(row => row[field]);
        let repeatability = {}
        let labels;

        fieldValues.forEach(fieldValue => repeatability[fieldValue] === undefined ? repeatability[fieldValue] = 1 : repeatability[fieldValue]++)
        labels = Object.keys(repeatability)

        return {
            labels,
            data: labels.map(key => repeatability[key])
        }
    }

    const chartableHeaders = () => csv.headers.filter(header => header.chartable).map(header => header.field)

    const value = {
        csv,
        setRowsFormated,
        deleteRow,
        addRow,
        editRow,
        csvData,
        dataForChart,
        chartableHeaders
    }

    return (<CSVDataContext.Provider value={value}>{children}</CSVDataContext.Provider>)
}