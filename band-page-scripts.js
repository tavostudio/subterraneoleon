// Añadir funcionalidad a la galería y el formulario de suscripción

// Evento para la suscripción al newsletter
document.getElementById('newsletter-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('¡Gracias por suscribirte a nuestro newsletter!');
    this.reset();
});
// Toggle del menú de navegación en móvil
document.getElementById('nav-toggle').addEventListener('click', function () {
    const menu = document.getElementById('nav-menu');
    menu.classList.toggle('active');

    // Deshabilita el scroll del cuerpo mientras el menú está abierto
    if (menu.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
});
document.getElementById('nav-toggle').addEventListener('click', function () {
    console.log('Menú alternado');
    const menu = document.getElementById('nav-menu');
    menu.classList.toggle('active');
});

document.addEventListener("DOMContentLoaded", function () {
    const videos = document.querySelectorAll(".lazy-video");

    const lazyLoadVideo = (video) => {
        const source = video.querySelector("source");
        if (source && source.dataset.src) {
            source.src = source.dataset.src;
            video.load();
        }
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                lazyLoadVideo(entry.target);
                observer.unobserve(entry.target);
            }
        });
    });

    videos.forEach((video) => {
        observer.observe(video);
    });
});
