import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
//  base: "/",
 plugins: [react()],
// // //  preview: {
// // //   port: 8080,
// // //   strictPort: true,
// // //  },
  server: {
  port: 80,
//   strictPort: true,
//   host: false,
//   // origin: "http://0.0.0.0:8080",
 },
});