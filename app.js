const total = document.querySelector("h1");
let calcDone = true;

function main() {
  const numBtns = document.querySelectorAll(".number");
  numBtns.forEach((btn) =>
    btn.addEventListener("click", (e) => numPress(e.target.textContent))
  );
}

function numPress(num) {
  if (calcDone) total.textContent = "";
  total.textContent += num;
  calcDone = false;
}

main();
