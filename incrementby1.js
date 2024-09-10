function plusOne(digits) {
    let n = digits.length;

    // Start from the last digit and iterate backwards
    for (let i = n - 1; i >= 0; i--) {
        digits[i]++;  // Increment the current digit by 1
        if (digits[i] < 10) {
            return digits;  // If no carry, return the result
        }
        digits[i] = 0;  // If there's a carry, set this digit to 0 and continue
    }

    // If we finished the loop and still have a carry, prepend 1
    digits.unshift(1);
    return digits;
}
