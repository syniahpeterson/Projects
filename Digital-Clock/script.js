const hour = document.getElementById("hour");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const am_or_pm = document.getElementById("ampm");

const updateClock = () => {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let AMPM = "AM";

    if (h > 12) {
        h -= 12;
        AMPM = "PM";
    }

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    hour.innerText = h;
    minutes.innerText = m;
    seconds.innerText = s;
    am_or_pm.innerText = AMPM;
    setTimeout (() => {
        updateClock();
    })
};

updateClock();