const next = document.querySelector(".next");
const imageContainer = document.querySelector(".image-container");
const imgs = document.querySelectorAll("img");
const prev = document.querySelector(".prev");

let currentImg = 1;
let timeout;

next.addEventListener("click", () => {
    currentImg++;
    clearTimeout(timeout);
    updateImg();
});

prev.addEventListener("click", () => {
    currentImg--;
    clearTimeout(timeout);
    updateImg();
});

updateImg();

function updateImg () {
    if (currentImg > imgs.length) {
        currentImg = 1;
    }
    else if (currentImg < 1) {
        currentImg = imgs.length;
    }
    imageContainer.style.transform = `translateX(-${(currentImg - 1) * 500}px)`;
    timeout = setTimeout(() => {
        currentImg++;
        updateImg();
    }, 3000);
}