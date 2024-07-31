const hamburguer = document.querySelector(".nav__hamburguer");
const linksContainer = document.querySelector(".nav__menu");
const links = document.querySelectorAll(".nav__menu__link");

hamburguer.addEventListener("click", () => {
    linksContainer.classList.toggle("active");
    hamburguer.classList.toggle("active");
});

window.addEventListener("resize", () => {
    if (window.matchMedia("(max-width: 550px)").matches) {
        closeMenu();
    }
});

if (window.matchMedia("(max-width: 550px)").matches) {
    closeMenu();
}

function closeMenu() {
    links.forEach((link) => {
        link.addEventListener("click", () => {
            linksContainer.classList.remove("active");
            hamburguer.classList.remove("active");
        });
    });
}