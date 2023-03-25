const decreaseBtn = document.querySelector(".decrease");
const resetBtn = document.querySelector(".reset");
const increaseBtn = document.querySelector(".increase");
const decreaseSec = document.querySelector(".decrease-sec");
const resetSec = document.querySelector(".reset-sec");
const increaseSec = document.querySelector(".increase-sec");
const upperH1 = document.querySelector(".upper-counter");
const bottomH1 = document.querySelector(".second-counter");

// first tab
let num = 0;

decreaseBtn.addEventListener("click", () => {
  num++;
  upperH1.textContent = num;
});

increaseBtn.addEventListener("click", () => {
  num--;
  upperH1.textContent = num;
});

resetBtn.addEventListener("click", () => {
  num = 0;
  upperH1.textContent = 0;
});

// sec tab

let num1 = 0;

decreaseSec.addEventListener("click", () => {
  num1++;
  bottomH1.textContent = num1;
});

increaseSec.addEventListener("click", () => {
  num1--;
  bottomH1.textContent = num1;
});

resetSec.addEventListener("click", () => {
  num1 = 0;
  bottomH1.textContent = 0;
});
