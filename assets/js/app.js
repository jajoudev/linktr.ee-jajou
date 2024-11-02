const discordHover = document.querySelector(".link-profile-discord");
const youtubeHover = document.querySelector(".link-profile-youtube");
const twitchHover = document.querySelector(".link-profile-twitch");

const audio = document.getElementById("audio");
const progressBar = document.getElementById("progress-bar");
const playPauseBtn = document.getElementById("play-pause-btn");
const progressContainer = document.querySelector(".progress-container");
const currentTimeEl = document.getElementById("current-time");
const durationEl = document.getElementById("duration");

const descriptions = ["Youtuber & Web Dev", "I Love Play Video Games"];

let index = 0;

function changeDescription() {
  const descriptionElement = document.querySelector(".description");
  descriptionElement.textContent = descriptions[index];

  index = (index + 1) % descriptions.length;
}

setInterval(changeDescription, 15000);

function setupHoverEffect(element, className) {
  element.addEventListener("mouseenter", () => {
    document.body.classList.add(className);

    element.addEventListener("mouseleave", () => {
      document.body.classList.remove(className)
    });
  });
}

changeDescription();

setupHoverEffect(discordHover, "discord-hover");
setupHoverEffect(youtubeHover, "youtube-hover");
setupHoverEffect(twitchHover, "twitch-hover");

function playPause() {
  if (audio.paused) {
    audio.play();
    playPauseBtn.textContent = "Pause";
  } else {
    audio.pause();
    playPauseBtn.textContent = "Play";
  }
}

function updateProgress() {
  const progressPercent = (audio.currentTime / audio.duration) * 100;
  progressBar.style.width = progressPercent + "%";
  currentTimeEl.textContent = formatTime(audio.currentTime);
}

audio.addEventListener("loadedmetadata", () => {
  durationEl.textContent = formatTime(audio.duration);
});

function setProgress(event) {
  const width = progressContainer.clientWidth;
  const clickX = event.offsetX;
  const duration = audio.duration;

  audio.currentTime = (clickX / width) * duration;
}

function formatTime(time) {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
}

playPauseBtn.addEventListener("click", playPause);
audio.addEventListener("timeupdate", updateProgress);
progressContainer.addEventListener("click", setProgress);
