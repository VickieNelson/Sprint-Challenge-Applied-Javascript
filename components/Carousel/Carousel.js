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

function createCarousel() {
  //the carousel div
  //add carousel class
  //div for left button
  //add class for left button
  //imgs 1-4
  //div for right button
  //div class right button
  const carouselDiv = document.createElement("div");
  carouselDiv.classList.add = "carousel";

  const leftBtnDiv = document.createElement("div");
  leftBtnDiv.classList.add = "left-button";

  const img1 = document.createElement("img");
  img1.src = "./assets/carousel/mountains.jpeg";

  const img2 = document.createElement("img");
  img2.src = "./assets/carousel/computer.jpeg";

  const img3 = document.createElement("img");
  img3.src = "./assets/carousel/trees.jpeg";

  const img4 = document.createElement("img");
  img4.src = "./assets/carousel/turntable.jpeg";

  const rightBtnDiv = document.createElement("div");
  rightBtnDiv.classList.add = "right-button";

  carouselDiv.appendChild(leftBtnDiv);
  carouselDiv.appendChild(img1);
  carouselDiv.appendChild(img2);
  carouselDiv.appendChild(img3);
  carouselDiv.appendChild(img4);
  carouselDiv.appendChild(rightBtnDiv);
}
