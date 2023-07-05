// Anagram:

// check whether two given strings are anagram of each other or not. 
// An anagram of a string is another string that contains the same characters, only the order of characters can be different. 
// For example, “abcd” and “dabc” are an anagram of each other.

function isAnagram(str1, str2) {
    return formatStr(str1) === formatStr(str2);
}
  
    // Helper function
    function formatStr(str) {
        return str
            .replace(/[^\w]/g, '')
            .toLowerCase()
            .split('')
            .sort()
            .join('');
    }
  
module.exports = isAnagram;