let output = document.getElementById("result");
// let getName = document.getElementsByTagName("div");
// let queryName = document.querySelector("div");
// let queryAllName = document.querySelectorAll("div");

// output.classList.add("yemi");
// console.log(output);
// // console.log(queryAllName);

// let open = document.getElementById("open");
// let info = document.getElementById("info");

const con = document.createElement("p");
con.innerHTML = "Created Element";

output.appendChild(con);
// open.addEventListener("click", () => info.classList.remove("info"));
open.addEventListener("click", () => info.classList.toggle("info"));
