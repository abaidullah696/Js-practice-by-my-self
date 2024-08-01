function charOccurance(str, char) {

let count = 0
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            count++
            
        }
        
    }
    if (count >= 2 && count <= 4) {
        return true
    } else {
        return false        
    }
}
console.log(charOccurance("Hello", "l"))
console.log(charOccurance("Helo", "l"))
console.log(charOccurance("Helllo", "l"))
console.log(charOccurance("Hellllo", "l"))
console.log(charOccurance("Helllllo", "l"))