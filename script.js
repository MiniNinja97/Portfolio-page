const portrait = document.querySelector(".portrait");
const img = document.getElementById("portrait-img");

portrait.addEventListener("mouseenter", () => {
    img.src = "img/Profilbild.jpg";
})

portrait.addEventListener("mouseleave", () => {
    img.src = "img/mig1.jpg";
})