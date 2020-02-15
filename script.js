const text = document.getElementById('text');
const container = document.getElementById('container');

const totalTime = 7500;
const breathTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

breathAnimation();

function breathAnimation() {
  text.innerHTML = 'Breathe In!';
  container.className = 'container grow';

  setTimeout(() => {
    text.innerHTML = 'Hold';

    setTimeout(() => {
      container.className = 'container shrink';
      text.innerHTML = 'Breath out!';
    }, holdTime);
  }, breathTime);
}

setInterval(breathAnimation, totalTime);
