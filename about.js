// =========================================================
// ABOUT PAGE INTERACTIONS
// =========================================================


// ==================== NAVBAR ====================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

  if (window.scrollY > 30) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }

});


// ==================== MOBILE MENU ====================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if (menuBtn && navLinks) {

  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });

  document
    .querySelectorAll(".nav-links a")
    .forEach(link => {

      link.addEventListener("click", () => {
        navLinks.classList.remove("open");
      });

    });

}


// ==================== SCROLL REVEAL ====================

const revealElements =
  document.querySelectorAll(".reveal");

const revealObserver =
  new IntersectionObserver(

    (entries, observer) => {

      entries.forEach((entry, index) => {

        if (entry.isIntersecting) {

          setTimeout(() => {

            entry.target.classList.add("visible");

          }, index * 60);

          observer.unobserve(entry.target);

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


// ==================== CURRENT YEAR ====================

const yearElement =
  document.getElementById("year");

if (yearElement) {

  yearElement.textContent =
    new Date().getFullYear();

}


// ==================== SMOOTH INTERNAL LINKS ====================

document
  .querySelectorAll('a[href^="#"]')
  .forEach(link => {

    link.addEventListener("click", function (event) {

      const targetId =
        this.getAttribute("href");

      if (
        targetId &&
        targetId !== "#"
      ) {

        const target =
          document.querySelector(targetId);

        if (target) {

          event.preventDefault();

          target.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });

        }

      }

    });

  });