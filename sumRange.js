function sumRange(num1, num2) {
    let start = Math.min(num1, num2); // Ensure the starting number is the smaller one
    let end = Math.max(num1, num2);   // Ensure the ending number is the larger one
    let sum = 0;

    // Sum all numbers from start to end
    for (let i = start; i <= end; i++) {
        sum += i;
    }

    return sum;
}

// Example usage:
console.log(sumRange(1, 4)); // Outputs: 10 (1 + 2 + 3 + 4)
console.log(sumRange(4, 1)); // Outputs: 10 (1 + 2 + 3 + 4)
