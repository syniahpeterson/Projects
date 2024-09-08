const btn = document.getElementById("btn");
const birthday = document.getElementById("birthday");
const result = document.getElementById("result");

function calculateAge () {
    const birthdayValue = birthday.value;
    if (birthdayValue === "") {
        alert("Please enter your birthday!");
    }
    else {
        const age = getAge(birthdayValue);
        result.innerText = `Your age is ${age} ${age > 1 ? "years" : "year"} old`;
    }
}

function getAge(birthdayValue) {
    const currentDate = new Date();
    const birthdayDate = new Date(birthdayValue);
    let age = currentDate.getFullYear() - birthdayDate.getFullYear();
    const months = currentDate.getMonth() - birthdayDate.getMonth();

    if (months < 0 || (months === 0 && currentDate.getDate() < birthdayDate.getDate())) {
        age--;
    }
    return age;
}

btn.addEventListener("click", calculateAge);