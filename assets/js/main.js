const cards = document.querySelectorAll('.flip-card');
let
    lastScrollTop = 0,
    index = 0
;

/**
 * 
 * Slider animation code
 * 
 */
function slider () {
    let currentIndex = 0;
    const 
        slides = document.querySelectorAll('.slide'),
        tota_slide = slides.length;
    ;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            if (i === index) {
                slide.classList.add('active');
            }
        });

        document.querySelector('.slides').style.transform = `translateX(${-index * 100}%)`;
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        if (currentIndex === tota_slide - 1) {
            currentIndex = 0;
        }
        showSlide(currentIndex);
    }

    setInterval(nextSlide, 3000); // Cambia de imagen cada 3 segundos

    document.addEventListener('DOMContentLoaded', () => {
        showSlide(currentIndex);
    });
}
// Finish slider animation code
 function flipCard() {
    
    cards.forEach(card => card.classList.remove('flipped'));
    cards[index].classList.add('flipped');

    index = (index + 1) % cards.length;
 }

function scrollAnimation() {
    const 
        sections = document.querySelectorAll('.section'),
        scrollPosition = window.scrollY || document.documentElement.scrollTop,
        windowHeight = window.innerHeight
    ;

    if (scrollPosition > lastScrollTop) {
        sections.forEach(section => {
            const 
                sectionTop = section.offsetTop,
                sectionHeight = section.offsetHeight;

            if (
                scrollPosition + windowHeight >= sectionTop + sectionHeight / 4
            ) {
                section.classList.add('animate');
            }
        });
    }

    lastScrollTop = scrollPosition <= 0 ? 0 : scrollPosition
}

function modal() {
    var 
        modal = document.getElementById("myModal"),
        btn = document.getElementById("openModal"),
        span = document.getElementsByClassName("close")[0];

    // Cuando el usuario haga clic en el enlace, abre el modal
    btn.onclick = function(event) {
        event.preventDefault(); // Prevenir el comportamiento predeterminado del enlace
        modal.style.display = "block";
        document.body.classList.add('modal-open');
    }

    // Cuando el usuario haga clic en <span> (x), cierra el modal
    span.onclick = function() {
        modal.style.display = "none";
        document.body.classList.remove('modal-open');
    }

    // Cuando el usuario haga clic en cualquier lugar fuera del modal, lo cierra
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
            document.body.classList.remove('modal-open');
        }
    }
}

//invoque methods
document.addEventListener('DOMContentLoaded', () => {
    flipCard();
    setInterval(flipCard,4000);
    slider();
    modal();
});
document.addEventListener('scroll', () => {
    scrollAnimation();
});