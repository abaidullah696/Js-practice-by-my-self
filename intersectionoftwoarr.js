function intersect(nums1, nums2) {
    let frequency = {};
    let result = [];

    // Count the frequency of each number in nums1
    for (let num of nums1) {
        if (frequency[num]) {
            frequency[num]++;
        } else {
            frequency[num] = 1;
        }
    }

    // Iterate through nums2 and check if the number exists in nums1's frequency
    for (let num of nums2) {
        if (frequency[num] > 0) {
            result.push(num);
            frequency[num]--; // Decrease the count
        }
    }

    return result;
}
let nums1 = [1, 2, 2, 1];
let nums2 = [2, 2];
console.log(intersect(nums1, nums2));  // Output: [2, 2]
