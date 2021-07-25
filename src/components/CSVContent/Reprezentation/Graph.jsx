import React from 'react'
import { Pie } from 'react-chartjs-2';
import { PieColors } from '../../mocksData/graphDataConfigs';


export default function Graph({ labels, data }) {
    const dataPie = {
        labels: labels,
        datasets: [{
            label: 'My First Dataset',
            data: data,
            backgroundColor: PieColors.backgroundColor,
            borderColor: PieColors.borderColor
        }]
    };

    return (
        <Pie data={dataPie} />
    )
}
