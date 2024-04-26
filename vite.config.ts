import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()]

  // resolve: {
  // alias: {
  // '@kentico/kontent-core': '@kentico/kontent-core/_es2015',
  //'@kentico/kontent-delivery': '@kentico/kontent-delivery/_esNext'
  //}
  //}
})
