import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  base: '/',   // 👉 bien mettre '/' et PAS '/3d-portfolio-react/'
  plugins: [react()],
})
