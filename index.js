let firstOperand = null;
let secondOperand = null;
let symbol = "";
let lastButton = "";
const screenInput = document.getElementById("screen-input");

console.log("operand values: ", firstOperand, secondOperand);

function setInputValue(btnValue) {
  //let inputValue = btnValue;
  if (lastButton == "operator" || secondOperand) {
    if (secondOperand == null) {
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
      screenInput.value = firstOperand / secondOperand;
      break;
  }
  lastButton = "";
}

//Make one class for all numbers

debugger;

let numberBtn = document.getElementsByClassName("number");
for (let item of numberBtn) {
  numberBtn.addEventListener("click", (e) => {
    setInputValue(e.target.textContent);
    console.log(e.target.textContent);
  });
}
// let oneBtn = document.getElementById("one-btn");
// oneBtn.addEventListener("click", (e) => {
//   setInputValue(e.target.textContent);
//   console.log(e.target.textContent);
// });

// let twoBtn = document.getElementById("two-btn");
// twoBtn.addEventListener("click", (e) => {
//   setInputValue(e.target.textContent);
//   console.log(e.target.textContent);
// });

// let threeBtn = document.getElementById("three-btn");
// threeBtn.addEventListener("click", (e) => {
//   setInputValue(e.target.textContent);
//   console.log(e.target.textContent);
// });

// let fourBtn = document.getElementById("four-btn");
// fourBtn.addEventListener("click", (e) => {
//   setInputValue(e.target.textContent);
//   console.log(e.target.textContent);
// });

// let fiveBtn = document.getElementById("five-btn");
// fiveBtn.addEventListener("click", (e) => {
//   setInputValue(e.target.textContent);
//   console.log(e.target.textContent);
// });

// let sixBtn = document.getElementById("six-btn");
// sixBtn.addEventListener("click", (e) => {
//   setInputValue(e.target.textContent);
//   console.log(e.target.textContent);
// });

// let sevenBtn = document.getElementById("seven-btn");
// sevenBtn.addEventListener("click", (e) => {
//   setInputValue(e.target.textContent);
//   console.log(e.target.textContent);
// });

// let eightBtn = document.getElementById("eight-btn");
// eightBtn.addEventListener("click", (e) => {
//   setInputValue(e.target.textContent);
//   console.log(e.target.textContent);
// });

// let nineBtn = document.getElementById("nine-btn");
// nineBtn.addEventListener("click", (e) => {
//   setInputValue(e.target.textContent);
//   console.log(e.target.textContent);
// });

// let zeroBtn = document.getElementById("zero-btn");
// zeroBtn.addEventListener("click", (e) => {
//   setInputValue(e.target.textContent);
//   console.log(e.target.textContent);
// });

// const clearBtn = document.getElementById("ce-btn");
// clearBtn.addEventListener("click", (e) => {
//   firstOperand = null;
//   secondOperand = null;
//   symbol = "";
//   screenInput.value = "0";
// });

const add = document.getElementById("add");
add.addEventListener("click", (e) => {
  symbol = e.target.textContent;
  lastButton = "operator";
  console.log("Addition Symbol: ", symbol);
});

const subtract = document.getElementById("subtract");
subtract.addEventListener("click", (e) => {
  symbol = e.target.textContent;
  lastButton = "operator";
  console.log("Subtraction Symbol: ", symbol);
});

const multiply = document.getElementById("multiply");
multiply.addEventListener("click", (e) => {
  symbol = e.target.textContent;
  lastButton = "operator";
  console.log("Multiplication Symbol: ", symbol);
});

const divide = document.getElementById("divide");
divide.addEventListener("click", (e) => {
  symbol = e.target.textContent;
  lastButton = "operator";
  console.log("Division Symbol: ", symbol);
});

const equals = document.getElementById("equals");
equals.addEventListener("click", calculateDecision);
