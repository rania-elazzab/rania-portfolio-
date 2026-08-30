/* =========================================================
   RANIA EL AZZAB — PORTFOLIO JAVASCRIPT
========================================================= */


/* =========================================================
   1. PAGE LOADED
========================================================= */

window.addEventListener("load", () => {
    document.body.classList.add("loaded");
});


/* =========================================================
   2. NAVIGATION
========================================================= */

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach((link) => {

    link.addEventListener("click", () => {

        navLinks.forEach((item) => {
            item.classList.remove("active");
        });

        link.classList.add("active");

    });

});


/* =========================================================
   3. SCROLL REVEAL
========================================================= */

const revealElements = document.querySelectorAll(
    "section, .skill-card, .project-card, .about-container, .card"
);

const revealObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }

        });

    },
    {
        threshold: 0.15
    }
);


revealElements.forEach((element) => {

    element.classList.add("reveal");

    revealObserver.observe(element);

});


/* =========================================================
   4. SKILLS
   HOVER + CLICK
========================================================= */

const skillCards =
    document.querySelectorAll(".skill-card");


skillCards.forEach((card) => {


    /* -----------------------------------------------------
       CLICK EFFECT
    ----------------------------------------------------- */

    card.addEventListener("click", function () {

        skillCards.forEach((item) => {

            if (item !== this) {
                item.classList.remove("active");
                item.style.transform = "";
            }

        });

        this.classList.toggle("active");

    });


    /* -----------------------------------------------------
       MOUSE MOVE
    ----------------------------------------------------- */

    card.addEventListener("mousemove", function (event) {

        if (this.classList.contains("active")) {
            return;
        }

        const rect =
            this.getBoundingClientRect();

        const mouseX =
            event.clientX - rect.left;

        const mouseY =
            event.clientY - rect.top;

        const centerX =
            rect.width / 2;

        const centerY =
            rect.height / 2;

        const rotateX =
            ((mouseY - centerY) / centerY) * -6;

        const rotateY =
            ((mouseX - centerX) / centerX) * 6;

        this.style.transform =
            `translateY(-12px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             scale(1.025)`;

    });


    /* -----------------------------------------------------
       MOUSE LEAVE
    ----------------------------------------------------- */

    card.addEventListener("mouseleave", function () {

        if (!this.classList.contains("active")) {
            this.style.transform = "";
        }

    });

});


/* =========================================================
   5. PROJECTS
   HOVER + CLICK
========================================================= */

const projectCards =
    document.querySelectorAll(".project-card");


projectCards.forEach((card) => {


    /* -----------------------------------------------------
       CLICK EFFECT
    ----------------------------------------------------- */

    card.addEventListener("click", function () {

        projectCards.forEach((item) => {

            if (item !== this) {
                item.classList.remove("project-active");
                item.style.transform = "";
            }

        });

        this.classList.toggle("project-active");

    });


    /* -----------------------------------------------------
       MOUSE MOVE
    ----------------------------------------------------- */

    card.addEventListener("mousemove", function (event) {

        if (this.classList.contains("project-active")) {
            return;
        }

        const rect =
            this.getBoundingClientRect();

        const mouseX =
            event.clientX - rect.left;

        const mouseY =
            event.clientY - rect.top;

        const centerX =
            rect.width / 2;

        const centerY =
            rect.height / 2;

        const rotateX =
            ((mouseY - centerY) / centerY) * -5;

        const rotateY =
            ((mouseX - centerX) / centerX) * 5;

        this.style.transform =
            `translateY(-15px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             scale(1.02)`;

    });


    /* -----------------------------------------------------
       MOUSE LEAVE
    ----------------------------------------------------- */

    card.addEventListener("mouseleave", function () {

        if (!this.classList.contains("project-active")) {
            this.style.transform = "";
        }

    });

});


/* =========================================================
   6. RIPPLE EFFECT FOR BUTTONS
========================================================= */

const buttons =
    document.querySelectorAll(
        ".hero-button, .project-button"
    );


buttons.forEach((button) => {

    button.addEventListener("click", function (event) {

        const ripple =
            document.createElement("span");

        ripple.classList.add("ripple");

        const rect =
            this.getBoundingClientRect();

        ripple.style.left =
            `${event.clientX - rect.left}px`;

        ripple.style.top =
            `${event.clientY - rect.top}px`;

        this.appendChild(ripple);

        setTimeout(() => {
            ripple.remove();
        }, 700);

    });

});


/* =========================================================
   7. TYPING EFFECT
========================================================= */

const typingElement =
    document.querySelector(".typing-text");


