import React, { useState } from 'react'
import { DataGrid } from '@material-ui/data-grid'
import CustomButton from '../../Forms/CustomButton'

export default function CustomTable({ rows, headers, deleteRow, addRow, editRow }) {
    const [selectedRows, setselectedRows] = useState([])
    const tableIsEmpty = () => rows.length < 1

    return (
        <div className="uk-width-1-1 uk-margin">
            <div className="uk-width-1-1 uk-height-large">
                <DataGrid
                    rows={rows}
                    columns={headers}
                    onEditCellChangeCommitted={(data, arg) => {
                        const { id, field, props } = data;
                        editRow(id, field, props);
                    }}
                    checkboxSelection={true}
                    onSelectionModelChange={(selectedRowsIds) => { setselectedRows(selectedRowsIds.selectionModel) }}
                    onEditCellChange={(data) => { console.log("onEditCellChange:", data) }}
                    pageSize={6} />

            </div>
            <div>
                <CustomButton onClick={() => addRow()} disabled={tableIsEmpty} type={"primary"}>Add row</CustomButton>
                <CustomButton onClick={() => deleteRow(selectedRows)} disabled={tableIsEmpty} type={"danger"}>Delete raw</CustomButton>
            </div>
        </div>
    )
}
