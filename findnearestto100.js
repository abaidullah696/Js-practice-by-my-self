function nearTo100(num1, num2) {
    const target = 100

    const val1 = Math.abs(num1 - target)
    const val2 = Math.abs(num2 - target)
    if (val1 < val2) {
        return num1
    } else if(val1 > val2){
        return num2
    } else {
        return "Both numbers are equal deferent to 100"
    }
    // return num1 + num2
}
console.log(nearTo100(99,101))
console.log(nearTo100(99,85))
console.log(nearTo100(85,105))