// Detectar la preferencia del usuario
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
const htmlElement = document.documentElement;

// Aplicar el estilo correcto al elemento <html>
if (prefersDarkScheme) {
    htmlElement.setAttribute('style', 'color-scheme: dark;');
    document.body.classList.add('dark');
} else if(prefersLightScheme) {
    htmlElement.setAttribute('style', 'color-scheme: light;');
    document.body.classList.add('light');
} else {
    htmlElement.setAttribute('style', 'color-scheme: normal;');
}

// Actualizar automáticamente si la preferencia cambia
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => {
    if (event.matches) {
    htmlElement.setAttribute('style', 'color-scheme: dark;');
    document.body.classList.remove('light');
    document.body.classList.add('dark');
    }
});


window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', (event) => {
    if (event.matches) {
    htmlElement.setAttribute('style', 'color-scheme: light;');
    document.body.classList.remove('dark');
    document.body.classList.add('light');
    }
});


/* Carrousel */


const track = document.querySelector('.caruselList');
const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');
const figures = document.querySelectorAll('.carouselList figure');

let currentIndex = 0;
function updateCarousel() {
  const figureWidth = figures[0].getBoundingClientRect().width;
  track.styles_products.transform = 'translateX(-${currentIndex * figureWidth}px)';
}

nextButton.addEventListener('click', () => {
  if (currentIndex < figures.length -1) {
    currentIndex++;
    updateCarousel();
  }
});

prevButton.addEventListener('click', () => {
  if ( currentIndex > 0) {
    currentIndex--;
    updateCarousel();
  }
});

window.addEventListener('resize', updateCarousel);

/* let list = document.querySelector('.carousel .carouselList');
let items = document.querySelectorAll('.carousel .carouselList .carouselItem');
let dots = document.querySelectorAll('.carousel .carouselDots li');
let prev = document.querySelectorAll('prev');
let next = document.querySelectorAll('next');
let active = 0;
let lengthItems = items.length - 1;

next.onclick = function() {
  if(active + 1 > lengthItems) {
    active = 0;
  } else {
    active += 1;
  }
  reloadSlider();
}

prev.onclick = function() {
  if(active -1 < 0) {
    active = lengthItems;
  } else {
    active = active - 1;
  }
  reloadSlider();
}

let refreshSlider = setInterval(() => {next.click()}, 3000);

function reloadSlider() {
  let checkLeft = items[active].offsetLeft;
  list.style.left = -checkLeft + 'px';

  let lastActiveDot = document.querySelector('.carousel .carrouselDots li.active');
  lastActiveDot.classList.remove('active');
  dots[active].classList.add('active');
  clearInterval(refreshSlider);
  refreshSlider = setInterval(() => {next.click()}, 3000);

}

dots.forEach((li, key) => {
  li.addEventListener('click', function() {
    active = key;
    reloadSlider();
  });
}); */