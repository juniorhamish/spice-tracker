import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import federation from '@originjs/vite-plugin-federation';

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
});
