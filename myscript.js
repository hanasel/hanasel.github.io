// Hana Selmani
// 15/02/2023
// Campus Cats Website Photo Carousel - JavaScript file

//list of image sources
const images = ['0.png', '1.png', '2.png', '3.png'];
//begin at 0.png
let currentIndex = 0;

//upon click get element by id "image", go to the next image and 
//replace the old one with the new one
function changeImage() {
  const image = document.getElementById("image");
  currentIndex = (currentIndex + 1) % images.length;
  image.src = images[currentIndex];
}