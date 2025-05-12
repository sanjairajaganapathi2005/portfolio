import React from 'react';
import { Line } from 'react-chartjs-2';
import { Typography } from '@mui/material';

const StockChart = ({ priceHistory, averagePrice }) => {
    const chartData = {
        labels: priceHistory.map((item) => new Date(item.lastUpdatedAt).toLocaleTimeString()),
        datasets: [
            {
                label: 'Stock Price',
                data: priceHistory.map((item) => item.price),
                borderColor: 'rgba(75,192,192,1)',
                fill: false,
            },
        ],
    };

    return (
        <div>
            <Typography variant="h6">Average Price: {averagePrice.toFixed(2)}</Typography>
            <Line data={chartData} />
        </div>
    );
};

export default StockChart;