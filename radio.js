let isPlaying = false;
const musicButton = document.getElementById('musicButton');
const music = document.getElementById('music');

function toggleMusic() {
  if (isPlaying) {
    music.pause();
    music.currentTime = 0;
  } else {
    music.play();
  }

  musicButton.classList.toggle('music-spin');
  isPlaying = !isPlaying;
}