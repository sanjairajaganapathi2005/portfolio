import React, { useState } from 'react';
import { Container, TextField, Button, Grid } from '@mui/material';
import StockChart from '../components/stockchart';
import { fetchStockData } from '../api';

const StockPage = () => {
    const [ticker, setTicker] = useState('');
    const [minutes, setMinutes] = useState(30);
    const [averagePrice, setAveragePrice] = useState(null);
    const [priceHistory, setPriceHistory] = useState([]);

    const handleFetchData = async () => {
        try {
            const data = await fetchStockData(ticker, minutes);
            setAveragePrice(data.averageStockPrice);
            setPriceHistory(data.priceHistory);
        } catch (error) {
            console.error('Error fetching stock data:', error);
            alert('Failed to fetch stock data. Please check your inputs and try again.');
        }
    };

    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <TextField
                        label="Ticker"
                        value={ticker}
                        onChange={(e) => setTicker(e.target.value)}
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
                        Fetch Data
                    </Button>
                </Grid>
            </Grid>
            {priceHistory.length > 0 && (
                <StockChart priceHistory={priceHistory} averagePrice={averagePrice} />
            )}
        </Container>
    );
};

export default StockPage;