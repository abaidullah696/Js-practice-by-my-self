function sumArray(arr) {
    // Your code here
    var sum = 0
    arr.forEach(element => {
        sum += element
    });
    return sum
  }
  console.log(sumArray([1, 2, 3, 4])); // 10
  