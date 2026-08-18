const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    const icon = menuBtn.querySelector("i");

    if (navLinks.classList.contains("active")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-times");
    } else {
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
    }

});


/* Close mobile menu after clicking a link */

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        const icon = menuBtn.querySelector("i");

        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");

    });

});


/* =========================
   CERTIFICATE MODAL
========================= */

const modal = document.getElementById("certificateModal");
const certificatePreview =
    document.getElementById("certificatePreview");


function openCertificate(imagePath) {

    certificatePreview.src = imagePath;

    modal.classList.add("active");

    document.body.style.overflow = "hidden";
}


function closeCertificate() {

    modal.classList.remove("active");

    document.body.style.overflow = "auto";

    certificatePreview.src = "";

}


/* Close modal when clicking outside image */

modal.addEventListener("click", (event) => {

    if (event.target === modal) {
        closeCertificate();
    }

});


/* Close modal with ESC key */

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {
        closeCertificate();
    }

});


/* =========================
   CONTACT FORM
========================= */

const contactForm =
    document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name =
        document.getElementById("name").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const message =
        document.getElementById("message").value.trim();


    if (!name || !email || !message) {

        alert("Please fill in all fields.");

        return;
    }


    /*
       This is a frontend-only form.

       To actually send messages, connect it
       to a backend, Formspree, EmailJS, etc.
    */

    alert(
        `Thank you ${name}! Your message has been received.`
    );

    contactForm.reset();

});


/* =========================
   SCROLL REVEAL
========================= */

const revealElements = document.querySelectorAll(
    ".section-title, .about-container, .skill-card, .project-card, .certificate-card, .contact-container"
);

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.15
    }
);


revealElements.forEach(element => {

    element.classList.add("reveal");

    observer.observe(element);

});
