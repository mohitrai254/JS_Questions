let arr = [2, 5, 3, 24, -3, 1, 9];

let max = 0;
let min = 0;

function maxMinCheck(arr) {
  let max = arr[0];
  let min = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
    if (arr[i] < min) min = arr[i];
  }
  return [max, min];
}

const num = maxMinCheck(arr);
console.log(num);
