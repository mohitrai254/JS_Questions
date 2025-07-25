let arr = [6, 3, 4, 1, 9, 8];

function secondMaxMin(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
    }
  }
  return [arr[arr.length - 2], arr[1]];
}

const maxMin = secondMaxMin(arr);
console.log(maxMin);
