function largestEvenNoInArray(arr) {
    let largest = null
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]%2===0) {
            if (largest === null || arr[i] > largest) {
                largest = arr[i]
            }
            
        }
        
    }
    return largest
}
console.log(largestEvenNoInArray([1,2,3,4,5,6,7,8,9]))