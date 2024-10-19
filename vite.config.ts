import { crx } from "@crxjs/vite-plugin";
import { defineConfig } from "vite";
import path from "node:path";
import { fileURLToPath } from "url";

import { manifest } from "./extension.config";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default defineConfig(() => {
  return {
    plugins: [
      crx({ manifest }),
    ],
    // build: {
    //   rollupOptions: {
    //     input: {
    //       "installed": "src/other/installed.html",
    //       "updated": "src/other/updated.html",
    //       "updatedScript": "src/other/updated.ts",
    //       "popup": "src/options/popup.ts",
    //       "content": "src/content.ts"
    //     }
    //   },
    // },
  };
});
