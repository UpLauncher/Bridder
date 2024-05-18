import { resetSettings } from "../modules/util";

window.addEventListener("DOMContentLoaded", () => {
  document.getElementById("oldVersion")!.textContent = new URL(
    window.location.href
  ).searchParams.get("old_version");

  document.querySelector("button")!.addEventListener("click", () => {
    resetSettings()

    const result = confirm("設定の初期化が完了しました！(設定しなおすこともできます)")
    if (result) {
        chrome.runtime.openOptionsPage();
    }
    window.location.reload();
  });
});
