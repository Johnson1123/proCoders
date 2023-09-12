// let text = "";
// let text = " ";
// let text = -1.5;
// let text = [];
// let text = {};
// console.log(Boolean(5 !== "5"));
function handleSubmit(e) {
  e.preventDefault();
  let age = document.getElementById("age").value;
  let name = document.getElementById("name").value;
  // if (age < 18) {
  //   console.log("Can't Vote");
  // } else {
  //   console.log("can vote");
  // }
  // if (age < 18) {
  //   console.log("Can't Vote");
  // } else if (age > 60) {
  //   console.log("You are too old");
  // } else {
  //   console.log("can vote");
  // }

  // if (name == "" || name.length < 5) {
  //   console.log("name not valid");
  // }

  const error = document.getElementById("error");
  switch (name) {
    case "":
      error.innerHTML = "userName can not be empty";
      break;
    case "raraq":
      error.innerHTML = "userName cannot less 3";
      break;
    default:
      error.innerHTML = "Good";
      break;
  }
}
document.forms[0].addEventListener("submit", handleSubmit);
