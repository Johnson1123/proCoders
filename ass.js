let arr = [0, 1];
const arr2 = [];
let i = 0;

while (i < 100) {
  let sum;
  if (arr.length > 1) {
    sum = arr[arr.length - 1] + arr[arr.length - 2];
    arr.push(sum);
  }
  i++;
}
console.log(arr);
