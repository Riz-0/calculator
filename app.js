const operands = [];
const equation = document.querySelector("h2");
const total = document.querySelector("h1");
let lastOperation = "";

function main() {
  const numberBtns = document.querySelectorAll(".number");
  numberBtns.forEach((btn) => btn.addEventListener("click", numPress));

  const addBtn = document.querySelector(".add");
  addBtn.addEventListener("click", operate);
  const subBtn = document.querySelector(".sub");
  subBtn.addEventListener("click", operate);
  const multiplyBtn = document.querySelector(".mul");
  multiplyBtn.addEventListener("click", operate);
  const divideBtn = document.querySelector(".div");
  divideBtn.addEventListener("click", operate);
  const modBtn = document.querySelector(".mod");
  modBtn.addEventListener("click", operate);
}

function numPress(e) {
  if (equation.textContent === "UwU") equation.textContent = "";
  equation.textContent += e.target.textContent;
}

function operate(e) {
  getNewNumber();
  if (operands.length > 1) {
    switch (lastOperation) {
      case "+":
        operands[0] = operands[0] + operands[1];
        break;
      case "-":
        operands[0] = operands[0] - operands[1];
        break;
      case "*":
        operands[0] = operands[0] * operands[1];
        break;
      case "/":
        operands[0] = operands[0] / operands[1];
        break;
      case "%":
        operands[0] = operands[0] % operands[1];
        break;
    }
    operands.pop();
  }
  lastOperation = e.target.textContent;
  equation.textContent = `${operands[0]} ${lastOperation} `;
  total.textContent = `${operands[0]}`;
}

function getNewNumber() {
  const numbers = equation.textContent.split(" ");
  const i = operands.length < 1 ? 0 : 2;
  operands.push(numbers[i] === "" ? 0 : parseInt(numbers[i]));
}

main();
