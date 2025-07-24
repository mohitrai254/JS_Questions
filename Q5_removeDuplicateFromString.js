let str = "HelloWorld";
let newStr = "";

function removeDuplicate(str) {
  for (let i = 0; i < str.length; i++) {
    let isDuplicate = false;
    for (let j = 0; j < newStr.length; j++) {
      if (str[i] === newStr[j]) {
        isDuplicate = true;
        break;
      }
    }
    if (isDuplicate == false) {
      newStr = newStr + str[i];
    }
  }
  return newStr;
}

removeDuplicate(str);
console.log(newStr);
