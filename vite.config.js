import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  // Establecemos 'src' como raíz para que las rutas de los HTML se resuelvan desde allí.
  root: 'src',
  // PublicDir: apuntamos a la carpeta de assets estáticos que está en la raíz
  publicDir: '../public',
  plugins: [
    react(),
    // Copia los HTML que NO se desean procesar (los que son estáticos)
    viteStaticCopy({
      targets: [
        // Copia los HTML que NO sean "catalogue.html" desde src/views a la carpeta "views" en dist.
        { src: 'views/!(catalogue).html', dest: 'views' }
      ]
    })
  ],
  build: {
    // La salida se genera en ../dist (es decir, en la carpeta "dist" al nivel de la raíz)
    outDir: '../dist',
    emptyOutDir: true, // Borra "dist" antes de construir
    rollupOptions: {
      // Procesamos solo el HTML de "catalogue.html" para inyectar las rutas a los assets
      input: {
        catalogue: path.resolve(__dirname, 'src/views/catalogue.html')
      },
      external: ['express', 'path', 'url', 'dotenv'] // Excluimos módulos de backend
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
});