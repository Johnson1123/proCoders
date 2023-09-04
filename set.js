const url = `https://dummyjson.com/quotes`;

// setInterval(() => {
//   const randomNum = Math.floor(Math.random() * 30) + 1;
//   fetch(url)
//     .then((res) => res.json())
//     .then((data) => {
//       document.getElementById("result").innerHTML =
//         data.quotes[randomNum].quote;
//     });
// },3000);

// setTimeout(() => {
//   const randomNum = Math.floor(Math.random() * 30) + 1;
//   fetch(url)
//     .then((res) => res.json())
//     .then((data) => {
//       document.getElementById("result").innerHTML =
//         data.quotes[randomNum].quote;
//     });
// }, 5000)7

// const eventTime = new Date("7 30, 2023");

// function timer() {
//   const now = new Date();

//   const diff = eventTime.getTime() - now.getTime();

//   const day = Math.floor(diff / (1000 * 60 * 60 * 24));
//   const hours = Math.floor((diff % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60));
//   const minutes = Math.floor((diff % (60 * 60 * 1000)) / (1000 * 60));
//   const seconds = Math.floor((diff % (60 * 1000)) / 1000);
//   console.log(day);
// }
// timer();
