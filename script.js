document.addEventListener('DOMContentLoaded', () => {
    const fadeInTexts = document.querySelectorAll('.fade-in-text');
    fadeInTexts.forEach((text, index) => {
        text.style.animationDelay = `${index * 0.5}s`;
        text.classList.add('visible');
    });

    const images = document.querySelectorAll('.fade-in-image');
    images.forEach(image => {
        image.style.animation = `fadeIn 1s ease-in-out forwards`;
    });
});
