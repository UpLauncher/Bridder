if (typeof browser === "undefined") {
  var browser = chrome;
}
roal.load(() => {
  var currentState = true;
  browser.storage.sync.get("enabled").then((result) => {
    currentState = result.enabled;

    goNext();
  });

  function goNext() {
    if (!currentState) {
      roal.el("#enable").removeClass("enabled");
      roal.el("#enable").addClass("disabled");

      roal.el("#enable").setText("無効");
    }

    roal.el("#settings").click(() => {
      chrome.runtime.openOptionsPage();
    })

    roal.el("#enable").click(() => {
      if (currentState) {
        roal.el("#enable").removeClass("enabled");
        roal.el("#enable").addClass("disabled");

        roal.el("#enable").setText("無効");
        roal.el("h4").delAttr("hidden");
        browser.storage.sync.set({ enabled: false });

        roal.el("a").click(() => {
          chrome.tabs.reload();
        });
      } else {
        roal.el("#enable").removeClass("disabled");
        roal.el("#enable").addClass("enabled");

        roal.el("#enable").setText("有効");
        roal.el("h4").delAttr("hidden");
        browser.storage.sync.set({ enabled: true });

        roal.el("a").click(() => {
          chrome.tabs.reload();
        });
      }
    });
  }
});
