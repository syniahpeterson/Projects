const btn = document.getElementById("calculate");
const bill = document.getElementById("bill");
const tip = document.getElementById("tip");
const total = document.getElementById("total");

btn.addEventListener("click", () => {
    total.innerText = `$${(bill.value * (1 + tip.value / 100)).toFixed(2)}`;
});