// Find a duplicate element in a limited range array
// Given a limited range array of size n where array contains elements between 1 to n-1 with one element repeating, find the duplicate number in it.

// For example,

// Input:  { 1, 2, 3, 4, 4 }
// Output: The duplicate element is 4

// Input:  { 1, 2, 3, 4, 2 }
// Output: The duplicate element is 2

var array = [1, 2, 3, 4, 2];

var findDuplicate = function(arr) {
	var someObj = {};

	for(var i = 0; i <= arr.length; i++) {
		if(!someObj[arr[i]]) {
			someObj[arr[i]] = arr[i]
		}else {
			return arr[i]
		}
	}
	return false
}