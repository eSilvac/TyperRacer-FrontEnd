export function TimeCounter(timerTime) {
  let seconds = ("0" + (Math.floor(timerTime) % 60)).slice(-2);
  let minutes = ("0" + (Math.floor(timerTime / 60) % 60)).slice(-2);
  
  return (minutes + ":" + seconds)
}

