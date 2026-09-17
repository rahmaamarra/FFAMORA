/* ==================================================
   FAMORA CONTACT INFORMATION
   ================================================== */

// WhatsApp number
const whatsappNumber = "201099400965";

// Instagram username بدون @
const instagramUsername = "fatmaamara_";


/* ==================================================
   MOBILE MENU
   ================================================== */

function toggleMenu() {
    const nav = document.getElementById("navMenu");
    nav.classList.toggle("active");
}


/* ==================================================
   WHATSAPP - PAINTING
   ================================================== */

function buyWhatsApp(paintingName, price) {

    const message =
        `Hello! I am interested in buying the painting "${paintingName}" for ${price}. Is it still available?`;

    const whatsappURL =
        `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, "_blank");
}


/* ==================================================
   WHATSAPP - GENERAL CONTACT
   ================================================== */

function openWhatsApp() {

    const message =
        "Hello! I would like to ask about the available paintings at FAMORA.";

    const whatsappURL =
        `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, "_blank");
}


/* ==================================================
   INSTAGRAM - GENERAL CONTACT
   ================================================== */

function openInstagram() {

    const instagramURL =
        `https://www.instagram.com/${instagramUsername}/`;

    window.open(instagramURL, "_blank");
}


/* ==================================================
   CLOSE MOBILE MENU AFTER CLICK
   ================================================== */

const navLinks = document.querySelectorAll("#navMenu a");

navLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        document.getElementById("navMenu").classList.remove("active");

    });

});

