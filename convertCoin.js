function convertToCoins(amount, coins) {
    const result = [];
    
    for (let i = 0; i < coins.length; i++) {
        while (amount >= coins[i]) {
            amount -= coins[i];
            result.push(coins[i]);
        }
    }
    
    return result;
}

// Example usage
const amount = 46;
const coinDenominations = [25, 10, 5, 2, 1];
console.log(convertToCoins(amount, coinDenominations)); // Output: [25, 10, 10, 1]
