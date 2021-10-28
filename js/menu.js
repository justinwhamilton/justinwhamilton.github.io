// Global Variables
var menuAnimationInProgress = false
var duration = 250;
var expanded = false;

// Function to expand menu
function expandMenu() {
	
	// Only expand if an animation isn't in progress
	if(!menuAnimationInProgress) {
		// Lock animation
		menuAnimationInProgress = true;
		
		// Initialize element references
		let button = document.getElementById("navButton");
		let menu = document.getElementById("navPopup");
		let plus = document.getElementById("navButtonPlus")
		let checker = document.getElementById("clickChecker");
		
		// Initialize display of elements and remove transitions
		menu.style.display = "flex";
		checker.style.display = "block";
		button.style.transition = "none";
		menu.style.transition = "none";
		checker.style.transition = "none";
		menu.style.width = "fit-content";
		menu.style.height = "fit-content";
		
		// Store collapsed and expanded menu dimensions
		let expandedWidth = menu.clientWidth;
		let expandedHeight = menu.clientHeight;
		let collapsedWidth = button.clientWidth;
		let collapsedHeight = button.clientHeight;
		
		// Initialize positions and sizes of elements
		menu.style.boxShadow = "none";
		button.style.boxShadow = "0px 0px 25px -4px rgba(0, 0, 0, 0.50)";
		menu.style.width = (collapsedWidth-20)+"px";
		menu.style.height = (collapsedHeight-20)+"px";
		menu.style.opacity = 0;
		
		button.style.opacity = 1;
		
		// Force refresh of CSS
		button.offsetHeight;
		
		// Set smooth animations for elements
		button.style.transition = "all "+(duration/1000)+"s ease-in-out";
		menu.style.transition = "all "+(duration/1000)+"s ease-in-out";
		plus.style.transition = "all "+(duration/1000)+"s ease-in-out";
		checker.style.transition = "all "+(duration/1000)+"s ease-in-out";
		
		//Run animations
		menu.style.width = (expandedWidth-20)+"px";
		menu.style.height = (expandedHeight-20)+"px";
		menu.style.opacity = 1;
		
		button.style.width = expandedWidth+"px";
		button.style.height = expandedHeight+"px";
		
		checker.style.opacity = 0.25;
		
		plus.style.transform = "rotate(135deg)";
		
		// Finalize positions, sizes, and display of elements after animation is over
		setTimeout(function() {
			button.style.transition = "none";
			menu.style.transition = "none";
			checker.style.transition = "none";
			plus.style.transition = "none";
			button.style.width = collapsedWidth+"px";
			button.style.height = collapsedHeight+"px";
			button.style.display = "none";
			button.style.boxShadow = "none";
			menu.style.boxShadow = "0px 0px 25px -4px rgba(0, 0, 0, 0.50)";
			menu.style.width = "fit-content";
			menu.style.height = "fit-content";
			
			// Unlock animation
			menuAnimationInProgress = false;
			expanded = true;
			
			// Use relative dimensions for mobile layout
			if(window.innerWidth < window.innerHeight) {
				menu.style.width = "fit-content";
				menu.style.height = "fit-content";
				button.style.width = "10vh";
				button.style.height = "10vh";
			}
		}, duration);
	}
}

// Function to collapse the menu
function collapseMenu() {
	// Only collapse if an animation isn't in progress
	if(!menuAnimationInProgress) {
		// Lock animation
		menuAnimationInProgress = true;
		
		// Initialize element references
		let button = document.getElementById("navButton");
		let menu = document.getElementById("navPopup");
		let plus = document.getElementById("navButtonPlus");
		let checker = document.getElementById("clickChecker");
		
		// Initialize display of elements and remove transitions
		button.style.display = "flex";
		button.style.transition = "none";
		menu.style.transition = "none";
		checker.style.transition = "none";
		
		// Store collapsed and expanded menu dimensions
		let expandedWidth = menu.clientWidth;
		let expandedHeight = menu.clientHeight;
		let collapsedWidth = button.clientWidth;
		let collapsedHeight = button.clientHeight;
		
		// Initialize positions and sizes of elements
		menu.style.width = (expandedWidth-20)+"px";
		menu.style.height = (expandedHeight-20)+"px";
		
		button.style.width = expandedWidth+"px";
		button.style.height = expandedHeight+"px";
		
		menu.style.opacity = 1;
		button.style.width = expandedWidth+"px";
		button.style.height = expandedHeight+"px";
		checker.style.opacity = 0.25;
		button.style.boxShadow = "0px 0px 25px -4px rgba(0, 0, 0, 0.50)";
		menu.style.boxShadow = "none";
		
		// Force refresh of CSS
		button.offsetHeight;
		
		// Set smooth animations for elements
		button.style.transition = "all "+(duration/1000)+"s ease-in-out";
		menu.style.transition = "all "+(duration/1000)+"s ease-in-out";
		plus.style.transition = "all "+(duration/1000)+"s ease-in-out";
		checker.style.transition = "all "+(duration/1000)+"s ease-in-out";
		
		//Run animations
		menu.style.width = (collapsedWidth-20)+"px";
		menu.style.height = (collapsedHeight-20)+"px";
		menu.style.opacity = 0;
		
		button.style.width = collapsedWidth+"px";
		button.style.height = collapsedHeight+"px";
		
		checker.style.opacity = 0;
		
		plus.style.transform = "rotate(0deg)";
		
		// Finalize positions, sizes, and display of elements after animation is over
		setTimeout(function() {
			
			button.style.transition = "none";
			menu.style.transition = "none";
			plus.style.transition = "none";
			checker.style.transition = "none";
			menu.style.width = (expandedWidth-20)+"px";
			menu.style.height = (expandedHeight-20)+"px";
			
			button.style.boxShadow = "0px 0px 25px -4px rgba(0, 0, 0, 0.50)";
			menu.style.boxShadow = "none";
			
			menu.style.display = "none";
			checker.style.display = "none";
			
			// Unlock animation
			menuAnimationInProgress = false;
			expanded = false;
			
			// Use relative dimensions for mobile layout
			if(window.innerWidth < window.innerHeight) {
				menu.style.width = "fit-content";
				menu.style.height = "fit-content";
				button.style.width = "10vh";
				button.style.height = "10vh";
			}
		}, duration);
	}
}

var e = window.matchMedia("screen and (orientation:portrait)");
e.addListener(resizeMenuAndButton);

function resizeMenuAndButton(e) {
	let button = document.getElementById("navButton");
	let menu = document.getElementById("navPopup");
	let plus = document.getElementById("navButtonPlus");
	
	if(e.matches) {
		menu.style.width = "fit-content";
		menu.style.height = "fit-content";
		button.style.width = "10vh";
		button.style.height = "10vh";
		plus.style.fontSize = "10vh";
		button.style.borderRadius = "2.5vh";
	} else {
		button.style.width = "75px";
		button.style.height = "75px";
		plus.style.fontSize = "75px";
		button.style.borderRadius = "25px";
	}
}