import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Sitemap from 'vite-plugin-sitemap'
// https://vite.dev/config/
export default defineConfig({
   plugins: [
    react(),
    Sitemap({
      hostname: 'https://newtechsofts.com', // Apni website ka link
      dynamicRoutes: ['/about', '/services', '/blog','portfolio','/blog/1','/blog/2','/blog/3','/blog/4','/blog/5'], // Agar dynamic pages hain
    })
  ]
})
