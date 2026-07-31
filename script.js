document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menu-toggle");
    const navbar = document.getElementById("navbar");

    if (menuToggle && navbar) {
        menuToggle.addEventListener("click", (e) => {
            e.stopPropagation();
            menuToggle.classList.toggle("active");
            navbar.classList.toggle("active");
        });

        document.querySelectorAll("#navbar a").forEach(link => {
            link.addEventListener("click", () => {
                menuToggle.classList.remove("active");
                navbar.classList.remove("active");
            });
        });

        document.addEventListener("click", (e) => {
            if (!navbar.contains(e.target) && !menuToggle.contains(e.target)) {
                menuToggle.classList.remove("active");
                navbar.classList.remove("active");
            }
        });
    }

    // Service Details Toggle
    document.querySelectorAll(".details-btn").forEach(button => {
        button.addEventListener("click", function () {
            const details = this.nextElementSibling;

            details.classList.toggle("active");
            this.textContent = details.classList.contains("active")
                ? "Hide Details"
                : "View Details";
        });
    });
});
