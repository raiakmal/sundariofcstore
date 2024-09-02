// Navbar
const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');

menuBtn.addEventListener('click', () => {
  menu.classList.toggle('hidden');
});

// Carousel
const carouselInner = document.querySelector('.carousel-inner');
const items = document.querySelectorAll('.carousel-item');
const itemCount = items.length;
let currentIndex = 0;

function showNextItem() {
  currentIndex = (currentIndex + 1) % itemCount;
  const offset = -currentIndex * 100;
  carouselInner.style.transform = `translateX(${offset}%)`;
}

setInterval(showNextItem, 5000);
