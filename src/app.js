const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3030;
 
//Configurar las cosas jaja
const publicPath = path.resolve(__dirname, "../public");
app.use(express.static(publicPath));
 
 
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/index.html'));
});
 
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/about.html'));
});
 
app.get('/products', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/products.html'));
});
 
app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/contact.html'));
});

app.listen(port, () => {
    console.log('Servidor ejecutandose en http://localhost:' + port);
});