if (typingElement) {

    const words = [
        "Web Developer",
        "Commerce & Marketing Student",
        "Digital Creator",
        "Marketing Learner"
    ];

    let wordIndex = 0;
    let characterIndex = 0;
    let isDeleting = false;


    function typeEffect() {

        const currentWord =
            words[wordIndex];


        if (!isDeleting) {

            typingElement.textContent =
                currentWord.substring(
                    0,
                    characterIndex + 1
                );

            characterIndex++;


            if (
                characterIndex ===
                currentWord.length
            ) {

                isDeleting = true;

                setTimeout(
                    typeEffect,
                    1500
                );

                return;
            }

        } else {

            typingElement.textContent =
                currentWord.substring(
                    0,
                    characterIndex - 1
                );

            characterIndex--;


            if (characterIndex === 0) {

                isDeleting = false;

                wordIndex++;

                if (
                    wordIndex >= words.length
                ) {
                    wordIndex = 0;
                }

            }

        }


        setTimeout(
            typeEffect,
            isDeleting ? 55 : 95
        );

    }


    typeEffect();

}


/* =========================================================
   8. CURSOR GLOW
========================================================= */

const cursorGlow =
    document.createElement("div");

cursorGlow.classList.add(
    "cursor-glow"
);

document.body.appendChild(
    cursorGlow
);


document.addEventListener(
    "mousemove",
    (event) => {

        cursorGlow.style.left =
            `${event.clientX}px`;

        cursorGlow.style.top =
            `${event.clientY}px`;

    }
);


/* =========================================================
   9. MAGNETIC ELEMENTS
========================================================= */

const magneticElements =
    document.querySelectorAll(
        ".hero-button, .project-button, .logo"
    );


magneticElements.forEach((element) => {

    element.addEventListener(
        "mousemove",
        function (event) {

            const rect =
                this.getBoundingClientRect();

            const x =
                event.clientX -
                rect.left -
                rect.width / 2;

            const y =
                event.clientY -
                rect.top -
                rect.height / 2;

            this.style.transform =
                `translate(
                    ${x * 0.12}px,
                    ${y * 0.12}px
                )`;

        }
    );


    element.addEventListener(
        "mouseleave",
        function () {

            this.style.transform = "";

        }
    );

});


/* =========================================================
   10. CURRENT YEAR
========================================================= */

const yearElement =
    document.querySelector(
        "#current-year"
    );


if (yearElement) {

    yearElement.textContent =
        new Date().getFullYear();

}


/* =========================================================
   11. BACK TO TOP
========================================================= */

const backToTop =
    document.querySelector(
        "#back-to-top"
    );


if (backToTop) {

    window.addEventListener(
        "scroll",
        () => {

            if (window.scrollY > 500) {

                backToTop.classList.add(
                    "visible"
                );

            } else {

                backToTop.classList.remove(
                    "visible"
                );

            }

        }
    );


    backToTop.addEventListener(
        "click",
        () => {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }
    );

}


/* =========================================================
   12. ESC KEY
   CLOSE ACTIVE CARDS
========================================================= */

document.addEventListener(
    "keydown",
    (event) => {

        if (event.key === "Escape") {

            skillCards.forEach((card) => {
                card.classList.remove("active");
                card.style.transform = "";
            });


            projectCards.forEach((card) => {
                card.classList.remove(
                    "project-active"
                );

                card.style.transform = "";
            });

        }

    }
);


/* =========================================================
   13. CONSOLE MESSAGE
========================================================= */

console.log(
    "Rania El Azzab Portfolio — JavaScript loaded successfully."
);

/* =========================================================
   14 — HERO IMAGE 3D MOUSE INTERACTION
========================================================= */

const heroVisual = document.querySelector(".hero-visual");
const heroImage = document.querySelector(".hero-image");

if (heroVisual && heroImage) {

    heroVisual.addEventListener("mousemove", (event) => {

        const rect = heroVisual.getBoundingClientRect();

        const x =
            event.clientX - rect.left;

        const y =
            event.clientY - rect.top;

        const centerX =
            rect.width / 2;

        const centerY =
            rect.height / 2;

        const rotateX =
            ((y - centerY) / centerY) * -4;

        const rotateY =
            ((x - centerX) / centerX) * 5;

        heroImage.style.transform =
            `rotate(3deg)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             scale(1.025)`;

    });


    heroVisual.addEventListener("mouseleave", () => {

        heroImage.style.transform =
            "rotate(3deg) rotateX(0deg) rotateY(0deg) scale(1)";

    });

}

