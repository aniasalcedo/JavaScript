// global variable. You can access them from any other JS
// that's running on the page, like scrip tag or via the console
const first = "wes";
// it's called "the window" in the browser.
let second = "bos";
// const and let are globally scoped but not attached to the window
// var age = 100;
// var variables are attached to the window object and they are
// globally scoped

// YOU SHOULDNT BE MAKING GLOBAL VARIABLES
// same thing with functions.

function sayHi() {
  console.log("hi!");
}
// ^We can run it from HTML or in console saying widnow.sayHi()
// Anything that is in the global scope is attached to the window object
// with the exception of const and let variables.

// const age = 100;

// function go() {
//   const hair = "blonde";
// }

// go();

// console.log(age);
// console.log(hair);

// function scope
//when variables are created inside of a function
// those variables are only available inside of that function

//block scope
//set of curly brackets {} is reffered to as a block

// if (1 === 1) {
//   var cool = true;
// }

// console.log(cool);

// //
// for (var i = 0; i < 10; i++) {
//   console.log(i);
// }

//scope look-up happens where the functions are defined and not where they are run
const dog = "snickers"; //whatever you passed in as the first argument to the function

function logDog() {
  console.log(dog);
}

function go() {
  const dog = "sunny";
  logDog();
}

go();

// if you create a function inside of a function then just like variables,
// they are going to be scoped inside of the parent function {}
