function extractHalfOfEvenStr(str) {
    if (str.length%2!= 0) {
        return "This is not an even string"
    }
    const midPoint = str.length/2
    const firsHalf = str.slice(0, midPoint)
    return firsHalf    
}
console.log(extractHalfOfEvenStr("Helo"))
console.log(extractHalfOfEvenStr("Hello"))
console.log(extractHalfOfEvenStr("Hello there "))