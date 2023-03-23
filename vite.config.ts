import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@global': path.resolve(__dirname, './src/global'),
      '@app': path.resolve(__dirname, './src/app'),
      '@processes': path.resolve(__dirname, './src/processes'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@widgets': path.resolve(__dirname, './src/widgets'),
      '@features': path.resolve(__dirname, './src/features'),
      '@entities': path.resolve(__dirname, './src/entities'),
      '@shared': path.resolve(__dirname, './src/shared')
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
                @import "./src/app/styles/_variables.scss";
                @import "./src/app/styles/_mixins.scss";
            `
      }
    }
  },
  plugins: [react()]
});
