/*
Make a function that can take any non-negative integer as an argumentand return it with its digits in descending order. 
Essentially, rearrange the digits to create the highest possible number.
*/
function descendingOrder(n) {
    let reversed = n.toString().split('');
    reversed.sort((a, b) => b - a);
    let result = parseInt(reversed.join(''), 10);
    
    return result;
}