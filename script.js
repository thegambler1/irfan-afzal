// ==================== PORTFOLIO INTERACTIONS ====================

// Navbar scroll state
const navbar = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 30);
});

// Mobile menu
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
menuBtn.addEventListener("click", () => navLinks.classList.toggle("open"));
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => navLinks.classList.remove("open"));
});

// Scroll reveal animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add("visible"), index * 70);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

// Active navigation link
const sections = document.querySelectorAll("main section[id]");
const links = document.querySelectorAll(".nav-links a");
window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 180) current = section.id;
  });
  links.forEach(link => {
    link.classList.toggle("active", link.getAttribute("href") === "#" + current);
  });
});

// Typing effect in hero
const typingElement = document.getElementById("typingText");
const words = ["EXPERIENCES", "STORIES", "IDENTITIES", "CONCEPTS"];
let wordIndex = 0, charIndex = words[0].length, deleting = false;


function typeEffect() {
  const current = words[wordIndex];
  typingElement.textContent = current.substring(0, charIndex);

  if (!deleting && charIndex === current.length) {
    deleting = true;
    setTimeout(typeEffect, 1800);
    return;
  }
  if (deleting && charIndex === 0) {
    deleting = false;
    wordIndex = (wordIndex + 1) % words.length;
  }
  charIndex += deleting ? -1 : 1;
  setTimeout(typeEffect, deleting ? 45 : 80);
}
setTimeout(typeEffect, 1200);

// Project filtering
// const filters = document.querySelectorAll(".filter");
// const projects = document.querySelectorAll(".project-card");

// filters.forEach(filter => {
//   filter.addEventListener("click", () => {
//     filters.forEach(btn => btn.classList.remove("active"));
//     filter.classList.add("active");
//     const category = filter.dataset.filter;

//     projects.forEach(project => {
//       const show = category === "all" || project.dataset.category === category;
//       project.classList.toggle("hidden", !show);
//       if (show) {
//         project.style.animation = "none";
//         requestAnimationFrame(() => project.style.animation = "");
//       }
//     });
//   });
// });
// Project filtering
// Project filtering
// Simple test version

//working-----------------------------------
// document.querySelectorAll('.filter').forEach(btn => {
//   btn.addEventListener('click', function() {
//     const category = this.dataset.filter;
//     document.querySelectorAll('.project-card').forEach((card, index) => {
//       if (category === 'all') {
//         card.style.display = index < 4 ? 'block' : 'none';
//       } else {
//         card.style.display = card.dataset.category === category ? 'block' : 'none';
//       }
//     });
//   });
// });
//-----------------------------------------------------------------------
// Project filtering with animations
document.querySelectorAll('.filter').forEach(btn => {
  btn.addEventListener('click', function() {
    // Remove active class from all filters
    document.querySelectorAll('.filter').forEach(b => b.classList.remove('active'));
    // Add active class to clicked filter
    this.classList.add('active');
    
    const category = this.dataset.filter;
    document.querySelectorAll('.project-card').forEach((card, index) => {
      if (category === 'all') {
        if (index < 4) {
          card.style.display = 'block';
          // Restart animation
          card.style.animation = 'none';
          requestAnimationFrame(() => {
            card.style.animation = '';
          });
        } else {
          card.style.display = 'none';
        }
      } else {
        if (card.dataset.category === category) {
          card.style.display = 'block';
          // Restart animation
          card.style.animation = 'none';
          requestAnimationFrame(() => {
            card.style.animation = '';
          });
        } else {
          card.style.display = 'none';
        }
      }
    });
  });
});

// Set default state on page load with animations
document.addEventListener('DOMContentLoaded', function() {
  const allFilter = document.querySelector('.filter[data-filter="all"]');
  if (allFilter) {
    allFilter.classList.add('active');
    document.querySelectorAll('.project-card').forEach((card, index) => {
      if (index < 4) {
        card.style.display = 'block';
        card.style.animation = 'none';
        requestAnimationFrame(() => {
          card.style.animation = '';
        });
      } else {
        card.style.display = 'none';
      }
    });
  }
});
// Current year
document.getElementById("year").textContent = new Date().getFullYear();