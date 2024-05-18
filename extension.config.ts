import { defineManifest } from "@crxjs/vite-plugin";
import packageJson from "./package.json" assert { type: "json" };

export const Dev_Mode = false; // On / Off Development Mode

export const Extension_Name = packageJson.displayName; // Extension Name
export const Extension_Version = packageJson.version; // Extension Version
export const Extension_Prefix = Dev_Mode ? "[Dev] " : ""; // Extension Name Prefix

export const manifest = defineManifest({
  // define manifest
  manifest_version: 3, // Set Manifest Version
  name: Extension_Prefix + Extension_Name, // edit Extension Name at "export const Extension_Name"
  description: "__MSG_description__", // Edit Description: view _locales directory
  version: Extension_Version, // edit Extension Version at "export const Extension_Version"
  default_locale: "ja", // edit Default Locale
  permissions: ["storage"], // edit Permissions
  icons: {
    // set icon path
    128: "src/assets/blue-bird.png", // 128px only... (fix soon)
  },
  background: {
    service_worker: "src/background.ts",
  },
  content_scripts: [
    {
      matches: ["https://twitter.com/*", "https://x.com/*"],
      js: [
        "src/content.ts",
        "src/modules/tweetsource_return.ts",
        "src/modules/textChange.ts",
        "src/modules/odayaka.ts",
        "src/modules/iconChange.ts",
        "src/modules/checkmark_utility.ts"
      ],
    },
  ],
  options_page: "src/options/settings.html",
  action: {
    default_popup: "src/options/popup.html",
  },
});
