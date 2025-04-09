const equation = document.querySelector("h2");
let calcDone = true;

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
  equalBtn.addEventListener("click", (e) => equals());

  // Keyboard Support
  document.addEventListener("keydown", (e) => keyHandler(e.key));
}

function numPress(num) {
  // Did the user just press a sign / Is it the first calculation?
  if (equation.textContent === "UwU") equation.textContent = "";
  equation.textContent += num;
  calcDone = false;
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
  calcDone = true;
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

function keyHandler(key) {
  const numbers = "0123456789";
  const signs = "+-*/%";
  if (numbers.includes(key)) numPress(key);
  if (signs.includes(key)) signPress(key);
  if (key === "Enter") equals();
}

main();
