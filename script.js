// Quantum Labs v2.0
// script.js

document.addEventListener("DOMContentLoaded", () => {

    console.log("Quantum Labs v2.0 Loaded");

    // Fade in sections as they scroll into view
    const sections = document.querySelectorAll("section, .portfolio, .about");

    if ("IntersectionObserver" in window) {

        const observer = new IntersectionObserver((entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {
                    entry.target.style.opacity = "1";
                    entry.target.style.transform = "translateY(0)";
                }

            });

        }, {
            threshold: 0.15
        });

        sections.forEach(section => {

            section.style.opacity = "0";
            section.style.transform = "translateY(25px)";
            section.style.transition =
                "opacity 0.6s ease, transform 0.6s ease";

            observer.observe(section);

        });

    }

    // Hero Button Glow
    const heroButton = document.querySelector(".hero-button");

    if (heroButton) {

        heroButton.addEventListener("mouseenter", () => {

            heroButton.style.boxShadow =
                "0 0 30px rgba(0,191,255,.45)";

        });

        heroButton.addEventListener("mouseleave", () => {

            heroButton.style.boxShadow = "";

        });

    }

});