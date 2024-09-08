//
//Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

//You must implement a solution with a linear runtime complexity and use only constant extra space.


function singleNumber(nums) {
    let result = 0;
    
    // XOR all the elements in the array
    for (let i = 0; i < nums.length; i++) {
        result ^= nums[i];
    }
    
    return result;
}
console.log(singleNumber([4,5,5,6,6]))
