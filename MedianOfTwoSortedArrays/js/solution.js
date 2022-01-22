/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    var finArr = [];
    var finP = 0;
    
    for(var i = 0; i < nums1.length; i++) {
        finArr[finP] = nums1[i];
        finP++;
        
    }
    
    for(var j = 0; j < nums2.length; j++) {
        finArr[finP] = nums2[j];
        finP++;
    }
    
    finArr.sort(function(a, b) {
        return a - b;
    });

    
    var totalLen = finArr.length;
    if(totalLen % 2 != 0) {
        // odd
        var flooredNum = Math.floor(totalLen / 2);
        var num = finArr[flooredNum];
        return num;
    } else {
        // even
        var flooredNum = Math.floor(totalLen / 2) - 1;
        var total = (finArr[flooredNum] + finArr[flooredNum + 1])/2;
        return total;
        
    }
};
