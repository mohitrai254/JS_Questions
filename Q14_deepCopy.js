let original = [1, [2, 3], 4, 5];

function deepCopy(arr) {
  let deep = JSON.parse(JSON.stringify(arr));
  return deep;
}

const newArray = deepCopy(original);

newArray[1][1] = 20;
console.log(newArray);
console.log(original);
