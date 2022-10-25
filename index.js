let firstOperand = null;
let secondOperand = null;
let symbol = "";
let lastButton = "";
let hasDecimal = false;
const screenInput = document.getElementById("screen-input");

console.log("operand values: ", firstOperand, secondOperand);

function setInputValue(btnValue) {
  if (lastButton === "operator" || secondOperand) {
    if (secondOperand === null) {
      secondOperand = btnValue;
    } else {
      secondOperand += btnValue;
    }
    screenInput.value = secondOperand;
  } else {
    if (firstOperand == null) {
      firstOperand = btnValue;
    } else {
      firstOperand += btnValue;
    }
    screenInput.value = firstOperand;
  }
  lastButton = "number";
}

//Function to complete Operations:
function calculateDecision() {
  let total = 0;
  switch (symbol) {
    case "+":
      screenInput.value = parseFloat(firstOperand) + parseFloat(secondOperand);
      console.log("total: ", total);
      break;
    case "-":
      screenInput.value = firstOperand - secondOperand;
      console.log("total: ", total);
      break;
    case "*":
      screenInput.value = firstOperand * secondOperand;
      break;
    case "÷":
      const result = firstOperand / secondOperand;
      screenInput.value = result.toFixed(3);
      console.log("total: ", total);
      break;
  }
  lastButton = "";
}

//Make one class for all numbers

let numberBtn = document.getElementsByClassName("number");
for (let i = 0; i < numberBtn.length; i++) {
  numberBtn[i].addEventListener("click", (e) => {
    setInputValue(e.target.textContent);
    console.log(e.target.textContent);
  });
}

//code for decimal

const decimal = document.getElementById("decimal");
decimal.addEventListener("click", (e) => {
  setInputValue(e.target.textContent);
});

const clearBtn = document.getElementById("ce-btn");
clearBtn.addEventListener("click", (e) => {
  firstOperand = null;
  secondOperand = null;
  symbol = "";
  screenInput.value = "0";
  lastButton = "";
});

const add = document.getElementById("add");
add.addEventListener("click", (e) => {
  symbol = e.target.textContent;
  lastButton = "operator";

  if (firstOperand && secondOperand) {
    screenInput.value = parseFloat(firstOperand) + parseFloat(secondOperand);
    firstOperand = screenInput.value;
    secondOperand = null;
  }
  console.log("Addition Symbol: ", symbol);
});

const subtract = document.getElementById("subtract");
subtract.addEventListener("click", (e) => {
  if (symbol != "-") {
    calculateSymbol(symbol);
    symbol = e.target.textContent;
    firstOperand = screenInput.value;
    secondOperand = null;
    lastButton = "operator";
  } else if (firstOperand && secondOperand) {
    calculateSymbol(symbol);
    firstOperand = screenInput.value;
    secondOperand = null;
    lastButton = "operator";
  }
  console.log("Subtraction Symbol: ", symbol);
});

const multiply = document.getElementById("multiply");
multiply.addEventListener("click", (e) => {
  if (symbol != "*") {
    calculateSymbol(symbol);
    symbol = e.target.textContent;
    firstOperand = screenInput.value;
    secondOperand = null;
    lastButton = "operator";
  } else if (firstOperand && secondOperand) {
    calculateSymbol(symbol);
    firstOperand = screenInput.value;
    secondOperand = null;
    lastButton = "operator";
  }
  console.log("Multiplication Symbol: ", symbol);
});

const divide = document.getElementById("divide");
divide.addEventListener("click", (e) => {
  if (symbol != "÷") {
    calculateSymbol(symbol);
    symbol = e.target.textContent;
    firstOperand = screenInput.value;
    secondOperand = null;
    lastButton = "operator";
  } else if (firstOperand && secondOperand) {
    calculateSymbol(symbol);
    firstOperand = screenInput.value;
    secondOperand = null;
    lastButton = "operator";
  }
  console.log("Division Symbol: ", symbol);
});

const equals = document.getElementById("equals");
equals.addEventListener("click", calculateDecision);

function calculateSymbol(lastSymbol) {
  switch (lastSymbol) {
    case "+":
      screenInput.value = parseFloat(firstOperand) + parseFloat(secondOperand);
      break;
    case "-":
      screenInput.value = parseFloat(firstOperand) - parseFloat(secondOperand);
      break;
    case "÷":
      screenInput.value = parseFloat(firstOperand) / parseFloat(secondOperand);
      break;
    case "*":
      screenInput.value = parseFloat(firstOperand) * parseFloat(secondOperand);
      break;
  }
}
