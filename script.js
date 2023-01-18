let song = document.getElementById("song");
let range = document.getElementById("range");
let plays = document.getElementById("plays");
song.onloadedmetadata = function () {
  song.pause();
  range.max = song.duration;
  range.value = song.currentTime;
  console.log(range.value);
};
function myFunction() {
  if (plays.classList.contains("fa-pause")) {
    song.pause();
    plays.classList.remove("fa-pause");
    plays.classList.add("fa-play");
  } else {
    song.play();
    plays.classList.add("fa-pause");
    plays.classList.remove("fa-play");
  }
}
if (song.play()) {
  setInterval(function () {
    range.value = song.currentTime;
  }, 500);
}
range.onchange = function () {
  if (plays.classList.contains("fa-play")) {
    song.pause();
    song.currentTime = range.value;
    plays.classList.remove("fa-pause");
    plays.classList.add("fa-play");
  } else {
    song.play();
    song.currentTime = range.value;
    plays.classList.add("fa-pause");
    plays.classList.remove("fa-play");
  }
};
