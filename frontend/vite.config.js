import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  optimizeDeps: {
    include: ['react/jsx-dev-runtime', 'react/jsx-runtime'],
  },
  plugins: [react()],
  server:{
    port:3000,
  },
})
