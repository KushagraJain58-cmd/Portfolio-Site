document.querySelector('.blog').addEventListener('click', function() {
	window.location.href = './blogs/blog.html';
});

//////////////////// POEM SLIDESHOW////////////////////////////////////

var slideIndex = 1;
showSlides(slideIndex);
// Next/previous controls
function plusSlides(n) {
	showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
	showSlides((slideIndex = n));
}

function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName('mySlide');
	var dots = document.getElementsByClassName('dot');
	if (n > slides.length) {
		slideIndex = 1;
	}
	if (n < 1) {
		slideIndex = slides.length;
	}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = 'none';
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(' active', '');
	}
	slides[slideIndex - 1].style.display = 'block';
	dots[slideIndex - 1].className += ' active';
}

var sindex = 1;
// sSlides(sindex);

function cSlide(j) {
	sSlides((sindex = j));
}
document.querySelector('.d-head').style.height = window.innerHeight;
document.querySelector('.d-head').style.height = window.innerHeight;
document.querySelector('.poetry-img').style.height = window.innerHeight;

//////////////////// POEM SLIDESHOW CLOSED////////////////////////////////////

//////////////////// ENLARGE IMAGE/////////////////

function bigImg(x) {
	// x.style.height = "30rem";
	// x.style.width = "30em";
	x.style.transform = 'scale(1.5)';
	x.style.transition = 'transform 1.5s ease';
}

function normalImg(x) {
	// x.style.height = "23em";
	// x.style.width = "23em";
	x.style.transform = 'scale(1)';
	x.style.transition = 'transform 0.5s ease';
}

//////////////////// ENLARGE IMAGE CLOSED/////////////////

//////////////////// MOBILE HEADER /////////////////////////////
function myFunction() {
	var x = document.getElementById('myLinks');
	if (x.style.display === 'block') {
		x.style.display = 'none';
	} else {
		x.style.display = 'block';
	}
}

////////MODAL OF BOOK /////////////////
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


