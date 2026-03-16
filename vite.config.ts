import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import pluginchecker from 'vite-plugin-checker'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss(),tsconfigPaths(),pluginchecker({ 
  eslint: {
        lintCommand: 'eslint "./src/**/*.{ts,tsx}"',
        useFlatConfig: true,
      },
      overlay: true,
    }),
  ],
})
