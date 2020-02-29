//traversing means going up, down, over...

const wes = document.querySelector(".wes"); //select "p" element with "wes" class

// console.log(wes.children);
// console.log(wes.firstElementChild);
// console.log(wes.lastElementChild);
// console.log(wes.previousElementSibling);
// console.log(wes.nextElementSibling);
// console.log(wes.parentElement);

const p = document.createElement("p");
p.textContent = "I will be removed";
document.body.appendChild(p);

p.remove();

console.log(p);

document.body.appendChild(p);
//removing elements.

//$0.remove() - remove sth eniterly from the DOM
