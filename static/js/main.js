document.addEventListener("DOMContentLoaded", () => {

    /* =========================================
       Smooth Scroll
    ========================================= */

    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {

        link.addEventListener("click", function (event) {

            const targetId = this.getAttribute("href");

            if (targetId === "#") {
                return;
            }

            const target = document.querySelector(targetId);

            if (!target) {
                return;
            }

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        });

    });


    /* =========================================
       Reveal Animation
    ========================================= */

    const revealElements =
        document.querySelectorAll(".reveal");

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


    /* =========================================
       Current Year
    ========================================= */

    const yearElement =
        document.querySelector("#current-year");

    if (yearElement) {

        yearElement.textContent =
            new Date().getFullYear();

    }

});