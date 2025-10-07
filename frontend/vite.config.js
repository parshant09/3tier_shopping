import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api/": "http://10.1.92.185:5000",
      "/uploads/": "http://10.1.92.185:5000",
    },
  },
});
