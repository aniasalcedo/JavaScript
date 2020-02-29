const butts = document.querySelector(".butts");
const coolButton = document.querySelector(".cool");
const buyButtons = document.querySelectorAll("button.buy");

function handleClick() {
  console.log("IT GOT CICKED!!!");
}
const hooray = () => console.log("Hoooray!");
// butts.addEventListener("click", function() {
//   console.log("IT GOT CICKED!!!");
// });
//anonymous callback function - they cant be removed!
// go get something(listen for something, go ahead and do something)

butts.addEventListener("click", handleClick);
coolButton.addEventListener("click", hooray);

// Listen on multiple items

function buyItem() {
  console.log("Buying item");
}
buyButtons.forEach(function(buyButton) {
  //this can be called anything, not only buyButton
  console.log("Binding the buy button");
  buyButton.addEventListener("click", buyItem);
});

//arrow function for the handler
//buyButtons.forEarch((button) => {
//    button.addEventListener('click', () => {
//       console.log('You Cliked it');
//    })
//})
