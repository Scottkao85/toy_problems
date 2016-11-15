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

var palindromeRecursive = function(str) {
  // check if str length is less than or equal to 0
  if(str.length <= 1) {
    return true;
  }
  // check if the first letter is not the same as the last letter
  // return false if the first comparison fails
  if(str.charAt(0) != str.charAt(str.length-1)) {
    return false;
  }
  // recursively compare the rest/"middle" of the remaining str
  return palindromeRecursive(str.substr(1, str.length-2));
}

