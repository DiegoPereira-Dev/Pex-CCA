const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

document.querySelector('.prev-btn').addEventListener('click', () => {
    changeSlide(-1);
});

document.querySelector('.next-btn').addEventListener('click', () => {
    changeSlide(1);
});

function changeSlide(direction) {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + direction + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
}
