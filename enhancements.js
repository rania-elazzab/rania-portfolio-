/* =========================================================
   RANIA EL AZZAB — PREMIUM INTERACTIONS
   ADD-ON JAVASCRIPT
   Works alongside the original script.js
========================================================= */

"use strict";


/* =========================================================
   01. REDUCED MOTION CHECK
========================================================= */

const reduceMotion =
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;


/* =========================================================
   02. SCROLL REVEAL
========================================================= */

const revealSelectors = [
    "#about .section-intro",
    "#about .about-container",
    "#services .section-header",
    "#services .service-card",
    "#skills .section-header",
    "#skills .skill-card",
    "#projects .section-header",
    "#projects .project-card",
    "#contact .contact-intro",
    "#contact .contact-form",
    "footer"
];

const enhancedRevealElements =
    document.querySelectorAll(
        revealSelectors.join(", ")
    );


enhancedRevealElements.forEach((element) => {
    element.classList.add("reveal");
});


if (!reduceMotion) {

    const enhancedObserver =
        new IntersectionObserver(
            (entries, observer) => {

                entries.forEach((entry) => {

                    if (!entry.isIntersecting) {
                        return;
                    }

                    entry.target.classList.add("show");

                    observer.unobserve(entry.target);

                });

            },
            {
                threshold: 0.12,
                rootMargin: "0px 0px -60px 0px"
            }
        );


    enhancedRevealElements.forEach((element) => {
        enhancedObserver.observe(element);
    });

} else {

    enhancedRevealElements.forEach((element) => {
        element.classList.add("show");
    });

}


/* =========================================================
   03. STAGGER CARDS
========================================================= */

const staggerContainers = [
    document.querySelector(".services-grid"),
    document.querySelector(".skills-grid"),
    document.querySelector(".projects-grid"),
    document.querySelector(".contact-links")
];


staggerContainers.forEach((container) => {

    if (!container) {
        return;
    }

    container.classList.add("reveal-stagger");

});


/* =========================================================
   04. HERO ENTRANCE
========================================================= */

const premiumHeroText =
    document.querySelector(".hero-text");

const premiumHeroVisual =
    document.querySelector(".hero-visual");


if (!reduceMotion) {

    if (premiumHeroText) {

        premiumHeroText.style.opacity = "0";
        premiumHeroText.style.transform =
            "translateY(35px)";

        requestAnimationFrame(() => {

            setTimeout(() => {

                premiumHeroText.style.transition =
                    "opacity 1s cubic-bezier(.16,1,.3,1), transform 1s cubic-bezier(.16,1,.3,1)";

                premiumHeroText.style.opacity = "1";
                premiumHeroText.style.transform =
                    "translateY(0)";

            }, 120);

        });

    }


    if (premiumHeroVisual) {

        premiumHeroVisual.style.opacity = "0";
        premiumHeroVisual.style.transform =
            "translateY(30px) scale(.97)";

        requestAnimationFrame(() => {

            setTimeout(() => {

                premiumHeroVisual.style.transition =
                    "opacity 1.2s cubic-bezier(.16,1,.3,1), transform 1.2s cubic-bezier(.16,1,.3,1)";

                premiumHeroVisual.style.opacity = "1";
                premiumHeroVisual.style.transform =
                    "translateY(0) scale(1)";

            }, 300);

        });

    }

}


/* =========================================================
   05. HERO IMAGE PARALLAX
========================================================= */

if (!reduceMotion && premiumHeroVisual) {

    let targetX = 0;
    let targetY = 0;

    let currentX = 0;
    let currentY = 0;

    const heroImage =
        premiumHeroVisual.querySelector(".hero-image");


    premiumHeroVisual.addEventListener(
        "mousemove",
        (event) => {

            const rect =
                premiumHeroVisual.getBoundingClientRect();

            const x =
                (event.clientX - rect.left) /
                    rect.width -
                0.5;

            const y =
                (event.clientY - rect.top) /
                    rect.height -
                0.5;

            targetX = x * 12;
            targetY = y * 10;

        }
    );


    premiumHeroVisual.addEventListener(
        "mouseleave",
        () => {

            targetX = 0;
            targetY = 0;

        }
    );


    function animateHeroVisual() {

        currentX +=
            (targetX - currentX) * 0.08;

        currentY +=
            (targetY - currentY) * 0.08;


        if (
            heroImage &&
            !heroImage.classList.contains(
                "hero-parallax-disabled"
            )
        ) {

            heroImage.style.transform =
                `translate3d(${currentX}px, ${currentY}px, 0) rotate(3deg)`;

        }


        requestAnimationFrame(
            animateHeroVisual
        );

    }


    animateHeroVisual();

}


