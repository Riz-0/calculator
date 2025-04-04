let operands = [];
const equation = document.querySelector("h2");
const total = document.querySelector("h1");
let lastOperation = "";

function main() {
  const numberBtns = document.querySelectorAll(".number");
  numberBtns.forEach((btn) => btn.addEventListener("click", numPress));

  const signBtns = document.querySelectorAll(".sign");
  signBtns.forEach((btn) => btn.addEventListener("click", operate));

  const allClearBtn = document.querySelector(".all-clear");
  allClearBtn.addEventListener("click", allClear);

  const clearBtn = document.querySelector(".clear");
  clearBtn.addEventListener("click", clear);

  const equalsBtn = document.querySelector(".equals");
  equalsBtn.addEventListener("click", equals);

  const decimalBtn = document.querySelector(".decimal");
  decimalBtn.addEventListener("click", decimal);
}

function numPress(e) {
  if (equation.textContent === "UwU") {
    equation.textContent = "";
    operands = [];
  }
  equation.textContent += e.target.textContent;
}

function operate(e) {
  getNewNumber();
  if (operands.length > 1) {
    switch (lastOperation) {
      case "+":
        operands[0] = (operands[0] * 10 + operands[1] * 10) / 10;
        break;
      case "-":
        operands[0] = (operands[0] * 10 - operands[1] * 10) / 10;
        break;
      case "*":
        operands[0] = (operands[0] * 10 * (operands[1] * 10)) / 100;
        break;
      case "/":
        operands[0] = (operands[0] * 10) / (operands[1] * 10);
        break;
      case "%":
        operands[0] = ((operands[0] * 10) % (operands[1] * 10)) / 10;
        break;
    }
    operands.pop();
  }
  lastOperation = e === undefined ? "" : e.target.textContent;
  equation.textContent = `${operands[0]} ${lastOperation} `;
  total.textContent = `${operands[0]}`;
}

function getNewNumber() {
  const numbers = equation.textContent.split(" ");
  const i = operands.length < 1 ? 0 : 2;
  operands.push(numbers[i] === "" ? 0 : parseFloat(numbers[i]));
}

function allClear() {
  operands = [];
  lastOperation = "";
  equation.textContent = "UwU";
  total.textContent = "0";
}

function clear() {
  const numbers = "0123456789";
  if (numbers.includes(equation.textContent.at(-1))) {
    equation.textContent = equation.textContent.slice(0, -1);
  }
}

function equals() {
  operate();
  total.textContent = operands[0];
  equation.textContent = "UwU";
}

function decimal() {
  const numbers = equation.textContent.split(" ");
  const i = operands.length < 1 ? 0 : 2;
  if (!numbers[i].includes(".") && equation.textContent != "UwU")
    equation.textContent += ".";
}
main();
