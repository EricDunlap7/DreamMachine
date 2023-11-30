// showcase.js
const imageInfo = [
  {
    url: "showcaseimages/Untitled_Artwork 31.png",
    text: "fart",
  },
  {
    url: "showcaseimages/Untitled_Artwork 32.png",
    text: "Description for dart",
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
  alert("hello from showcase.js");
};
