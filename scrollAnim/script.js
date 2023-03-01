// Fetch the element with ID 'vincent-div' and store it in a variable
let vincentDiv = document.getElementById('vincent-div');

// Fetch all elements with class 'nav-btn' and store them in a variable
let navButtons = document.getElementsByClassName('nav-btn');

// Add a listener to the 'scroll' event on the document, and call the 'changeText' function when triggered
document.addEventListener('scroll', changeText);

// Define the 'changeText' function
function changeText(){

	// Get the current vertical scroll position
	let pos = window.scrollY;

	// Get the width of the browser window
	let width = window.innerWidth;

	// Get the height of the browser window
	let height = window.innerHeight;

	// Calculate which section of the page the user is currently viewing
	let sectionNum = parseInt(pos / (height*1.5)-1);

	// Change the left position of the 'vincent-div' element based on the user's scrolling position
	vincentDiv.style.left = 1040 - (pos / (height * 12) * width) + 'px';

	// Loop through all 'nav-btn' elements and change their background color to white
	for(let i = 0; i < navButtons.length; i++){
		navButtons[i].style.backgroundColor = 'white';
	}

	// Change the background color of the 'nav-btn' element corresponding to the current section to black
	navButtons[sectionNum].style.backgroundColor = 'black';
}