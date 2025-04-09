const equation = document.querySelector("h2");

function main() {
  // Num Buttons
  const numBtns = document.querySelectorAll(".number");
  numBtns.forEach((btn) =>
    btn.addEventListener("click", (e) => numPress(e.target.textContent))
  );

  // Sign Buttons
  const signBtns = document.querySelectorAll(".sign");
  signBtns.forEach((btn) =>
    btn.addEventListener("click", (e) => signPress(e.target.textContent))
  );

  // Equals Button
  const equalBtn = document.querySelector(".equals");
  equalBtn.addEventListener("click", equals);

  // Clear Button
  const clearBtn = document.querySelector(".clear");
  clearBtn.addEventListener("click", clear);

  // All Clear Button
  const allClearBtn = document.querySelector(".all-clear");
  allClearBtn.addEventListener("click", allClear);

  // Decimal Button
  const decimalBtn = document.querySelector(".decimal");
  decimalBtn.addEventListener("click", decimal);

  // Keyboard Support
  document.addEventListener("keydown", (e) => keyHandler(e.key));
}

function numPress(num) {
  // Did the user just press a sign / Is it the first calculation?
  if (equation.textContent === "UwU") equation.textContent = "";
  equation.textContent += num;
}

function signPress(sign) {
  const total = document.querySelector("h1");
  const prevSign = equation.textContent.split(" ")[1];
  // Is user continuing from a previous calculation?
  let result =
    equation.textContent === "UwU"
      ? parseFloat(total.textContent)
      : operate(prevSign);
  equation.textContent = `${result} ${sign} `;
  total.textContent = result;
}

function operate(sign) {
  const operands = equation.textContent.split(" ");
  // Did user enter anything after the sign?
  if (operands[2] === undefined || operands[2] === "") return operands[0];
  switch (sign) {
    case "+":
      return parseFloat(operands[0]) + parseFloat(operands[2]);
    case "-":
      return parseFloat(operands[0]) - parseFloat(operands[2]);
    case "*":
      return parseFloat(operands[0]) * parseFloat(operands[2]);
    case "/":
      if (parseFloat(operands[2]) === 0) return 0;
      return parseFloat(operands[0]) / parseFloat(operands[2]);
    case "%":
      if (parseFloat(operands[2]) === 0) return 0;
      return parseFloat(operands[0]) % parseFloat(operands[2]);
  }
}

function equals() {
  const total = document.querySelector("h1");
  const operands = equation.textContent.split(" ");
  if (operands[2] === "" || operands[2] === undefined) {
    total.textContent = operands[0];
  } else {
    total.textContent = operate(operands[1]);
  }
  equation.textContent = "UwU";
}

function clear() {
  const numbers = "0123456789";
  if (equation.textContent.length === 1) equation.textContent = "UwU";
  if (numbers.includes(equation.textContent.at(-1))) {
    equation.textContent = equation.textContent.slice(0, -1);
  }
}

function allClear() {
  const total = document.querySelector("h1");
  equation.textContent = "UwU";
  total.textContent = "0";
}

function decimal() {
  const operands = equation.textContent.split(" ");
  i = operands.length - 1;
  if (!operands[i].includes(".") && operands[i] !== "UwU") {
    equation.textContent += ".";
  }
}

function keyHandler(key) {
  const numbers = "0123456789";
  const signs = "+-*/%";
  if (numbers.includes(key)) numPress(key);
  if (signs.includes(key)) signPress(key);
  if (key === "Enter") equals();
  if (key === "Backspace") clear();
  if (key === "Escape") allClear();
  if (key === ".") decimal();
}

main();
