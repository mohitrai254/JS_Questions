let arr = [1, 2, 3, 4, 2, 5, 2, 3];
let newArr = [];

function removeDuplicate(arr) {
  for (let i = 0; i < arr.length; i++) {
    let isDuplicate = false;
    for (let j = 0; j < newArr.length; j++) {
      if (arr[i] === arr[j]) {
        isDuplicate = true;
        break;
      }
    }
    if (isDuplicate == false) {
      newArr.push(arr[i]);
    }
  }
}

removeDuplicate(arr);
console.log(newArr);

//Using inbuilt function
// let unique = [...new Set(arr)];
// console.log(unique);
