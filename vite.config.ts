import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'
import RubyPlugin from 'vite-plugin-ruby'

export default defineConfig({
  plugins: [
    react({
      // Enable Fast Refresh
      fastRefresh: true,
    }),
    tailwindcss(),
    RubyPlugin(),
  ],
  server: {
    hmr: {
      port: 3036,
      host: 'localhost',
    },
  },
})
