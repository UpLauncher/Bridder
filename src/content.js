if (typeof browser === "undefined") {
  var browser = chrome;
}

(function () {
  "use strict";

  const tcoBypasser = () => {
    setInterval(() => {
      const nodes = [...document.querySelectorAll("a[href^='https://t.co/']")];
      nodes.map((node) => {
        if (
          node.getAttribute("data-testid") == "UserUrl" ||
          node.parentNode.parentNode.getAttribute("data-testid") ==
            "card.wrapper"
        ) {
          return;
        }
        const url = [...node.childNodes]
          .map((n) => n.innerHTML ?? n.textContent)
          .filter((text) => text !== "…")
          .join("");
        if (url.includes("</div>")) return;
        node.href = url;
      });
    }, 300);
  };

  var alreadyRun = false;

  const optimizeSidebar = () => {
    setInterval(function () {
      document
        .querySelectorAll("a.css-175oi2r.r-6koalj")
        .forEach((container) => {
          if (
            container.getAttribute("href") == "/i/verified-orgs-signup" ||
            container.getAttribute("href") == "/i/premium_tier_switch" && alreadyRun == false
          ) {
            console.log(container);
            alreadyRun = true;
            container.style.display = "none";
          }
        });
    }, 300);
  };

  const whiteMode = () => {
    setInterval(() => {
      document.querySelectorAll("*").forEach((container) => {
        try {
          if (
            container.style.backgroundColor == "rgb(249, 24, 128)" ||
            container.classList.contains("r-1waj6vr") ||
            container.classList.contains("r-4nw3r4")
          ) {
            container.style.cssText =
              "background-color: rgb(255, 255, 255) !important;";
            container.style.color = "rgb(0, 0, 0)";
            container.querySelector("span").style.color = "rgb(0, 0, 0)";
          } else if (
            container.style.color == "rgb(249, 24, 128)" ||
            container.classList.contains("r-vkub15")
          ) {
            container.style.cssText = "color: rgb(255, 255, 255) !important;";
          } else if (container.getAttribute("stroke") == "#F91880") {
            container.setAttribute("stroke", "rgb(255, 255, 255)");
          }
        } catch (e) {}
      });
    }, 300);
  };

  browser.storage.sync
    .get([
      "enabled",
      "text_mode",
      "icon_mode",
      "white_checkmark",
      "wc_org",
      "tcoBypasser",
      "whitemode",
      "blue_delete",
      "optimizeSidebar",
      "verifiedBlue",
    ])
    .then((result) => {
      if (result.text_mode == null || result.optimizeSidebar == null) {
        browser.storage.sync.set({
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
        });

        window.location.reload();
      }

      if (result.enabled) {
        if (result.tcoBypasser) {
          tcoBypasser();
        }
        if (result.whitemode) {
          whiteMode();
        }
        if (result.optimizeSidebar) {
          optimizeSidebar();
        }
      }
    });
})();
