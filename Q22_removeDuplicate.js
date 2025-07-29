let a = [1, 2, 3, 4, 5];
let b = [5, 3, 7, 8, 9];

let arr = [];

for (let i = 0; i < a.length; i++) {
  arr.push(a[i]);
}

for (let j = 0; j < b.length; j++) {
  if (!arr.includes(b[j])) {
    arr.push(b[j]);
  }
}

// let arr = [...new Set([...a, ...b])];
console.log(arr);
