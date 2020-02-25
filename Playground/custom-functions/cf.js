//Function definition
function calculateBill() {
  //this is the function body
  console.log("Running the function!");
  const total = 100 * 1.13;
  return total;
}
// Function Call or "run"
calculateBill();

const myTotal = calculateBill();
console.log(`Your total is $${myTotal}`);
