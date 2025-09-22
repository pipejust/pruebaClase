#!/usr/bin/env node
import { spawn } from 'child_process';

// Start Vite with the correct host and port for Replit
const vite = spawn('npx', ['vite', '--host', '0.0.0.0', '--port', '5000'], {
  stdio: 'inherit',
  shell: true
});

vite.on('error', (err) => {
  console.error('Failed to start Vite:', err);
  process.exit(1);
});

vite.on('close', (code) => {
  process.exit(code);
});