let str = "helloWorldHowAreYou";
let snakeStr = "";

function snakeCase(str) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] >= "A" && str[i] <= "Z") {
      snakeStr = snakeStr + "_" + str[i].toLowerCase();
    } else {
      snakeStr = snakeStr + str[i];
    }
  }
}

snakeCase(str);
console.log(snakeStr);
