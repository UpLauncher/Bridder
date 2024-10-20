import { applyDefaultSettings } from "../options/settings_data";

window.addEventListener("DOMContentLoaded", () => {
  const oldVersionElement = document.getElementById("oldVersion");
  if (oldVersionElement) {
    oldVersionElement.textContent = new URL(window.location.href).searchParams.get("old_version");
  }
    
  document.querySelector("button")!.addEventListener("click", () => {
    applyDefaultSettings()

    const result = confirm("設定の初期化が完了しました！(設定しなおすこともできます)")
    if (result) {
        chrome.runtime.openOptionsPage();
    }
    window.location.reload();
  });
});
