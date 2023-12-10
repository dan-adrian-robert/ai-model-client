import React from 'react';
import {Bar, Chart} from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import Box from "@mui/material/Box";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const BarComponent: React.FC<any> = ({data, options}) => {

    return (
        <Box width={'25em'} height={'25em'}>
            <Bar data={data} options={options}/>
        </Box>
    );
}
