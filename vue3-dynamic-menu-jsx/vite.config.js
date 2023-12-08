// https://vitejs.dev/config/

import { defineConfig } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

export default defineConfig({
  base: "",
  plugins: [
	  vue(),
    vueJsx()
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/'),
    },
  },
  server:{
	  host: '0.0.0.0'
  }
})
