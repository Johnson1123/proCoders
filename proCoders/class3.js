// function
// function declaration
// function sum(a, b) {
//   document.getElementById("result").innerHTML = a + b;
// }
function BMI() {
  let h = document.getElementById("num1").value;
  let w = document.getElementById("num2").value;

  const res = w / h ** 2;
  return res;
  document.getElementById("result").innerHTML = res;
}

const result = BMI();
// sum(3, 5);
// function expression

// const sum = function () {};


