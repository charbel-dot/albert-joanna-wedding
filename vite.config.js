import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Target modern browsers for smaller output
    target: 'es2020',
    // Inline assets smaller than 4kb as base64 (avoids extra HTTP requests)
    assetsInlineLimit: 4096,
    // Split CSS per chunk for parallel loading
    cssCodeSplit: true,
    // Produce sourcemaps only in dev; skip for prod
    sourcemap: false,
    rollupOptions: {
      output: {
        // Manual code splitting for better caching
        manualChunks: {
          'vendor': ['react', 'react-dom'],
          'animations': ['framer-motion'],
          'swiper': ['swiper'],
          'icons': ['react-icons/fa'],
        }
      }
    }
  }
})
