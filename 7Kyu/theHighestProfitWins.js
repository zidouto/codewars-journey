/*
Write a function that returns both the minimum and maximum number of the given list/array.
*/
function minMax(arr){
    const max = Math.max(...arr);
    const min = Math.min(...arr)
    return [min,max]; // fix me!
  }