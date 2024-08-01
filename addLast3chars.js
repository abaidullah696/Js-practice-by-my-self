function addLastThreeChars(str) {
    if (str.length < 3) {
        return str
    }
    const lastChar = str.slice(-3)
    return lastChar + str + lastChar
}
console.log(addLastThreeChars("Hello"))
console.log(addLastThreeChars("abc"))
console.log(addLastThreeChars("ab"))