/* =========================================================
   06. SCROLL-BASED HERO DEPTH
========================================================= */

if (!reduceMotion && premiumHeroVisual) {

    let heroScrollTicking = false;


    window.addEventListener(
        "scroll",
        () => {

            if (heroScrollTicking) {
                return;
            }

            window.requestAnimationFrame(() => {

                const scroll =
                    window.scrollY;


                if (scroll < window.innerHeight) {

                    const amount =
                        scroll * 0.035;

                    premiumHeroVisual.style.marginTop =
                        `${amount}px`;

                }


                heroScrollTicking = false;

            });

            heroScrollTicking = true;

        },
        {
            passive: true
        }
    );

}


/* =========================================================
   07. MOUSE LIGHT ON CARDS
========================================================= */

const interactiveCards =
    document.querySelectorAll(
        ".service-card, .skill-card, .project-card"
    );


if (!reduceMotion) {

    interactiveCards.forEach((card) => {

        card.addEventListener(
            "mousemove",
            (event) => {

                const rect =
                    card.getBoundingClientRect();

                const x =
                    ((event.clientX - rect.left) /
                        rect.width) *
                    100;

                const y =
                    ((event.clientY - rect.top) /
                        rect.height) *
                    100;

                card.style.setProperty(
                    "--mouse-x",
                    `${x}%`
                );

                card.style.setProperty(
                    "--mouse-y",
                    `${y}%`
                );

            }
        );


        card.addEventListener(
            "mouseleave",
            () => {

                card.style.removeProperty(
                    "--mouse-x"
                );

                card.style.removeProperty(
                    "--mouse-y"
                );

            }
        );

    });

}


/* =========================================================
   08. NAVIGATION SCROLL STATE
========================================================= */

const navigation =
    document.querySelector("nav");


if (navigation) {

    let navTicking = false;


    function updateNavigation() {

        if (window.scrollY > 40) {

            navigation.classList.add(
                "nav-scrolled"
            );

        } else {

            navigation.classList.remove(
                "nav-scrolled"
            );

        }

        navTicking = false;

    }


    window.addEventListener(
        "scroll",
        () => {

            if (!navTicking) {

                window.requestAnimationFrame(
                    updateNavigation
                );

                navTicking = true;

            }

        },
        {
            passive: true
        }
    );


    updateNavigation();

}


/* =========================================================
   09. ACTIVE NAVIGATION ON SCROLL
========================================================= */

const sections =
    document.querySelectorAll(
        "section[id]"
    );


const navigationItems =
    document.querySelectorAll(
        "nav a[href^='#']"
    );


if (
    sections.length &&
    navigationItems.length
) {

    const sectionObserver =
        new IntersectionObserver(
            (entries) => {

                entries.forEach((entry) => {

                    if (!entry.isIntersecting) {
                        return;
                    }


                    navigationItems.forEach((link) => {

                        link.classList.remove(
                            "active"
                        );


                        const target =
                            link.getAttribute(
                                "href"
                            );


                        if (
                            target ===
                            `#${entry.target.id}`
                        ) {

                            link.classList.add(
                                "active"
                            );

                        }

                    });

                });

            },
            {
                threshold: 0.35
            }
        );


    sections.forEach((section) => {
        sectionObserver.observe(section);
    });

}


/* =========================================================
   10. SMOOTH ANCHOR EXPERIENCE
========================================================= */

navigationItems.forEach((link) => {

    link.addEventListener(
        "click",
        () => {

            const targetId =
                link.getAttribute("href");


            if (
                !targetId ||
                targetId === "#"
            ) {
                return;
            }


            const target =
                document.querySelector(
                    targetId
                );


            if (!target) {
                return;
            }


            if (!reduceMotion) {

                target.animate(
                    [
                        {
                            opacity: 0.92
                        },
                        {
                            opacity: 1
                        }
                    ],
                    {
                        duration: 500,
                        easing:
                            "cubic-bezier(.16,1,.3,1)"
                    }
                );

            }

        }
    );

});


/* =========================================================
   11. BUTTON HOVER MAGNETIC STRENGTH
========================================================= */

