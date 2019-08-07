const slideList = [{
    img: "img1.jpg",
    tekst: "pierwszy tekst"
}, {
    img: "img2.jpg",
    tekst: "drugi tekst"
}, {
    img: "img3.jpg",
    tekst: "trzeci tekst"
}];
const period = 4000;
let active = 0;

const dots = document.querySelectorAll("span");
const img = document.querySelector("img");
const txt = document.querySelector("h1");

const changeSlide = () => {
    active++;
    if (!(active < slideList.length)) active = 0;
    img.src = slideList[active].img;
    txt.textContent = slideList[active].tekst;
    dots.forEach((dot) => {
        dot.classList.remove("active");
    })
    dots[active].classList.add("active");
}
let s = setInterval(changeSlide, period);
const windows = document.querySelector("window");
window.addEventListener("keydown", (e) => {
    clearInterval(s);
    if (e.keyCode == 39) {
        changeSlide();
    }
    if (e.keyCode == 37) {
        switch (active) {
            case 0:
                active = 1;
                break;
            case 1:
                active = 2;
                break;
            case 2:
                active = 0;
                break;
        }
        changeSlide();
    }
    s = setInterval(changeSlide, period);
})