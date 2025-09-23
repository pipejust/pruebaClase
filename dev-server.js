#!/usr/bin/env node

import { createServer } from 'vite';
import react from '@vitejs/plugin-react';

async function startServer() {
  const server = await createServer({
    plugins: [react()],
    server: {
      host: '0.0.0.0',
      port: 5000,
    },
    optimizeDeps: {
      exclude: ['lucide-react'],
    },
  });

  await server.listen();
  console.log('Server running on http://localhost:5000');
}

startServer().catch((err) => {
  console.error('Error starting server:', err);
  process.exit(1);
});