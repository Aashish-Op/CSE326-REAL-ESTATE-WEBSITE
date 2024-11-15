let currentIndex = 0;
const slides = document.querySelectorAll('.carousel-item');

function showSlide(index) {
  if (index >= slides.length) {
    currentIndex = 0;
  } else if (index < 0) {
    currentIndex = slides.length - 1;
  } else {
    currentIndex = index;
  }
  document.querySelector('.carousel-slide').style.transform = `translateX(-${currentIndex * 100}%)`;
}

function nextSlide() {
  showSlide(currentIndex + 1);
}

function prevSlide() {
  showSlide(currentIndex - 1);
}

// Auto Slide every 5 seconds
setInterval(nextSlide, 5000);
