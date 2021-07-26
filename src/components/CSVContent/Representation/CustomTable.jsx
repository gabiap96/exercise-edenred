import React, { useState } from 'react'
import { DataGrid } from '@material-ui/data-grid'
import CustomButton from '../../Forms/CustomButton'

export default function CustomTable({ rows, headers, deleteRow, addRow, editRow }) {
    const [selectedRows, setSelectedRows] = useState([])
    const isTableEmpty = () => {return rows.length === 0}

    return (
        <div className="uk-width-1-1 uk-margin">
            <div className="uk-width-1-1 uk-height-large">
                <DataGrid
                    rows={rows}
                    columns={headers}
                    onEditCellChangeCommitted={(data) => {
                        const { id, field, props } = data;
                        editRow(id, field, props);
                    }}
                    checkboxSelection={true}
                    onSelectionModelChange={(selectedRowsIds) => { setSelectedRows(selectedRowsIds.selectionModel) }}
                    pageSize={6} />

            </div>
            <div>
                <CustomButton onClick={() => addRow()} disabled={isTableEmpty()} type={"primary"} >Add row</CustomButton>
                <CustomButton onClick={() => deleteRow(selectedRows)} disabled={isTableEmpty()} type={"danger"}>Delete raw</CustomButton>
            </div>
        </div>
    )
}
