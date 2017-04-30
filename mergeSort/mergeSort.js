var mergeSort = function(arr) {

  // if not array or just 1 item.
  if(arr.length < 2 || !Array.isArray.(arr)) {
    return arr;
  }

  var mid = Math.floor(arr.length/2);
  var left = arr.slice(0, mid);
  var right = arr.slice(mid, arr.length);

  var compare = function(a, b) {
    return a > b ? 1 : -1;
  };

  var merge = function(l, r, result) {
    var result = [];
    
    while(l.length && r.length) {
      if(l[0] <= r[0]) {
        result.push(l.shift());
      } else {
        result.push(r.shift());
      }
    }
}