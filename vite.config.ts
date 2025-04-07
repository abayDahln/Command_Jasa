import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// @ts-ignore
// import { visualizer } from 'rollup-plugin-visualizer'

export default defineConfig({
  base: '/Command_Jasa/',

  plugins: [
    react()
    // visualizer({ open: true, gzipSize: true })
  ],

  optimizeDeps: {
    exclude: ['lucide-react'],
  },

  build: {
    chunkSizeWarningLimit: 1500, 

    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/three')) {
            return 'three'
          }
          if (id.includes('node_modules/@react-three')) {
            return 'r3f'
          }
          if (id.includes('node_modules/gsap')) {
            return 'gsap'
          }
          if (id.includes('node_modules/react')) {
            return 'react-vendor'
          }
         
        }
      }
    }
  }
})