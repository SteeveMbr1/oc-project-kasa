import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@components": "/src/components",
      "@interfaces": "/src/interfaces",
      "@assets": "/src/assets",
      "@pages": "/src/pages",
      "@layouts": "/src/layouts",
      "@src": "/src",
    },
  },
})
