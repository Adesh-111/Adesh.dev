import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'desc', // Change 'dist' to 'build' if you want Vercel to detect the folder as 'build'
  },
})
