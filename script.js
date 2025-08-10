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
                alert("Thank you for contacting Pratheeksha! We will get back to you soon.");
                contactForm.reset();
            });
        }

    // Dynamic footer year
    const yearElement = document.querySelector("#year");
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // Slideshow functionality
    const slideshowContainer = document.querySelector(".slideshow-container");
    console.log("Slideshow container found:", slideshowContainer);
    if (slideshowContainer) {
        const slides = slideshowContainer.querySelectorAll(".slide");
        const slideButtons = slideshowContainer.querySelectorAll(".slide-btn");
        console.log("Found slides:", slides.length, "Found buttons:", slideButtons.length);
        let currentSlide = 0;
        let slideInterval;
        let isTransitioning = false;

        // Ensure first slide is active on load
        if (slides.length > 0) {
            slides[0].classList.add("active");
            if (slideButtons.length > 0) {
                slideButtons[0].classList.add("active");
            }
        }

        function showSlide(index) {
            if (isTransitioning || index < 0 || index >= slides.length) return;
            
            isTransitioning = true;
            
            // Remove active class from all slides and buttons
            slides.forEach(slide => slide.classList.remove("active"));
            slideButtons.forEach(btn => btn.classList.remove("active"));
            
            // Add active class to current slide and button
            slides[index].classList.add("active");
            if (slideButtons[index]) {
                slideButtons[index].classList.add("active");
            }
            
            currentSlide = index;
            
            // Wait for transition to complete before allowing next transition
            setTimeout(() => {
                isTransitioning = false;
            }, 2500); // Match the CSS transition duration
        }

        function nextSlide() {
            if (isTransitioning) return;
            const nextIndex = (currentSlide + 1) % slides.length;
            showSlide(nextIndex);
        }

        function startSlideshow() {
            if (slideInterval) {
                clearInterval(slideInterval);
            }
            slideInterval = setInterval(nextSlide, 6500);
        }

        function stopSlideshow() {
            if (slideInterval) {
                clearInterval(slideInterval);
                slideInterval = null;
            }
        }

        // Add click event listeners to slide buttons
        slideButtons.forEach((button, index) => {
            button.addEventListener("click", () => {
                if (isTransitioning) return;
                stopSlideshow();
                showSlide(index);
                startSlideshow();
            });
        });

        // Pause slideshow on hover
        slideshowContainer.addEventListener("mouseenter", stopSlideshow);
        slideshowContainer.addEventListener("mouseleave", startSlideshow);

        // Start the slideshow after a short delay to ensure everything is loaded
        setTimeout(() => {
            startSlideshow();
            console.log("Slideshow started");
        }, 1000);
    } else {
        console.log("Slideshow container not found");
    }
    
    // Add smooth scroll behavior for better UX
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Add intersection observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.product-card, .section-head');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});
