// Write a function that accepts a multi dimensional array and returns a flattened version.
// flatten([1, 2, [3, [4], 5, 6], 7]) // [1, 2, 3, 4, 5, 6, 7]


var flatten = function(array) {

    for(var i = 0; i < array.length-1; i++) {
        if(Array.isArray(array[i])) {
            array.splice.apply(array, [i, 1].concat(array[i]));
        }
    }

    return array;
}