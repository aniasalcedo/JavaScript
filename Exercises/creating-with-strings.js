const item = document.querySelector(".item");
item.innerHTML = `
<div>
  <h1>Hey how are ya?</h1>
</div>
`;
console.log(item.innerHTML);

//if you want to create html from a string you can either dump it straingt
//into an element with .innerHTML. If you do need to do things like
//add event listeners, change classes, change attributes, you can turn it
//into DOM nodes before it's dumped in with .createContextualFragment()
//where you pass it an actual string, then go ahead and dump it into the
//body or wherever it is that you want.
