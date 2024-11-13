const slides = document.querySelectorAll('.slide');
const indicators = document.querySelectorAll('.indicator');
let currentSlide = 0;
let autoSlideInterval;
const autoSlideTime = 5000; // Tempo de 5 segundos entre os slides

// Função para alterar o slide
function changeSlide(direction) {
    slides[currentSlide].classList.remove('active');
    indicators[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + direction + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
    indicators[currentSlide].classList.add('active');
}

// Função para ir a um slide específico
function goToSlide(slideIndex) {
    slides[currentSlide].classList.remove('active');
    indicators[currentSlide].classList.remove('active');
    currentSlide = slideIndex;
    slides[currentSlide].classList.add('active');
    indicators[currentSlide].classList.add('active');
}

// Configuração de auto slide
function startAutoSlide() {
    autoSlideInterval = setInterval(() => {
        changeSlide(1);
    }, autoSlideTime);
}

// Pausar o auto slide
function stopAutoSlide() {
    clearInterval(autoSlideInterval);
}

// Eventos de clique nos botões de navegação
document.querySelector('.prev-btn').addEventListener('click', () => {
    changeSlide(-1);
    stopAutoSlide();
    startAutoSlide();
});

document.querySelector('.next-btn').addEventListener('click', () => {
    changeSlide(1);
    stopAutoSlide();
    startAutoSlide();
});

// Eventos de clique nos indicadores
indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        goToSlide(index);
        stopAutoSlide();
        startAutoSlide();
    });
});

// Pausa no hover
document.querySelector('.carrossel-container').addEventListener('mouseover', stopAutoSlide);
document.querySelector('.carrossel-container').addEventListener('mouseout', startAutoSlide);

// Navegação por teclado
document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') {
        changeSlide(-1);
        stopAutoSlide();
        startAutoSlide();
    } else if (event.key === 'ArrowRight') {
        changeSlide(1);
        stopAutoSlide();
        startAutoSlide();
    }
});

// Iniciar o auto slide ao carregar a página
startAutoSlide();
