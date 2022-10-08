function setInputValue(btnValue) {
  const screenInput = document.getElementById("number-btn");
  screenInput.value = btnValue;
}

let oneBtn = document.getElementById("one-btn");
oneBtn.addEventListener("click", (e) => {
  console.log(e.target.textContent);
  setInputValue(e.target.textContent);
});

let twoBtn = document.getElementById("two-btn");
twoBtn.addEventListener("click", (e) => {
  console.log(e.target.textContent);
  setInputValue(e.target.textContent);
});

let threeBtn = document.getElementById("three-btn");
threeBtn.addEventListener("click", (e) => {
  console.log(e.target.textContent);
  setInputValue(e.target.textContent);
});

const clearBtn = document.getElementById("ce-btn");
clearBtn.addEventListener("click", (e) => {
  setInputValue(" ");
});

let add = document.getElementById("add");
add.addEventListener("click", (e) => {
  console.log(e.target.textContent);
});

//Convert variable to number (eventually change--only two variables for the two operands in function)
debugger;
let oneNum = Number(oneBtn.innerText);
let twoNum = Number(twoBtn.innerText);
let threeNum = Number(threeBtn.innerText);

console.log(typeof threeBtn.textContent);
console.log(typeof Number(oneBtn));
console.log(typeof Number(twoBtn));
console.log(typeof Number(threeBtn));
console.log(typeof oneNum);
console.log(typeof twoNum);
console.log(typeof threeNum);
//add two "number" variables together
console.log("oneNum + twoNum: ", oneNum + twoNum);
console.log(Number(oneBtn) + Number(twoBtn));

// 2nd goal - add 1 + 1 to equal 2
// click on number 1
// click on +
// click on 1
// click on =
// number in input should read as 2

//**create two variables for two operands, not variable for every single number**
