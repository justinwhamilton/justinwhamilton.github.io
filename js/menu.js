var menuAnimationInProgress = false
var duration = 300;
var expanded = false;

function expandMenu() {
	if(!menuAnimationInProgress) {
		menuAnimationInProgress = true;
		
		let button = document.getElementById("navButton");
		let menu = document.getElementById("navPopup");
		let plus = document.getElementById("navButtonPlus")
		let checker = document.getElementById("clickChecker");
		
		menu.style.display = "flex";
		checker.style.display = "block";
		button.style.transition = "none";
		menu.style.transition = "none";
		checker.style.transition = "none";
		
		let expandedWidth = menu.clientWidth;
		let expandedHeight = menu.clientHeight;
		let collapsedWidth = button.clientWidth;
		let collapsedHeight = button.clientHeight;
		
		menu.style.width = (collapsedWidth-20)+"px";
		menu.style.height = (collapsedHeight-20)+"px";
		menu.style.opacity = 0;
		
		button.style.opacity = 1;
		
		button.offsetHeight;
		
		button.style.transition = "all "+(duration/1000)+"s ease-in-out";
		menu.style.transition = "all "+(duration/1000)+"s ease-in-out";
		plus.style.transition = "all "+(duration/1000)+"s ease-in-out";
		checker.style.transition = "all "+(duration/1000)+"s ease-in-out";
		
		menu.style.width = (expandedWidth-20)+"px";
		menu.style.height = (expandedHeight-20)+"px";
		menu.style.opacity = 1;
		
		button.style.width = expandedWidth+"px";
		button.style.height = expandedHeight+"px";
		
		checker.style.opacity = 0.25;
		
		plus.style.transform = "rotate(135deg)";
		
		
		setTimeout(function() {
			button.style.width = collapsedWidth+"px";
			button.style.height = collapsedHeight+"px";
			button.style.display = "none";
			menuAnimationInProgress = false;
			expanded = true;
		}, duration);
	}
}

function collapseMenu() {
	if(!menuAnimationInProgress) {
		menuAnimationInProgress = true;
		let button = document.getElementById("navButton");
		let menu = document.getElementById("navPopup");
		let plus = document.getElementById("navButtonPlus");
		let checker = document.getElementById("clickChecker");
		
		button.style.display = "flex";
		button.style.transition = "none";
		menu.style.transition = "none";
		checker.style.transition = "none";
		
		let expandedWidth = menu.clientWidth;
		let expandedHeight = menu.clientHeight;
		let collapsedWidth = button.clientWidth;
		let collapsedHeight = button.clientHeight;
		
		menu.style.opacity = 1;
		button.style.width = expandedWidth+"px";
		button.style.height = expandedHeight+"px";
		checker.style.opacity = 0.25;
		
		button.offsetHeight;
		
		button.style.transition = "all "+(duration/1000)+"s ease-in-out";
		menu.style.transition = "all "+(duration/1000)+"s ease-in-out";
		plus.style.transition = "all "+(duration/1000)+"s ease-in-out";
		checker.style.transition = "all "+(duration/1000)+"s ease-in-out";
		
		menu.style.width = (collapsedWidth-20)+"px";
		menu.style.height = (collapsedHeight-20)+"px";
		menu.style.opacity = 0;
		
		button.style.width = collapsedWidth+"px";
		button.style.height = collapsedHeight+"px";
		
		checker.style.opacity = 0;
		
		plus.style.transform = "rotate(0deg)";
		
		
		setTimeout(function() {
			menu.style.width = (expandedWidth-20)+"px";
			menu.style.height = (expandedHeight-20)+"px";
			menuAnimationInProgress = false;
			
			menu.style.display = "none";
			checker.style.display = "none";
			expanded = false;
		}, duration);
	}
}