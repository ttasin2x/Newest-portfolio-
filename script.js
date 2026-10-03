/* =====================================
   PAGE LOADER
===================================== */

window.addEventListener("load", () => {

  const loader = document.querySelector(".loader");

  setTimeout(() => {
    loader.classList.add("hide");
  }, 700);

});


/* =====================================
   NAVBAR SCROLL EFFECT
===================================== */

const navbar = document.querySelector(".navbar");

function updateNavbar() {

  if (window.scrollY > 40) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }

}

window.addEventListener("scroll", updateNavbar);

updateNavbar();


/* =====================================
   MOBILE MENU
===================================== */

const menuButton = document.querySelector(".menu-btn");
const mobileMenu = document.querySelector(".mobile-menu");
const mobileLinks = document.querySelectorAll(".mobile-menu a");

function toggleMenu() {

  const active = mobileMenu.classList.toggle("active");

  menuButton.classList.toggle("active", active);

  document.body.classList.toggle("menu-open", active);

}

menuButton.addEventListener("click", toggleMenu);

mobileLinks.forEach(link => {

  link.addEventListener("click", () => {

    mobileMenu.classList.remove("active");
    menuButton.classList.remove("active");

    document.body.classList.remove("menu-open");

  });

});


/* =====================================
   REVEAL ON SCROLL
===================================== */

const revealElements =
  document.querySelectorAll(".reveal");

const revealObserver =
  new IntersectionObserver(

    entries => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          entry.target.classList.add("visible");

          revealObserver.unobserve(entry.target);

        }

      });

    },

    {
      threshold: 0.12
    }

  );

revealElements.forEach(element => {

  revealObserver.observe(element);

});


/* =====================================
   CURSOR GLOW
===================================== */

const cursorGlow =
  document.querySelector(".cursor-glow");

let mouseX = 0;
let mouseY = 0;

let currentX = 0;
let currentY = 0;

window.addEventListener("mousemove", event => {

  mouseX = event.clientX;
  mouseY = event.clientY;

});

function animateCursor() {

  currentX += (mouseX - currentX) * 0.08;
  currentY += (mouseY - currentY) * 0.08;

  cursorGlow.style.left = `${currentX}px`;
  cursorGlow.style.top = `${currentY}px`;

  requestAnimationFrame(animateCursor);

}

animateCursor();


/* =====================================
   HERO PARALLAX
===================================== */

const heroGrid =
  document.querySelector(".hero-grid");

window.addEventListener("scroll", () => {

  if (!heroGrid) return;

  const scroll =
    window.scrollY;

  heroGrid.style.transform =
    `translateY(${scroll * 0.12}px)`;

});


/* =====================================
   ACTIVE NAVIGATION
===================================== */

const sections =
  document.querySelectorAll("main section[id]");

const navLinks =
  document.querySelectorAll(".nav-links a");

const sectionObserver =
  new IntersectionObserver(

    entries => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          navLinks.forEach(link => {

            link.classList.remove("active");

            if (
              link.getAttribute("href") ===
              `#${entry.target.id}`
            ) {

              link.classList.add("active");

            }

          });

        }

      });

    },

    {
      rootMargin: "-35% 0px -55% 0px"
    }

  );

sections.forEach(section => {

  sectionObserver.observe(section);

});


/* =====================================
   PROJECT IMAGE TILT
===================================== */

const projectCards =
  document.querySelectorAll(".project-card");

projectCards.forEach(card => {

  card.addEventListener("mousemove", event => {

    if (window.innerWidth < 900) return;

    const rect =
      card.getBoundingClientRect();

    const x =
      event.clientX - rect.left;

    const y =
      event.clientY - rect.top;

    const centerX =
      rect.width / 2;

    const centerY =
      rect.height / 2;

    const rotateX =
      ((y - centerY) / centerY) * -1.5;

    const rotateY =
      ((x - centerX) / centerX) * 1.5;

    card.style.transform =
      `perspective(900px)
       rotateX(${rotateX}deg)
       rotateY(${rotateY}deg)`;

  });

  card.addEventListener("mouseleave", () => {

    card.style.transform =
      "perspective(900px) rotateX(0) rotateY(0)";

  });

});


/* =====================================
   SMOOTH ANCHOR SCROLL
===================================== */

document
  .querySelectorAll('a[href^="#"]')
  .forEach(anchor => {

    anchor.addEventListener("click", function(event) {

      const target =
        document.querySelector(
          this.getAttribute("href")
        );

      if (!target) return;

      event.preventDefault();

      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });

    });

  });


/* =====================================
   MAGNETIC BUTTON EFFECT
===================================== */

const magneticButtons =
  document.querySelectorAll(
    ".primary-btn, .secondary-btn, .nav-button"
  );

magneticButtons.forEach(button => {

  button.addEventListener("mousemove", event => {

    if (window.innerWidth < 900) return;

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
      `translate(${x * 0.08}px, ${y * 0.08}px)`;

  });

  button.addEventListener("mouseleave", () => {

    button.style.transform = "";

  });

});


/* =====================================
   YEAR
===================================== */

const year =
  document.querySelector(".footer-bottom span");

if (year) {

  year.innerHTML =
    `© ${new Date().getFullYear()} Tanvir Tasin`;

}
