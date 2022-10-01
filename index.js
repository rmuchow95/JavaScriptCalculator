const oneBtn = document.getElementById("one-btn");

function setInputValue(btnValue) {
  const screenInput = document.getElementById("number-btn");
  screenInput.value = btnValue;
}

oneBtn.addEventListener("click", (e) => {
  console.log(e.target.textContent);
  setInputValue(e.target.textContent);
});

const twoBtn = document.getElementById("two-btn");
twoBtn.addEventListener("click", (e) => {
  console.log(e.target.textContent);
  setInputValue(e.target.textContent);
});

const threeBtn = document.getElementById("three-btn");
threeBtn.addEventListener("click", (e) => {
  console.log(e.target.textContent);
  setInputValue(e.target.textContent);
});