const premiumButtons =
    document.querySelectorAll(
        ".hero-button, .project-button, .submit-button"
    );


if (!reduceMotion) {

    premiumButtons.forEach((button) => {

        button.addEventListener(
            "mousemove",
            (event) => {

                const rect =
                    button.getBoundingClientRect();


                const x =
                    event.clientX -
                    rect.left -
                    rect.width / 2;


                const y =
                    event.clientY -
                    rect.top -
                    rect.height / 2;


                button.style.transform =
                    `translate(${x * 0.06}px, ${y * 0.06}px)`;

            }
        );


        button.addEventListener(
            "mouseleave",
            () => {

                button.style.transform = "";

            }
        );

    });

}


/* =========================================================
   12. CONTACT LINKS STAGGER
========================================================= */

const contactLinks =
    document.querySelectorAll(
        ".contact-links a"
    );


contactLinks.forEach(
    (link, index) => {

        link.style.setProperty(
            "--contact-delay",
            `${index * 70}ms`
        );

    }
);


/* =========================================================
   13. IMAGE LOADING FADE
========================================================= */

const images =
    document.querySelectorAll("img");


images.forEach((image) => {

    if (image.complete) {

        image.classList.add(
            "image-loaded"
        );

        return;

    }


    image.addEventListener(
        "load",
        () => {

            image.classList.add(
                "image-loaded"
            );

        },
        {
            once: true
        }
    );

});


/* =========================================================
   14. PARALLAX FLOATING CARDS
========================================================= */

const floatingCards =
    document.querySelectorAll(
        ".floating-card"
    );


if (!reduceMotion) {

    floatingCards.forEach(
        (card, index) => {

            let current = 0;
            let target = 0;


            card.addEventListener(
                "mousemove",
                (event) => {

                    const rect =
                        card.getBoundingClientRect();


                    const position =
                        (event.clientY -
                            rect.top) /
                            rect.height -
                        0.5;


                    target =
                        position *
                        (index % 2 === 0 ? -5 : 5);

                }
            );


            card.addEventListener(
                "mouseleave",
                () => {

                    target = 0;

                }
            );


            function animateCard() {

                current +=
                    (target - current) *
                    0.08;


                card.style.setProperty(
                    "--float-extra",
                    `${current}px`
                );


                requestAnimationFrame(
                    animateCard
                );

            }


            animateCard();

        }
    );

}


/* =========================================================
   15. FOOTER REVEAL
========================================================= */

const footer =
    document.querySelector("footer");


if (footer) {

    footer.classList.add(
        "reveal"
    );

}


/* =========================================================
   16. DEEP SCROLL REVEAL
========================================================= */

if (!reduceMotion) {

    const deepRevealElements =
        document.querySelectorAll(
            "#about .about-main p, " +
            "#about .fact, " +
            "#services .service-card, " +
            "#skills .skill-card, " +
            "#projects .project-card, " +
            "#contact .contact-links a, " +
            "#contact .form-group, " +
            "#contact .submit-button"
        );


    deepRevealElements.forEach(
        (element, index) => {

            element.classList.add(
                "deep-reveal"
            );


            element.style.transitionDelay =
                `${(index % 6) * 90}ms`;

        }
    );


    const deepRevealObserver =
        new IntersectionObserver(
            (entries, observer) => {

                entries.forEach((entry) => {

                    if (!entry.isIntersecting) {
                        return;
                    }


                    entry.target.classList.add(
                        "deep-show"
                    );


                    observer.unobserve(
                        entry.target
                    );

                });

            },
            {
                threshold: 0.12,
                rootMargin: "0px 0px -40px 0px"
            }
        );


    deepRevealElements.forEach((element) => {

        deepRevealObserver.observe(
            element
        );

    });

} else {

    document
        .querySelectorAll(
            "#about .about-main p, " +
            "#about .fact, " +
            "#services .service-card, " +
            "#skills .skill-card, " +
            "#projects .project-card, " +
            "#contact .contact-links a, " +
            "#contact .form-group, " +
            "#contact .submit-button"
        )
        .forEach((element) => {

            element.classList.add(
                "deep-reveal",
                "deep-show"
            );

        });

}


/* =========================================================
   17. FINAL MESSAGE
========================================================= */

console.log(
    "Rania El Azzab — Premium interactions loaded successfully."
);

