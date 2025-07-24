let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let newArr = [];

for (let i = 0; i < arr.length; i++) {
  newArr.push(arr[i]);

  if ((i + 1) % 3 == 0) {
    newArr.push(0);
  }
}

console.log(newArr);
