// Hamburger click to toggle menu
const hamburger = document.getElementById('hamburger');
const fullNav = document.getElementById('fullNav');

hamburger.addEventListener('click', () => {
    fullNav.classList.toggle('show');
});

// Service card WhatsApp redirect
function openWhatsapp(serviceName){
    let phone = '91XXXXXXXXXX'; // replace with your number
    let message = `Hello, I want to use the service: ${serviceName}`;
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
}

// Hero Image Slider
let heroImages = [
    'assets/hero1.jpg',
    'assets/hero2.jpg',
    'assets/hero3.jpg'
];

let currentHero = 0;
const heroSlider = document.querySelector('.hero-slider');

function createHeroImages() {
    heroImages.forEach((src, index) => {
        const img = document.createElement('img');
        img.src = src;
        if(index === 0) img.classList.add('active');
        heroSlider.appendChild(img);
    });
}


function slideHero(){
    const imgs = heroSlider.querySelectorAll('img');
    imgs.forEach(img => img.classList.remove('active'));
    currentHero = (currentHero + 1) % imgs.length;
    imgs[currentHero].classList.add('active');
}

createHeroImages();
setInterval(slideHero, 1000); // change image every 4 seconds
