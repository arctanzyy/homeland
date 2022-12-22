import { defineConfig } from "vite";
import RubyPlugin from "vite-plugin-ruby";
const path = require("path");

export default defineConfig({
  plugins: [RubyPlugin()],
  resolve: {
    alias: {
      "~bootstrap": path.resolve(__dirname, "node_modules/bootstrap"),
    },
    extensions: [".js", ".jsx", ".ts", ".tsx", ".scss", ".css"],
  },
});
