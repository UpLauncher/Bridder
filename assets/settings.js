if (typeof browser === "undefined") {
  var browser = chrome;
}

roal.load(() => {
  var text_state = true;
  var icon_state = true;
  var white_checkmark = true;
  var wc_org = true;
  var tcoBypasser = true;
  var whitemode = false;
  var blue_delete = false;
  var verifiedBlue = false;
  var forceView = true;
  var optimizeMore = true;
  var optimizeSidebar = true;
  browser.storage.sync
    .get([
      "text_mode",
      "icon_mode",
      "white_checkmark",
      "wc_org",
      "tcoBypasser",
      "whitemode",
      "blue_delete",
      "forceView",
      "verifiedBlue",
      "optimizeMore",
      "optimizeSidebar",
    ])
    .then((result) => {
      text_state = result.text_mode;
      icon_state = result.icon_mode;
      white_checkmark = result.white_checkmark;
      wc_org = result.wc_org;
      tcoBypasser = result.tcoBypasser;
      whitemode = result.whitemode;
      blue_delete = result.blue_delete;
      forceView = result.forceView;
      optimizeMore = result.optimizeMore;
      verifiedBlue = result.verifiedBlue;
      optimizeSidebar = result.optimizeSidebar;

      goNext();
    });

  function goNext() {
    if (text_state == false) {
      roal.el("#text_mode").setChecked(false);
    } else {
      roal.el("#text_mode").setChecked(true);
    }

    if (icon_state == false) {
      roal.el("#icon_mode").setChecked(false);
    } else {
      roal.el("#icon_mode").setChecked(true);
    }

    if (optimizeMore == false) {
      roal.el("#optimizeMore").setChecked(false);
    } else {
      roal.el("#optimizeMore").setChecked(true);
    }

    if (white_checkmark == false) {
      roal.el("#white_checkmark").setChecked(false);
      roal.el("#wc_org").setDisabled(true);
      roal.el("#wc_org").setChecked(false);

      browser.storage.sync.set({
        wc_org: false,
      });

      wc_org = false;
    } else {
      roal.el("#white_checkmark").setChecked(true);
    }

    if (wc_org == false) {
      roal.el("#wc_org").setChecked(false);
    } else {
      roal.el("#wc_org").setChecked(true);
    }

    if (forceView == false) {
      roal.el("#forceView").setChecked(false);
    } else {
      roal.el("#forceView").setChecked(true);
    }

    if (verifiedBlue == false) {
      roal.el("#verifiedBlue").setChecked(false);
    } else {
      roal.el("#white_checkmark").setDisabled(true);
      roal.el("#wc_org").setDisabled(true);

      browser.storage.sync.set({
        white_checkmark: false,
        wc_org: false,
      });
      roal.el("#verifiedBlue").setChecked(true);
    }

    if (tcoBypasser == false) {
      roal.el("#tcoBypasser").setChecked(false);
    } else {
      roal.el("#tcoBypasser").setChecked(true);
    }

    if (whitemode == true) {
      roal.el("#whitemode").setChecked(true);
    } else {
      roal.el("#whitemode").setChecked(false);
    }

    if (optimizeSidebar == true) {
      roal.el("#OptimizeSidebar").setChecked(true);
    } else {
      roal.el("#OptimizeSidebar").setChecked(false);
    }

    if (blue_delete == true) {
      roal.el("#blue_delete").setChecked(true);
      roal.el("#wc_org").setDisabled(true);
      roal.el("#white_checkmark").setDisabled(true);
      roal.el("#verifiedBlue").setDisabled(true);
    } else {
      roal.el("#blue_delete").setChecked(false);
    }

    roal.el("#text_mode").click(() => {
      browser.storage.sync.set({ text_mode: roal.el("#text_mode").checked });
    });

    roal.el("#icon_mode").click(() => {
      browser.storage.sync.set({ icon_mode: roal.el("#icon_mode").checked });
    });

    roal.el("#optimizeMore").click(() => {
      browser.storage.sync.set({ optimizeMore: roal.el("#optimizeMore").checked });
    });

    roal.el("#white_checkmark").click(() => {
      browser.storage.sync.set({
        white_checkmark: roal.el("#white_checkmark").checked,
      });

      if (!roal.el("#white_checkmark").checked) {
        roal.el("#wc_org").setDisabled(true);
        roal.el("#wc_org").setChecked(false);

        browser.storage.sync.set({
          wc_org: false,
        });
      } else {
        roal.el("#wc_org").setDisabled(false);
      }
    });

    roal.el("#wc_org").click(() => {
      browser.storage.sync.set({
        wc_org: roal.el("#wc_org").checked,
      });
    });

    roal.el("#forceView").click(() => {
      browser.storage.sync.set({ forceView: roal.el("#forceView").checked });
    });

    roal.el("#verifiedBlue").click(() => {
      browser.storage.sync.set({
        verifiedBlue: roal.el("#verifiedBlue").checked,
      });
    });

    roal.el("#tcoBypasser").click(() => {
      browser.storage.sync.set({
        tcoBypasser: roal.el("#tcoBypasser").checked,
      });
    });

    roal.el("#whitemode").click(() => {
      browser.storage.sync.set({
        whitemode: roal.el("#whitemode").checked,
      });
    });

    roal.el("#OptimizeSidebar").click(() => {
      browser.storage.sync.set({
        optimizeSidebar: roal.el("#OptimizeSidebar").checked,
      });
    });

    roal.el("#blue_delete").click(() => {
      browser.storage.sync.set({
        blue_delete: roal.el("#blue_delete").checked,
      });

      if (roal.el("#blue_delete").checked) {
        browser.storage.sync.set({
          white_checkmark: false,
          wc_org: false,
          verifiedBlue: false,
        });

        roal.el("#white_checkmark").setDisabled(true);
        roal.el("#white_checkmark").setChecked(false);
        roal.el("#wc_org").setDisabled(true);
        roal.el("#wc_org").setChecked(false);
        roal.el("#verifiedBlue").setDisabled(true);
        roal.el("#verifiedBlue").setChecked(false);
      } else {
        roal.el("#white_checkmark").setDisabled(false);
        roal.el("#wc_org").setDisabled(false);
        roal.el("#verifiedBlue").setDisabled(false);
      }
    });
  }
});
