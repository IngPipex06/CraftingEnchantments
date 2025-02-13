/* import express from 'express';
const app = express();
import path from 'path';
const port = process.env.PORT || 3030;

//Configurar las cosas jaja
const publicPath = path.resolve(__dirname, "../../public");
app.use(express.static(publicPath));

// Asegúrate de que el servidor sirva archivos estáticos desde el directorio correcto
app.use('/scripts', express.static(path.join(__dirname, '../scripts')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/index.html'));
});

app.get('/acerca', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/about.html'));
});

app.get('/catalogo', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/catalogue.html'));
});

app.get('/contacto', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/contact.html'));
});


app.listen(port, () => {
  console.log('Servidor ejecutandose en http://localhost:' + port);
}); */