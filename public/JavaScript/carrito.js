let carritoCompras = [];

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
};

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
