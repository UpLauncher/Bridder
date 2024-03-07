import { crx, defineManifest } from "@crxjs/vite-plugin";
import { defineConfig } from "vite";
import path from "node:path";
import { fileURLToPath } from "url";

const version = "2.1.4";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const manifest = defineManifest({
  manifest_version: 3,
  name: "Bridder",
  description: "__MSG_description__",
  version: version,
  default_locale: "ja",
  permissions: ["storage"],
  icons: {
    128: "src/assets/blue-bird.png",
  },
  content_scripts: [
    {
      matches: ["*://*.twitter.com/*"],
      js: [
        "src/content.ts",
        "src/modules/textChange.ts",
        "src/modules/iconChange.ts",
        "src/modules/tweetsource_return.ts",
        "src/modules/checkmark_utility.ts",
        "src/modules/checkmark_forceview.ts",
        "src/modules/checkmark_forceview_label.ts",
      ],
      run_at: "document_idle",
    },
  ],
  background: {
    service_worker: "src/background.ts",
  },
  options_page: "src/options/settings.html",
  action: {
    default_popup: "src/options/popup.html",
  },
});

export default defineConfig(() => {
  return {
    plugins: [
      crx({ manifest }),
    ],
    build: {
      rollupOptions: {
        input: {
          "installed": "src/other/installed.html",
          "updated": "src/other/updated.html",
          "updatedScript": "src/other/updated.ts"
        },
        external: [
          "popup.ts",
          "settings.ts",
          "updated.ts",
          "../assets/style.scss",
        ],
      },
    },
  };
});
