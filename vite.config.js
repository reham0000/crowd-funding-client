import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
   server: {
    proxy: {
      '/fund': {
        target: 'https://crowd-funding-server-kappa.vercel.app',
        changeOrigin: true,
        secure: false,
      }
    }
  }
})
