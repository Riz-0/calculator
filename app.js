const operands = [];
const equation = document.querySelector("h2");
const total = document.querySelector("h1");

function main() {
  const numberBtns = document.querySelectorAll(".number");
  numberBtns.forEach((btn) => btn.addEventListener("click", numPress));

  const addBtn = document.querySelector(".add");
  addBtn.addEventListener("click", add);
}

function numPress(e) {
  if (equation.textContent === "UwU") equation.textContent = "";
  equation.textContent += e.target.textContent;
}

function add() {
  getNewNumber();
  if (operands.length > 1) {
    operands[0] = operands[0] + operands[1];
    operands.pop();
  }
  equation.textContent = `${operands[0]} + `;
  total.textContent = `${operands[0]}`;
}

function getNewNumber() {
  const numbers = equation.textContent.split(" ");
  const i = operands.length < 1 ? 0 : 2;
  operands.push(numbers[i] === "" ? 0 : parseInt(numbers[i]));
}

main();
