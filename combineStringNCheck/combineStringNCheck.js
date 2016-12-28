// We are given 3 strings: str1, str2, and str3. Str3 is said to be a shuffle of str1 and str2 if it can be formed by interleaving the characters of str1 and str2 in a way that maintains the left to right ordering of the characters from each string. For example, given str1="abc" and str2="def", str3="dabecf" is a valid shuffle since it preserves the character ordering of the two strings. So, given these 3 strings write a function that detects whether str3 is a valid shuffle of str1 and str2.


var combineTwoStrings = function(str1, str2, str3) {

    if((str1.length + str2.length) !== str3.length) {

        return false;
    }

    return isCombineTwoStrings(str1, str2, str3);

}

var isCombineTwoStrings = function(str1, str2, str3) {

    // when there are no more solutions
    if(str3.length === 0) {
        return true;
    }

    var newStr3 = str3.substr(1);


    // Path for when the first string matches.
    if(str1[0] === str3[0]) {
        
        if(str2[0] === str3[0]) {

            return isCombineTwoStrings(str1.substr(1), str2, newStr3) || isCombineTwoStrings(str1, str2.substr(1), newStr3);
        }
        return isCombineTwoStrings(str1.substr(1), str2, newStr3);
    }

    // Path for when the second string matches.
    if(str2[0] === str3[0]) {
    
        return isCombineTwoStrings(str1, str2.substr(1), newStr3);
    }

    return false;
}