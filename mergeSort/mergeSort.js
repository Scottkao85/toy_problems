var mergeSort = function(arr) {

  if (arr.length) {
    
    return arr;
  }

  var mid = Math.floor(arr.length/2);
  var left = arr.slice(0, mid);
  var right = arr.slice(mid, arr.length);

  var compare = function(a, b) {
    return a > b ? 1 : -1;
  };

  var merge = function(left, right, result) {
    var result = [];

    while(left.length && right.length) {
      if(left[0] <= right[0]) {
        result.push(left.shift());
      } else {
        result.push(right.shift());
      }
    }

    else if(left.length) {
      result.push(left.shift());
    }

    else if(right.length) {
      result.push(right.shift());

    }
    return result;
  }

}