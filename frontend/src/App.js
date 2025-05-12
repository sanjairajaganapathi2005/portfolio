import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StockPage from './pages/stockpage';
import HeatmapPage from './pages/heatmap';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<StockPage />} />
                <Route path="/heatmap" element={<HeatmapPage />} />
            </Routes>
        </Router>
    );
};

export default App;