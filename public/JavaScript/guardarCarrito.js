import fs from 'fs';
import carrito from './carrito.js';
let nombreArchivo =null;

//const fecha = new Date().toISOString().split('T')[0];
//const nombreArchivo = `carrito_${fecha}.json`;

// Guardar el archivo
fs.writeFileSync(nombreArchivo, JSON.stringify(carrito, null, 2));
console.log(`Archivo ${nombreArchivo} creado exitosamente`);