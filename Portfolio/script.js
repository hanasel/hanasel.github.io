// Fetch all elements with class 'nav-btn' and store them in a variable
let navButtons = document.getElementsByClassName('navbar-btn');

// Add a listener to the 'scroll' event on the document, and call the 'changeText' function when triggered
document.addEventListener('scroll', change);

let animationTriggered = false;

// Define the 'changeText' function
function change(){
    let homeHeight = document.getElementById('home').getBoundingClientRect();
    let aboutHeight = document.getElementById('about').getBoundingClientRect();
    let workHeight = document.getElementById('myWork').getBoundingClientRect();
    let contactHeight = document.getElementById('contact').getBoundingClientRect();

	// Get the current vertical scroll position
	let pos = window.scrollY;

	// Get the width of the browser window
	let width = window.innerWidth;

	// Get the height of the browser window
	let height = window.innerHeight;

	// Calculate which section of the page the user is currently viewing
	// let sectionNum = parseInt(pos / height);
    let sectionNum = 0;

    // console.log(sectionNum);
    console.log(footerHeight.bottom);
    // console.log("home:",homeHeight.top);
    // console.log("about:",aboutHeight.top);
    // console.log("work:",workHeight.top);
    // console.log("contact:",contactHeight.top);

    if(aboutHeight.top>200) {
        sectionNum = 0;
    }
    else if(aboutHeight.top<50 && workHeight.top>50) {
        sectionNum = 1;
    }
    else if(workHeight.top<50 && contactHeight.top>50) {
        sectionNum = 2;
    }
    else if(contactHeight.top<50) {
        sectionNum = 3;
    }
    // console.log(height);
    // console.log(document.getElementById('about').clientHeight);

	// // Change the left position of the 'vincent-div' element based on the user's scrolling position
	// vincentDiv.style.left = 1040 - (pos / (height * 12) * width) + 'px';
    if (workHeight.top >= -10 && workHeight.top < 55 && !animationTriggered) {
        console.log("work");
        animate();
        animationTriggered = true;
        document.getElementById("eye").style.visibility = "hidden";
        document.getElementById("btn").style.visibility = "visible";
    }

	// Loop through all 'nav-btn' elements and change their background color to white
	for(let i = 0; i < navButtons.length; i++){
		navButtons[i].style.color = 'rgb(124, 124, 124)';
	}

	// Change the background color of the 'nav-btn' element corresponding to the current section to black
	navButtons[sectionNum].style.color = 'white'; 
}

function animate(){
    let id = null;
    const elem = document.getElementById("btn");   
    let pos = 0;
    clearInterval(id);
    id = setInterval(frame, 5);
    function frame() {
        if (pos > 45) {
        clearInterval(id);
        document.getElementById('button-3').style.visibility = "visible";
        btn.style.visibility = "hidden";
        document.getElementById("button-3").addEventListener("click", function(){
                    clearInterval(id);
                    displayWork();
                });
        // blink();
        } else {
            pos+=0.2; 
            // elem.style.top = 0 + "px"; 
            elem.style.left = pos + "%"; 
            elem.style.fontSize = 38+1.5*pos + "px";
        }
        console.log(pos);
    }
}

// function blink(){
//     const btn = document.getElementById("btn");
//     let isBlack = true;
//     let id = null;
//     clearInterval(id);
//     id = setInterval(function(){
//         if(isBlack){
//             btn.style.color = "white";
//             isBlack = false;
//         } else {
//             btn.style.color = "black";
//             isBlack = true;
//         }
//     }, 500);
//     document.getElementById("btn").addEventListener("click", function(){
//         clearInterval(id);
//         displayWork();
//     });
// }

function displayWork() {
    const button = document.getElementById("button-3");
    // btn.style.visibility = "hidden";

    button.style.display = "none";

    // let topVal = btn.style.paddingTop;
    // let leftVal = btn.style.left;


    // const circle = document.getElementById("circle");
    // circle.style.display = "block";
    // // Set the background color and size of the circle
    // circle.style.backgroundColor = "white";
    // circle.style.width = "200px";
    // circle.style.height = "200px";
    // // Set the position of the circle to be centered on top of the 'btn' element
    // circle.style.position = "absolute";
    // circle.style.paddingTop = topVal;
    // circle.style.left = leftVal;
    // circle.style.transform = "translate(-50%, -50%)";
    // // Add the circle element to the document
    // document.body.appendChild(circle);

    // Define the animation parameters
    // let size = 200;
    // const rate = 2;

    // // Define the animation function
    // function animateCircle() {
    //     // Update the size of the circle
    //     size -= rate;
    //     circle.style.width = size + "px";
    //     circle.style.height = size + "px";

    //     // Check if the animation is finished
    //     if (size <= 0) {
    //         // Remove the circle element from the document
    //         circle.style.display = "none";
    //     } else {
    //         // Schedule the next frame of the animation
    //         requestAnimationFrame(animateCircle);
    //     }
    // }

    // // Start the animation
    // animateCircle();

    let asgs = document.getElementsByClassName("asgs");
    for(let i = 0; i < asgs.length; i++){
        asgs[i].style.display = "block";
    }
}