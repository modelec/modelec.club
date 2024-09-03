let slideIndex = 1;
let vslideIndex = 1;
showSlides(slideIndex);
vshowSlides(vslideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "flex";
    setTimeout(showSlides, 5000);
}

function vplusSlides(n) {
    vshowSlides(vslideIndex += n);
}

function vcurrentSlide(n) {
    vshowSlides(vslideIndex = n);
}

function vshowSlides(n) {
    let i;
    let slides = document.getElementsByClassName("vslide");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    vslideIndex++;
    if (vslideIndex > slides.length) {vslideIndex = 1}
    slides[vslideIndex-1].style.display = "flex";
}