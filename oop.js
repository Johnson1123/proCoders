const person = {
  age: 23,
  name: "yemi",
  myName: function () {
    return this.name + this.age;
  },
};

let name = "Kunle";

const person1 = {
  age: 40,
  name,
  myName: function () {
    return this.name + this.age;
  },
};

// function myAnotherName() {
//   return person.name + person.age;
// }

// calling property and method
// console.log(person.myName());
// console.log(window.myAnotherName());
// console.log(person1.name);
// console.log(person.age);
// console.log(person);

// console.log(person1);

// another to call our property
// console.log(person["age"]);

// Object destructure

// const { name, age, myName } = person1;

// console.log(name);
// console.log(age);

// map array and object and object.keys
const arryProps = Object.keys(person);
console.log(arryProps);

arryProps.map((p) => {});

// console.log(arryProps);

// const person1 = Object.assign(person, { complextion: "red" });

// console.log(Object.entries(person)[0]);
