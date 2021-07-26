import * as React from 'react';
import { CSVDataContext } from '../Context/CSVData.context'
import { useContext } from 'react';
import CustomTable from './CustomTable';
import Graph from './Graph';

export default function Representation() {
    const { csv, deleteRow, addRow, editRow, dataForChart, chartableHeaders } = useContext(CSVDataContext);
    const { rows, headers } = csv;

    return (
        <div>
            <CustomTable rows={rows} headers={headers} deleteRow={deleteRow} addRow={addRow} editRow={editRow} />
            <div className="uk-flex uk-flex-wrap">
                {chartableHeaders().map((chartableHeader) => {
                    const {labels, data} = dataForChart(chartableHeader);
                    return (
                        <div className="uk-width-1-6@l uk-width-1-3@m uk-width-1-2@s" key={chartableHeader + '-chart'}>
                            <Graph labels={labels} data={data} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

