import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Domínio próprio / Vercel na raiz. Para GitHub Pages: VITE_BASE=/projeto-lucila/ npm run build
  base: process.env.VITE_BASE || '/',
})
