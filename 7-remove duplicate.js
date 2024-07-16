//ptr built functions
function removeDuplicates(arr) {
    // Initialize an empty array for unique elements
    var newArr = [];
    // Initialize a set to keep track of seen elements
    var seen = new Set();

    // Iterate through each element in the array
    arr.forEach(element => {
        // Check if the element has not been seen before
        if (!seen.has(element)) {
            // Add the element to the set
            seen.add(element);
            // Add the element to the new array
            newArr.push(element);
        }
    });

    // Return the array with duplicates removed
    return newArr;
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // [1, 2, 3, 4, 5]



//without any pre built function
function removeDuplicate(arr) {
    var newArr = []

    for (let i = 0; i < arr.length; i++) {
        var isUnique = true;
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] === newArr[j]) {
                isUnique = false;
                break
            }
            
            
        }
        if (isUnique) {
        newArr.push(arr[i])
        }
    }
    
    return newArr

}
console.log(removeDuplicate([1, 2, 2, 3, 4, 4, 5])); // [1, 2, 3, 4, 5]