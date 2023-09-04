// const car = {
//   name: "Venza",
//   model: "2020",
//   color: "red",
// };

// const person = {
//   firstName: "Yemi",
//   lastName: "Alade",
//   complextion: "Fair",
//   age: 27,
//   height: 56,
//   myName: function () {
//     console.log(
//       `my name ${this.firstName} ${this.lastName}, I am ${this.age} years old`
//     );
//   },
// };

// const person = {
//   firstName: "Yemi",
//   lastName: "Alade",
//   complextion: "Fair",
//   age: 27,
//   height: 56,
//   myName: function () {
//     console.log(
//       `my name ${this.firstName} ${this.lastName}, I am ${this.age} years old`
//     );
//   },

// Fetch and Api

// const url = `https://dummyjson.com/quotes`;

// const ourIndex = Math.floor(Math.random() * 31 + 1);
// console.log(ourIndex);

// const myOuput = document.getElementById("result");

// fetch(url)
//   .then((res) => res.json())
//   .then((data) => {
//     myOuput.innerHTML = data.quotes[ourIndex].quote;
//     console.log(data.quotes[ourIndex]);
//   });

const url = `https://dummyjson.com/quotes`;

const ourIndex = Math.floor(Math.random() * 31 + 1);
// console.log(ourIndex);

// const myOuput = document.getElementById("result");

// fetch(url)
//   .then((res) => res.json())
//   .then((data) => {
//     data.quotes.forEach((element) => {
//       console.log(element.quote);
//     });
//   });

// setInterval(() => {
//   fetch(url)
//     .then((res) => res.json())
//     .then((data) => {
//       // myOuput.innerHTML = data.quotes[ourIndex].quote;
//       console.log(data.quotes[ourIndex]);
//     });
// }, 2000);
