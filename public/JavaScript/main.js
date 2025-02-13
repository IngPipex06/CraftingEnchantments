let carritoCompras = [];

// Función para agregar al carrito
function agregarAlCarrito(button) {
  const article = button.closest("article");

  const producto = {
    id: article.dataset.id,
    nombre: article.dataset.name,
    precio: parseInt(article.dataset.price),
    cantidad: 1,
  };

  const productoExistente = carritoCompras.find(
    (item) => item.nombre === producto.nombre
  );

  productoExistente ? (productoExistente.cantidad += 1) : carritoCompras.push(producto);
}

// Función para finalizar la compra
function finalizarCompra() {
  if (carritoCompras.length === 0) {
    alert("El carrito está vacío");
    return;
  }

  // Crear objeto con la información de la compra
  const compra = {
    productos: carritoCompras.map((item) => ({
      nombre: item.nombre,
      precio: item.precio,
      cantidad: item.cantidad,
    })),
    total: carritoCompras.reduce((sum, item) => sum + item.precio * item.cantidad, 0),
  };

  // Convertir a JSON con formato legible
  const compraJSON = JSON.stringify(compra, null, 2);

  // Descargar el archivo JSON
  const blob = new Blob([compraJSON], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "carrito.json";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);

  // Limpiar el carrito
  carritoCompras = [];
  alert("¡Compra finalizada! Se ha descargado el archivo JSON");
}

// Función para manejar los botones de la galería
function manejarBotonesGaleria(event) {
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
}

// Función para manejar el menú
function toggleMenu() {
  document.querySelector(".toggleMenu")?.classList.toggle("active");
  document.querySelector(".navigation")?.classList.toggle("active");
}

// Configurar eventos después de que el DOM esté completamente cargado
window.onload = function () {
  // Para agregar productos al carrito
  document.querySelectorAll(".agregarAlCarrito").forEach((boton) => {
    boton.onclick = function (event) {
      agregarAlCarrito(event.target);
    };
  });

  // Para finalizar la compra
  document.querySelectorAll(".finalizarCompra").forEach((boton) => {
    boton.onclick = function () {
      finalizarCompra();
    };
  });

  // Inicializar índice de imágenes en los productos
  document.querySelectorAll(".product").forEach((product) => {
    product.dataset.index = 0;
  });

  // Delegación de eventos para los botones next y previous
  document.addEventListener("click", manejarBotonesGaleria);

  // Delegación de evento para el menú
  document.addEventListener("click", function (event) {
    if (event.target.matches(".toggleMenu")) {
      toggleMenu();
    }
  });
};
