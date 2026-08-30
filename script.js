/* =========================================================
   RANIA EL AZZAB — SAFE TEXT ANIMATIONS
   JavaScript only
   DOES NOT MODIFY index.html
   ========================================================= */

(function () {
    "use strict";

    /* =========================================================
       1. ABOUT ME TYPEWRITER
       ========================================================= */

    const aboutText =
        "I'm Rania El Azzab, a student exploring Web Development, English Language, and Gestion — Commerce & Marketing. I enjoy bringing creativity, business, and technology together to build meaningful digital experiences.";

    function findAboutText() {

        const elements = document.querySelectorAll("p, span");

        for (const element of elements) {

            const text = element.textContent.trim();

            if (
                text.startsWith(
                    "I'm Rania El Azzab, a student exploring"
                )
            ) {
                return element;
            }
        }

        return null;
    }


    function startAboutAnimation() {

        const element = findAboutText();

        if (!element) {
            console.log("About Me text not found.");
            return;
        }

        /*
         * Do not touch elements containing other HTML.
         */

        if (element.children.length > 0) {
            console.log(
                "About Me contains HTML — animation skipped safely."
            );
            return;
        }

        /*
         * Prevent animation from starting twice.
         */

        if (element.dataset.aboutAnimated === "true") {
            return;
        }

        element.dataset.aboutAnimated = "true";

        element.textContent = "";

        let i = 0;

        function writeText() {

            if (i < aboutText.length) {

                element.textContent += aboutText.charAt(i);

                i++;

                setTimeout(writeText, 28);

            }
        }

        writeText();
    }


    /* =========================================================
       2. SPECIALTIES
       ========================================================= */

    const specialties = [
        "English Student",
        "Web Development Student",
        "Commerce & Marketing Student",
        "Digital Creator",
        "Business & Marketing Learner"
    ];


    /* =========================================================
       3. FIND MAIN HERO TITLE
       ========================================================= */

    function findMainTitle() {

        const elements = document.querySelectorAll(
            "h1, h2, h3, h4, h5, h6"
        );

        for (const element of elements) {

            const text = element.textContent.trim();

            /*
             * Find the title containing Rania.
             */

            if (
                text.includes("Rania") ||
                text.includes("RANIA")
            ) {
                return element;
            }
        }

        return null;
    }


    /* =========================================================
       4. CREATE SPECIALTY TEXT
       ========================================================= */

    function createMovingText() {

        /*
         * Prevent duplicate creation.
         */

        if (
            document.getElementById(
                "rania-dynamic-specialty"
            )
        ) {
            return;
        }


        const title = findMainTitle();

        if (!title) {

            console.log(
                "Main hero title not found."
            );

            return;
        }


        /*
         * Create the new text only with JavaScript.
         * index.html stays untouched.
         */

        const dynamicText =
            document.createElement("div");


        dynamicText.id =
            "rania-dynamic-specialty";


        /*
         * Safe styling.
         * It only affects the new element.
         */

        dynamicText.style.marginTop = "12px";

        dynamicText.style.minHeight = "28px";

        dynamicText.style.display = "block";

        dynamicText.style.textAlign =
            "inherit";

        dynamicText.style.fontSize =
            "inherit";

        dynamicText.style.fontFamily =
            "inherit";

        dynamicText.style.fontWeight =
            "inherit";

        dynamicText.style.lineHeight =
            "1.5";

        dynamicText.style.opacity =
            "0.9";

        dynamicText.style.overflow =
            "hidden";

        dynamicText.style.whiteSpace =
            "nowrap";


        /*
         * Put it directly below the main title.
         */

        title.insertAdjacentElement(
            "afterend",
            dynamicText
        );


        /*
         * Start continuous animation.
         */

        startSpecialtyAnimation(
            dynamicText
        );
    }


    /* =========================================================
       5. CONTINUOUS TYPING / DELETING
       ========================================================= */

    function startSpecialtyAnimation(element) {

        let current = 0;

        let position = 0;

        let deleting = false;


        function animate() {

            /*
             * Safety check.
             */

            if (!element) {
                return;
            }


            const text =
                specialties[current];


            /* =================================================
               TYPING
               ================================================= */

            if (!deleting) {

                element.textContent =
                    text.substring(
                        0,
                        position + 1
                    );

                position++;


                /*
                 * Finished typing.
                 */

                if (
                    position >=
                    text.length
                ) {

                    setTimeout(
                        function () {

                            deleting = true;

                            animate();

                        },
                        1500
                    );

                    return;
                }


                /*
                 * Typing speed.
                 */

                setTimeout(
                    animate,
                    75
                );

                return;
            }


            /* =================================================
               DELETING
               ================================================= */

            element.textContent =
                text.substring(
                    0,
                    position - 1
                );

            position--;


            /*
             * Finished deleting.
             */

            if (position <= 0) {

                position = 0;

                deleting = false;

                current++;


                /*
                 * Start again from first specialty
                 * after the last one.
                 */

                if (
                    current >=
                    specialties.length
                ) {
                    current = 0;
                }


                /*
                 * Small pause before next word.
                 */

                setTimeout(
                    animate,
                    300
                );

                return;
            }


            /*
             * Deleting speed.
             */

            setTimeout(
                animate,
                45
            );
        }


        /*
         * Start animation.
         */

        animate();
    }


    /* =========================================================
       6. START EVERYTHING
       ========================================================= */

    function startAnimations() {

        /*
         * Give the existing website / loader
         * enough time to finish.
         */

        setTimeout(
            function () {

                /*
                 * About Me
                 */

                startAboutAnimation();


                /*
                 * Dynamic specialty
                 */

                createMovingText();

            },
            1800
        );
    }


    /* =========================================================
       7. PAGE READY
       ========================================================= */

    if (
        document.readyState ===
        "loading"
    ) {

        document.addEventListener(
            "DOMContentLoaded",
            startAnimations
        );

    } else {

        startAnimations();
    }

})();





