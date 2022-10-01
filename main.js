const counter = document.getElementById("Counter");
const decreaseBtn = document.getElementById("decreaseBtn");
const increaseBtn = document.getElementById("increaseBtn");
const resetBtn = document.getElementById("resetBtn");

let i = 0;

document.addEventListener("DOMContentLoaded", () => {
  counter.textContent = `${i}`;
});

decreaseBtn.addEventListener("click", () => {
  counter.textContent = `${--i}`;
});

resetBtn.addEventListener("click", () => {
  counter.textContent = `${(i = 0)}`;
});

increaseBtn.addEventListener("click", () => {
  counter.textContent = `${++i}`;
});
