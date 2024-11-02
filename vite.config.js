import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  resolve: {
    alias: {
      "three/webgpu": path.resolve(
        __dirname,
        "./node_modules/three/build/three.webgpu.js"
      ),
    },
  },
});
