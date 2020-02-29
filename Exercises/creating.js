const myParagraph = document.createElement("p");
myParagraph.textContent = "I am a P";
myParagraph.classList.add("special");
console.log(myParagraph);

const myImage = document.createElement("img");
myImage.src = `https://picsum.photos/500`;
myImage.alt = "Nice photo";
console.log(myImage);

const myDiv = document.createElement("div");
myDiv.classList.add("wrapper");
console.log(myDiv);

myDiv.appendChild(myParagraph);
myDiv.appendChild(myImage);
document.body.appendChild(myDiv);

const heading = document.createElement("h2");
heading.textContent = "Cool Things";

myDiv.insertAdjacentElement("afterbegin", heading); //or before begin for another result
//insert something above

{
  /* <ul>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
</ul>; */
}

const list = document.createElement("ul");
const li = document.createElement("li");
li.textContent = "three";
list.appendChild(li);

document.body.insertAdjacentElement("afterbegin", list);

const li5 = document.createElement("li5");
li5.textContent = "five";
list.append(li5);

const li1 = li5.cloneNode(true); //by adding true it also copies the text
li1.textContent = "one";
list.insertAdjacentElement("afterbegin", li1);
