function isSortedAscending(num) {

    for (let i = 0; i < num.length; i++) {
        if (num[i] > num[i +1]) {
            return "Not Sorted Ascending"
        }
        return "Sorted Ascending"
    }
}










console.log(isSortedAscending([1, 2, 3, 4, 5])); // Output: true
console.log(isSortedAscending([5, 4, 3, 2, 1])); // Output: false
console.log(isSortedAscending([1, 2, 2, 3, 4])); // Output: true
console.log(isSortedAscending([1, 3, 2, 4, 5])); // Output: false
console.log(isSortedAscending([10, 20, 30, 40, 50])); // Output: true
console.log(isSortedAscending([1])); // Output: true (Single element array is considered sorted)
console.log(isSortedAscending([])); // Output: true (Empty array is considered sorted)