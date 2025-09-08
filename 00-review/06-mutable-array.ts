let score = [1, 2, 3, 4];
let scoreCopy = score;

console.log(score);
console.log(scoreCopy);

score.push(5);

console.log(score);
console.log(scoreCopy);

score[0] = 10;

console.log(score);
console.log(scoreCopy);

/* ----------------------------------- -- ----------------------------------- */
let points = [1, 2, 3, 4];
// let pointsCopy = [points[0], points[1], points[2], points[3]];
let pointsCopy = [...points];

console.log(points);
console.log(pointsCopy);

points.push(5);

console.log(points);
console.log(pointsCopy);
