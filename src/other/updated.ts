window.addEventListener("DOMContentLoaded", () => {
  document.getElementById("oldVersion")!.textContent = new URL(
    window.location.href
  ).searchParams.get("old_version");

  document.querySelector("button")!.addEventListener("click", () => {
    chrome.storage.sync.set({
      enabled: true,
      text_mode: true,
      icon_mode: true,
      white_checkmark: true,
      tcoBypasser: true,
      wc_org: false,
      whitemode: false,
      blue_delete: false,
      forceView: true,
      optimizeSidebar: true,
      verifiedBlue: false,
      optimizeMore: true,
      featureFlags: false,
    });

    const result = confirm("設定の初期化が完了しました！(設定しなおすこともできます)")
    if (result) {
        chrome.runtime.openOptionsPage();
    }
    window.location.reload();
  });
});
