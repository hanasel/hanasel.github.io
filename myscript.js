const images = ['0.png', '1.png', '2.png', '3.png'];
let currentIndex = 0;

function changeImage() {
  const image = document.getElementById("image");
  currentIndex = (currentIndex + 1) % images.length;
  image.src = images[currentIndex];
}