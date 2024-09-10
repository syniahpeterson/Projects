const btn = document.getElementById("btn");
const result = document.getElementById("bmi-result");
const condition = document.getElementById("weight-condition");

btn.addEventListener("click", () => {
    const height = document.getElementById("height").value;
    const weight = document.getElementById("weight").value;

    const bmi = (weight / height ** 2) * 703;
    result.value = bmi;

    if (bmi < 18.5) {
        condition.innerText = "Underweight";
    }
    else if (bmi >= 18.5 && bmi <= 24.9) {
        condition.innerText = "Healthy Weight";
    }
    else if (bmi >= 25 && bmi <= 29.9) {
        condition.innerText = "Overweight";
    }
    else {
        condition.innerText = "Obesity";
    }
});