import path from 'node:path';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';

const port = Number(process.env.PORT ?? 5173);
if (!Number.isInteger(port) || port < 1 || port > 65535) {
  throw new Error(`Invalid PORT value: "${process.env.PORT}"`);
}

export default defineConfig({
  base: process.env.BASE_PATH ?? '/',
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, 'src'),
      '@assets': path.resolve(import.meta.dirname, '../../attached_assets'),
    },
    dedupe: ['react', 'react-dom'],
  },
  root: import.meta.dirname,
  build: {
    outDir: path.resolve(import.meta.dirname, 'dist/public'),
    emptyOutDir: true,
  },
  server: {
    port, strictPort: true, host: '127.0.0.1', fs: { strict: true },
    // Polling also catches edits made through sandboxed editors on macOS.
    watch: { usePolling: true, interval: 250 },
  },
  preview: { port: 4173, strictPort: true, host: '127.0.0.1' },
});
