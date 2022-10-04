function setInputValue(btnValue) {
  const screenInput = document.getElementById("number-btn");
  screenInput.value = btnValue;
}

let oneBtn = document.getElementById("one-btn");
Number(oneBtn);
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

console.log(typeof oneBtn.textContent);
console.log(typeof twoBtn);
console.log(typeof threeBtn);

// 1st goal - create CE(clear) button
// click on any button
// value just clicked should show up in input
// click on CE
// value input should be clear

// 2nd goal - add 1 + 1 to equal 2
// click on number 1
// click on +
// click on 1
// click on =
// number in input should read as 2
