// while (condition) {
//  code that gets executed as long as the condition is true
// }

// let i = 0;
//
// while (i < 10) {
//   console.log(i + 1);
//   i++;
// }

// const names = ["John", "Emma", "jane", "pelume", "helen"];

// while (i < names.length) {
//   console.log(names[i]);
//   i++;
// }

// let notFound = true;

// while (notFound && names.length > 0) {
//   if (names[0] === "jane") {
//     console.log(names[0]);
//     notFound = false;
//   } else {
//     names.shift();
//   }
// }

// const arry = [];
// let n1 = 0;
// let n2 = 1;
// let temp;

// while (arry < 25) {
//   temp = n1 + n2;
//   n1 = n2;
//   n2 = temp;
//   arry.push(temp);
//   i++;
// }
// console.log(arry);

// let result = false;

// while (!result) {
//   const number = prompt("guss from 1 - 5 number");
//   const num = Number(number);
//   const rand = Math.floor(Math.random() * 5) + 1;

//   if (num === rand) {
//     console.log("hurray number match", rand);
//     result = true;
//   }
// }

// do {
//   // code to be executed if the condition is true
// } while (condition);

// let counter = 0;

// do {
//   counter += 5;
//   console.log(counter);
// } while (counter <= 100);

// const arr = [];

// for (i; i < 10; i++) {
//   let sta = i % 2 == 0 ? true : false;
//   arr.push({
//     lesson: "lesson " + i,
//     status: sta,
//   });
// }
// console.log(arr);

// const arr = [];

// for (i; i < 4; i++) {
//   arr.push([]);
//   for (let k = 0; k < 6; k++) {
//     arr[i].push(k);
//   }
// }

// console.log(arr);

// const arr = [];
// let rows = 4;
// let col = 5;
// let counter = 0;

// for (i; i < rows; i++) {
//   arr.push([]);
//   for (let k = 0; k < col; k++) {
//     counter++;
//     arr[i].push(counter);
//   }
// }

// console.table(arr);

// const myTable = [];
// const rows = 4;
// const cols = 7;
// let counter = 0;
// for (let y = 0; y < rows; y++) {
//   let tempTable = [];
//   for (let x = 0; x < cols; x++) {
//     counter++;
//     tempTable.push(counter);
//   }
//   myTable.push(tempTable);
// }
// console.table(myTable);

/* switch (key) {
  case value:
    
    break;

  default:
    break;
}

*/

// let age = 23;
// let name = "sayo";
// let bool = true;
// let nul = null;
// let oic;
// const obj = {
//   age: 23,
//   name: "sayo",
// };
// const array = ["sayo", 23, [34, "seun"]];

// console.log(typeof age);
// console.log(typeof name);
// console.log(typeof bool);
// console.log(typeof array);
// console.log(2 + 3 + "sayo");
// console.log("sayo" + 2 + 3);

// console.log(3 > 2 || 4 > 6);
// console.log(2 > 4 || 4 > 6);

// console.log(3 > 2 && 4 > 6);
// console.log(2 > 4 && 4 > 6);

// console.log(Boolean(oic));

// addSum(7, 8);

// function addSum(a, b) {
//   console.log(a + b);
// }

// minusSum(10, 5);

// const minusSum = function (a, b) {
//   console.log(a - b);
// };
// // addSum(40, 15);
// // addSum(7, 8);

// minusSum(10, 5);

// let name = document.getElementById("name");
// name.value = "Aremu";
// console.log(name.value);

// function show(num) {
//   document.getElementById("name").value += num;
// }
// function add() {
//   document.getElementById("name").value += "+";
// }
// function cal() {
//   let values = document.getElementById("name").value;
//   let result = eval(values);
//   document.getElementById("name").value = result;
// }

// function erase() {
//   document.getElementById("name").value = "";
// }

// console.log(document.forms[1]["desmond"].value;
