let firstOperand = document.getElementById("screen-input");
let secondOperand = document.getElementById("screen-input");
let mathSymbol = document.getElementById("screen-input");

function setInputValue(btnValue) {
  const screenInput = document.getElementById("screen-input");
  screenInput.value = Number(btnValue);
}

function calculateDecision(mathSymbol) {
  switch (mathSymbol) {
    case "add":
      console.log(firstOperand + secondOperand);
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
});

const add = document.getElementById("add");
add.addEventListener("click", (e) => {
  firstOperand + secondOperand;
  console.log("Addition Symbol: ", e.target.textContent);
});

const equals = document.getElementById("equals");
equals.addEventListener("click", (e) => {
  console.log(e.target.textContent);
});

//Convert variable to number (eventually change--only two variables for the two operands in function)
debugger;

console.log(typeof threeBtn.textContent);
console.log(typeof Number(oneBtn));
console.log(typeof Number(twoBtn));
console.log(typeof Number(threeBtn));
console.log(typeof oneNum);
console.log(typeof twoNum);
console.log(typeof threeNum);
//add two "number" variables together
//console.log("oneNum + twoNum: ", oneNum + twoNum);
console.log(Number(oneBtn) + Number(twoBtn));

// 2nd goal - add 1 + 1 to equal 2
// click on number 1
// click on +
// click on 1
// click on =
// number in input should read as 2
//**create two variables for two operands, not variable for every single number**

//10/9/222
// create function that handles calculation type, takes in symbol as input
// add switch statement that decides which calculation to do
// for each type of calculation(eg. +, - etc), create a function that performs arithmetic
// one function for adding, subtracting, multiplying, dividing
