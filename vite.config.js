import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/mohamadhashem-portfolio/',
  plugins: [react({ fastRefresh: true }), tailwindcss()],
  server: {
    middlewareMode: false,
    hmr: true,
  },
})
