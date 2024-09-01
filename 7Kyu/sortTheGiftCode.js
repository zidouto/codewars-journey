/* 
Write a function called sortGiftCode that accepts a string containing
up to 26 unique alphabetical characters, and returns a string containing 
the same characters in alphabetical order.
*/
function sortGiftCode(code){
    let sorted = code.split('').sort().join('');
    return sorted
  }