
import 'dotenv/config';
import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express();
const port = process.env.PORT || 3030;

const apiUrl = process.env.VITE_API_URL;
console.log('API URL:', apiUrl);

// Configurar archivos estáticos
const publicPath = path.resolve(__dirname, '../../public')
app.use(express.static(publicPath))

// 📌 También servir los archivos generados en "dist/"
const distPath = path.resolve(__dirname, '../../dist');
app.use(express.static(distPath));


// Servir React en rutas definidas
app.get('/', (req, res) => {
  res.sendFile(path.join(distPath, '/views/index.html'));
});

app.get('/acerca', (req, res) => {
  res.sendFile(path.join(distPath, '/views/about.html'));
});

app.get('/catalogo', (req, res) => {
  res.sendFile(path.join(distPath, '/views/catalogue.html'));
});

app.get('/contacto', (req, res) => {
  res.sendFile(path.join(distPath, '/views/contact.html'));
});

app.get('/valentine', (req, res) => {
  res.sendFile(path.join(distPath, '/views/valentine.html'));
});

/* app.get('/styles', (req, res) => {
  res.sendFile(path.join(publicPath, '/static/css'));
});

app.get('/main', (req, res) => {
  res.sendFile(path.join(publicPath, '/static/JavaScript/main.js'));
}); */



app.get('/scripts', (req, res) => {
  res.sendFile(path.join(distPath, '/'))
})

// Ruta para manejar cualquier otra petición y servir React
app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'))
})

app.listen(port, () => {
  console.log('Servidor ejecutándose en http://localhost:' + port)
})