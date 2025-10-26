import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  // Env variables লোড করা
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [react()],
    server: {
      port: 3000,
      host: '0.0.0.0',
    },
    preview: {
      // render.com host allow করা
      allowedHosts: ['aima-zd0x.onrender.com'],
    },
    define: {
      // নিরাপদভাবে env variable ব্যবহার
      'import.meta.env.VITE_GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        // src ফোল্ডারকে alias হিসেবে ব্যবহার
        '@': path.resolve(__dirname, 'src'),
      },
    },
  };
});
