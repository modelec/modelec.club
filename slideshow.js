let slideIndex = 0;
let timer;

function plusSlides(n) {
    if (timer) clearTimeout(timer);
    slideIndex+=n;
    showSlides();
}

function currentSlide(n) {
    if (timer) clearTimeout(timer);
    slideIndex = n;
    showSlides();
}

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("slide");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    if (slideIndex > slides.length - 1) {slideIndex = 0}
    slides[slideIndex].style.display = "flex";

    timer = setTimeout(() => {
        slideIndex++;
        showSlides();
    }, 5000);
}

showSlides(slideIndex);
