function checkEvenNum(arr) {
    let count = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            count++
        }
        
    }
    return count
}
console.log(checkEvenNum([1,2,3,4,5,6,7,8,9,10]))



function countEvenDigits(arr) {
    let evenCount = 0;
  
    // Iterate over each integer in the array
    for (let i = 0; i < arr.length; i++) {
      let num = Math.abs(arr[i]); // Take the absolute value to handle negative numbers
  
      // Iterate over each digit of the current integer
      while (num > 0) {
        let digit = num % 10;
        if (digit % 2 === 0) {
          evenCount++;
        }
        num = Math.floor(num / 10);
      }
    }
  
    return evenCount;
  }
  
  // Test cases
  console.log(countEvenDigits([123, 456, 789])); // Output: 3 (2, 4, 6)
  console.log(countEvenDigits([111, 222, 333])); // Output: 3 (2, 2, 2)
  console.log(countEvenDigits([0, 246, 13579])); // Output: 4 (0, 2, 4, 6)
  console.log(countEvenDigits([48, 55, 66, 77])); // Output: 5 (4, 8, 6, 6)
  console.log(countEvenDigits([-248, 7, -135, 802])); // Output: 5 (2, 4, 8, 8, 2)
  console.log(countEvenDigits([-48, 78, -35, 802])); // Output: 5 (2, 4, 8, 8, 2)

  