var timeConvert = function(n) {
    var result;
    var getHour = function(n) {
      var hour = Math.floor(n/60);

      return hour;
    }
    var getMin = function(n) {
      var min = n%60;

      return min;
    }
  return getHour(n) + ":" + getMin(n);
}