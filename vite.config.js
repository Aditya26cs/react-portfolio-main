import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    modules: {
      localsConvention: "camelCase",
    },
  },
  server: {
    host: true, // allow access from network
    allowedHosts: [
       'ebb50e04539c.ngrok-free.app',
    ]
  }
});
