function getExtention(str) {
    return str.split('.').pop()
}
console.log(getExtention("Hello.js"))