function findLargest(arr) {
    // Your code here
    //without pre built functions
    
        var big = arr[0]
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]>big) {
            big = arr[i];
        }
        
    }
    return big    
}
    function prejs(arr) {
        return arr.reduce(function (big, current) {
            return current>big ? current : big;    
        })
    }
  console.log(findLargest([1, 2, 3, 4, 5])); // 5
  console.log(prejs([9,8,7,6,5,4,3,2,1]))