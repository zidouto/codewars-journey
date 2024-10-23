function average(scores) {
    const sum = scores.reduce((acc, score) => acc + score, 0);
    return Math.round(sum / scores.length);
}

console.log(average([90, 98, 89, 100, 100, 86, 94]))
console.log(average([90, 98, 89, 100, 100, 86, 94]))