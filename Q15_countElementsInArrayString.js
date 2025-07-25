let arr = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];
let arrObj = {};
let str = "helloworld";
let strObj = {};

function countArray(arr) {}

function countString(str) {
  for (let char of str) {
    if (strObj[char]) {
      strObj[char]++;
    } else {
      strObj[char] = 1;
    }
  }
}

function countArray(arr) {
  for (let el of arr) {
    if (arrObj[el]) {
      arrObj[el]++;
    } else {
      arrObj[el] = 1;
    }
  }
}

countString(str);
console.log(strObj);

countArray(arr);
console.log(arrObj);
