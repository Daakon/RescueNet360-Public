import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { createRequire } from 'node:module'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

const require = createRequire(import.meta.url)

const hasSharp = (() => {
  try {
    require.resolve('sharp')
    return true
  } catch {
    return false
  }
})()

const plugins = [react()]

if (hasSharp) {
  plugins.push(
    ViteImageOptimizer({
      jpg: { quality: 80 },
      png: { quality: 80 },
      webp: { quality: 80 }
    })
  )
}

export default defineConfig({
  plugins,
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom']
        }
      }
    }
  }
})
