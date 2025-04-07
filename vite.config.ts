import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  base: '/Home',

  plugins: [
    react()
  ],
  resolve: {
    alias: {
      three: path.resolve(__dirname, 'node_modules/three'),
    },
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
})