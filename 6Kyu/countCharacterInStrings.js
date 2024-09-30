/*
The main idea is to count all the occurring characters in a string. 
If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}.


*/

function count(str) {
    const counts = {};

    for (const char of str) {
        if (counts[char]) {
            counts[char]++;
        } else {
            counts[char] = 1;
        }
    }

    return counts;
}

console.log(count('NotNyoutperfect'))