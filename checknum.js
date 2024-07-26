function checkNum(num1, num2) {
    if (num1 == 100 || num2 == 100 || num1+num2 == 100) {
        return true
    } else {
        return false
    }
}

console.log(checkNum(20, 50))//false
console.log(checkNum(50, 50))//true