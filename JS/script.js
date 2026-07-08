const text = [
    "SQL",
    "Python",
    "Power BI",
    "Advanced Excel",
    "Workflow Automation"
];

let index = 0;
let charIndex = 0;
let current = "";
let isDeleting = false;

function type() {

    current = text[index];

    if (!isDeleting) {
        document.getElementById("typing").textContent =
            current.substring(0, charIndex++);

        if (charIndex > current.length) {
            isDeleting = true;
            setTimeout(type, 1200);
            return;
        }

    } else {

        document.getElementById("typing").textContent =
            current.substring(0, charIndex--);

        if (charIndex < 0) {
            isDeleting = false;
            index = (index + 1) % text.length;
        }
    }

    setTimeout(type, isDeleting ? 60 : 120);
}

type();

// =============================
// Active Navigation
// =============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navlist a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});

// =============================
// Scroll Reveal Animation
// =============================

const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("active");

        }

    });

},{
    threshold:0.15
});

reveals.forEach(item=>observer.observe(item));

// =============================
// Mobile Menu
// =============================

const menuBtn = document.querySelector(".menu-btn");
const navMenu = document.querySelector(".navlist");

menuBtn.addEventListener("click", () => {

    navMenu.classList.toggle("open");

    const icon = menuBtn.querySelector("i");

    icon.classList.toggle("fa-bars");
    icon.classList.toggle("fa-xmark");

});

document.querySelectorAll(".navlist a").forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("open");

        menuBtn.querySelector("i").classList.remove("fa-xmark");
        menuBtn.querySelector("i").classList.add("fa-bars");

    });

});