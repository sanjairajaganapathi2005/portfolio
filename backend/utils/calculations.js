// Utility function to calculate average
const calculateAverage = (prices) => {
    const total = prices.reduce((sum, item) => sum + item.price, 0);
    return total / prices.length;
};

// Utility function to calculate correlation
const calculateCorrelation = (pricesX, pricesY) => {
    const n = Math.min(pricesX.length, pricesY.length);
    const avgX = calculateAverage(pricesX);
    const avgY = calculateAverage(pricesY);

    let covariance = 0, varianceX = 0, varianceY = 0;

    for (let i = 0; i < n; i++) {
        const diffX = pricesX[i].price - avgX;
        const diffY = pricesY[i].price - avgY;
        covariance += diffX * diffY;
        varianceX += diffX ** 2;
        varianceY += diffY ** 2;
    }

    covariance /= n - 1;
    const stdDevX = Math.sqrt(varianceX / (n - 1));
    const stdDevY = Math.sqrt(varianceY / (n - 1));

    return covariance / (stdDevX * stdDevY);
};

module.exports = { calculateAverage, calculateCorrelation };