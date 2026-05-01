// SCROLL
function scrollToContent() {
  document.querySelector(".section").scrollIntoView({
    behavior: "smooth"
  });
}

// FADE-IN
const elements = document.querySelectorAll(".fade-in");

window.addEventListener("scroll", () => {
  elements.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 50) {
      el.classList.add("show");
    }
  });
});

// SLIDER AUTO
let index = 0;
const slides = document.querySelectorAll(".slide");

setInterval(() => {
  slides[index].classList.remove("active");
  index = (index + 1) % slides.length;
  slides[index].classList.add("active");
}, 3000);
