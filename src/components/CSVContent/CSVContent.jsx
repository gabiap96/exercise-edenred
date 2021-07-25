import React from 'react'
import { CSVDataProvider } from './Context/CSVData.context'
import Menu from './Menu/Menu'
import Reprezentation from './Reprezentation/Reprezentation'

export default function CSVContent() {
    return (
        <div>
            <CSVDataProvider>
                <Menu />
                <Reprezentation />
            </CSVDataProvider>
        </div>
    )
}
