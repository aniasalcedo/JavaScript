const butts = document.querySelector(".butts");
const coolButton = document.querySelector(".cool");

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

const buyButtons = document.querySelectorAll("button.buy");

function handleBuyButtonClick(event) {
  const button = event.target;
  // console.log(button.textContent);
  // console.log(parseFloat(event.target));
  console.log(event.currentTarget); //used more often
}

buyButtons.forEach(function(buyButton) {
  buyButton.addEventListener("click", handleBuyButtonClick);
});
