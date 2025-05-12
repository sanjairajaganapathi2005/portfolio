require('dotenv').config(); // Load environment variables
const express = require('express');
const cors = require('cors');
const stockRoutes = require('./routes/stocks');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use('/stocks', stockRoutes);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});