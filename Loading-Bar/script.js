const counter = document.querySelector(".counter");
const bar = document.querySelector(".loading-bar-front");

let i = 0;

updateNum ();

function updateNum () {
    counter.innerText = i + "%";
    bar.style.width = i + "%";
    i++
    if (i < 101) {
        setTimeout(updateNum, 20);
    }
}