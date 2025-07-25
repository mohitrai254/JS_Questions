let arr = [1, 1, 2, 3, 3, 3];
let arrObj = {};

function characterCount(arr) {
  for (let el of arr) {
    if (arrObj[el]) {
      arrObj[el]++;
    } else {
      arrObj[el] = 1;
    }
  }
}

characterCount(arr);
console.log(arrObj);
