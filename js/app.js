/* =========================================================
   APP.JS
   Portfolio de Kanyi AYIVON
========================================================= */

document.addEventListener("DOMContentLoaded", function () {


    /* =====================================================
       ANNÉE AUTOMATIQUE
    ===================================================== */

    const yearElements =
        document.querySelectorAll(".current-year");

    const currentYear =
        new Date().getFullYear();

    yearElements.forEach(function (element) {

        element.textContent = currentYear;

    });


    /* =====================================================
       MENU MOBILE
    ===================================================== */

    const menuButton =
        document.querySelector(".menu-toggle");

    const navMenu =
        document.querySelector(".nav-menu");


    if (menuButton && navMenu) {

        menuButton.addEventListener("click", function () {

            const isOpen =
                navMenu.classList.toggle("open");

            menuButton.setAttribute(
                "aria-expanded",
                isOpen
            );

            menuButton.textContent =
                isOpen ? "✕" : "☰";

        });


        /* Fermer le menu après avoir cliqué sur un lien */

        const navLinks =
            navMenu.querySelectorAll("a");

        navLinks.forEach(function (link) {

            link.addEventListener("click", function () {

                navMenu.classList.remove("open");

                menuButton.setAttribute(
                    "aria-expanded",
                    "false"
                );

                menuButton.textContent = "☰";

            });

        });

    }


    /* =====================================================
       FORMULAIRE DE CONTACT
    ===================================================== */

    const contactForm =
        document.querySelector("#contact-form");

    const formMessage =
        document.querySelector("#form-message");


    if (contactForm) {

        contactForm.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();


                const name =
                    document.querySelector("#name").value.trim();

                const email =
                    document.querySelector("#email").value.trim();

                const subject =
                    document.querySelector("#subject").value.trim();

                const message =
                    document.querySelector("#message").value.trim();


                if (
                    name === "" ||
                    email === "" ||
                    subject === "" ||
                    message === ""
                ) {

                    formMessage.textContent =
                        "Veuillez remplir tous les champs.";

                    formMessage.style.color =
                        "#dc2626";

                    return;

                }


                /*
                    Le formulaire est actuellement
                    une démonstration front-end.

                    Il n'envoie pas encore réellement
                    le message vers une adresse e-mail.
                */

                formMessage.textContent =
                    "Merci " +
                    name +
                    " ! Votre message est prêt à être envoyé.";

                formMessage.style.color =
                    "#16a34a";


                contactForm.reset();

            }
        );

    }


    /* =====================================================
       ANIMATION LÉGÈRE DES CARTES
    ===================================================== */

    const cards =
        document.querySelectorAll(
            ".skill-card, .project-card"
        );


    cards.forEach(function (card) {

        card.addEventListener("mouseenter", function () {

            card.style.transition =
                "transform 0.2s ease, box-shadow 0.2s ease";

        });

    });

});