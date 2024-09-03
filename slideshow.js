document.querySelectorAll(".slideshow-container").forEach((container) => {
    let slideIndex = 0;
    let timer;

    let sliderChild = [...container.children].filter(child => child.classList.contains("slide"));

    let prevBtn = container.querySelector(".prev");
    let nextBtn = container.querySelector(".next");

    prevBtn.addEventListener("click", () => plusSlides(-1));
    nextBtn.addEventListener("click", () => plusSlides(1));

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
        for (i = 0; i < sliderChild.length; i++) {
            sliderChild[i].style.display = "none";
        }
        if (slideIndex > sliderChild.length - 1) {slideIndex = 0}
        sliderChild[slideIndex].style.display = "flex";

        if (container.classList.contains("autoslide")) {
            timer = setTimeout(() => {
                slideIndex++;
                showSlides();
            }, 5000);
        }
    }

    showSlides(slideIndex);
});
