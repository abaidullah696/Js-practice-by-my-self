function addPreFix(str) {
    const preFix = "New!"
    if (str.startsWith(preFix)) {
        return str
    }
    return preFix + " " + str
}
console.log(addPreFix("Hello there "))
console.log(addPreFix("New! Big sale "))