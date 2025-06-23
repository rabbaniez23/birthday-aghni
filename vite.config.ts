import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    // Tambahkan 'firebase/firestore' ke daftar pengecualian
    exclude: ['lucide-react', 'firebase/firestore'],
  },
});
