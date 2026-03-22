const portrait = document.querySelector(".portrait");
const img = document.getElementById("portrait-img");

portrait.addEventListener("mouseenter", () => {
    img.src = "img/Profilbild.jpg";
})

portrait.addEventListener("mouseleave", () => {
    img.src = "img/mig1.jpg";
})


const fadeElements = document.querySelectorAll('section, h1, h2, h3, p, ul, li, img, .portrait, .menu, .splitscreen');

window.addEventListener('scroll', () => {
  const windowHeight = window.innerHeight;
  const fadeStart = windowHeight; // börja fade när elementets topp är utanför viewport

  fadeElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    
    if (rect.top >= windowHeight / 2) {
      // element under mitten av viewport
      let distance = rect.top - windowHeight / 2;
      let opacity = 1 - distance / (windowHeight / 2); // blir 1 när det når mitten
      opacity = Math.max(0.2, Math.min(1, opacity)); // clamp mellan 0.2–1
      el.style.opacity = opacity;
    } else {
      // element över mitten: fullt synligt
      el.style.opacity = 1;
    }
  });
});