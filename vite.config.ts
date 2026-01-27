import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',

      devOptions: {
        enabled: true,
        navigateFallback: 'index.html',
        navigateFallbackAllowlist: [/^\/$/]
      },

      includeAssets: [
        'favicon.ico',
        'apple-touch-icon.png',
        'pwa-192x192.png',
        'pwa-512x512.png'
      ],

      manifest: {
        id: '/',
        name: 'Nido Event Planning App',
        short_name: 'Nido',
        description: 'Planificación de eventos: proveedores, gastos, invitados y pagos',
        start_url: '/',
        scope: '/',
        display: 'standalone',
        background_color: '#F2F2F2', // fondo PlanIt
        theme_color: '#F2F2F2',      // evita barras azules del sistema
        icons: [
          {
            src: '/pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
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
      '@': path.resolve(__dirname, './src')
    }
  }
})
