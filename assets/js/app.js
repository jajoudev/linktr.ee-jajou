const discordHover = document.querySelector(".link-profile-discord");
const youtubeHover = document.querySelector(".link-profile-youtube");
const twitchHover = document.querySelector(".link-profile-twitch");

const audio = document.querySelector("audio");
const clickMusic = document.querySelector(".click-music");

const music = document.querySelector(".music");

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
      document.body.classList.remove(className);
    });
  });
}

changeDescription();

setupHoverEffect(discordHover, "discord-hover");
setupHoverEffect(youtubeHover, "youtube-hover");
setupHoverEffect(twitchHover, "twitch-hover");

fetch("./assets/data/musics.json")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data);

    window.addEventListener("click", () => {
      if (audio.paused) {
        audio.play();
        music.classList.remove('hidden')
      } else {
        audio.pause();
        music.classList.add('hidden')
      }
    });

    const randomMusic = data[Math.floor(Math.random() * data.length)];
    audio.src = randomMusic.music;

    music.textContent = "En train d'écouter: " + randomMusic.name;
  });
