function extractUniqueCharacters(str) {
    // Create a Set to store unique characters
    const uniqueChars = new Set();
    
    // Iterate through each character in the string
    for (let char of str) {
        uniqueChars.add(char);
    }
    
    // Convert the Set back to a string
    return [...uniqueChars].join('');
}

// Example usage
const inputString = 'hello world';
console.log(extractUniqueCharacters(inputString)); // Output: 'helo wrd'
