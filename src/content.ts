//Comments by GitHub Copilot

// Check if the chrome object is undefined, if so, assign it to chrome

// Immediately Invoked Function Expression (IIFE) to avoid polluting the global scope
(function () {
  "use strict";

  let isFirstShowSettings = true;

  const showSettingsInMore = () => {
    setInterval(() => {
      document
        .querySelectorAll(
          "a.css-175oi2r.r-16y2uox.r-dnmrzs.r-o7ynqc.r-6416eg.r-1ny4l3l.r-1loqt21"
        )
        .forEach((container) => {
          if (container.getAttribute("href") == "/settings") {
            if (container.getAttribute("bridder-settings-applied") == "true")
              return;
            container.setAttribute("bridder-settings-applied", "true");

            const clone = container!.parentNode!.cloneNode(true);

            (clone as HTMLElement).querySelector("span")!.textContent =
              "Bridderの設定 (v2.1.4)";

            var dropdownDiv = document.getElementsByClassName(
              "css-175oi2r r-j2cz3j r-yfoy6g r-1q9bdsx r-xnswec r-1udh08x r-1rnoaur r-1r851ge r-1xcajam"
            )[0];

            if (!isFirstShowSettings) {
              (dropdownDiv as HTMLElement).style.top =
                parseInt(
                  (dropdownDiv as HTMLElement).style.top.replace("px", "")
                ) -
                55 +
                "px";
            } else {
              (dropdownDiv as HTMLElement).style.top =
                parseInt(
                  (dropdownDiv as HTMLElement).style.top.replace("px", "")
                ) -
                55 +
                "px";
              isFirstShowSettings = false;
            }

            (clone as HTMLElement)
              .querySelector("a")!
              .setAttribute("href", "javascript:void(0)");
            clone.addEventListener("click", () => {
              chrome.runtime.sendMessage({ action: "openOptionsPage" });
            });

            clone.addEventListener("mouseenter", () => {
              (clone as HTMLElement)
                .querySelector("a")!
                .classList.add("r-g6ijar");
            });
            clone.addEventListener("mouseleave", () => {
              (clone as HTMLElement)
                .querySelector("a")!
                .classList.remove("r-g6ijar");
            });

            container!.parentNode!.parentNode!.insertBefore(
              clone,
              container!.parentNode?.nextSibling || null
            );
          }
        });
    }, 300);
  };

  // Function to bypass t.co links on Twitter
  const tcoBypasser = () => {
    // Select all anchor tags with href starting with 'https://t.co/'
    const nodes = [...document.querySelectorAll("a[href^='https://t.co/']")];
    nodes.map((node) => {
      // If the node is a user URL or a card wrapper, do nothing
      if (
        node.getAttribute("data-testid") == "UserUrl" ||
        (node.parentNode &&
          (node.parentNode.parentNode as HTMLElement).getAttribute(
            "data-testid"
          ) == "card.wrapper")
      ) {
        return;
      }
      // Get the URL from the child nodes of the anchor tag
      const url = [...node.childNodes]
        .map((n) => (n as HTMLElement).innerHTML ?? n.textContent)
        .filter((text) => text !== "…")
        .join("");
      // If the URL contains a closing div tag, do nothing
      if (url.includes("</div>")) return;
      // Replace the href of the anchor tag with the URL
      (node as HTMLAnchorElement).href = url;
    });
  };

  // Function to optimize the sidebar
  const optimizeSidebar = () => {
    // Select all anchor tags with specific classes
    document
      .querySelectorAll(
        "a.css-175oi2r.r-6koalj.r-eqz5dr.r-16y2uox.r-1habvwh.r-oyd9sg.r-13qz1uu.r-1ny4l3l.r-1loqt21"
      )
      .forEach((container: Element) => {
        // If the href of the anchor tag is either '/i/verified-orgs-signup' or '/i/premium_tier_switch', hide it
        if (
          (container as HTMLAnchorElement).getAttribute("href") ==
            "/i/verified-orgs-signup" ||
          (container as HTMLAnchorElement).getAttribute("href") ==
            "/i/premium_tier_switch"
        ) {
          (container as HTMLAnchorElement).style.display = "none";
        }
      });
  };

  let moreFeaturesRunned = false;

  const moveFeatureMenu = () => {
    document.querySelectorAll(".featuresBtnContainer").forEach((container) => {
      if (container.getAttribute("bridder-featuresBtnContainer") == "true")
        return;
      container.setAttribute("bridder-featuresBtnContainer", "true");
      (container as HTMLElement).style.display = "none";
      // Select all anchor tags with specific classes
      new MutationObserver(() => {
        document
          .querySelectorAll(" div.css-175oi2r[data-testid='Dropdown']")
          .forEach(() => {
            if (moreFeaturesRunned) return;
            const ElmContainer = document.querySelector(
              "div.css-175oi2r.r-1mnxbyr"
            );

            if (!ElmContainer) return;

            ElmContainer.appendChild(container);
            (container as HTMLElement).style.display = "block";

            var dropdownDiv = document.getElementsByClassName(
              "css-175oi2r r-j2cz3j r-yfoy6g r-1q9bdsx r-xnswec r-1udh08x r-1rnoaur r-1r851ge r-1xcajam"
            )[0];
            (dropdownDiv as HTMLElement).style.top =
              parseInt(
                (dropdownDiv as HTMLElement).style.top.replace("px", "")
              ) -
              60 +
              "px";

            const elmSpan = container.querySelector("span");
            if (!elmSpan) return;
            elmSpan.classList.add(
              "css-1qaijid",
              "r-bcqeeo",
              "r-qvutc0",
              "r-1tl8opc"
            );
            elmSpan.style.fontWeight = "bold";
            elmSpan.textContent = "機能フラグ";

            moreFeaturesRunned = true;

            return;
          });

        try {
          const dropdownDiv = document.querySelector(
            "div.css-175oi2r[data-testid='Dropdown']"
          );
          if (!dropdownDiv) throw Error("Element not found>>");

          dropdownDiv.setAttribute("bridder-featureMenuChecker", "true");
        } catch (e) {
          if (moreFeaturesRunned) moreFeaturesRunned = false;
        }
      }).observe(document.body, {
        childList: true,
        subtree: true,
      });

      tcoBypasser();
    });
  };

  // Function to optimize more
  const optimizeMore = () => {
    // Select all anchor tags with specific classes
    document
      .querySelectorAll(
        "a.css-175oi2r.r-16y2uox.r-dnmrzs.r-o7ynqc.r-6416eg.r-1ny4l3l.r-1loqt21"
      )
      .forEach((container) => {
        // If the href of the anchor tag is either '/settings/monetization' or 'https://ads.twitter.com/?ref=gl-tw-tw-twitter-ads-rweb', hide it and adjust the dropdown
        if (
          container.getAttribute("href") == "/settings/monetization" ||
          container.getAttribute("href") ==
            "https://ads.twitter.com/?ref=gl-tw-tw-twitter-ads-rweb" ||
          container.getAttribute("href") == "https://tweetdeck.twitter.com"
        ) {
          var dropdownDiv = document.getElementsByClassName(
            "css-175oi2r r-j2cz3j r-yfoy6g r-1q9bdsx r-xnswec r-1udh08x r-1rnoaur r-1r851ge r-1xcajam"
          )[0];
          (container as HTMLElement).style.display = "none";
          if (dropdownDiv.getAttribute("bridder-optimizeMore") == "true")
            return;
          dropdownDiv.setAttribute("bridder-optimizeMore", "true");
          (container as HTMLElement).style.top =
            parseInt((container as HTMLElement).style.top.replace("px", "")) +
            165 +
            "px";
        }
      });
  };

  // Function to switch to white mode
  const whiteMode = () => {
    // Select all elements on the page
    document.querySelectorAll("*").forEach((container) => {
      try {
        // If the background color of the element is 'rgb(249, 24, 128)' or it has specific classes, change its color to white and black
        if (
          (container as HTMLElement).style.backgroundColor ==
            "rgb(249, 24, 128)" ||
          container.classList.contains("r-1waj6vr") ||
          container.classList.contains("r-4nw3r4")
        ) {
          const containerElement = container as HTMLElement;
          containerElement.style.cssText =
            "background-color: rgb(255, 255, 255) !important;";
          containerElement.style.color = "rgb(0, 0, 0)";
          const spanElement = containerElement.querySelector("span");
          if (spanElement) {
            spanElement.style.color = "rgb(0, 0, 0)";
          }
        } else if (
          (container as HTMLElement).style.color == "rgb(249, 24, 128)" ||
          container.classList.contains("r-vkub15")
        ) {
          // If the color of the element is 'rgb(249, 24, 128)' or it has a specific class, change its color to white
          (container as HTMLElement).style.cssText =
            "color: rgb(255, 255, 255) !important;";
        } else if (container.getAttribute("stroke") == "#F91880") {
          // If the stroke color of the element is '#F91880', change it to white
          container.setAttribute("stroke", "rgb(255, 255, 255)");
        }
      } catch (e) {}
    });
  };

  // Get the settings from the chrome storage
  chrome.storage.sync
    .get([
      "enabled",
      "tcoBypasser",
      "whitemode",
      "optimizeSidebar",
      "optimizeMore",
      "featureFlags",
    ])
    .then((result: any) => {
      // If the featureFlags setting is null, set the default settings and reload the page
      if (result.featureFlags == null) {
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

        window.location.reload();
      }

      // If the extension is enabled, run the corresponding functions based on the settings
      if (result.enabled) {
        new MutationObserver(showSettingsInMore).observe(document.body, {
          childList: true,
          subtree: true,
        });

        showSettingsInMore();
        if (result.featureFlags) {
          new MutationObserver(moveFeatureMenu).observe(document.body, {
            childList: true,
            subtree: true,
          });

          moveFeatureMenu();
        }
        if (result.tcoBypasser) {
          new MutationObserver(tcoBypasser).observe(document.body, {
            childList: true,
            subtree: true,
          });

          tcoBypasser();
        }
        if (result.whitemode) {
          new MutationObserver(whiteMode).observe(document.body, {
            childList: true,
            subtree: true,
          });

          whiteMode();
        }
        if (result.optimizeMore) {
          new MutationObserver(optimizeMore).observe(document.body, {
            childList: true,
            subtree: true,
          });

          optimizeMore();
        }
        if (result.optimizeSidebar) {
          new MutationObserver(optimizeSidebar).observe(document.body, {
            childList: true,
            subtree: true,
          });

          optimizeSidebar();
        }
      }
    });
})();
