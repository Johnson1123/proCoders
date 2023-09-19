let name2 = "Joe";
console.log(window);

// window.alert("Hello world");

const obj = {
  fname: "samuel",
  lname: "Kenny",
  age: 22,
  car: {
    Name: "volvo",
    model: 1991,
    price: 1,
  },
  netWorth: 25,
  wife: "salawa",
  shopplist: ["garri", "soya", "weed"],
  fullName: function () {
    return obj.fname + obj.lname;
  },
};

// document.getElementById("result").innerHTML = obj.car;
// obj.name = "Java";
// obj.food = "Eba";

// console.log(obj.hasOwnProperty("age"));
// console.log(obj.shopplist[2]);
// console.log(obj.fname);
// console.log(obj.food);

// console.log(Object.keys(obj));
// console.log(Object.values(obj));
// console.log(Object.entries(obj));
// console.log(obj.fullName());

let fname = "samual";
let lname = "Kenny";

console.log(`${fname} ${lname} came late today`);
