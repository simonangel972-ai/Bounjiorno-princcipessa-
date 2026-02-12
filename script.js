const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const question = document.getElementById('question');
const mainGif = document.getElementById('mainGif');
const container = document.getElementById('container');

function moveButton() {
    const containerRect = container.getBoundingClientRect();

    const maxX = containerRect.width - noBtn.offsetWidth;
    const maxY = containerRect.height - noBtn.offsetHeight;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
}

yesBtn.addEventListener('click', () => {
    question.innerHTML = "Yay! I knew you'd say yes! 🌹💍";
    mainGif.src = "https://media.giphy.com/media/3oz8xIsloV7zOmt81G/giphy.gif";
    noBtn.style.display = "none";
});