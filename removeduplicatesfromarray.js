var nums = [1, 1, 2];

var removeDuplicates = function(nums) {
    if (nums.length === 0) return 0;

    let writeIndex = 1;

    for(let readIndex = 1; readIndex < nums.length; readIndex++) {
        if(nums[readIndex] !== nums[readIndex - 1]){
            nums[writeIndex] = nums[readIndex];
            writeIndex++;
        }
    }

    return writeIndex; // Number of unique elements
};

const uniqueCount = removeDuplicates(nums);
const uniqueNums = nums.slice(0, uniqueCount);

console.log(uniqueCount); // Output: 2
console.log(uniqueNums);  // Output: [1, 2]
