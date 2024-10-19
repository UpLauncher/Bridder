//Comments by GitHub Copilot

import { resetSettings } from "./modules/util";

// Check if the chrome object is undefined, if so, assign it to chrome

// Immediately Invoked Function Expression (IIFE) to avoid polluting the global scope
(function () {
  "use strict";

  let isRemovePremium = false;
  let isRemoveCommunity = false;
  let isRemoveCommunityNotes = false;

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
          container.getAttribute("href") == "/i/verified-orgs-signup" ||
          container.getAttribute("href") == "/jobs" ||
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

  const removePremiumBanner = () => {
    document.querySelectorAll(".css-175oi2r.r-1habvwh.r-eqz5dr.r-uaa2di.r-1mmae3n.r-3pj75a.r-bnwqim").forEach((container) => {
      const AnchorElement = container.querySelector("a")
      if (AnchorElement) {
        if (getXURL("/i/premium_sign_up", AnchorElement)) {
          console.log(AnchorElement);
          const XPremiumAd = container.parentNode!.parentNode! as HTMLElement
          XPremiumAd.style.display = "none"
        }
      }
    })
  }

  const removeGetVerified = () => {
    document.querySelectorAll("a.css-175oi2r.r-sdzlij.r-1phboty.r-rs99b7.r-lrvibr.r-1ceczpf.r-lp5zef.r-3o4zer.r-o7ynqc.r-6416eg.r-1ny4l3l.r-1loqt21").forEach((container) => {
      if (getXURL("/i/premium_sign_up", container)) {
        const getVerified = container.querySelector(".css-1jxf684.r-bcqeeo.r-1ttztb7.r-qvutc0.r-1tl8opc")
        if (getVerified) {
          if (getVerified.textContent = "認証される") {
            const getVerifiedContainer = getVerified.parentNode?.parentNode as HTMLElement;
            if (getVerifiedContainer) {
              getVerifiedContainer.style.display = "none"
            }
          }
        }
      }
    })
  }

  const postNotification = () => {
    document.querySelectorAll("div.css-175oi2r.r-1awozwy.r-18u37iz.r-1h3ijdo.r-1777fci.r-f8sm7e.r-13qz1uu.r-3pj75a").forEach((container) => {
      const headingContainer = container.querySelector("h2")
      if (headingContainer) {
        const heading = headingContainer.querySelector("span")
        if (heading && (heading.textContent == "ツイート" || heading.textContent == "ポスト") && !heading.dataset.bridderAddedNotify) {
          heading.dataset.bridderAddedNotify = "true";
          const outerDiv = document.createElement('div');
          outerDiv.setAttribute('class', 'css-175oi2r r-1pz39u2 r-1777fci r-15ysp7h r-obd0qt r-s8bhmr');
        
          const anchor = document.createElement('a');
          anchor.href = '/settings/device_follow';
          anchor.setAttribute('aria-label', '設定');
          anchor.setAttribute('role', 'link');
          anchor.setAttribute('class', 'css-175oi2r r-sdzlij r-1phboty r-rs99b7 r-lrvibr r-10iirkv r-2yi16 r-1qi8awa r-o7ynqc r-6416eg r-1ny4l3l r-1loqt21');
          anchor.setAttribute('data-testid', 'settingsAppBar');
          anchor.style.borderColor = 'rgba(0, 0, 0, 0)';
          anchor.style.marginRight = 'calc(-9px)';
          anchor.style.backgroundColor = 'rgba(0, 0, 0, 0)';
        
          const innerDiv = document.createElement('div');
          innerDiv.dir = 'ltr';
          innerDiv.setAttribute('class', 'css-146c3p1 r-bcqeeo r-qvutc0 r-1tl8opc r-q4m81j r-a023e6 r-rjixqe r-b88u0q r-1awozwy r-6koalj r-18u37iz r-16y2uox r-1777fci');
          innerDiv.style.textOverflow = 'unset';
          innerDiv.style.color = 'rgb(239, 243, 244)';
        
          const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
          svg.setAttribute('viewBox', '0 0 24 24');
          svg.setAttribute('aria-hidden', 'true');
          svg.setAttribute('class', 'r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-z80fyv r-19wmn03');
          svg.style.color = 'rgb(239, 243, 244)';
        
          const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        
          const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
          path.setAttribute('d', 'M10.54 1.75h2.92l1.57 2.36c.11.17.32.25.53.21l2.53-.59 2.17 2.17-.58 2.54c-.05.2.04.41.21.53l2.36 1.57v2.92l-2.36 1.57c-.17.12-.26.33-.21.53l.58 2.54-2.17 2.17-2.53-.59c-.21-.04-.42.04-.53.21l-1.57 2.36h-2.92l-1.58-2.36c-.11-.17-.32-.25-.52-.21l-2.54.59-2.17-2.17.58-2.54c.05-.2-.03-.41-.21-.53l-2.35-1.57v-2.92L4.1 8.97c.18-.12.26-.33.21-.53L3.73 5.9 5.9 3.73l2.54.59c.2.04.41-.04.52-.21l1.58-2.36zm1.07 2l-.98 1.47C10.05 6.08 9 6.5 7.99 6.27l-1.46-.34-.6.6.33 1.46c.24 1.01-.18 2.07-1.05 2.64l-1.46.98v.78l1.46.98c.87.57 1.29 1.63 1.05 2.64l-.33 1.46.6.6 1.46-.34c1.01-.23 2.06.19 2.64 1.05l.98 1.47h.78l.97-1.47c.58-.86 1.63-1.28 2.65-1.05l1.45.34.61-.6-.34-1.46c-.23-1.01.18-2.07 1.05-2.64l1.47-.98v-.78l-1.47-.98c-.87-.57-1.28-1.63-1.05-2.64l.34-1.46-.61-.6-1.45.34c-1.02.23-2.07-.19-2.65-1.05l-.97-1.47h-.78zM12 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5c.82 0 1.5-.67 1.5-1.5s-.68-1.5-1.5-1.5zM8.5 12c0-1.93 1.56-3.5 3.5-3.5 1.93 0 3.5 1.57 3.5 3.5s-1.57 3.5-3.5 3.5c-1.94 0-3.5-1.57-3.5-3.5z');
          
          g.appendChild(path);
          svg.appendChild(g);
        
          const span = document.createElement('span');
          span.setAttribute('class', 'css-1jxf684 r-dnmrzs r-1udh08x r-3s2u2q r-bcqeeo r-1ttztb7 r-qvutc0 r-1tl8opc r-a023e6 r-rjixqe');
          span.style.textOverflow = 'unset';
          span.style.borderBottom = '2px solid rgb(239, 243, 244)';
        
          innerDiv.appendChild(svg);
          innerDiv.appendChild(span);
        
          anchor.appendChild(innerDiv);
          outerDiv.appendChild(anchor);

          container.appendChild(outerDiv)
        }
      }
    })
  }

  const optimizeSidebar = () => {
    //return;

    // Select all elements on the page
    document
      .querySelectorAll(
        "a.css-175oi2r.r-6koalj.r-eqz5dr.r-16y2uox.r-1habvwh.r-cnw61z.r-13qz1uu.r-1ny4l3l.r-1loqt21"
      )
      .forEach((container) => {
        try {
          optimizeInternal(container);
          return;
        } catch (e) {}
      });

    document
      .querySelectorAll(
        "a.css-175oi2r.r-6koalj.r-eqz5dr.r-16y2uox.r-1habvwh.r-cnw61z.r-13qz1uu.r-1ny4l3l.r-1loqt21"
      )
      .forEach((container) => {
        try {
          optimizeInternal(container);
          return;
        } catch (e) {}
      });
  };

  const optimizeInternal = (container: Element) => {
    if (!container) return;

    const accountName = document.querySelector("div.css-146c3p1.r-dnmrzs.r-1udh08x.r-3s2u2q.r-bcqeeo.r-1ttztb7.r-qvutc0.r-37j5jr.r-a023e6.r-rjixqe.r-16dba41.r-18u37iz.r-1wvb978")?.querySelector("span")
    
    if (
      //getXURL("/i/grok", container) ||
      getXURL("/i/premium_sign_up", container) ||
      getXURL("/i/verified-orgs-signup", container)
    ) {
      if (isRemovePremium) {
        (container as HTMLAnchorElement).style.display = "none";
      }
    }

    if (
      getXURL(`/${accountName?.textContent?.replace("@", "")}/communities`, container)
    ) {
      if (isRemoveCommunity) {
        (container as HTMLAnchorElement).style.display = "none";
      }
    }

    if (
      getXURL("/i/communitynotes", container)
    ) {
      if (isRemoveCommunityNotes) {
        (container as HTMLAnchorElement).style.display = "none";
      }
    }
  };

  function getXURL(path: string, elementBase: Element) {
    const element = elementBase as HTMLAnchorElement;
    if (
      element.href == `https://x.com${path}` ||
      element.href == `https://twitter.com${path}`
    ) {
      return true;
    } else {
      return false;
    }
  }

  // Get the settings from the chrome storage
  chrome.storage.sync
    .get([
      "enabled",
      "tcoBypasser",
      "whitemode",
      "optimizeMore",
      "sidebar_removePremium",
      "sidebar_removeCommunity",
      "sidebar_removeCommunityNotes",
      "removePremiumBanner",
      "removeGetVerified",
      "featureFlags",
    ])
    .then((result: any) => {
      // If the featureFlags setting is null, set the default settings and reload the page
      if (result.featureFlags == null) {
        resetSettings();

        window.location.reload();
      }

      // if (window.location.hostname == "x.com") {
      //   let newLocation = window.location.href;
      //   newLocation = newLocation.replace("x.com", "twitter.com");
      //   newLocation += "?mx=1";
      //   window.location.href = newLocation;
      // }

      // If the extension is enabled, run the corresponding functions based on the settings
      if (result.enabled) {
        isRemovePremium = result.sidebar_removePremium
        isRemoveCommunity = result.sidebar_removeCommunity
        isRemoveCommunityNotes = result.sidebar_removeCommunityNotes
        new MutationObserver(optimizeSidebar).observe(document.body, {
          childList: true,
          subtree: true,
        });

        optimizeSidebar();

        new MutationObserver(postNotification).observe(document.body, {
          childList: true,
          subtree: true,
        });

        postNotification();

        if (result.removePremiumBanner) {
          new MutationObserver(removePremiumBanner).observe(document.body, {
            childList: true,
            subtree: true,
          });
  
          removePremiumBanner();
        }

        if (result.removeGetVerified) {
          new MutationObserver(removeGetVerified).observe(document.body, {
            childList: true,
            subtree: true,
          });
  
          removeGetVerified();
        }

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
      }
    });
})();
