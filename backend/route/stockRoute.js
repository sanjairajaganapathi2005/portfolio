const express = require('express');
const { calculateAveragePrice, calculateCorrelation } = require('../utils/calculations');
const router = express.Router();

const stockCache = new Map();
const STOCK_API_BASE = 'http://20.244.56.144/evaluation-service';

router.get('/:ticker', async (req, res) => {
    const { ticker } = req.params;
    const { minutes, aggregation } = req.query;

    if (!minutes || !aggregation) {
        return res.status(400).json({ error: 'Missing required parameters' });
    }

    try {
        const result = await calculateAveragePrice(ticker, minutes, stockCache, STOCK_API_BASE);
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/correlation', async (req, res) => {
    const { minutes, ticker } = req.query;

    if (!minutes || !ticker || ticker.length !== 2) {
        return res.status(400).json({ error: 'Exactly two tickers required' });
    }

    try {
        const result = await calculateCorrelation(ticker, minutes, stockCache, STOCK_API_BASE);
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;