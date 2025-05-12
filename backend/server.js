require('dotenv').config(); // Load environment variables
const express = require('express');
const cors = require('cors');
const stockRoutes = require('./route/stockRoute');

const app = express();
const PORT = process.env.PORT || 4000;

const corsOptions = {
    origin: 'http://localhost:3000',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
};

app.use(express.json());
app.use(cors(corsOptions));
app.use('/stocks', stockRoutes);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});