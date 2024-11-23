let currentIndex = 0;
const slides = document.querySelectorAll(".carousel-item");

function showSlide(index) {
    const totalSlides = slides.length;
    currentIndex = (index + totalSlides) % totalSlides;
    document.querySelector(".carousel-inner").style.transform = `translateX(-${currentIndex * 100}%)`;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

setInterval(() => {
    nextSlide();
}, 5000); // Change slide every 5 seconds
