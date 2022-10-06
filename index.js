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

//Convert variable to number
let oneNum = Number(oneBtn);
let twoNum = Number(twoBtn);
let threeNum = Number(threeBtn);

console.log(typeof threeBtn.textContent);
console.log(typeof Number(oneBtn));
console.log(typeof Number(twoBtn));
console.log(typeof Number(threeBtn));
console.log(typeof oneNum);
console.log(typeof twoNum);

// 2nd goal - add 1 + 1 to equal 2
// click on number 1
// click on +
// click on 1
// click on =
// number in input should read as 2
