let arr = [
  { sub: "Maths", marks: 60 },
  { sub: "Science", marks: 70 },
  { sub: "English", marks: 90 },
];

let sum = 0;

function calcSum(arr) {
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i].marks;
  }
  return sum;
}

console.log(calcSum(arr));
