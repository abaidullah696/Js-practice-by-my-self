function concat2strexept1stword(str1, str2) {
    const first = str1.slice(1)
    const second = str2.slice(1)

    return first + str2
}

console.log(concat2strexept1stword("Hello", "There"))
console.log(concat2strexept1stword("Hello", "World"))