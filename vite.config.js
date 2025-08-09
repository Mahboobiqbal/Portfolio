import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/portfolio/",
  server: {
    port: 3000,
    host: '127.0.0.1', // Use IPv4 loopback
  },
});
