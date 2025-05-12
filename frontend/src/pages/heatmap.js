import React, { useState } from 'react';
import { Container, TextField, Button, Grid } from '@mui/material';
import CorrelationHeatmap from '../components/correlationheatmap';
import { fetchCorrelationData } from '../api';

const HeatmapPage = () => {
    const [tickers, setTickers] = useState('');
    const [minutes, setMinutes] = useState(30);
    const [heatmapData, setHeatmapData] = useState(null);

    const handleFetchData = async () => {
        try {
            const tickersArray = tickers.split(',').map((ticker) => ticker.trim());
            const data = await fetchCorrelationData(tickersArray, minutes);
            setHeatmapData(data);
        } catch (error) {
            console.error('Error fetching correlation data:', error);
            alert('Failed to fetch correlation data. Please check your inputs and try again.');
        }
    };

    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TextField
                        label="Tickers (comma-separated)"
                        value={tickers}
                        onChange={(e) => setTickers(e.target.value)}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        label="Minutes"
                        type="number"
                        value={minutes}
                        onChange={(e) => setMinutes(e.target.value)}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12}>
                    <Button variant="contained" color="primary" onClick={handleFetchData}>
                        Fetch Heatmap
                    </Button>
                </Grid>
            </Grid>
            {heatmapData && <CorrelationHeatmap heatmapData={heatmapData} />}
        </Container>
    );
};

export default HeatmapPage;