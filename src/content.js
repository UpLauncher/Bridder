//Comments by GitHub Copilot

// Check if the browser object is undefined, if so, assign it to chrome
if (typeof browser === "undefined") {
  var browser = chrome;
}

// Immediately Invoked Function Expression (IIFE) to avoid polluting the global scope
(function () {
  "use strict";

  // Function to bypass t.co links on Twitter
  const tcoBypasser = () => {
    // Run the function every 300ms
    setInterval(() => {
      // Select all anchor tags with href starting with 'https://t.co/'
      const nodes = [...document.querySelectorAll("a[href^='https://t.co/']")];
      nodes.map((node) => {
        // If the node is a user URL or a card wrapper, do nothing
        if (
          node.getAttribute("data-testid") == "UserUrl" ||
          node.parentNode.parentNode.getAttribute("data-testid") ==
            "card.wrapper"
        ) {
          return;
        }
        // Get the URL from the child nodes of the anchor tag
        const url = [...node.childNodes]
          .map((n) => n.innerHTML ?? n.textContent)
          .filter((text) => text !== "…")
          .join("");
        // If the URL contains a closing div tag, do nothing
        if (url.includes("</div>")) return;
        // Replace the href of the anchor tag with the URL
        node.href = url;
      });
    }, 300);
  };

  // Function to optimize the sidebar
  const optimizeSidebar = () => {
    // Run the function every 300ms
    setInterval(function () {
      // Select all anchor tags with specific classes
      document
        .querySelectorAll("a.css-175oi2r.r-6koalj")
        .forEach((container) => {
          // If the href of the anchor tag is either '/i/verified-orgs-signup' or '/i/premium_tier_switch', hide it
          if (
            container.getAttribute("href") == "/i/verified-orgs-signup" ||
            container.getAttribute("href") == "/i/premium_tier_switch"
          ) {
            container.style.display = "none";
          }
        });
    }, 300);
  };

  let moreFeaturesRunned = false;

  const moveFeatureMenu = () => {
    setInterval(function () {
      document
        .querySelectorAll(".featuresBtnContainer")
        .forEach((container) => {
          if (container.getAttribute("bridder-featuresBtnContainer") == "true")
            return;
          container.setAttribute("bridder-featuresBtnContainer", "true");
          container.style.display = "none";
          // Select all anchor tags with specific classes
          setInterval(function () {
            document
              .querySelectorAll("div.css-175oi2r[data-testid='Dropdown']")
              .forEach((menuElm) => {
                if (moreFeaturesRunned) return;
                const ElmContainer = document.querySelector(
                  "div.css-175oi2r.r-1mnxbyr"
                );

                ElmContainer.appendChild(container);
                container.style.display = "block";

                  var dropdownDiv = document.getElementsByClassName(
                    "css-175oi2r r-j2cz3j r-yfoy6g r-1q9bdsx r-xnswec r-1udh08x r-1rnoaur r-1r851ge r-1xcajam"
                  )[0];
                  dropdownDiv.style.top =
                  parseInt(dropdownDiv.style.top.replace("px", "")) - 60 + "px";

                const elmSpan = container.querySelector("span");
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
              document
                .querySelector("div.css-175oi2r[data-testid='Dropdown']")
                .setAttribute("bridder-featureMenuChecker", "true");
            } catch (e) {
              if (moreFeaturesRunned) moreFeaturesRunned = false;
            }
          }, 300);
        });
    }, 300);
  };

  // Function to optimize more
  const optimizeMore = () => {
    // Run the function every 300ms
    setInterval(function () {
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
              "https://ads.twitter.com/?ref=gl-tw-tw-twitter-ads-rweb"
          ) {
            var dropdownDiv = document.getElementsByClassName(
              "css-175oi2r r-j2cz3j r-yfoy6g r-1q9bdsx r-xnswec r-1udh08x r-1rnoaur r-1r851ge r-1xcajam"
            )[0];
            container.style.display = "none";
            if (dropdownDiv.getAttribute("bridder-optimizeMore") == "true")
              return;
            dropdownDiv.setAttribute("bridder-optimizeMore", "true");
            dropdownDiv.style.top =
              parseInt(dropdownDiv.style.top.replace("px", "")) + 110 + "px";
          }
        });
    }, 300);
  };

  // Function to switch to white mode
  const whiteMode = () => {
    // Run the function every 300ms
    setInterval(() => {
      // Select all elements on the page
      document.querySelectorAll("*").forEach((container) => {
        try {
          // If the background color of the element is 'rgb(249, 24, 128)' or it has specific classes, change its color to white and black
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
            // If the color of the element is 'rgb(249, 24, 128)' or it has a specific class, change its color to white
            container.style.cssText = "color: rgb(255, 255, 255) !important;";
          } else if (container.getAttribute("stroke") == "#F91880") {
            // If the stroke color of the element is '#F91880', change it to white
            container.setAttribute("stroke", "rgb(255, 255, 255)");
          }
        } catch (e) {}
      });
    }, 300);
  };

  // Get the settings from the browser storage
  browser.storage.sync
    .get([
      "enabled",
      "tcoBypasser",
      "whitemode",
      "optimizeSidebar",
      "optimizeMore",
    ])
    .then((result) => {
      // If the optimizeMore setting is null, set the default settings and reload the page
      if (result.optimizeMore == null) {
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
          optimizeMore: true,
        });

        window.location.reload();
      }

      // If the extension is enabled, run the corresponding functions based on the settings
      if (result.enabled) {
        moveFeatureMenu();
        if (result.tcoBypasser) {
          tcoBypasser();
        }
        if (result.whitemode) {
          whiteMode();
        }
        if (result.optimizeMore) {
          optimizeMore();
        }
        if (result.optimizeSidebar) {
          optimizeSidebar();
        }
      }
    });
})();
