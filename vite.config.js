import vike from 'vike/plugin'
import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vite'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  plugins: [react(), vike()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './pages'),
    },
    dedupe: ['react', 'react-dom'],
  },
  server: {
    port: 3000,
    proxy: {
      "/api": "http://localhost:3001",
    },
  },
  optimizeDeps: {
    exclude: ["@prisma/client", "mongoose"]
  },
  ssr: {
    external: ["@prisma/client", "mongoose"],
    noExternal: ['react-multi-carousel']
  }
})