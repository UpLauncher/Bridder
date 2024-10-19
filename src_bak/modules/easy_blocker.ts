
(function () {
  "use strict";

  const dmConversionBlock = () => {
    document
      .querySelectorAll(
        ".css-175oi2r.r-w7s2jr.r-3pj75a.r-13qz1uu.r-z32n2g.r-o7ynqc.r-6416eg.r-1ny4l3l.r-1loqt21"
      )
      .forEach((element) => {
        internalConversionProcessing(element);
      });

    document
      .querySelectorAll(
        ".css-175oi2r.r-kemksi.r-w7s2jr.r-3pj75a.r-13qz1uu.r-o7ynqc.r-6416eg.r-1ny4l3l.r-1loqt21"
      )
      .forEach((element) => {
        internalConversionProcessing(element);
      });
  };

  const followersBlock = () => {
    document
      .querySelectorAll(
        ".css-175oi2r.r-1mmae3n.r-3pj75a.r-1loqt21.r-o7ynqc.r-6416eg.r-1ny4l3l"
      )
      .forEach((element) => {
        internalFollowersProcessing(element);
      });
  };

  function internalFollowersProcessing(elementBase: Element) {
    const element = elementBase as HTMLElement;
    if (!element.dataset.bridderBlockAdded && element.dataset.testid == "UserCell") {
      element.dataset.bridderBlockAdded = "true";
      const followersButtons = element.querySelector(
        ".css-175oi2r.r-18u37iz"
      );
      const moreButton = element.querySelector("button.css-175oi2r.r-1777fci.r-bt1l66.r-bztko3.r-lrvibr.r-1loqt21.r-1ny4l3l") as HTMLButtonElement
      if (followersButtons && moreButton) {
        const blockButton = document.createElement("button");
        blockButton.textContent = "🚫";
        blockButton.style.maxHeight = "30px"
        blockButton.style.marginLeft = "10px";
        //blockButton.classList.add("css-175oi2r", "r-sdzlij", "r-1phboty", "r-rs99b7", "r-lrvibr", "r-15ysp7h", "r-4wgw6l", "r-3pj75a", "r-1loqt21", "r-o7ynqc", "r-6416eg", "r-1ny4l3l")
        followersButtons.appendChild(blockButton);

        blockButton.addEventListener("click", () => {
          moreButton.click()
          setTimeout(() => {
            document.querySelectorAll(".css-175oi2r.r-1loqt21.r-18u37iz.r-1mmae3n.r-3pj75a.r-13qz1uu.r-o7ynqc.r-6416eg.r-1ny4l3l").forEach((menuButtonBase) => {
              const menuButton = menuButtonBase as HTMLElement
              if (menuButton.dataset.testid == "block") {
                menuButton.click()
                setTimeout(() => {
                  const blockConfirmButton = document.querySelector(
                    "button.css-175oi2r.r-sdzlij.r-1phboty.r-rs99b7.r-lrvibr.r-16y2uox.r-6gpygo.r-1udh08x.r-1udbk01.r-3s2u2q.r-peo1c.r-1ps3wis.r-cxgwc0.r-1loqt21.r-o7ynqc.r-6416eg.r-1ny4l3l"
                  );
                  if (blockConfirmButton) {
                    if (
                      (blockConfirmButton as HTMLButtonElement).dataset
                        .testid == "confirmationSheetConfirm"
                    ) {
                      (blockConfirmButton as HTMLButtonElement).click();
                    }
                  }
                }, 300)
              }
            })
          }, 300)
        })
      }
    }
  }

  function internalConversionProcessing(element: Element) {
    if (
      (element as HTMLElement).dataset.testid == "conversation" &&
      !(element as HTMLElement).dataset.bridderBlockAdded
    ) {
      (element as HTMLElement).dataset.bridderBlockAdded = "true";
      const dmConversionAuthor = element.querySelector(
        ".css-175oi2r.r-1d09ksm.r-18u37iz.r-1wbh5a2"
      );
      if (dmConversionAuthor) {
        const blockButton = document.createElement("button");
        blockButton.textContent = "🚫";
        blockButton.style.marginLeft = "5px";
        //blockButton.classList.add("css-175oi2r", "r-sdzlij", "r-1phboty", "r-rs99b7", "r-lrvibr", "r-15ysp7h", "r-4wgw6l", "r-3pj75a", "r-1loqt21", "r-o7ynqc", "r-6416eg", "r-1ny4l3l")
        dmConversionAuthor.appendChild(blockButton);

        blockButton.addEventListener("click", () => {
          (element as HTMLElement).click();
          setTimeout(() => {
            document
              .querySelectorAll(
                "a.css-175oi2r.r-sdzlij.r-1phboty.r-rs99b7.r-lrvibr.r-2yi16.r-1qi8awa.r-o7ynqc.r-6416eg.r-1ny4l3l.r-1loqt21"
              )
              .forEach((infobutton) => {
                if ((infobutton as HTMLAnchorElement).href.endsWith("/info")) {
                  (infobutton as HTMLAnchorElement).click();
                  setTimeout(() => {
                    const block = document.querySelector(
                      "button.css-175oi2r.r-1777fci.r-1pl7oy7.r-w7s2jr.r-3pj75a.r-1loqt21.r-o7ynqc.r-6416eg.r-1ny4l3l"
                    );
                    if (block) {
                      (block as HTMLButtonElement).click();
                      setTimeout(() => {
                        const blockConfirmButton = document.querySelector(
                          "button.css-175oi2r.r-sdzlij.r-1phboty.r-rs99b7.r-lrvibr.r-16y2uox.r-6gpygo.r-1udh08x.r-1udbk01.r-3s2u2q.r-peo1c.r-1ps3wis.r-cxgwc0.r-1loqt21.r-o7ynqc.r-6416eg.r-1ny4l3l"
                        );
                        if (blockConfirmButton) {
                          if (
                            (blockConfirmButton as HTMLButtonElement).dataset
                              .testid == "confirmationSheetConfirm"
                          ) {
                            (blockConfirmButton as HTMLButtonElement).click();
                          }
                        }
                      }, 300);
                    }
                  }, 300);
                }
              });
          }, 300);
        });
      }
    }
  }

  chrome.storage.sync.get(["enabled"]).then((result) => {
    if (result.enabled) {
      new MutationObserver(dmConversionBlock).observe(document.body, {
        childList: true,
        subtree: true,
      });

      dmConversionBlock();

      new MutationObserver(followersBlock).observe(document.body, {
        childList: true,
        subtree: true,
      });

      followersBlock();
    }
  });
})();
