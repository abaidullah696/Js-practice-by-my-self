function sumOfOdds(startNum, endNum) {
    let sum = 0
    for (let i = startNum; i <= endNum; i+=2) {
        
        sum =sum+i
    }
    return sum
}
console.log(sumOfOdds(11, 30))