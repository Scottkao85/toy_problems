// Write a function called `allCombos` that takes as its only argument an array and returns an array of arrays, each containing
// one possible permutation of the elements in the passed in array. The returned array should not contain any elements whose content
// is identical, even if in a different order. The result array should contain the permutation containing no elements, as well as the
// permutation containing all elements.

// For example:
// ['a', 'b', 'c'] ----> [[], ['a'], ['b'], ['c'], ['a', 'b'], ['a', 'c'], ['b', 'c'], ['a', 'b', 'c']]


var allCombo = fucntion(array) {
  var result = [];

  if(array.length === 0) {
    result.push([]);

    return result;
  }

  for(var i = 0; i < array.length; i++) {
    result.push([array[i]]);
    for(var j = i + 1; j < array.length; j++) {
      result[i].push(array[i])
    }
  }

  return result.concat(allCombo(array.slice(0, -1))
}


var array = ['a', 'b', 'c']
allCombo(array);
