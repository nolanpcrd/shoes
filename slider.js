const slide = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
let currentIndex = 1;
// noinspection JSUnusedGlobalSymbols
let slideInterval = setInterval(nextSlide, 10000);

dots[0].addEventListener("click", function(){
    goToSlide(1);
});
dots[1].addEventListener("click", function(){
    goToSlide(2);
});
dots[2].addEventListener("click", function(){
    goToSlide(3);
});

function showSlide(n) {
    currentIndex = n;
    if (currentIndex > slide.length) {
        currentIndex = 1;
    }
    if (currentIndex < 1) {
        currentIndex = slide.length;
    }
    for (let i = 0; i < slide.length; i++) {
        slide[i].style.left = (i - currentIndex + 1) * 100 + "%";
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }
    dots[currentIndex - 1].classList.add("active");
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

function goToSlide(n) {
    showSlide(n);
}

showSlide(currentIndex);
