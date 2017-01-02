// Implement the bubble sort algorithm.

var bubbleSort = function(arr) {

    // check is input is an array && if array containers more than 2 values
    if(!Array.isArray(arr) || arr.length < 2) {
        return arr;
    }

    // helper function to help swap values
    var swap = function(arr, first, second) {
        var temp = arr[first];
        arr[first] = arr[second];
        arr[second] = temp;

        return arr;
    }

    // helper function to compare 2 values
    var compare = function(a, b) {
        if(a > b) {
            return 1;
        }else { 
            return -1;
        }
    }

    var i, l;

    for(var i = 0; i < arr.length; i++) {
        l = i;
    
        while(l-- && compare(arr[l], arr[l+1]) > 0) {
            swap(arr, l, l+1);
        }
    }

    return arr;
}