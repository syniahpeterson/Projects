const container = document.querySelector(".container");
const careers = ["Student", "Frontend Web Developer", "S-STEM scholar", "Personal Shopper"];

let careerIndex = 0;
let characterIndex = 0;

updateCareer();

function updateCareer () {
    characterIndex++;
    container.innerHTML = `<h1>I am a ${careers[careerIndex].slice(0, characterIndex)}</h1>`;

    if (characterIndex === careers[careerIndex].length) {
        careerIndex++;
        characterIndex = 0;
    }

    if (careerIndex === careers.length) {
        careerIndex = 0;
    }
    setTimeout(updateCareer, 400);
}

