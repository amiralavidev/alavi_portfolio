document.addEventListener("DOMContentLoaded", () => {


    /* =========================================
       Mobile Menu
    ========================================= */

    const mobileMenuButton =
        document.querySelector("#mobile-menu-btn");

    const mobileNav =
        document.querySelector("#mobile-nav");


    if (mobileMenuButton && mobileNav) {

        mobileMenuButton.addEventListener("click", () => {

            mobileNav.classList.toggle("active");


            const icon =
                mobileMenuButton.querySelector("i");


            if (mobileNav.classList.contains("active")) {

                icon.classList.remove("fa-bars");

                icon.classList.add("fa-xmark");

            } else {

                icon.classList.remove("fa-xmark");

                icon.classList.add("fa-bars");

            }

        });


        /* Close menu after clicking a link */

        const mobileLinks =
            document.querySelectorAll(".mobile-nav-link");


        mobileLinks.forEach(link => {

            link.addEventListener("click", () => {

                mobileNav.classList.remove("active");

                const icon =
                    mobileMenuButton.querySelector("i");

                icon.classList.remove("fa-xmark");

                icon.classList.add("fa-bars");

            });

        });

    }


    /* =========================================
       Smooth Scroll
    ========================================= */

    const links =
        document.querySelectorAll('a[href^="#"]');


    links.forEach(link => {

        link.addEventListener("click", function (event) {

            const targetId =
                this.getAttribute("href");


            if (targetId === "#") {
                return;
            }


            const target =
                document.querySelector(targetId);


            if (!target) {
                return;
            }


            event.preventDefault();


            const navbarHeight = 75;


            const targetPosition =
                target.getBoundingClientRect().top
                +
                window.scrollY
                -
                navbarHeight;


            window.scrollTo({

                top: targetPosition,

                behavior: "smooth"

            });

        });

    });


    /* =========================================
       Navbar Scroll Effect
    ========================================= */

    const navbar =
        document.querySelector(".navbar");


    if (navbar) {

        window.addEventListener("scroll", () => {

            if (window.scrollY > 40) {

                navbar.classList.add("scrolled");

            } else {

                navbar.classList.remove("scrolled");

            }

        });

    }


    /* =========================================
       Current Year
    ========================================= */

    const yearElement =
        document.querySelector("#current-year");


    if (yearElement) {

        yearElement.textContent =
            new Date().getFullYear();

    }


    /* =========================================
       Reveal Animation
    ========================================= */

    const revealElements =
        document.querySelectorAll(".reveal");


    if (revealElements.length > 0) {

        const observer =
            new IntersectionObserver(

                (entries) => {

                    entries.forEach(entry => {

                        if (entry.isIntersecting) {

                            entry.target.classList.add("visible");

                            observer.unobserve(entry.target);

                        }

                    });

                },

                {
                    threshold: 0.15
                }

            );


        revealElements.forEach(element => {

            observer.observe(element);

        });

    }

});