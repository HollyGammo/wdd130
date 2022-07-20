var slideIndex = 0;
var plusSlide = function(num) {
  slideIndex += num;
  showSlides(num);
}

var currentSlide = function(num) {
  slideIndex = num;
  showSlides(num);
}

var showSlides = function(n) {
  var slides = document.getElementsByClassName("mySlides");
  slideIndex = (slideIndex + slides.length) % slides.length;
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex].style.display = "block";  
}