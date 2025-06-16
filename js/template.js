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
	    messageElement.style.display = 'none';
	  contentElement.style.display = 'block';
	} else {
	  messageElement.style.display = 'none';
	  contentElement.style.display = 'block';
	}
}

  // Call the handleDeviceType function on page load
handleDeviceType();

// const backToTopButton = document.querySelector("#back-to-top-btn");

//     window.addEventListener("scroll", function () {
//       if (window.pageYOffset > 300) {
//         backToTopButton.style.display = 'block';
//       } else {
//         backToTopButton.style.display = 'none';
//       }
//     });

//     backToTopButton.addEventListener("click", function () {
//       window.scrollTo({ top: 0, behavior: "smooth" });
//     });
const backToTopButton = document.querySelector("#back-to-top-btn");

window.addEventListener("scroll", function () {
  if (window.pageYOffset > 300) {
    backToTopButton.classList.add("show");
  } else {
    backToTopButton.classList.remove("show");
  }
});

backToTopButton.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

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

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const progress = entry.target;
      const valueContainer = progress.querySelector(".progress-value");
      const endValue = parseInt(progress.getAttribute("data-skill"));
      const color = progress.getAttribute("data-color") || "#00adb5";
      let startValue = 0;
      const speed = 20;

      const interval = setInterval(() => {
        startValue++;
        valueContainer.textContent = `${startValue}%`;
        progress.style.background = `conic-gradient(${color} ${startValue * 3.6}deg, #e0e0e0 0deg)`;
        if (startValue >= endValue) clearInterval(interval);
      }, speed);

      observer.unobserve(progress); // run once
    }
  });
}, {
  threshold: 0.4
});

document.querySelectorAll(".circular-progress").forEach(el => observer.observe(el));

//kk
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