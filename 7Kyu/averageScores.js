function average(scores) {
    const sum = scores.reduce((acc, score) => acc + score, 0);
    return Math.round(sum / scores.length);
}

console.log(average([2,5,72,6,2,6]))
console.log(average([90,98,89,100,100,86,94]))