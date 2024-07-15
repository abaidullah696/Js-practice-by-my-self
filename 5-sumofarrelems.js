function sumArray(arr) {
    // Your code here


    var sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        
    }



return sum


  }

    // with the help of forEach loop
    function forEachSum(arr) {
            var sum = 0
    arr.forEach(element => {
        sum += element
    });
    return sum
    }

  console.log(sumArray([1, 2, 3, 4])); // 10
  console.log(forEachSum([1,2,3,4,5,6,7,8,9]))