/* =========================
   HAMBURGER MENU CONTROL
========================= */
const hamburger = document.getElementById("hamburger");
const fullNav = document.getElementById("fullNav");
const closeMenu = document.getElementById("closeMenu");
const overlay = document.getElementById("menuOverlay");

hamburger.addEventListener("click", () => {
  fullNav.classList.add("show");
  overlay.classList.add("show");
});

function closeNav() {
  fullNav.classList.remove("show");
  overlay.classList.remove("show");
}

if (closeMenu) {
  closeMenu.addEventListener("click", closeNav);
}

if (overlay) {
  overlay.addEventListener("click", closeNav);
}

/* Close menu when clicking any nav link */
document.querySelectorAll("#fullNav a").forEach(link => {
  link.addEventListener("click", closeNav);
});

/* =========================
   SERVICE → WHATSAPP
========================= */
function openWhatsapp(serviceName) {
  const phone = "91XXXXXXXXXX"; // replace with your number
  const message = `Hello, I want to use the service: ${serviceName}`;
  window.open(
    `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
    "_blank"
  );
}

/* =========================
   HERO IMAGE SLIDER
========================= */
const heroImages = [
  "assets/hero1.jpg",
  "assets/hero2.jpg",
  "assets/hero3.jpg"
];

let currentHero = 0;
const heroSlider = document.querySelector(".hero-slider");

/* Create hero images only once */
heroImages.forEach((src, index) => {
  const img = document.createElement("img");
  img.src = src;
  img.classList.add("hero-img");
  if (index === 0) img.classList.add("active");
  heroSlider.appendChild(img);
});

function slideHero() {
  const imgs = heroSlider.querySelectorAll(".hero-img");
  imgs.forEach(img => img.classList.remove("active"));
  currentHero = (currentHero + 1) % imgs.length;
  imgs[currentHero].classList.add("active");
}

/* Change image every 4 seconds */
setInterval(slideHero, 2000);
