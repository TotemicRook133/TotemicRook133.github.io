function detectDeviceType() {
	var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
	return isMobile ? 'mobile' : 'desktop';
}

  // Function to show/hide the calibration message and block content based on the device type
function handleDeviceType() {
	var messageElement = document.getElementById('calibrationMessage');
	var contentElement = document.querySelector('.contento');
	var deviceType = detectDeviceType();

	if (deviceType === 'mobile') {
	  messageElement.style.display = 'block';
	  contentElement.style.display = 'none';
	} else {
	  messageElement.style.display = 'none';
	  contentElement.style.display = 'block';
	}
}

  // Call the handleDeviceType function on page load
handleDeviceType();
const backToTopButton = document.querySelector("#back-to-top-btn");
window.addEventListener("scroll", scrollFunction);
function scrollFunction(){
	if (window.pageYOffset>300){
		backToTopButton.style.display ='block';
	}
	else {
		backToTopButton.style.display='none';
	}
}
// Helper function to check if an element is in the viewport
function isElementInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}
// tech skillsko


let circularProgressAUTO = document.querySelector(".skills .contantootiner:nth-child(1) .circular-progress"),
    progressValueAUTO = document.querySelector(".skills .contantootiner:nth-child(1) .progress-value");

let circularProgressPython = document.querySelector(".skills .contantootiner:nth-child(2) .circular-progress"),
    progressValuePython = document.querySelector(".skills .contantootiner:nth-child(2) .progress-value");

let circularProgressPhotoshop = document.querySelector(".skills .contantootiner:nth-child(3) .circular-progress"),
    progressValuePhotoshop = document.querySelector(".skills .contantootiner:nth-child(3) .progress-value");

let circularProgressCircuit = document.querySelector(".skills .contantootiner:nth-child(4) .circular-progress"),
    progressValueCircuit = document.querySelector(".skills .contantootiner:nth-child(4) .progress-value");

let circularProgressWeb = document.querySelector(".skills .contantootiner:nth-child(5) .circular-progress"),
    progressValueWeb = document.querySelector(".skills .contantootiner:nth-child(5) .progress-value");

let circularProgressMath = document.querySelector(".skills .contantootiner:nth-child(6) .circular-progress"),
    progressValueMath = document.querySelector(".skills .contantootiner:nth-child(6) .progress-value");

let circularProgressEE = document.querySelector(".skills .contantootiner:nth-child(7) .circular-progress"),
    progressValueEE = document.querySelector(".skills .contantootiner:nth-child(7) .progress-value");

let progressStartValueAUTO = 0,
    progressEndValueAUTO = 90,
    speedHTML = 50;

let progressStartValuePython = 0,
    progressEndValuePython = 80,
    speedPython = 50;

let progressStartValuePhotoshop = 0,
    progressEndValuePhotoshop = 70;

let progressStartValueCircuit = 0,
    progressEndValueCircuit = 75;

let progressStartValueWeb = 0,
    progressEndValueWeb = 85;

let progressStartValueMath = 0,
    progressEndValueMath = 95;

let progressStartValueEE = 0,
    progressEndValueEE = 75;

let progressAUTO = setInterval(() => {
    progressStartValueAUTO++;
    
    progressValueAUTO.textContent = `${progressStartValueAUTO}%`;
    circularProgressAUTO.style.background = `conic-gradient(#a5a5a5 ${progressStartValueAUTO * 3.6}deg, #d3d3d3 0deg)`;
    
    if (progressStartValueAUTO === progressEndValueAUTO) {
        clearInterval(progressAUTO);
    }
}, speedHTML);

