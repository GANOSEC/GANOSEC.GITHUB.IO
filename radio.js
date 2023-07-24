let isPlaying = false;
const musicButton = document.getElementById('musicButton');
const music = document.getElementById('music');

function init() {
  musicButton.addEventListener('click', toggleMusic);
}

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

// Initialize after the page has loaded
window.addEventListener('load', init);
