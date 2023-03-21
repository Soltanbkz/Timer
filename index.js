let seconds = 0;
let minutes = 0;
let hours = 0;
let t;

function add() {
  seconds++;
  if (seconds >= 60) {
    seconds = 0;
    minutes++;
    if (minutes >= 60) {
      minutes = 0;
      hours++;
    }
  }

  document.getElementById("timer").textContent = (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);

  timer();
}

function timer() {
  t = setTimeout(add, 1000);
}

function startTimer() {
  timer();
}

function pauseTimer() {
  clearTimeout(t);
}

function resetTimer() {
  clearTimeout(t);
  document.getElementById("timer").textContent = "00:00:00";
  seconds = 0;
  minutes = 0;
  hours = 0;
}
