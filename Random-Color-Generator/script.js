const container = document.querySelector(".container");

for (let i = 0; i < 30; i++) {
    const colorContainer = document.createElement("div");
    colorContainer.classList.add("color-container");
    container.appendChild(colorContainer);
}

const colorContainers = document.querySelectorAll(".color-container");

colorGenerator();

function colorGenerator () {
    colorContainers.forEach((colorContainer) => {
        const newColorCode = randomColor();
        colorContainer.style.backgroundColor = "#" + newColorCode;
        colorContainer.innerText = "#" + newColorCode;
    })
}

function randomColor () {
    const chars = "0123456789abcdef";
    const colorCodeLength = 6;
    let colorCode = "";
    for (let i = 0; i < colorCodeLength; i++) {
        const randomNumber = Math.floor(Math.random() * chars.length);
        colorCode += chars.substring(randomNumber, randomNumber + 1);
    }
    return colorCode;
}