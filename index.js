let firstOperand = null;
let secondOperand = null;
let symbol = "";
const screenInput = document.getElementById("screen-input");

console.log("operand values: ", firstOperand, secondOperand);

function setInputValue(btnValue) {
  let inputValue = Number(btnValue);

  screenInput.value = inputValue;

  if (firstOperand == null) {
    firstOperand = inputValue;
  } else if (secondOperand == null) {
    secondOperand = inputValue;
  }
}

function calculateDecision() {
  let total = 0;
  switch (symbol) {
    case "+":
      screenInput.value = firstOperand + secondOperand;
      console.log("total: ", total);
      break;
  }
}

let oneBtn = document.getElementById("one-btn");
oneBtn.addEventListener("click", (e) => {
  setInputValue(e.target.textContent);
  console.log(e.target.textContent);
});

let twoBtn = document.getElementById("two-btn");
twoBtn.addEventListener("click", (e) => {
  setInputValue(e.target.textContent);
  console.log(e.target.textContent);
});

let threeBtn = document.getElementById("three-btn");
threeBtn.addEventListener("click", (e) => {
  setInputValue(e.target.textContent);
  console.log(e.target.textContent);
});

const clearBtn = document.getElementById("ce-btn");
clearBtn.addEventListener("click", (e) => {
  setInputValue("0");
  firstOperand = null;
  secondOperand = null;
  symbol = "";
});

const add = document.getElementById("add");
add.addEventListener("click", (e) => {
  symbol = e.target.textContent;
  console.log("Addition Symbol: ", symbol);
});

const equals = document.getElementById("equals");
equals.addEventListener("click", calculateDecision);

//Convert variable to number (eventually change--only two variables for the two operands in function)
debugger;

//add two "number" variables together
//console.log("oneNum + twoNum: ", oneNum + twoNum);

//10/9/222
// create function that handles calculation type, takes in symbol as input
// add switch statement that decides which calculation to do
// for each type of calculation(eg. +, - etc), create a function that performs arithmetic
// one function for adding, subtracting, multiplying, dividing
