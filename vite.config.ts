import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'  // Asegúrate de que esta import esté

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',  // Recomendado para actualizaciones automáticas
      devOptions: {
        enabled: true,                     // ← ESTO ES OBLIGATORIO para dev
        navigateFallback: 'index.html',    // Evita 404 en rutas SPA
        navigateFallbackAllowlist: [/^\/$/] // Limita fallback solo a raíz (evita problemas)
      },
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', '*.png', '*.svg'],
      manifest: {
        id: '/',  // Evita warnings de ID
        name: 'Nido Event Planning App',
        short_name: 'Nido',
        description: 'Planificación de eventos: proveedores, gastos, invitados y pagos',
        theme_color: '#4A90E2',
        background_color: '#ffffff',
        display: 'standalone',
        scope: '/',
        start_url: '/',
        icons: [
          {
            src: '/pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: '/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable any'
          }
        ]
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,png,svg,ico,woff2}']
      }
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})