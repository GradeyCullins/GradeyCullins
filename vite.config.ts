import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'
import RubyPlugin from 'vite-plugin-ruby'
import path from 'path'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    RubyPlugin(),
  ],
  server: {
    hmr: {
      port: 3036,
      host: 'localhost',
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./app/javascript")
    }
  }
})
