// Array para almacenar los items del carrito
let carritoCompras = [];

// Función para agregar al carrito
function addToCart(button) {
  // Obtener el article padre del botón
  const article = button.closest('article');
  
  // Obtener la información del producto usando los data attributes
  const producto = {
    id: article.dataset.id,
    nombre: article.dataset.name,
    precio: parseInt(article.dataset.price),
    cantidad: 1
  };

  // Verificar si el producto ya está en el carrito
  const productoExistente = carritoCompras.find(item => item.id === producto.id);
  
  if (productoExistente) {
    // Si existe, aumentar la cantidad
    productoExistente.cantidad += 1;
  } else {
    // Si no existe, agregar al carrito
    carritoCompras.push(producto);
  }

  // Mostrar mensaje de confirmación
  alert('Producto agregado al carrito');
  console.log('Carrito actual:', carritoCompras);
}

// Función para finalizar la compra
function finalizarCompra() {
  // Crear objeto con la información de la compra
  const compra = {
    fecha: new Date().toISOString(),
    productos: carritoCompras,
    total: carritoCompras.reduce((sum, item) => sum + (item.precio * item.cantidad), 0)
  };

  // Convertir a JSON
  const compraJSON = JSON.stringify(compra, null, 2);

  // Descargar el archivo JSON
  const blob = new Blob([compraJSON], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'carrito.json';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);

  // Limpiar el carrito
  carritoCompras = [];
  alert('Compra finalizada! Se ha descargado el archivo carrito.json');
}