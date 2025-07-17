let arr = ["abc", "def", "ghi"];
let output = [];

function capital(arr) {
  for (let i = 0; i < arr.length; i++) {
    let word = arr[i];
    let capitalized = word[0].toUpperCase() + word.slice(1);
    output.push(capitalized);
  }
}

capital(arr);
console.log(output);
