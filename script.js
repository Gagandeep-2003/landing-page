$(document).ready(function() {
    let currentIndex = 0;
    const slides = $('.slide');
    const dots = $('.dot');
    const slideCount = slides.length;
    const visibleSlides = 4;

    function showSlide(index) {
        const offset = -index * (100 / visibleSlides);
        $('.slider').css('transform', `translateX(${offset}%)`);
        dots.removeClass('active');
        dots.eq(index).addClass('active');
    }

    dots.on('click', function() {
        currentIndex = $(this).index();
        showSlide(currentIndex);
    });

    function autoSlide() {
        currentIndex = (currentIndex + 1) % slideCount;
        showSlide(currentIndex);
    }

    let slideInterval = setInterval(autoSlide, 2000);

    $('.slider-container').hover(
        function() {
            clearInterval(slideInterval);
        },
        function() {
            slideInterval = setInterval(autoSlide, 2000);
        }
    );

    $('.list-group-item').on('click', function() {
        const newImage = $(this).data('image');
        $('#projectImage').attr('src', `./images/${newImage}`);
        $('.list-group-item').removeClass('active');
        $(this).addClass('active');
    });
});

$(document).ready(function() {
    $('.list-group-item').on('click', function(event) {
        event.preventDefault();
        var imageUrl = $(this).data('image');
        $('#projectImage').attr('src', './images/' + imageUrl);
        $('.list-group-item').removeClass('active');
        $(this).addClass('active');
    });
});

// GSAP animation
document.addEventListener('DOMContentLoaded', function () {
    gsap.registerPlugin(ScrollTrigger);

    // Page load animations
    let tl = gsap.timeline();

    tl.from('.custom-text', { 
        duration: 1.5, 
        y: -50, 
        opacity: 0, 
        ease: 'power3.out', 
        delay: 0.5 
    })
    .from('.custom-image img', { 
        duration: 1.5, 
        y: 50, 
        opacity: 0, 
        ease: 'power3.out', 
        delay: 0.5 
    }, '-=1.0'); // Overlap the animations

    // Scroll-triggered animations
    gsap.timeline({
        scrollTrigger: {
            trigger: '.choose-you-section',
            start: 'top 80%',
            end: 'bottom 60%',
            scrub: 1
        }
    })
    .from('.choose-you-section .col-md-3', {
        y: 50,
        opacity: 0,
        stagger: 0.3,
        ease: 'power3.out'
    });


    gsap.timeline({
        scrollTrigger: {
            trigger: '.feedback-section',
            start: 'top 80%',
            end: 'bottom 60%',
            scrub: 1
        }
    })
    .from('.feedback-section .feedback-item', {
        y: 50,
        opacity: 0,
        ease: 'power3.out'
    });

    gsap.timeline({
        scrollTrigger: {
            trigger: '.new-section',
            start: 'top 80%',
            end: 'bottom 60%',
            scrub: 1
        }
    })
    .from('.new-section .project-row', {
        y: 50,
        opacity: 0,
        ease: 'power3.out'
    });

    gsap.timeline({
        scrollTrigger: {
            trigger: '.services',
            start: 'top 80%',
            end: 'bottom 60%',
            scrub: 1
        }
    })
    .from('.services .slider-container', {
        y: 50,
        opacity: 0,
        ease: 'power3.out'
    });

