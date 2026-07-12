// ===== PORTFOLIO JAVASCRIPT =====

// --- DOM Elements ---
const sidebar = document.getElementById("sidebar");
const sidebarOverlay = document.getElementById("sidebar-overlay");
const menuOpen = document.getElementById("menu-open");
const menuClose = document.getElementById("menu-close");
const navbar = document.getElementById("navbar");
const navLinks = document.querySelectorAll(".nav-link");
const sidebarLinks = document.querySelectorAll(".sidebar-topics a");
const sections = document.querySelectorAll("section");

// --- Sidebar Toggle ---
function openSidebar() {
  sidebar.classList.add("open");
  sidebarOverlay.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeSidebar() {
  sidebar.classList.remove("open");
  sidebarOverlay.classList.remove("open");
  document.body.style.overflow = "";
}

menuOpen.addEventListener("click", openSidebar);
menuClose.addEventListener("click", closeSidebar);
sidebarOverlay.addEventListener("click", closeSidebar);

// Close sidebar when a link is clicked
sidebarLinks.forEach((link) => {
  link.addEventListener("click", closeSidebar);
});

// --- Navbar Scroll Effect ---
function handleNavbarScroll() {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
}

// --- Active Nav Highlighting ---
function highlightActiveNav() {
  const scrollPos = window.scrollY + 120;

  sections.forEach((section) => {
    const top = section.offsetTop;
    const bottom = top + section.offsetHeight;
    const id = section.getAttribute("id");

    if (scrollPos >= top && scrollPos < bottom) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${id}`) {
          link.classList.add("active");
        }
      });
    }
  });
}

// Combined scroll handler
window.addEventListener("scroll", () => {
  handleNavbarScroll();
  highlightActiveNav();
}, { passive: true });

// --- Scroll Reveal (Intersection Observer) ---
const revealElements = document.querySelectorAll(".reveal, .reveal-left, .reveal-right");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.12,
    rootMargin: "0px 0px -40px 0px",
  }
);

revealElements.forEach((el) => revealObserver.observe(el));

// --- Typed Text Effect ---
const typedRoleEl = document.getElementById("typed-role");
const roles = [
  "Web Developer",
  "Frontend Developer",
  "UI/UX Enthusiast",
  "Problem Solver",
];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingDelay = 100;

function typeRole() {
  const currentRole = roles[roleIndex];

  if (isDeleting) {
    typedRoleEl.textContent = currentRole.substring(0, charIndex - 1);
    charIndex--;
    typingDelay = 50;
  } else {
    typedRoleEl.textContent = currentRole.substring(0, charIndex + 1);
    charIndex++;
    typingDelay = 100;
  }

  if (!isDeleting && charIndex === currentRole.length) {
    typingDelay = 2000; // Pause at full text
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
    typingDelay = 400; // Brief pause before typing next
  }

  setTimeout(typeRole, typingDelay);
}

// Start typing after a short delay
setTimeout(typeRole, 1200);

// --- Form Validation ---
function submitone() {
  const form = document.getElementById("contact-form");
  const box1 = document.getElementById("text1").value.trim();
  const box2 = document.getElementById("text2").value.trim();
  const box4 = document.getElementById("text4").value.trim();

  if (box1 === "" || box2 === "" || box4 === "") {
    alert("Please fill in all required fields.");
  } else {
    alert("Thank you! Your message has been received.");
    form.reset();
  }
}

// --- Initialize on Load ---
window.addEventListener("DOMContentLoaded", () => {
  handleNavbarScroll();
  highlightActiveNav();
});
