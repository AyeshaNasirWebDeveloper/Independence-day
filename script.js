document.getElementById('playButton').addEventListener('click', function() {
    var audio = document.getElementById('backgroundMusic');
    audio.play();
    this.style.display = 'none';
});

const texts = ["77 Years", "Happy Independence Day", "Pakistan Zindabad", "Azaadi Mubarak"];
const colors = ["#FFD700", "#FF4C4C", "#00FF00", "#FFFFFF"]; 
let index = 0;
const mainText = document.getElementById('mainText');

function changeText() {
    if (index < texts.length) {
        mainText.classList.add('fade-out');
        setTimeout(() => {
            mainText.innerText = texts[index];
            mainText.style.color = colors[index];
            mainText.classList.remove('fade-out');
            mainText.classList.add('fade-in');
            index++;
        }, 2000);
    } else {
        index = 0;
        changeText();
    }
}

setInterval(changeText, 3000);