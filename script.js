const menuToggle = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");

if (menuToggle && navbar) {
    // 1. Menu close karne ka function
    function closeMenu() {
        navbar.classList.remove("active");
        menuToggle.classList.remove("active");
    }

    // 2. Hamburger button par click toggle
    menuToggle.addEventListener("click", () => {
        navbar.classList.toggle("active");
        menuToggle.classList.toggle("active");
    });

    // 3. Kisi bhi link par click karne se menu khud band ho jaye
    document.querySelectorAll("#navbar a").forEach(link => {
        link.addEventListener("click", closeMenu);
    });

    // 4. Menu ke baahar screen par kahin bhi click ho to menu band ho jaye
    document.addEventListener("click", (e) => {
        if (!navbar.contains(e.target) && !menuToggle.contains(e.target)) {
            closeMenu();
        }
    });

    // 5. Naye page par jaane ya reload hone par menu band mile
    window.addEventListener("pageshow", closeMenu);
    window.addEventListener("load", closeMenu);
}
