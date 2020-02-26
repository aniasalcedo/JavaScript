// function doctorize(firstName) {
//     return `Dr. ${firstName}`;
// }

//anonymous function
// function (firstName) {
//     return `Dr. ${firstName}`;
// }

// //function expression
// const doctorize =  (firstName) {
//     return `Dr. ${firstName}`;
// }

//arrow function
// function inchToCM(inches) {
//   return inches * 2.54;
// }

//anonymous arrow function
// const inchToCM = function(inches) {
//   return inches * 2.54;
// }

// const inchToCM = inches => return inches * 2.54;

// implicit return - all in one line, no return, no curly brackets
// const inchToCM = inches => inches * 2.54;

// function add(a, b = 3) {
//   const total = a + b;
//   return total;
// }

// const add = (a, b = 3) => a + b;

// function makeABaby(first, last) {
//   const baby = {
//     name: `${first} ${last}`,
//     age: 0,
//   };
//   return baby;
// }

// const makeABaby = (first, last) => {
//   const baby = {
//     name: `${first} ${last}`,
//     age: 0,
//   };
//   return baby;
// }

// const makeABaby = (first, last) =>{ name: `${first} ${last}`, age: 0 };

//IIFE - Immediately Invoked Function Expression. you can immidaitely run it by putting parenthesis at the end
// (function() {
//   console.log("Running the Anon function");
//   return "You are cool";
// })();

//
//Methods!!!!!!!!!!!!
//
//a function that lives inside of an object (console.log = console=object, log=function)
const wes = {
  name: "Wes Bos",
  sayHi: function() {
    console.log("Hey Wes");
    return "Hey Wes";
  },
  //   short hand method
  yellHi() {
    console.log("HEY WESSSSS");
  },
  //   Arrow function
  whisperHi: () => {
    console.log("hhii Wes im a mouse");
  },
};

//Callback functions
//click callback
const button = document.querySelector(".clickMe");

function handleClick() {
  console.log("Great Clicking!");
}

button.addEventListener(`click`, function() {
  console.log("Nice job!");
});

//timer callback
setTimeout(wes.yellHi, 1000);
