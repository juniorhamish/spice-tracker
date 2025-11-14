/// <reference types="vitest/config" />
import federation from '@originjs/vite-plugin-federation';
import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'spiceTracker',
      filename: 'remoteEntry.js',
      exposes: {
        './SpiceTracker': './src/components/SpiceTracker.tsx',
      },
      shared: ['react', 'react-dom', '@auth0/auth0-react'],
    }),
  ],
  build: {
    target: 'esnext',
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './setupTests.ts',
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html', 'lcov'],
    },
  },
});
