/*
Hana Selmani, Majid Ibrahim, Mira Saleh, Aiya Sartbayeva
Communications Lab
Assignment 3 - Audio
JavaScript file
*/


//get the height and width of the window
let height = window.innerHeight;
let width = window.innerWidth;

/* working of GSAP and Scrollmagic animation libraries */ 
//the timeline helps with creating animations based on scroll

let tl = new TimelineMax({onUpdate:updatePercentage});

// creating a controller object that would control the scenes for each timeline
// the scenes for each page define the scrolling activity of that page
const controller = new ScrollMagic.Controller();

// animation of each of the names
tl.from('#p3', 0.5, {y:100, opacity: 0});
tl.from('#p4', 0.5, {y:100, opacity: 0});
tl.from('#p5', 0.5, {y:100, opacity: 0});
tl.from('#p6', 0.5, {y:100, opacity: 0});


// creating a scene object for page-2 that allows the animations to play
// once the user has scrolled enough to display the page entirely
const scene = new ScrollMagic.Scene({
  triggerElement: "#page-3",
            triggerHook: "onLeave",
            duration: "100%"
})
  .setPin("#page-3")
  .setTween(tl)
		.addTo(controller);

// function to keep track of the scrolling progress made by the user
function updatePercentage() {
  tl.progress();
  console.log(tl.progress());
}



//create an array of images to be used in the slideshow 
const images = ["imgs/1.jpeg","imgs/2.jpg","imgs/3.jpeg","imgs/4.jpeg","imgs/familyiftar.png","imgs/6.jpeg", "imgs/7-duaa.png", "imgs/8.jpg","imgs/9.jpeg","imgs/familyiftar.png", "imgs/Walkinghome.png","imgs/Muslim-Praying.jpg","imgs/Fatiha1.png", "imgs/Fatiha2.png","imgs/Walkinghome.png","imgs/TV.png"];
//create a times array to store the time duration of each image
const times = [250, 4000, 3000, 13000, 7000, 5000, 9000, 12000, 5000, 4000, 26000, 8000, 8500, 12000, 25000, 14000, 28000];
//create a variable to keep track of the current image
let currentImage = 0;
//create a variable to store the image element
let imageElement = document.getElementById("slideshow");

//create a variable to store the page 2 element
let pg2 = document.getElementById("page-2");


function changeImage() {
    //change the image element's source to the current image
    imageElement.src = images[currentImage];

    //change background image of page 2 to night time when the cannon shoots
    if (currentImage==5) {
        pg2.style.backgroundImage = "url('imgs/bg4.png')";
    }
    //increment the current image
    currentImage++;

    //if the current image is greater than the number of images, hide the image element
    if (currentImage <= images.length) {
        setTimeout(changeImage, times[currentImage]);
    }
    else {
        imageElement.style.display = "none";
    }
    
}

//add an event listener to the image element to start the slideshow when the image is clicked
imageElement.addEventListener('click', () => {
    // Play the audio
    const audio = document.getElementById("myAudio");
    audio.play();
    // Show the first image
    currentImage = 0;

    // Start the slideshow
    setTimeout(changeImage, times[currentImage]);
  });