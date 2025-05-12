import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BACKEND_URL || 'http://localhost:5000';
const AUTH_TOKEN = process.env.REACT_APP_AUTH_TOKEN;

export const fetchStockData = async (ticker, minutes) => {
    const response = await axios.get(`${BASE_URL}/stocks/${ticker}?minutes=${minutes}&aggregation=average`, {
        headers: {
            Authorization: `Bearer ${AUTH_TOKEN}`
        }
    });
    return response.data;
};

export const fetchCorrelationData = async (tickers, minutes) => {
    const response = await axios.get(`${BASE_URL}/stocks/correlation`, {
        params: { ticker: tickers, minutes },
        headers: {
            Authorization: `Bearer ${AUTH_TOKEN}`
        }
    });
    return response.data;
};