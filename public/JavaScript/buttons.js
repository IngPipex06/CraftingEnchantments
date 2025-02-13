window.onload = function () {

  document.querySelectorAll(".product").forEach((product) => {
    product.dataset.index = 0;
  });

  // Delegación de eventos para los botones next y previous
  document.addEventListener("click", function (event) {
    const button = event.target;
    const product = button.closest(".product");

    if (!product) return; // Evita errores si el clic no fue en un producto

    const track = product.querySelector(".carouselList");
    const images = track.children;
    const totalImages = images.length;
    const figureWidth = images[0]?.offsetWidth || 0;

    let index = parseInt(product.dataset.index);

    if (button.classList.contains("next")) {
      index = (index + 1) % totalImages;
    } else if (button.classList.contains("previous")) {
      index = (index - 1 + totalImages) % totalImages;
    } else {
      return;
    }

    product.dataset.index = index;
    track.style.transform = `translateX(${index * -figureWidth}px)`;
  });

  // Delegación de evento para el menú
  document.addEventListener("click", function (event) {
    if (event.target.matches(".toggleMenu")) {
      toggleMenu();
    }
  });
};

function toggleMenu() {
  document.querySelector(".toggleMenu")?.classList.toggle("active");
  document.querySelector(".navigation")?.classList.toggle("active");
}
