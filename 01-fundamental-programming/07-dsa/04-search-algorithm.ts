/* --------------------------------- Linear --------------------------------- */
const studentName = ["Andi", "Cobra", "Rudy", "Golden", "Boy"];

function searchStudent(studentArray: string[], studentTarget: string) {
  for (let i = 0; i < studentArray.length; i++) {
    if (studentArray[i] === studentTarget) {
      return i;
    }
  }

  return -1;
}

console.log(searchStudent(studentName, "Rudy"));
console.log(searchStudent(studentName, "Paris"));

/* --------------------------------- Binary --------------------------------- */
function binarySearch(arrayOfNums: number[], target: number): number {
  let left: number = 0;
  let right: number = arrayOfNums.length - 1;
  let mid = Math.floor((left + right) / 2);

  while (left <= right) {
    if (arrayOfNums[mid] === target) {
      return mid;
    } else if (target > arrayOfNums[mid]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }

    mid = Math.floor((left + right) / 2);
  }

  return -1;
}

console.log(binarySearch([10, 20, 30, 40], 100));
console.log(binarySearch([10, 20, 30, 40], 30));
