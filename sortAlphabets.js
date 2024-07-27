function replaceWithNextChar(str) {
    let result = '';
    
    for (let i = 0; i < str.length; i++) {
      let char = str[i];
      let nextChar;
  
      if (char >= 'a' && char <= 'z') {
        nextChar = char === 'z' ? 'a' : String.fromCharCode(char.charCodeAt(0) + 1);
      } else if (char >= 'A' && char <= 'Z') {
        nextChar = char === 'Z' ? 'A' : String.fromCharCode(char.charCodeAt(0) + 1);
      } else {
        nextChar = char; // Non-alphabetic characters remain unchanged
      }
  
      result += nextChar;
    }
  
    return result;
  }
  
  // Example usage
  const inputString = "Hello, World!";
  const outputString = replaceWithNextChar(inputString);
  console.log(outputString); // "Ifmmp, Xpsme!"