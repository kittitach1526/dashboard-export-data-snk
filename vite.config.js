import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: 8563,      // กำหนด Port ตามที่ต้องการ
    strictPort: true, // ถ้า Port ไม่ว่าง ให้ Error ไปเลย (ป้องกันมันแอบขยับเลขเอง)
    host: true       // ยอมให้เครื่องอื่นในวง LAN (เช่น มือถือหรือ Tablet) เข้ามาดูหน้าจอได้
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      
      
    },
  },
})
