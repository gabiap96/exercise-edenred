import React, { useContext } from 'react'
import CSVReader from 'react-csv-reader'
import { CSVDataContext } from '../Context/CSVData.context'
import { movieCharactersHeader } from '../../mocksData/csvHeaders'
import { CSVLink } from "react-csv";

export default function Menu() {
    const { setRowsFormated, csvData } = useContext(CSVDataContext)
    const csvDataObject = csvData();
    
    return (
        <div className="uk-flex uk-margin">
            <CSVReader onFileLoaded={(data, fileInfo) => { setRowsFormated(data, movieCharactersHeader) }} />
            <CSVLink data={csvDataObject}>Download as csv</CSVLink>
        </div>
    )
}