let progressWeb = setInterval(() => {
    progressStartValueWeb++;

    progressValueWeb.textContent = `${progressStartValueWeb}%`;
    circularProgressWeb.style.background = `conic-gradient(#a5a5a5 ${progressStartValueWeb * 3.6}deg, #d3d3d3 0deg)`;

    if (progressStartValueWeb === progressEndValueWeb) {
        clearInterval(progressWeb);
    }
}, speedHTML);
let progressMath = setInterval(() => {
    progressStartValueMath++;

    progressValueMath.textContent = `${progressStartValueMath}%`;
    circularProgressMath.style.background = `conic-gradient(#a5a5a5 ${progressStartValueMath * 3.6}deg, #d3d3d3 0deg)`;

    if (progressStartValueMath === progressEndValueMath) {
        clearInterval(progressMath);
    }
}, speedHTML);
let progressEE = setInterval(() => {
    progressStartValueEE++;

    progressValueEE.textContent = `${progressStartValueEE}%`;
    circularProgressEE.style.background = `conic-gradient(#a5a5a5 ${progressStartValueEE * 3.6}deg, #d3d3d3 0deg)`;

    if (progressStartValueEE === progressEndValueEE) {
        clearInterval(progressEE);
    }
}, speedHTML);

let progressCircuit = setInterval(() => {
    progressStartValueCircuit++;

    progressValueCircuit.textContent = `${progressStartValueCircuit}%`;
    circularProgressCircuit.style.background = `conic-gradient(#a5a5a5 ${progressStartValueCircuit * 3.6}deg, #d3d3d3 0deg)`;

    if (progressStartValueCircuit === progressEndValueCircuit) {
        clearInterval(progressCircuit);
    }
}, speedHTML);
let progressPhotoshop = setInterval(() => {
    progressStartValuePhotoshop++;

    progressValuePhotoshop.textContent = `${progressStartValuePhotoshop}%`;
    circularProgressPhotoshop.style.background = `conic-gradient(#a5a5a5 ${progressStartValuePhotoshop * 3.6}deg, #d3d3d3 0deg)`;

    if (progressStartValuePhotoshop === progressEndValuePhotoshop) {
        clearInterval(progressPhotoshop);
    }
}, speedHTML);

let progressPython = setInterval(() => {
    progressStartValuePython++;

    progressValuePython.textContent = `${progressStartValuePython}%`;
    circularProgressPython.style.background = `conic-gradient(#a5a5a5 ${progressStartValuePython * 3.6}deg, #d3d3d3 0deg)`; // Adjusted value for Python

    if (progressStartValuePython === progressEndValuePython) {
        clearInterval(progressPython);
    }
}, speedPython);

// skillsko
//interskill
let circularProgressLeadership = document.querySelector(".skills1 .contantootiner1:nth-child(1) .circular-progress1"),
    progressValueLeadership = document.querySelector(".skills1 .contantootiner1:nth-child(1) .progress-value1");

let progressStartValueLeadership = 0,
    progressEndValueLeadership = 90;

let progressLeadership = setInterval(() => {
    progressStartValueLeadership++;
    
    progressValueLeadership.textContent = `${progressStartValueLeadership}%`;
    circularProgressLeadership.style.background = `conic-gradient(#a5a5a5 ${progressStartValueLeadership * 3.6}deg, #d3d3d3 0deg)`;
    
    if (progressStartValueLeadership === progressEndValueLeadership) {
         clearInterval(progressLeadership);
    }
}, speedHTML);
let circularProgressMHC = document.querySelector(".skills1 .contantootiner1:nth-child(2) .circular-progress1"),
    progressValueMHC = document.querySelector(".skills1 .contantootiner1:nth-child(2) .progress-value1");

let progressStartValueMHC = 0,
    progressEndValueMHC = 95;

let progressMHC = setInterval(() => {
    progressStartValueMHC++;
    
    progressValueMHC.textContent = `${progressStartValueMHC}%`;
    circularProgressMHC.style.background = `conic-gradient(#a5a5a5 ${progressStartValueMHC * 3.6}deg, #d3d3d3 0deg)`;
    
    if (progressStartValueMHC === progressEndValueMHC) {
         clearInterval(progressMHC);
    }
}, speedHTML);
let circularProgressFL = document.querySelector(".skills1 .contantootiner1:nth-child(3) .circular-progress1"),
    progressValueFL = document.querySelector(".skills1 .contantootiner1:nth-child(3) .progress-value1");

