const express = require('express');
const axios = require('axios');
const { calculateAverage, calculateCorrelation } = require('../utils/calculations');

const router = express.Router();
const BASE_URL = process.env.BASE_URL; 
router.get('/:ticker', async (req, res) => {
    const { ticker } = req.params;
    const { minutes, aggregation } = req.query;

    try {
        const response = await axios.get(`${BASE_URL}/stocks/${ticker}?minutes=${minutes}`);
        const priceHistory = response.data;

        if (aggregation === 'average') {
            const averagePrice = calculateAverage(priceHistory);
            res.json({ averageStockPrice: averagePrice, priceHistory });
        } else {
            res.status(400).json({ error: 'Invalid aggregation type' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch stock data' });
    }
});

// API: Correlation of Price Movement between 2 stocks
router.get('/correlation', async (req, res) => {
    const { minutes, ticker: tickers } = req.query;

    if (!Array.isArray(tickers) || tickers.length !== 2) {
        return res.status(400).json({ error: 'Exactly two tickers must be provided' });
    }

    try {
        const [dataX, dataY] = await Promise.all(
            tickers.map((ticker) => axios.get(`${BASE_URL}/stocks/${ticker}?minutes=${minutes}`))
        );

        const pricesX = dataX.data;
        const pricesY = dataY.data;

        const correlation = calculateCorrelation(pricesX, pricesY);
        const avgPriceX = calculateAverage(pricesX);
        const avgPriceY = calculateAverage(pricesY);

        res.json({
            correlation,
            stocks: {
                [tickers[0]]: { averagePrice: avgPriceX, priceHistory: pricesX },
                [tickers[1]]: { averagePrice: avgPriceY, priceHistory: pricesY },
            },
        });
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch stock data' });
    }
});

module.exports = router;