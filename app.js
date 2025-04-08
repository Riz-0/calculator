const total = document.querySelector("h1");
let calcDone = true;

function main() {
  const numBtns = document.querySelectorAll(".number");
  numBtns.forEach((btn) =>
    btn.addEventListener("click", (e) => numPress(e.target.textContent))
  );

  // Keyboard Support
  document.addEventListener("keydown", (e) => keyHandler(e.key));
}

function numPress(num) {
  // Did the user just press a sign / Is it the first calculation?
  if (calcDone) total.textContent = "";
  total.textContent += num;
  calcDone = false;
}

function keyHandler(key) {
  const numbers = "0123456789";
  if (numbers.includes(key)) numPress(key);
}

main();
