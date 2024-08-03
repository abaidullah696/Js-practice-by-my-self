function checkobjprops(obj1, obj2) {
    const keys2 = Object.keys(obj2)

    for (let key of keys2) {
        if (obj1[key]!== obj2[key]) {
            return false
        }
       
    }
    return true
}
const objA = { a: 1, b: 1, c: 1 };
const objB = { a: 1, b: 1, c: 1 };
const objC = { a: 1, b: 1, d: 1 };

console.log(checkobjprops(objA, objB)); // Output: true
console.log(checkobjprops(objA, objC)); // Output: false
console.log(checkobjprops(objB, objC)); // Output: false