//run this code on every page...
let outerBox = document.getElementById('outerBox');
let toggler = document.getElementById('toggler');
toggler.addEventListener('click', toggleOn);

function toggleOn() {
	// If toggled on...
	if (toggler.classList.contains("slidingOn")) {
		//toggle off
		toggler.classList.remove("slidingOn");
		//toggler.classList.add('slidingOff');
		outerBox.classList.remove('colorOn');

	} else {
		// toggle on
		outerBox.classList.add('colorOn');
	    toggler.classList.add('slidingOn');
	}
}

