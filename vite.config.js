import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  // Usamos 'src' como raíz para que las rutas relativas sean desde allí.
  root: 'src',
  publicDir: '../public', // Aquí se copiarán los assets de public al build
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        // Copia los HTML que NO son catálogo a dist/views
        { src: 'views/!(catalogue).html', dest: 'views' }
      ]
    })
  ],
  build: {
    outDir: '../dist', // La carpeta de salida queda en la raíz
    emptyOutDir: true,
    rollupOptions: {
      // Procesamos únicamente catalogue.html como entrada (la página que usa React)
      input: {
        catalogue: path.resolve(__dirname, 'src/views/catalogue.html')
      },
      external: ['express', 'path', 'url', 'dotenv']
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
});
