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
  }
}

function keyHandler(key) {
  const numbers = "0123456789";
  if (numbers.includes(key)) numPress(key);
}

main();
