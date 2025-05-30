import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 8080,
    open: true // открывает сайт сразу после запуска
  },
  build: {
    outDir: 'dist', // директория сборки
  }
})
