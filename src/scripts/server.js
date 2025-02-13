import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3030;

// Servir archivos estáticos de "public"
app.use(express.static(path.join(__dirname, "../../public")));

// Servir archivos HTML desde "views"
app.use(express.static(path.join(__dirname, "../views")));


// Rutas para cada página
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../views/index.html"));
});

app.get("/catalogo", (req, res) => {
  res.sendFile(path.join(__dirname, "../views/catalogue.html"));
});

app.listen(port, () => {
  console.log(`Servidor ejecutándose en http://localhost:${port}`);
});
