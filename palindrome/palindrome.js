// check if a given string is a palindrome

var palindromeSimple = function(str) {
  var result = "";
  for(var i = str.length-1; i >= 0; i--) {
    result += str[i];
  }
  if(str === result) {
    return true;
  }
  return false;
}


