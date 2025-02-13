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