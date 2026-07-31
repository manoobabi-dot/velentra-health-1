document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menu-toggle");
    const navbar = document.getElementById("navbar");

    if (menuToggle && navbar) {
        // 1. Menu open aur close karne ke liye toggle function
        menuToggle.addEventListener("click", (e) => {
            e.stopPropagation();
            menuToggle.classList.toggle("active");
            navbar.classList.toggle("active");
        });

        // 2. Kisi bhi link par click karte hi menu khud band ho jaye
        document.querySelectorAll("#navbar a").forEach(link => {
            link.addEventListener("click", () => {
                menuToggle.classList.remove("active");
                navbar.classList.remove("active");
            });
        });

        // 3. Menu ke baahar click karne se menu close ho jaye
        document.addEventListener("click", (e) => {
            if (!navbar.contains(e.target) && !menuToggle.contains(e.target)) {
                menuToggle.classList.remove("active");
                navbar.classList.remove("active");
            }
        });
    }
});
