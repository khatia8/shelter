setTimeout(() => {
  const carouselWrapper = document.querySelector(".carousel-wrapper");
  const carouselItem = document.getElementsByClassName("carousel-item");

  let counter = 0;

  const leftArrow = document.getElementById("left-arrow");
  const rightArrow = document.getElementById("right-arrow");

  leftArrow.addEventListener("click", () => {
    if (counter == 0) {
      counter = carouselItem.length - 2;
    }
    if (counter !== 0) {
      counter--;
    }
    carouselWrapper.style.transform = "translate(" + counter * -16.5 + "%)";
  });

  rightArrow.addEventListener("click", () => {
    if (counter == carouselItem.length - 3) {
      counter = -1;
    }
    if (counter <= carouselItem.length - 4) {
      counter++;
    }
    carouselWrapper.style.transform = "translate(" + counter * -16.5 + "%)";
  });
}, 0);
