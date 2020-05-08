/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

const carouselGroup = document.querySelector(".carousel.container");

carouselGroup.appendChild(createCarousel());

function createCarousel(img1, img2, img3, img4) {
  //the carousel div
  //add carousel class
  //div for left button
  //add class for left button
  //imgs 1-4
  //div for right button
  //div class right button
  const carouselDiv = document.createElement("div");
  carouselDiv.classList.add = "carousel";
  carouselDiv.style.display = "block";

  const leftBtnDiv = document.createElement("div");
  leftBtnDiv.classList.add = "left-button";
  leftBtnDiv.textContent = "<";

  const img1 = document.createElement("img");
  img1.src = "./assets/carousel/mountains.jpeg";
  img1.classList.add = "carousel-img-1";

  const img2 = document.createElement("img");
  img2.src = "./assets/carousel/computer.jpeg";
  img2.classList.add = "carousel-img-2";

  const img3 = document.createElement("img");
  img3.src = "./assets/carousel/trees.jpeg";
  img3.classList.add = "carousel-img-3";

  const img4 = document.createElement("img");
  img4.src = "./assets/carousel/turntable.jpeg";
  img4.classList.add = "carousel-img-4";

  const rightBtnDiv = document.createElement("div");
  rightBtnDiv.classList.add = "right-button";
  rightBtnDiv.textContent = ">";

  carouselDiv.appendChild(leftBtnDiv);
  carouselDiv.appendChild(img1);
  carouselDiv.appendChild(img2);
  carouselDiv.appendChild(img3);
  carouselDiv.appendChild(img4);
  carouselDiv.appendChild(rightBtnDiv);
}
