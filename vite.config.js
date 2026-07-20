import vike from 'vike/plugin'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react(), vike()],
  resolve: {
    alias: {
      '@': path.resolve(process.cwd(), './pages'),
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