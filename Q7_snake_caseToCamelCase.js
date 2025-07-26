let str = "hello_world_how_are_you";
let camelStr = "";

function camelCase(str) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] == "_") {
      i++;
      camelStr = camelStr + str[i].toUpperCase();
    } else {
      camelStr = camelStr + str[i];
    }
  }
}

camelCase(str);
console.log(camelStr);
