function leapYear(year) {
    if (year%4 === 0 && year % 100 !== 0 || year % 400 === 0) {
        return "Leap Year"
    }
    return "Not a leap year"
}
console.log(leapYear(2024))
console.log(leapYear(2000))
console.log(leapYear(2025))

