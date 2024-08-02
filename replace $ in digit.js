function replace(str) {

    let regex = /\d/

    const result = str.replace(regex, '$')

    return result
    
}
console.log(replace("1hello"))
console.log(replace("123456"))
console.log(replace("hello"))
