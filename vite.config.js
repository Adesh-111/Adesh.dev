import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build', // Ensure Vercel detects the output folder as 'build'
  },
  // Other Vite options...
});
