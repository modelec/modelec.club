let vslideIndex = 1;
vshowSlides(vslideIndex);

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