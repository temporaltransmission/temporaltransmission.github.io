const text = `Hello world this is some example copy to test this java out. Let's see if it works!`;

let index = 0;
const pauseIntervals = [0.05, 0.1, 0.2, 0.5, 0.55, 0.7, 0.75, 0.9];
function typeEffect() {
  const consoleText = document.getElementById("console-text");
  if (index <= text.length) {
    consoleText.innerHTML = text.slice(0, index) + "▮";
    index++;
    const progress = index / text.length;
    const isPaused = pauseIntervals.some(interval => Math.abs(progress - interval) < 0.01);
    setTimeout(typeEffect, isPaused ? 500 : 17);
  }
}

typeEffect();
