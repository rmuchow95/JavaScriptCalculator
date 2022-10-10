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

  if ((inputValue = Number())) {
    inputValue = firstOperand + secondOperand;
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

let fourBtn = document.getElementById("four-btn");
fourBtn.addEventListener("click", (e) => {
  setInputValue(e.target.textContent);
  console.log(e.target.textContent);
});

let fiveBtn = document.getElementById("five-btn");
fiveBtn.addEventListener("click", (e) => {
  setInputValue(e.target.textContent);
  console.log(e.target.textContent);
});

let sixBtn = document.getElementById("six-btn");
sixBtn.addEventListener("click", (e) => {
  setInputValue(e.target.textContent);
  console.log(e.target.textContent);
});

let sevenBtn = document.getElementById("seven-btn");
sevenBtn.addEventListener("click", (e) => {
  setInputValue(e.target.textContent);
  console.log(e.target.textContent);
});

let eightBtn = document.getElementById("eight-btn");
eightBtn.addEventListener("click", (e) => {
  setInputValue(e.target.textContent);
  console.log(e.target.textContent);
});

let nineBtn = document.getElementById("nine-btn");
nineBtn.addEventListener("click", (e) => {
  setInputValue(e.target.textContent);
  console.log(e.target.textContent);
});

let zeroBtn = document.getElementById("zero-btn");
zeroBtn.addEventListener("click", (e) => {
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

//debugger;

//console.log("oneNum + twoNum: ", oneNum + twoNum);

//10/9/222
// create function that handles calculation type, takes in symbol as input
// add switch statement that decides which calculation to do
// for each type of calculation(eg. +, - etc), create a function that performs calculation--one function for adding, subtracting, multiplying, dividing
