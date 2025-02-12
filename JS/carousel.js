document.addEventListener("DOMContentLoaded", () => {
    let slides = document.querySelectorAll('.slide');
    let pontos = document.querySelectorAll('.ponto');
    let currentSlide = 0;

    function showSlide(n) {
        // Remove a classe "active" de todos os slides e pontos
        slides.forEach(slide => slide.classList.remove('active'));
        pontos.forEach(ponto => ponto.classList.remove('active'));

        // Atualiza o slide atual
        currentSlide = (n + slides.length) % slides.length;
        slides[currentSlide].classList.add('active');
        pontos[currentSlide].classList.add('active');
    }

    // Event listeners para os botões
    document.querySelector('.next').addEventListener('click', () => {
        showSlide(currentSlide + 1);
    });

    document.querySelector('.prev').addEventListener('click', () => {
        showSlide(currentSlide - 1);
    });

    // Event listeners para os pontos
    pontos.forEach((ponto, index) => {
        ponto.addEventListener('click', () => {
            showSlide(index);
        });
    });
});