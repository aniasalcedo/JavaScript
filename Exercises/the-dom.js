// const heading = document.querySelector("h2"); // w nawiasach also can be a class

// console.dir(heading.innerHTML);
//textContent shows us everything - the text and included script tags if
//there is any vs. innerText will only show us the text that is
//readable for a human being - it is aware of styling.
//heading.innerHTML - includes inner HTML tags.
//heading.outerHTML - includes outer HTML tags.

//CLASSES!
const pic = document.querySelector(`.nice`);
pic.classList.add("dog");
console.log(pic.classList);

pic.alt = "Cute Puppy"; //for people who use screen readers.
//setter above
//getter below
console.log(pic.alt);

pic.setAttribute("alt", "Really Cute Puppy");
console.log(pic.getAttribute("alt"));
