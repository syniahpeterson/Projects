const num1 = Math.ceil(Math.random() * 10);
const num2 = Math.ceil(Math.random() * 10);

const question = document.getElementById("question");
const input = document.getElementById("input");
const form = document.getElementById("form");
const score = document.getElementById("score");

let currentScore = JSON.parse(localStorage.getItem("score"));
if (!currentScore) {
    score = 0;
}

score.innerText = `score: ${currentScore}`;

question.innerText = `What is ${num1} multiplied by ${num2}?`;

const correctAnswer = num1 * num2;

form.addEventListener("submit", () => {
    const userAnswer = +input.value;
    if (userAnswer === correctAnswer) {
        currentScore++;
        updateLocalStorage();
    }
    else {
        currentScore--;
        updateLocalStorage();
    }
});

const updateLocalStorage = () => {
    localStorage.setItem("score", JSON.stringify(currentScore))
};