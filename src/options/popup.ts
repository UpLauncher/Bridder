window.addEventListener("DOMContentLoaded", () => {
  var currentState = true;
  chrome.storage.sync.get("enabled").then((result) => {
    currentState = result.enabled;

    goNext();
  });

  function goNext() {
    if (!currentState) {
      const enableElement = document.querySelector("#enable");
      if (enableElement) {
        enableElement.classList.remove("enabled");
        enableElement.classList.add("disabled");
        enableElement.textContent = "無効";
      }
    }

    document.querySelector("#settings")?.addEventListener("click", () => {
      chrome.runtime.openOptionsPage();
    });

    document.querySelector("#enable")?.addEventListener("click", () => {
      if (currentState) {
        const enableElement = document.querySelector("#enable");
        if (enableElement) {
          enableElement.classList.remove("enabled");
          enableElement.classList.add("disabled");
          enableElement.textContent = "無効";
        }
        document.querySelector("h4")?.removeAttribute("hidden");
        chrome.storage.sync.set({ enabled: false });

        document.querySelector("a")?.addEventListener("click", () => {
          chrome.tabs.reload();
        });
      } else {
        const enableElement = document.querySelector("#enable");
        if (enableElement) {
          enableElement.classList.remove("disabled");
          enableElement.classList.add("enabled");
          enableElement.textContent = "有効";
        }
        document.querySelector("h4")?.removeAttribute("hidden");
        chrome.storage.sync.set({ enabled: true });

        document.querySelector("a")?.addEventListener("click", () => {
          chrome.tabs.reload();
        });
      }
    });
  }
});
