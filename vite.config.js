import { defineConfig } from 'vite';
import { resolve } from 'path';
import { fileURLToPath } from 'url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        dubaiVisa: resolve(__dirname, 'dubai-visa.html'),
        attractions: resolve(__dirname, 'attractions.html'),
        internationalVisas: resolve(__dirname, 'international-visas.html'),
      },
    },
  },
});

