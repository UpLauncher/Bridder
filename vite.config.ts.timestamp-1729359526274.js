// vite.config.ts
import { crx } from "@crxjs/vite-plugin";
import { defineConfig } from "vite";
import path from "node:path";
import { fileURLToPath } from "url";

// extension.config.ts
import { defineManifest } from "@crxjs/vite-plugin";

// package.json
var package_default = {
  name: "bridder",
  displayName: "Bridder",
  private: true,
  version: "2.2",
  type: "module",
  scripts: {
    dev: "vite",
    build: "tsc && vite build",
    preview: "vite preview"
  },
  devDependencies: {
    "@crxjs/vite-plugin": "2.0.0-beta.25",
    "@types/chrome": "^0.0.262",
    "@types/node": "^20.11.24",
    "javascript-obfuscator": "^4.1.0",
    "rollup-obfuscator": "^4.1.1",
    sass: "^1.71.1",
    typescript: "latest",
    vite: "^2.9.0"
  }
};

// extension.config.ts
var Dev_Mode = false;
var Extension_Name = package_default.displayName;
var Extension_Version = package_default.version;
var Extension_Prefix = Dev_Mode ? "[Dev] " : "";
var manifest = defineManifest({
  manifest_version: 3,
  name: Extension_Prefix + Extension_Name,
  description: "__MSG_description__",
  version: Extension_Version,
  default_locale: "ja",
  permissions: ["storage"],
  icons: {
    128: "src/assets/blue-bird.png"
  },
  background: {
    service_worker: "src/background.ts"
  },
  content_security_policy: {
    extension_pages: "script-src 'self' 'wasm-unsafe-eval' 'inline-speculation-rules' http://localhost:* http://127.0.0.1:*"
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
        "src/modules/checkmark_utility.ts",
        "src/modules/easy_blocker.ts"
      ]
    }
  ],
  options_page: "src/options/settings.html",
  action: {
    default_popup: "src/options/popup.html"
  }
});

