export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Change 'dist' to 'build' if you want Vercel to detect the folder as 'build'
  },
})
