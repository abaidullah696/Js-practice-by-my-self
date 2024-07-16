function mergeSortedArrays(arr1, arr2) {
    // Your code here
    var newArr = arr1.concat(arr2)
    newArr.sort(function (a,b) {
        return a-b
    })
return newArr
  }
  console.log(mergeSortedArrays([1, 3, 5], [2, 4, 6])); // [1, 2, 3, 4, 5, 6]
  

  // with the help of bubble sorting

  function mergeSortedArrays(arr1, arr2) {
    // Initialize a new array to hold the merged result
    var mergedArr = [];
    
    // Add all elements of arr1 to mergedArr
    for (var i = 0; i < arr1.length; i++) {
        mergedArr[mergedArr.length] = arr1[i];
    }
    
    // Add all elements of arr2 to mergedArr
    for (var j = 0; j < arr2.length; j++) {
        mergedArr[mergedArr.length] = arr2[j];
    }

    // Sort the merged array using Bubble Sort
    for (var k = 0; k < mergedArr.length; k++) {
        for (var l = 0; l < mergedArr.length - k - 1; l++) {
            if (mergedArr[l] > mergedArr[l + 1]) {
                // Swap the elements
                var temp = mergedArr[l];
                mergedArr[l] = mergedArr[l + 1];
                mergedArr[l + 1] = temp;
            }
        }
    }

    return mergedArr;
}

console.log(mergeSortedArrays([1, 3, 5], [2, 4, 6])); // [1, 2, 3, 4, 5, 6]
