function countVowels(str) {
    // Your code here
    console.log(str)
    var count = 0
    for (let i of str) {
        
        switch (i) {
                case 'a':
                case 'e':
                case 'i':
                case 'o':
                case 'u':
                case 'A':
                case 'E':
                case 'I':
                case 'O':
                case 'U':
                count++
                break;
        
            default:
                break;
        }
        
    }
    
    
    return count
    }
  
  
  console.log(countVowels("hello world")); // 3
  