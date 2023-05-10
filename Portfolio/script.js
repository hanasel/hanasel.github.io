/* 
Hana Selmani
10/05/2023
Communications Lab
Final Project - Portfolio Website 
*/


// Fetch all elements with class 'nav-btn' and store them in a variable
let navButtons = document.getElementsByClassName('navbar-btn');

// Add a listener to the 'scroll' event on the document, and call the 'change' function when triggered
document.addEventListener('scroll', change);

// boolean to ensure animation is only triggered once
let animationTriggered = false;

// Define the 'change' function
function change(){
    // get locations of each of the sections
    let homeHeight = document.getElementById('home').getBoundingClientRect();
    let aboutHeight = document.getElementById('about').getBoundingClientRect();
    let workHeight = document.getElementById('myWork').getBoundingClientRect();
    let contactHeight = document.getElementById('contact').getBoundingClientRect();

	// section num is the section the user is currently viewing
    let sectionNum = 0;

    // define ranges for each section
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
    
    // trigger animation at a certain location
    if (workHeight.top >= -10 && workHeight.top < 55 && !animationTriggered) {
        animate();
        animationTriggered = true;
        // once animation is finished, hide the navbar eye and show the moving eye
        document.getElementById("eye").style.visibility = "hidden";
        document.getElementById("btn").style.visibility = "visible";
    }

	// Loop through all 'nav-btn' elements and change their color to gray
	for(let i = 0; i < navButtons.length; i++){
		navButtons[i].style.color = 'rgb(124, 124, 124)';
	}

	// Change the color of the 'nav-btn' element corresponding to the current section to white
	navButtons[sectionNum].style.color = 'white'; 
}

// animate function
function animate(){
    let id = null;
    const elem = document.getElementById("btn");   
    let pos = 0;
    clearInterval(id);
    // interval function
    id = setInterval(frame, 5);
    // function per frame
    function frame() {
        // if final destination has been reached, stop interval
        if (pos > 45) {
            clearInterval(id);
            // show the button and hide the eye once animation is finished
            document.getElementById('button-3').style.visibility = "visible";
            btn.style.visibility = "hidden";
            // wait for user to click on button to display work buttons
            document.getElementById("button-3").addEventListener("click", function(){
                clearInterval(id);
                displayWork();
            });
        // else keep animating
        } else {
            pos+=0.2; 
            // move more right and get larger
            elem.style.left = pos + "%"; 
            elem.style.fontSize = 38+1.5*pos + "px";
        }
    }
}

// display work buttons function
function displayWork() {
    // make button disappear
    const button = document.getElementById("button-3");
    button.style.display = "none";

    // display work buttons
    let asgs = document.getElementsByClassName("asgs");
    for(let i = 0; i < asgs.length; i++){
        asgs[i].style.display = "block";
    }
}