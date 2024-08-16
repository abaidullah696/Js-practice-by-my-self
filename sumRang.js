function sumRange(num1, num2) {
    let start = Math.min(num1, num2); // Find the lower number
    let end = Math.max(num1, num2);   // Find the higher number
    let sum = 0;

    for (let i = start; i <= end; i++) {
        sum += i;
    }

    return sum;
}

// Example usage:
console.log(sumRange(1, 4)); // Outputs: 10 (1 + 2 + 3 + 4)
console.log(sumRange(4, 1)); // Outputs: 10 (1 + 2 + 3 + 4)
