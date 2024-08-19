import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    assetsInclude: ['**/*.ttf'],
    build: {
        rollupOptions: {
            output: {
                manualChunks(id) {
                    if (id.includes('node_modules')) {
                        return id.toString().split('node_modules/')[1].split('/')[0].toString();
                    }
                    if (id.includes('/src/components/')) {
                        return 'components';
                    }
                    if (id.includes('/src/pages/')) {
                        return 'pages';
                    }
                }
            },
        },
        chunkSizeWarningLimit: 1024,
    },
})