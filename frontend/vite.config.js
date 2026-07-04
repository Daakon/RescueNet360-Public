import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { createRequire } from 'node:module'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'
import { VitePWA } from 'vite-plugin-pwa'

const require = createRequire(import.meta.url)

const hasSharp = (() => {
  try {
    require.resolve('sharp')
    return true
  } catch {
    return false
  }
})()

const plugins = [
  react(),
  VitePWA({
    registerType: 'autoUpdate',
    includeAssets: ['shield-favicon.svg', 'shield-favicon-32x32.png', 'shield-favicon.ico', 'shield-apple-touch-icon.png', 'favicon.svg', 'favicon-32x32.png', 'favicon.ico', 'apple-touch-icon.png', 'robots.txt', 'og-image.png', 'og-image.jpg'],
    manifest: {
      name: 'RescueNet360 - National Pet Identity Infrastructure',
      short_name: 'RescueNet360',
      description: 'The operational backbone shelters and rescues have been missing. Free for shelters.',
      theme_color: '#4F398F',
      icons: [
        {
          src: '/pwa-192x192.png',
          sizes: '192x192',
          type: 'image/png'
        },
        {
          src: '/pwa-512x512.png',
          sizes: '512x512',
          type: 'image/png'
        }
      ]
    },
    workbox: {
      // Only cache static assets and marketing routes, DO NOT cache /app or /orgs routes
      navigateFallback: '/',
      navigateFallbackAllowlist: [/^\/$/, /^\/shelters-rescues$/, /^\/pet-owners$/, /^\/pilot-program$/, /^\/how-it-works$/, /^\/sponsorship$/, /^\/start$/, /^\/about$/, /^\/contact$/, /^\/terms$/, /^\/privacy$/, /^\/accessibility$/],
      runtimeCaching: [
        {
          urlPattern: /\.(?:png|jpg|jpeg|svg|webp)$/,
          handler: 'CacheFirst',
          options: {
            cacheName: 'images',
            expiration: {
              maxEntries: 50,
              maxAgeSeconds: 30 * 24 * 60 * 60 // 30 Days
            }
          }
        }
      ]
    }
  })
]

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
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/test/setup.js',
    exclude: ['e2e/**', 'node_modules/**'],
  },
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

