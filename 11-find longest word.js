function findLongestWord(str) {
  // Split the string into an array of words
  const words = str.split(' ');

  // Initialize variables to track the longest word and its length
  let longestWord = '';
  let maxLength = 0;

  // Iterate through each word in the array
  for (let word of words) {
      // Check if the current word is longer than the longest word found so far
      if (word.length > maxLength) {
          longestWord = word;
          maxLength = word.length;
      }
  }

  return longestWord;
}

// Example usage
const inputString = 'The quick brown fox jumped over the lazy dog';
console.log(findLongestWord(inputString)); // Output: 'jumped'
console.log(findLongestWord("Somithing is big"));
console.log(findLongestWord("Which word is big"));