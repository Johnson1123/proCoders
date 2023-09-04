// alert("Welcome to Javascript");
// document.getElementById("demo").innerHTML = "Hello Javascript";
// console.log("OluwaSegun");

// let age = 23;
// age = 25;

// console.log(Age);

// const cart = [
//   {
//     price: 200,
//     quantity: 2,
//   },
//   {
//     price: 1000,
//     quantity: 1,
//   },
//   {
//     price: 100,
//     quantity: 2,
//   },
// ];

// const sum = () => {
//   let acc = 0;
//   for (const item of cart) {
//     acc = acc + item.price * item.quantity;
//   }
//   return acc;
// };

// console.log(sum());

// const sum1 = cart.reduce((preValue, currentValue) => {
//   return preValue + currentValue.price * currentValue.quantity;
// }, 0);

// console.log(sum1);

// const items = document.getElementsByClassName("item");
// const ir = document.getElementsByClassName("item");

// console.log(ir);

// const selectedElement = document.getElementById("demo");
// const ulElement = document.getElementById("ul");

// const creatAlert = () => {
//   alert("Welcome to Our mist");
// };
// const creatLog = () => {
//   console.log("Welcome to Console");
// };

// // advantage of addeventlistener
// selectedElement.addEventListener("click", creatAlert);
// selectedElement.addEventListener("click", creatLog);

// // remove EventListner
// setTimeout(
//   () => selectedElement.removeEventListener("click", creatAlert),
//   1000
// );

// self Click element
// setTimeout(() => selectedElement.click(), 2000);

// how to clear all children of an element
// const clearAll = () => {
//   let elements = ulElement.children;
//   let arrElements = Array.from(elements);

// or using querySelectorAll
// let arrElements = document.querySelectorAll(".list");

//   arrElements.forEach((element) => element.remove());
// };

// selectedElement.addEventListener("click", clearAll);

// window.addEventListener("keydown", function (e) {
// const insert = document.getElementById("demo");
// const obj = {
//   "e.key": e.key,
//   "e.code": e.code,
//   "e.keyCode": e.keyCode,
// };
// for (const key in obj) {
//   const div = document.createElement("div");
//   const small = document.createElement("small");
//   const keyValue = document.createTextNode(key);
//   const valueText = document.createTextNode(obj.key);
//   small.appendChild(keyValue);
//   div.appendChild(small);
//   div.appendChild(valueText);
//   insert.appendChild(div);
// }
// });

// const arr = ["Sayo", "Desmond", "Peace", "Alaja"];
// let i = 0;
// while (i < arr.length) {
//   if (arr[i] == "Desmond") {
//     console.log("Found Him");
//   }
//   i++;
// }

// let arrNum = [];

// while (i < 100) {
//   arrNum.push(i);
//   i++;
// }

// console.log(arrNum);

// const arr = ["a", "b", "c", "d", "e", "s"];
// const arr2 = [];
// let k = 0;

// for (let i = 0; i < arr.length; i++) {
//   let compare = arr[i];
//   for (let k = 0; k < arr.length; k++) {
//    if(compare == arr)
//   }
// }

// const nums = [20, 30, 40, 50, 60];

// for (let num of nums) {
//   console.log(num + 10);
// }

// let initial = [0, 1];

// for (let i = 0; i < 100; i++) {
//   let sum;
//   if (initial.length > 1) {
//     sum = initial[initial.length - 2] + initial[initial.length - 1];
//     initial.push(sum);
//   }
// }
// console.log(initial);

// const table = [];
// for (let i = 0; i < 10; i++) {
//   table.push([]);
//   for (let k = 1; k < 10; k++) {
//     console.log(i);
//     table[i].push(i * k);
//   }
// }
// console.table(table);

const user = [
  {
    name: "Desmond",
    age: 30,
    heigth: 80,
    complextion: "light",
  },
  {
    name: "peace",
    age: 36,
    heigth: 90,
    complextion: "dark",
  },
];

// localStorage.setItem("user", JSON.stringify(user));
// localStorage.setItem("class", JSON.stringify({ javascript: "es6" }));
// localStorage.removeItem("class");
// localStorage.clear();

// console.log(JSON.parse(localStorage.getItem("class")));

// let url = "https://dummyjson.com/products";

// const getUser = () => {
//   fetch(url)
//     .then((res) => res.json())
//     .then((data) =>
//       localStorage.setItem("products", JSON.stringify(data.products))
//     );
// };

// getUser();

// const products = JSON.parse(localStorage.getItem("products"));

// let elementS = document.getElementById("container");

// products.map((item, index) => {
//   elementS.innerHTML += `
//   <img src=${item.images[1]} />
//   <p>${item.brand}  ${index}</p>
//   `;
// });

// console.log(products);

// const getUsers = () => {
//   fetch("./data.json")
//     .then((res) => res.json())
//     .then((data) => console.log(data));
// };

// getUsers();

// fetch({
//   method: "POST",
//   headers: { "Content-Type": "application/json" },
//   body: JSON.stringify({
//     title: "BMW Pencil",
//     /* other product data */
//   }),
// })
//   .then((res) => res.json())
//   .then(console.log);

// const addProduct = () => {
//   try {
//     fetch(
//       "https://find-any-ip-address-or-domain-location-world-wide.p.rapidapi.com/iplocation",
//       {
//         method: "POST",
//         headers: {
//           "Content-type": "application/json",
//         },
//         body: JSON.stringify({
//           name: "peace girl",
//           image:
//             "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
//           desc: "White watcher",
//         }),
//       }
//     )
//       .then((res) => res.json())
//       .then((data) => console.log(data));
//   } catch (err) {
//     console.log(err.message);
//   }
// };

// addProduct();

const arry = [12, 45, 67, 89, 90];

const newArr = arry.filter((item) => item > 50);

console.log(newArr);

const users = [
  {
    name: "Desmon Opakan",
    age: 90,
    weight: 60,
    status: "online",
  },
  {
    name: "Johnson John",
    age: 50,
    weight: 70,
    status: "offline",
  },
  {
    name: "Segun Olayinka",
    age: 50,
    weight: 80,
    status: "online",
  },
  {
    name: "Peace Maker",
    age: 50,
    weight: 40,
    status: "online",
  },
];

const online = users.filter((item) => item.status == "online");
console.log(online);
users.forEach((item) => console.log(item));
