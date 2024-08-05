function all(collection, predicate) {
    for (const element of collection) {
        if (!predicate(element)) {
            return  false
        }
       

    }
    return true
}
const isEven = num => num % 2 === 0

console.log(all([2, 4, 6, 8], isEven)); // true
console.log(all([2, 4, 6, 7], isEven)); // false