let progressStartValueFL = 0,
    progressEndValueFL = 70;

let progressFL = setInterval(() => {
    progressStartValueFL++;
    
    progressValueFL.textContent = `${progressStartValueFL}%`;
    circularProgressFL.style.background = `conic-gradient(#a5a5a5 ${progressStartValueFL * 3.6}deg, #d3d3d3 0deg)`;
    
    if (progressStartValueFL === progressEndValueFL) {
         clearInterval(progressFL);
    }
}, speedHTML);
let circularProgressMUN = document.querySelector(".skills1 .contantootiner1:nth-child(4) .circular-progress1"),
    progressValueMUN = document.querySelector(".skills1 .contantootiner1:nth-child(4) .progress-value1");

let progressStartValueMUN = 0,
    progressEndValueMUN = 85;

let progressMUN = setInterval(() => {
    progressStartValueMUN++;
    
    progressValueMUN.textContent = `${progressStartValueMUN}%`;
    circularProgressMUN.style.background = `conic-gradient(#a5a5a5 ${progressStartValueMUN * 3.6}deg, #d3d3d3 0deg)`;
    
    if (progressStartValueMUN === progressEndValueMUN) {
         clearInterval(progressMUN);
    }
}, speedHTML);
let circularProgressTL = document.querySelector(".skills1 .contantootiner1:nth-child(5) .circular-progress1"),
    progressValueTL = document.querySelector(".skills1 .contantootiner1:nth-child(5) .progress-value1");

let progressStartValueTL = 0,
    progressEndValueTL = 90;

let progressTL = setInterval(() => {
    progressStartValueTL++;
    
    progressValueTL.textContent = `${progressStartValueTL}%`;
    circularProgressTL.style.background = `conic-gradient(#a5a5a5 ${progressStartValueTL * 3.6}deg, #d3d3d3 0deg)`;
    
    if (progressStartValueTL === progressEndValueTL) {
         clearInterval(progressTL);
    }
}, speedHTML);
let circularProgressPM = document.querySelector(".skills1 .contantootiner1:nth-child(6) .circular-progress1"),
    progressValuePM = document.querySelector(".skills1 .contantootiner1:nth-child(6) .progress-value1");

let progressStartValuePM = 0,
    progressEndValuePM = 70;

let progressPM = setInterval(() => {
    progressStartValuePM++;
    
    progressValuePM.textContent = `${progressStartValuePM}%`;
    circularProgressPM.style.background = `conic-gradient(#a5a5a5 ${progressStartValuePM * 3.6}deg, #d3d3d3 0deg)`;
    
    if (progressStartValuePM === progressEndValuePM) {
         clearInterval(progressPM);
    }
}, speedHTML);
//interskill
//porjec
const allImages = document.querySelectorAll(".images .img");
const lightbox = document.querySelector(".lightbox");
const closeImgBtn = lightbox.querySelector(".close-icon");

allImages.forEach(img => {
    // Calling showLightBox function with passing clicked img src as argument
    img.addEventListener("click", () => showLightbox(img.querySelector("img").src));
});

const showLightbox = (img) => {
    // Showing lightbox and updating img source
    lightbox.querySelector("img").src = img;
    lightbox.classList.add("show");
    document.body.style.overflow = "hidden";
}

