import React from 'react'
import { CSVDataProvider } from './Context/CSVData.context'
import Menu from './Menu/Menu'
import Representation from './Representation/Representation'

export default function CSVContent() {
    return (
        <div>
            <CSVDataProvider>
                <Menu />
                <Representation />
            </CSVDataProvider>
        </div>
    )
}
