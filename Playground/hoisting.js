// Hoisiting in JS allows you to acces functions and variables before
// they have been created. Two things in JS are hoisted function declarations
// and variable declarations.
/* What does this file do? */
sayHi();
/*How does this file do it?*/
function sayHi() {
  console.log("hey!");
}

// JS takes all your function declarations and while running
// moves them up to the top of the file (so it runs through them first).
// Technically you can then run a function before it exists.

/* var age; */
console.log(age);
var age = 10;
// Variable declarations - before everything runs i will create var age,
// then after running it I will se it's value.
