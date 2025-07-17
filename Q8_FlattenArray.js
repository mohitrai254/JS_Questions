let arr = [1, 2, [3, 4, [5, 6], 7], 8, 9];
let flat = [];

function flatten(arr) {
  for (let el of arr) {
    if (Array.isArray(el)) {
      flatten(el);
    } else {
      flat.push(el);
    }
  }
}

flatten(arr);
console.log(flat);
