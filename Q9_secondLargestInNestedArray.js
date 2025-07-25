let arr = [1, 4, [8, 6, [12, 16], 13], 21];
let flatten = [];

function secondLargestFlatten(arr) {
  for (let el of arr) {
    if (Array.isArray(el)) {
      secondLargestFlatten(el);
    } else {
      flatten.push(el);
    }
  }
}

secondLargestFlatten(arr);
let sorted = flatten.sort((a, b) => a - b);
console.log(sorted);
console.log(flatten[flatten.length - 2]);
