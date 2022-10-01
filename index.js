const oneBtn = document.getElementById("one-btn");

const screenInput = document.getElementById("number-btn");
const getAttrib = oneBtn.getAttribute("number-btn");

oneBtn.addEventListener("click", (e) => {
  console.log(e.target.textContent);
});

const twoBtn = document.getElementById("two-btn");
twoBtn.addEventListener("click", (e) => {
  console.log(e.target.textContent);
});

const threeBtn = document.getElementById("three-btn");
threeBtn.addEventListener("click", (e) => {
  console.log(e.target.textContent);
});
