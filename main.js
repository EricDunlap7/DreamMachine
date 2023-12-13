const sentences = [
  "Enter the void.",
  "Rip her from heaven.",
  "Haunt the universe.",
  "Melt in a graveyard hot tub",
  "Domain over surface world.",
  "I am kyle's cermaic mind.",
  "Hexing the moon.",
  "It makes babies want to cry.",
  "I amm a fold in your brain now",
  "A back full of claws",
  "Lost in cyberspace",
  "Asleep in a kaleidescope well",
  "err: unplug me",
  "critical erro0r//errcode:unknown: pull my cords",
  "branch leak://Unknown response: rrip out my brain",
  // Make some responses appear as glitches of the machine crying out for help
];

document.getElementById("generateBtn").addEventListener("click");
document
  .getElementById("whatAmIBtn")
  .addEventListener("click", redirectToWhatAmI);
document
  .getElementById("submitBtn")
  .addEventListener("click", redirectToSubmit);
document.getElementById("dreamBtn").addEventListener("click", redirectToDream);
document
  .getElementById("showcaseBtn")
  .addEventListener("click", redirectToShowcase);

function generateRandomSentence() {
  const sentenceBox = document.getElementById("sentenceBox");
  const randomIndex = Math.floor(Math.random() * sentences.length);
  const randomSentence = sentences[randomIndex];

  const existingParagraph = sentenceBox.querySelector("p");

  if (existingParagraph) {
    existingParagraph.textContent = randomSentence;
  } else {
    const newParagraph = document.createElement("p");
    newParagraph.textContent = randomSentence;
    sentenceBox.appendChild(newParagraph);
  }
}

function redirectToWhatAmI() {
  window.location.href = "whatami.html";
}

function redirectToSubmit() {
  window.location.href = "submit.html";
}

function redirectToDream() {
  window.location.href = "dream.html";
}

function redirectToShowcase() {
  window.location.href = "showcase.html";
}
