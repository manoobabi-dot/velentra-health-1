const menuToggle = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");

if (menuToggle && navbar) {

    function closeMenu() {
        navbar.classList.remove("active");
        menuToggle.classList.remove("active");
    }

    menuToggle.addEventListener("click", () => {
        navbar.classList.toggle("active");
        menuToggle.classList.toggle("active");
    });

    document.querySelectorAll("#navbar a").forEach(link => {
        link.addEventListener("click", closeMenu);
    });

    window.addEventListener("pageshow", closeMenu);
    window.addEventListener("load", closeMenu);
}
document.addEventListener("click", (e)=>{

    if(!navbar.contains(e.target) && !menuToggle.contains(e.target)){
        closeMenu();
    }

});