// vite.config.ts
var filename = fileURLToPath("file:///G:/Workspace/Bridder/vite.config.ts");
var dirname = path.dirname(filename);
var vite_config_default = defineConfig(() => {
  return {
    plugins: [
      crx({ manifest })
    ],
    build: {
      rollupOptions: {
        input: {
          "installed": "src/other/installed.html",
          "updated": "src/other/updated.html",
          "updatedScript": "src/other/updated.ts",
          "popup": "src/options/popup.ts",
          "content": "src/content.ts"
        }
      }
    }
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiLCAiZXh0ZW5zaW9uLmNvbmZpZy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHsgY3J4IH0gZnJvbSBcIkBjcnhqcy92aXRlLXBsdWdpblwiO1xyXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xyXG5pbXBvcnQgcGF0aCBmcm9tIFwibm9kZTpwYXRoXCI7XHJcbmltcG9ydCB7IGZpbGVVUkxUb1BhdGggfSBmcm9tIFwidXJsXCI7XHJcblxyXG5pbXBvcnQgeyBtYW5pZmVzdCB9IGZyb20gXCIuL2V4dGVuc2lvbi5jb25maWdcIjtcclxuXHJcbmNvbnN0IGZpbGVuYW1lID0gZmlsZVVSTFRvUGF0aChcImZpbGU6Ly8vRzovV29ya3NwYWNlL0JyaWRkZXIvdml0ZS5jb25maWcudHNcIik7XHJcbmNvbnN0IGRpcm5hbWUgPSBwYXRoLmRpcm5hbWUoZmlsZW5hbWUpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKCgpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgcGx1Z2luczogW1xyXG4gICAgICBjcngoeyBtYW5pZmVzdCB9KSxcclxuICAgIF0sXHJcbiAgICBidWlsZDoge1xyXG4gICAgICByb2xsdXBPcHRpb25zOiB7XHJcbiAgICAgICAgaW5wdXQ6IHtcclxuICAgICAgICAgIFwiaW5zdGFsbGVkXCI6IFwic3JjL290aGVyL2luc3RhbGxlZC5odG1sXCIsXHJcbiAgICAgICAgICBcInVwZGF0ZWRcIjogXCJzcmMvb3RoZXIvdXBkYXRlZC5odG1sXCIsXHJcbiAgICAgICAgICBcInVwZGF0ZWRTY3JpcHRcIjogXCJzcmMvb3RoZXIvdXBkYXRlZC50c1wiLFxyXG4gICAgICAgICAgXCJwb3B1cFwiOiBcInNyYy9vcHRpb25zL3BvcHVwLnRzXCIsXHJcbiAgICAgICAgICBcImNvbnRlbnRcIjogXCJzcmMvY29udGVudC50c1wiXHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9O1xyXG59KTtcclxuIiwgImltcG9ydCB7IGRlZmluZU1hbmlmZXN0IH0gZnJvbSBcIkBjcnhqcy92aXRlLXBsdWdpblwiO1xyXG5pbXBvcnQgcGFja2FnZUpzb24gZnJvbSBcIi4vcGFja2FnZS5qc29uXCIgYXNzZXJ0IHsgdHlwZTogXCJqc29uXCIgfTtcclxuXHJcbmV4cG9ydCBjb25zdCBEZXZfTW9kZSA9IGZhbHNlOyAvLyBPbiAvIE9mZiBEZXZlbG9wbWVudCBNb2RlXHJcblxyXG5leHBvcnQgY29uc3QgRXh0ZW5zaW9uX05hbWUgPSBwYWNrYWdlSnNvbi5kaXNwbGF5TmFtZTsgLy8gRXh0ZW5zaW9uIE5hbWVcclxuZXhwb3J0IGNvbnN0IEV4dGVuc2lvbl9WZXJzaW9uID0gcGFja2FnZUpzb24udmVyc2lvbjsgLy8gRXh0ZW5zaW9uIFZlcnNpb25cclxuZXhwb3J0IGNvbnN0IEV4dGVuc2lvbl9QcmVmaXggPSBEZXZfTW9kZSA/IFwiW0Rldl0gXCIgOiBcIlwiOyAvLyBFeHRlbnNpb24gTmFtZSBQcmVmaXhcclxuXHJcbmV4cG9ydCBjb25zdCBtYW5pZmVzdCA9IGRlZmluZU1hbmlmZXN0KHtcclxuICAvLyBkZWZpbmUgbWFuaWZlc3RcclxuICBtYW5pZmVzdF92ZXJzaW9uOiAzLCAvLyBTZXQgTWFuaWZlc3QgVmVyc2lvblxyXG4gIG5hbWU6IEV4dGVuc2lvbl9QcmVmaXggKyBFeHRlbnNpb25fTmFtZSwgLy8gZWRpdCBFeHRlbnNpb24gTmFtZSBhdCBcImV4cG9ydCBjb25zdCBFeHRlbnNpb25fTmFtZVwiXHJcbiAgZGVzY3JpcHRpb246IFwiX19NU0dfZGVzY3JpcHRpb25fX1wiLCAvLyBFZGl0IERlc2NyaXB0aW9uOiB2aWV3IF9sb2NhbGVzIGRpcmVjdG9yeVxyXG4gIHZlcnNpb246IEV4dGVuc2lvbl9WZXJzaW9uLCAvLyBlZGl0IEV4dGVuc2lvbiBWZXJzaW9uIGF0IFwiZXhwb3J0IGNvbnN0IEV4dGVuc2lvbl9WZXJzaW9uXCJcclxuICBkZWZhdWx0X2xvY2FsZTogXCJqYVwiLCAvLyBlZGl0IERlZmF1bHQgTG9jYWxlXHJcbiAgcGVybWlzc2lvbnM6IFtcInN0b3JhZ2VcIl0sIC8vIGVkaXQgUGVybWlzc2lvbnNcclxuICBpY29uczoge1xyXG4gICAgLy8gc2V0IGljb24gcGF0aFxyXG4gICAgMTI4OiBcInNyYy9hc3NldHMvYmx1ZS1iaXJkLnBuZ1wiLCAvLyAxMjhweCBvbmx5Li4uIChmaXggc29vbilcclxuICB9LFxyXG4gIGJhY2tncm91bmQ6IHtcclxuICAgIHNlcnZpY2Vfd29ya2VyOiBcInNyYy9iYWNrZ3JvdW5kLnRzXCIsXHJcbiAgfSxcclxuICBjb250ZW50X3NlY3VyaXR5X3BvbGljeToge1xyXG4gICAgZXh0ZW5zaW9uX3BhZ2VzOiBcInNjcmlwdC1zcmMgJ3NlbGYnICd3YXNtLXVuc2FmZS1ldmFsJyAnaW5saW5lLXNwZWN1bGF0aW9uLXJ1bGVzJyBodHRwOi8vbG9jYWxob3N0OiogaHR0cDovLzEyNy4wLjAuMToqXCJcclxuICB9LFxyXG4gIGNvbnRlbnRfc2NyaXB0czogW1xyXG4gICAge1xyXG4gICAgICBtYXRjaGVzOiBbXCJodHRwczovL3R3aXR0ZXIuY29tLypcIiwgXCJodHRwczovL3guY29tLypcIl0sXHJcbiAgICAgIGpzOiBbXHJcbiAgICAgICAgXCJzcmMvY29udGVudC50c1wiLFxyXG4gICAgICAgIFwic3JjL21vZHVsZXMvdHdlZXRzb3VyY2VfcmV0dXJuLnRzXCIsXHJcbiAgICAgICAgXCJzcmMvbW9kdWxlcy90ZXh0Q2hhbmdlLnRzXCIsXHJcbiAgICAgICAgXCJzcmMvbW9kdWxlcy9vZGF5YWthLnRzXCIsXHJcbiAgICAgICAgXCJzcmMvbW9kdWxlcy9pY29uQ2hhbmdlLnRzXCIsXHJcbiAgICAgICAgXCJzcmMvbW9kdWxlcy9jaGVja21hcmtfdXRpbGl0eS50c1wiLFxyXG4gICAgICAgIFwic3JjL21vZHVsZXMvZWFzeV9ibG9ja2VyLnRzXCJcclxuICAgICAgXSxcclxuICAgIH0sXHJcbiAgXSxcclxuICBvcHRpb25zX3BhZ2U6IFwic3JjL29wdGlvbnMvc2V0dGluZ3MuaHRtbFwiLFxyXG4gIGFjdGlvbjoge1xyXG4gICAgZGVmYXVsdF9wb3B1cDogXCJzcmMvb3B0aW9ucy9wb3B1cC5odG1sXCIsXHJcbiAgfSxcclxufSk7XHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBQSxTQUFTLFdBQVc7QUFDcEIsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxVQUFVO0FBQ2pCLFNBQVMscUJBQXFCOzs7QUNIOUIsU0FBUyxzQkFBc0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUd4QixJQUFNLFdBQVc7QUFFakIsSUFBTSxpQkFBaUIsZ0JBQVk7QUFDbkMsSUFBTSxvQkFBb0IsZ0JBQVk7QUFDdEMsSUFBTSxtQkFBbUIsV0FBVyxXQUFXO0FBRS9DLElBQU0sV0FBVyxlQUFlO0FBQUEsRUFFckMsa0JBQWtCO0FBQUEsRUFDbEIsTUFBTSxtQkFBbUI7QUFBQSxFQUN6QixhQUFhO0FBQUEsRUFDYixTQUFTO0FBQUEsRUFDVCxnQkFBZ0I7QUFBQSxFQUNoQixhQUFhLENBQUMsU0FBUztBQUFBLEVBQ3ZCLE9BQU87QUFBQSxJQUVMLEtBQUs7QUFBQSxFQUNQO0FBQUEsRUFDQSxZQUFZO0FBQUEsSUFDVixnQkFBZ0I7QUFBQSxFQUNsQjtBQUFBLEVBQ0EseUJBQXlCO0FBQUEsSUFDdkIsaUJBQWlCO0FBQUEsRUFDbkI7QUFBQSxFQUNBLGlCQUFpQjtBQUFBLElBQ2Y7QUFBQSxNQUNFLFNBQVMsQ0FBQyx5QkFBeUIsaUJBQWlCO0FBQUEsTUFDcEQsSUFBSTtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLGNBQWM7QUFBQSxFQUNkLFFBQVE7QUFBQSxJQUNOLGVBQWU7QUFBQSxFQUNqQjtBQUNGLENBQUM7OztBRHRDRCxJQUFNLFdBQVcsY0FBYyw2Q0FBNkM7QUFDNUUsSUFBTSxVQUFVLEtBQUssUUFBUSxRQUFRO0FBRXJDLElBQU8sc0JBQVEsYUFBYSxNQUFNO0FBQ2hDLFNBQU87QUFBQSxJQUNMLFNBQVM7QUFBQSxNQUNQLElBQUksRUFBRSxTQUFTLENBQUM7QUFBQSxJQUNsQjtBQUFBLElBQ0EsT0FBTztBQUFBLE1BQ0wsZUFBZTtBQUFBLFFBQ2IsT0FBTztBQUFBLFVBQ0wsYUFBYTtBQUFBLFVBQ2IsV0FBVztBQUFBLFVBQ1gsaUJBQWlCO0FBQUEsVUFDakIsU0FBUztBQUFBLFVBQ1QsV0FBVztBQUFBLFFBQ2I7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
