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


function mergeSort(arr1, arr2) {
    console.log("Hello")
    var mergedArr = arr1.concat(arr2)
    console.log(mergedArr)
    for (let i = 0; i < mergedArr.length; i++) {
       for (let j = 0; j < mergedArr.length; j++) {
        if (mergedArr[i]<mergedArr[j]) {
            var temp = mergedArr[i]
            mergedArr[i] = mergedArr[j]
            mergedArr[j] = temp
        }
        
       }
        
    }
    return mergedArr
}
console.log(mergeSort([1, 3, 5], [2, 4, 6])); // [1, 2, 3, 4, 5, 6]




// optimized code for best case O(n+m) time complexity
function mergeSortedArrays(arr1, arr2) {
    let mergedArr = [];
    let i = 0; // Pointer for arr1
    let j = 0; // Pointer for arr2

    // Merge elements from both arrays in sorted order
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            mergedArr.push(arr1[i]);
            i++;
        } else {
            mergedArr.push(arr2[j]);
            j++;
        }
    }

    // If there are remaining elements in arr1, add them
    while (i < arr1.length) {
        mergedArr.push(arr1[i]);
        i++;
    }

    // If there are remaining elements in arr2, add them
    while (j < arr2.length) {
        mergedArr.push(arr2[j]);
        j++;
    }

    return mergedArr;
}

console.log(mergeSortedArrays([1, 3, 5], [2, 4, 6])); // [1, 2, 3, 4, 5, 6]


