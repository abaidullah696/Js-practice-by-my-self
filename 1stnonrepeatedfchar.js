function firstNonRepeatedCharacter(str) {
    const charCount = {};

    // Count the occurrences of each character in the string
    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Find the first character that has a count of 1
    for (let char of str) {
        if (charCount[char] === 1) {
            return char;
        }
    }

    return null; // Return null if no non-repeated character is found
}

// Example usage
const inputString = 'abacddbec';
console.log(firstNonRepeatedCharacter(inputString)); // Output: 'e'