closeImgBtn.addEventListener("click", () => {
    // Hiding lightbox on close icon click
    lightbox.classList.remove("show");
    document.body.style.overflow = "auto";
});
//porjec
// Function to handle scroll event
function handleScroll() {
    var lkow = document.querySelector('.lkow');
    if (isElementInViewport(lkow)) {
        lkow.classList.add('show');
    }

    var twak1 = document.querySelectorAll('.twak1');
    twak1.forEach(function(twak1) {
        if (isElementInViewport(twak1)) {
            twak1.classList.add('show');
        }
    });

    var tapper1 = document.querySelectorAll('.tapper1');
    tapper1.forEach(function(tapper1) {
        if (isElementInViewport(tapper1)) {
            tapper1.classList.add('show');
        }
    });
	var twak2 = document.querySelectorAll('.twak2');
    twak2.forEach(function(twak2) {
        if (isElementInViewport(twak2)) {
            twak2.classList.add('show');
        }
    });

    var tapper2 = document.querySelectorAll('.tapper2');
    tapper2.forEach(function(tapper2) {
        if (isElementInViewport(tapper2)) {
            tapper2.classList.add('show');
        }
    });
	var twak3 = document.querySelectorAll('.twak3');
    twak3.forEach(function(twak3) {
        if (isElementInViewport(twak3)) {
            twak3.classList.add('show');
        }
    });

    var tapper3 = document.querySelectorAll('.tapper3');
    tapper3.forEach(function(tapper3) {
        if (isElementInViewport(tapper3)) {
            tapper3.classList.add('show');
        }
    });
	var twak4 = document.querySelectorAll('.twak4');
    twak4.forEach(function(twak4) {
        if (isElementInViewport(twak4)) {
            twak4.classList.add('show');
        }
    });

    var tapper4 = document.querySelectorAll('.tapper4');
    tapper4.forEach(function(tapper4) {
        if (isElementInViewport(tapper4)) {
            tapper4.classList.add('show');
        }
    });
	var twak5 = document.querySelectorAll('.twak5');
    twak5.forEach(function(twak5) {
        if (isElementInViewport(twak5)) {
            twak5.classList.add('show');
        }
    });

    var tapper5 = document.querySelectorAll('.tapper5');
    tapper5.forEach(function(tapper5) {
        if (isElementInViewport(tapper5)) {
            tapper5.classList.add('show');
        }
    });
	var twak6 = document.querySelectorAll('.twak6');
    twak6.forEach(function(twak6) {
        if (isElementInViewport(twak6)) {
            twak6.classList.add('show');
        }
    });

    var tapper6 = document.querySelectorAll('.tapper6');
    tapper6.forEach(function(tapper6) {
        if (isElementInViewport(tapper6)) {
            tapper6.classList.add('show');
        }
    });
}

// Attach scroll event listener
window.addEventListener('scroll', handleScroll);

// Initial check on page load
handleScroll();

backToTopButton.addEventListener('click', backToTop);
function backToTop() {
	window.scrollTo(0,0);
}
jQuery(document).ready(function($) {

	var my_nav = $('.navbar-sticky'); 
	// grab the initial top offset of the navigation 
	var sticky_navigation_offset_top = my_nav.offset().top;
	
	// our function that decides weather the navigation bar should have "fixed" css position or not.
	var sticky_navigation = function(){
		var scroll_top = $(window).scrollTop(); // our current vertical position from the top
		
		// if we've scrolled more than the navigation, change its position to fixed to stick to top, otherwise change it back to relative
		if (scroll_top > sticky_navigation_offset_top) { 
			my_nav.addClass( 'stick' );
		} else {
			my_nav.removeClass( 'stick' );
		}   
	};

	var initio_parallax_animation = function() { 
		$('.parallax').each( function(i, obj) {
			var speed = $(this).attr('parallax-speed');
			if( speed ) {
				var background_pos = '-' + (window.pageYOffset / speed) + "px";
				$(this).css( 'background-position', 'center ' + background_pos );
			}
		});
	}
	
	// run our function on load
	sticky_navigation();
	
	// and run it again every time you scroll
	$(window).scroll(function() {
		 sticky_navigation();
		 initio_parallax_animation();
	});
});
//ioljlk

//jkjl