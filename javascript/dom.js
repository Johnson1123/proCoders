console.log(document);

document.title = "Desmond";

let span = document.getElementsByTagName("p");
console.log(span.length);

span[0].innerHTML = "Span element";

let sp = document.getElementsByClassName("span");
let san = document.querySelector("#tf");
let sans = document.querySelectorAll(".span");
console.log(sans);
console.log(san);

let myForm = document.forms[0];

console.log(myForm["fname"].value);
console.log(myForm["lname"].value);
console.log(myForm["email"].value);

console.log(document.head);

const body1 = document.body;

body1.removeChild(myForm);

let create = document.createElement("p");

create.innerHTML = "Add Element";

create.id = "ty";
create.className = "ty";

body1.appendChild(create);

let last = document.getElementById("ty");
last.setAttribute("name", "peaceMaker");
last.removeAttribute("class");

const d = document;
console.log(body1.lastElementChild);
console.log(last.getAttribute("name"));

// class list

const realSpan = d.getElementsByTagName("span")[0];
realSpan.classList.remove("alaja");
realSpan.classList.add("alaja");
realSpan.classList.replace("alaja", "segun");
realSpan.classList.toggle("peace");

console.log(realSpan.classList);
