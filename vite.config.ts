import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
    },
  },

  // File types to support raw imports. Never add .css, .tsx, or .ts files to this.
  assetsInclude: ['**/*.svg', '**/*.csv'],

  build: {
    // Generate source maps for easier debugging on Vercel
    sourcemap: false,
    // Increase chunk size warning limit (jsPDF is large)
    chunkSizeWarningLimit: 2000,
    rollupOptions: {
      output: {
        // Split large vendors into separate chunks for better caching
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'pdf-vendor': ['jspdf', 'jspdf-autotable'],
          'ui-vendor': ['@radix-ui/react-dialog', '@radix-ui/react-dropdown-menu', '@radix-ui/react-select'],
        },
      },
    },
  },
})
