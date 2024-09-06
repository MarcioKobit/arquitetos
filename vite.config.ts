import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import mkcert from'vite-plugin-mkcert'


// export default defineConfig({
//  plugins: [react()],
//   server: {
//     port: 80,
//   },
// });

export default defineConfig({
  server: {
    https: false,
    port: 80,
  },
  // plugins: [react(), mkcert()],
  plugins: [react()],
});