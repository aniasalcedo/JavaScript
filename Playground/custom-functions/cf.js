//Function definition

function calculateBill(billAmount, taxRate = 0.13, tipRate = 0.15) {
  //this is the function body
  console.log("Running the function!");
  const total = billAmount + billAmount * taxRate + billAmount * tipRate;
  return total;
}
// Function Call or "run"
const myTotal = calculateBill(100, 0.13);
console.log(myTotal);

const aniaTotal = 500;
const aniaTaxRate = 0.3;
const myTotal2 = calculateBill(aniaTotal, aniaTaxRate);
console.log(myTotal2);

//console.log(`Your total is $${myTotal}`);
//console.log(`Your total is $${calculateBill()}`);

function sayHiTo(firstName) {
  return `Hello ${firstName}`;
}
const greeting = sayHiTo("Ania");
console.log(greeting);

const myTotal3 = calculateBill(20 + 20, 0.13);

function doctorize(name) {
  return `Dr. ${name}`;
}

function yell(name = "") {
  return `HEY ${name.toUpperCase()}`;
}
