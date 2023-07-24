let isPlaying = false;
const musicButton = document.getElementById('musicButton');
const music = document.getElementById('music');
let hasUserInteracted = false;

function init() {
  musicButton.addEventListener('click', toggleMusic);
  document.addEventListener('click', () => {
    if (!hasUserInteracted) {
      // Attempt to play the audio on the first user interaction
      hasUserInteracted = true;
      playAudio();
    }
  });
}

function playAudio() {
  if (!isPlaying) {
    music.play().then(() => {
      musicButton.classList.add('music-spin');
      isPlaying = true;
    }).catch((error) => {
      // Autoplay was prevented, handle the error gracefully
      console.error('Autoplay prevented:', error);
    });
  }
}

function toggleMusic() {
  if (isPlaying) {
    music.pause();
    music.currentTime = 0;
  }

  musicButton.classList.toggle('music-spin');
  isPlaying = !isPlaying;
}

// Initialize after the page has loaded
window.addEventListener('load', init);
