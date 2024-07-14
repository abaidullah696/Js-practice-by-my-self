function reverseString(str) {
    // Your code here

    let reverseStr = ""

    for(let i = str.length-1;i>=0; i--){
        reverseStr += str[i]
    }
    return reverseStr
    //With js pre built functions
  
  }

function reverseStrWithPreBuiltJs(str) {
    var arr =  str.split("").reverse().join("")
    return  arr
}




  console.log(reverseString("hello")); // "olleh"
  console.log(reverseStrWithPreBuiltJs("hello world"));
 