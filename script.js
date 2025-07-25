let [seconds, minutes, hours] = [0, 0, 0];
let display = document.getElementById("display");
let timer = null;

function updateDisplay() {
  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;
  display.innerText = `${h}:${m}:${s}`;
}

function stopwatch() {
  seconds++;
  if (seconds == 60) {
    seconds = 0;
    minutes++;
    if (minutes == 60) {
      minutes = 0;
      hours++;
    }
  }
  updateDisplay();
}

function start() {
  if (timer !== null) return;
  timer = setInterval(stopwatch, 1000);
}

function pause() {
  clearInterval(timer);
  timer = null;
}

function reset() {
  clearInterval(timer);
  [seconds, minutes, hours] = [0, 0, 0];
  updateDisplay();
  document.getElementById("laps").innerHTML = "";
  timer = null;
}

function lap() {
  if (timer === null) return;
  const lapTime = display.innerText;
  const li = document.createElement("li");
  li.innerText = `Lap: ${lapTime}`;
  document.getElementById("laps").appendChild(li);
}
