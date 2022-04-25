const imgFeature = document.querySelector(".img-feature");
const listImg = document.querySelectorAll(".list-image img");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let currentIndex = 0;

function updateImageByIndex(index) {
  // remove active class
  document.querySelectorAll(".list-item").forEach((e) => {
    e.classList.remove("active");
  });
  // update currentIndex
  currentIndex = index;
  imgFeature.src = listImg[currentIndex].getAttribute("src");
  listImg[currentIndex].parentElement.classList.add("active");
}
listImg.forEach((imageElement, index) => {
  imageElement.addEventListener("click", (e) => {
    imgFeature.style.animation = "";
    setTimeout(() => {
      updateImageByIndex(index);
      imgFeature.style.animation =
        "sliderPrev 1.5s cubic-bezier(0.19, 0.55, 0.06, 1) forwards";
    }, 200);
  });
});

prevBtn.addEventListener("click", (e) => {
  if (currentIndex === 0) {
    currentIndex = listImg.length - 1;
  } else {
    currentIndex--;
  }
  imgFeature.style.animation = "";
  setTimeout(() => {
    updateImageByIndex(currentIndex);
    imgFeature.style.animation =
      "sliderPrev 1.5s cubic-bezier(0.19, 0.55, 0.06, 1) forwards";
  }, 200);
});
nextBtn.addEventListener("click", (e) => {
  if (currentIndex === listImg.length - 1) {
    currentIndex = 0;
  } else {
    currentIndex++;
  }
  imgFeature.style.animation = "";
  setTimeout(() => {
    updateImageByIndex(currentIndex);
    imgFeature.style.animation =
      "sliderNext 1.5s cubic-bezier(0.19, 0.55, 0.06, 1) forwards";
  }, 200);
});

updateImageByIndex(currentIndex);
