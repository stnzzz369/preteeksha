// scripts.js

// Mobile menu toggle
document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector(".nav-menu");

    if (menuToggle && navMenu) {
        menuToggle.addEventListener("click", () => {
            navMenu.classList.toggle("active");
            menuToggle.classList.toggle("active");
        });
    }

    // Smooth scrolling for nav links
    const navLinks = document.querySelectorAll(".nav-menu a[href^='#']");
    navLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href");
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
                navMenu.classList.remove("active");
                menuToggle.classList.remove("active");
            }
        });
    });

    // Fake form submission
    const contactForm = document.querySelector("#contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
            e.preventDefault();
            alert("Thank you for contacting Pratiksha! We will get back to you soon.");
            contactForm.reset();
        });
    }

    // Dynamic footer year
    const yearElement = document.querySelector("#year");
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
});
