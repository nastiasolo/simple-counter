const plusButton = document.querySelector(".plus-button");
const minusButton = document.querySelector(".minus-button");
const resetButton = document.querySelector(".reset-button");

const counter = document.querySelector(".counter-number");
console.log(counter);
console.log(resetButton);

let startNumber = 0;
counter.textContent = startNumber;

function addOne() {
  startNumber += 1;
  counter.textContent = startNumber;
}

function removeOne() {
  if (startNumber === 0) {
    startNumber = 0;
  } else {
    startNumber -= 1;
    counter.textContent = startNumber;
  }
}

function resetCounter() {
  startNumber = 0;
  counter.textContent = startNumber;
}

plusButton.addEventListener("click", addOne);
minusButton.addEventListener("click", removeOne);
resetButton.addEventListener("click", resetCounter);
