function isPalindrome(str) {
    // Your code here

    //without pre built js function

    let arr = ""
    for (let i = str.length - 1; i >= 0 ; i--) {
        arr += str[i];
        
    }
    if (arr === str) {
        return true
    } else {
        return false        
    } 
  }

//with pre built js function
function palidrome(str) {
    
    var arr = str.split("").reverse().join("")
        if (arr === str) {
            return true
        } else {
            return false
        }
}






  console.log(isPalindrome("racecar")); // true
  console.log(isPalindrome("hello")); // false

  console.log(palidrome("racecar")); // true
  console.log(palidrome("hello")); // false
  