/* =========================================================
   CONTACT FORM — FORMSUBMIT
   Sends messages to Rania's main Gmail
   ========================================================= */

(function () {
    "use strict";

    document.addEventListener("DOMContentLoaded", function () {

        const form = document.querySelector("form");

        if (!form) {
            console.log("Contact form not found.");
            return;
        }

        /*
         * Only use this for the contact form.
         */

        const messageField =
            form.querySelector('textarea');

        const emailField =
            form.querySelector('input[type="email"]');

        const nameField =
            form.querySelector(
                'input[type="text"], input[name="name"]'
            );

        /*
         * Make sure this is actually the
         * Send a Message form.
         */

        if (!messageField || !emailField || !nameField) {
            console.log("Contact form fields not found.");
            return;
        }

        /*
         * Give the fields names so FormSubmit
         * can receive their values.
         */

        nameField.name = "name";
        emailField.name = "email";
        messageField.name = "message";

        /*
         * FormSubmit destination
         */

        form.action =
            "https://formsubmit.co/raniaelazzab31@gmail.com";

        form.method = "POST";

        /*
         * Prevent duplicate handlers.
         */

        if (form.dataset.formsubmitReady === "true") {
            return;
        }

        form.dataset.formsubmitReady = "true";


        form.addEventListener("submit", async function (event) {

            event.preventDefault();

            const submitButton =
                form.querySelector(
                    'button[type="submit"], input[type="submit"]'
                );

            const originalText =
                submitButton
                    ? submitButton.textContent
                    : "";


            if (submitButton) {
                submitButton.disabled = true;
                submitButton.textContent = "Sending...";
            }


            const formData =
                new FormData(form);


            try {

                const response =
                    await fetch(
                        "https://formsubmit.co/ajax/raniaelazzab31@gmail.com",
                        {
                            method: "POST",
                            body: formData,
                            headers: {
                                "Accept":
                                    "application/json"
                            }
                        }
                    );


                if (!response.ok) {
                    throw new Error(
                        "FormSubmit request failed."
                    );
                }


                const result =
                    await response.json();


                if (
                    result.success === true ||
                    result.success === "true"
                ) {

                    /*
                     * Show your existing success message.
                     */

                    const successMessage =
                        Array.from(
                            document.querySelectorAll("*")
                        ).find(function (element) {

                            return (
                                element.children.length === 0 &&
                                element.textContent
                                    .trim()
                                    .includes(
                                        "Thank you! Your message has been sent successfully"
                                    )
                            );

                        });


                    if (successMessage) {
                        successMessage.style.display =
                            "block";
                    }

                    /*
                     * Clear the form.
                     */

                    form.reset();

                } else {

                    alert(
                        "Your message could not be sent. Please try again."
                    );
                }

            } catch (error) {

                console.error(
                    "Contact form error:",
                    error
                );

                alert(
                    "There was a problem sending your message. Please try again."
                );

            } finally {

                if (submitButton) {

                    submitButton.disabled =
                        false;

                    submitButton.textContent =
                        originalText ||
                        "Send Message";
                }
            }

        });

    });

})();