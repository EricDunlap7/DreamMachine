// showcase.js
const imageInfo = [
  {
    url: "showcaseimages/Untitled_Artwork 31.png",
    text: "Hexing The Moon: Artist",
  },
  {
    url: "showcaseimages/Untitled_Artwork 32.png",
    text: "I Am Kyle's Ceramic Mind: Artist",
  },
  {
    url: "showcaseimages/Untitled_Artwork 33.png",
    text: "I Am A Fold In Your Brain Now: Artist",
  },
  {
    url: "showcaseimages/Untitled_Artwork 34.png",
    text: "It Makes Babies Want To Cry",
  },
  {
    url: "showcaseimages/Untitled_Artwork 36.png",
    text: "Enter The Void: Artist",
  },
  {
    url: "showcaseimages/Untitled_Artwork 35.png",
    text: "Rip Her From Heaven: Artist",
  },
];

function populateImages(imagesToShow = imageInfo) {
  const rightBox = document.querySelector(".right-box");

  rightBox.innerHTML = "";

  imagesToShow.forEach((info) => {
    const container = document.createElement("div");
    container.classList.add("image-container");

    const imgElement = document.createElement("img");
    imgElement.src = info.url;
    imgElement.alt = info.text;

    const textBox = document.createElement("div");
    textBox.classList.add("text-box");
    textBox.innerHTML = `<p>${info.text}</p>`;

    container.appendChild(imgElement);
    container.appendChild(textBox);
    rightBox.appendChild(container);
  });
}

function performSearch() {
  const searchTerm = document.getElementById("searchInput").value.toLowerCase();

  const matchingImages = imageInfo.filter((info) =>
    info.text.toLowerCase().includes(searchTerm)
  );

  populateImages(matchingImages);
}

window.onload = function () {
  populateImages();
  // alert("hello from showcase.js");
};
