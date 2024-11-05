const discordHover = document.querySelector(".link-profile-discord");
const youtubeHover = document.querySelector(".link-profile-youtube");
const twitchHover = document.querySelector(".link-profile-twitch");

const audio = document.querySelector('audio')

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

window.addEventListener('click', () => {
  audio.play()
})