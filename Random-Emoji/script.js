const btn = document.getElementById("btn");
const emojiName = document.getElementById("emoji-name");

const emoji = [];

async function getEmoji () {
    let response = await fetch("https://emoji-api.com/emojis?access_key=6ee10d11751f8e7908601fc2de19f51c83cd4773");

    data = await response.json();

    for (let i = 0; i < 1500; i++) {
        emoji.push({
            name: data[i].character, 
            code: data[i].unicodeName
        });
    }
}

getEmoji();

btn.addEventListener("click", () => {
    const randomNumber = Math.floor(Math.random() * emoji.length);
    btn.innerText = emoji[randomNumber].name;
    emojiName.innerText = emoji[randomNumber].code;
});