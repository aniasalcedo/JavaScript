const people = [
  { name: "Wes", cool: true, country: "Canada" },
  { name: "Scott", cool: true, country: "Merica" },
  { name: "Snickers", cool: false, country: "Dog Country" },
];

people.forEach((person, index) => {
  console.log(person.name);
});

people.forEach((person, index) => {
  if (person.name === "Wes") {
    console.error("Dumb name");
  }
});

// Console Methods

// Callstack

// Grabbing Elements
$0; // will show whatever we select on a page using inspect/console
$1; // will show an element we selected before that
// Breakpoints
debugger; //when our console is open it will pause javascript from running
// Scope

// Network Requests

// Break On Attribute
// right click on a button - attribue modification (helps us find things in our code)
// Some Setup Code

function doctorize(name) {
  return `Dr. ${name}`;
}

function greet(name) {
  doesntExist();
  return `Hello ${name}`;
}

function go() {
  const name = doctorize(greet("Wes"));
  console.log(name);
}

const button = document.querySelector(".bigger");
button.addEventListener("click", function(e) {
  const newFontSize =
    parseFloat(getComputedStyle(e.currentTarget).fontSize) + 1;
  e.currentTarget.style.fontSize = `${newFontSize}px`;
});

// A Dad joke fetch
async function fetchDadJoke() {
  const res = await fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "text/plain",
    },
  });
  const joke = await res.text();
  console.log(joke);
  return joke;
}
