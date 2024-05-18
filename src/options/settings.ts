window.addEventListener("DOMContentLoaded", () => {
  var text_state = true;
  var icon_state = true;
  var white_checkmark = true;
  var wc_org = true;
  var tcoBypasser = true;
  var whitemode = false;
  var blue_delete = false;
  var verifiedBlue = false;
  var optimizeMore = true;
  var featureFlags = false;
  var hideTrend = false;
  var hideEngagement = false;
  var hideRecommend = false;
  chrome.storage.sync
    .get([
      "text_mode",
      "icon_mode",
      "white_checkmark",
      "wc_org",
      "tcoBypasser",
      "whitemode",
      "blue_delete",
      "verifiedBlue",
      "optimizeMore",
      "featureFlags",
      "hideTrend",
      "hideEngagement",
      "hideRecommend",
    ])
    .then((result) => {
      text_state = result.text_mode;
      icon_state = result.icon_mode;
      white_checkmark = result.white_checkmark;
      wc_org = result.wc_org;
      tcoBypasser = result.tcoBypasser;
      whitemode = result.whitemode;
      blue_delete = result.blue_delete;
      optimizeMore = result.optimizeMore;
      verifiedBlue = result.verifiedBlue;
      featureFlags = result.featureFlags;
      hideTrend = result.hideTrend;
      hideEngagement = result.hideEngagement;
      hideRecommend = result.hideRecommend;

      console.log(hideEngagement);

      goNext();
    });

  function goNext() {
    //the revamped odayaka twitter (Show Settings)
    if (hideTrend) {
      const hideTrendElement = document.querySelector(
        "#hideTrend"
      ) as HTMLInputElement;
      if (hideTrendElement !== null) {
        hideTrendElement.checked = true;
      }
    } else {
      const hideTrendElement = document.querySelector(
        "#hideTrend"
      ) as HTMLInputElement;
      if (hideTrendElement !== null) {
        hideTrendElement.checked = false;
      }
    }

    if (hideRecommend) {
      const hideRecommendElement = document.querySelector(
        "#hideRecommend"
      ) as HTMLInputElement;
      if (hideRecommendElement !== null) {
        hideRecommendElement.checked = true;
      }
    } else {
      const hideRecommendElement = document.querySelector(
        "#hideRecommend"
      ) as HTMLInputElement;
      if (hideRecommendElement !== null) {
        hideRecommendElement.checked = false;
      }
    }

    if (hideEngagement) {
      const hideEngagementElement = document.querySelector(
        "#hideEngagement"
      ) as HTMLInputElement;
      if (hideEngagementElement !== null) {
        hideEngagementElement.checked = true;
      }
    } else {
      const hideEngagementElement = document.querySelector(
        "#hideEngagement"
      ) as HTMLInputElement;
      if (hideEngagementElement !== null) {
        hideEngagementElement.checked = false;
      }
    }

    //the revamped odayaka twitter (event listener)
    const hideEngagementElement = document.querySelector(
      "#hideEngagement"
    ) as HTMLInputElement;
    if (hideEngagementElement !== null) {
      hideEngagementElement.addEventListener("click", () => {
        chrome.storage.sync.set({
          hideEngagement: hideEngagementElement.checked,
        });
      });
    }

    const hideRecommendElement = document.querySelector(
      "#hideRecommend"
    ) as HTMLInputElement;
    if (hideRecommendElement !== null) {
      hideRecommendElement.addEventListener("click", () => {
        chrome.storage.sync.set({
          hideRecommend: hideRecommendElement.checked,
        });
      });
    }

    const hideTrendElement = document.querySelector(
      "#hideTrend"
    ) as HTMLInputElement;
    if (hideTrendElement !== null) {
      hideTrendElement.addEventListener("click", () => {
        chrome.storage.sync.set({ hideTrend: hideTrendElement.checked });
      });
    }

    //text, icon mode 
    if (text_state == false) {
      const textModeElement = document.querySelector(
        "#text_mode"
      ) as HTMLInputElement;
      if (textModeElement !== null) {
        textModeElement.checked = false;
      }
    } else {
      const textModeElement = document.querySelector(
        "#text_mode"
      ) as HTMLInputElement;
      if (textModeElement !== null) {
        textModeElement.checked = true;
      }
    }

    if (icon_state == false) {
      const iconModeElement = document.querySelector(
        "#icon_mode"
      ) as HTMLInputElement;
      if (iconModeElement !== null) {
        iconModeElement.checked = false;
      }
    } else {
      const iconModeElement = document.querySelector(
        "#icon_mode"
      ) as HTMLInputElement;
      if (iconModeElement !== null) {
        iconModeElement.checked = true;
      }
    }

    if (optimizeMore == false) {
      const optimizeMoreElement = document.querySelector(
        "#optimizeMore"
      ) as HTMLInputElement;
      if (optimizeMoreElement !== null) {
        optimizeMoreElement.checked = false;
      }
    } else {
      const optimizeMoreElement = document.querySelector(
        "#optimizeMore"
      ) as HTMLInputElement;
      if (optimizeMoreElement !== null) {
        optimizeMoreElement.checked = true;
      }
    }

    if (featureFlags == false) {
      const featureFlagsElement = document.querySelector(
        "#FeatureFlags"
      ) as HTMLInputElement;
      if (featureFlagsElement !== null) {
        featureFlagsElement.checked = false;
      }
    } else {
      const featureFlagsElement = document.querySelector(
        "#FeatureFlags"
      ) as HTMLInputElement;
      if (featureFlagsElement !== null) {
        featureFlagsElement.checked = true;
      }
    }

    if (white_checkmark == false) {
      const whiteCheckmarkElement = document.querySelector(
        "#white_checkmark"
      ) as HTMLInputElement;
      if (whiteCheckmarkElement !== null) {
        whiteCheckmarkElement.checked = false;
      }

      const wcOrgElement = document.querySelector(
        "#wc_org"
      ) as HTMLInputElement;
      if (wcOrgElement !== null) {
        wcOrgElement.checked = false;
        wcOrgElement.disabled = true;
      }

      chrome.storage.sync.set({
        wc_org: false,
      });

      wc_org = false;
    } else {
      const whiteCheckmarkElement = document.querySelector(
        "#white_checkmark"
      ) as HTMLInputElement;
      if (whiteCheckmarkElement !== null) {
        whiteCheckmarkElement.checked = true;
        whiteCheckmarkElement.disabled = false;
      }
    }

    if (wc_org == false) {
      const wcOrgElement = document.querySelector(
        "#wc_org"
      ) as HTMLInputElement;
      if (wcOrgElement !== null) {
        wcOrgElement.checked = false;
      }
    } else {
      const wcOrgElement = document.querySelector(
        "#wc_org"
      ) as HTMLInputElement;
      if (wcOrgElement !== null) {
        wcOrgElement.checked = true;
      }
    }

    if (verifiedBlue == true) {
      const whiteCheckmarkElement = document.querySelector(
        "#white_checkmark"
      ) as HTMLInputElement;
      if (whiteCheckmarkElement !== null) {
        whiteCheckmarkElement.disabled = true;
      }

      const wcOrgElement = document.querySelector(
        "#wc_org"
      ) as HTMLInputElement;
      if (wcOrgElement !== null) {
        wcOrgElement.disabled = true;
      }

      chrome.storage.sync.set({
        white_checkmark: false,
        wc_org: false,
      });

      const verifiedBlueElement = document.querySelector(
        "#verifiedBlue"
      ) as HTMLInputElement;
      if (verifiedBlueElement !== null) {
        verifiedBlueElement.checked = true;
      }
    } else {
      const verifiedBlueElement = document.querySelector(
        "#verifiedBlue"
      ) as HTMLInputElement;
      if (verifiedBlueElement !== null) {
        verifiedBlueElement.checked = false;
      }
    }

    if (tcoBypasser == false) {
      const tcoBypasserElement = document.querySelector(
        "#tcoBypasser"
      ) as HTMLInputElement;
      if (tcoBypasserElement !== null) {
        tcoBypasserElement.checked = false;
      }
    } else {
      const tcoBypasserElement = document.querySelector(
        "#tcoBypasser"
      ) as HTMLInputElement;
      if (tcoBypasserElement !== null) {
        tcoBypasserElement.checked = true;
      }
    }

    if (whitemode == true) {
      const whitemodeElement = document.querySelector(
        "#whitemode"
      ) as HTMLInputElement;
      if (whitemodeElement !== null) {
        whitemodeElement.checked = true;
      }
    } else {
      const whitemodeElement = document.querySelector(
        "#whitemode"
      ) as HTMLInputElement;
      if (whitemodeElement !== null) {
        whitemodeElement.checked = false;
      }
    }

    const verifiedBlueElement = document.querySelector(
      "#verifiedBlue"
    ) as HTMLInputElement;
    if (blue_delete == true) {
      const blueDeleteElement = document.querySelector(
        "#blue_delete"
      ) as HTMLInputElement;
      if (blueDeleteElement !== null) {
        blueDeleteElement.checked = true;
      }

      if (verifiedBlueElement !== null) {
        verifiedBlueElement.disabled = true;
        verifiedBlueElement.checked = false;
      }

      const wcOrgElement = document.querySelector(
        "#wc_org"
      ) as HTMLInputElement;
      if (wcOrgElement !== null) {
        wcOrgElement.disabled = true;
        wcOrgElement.checked = false;
      }

      const whiteCheckmarkElement = document.querySelector(
        "#white_checkmark"
      ) as HTMLInputElement;
      if (whiteCheckmarkElement !== null) {
        whiteCheckmarkElement.disabled = true;
        whiteCheckmarkElement.checked = false;
      }
    } else {
      const blueDeleteElement = document.querySelector(
        "#blue_delete"
      ) as HTMLInputElement;
      if (blueDeleteElement !== null) {
        blueDeleteElement.checked = false;
      }
    }

    const textModeElement = document.querySelector(
      "#text_mode"
    ) as HTMLInputElement;
    if (textModeElement !== null) {
      textModeElement.addEventListener("click", () => {
        chrome.storage.sync.set({ text_mode: textModeElement.checked });
      });
    }

    const iconModeElement = document.querySelector(
      "#icon_mode"
    ) as HTMLInputElement;
    if (iconModeElement !== null) {
      iconModeElement.addEventListener("click", () => {
        chrome.storage.sync.set({ icon_mode: iconModeElement.checked });
      });
    }

    const optimizeMoreElement = document.querySelector(
      "#optimizeMore"
    ) as HTMLInputElement;
    if (optimizeMoreElement !== null) {
      optimizeMoreElement.addEventListener("click", () => {
        chrome.storage.sync.set({ optimizeMore: optimizeMoreElement.checked });
      });
    }

    const featureFlagsElement = document.querySelector(
      "#FeatureFlags"
    ) as HTMLInputElement;
    if (featureFlagsElement !== null) {
      featureFlagsElement.addEventListener("click", () => {
        chrome.storage.sync.set({ featureFlags: featureFlagsElement.checked });
      });
    }

    const whiteCheckmarkElement = document.querySelector(
      "#white_checkmark"
    ) as HTMLInputElement;
    if (whiteCheckmarkElement !== null) {
      whiteCheckmarkElement.addEventListener("click", () => {
        chrome.storage.sync.set({
          white_checkmark: whiteCheckmarkElement.checked,
        });

        if (!whiteCheckmarkElement.checked) {
          const wcOrgElement = document.querySelector(
            "#wc_org"
          ) as HTMLInputElement;
          if (wcOrgElement !== null) {
            wcOrgElement.disabled = true;
            wcOrgElement.checked = false;

            chrome.storage.sync.set({
              wc_org: false,
            });
          }
        } else {
          const wcOrgElement = document.querySelector(
            "#wc_org"
          ) as HTMLInputElement;
          if (wcOrgElement !== null) {
            wcOrgElement.disabled = false;
          }
        }
      });
    }

    const wcOrgElement = document.querySelector("#wc_org") as HTMLInputElement;
    if (wcOrgElement !== null) {
      wcOrgElement.addEventListener("click", () => {
        chrome.storage.sync.set({
          wc_org: wcOrgElement.checked,
        });
      });
    }

    if (verifiedBlueElement !== null) {
      verifiedBlueElement.addEventListener("click", () => {
        chrome.storage.sync.set({
          verifiedBlue: verifiedBlueElement.checked,
        });
      });
    }

    const tcoBypasserElement = document.querySelector(
      "#tcoBypasser"
    ) as HTMLInputElement;
    if (tcoBypasserElement !== null) {
      tcoBypasserElement.addEventListener("click", () => {
        chrome.storage.sync.set({
          tcoBypasser: tcoBypasserElement.checked,
        });
      });
    }

    const whitemodeElement = document.querySelector(
      "#whitemode"
    ) as HTMLInputElement;
    if (whitemodeElement !== null) {
      whitemodeElement.addEventListener("click", () => {
        chrome.storage.sync.set({
          whitemode: whitemodeElement.checked,
        });
      });
    }

    const blueDeleteElement = document.querySelector(
      "#blue_delete"
    ) as HTMLInputElement;
    if (blueDeleteElement !== null) {
      blueDeleteElement.addEventListener("click", () => {
        const blueDeleteElement = document.querySelector(
          "#blue_delete"
        ) as HTMLInputElement;
        if (blueDeleteElement !== null) {
          chrome.storage.sync.set({
            blue_delete: blueDeleteElement.checked,
          });
        }

        if (
          (document.querySelector("#blue_delete") as HTMLInputElement)?.checked
        ) {
          chrome.storage.sync.set({
            white_checkmark: false,
            wc_org: false,
            verifiedBlue: false,
          });

          (
            document.querySelector("#white_checkmark") as HTMLInputElement
          ).disabled = true;
          (
            document.querySelector("#white_checkmark") as HTMLInputElement
          ).checked = false;
          (document.querySelector("#wc_org") as HTMLInputElement).disabled =
            true;
          (document.querySelector("#wc_org") as HTMLInputElement).checked =
            false;
          (
            document.querySelector("#verifiedBlue") as HTMLInputElement
          ).disabled = true;
          (
            document.querySelector("#verifiedBlue") as HTMLInputElement
          ).checked = false;
        } else {
          (
            document.querySelector("#white_checkmark") as HTMLInputElement
          ).disabled = false;
          (document.querySelector("#wc_org") as HTMLInputElement).disabled =
            false;
          (
            document.querySelector("#verifiedBlue") as HTMLInputElement
          ).disabled = false;
        }
      });
    }
  }
});
