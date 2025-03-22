import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // Agar GitHub subdomain bo‘lsa: base: '/repo-name/'
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
