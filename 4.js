/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    const n1 = nums1.length;
    const n2 = nums2.length;
    if (!n1) {
        if (!n2) {
            return 0;
        }
        if ((n2 & 1) > 0) {
            return nums2[n2 >> 1];
        } else {
            return parseInt(
                (nums2[n2 >> 1] + nums2[(n2 >> 1) - 1]) >> 1,
                10
            );
        }
    } else if (!n2) {
        if ((n1 & 1) > 0) {
            return nums1[n1 >> 1];
        } else {
            return parseInt(
                (nums1[n1 >> 1] + nums1[(n1 >> 1) - 1]) >> 1,
                10
            );
        }
    }
};