document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menu-toggle");
    const navbar = document.getElementById("navbar");

    if (menuToggle && navbar) {
        // Toggle menu on click
        menuToggle.addEventListener("click", (e) => {
            e.stopPropagation();
            menuToggle.classList.toggle("active");
            navbar.classList.toggle("active");
            console.log("Menu Toggled! Active state:", navbar.classList.contains("active"));
        });

        // Close menu when clicking a link
        document.querySelectorAll("#navbar a").forEach(link => {
            link.addEventListener("click", () => {
                menuToggle.classList.remove("active");
                navbar.classList.remove("active");
            });
        });

        // Close menu when clicking outside
        document.addEventListener("click", (e) => {
            if (!navbar.contains(e.target) && !menuToggle.contains(e.target)) {
                menuToggle.classList.remove("active");
                navbar.classList.remove("active");
            }
        });
    }
});
