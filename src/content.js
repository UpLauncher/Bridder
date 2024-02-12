if (typeof browser === "undefined") {
  var browser = chrome;
}

(function () {
  "use strict";

  var wc_org = false;

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
    }, 1);
  };

  const whiteCheckMark = () => {
    setInterval(() => {
      if (
        document.querySelector("body").style.backgroundColor !=
        "rgb(255, 255, 255)"
      ) {
        document.querySelectorAll("svg.r-yyyyoo").forEach((container) => {
          if (
            container.getAttribute("aria-label") == "認証済みアカウント" ||
            container.getAttribute("data-testid") == "verificationBadge"
          ) {
            container.style.color = "white";
          }

          if (wc_org) {
            if (
              container.getAttribute("aria-label") == "認証済みアカウント" ||
              container.getAttribute("data-testid") == "verificationBadge"
            ) {
              container.querySelectorAll("g").forEach(async (element) => {
                if (
                  element.querySelector("path").getAttribute("d") ==
                  "M12.05 2.056c-.568-.608-1.532-.608-2.1 0l-1.393 1.49c-.284.303-.685.47-1.1.455L5.42 3.932c-.832-.028-1.514.654-1.486 1.486l.069 2.039c.014.415-.152.816-.456 1.1l-1.49 1.392c-.608.568-.608 1.533 0 2.101l1.49 1.393c.304.284.47.684.456 1.1l-.07 2.038c-.027.832.655 1.514 1.487 1.486l2.038-.069c.415-.014.816.152 1.1.455l1.392 1.49c.569.609 1.533.609 2.102 0l1.393-1.49c.283-.303.684-.47 1.099-.455l2.038.069c.832.028 1.515-.654 1.486-1.486L18 14.542c-.015-.415.152-.815.455-1.099l1.49-1.393c.608-.568.608-1.533 0-2.101l-1.49-1.393c-.303-.283-.47-.684-.455-1.1l.068-2.038c.029-.832-.654-1.514-1.486-1.486l-2.038.07c-.415.013-.816-.153-1.1-.456zm-5.817 9.367l3.429 3.428 5.683-6.206-1.347-1.247-4.4 4.795-2.072-2.072z"
                ) {
                  element
                    .querySelector("path")
                    .setAttribute(
                      "d",
                      "M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z"
                    );
                  element.querySelector("path").setAttribute("fill", "white");
                }
              });
            }

            if (
              container.getAttribute("aria-label") == "認証済みアカウント" ||
              container.getAttribute("data-testid") == "verificationBadge"
            ) {
              container.querySelectorAll("g").forEach(async (element) => {
                if (element.querySelector("linearGradient") != null) {
                  while (element.firstChild) {
                    element.removeChild(element.firstChild);
                  }

                  const whiteBadgePath = document.createElementNS(
                    "http://www.w3.org/2000/svg",
                    "path"
                  );
                  whiteBadgePath.setAttribute("fill", "white");
                  whiteBadgePath.setAttribute(
                    "d",
                    "M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z"
                  );
                  await element.append(whiteBadgePath);
                }
              });
            }
          }
        });
      }
    }, 1);
  };

  const verifiedBlue = () => {
    setInterval(() => {
      document.querySelectorAll("svg.r-yyyyoo").forEach((container) => {
        if (
          container.getAttribute("aria-label") == "認証済みアカウント" ||
          container.getAttribute("data-testid") == "verificationBadge"
        ) {
          container
            .querySelector("path")
            .setAttribute(
              "d",
              "M16.5 3H2v18h15c3.038 0 5.5-2.46 5.5-5.5 0-1.4-.524-2.68-1.385-3.65-.08-.09-.089-.22-.023-.32.574-.87.908-1.91.908-3.03C22 5.46 19.538 3 16.5 3Zm-.796 5.99c.457-.05.892-.17 1.296-.35-.302.45-.684.84-1.125 1.15.004.1.006.19.006.29 0 2.94-2.269 6.32-6.421 6.32-1.274 0-2.46-.37-3.459-1 .177.02.357.03.539.03 1.057 0 2.03-.35 2.803-.95-.988-.02-1.821-.66-2.109-1.54.138.03.28.04.425.04.206 0 .405-.03.595-.08-1.033-.2-1.811-1.1-1.811-2.18v-.03c.305.17.652.27 1.023.28-.606-.4-1.004-1.08-1.004-1.85 0-.4.111-.78.305-1.11 1.113 1.34 2.775 2.22 4.652 2.32-.038-.17-.058-.33-.058-.51 0-1.23 1.01-2.22 2.256-2.22.649 0 1.235.27 1.647.7.514-.1.997-.28 1.433-.54-.168.52-.526.96-.992 1.23Z"
            );
        }
      });
    }, 1);
  };

  const fixTitle = () => {
    setInterval(function () {
      if (document.title == "X") {
        document.title = "Twitter";
      }

      if (document.title.includes("/ X")) {
        document.title = document.title.replace("/ X", "/ Twitter");
      }

      if (document.title.includes("ポスト / ")) {
        document.title = document.title.replace("ポスト / ", "ツイート / ");
      }

      if (document.title.includes("Xユーザーの")) {
        var replaceUser = document.title.replace(
          "さん: ",
          "さんはTwitterを利用しています: "
        );
        var replaceX = replaceUser.replace("Xユーザーの", "");
        document.title = replaceX;
      }
    }, 1);
  };

  const optimizeSidebar = () => {
    setInterval(function () {
      document
        .querySelectorAll("a.css-175oi2r.r-6koalj")
        .forEach((container) => {
          if (
            container.getAttribute("href") == "/i/verified-orgs-signup" ||
            container.getAttribute("href") == "/i/premium_tier_switch"
          ) {
            container.remove();
          }
        });
    });
  };

  const fixText = () => {
    setInterval(function () {
      document
        .querySelectorAll(
          ".css-4rbku5.css-18t94o4.css-1dbjc4n.r-1habvwh.r-1loqt21.r-6koalj.r-eqz5dr.r-16y2uox.r-1ny4l3l.r-oyd9sg.r-13qz1uu"
        )
        .forEach((container) => {
          if (container.getAttribute("aria-label") == "プレミアム") {
            container.remove();
          }
        });

      try {
        document
          .querySelectorAll("span.css-1qaijid.r-bcqeeo.r-qvutc0.r-1tl8opc")
          .forEach((element) => {
            if (
              element.textContent == "プレミアム" ||
              element.textContent == "プレミアム+にアップグレード" ||
              element.textContent == "プレミアムプラス"
            ) {
              element.textContent = element.textContent.replace(
                "プレミアム",
                "Twitter Blue"
              );
              element.textContent = element.textContent.replace("プラス", "+");
              element.parentNode.parentNode
                .querySelectorAll("path")
                .forEach((container) => {
                  container.setAttribute(
                    "d",
                    "M16.5 3H2v18h15c3.038 0 5.5-2.46 5.5-5.5 0-1.4-.524-2.68-1.385-3.65-.08-.09-.089-.22-.023-.32.574-.87.908-1.91.908-3.03C22 5.46 19.538 3 16.5 3Zm-.796 5.99c.457-.05.892-.17 1.296-.35-.302.45-.684.84-1.125 1.15.004.1.006.19.006.29 0 2.94-2.269 6.32-6.421 6.32-1.274 0-2.46-.37-3.459-1 .177.02.357.03.539.03 1.057 0 2.03-.35 2.803-.95-.988-.02-1.821-.66-2.109-1.54.138.03.28.04.425.04.206 0 .405-.03.595-.08-1.033-.2-1.811-1.1-1.811-2.18v-.03c.305.17.652.27 1.023.28-.606-.4-1.004-1.08-1.004-1.85 0-.4.111-.78.305-1.11 1.113 1.34 2.775 2.22 4.652 2.32-.038-.17-.058-.33-.058-.51 0-1.23 1.01-2.22 2.256-2.22.649 0 1.235.27 1.647.7.514-.1.997-.28 1.433-.54-.168.52-.526.96-.992 1.23Z"
                  );
                });
            }
          });
      } catch (e) {}

      document
        .querySelectorAll(
          ".css-1rynq56.r-dnmrzs.r-1udh08x.r-3s2u2q.r-bcqeeo.r-qvutc0.r-1tl8opc.r-n6v787.r-1cwl3u0.r-16dba41"
        )
        .forEach((container) => {
          if (container.textContent.includes(" 件のポスト")) {
            container.textContent = container.textContent.replace(
              " 件のポスト",
              " 件のツイート"
            );
          }
        });

      document
        .querySelectorAll(".css-1qaijid.r-bcqeeo.r-qvutc0.r-1tl8opc")
        .forEach((container) => {
          if (container.textContent.includes(" X Corp.")) {
            container.textContent = container.textContent.replace(
              " X Corp.",
              " Twitter Inc.\nBridder v2.1.3 (Beetle)"
            );
          }
        });

      document
        .querySelectorAll(".public-DraftEditorPlaceholder-inner")
        .forEach((container) => {
          container.textContent = container.textContent.replace(
            "ポスト",
            "ツイート"
          );
        });

      document
        .querySelectorAll(
          ".css-175oi2r.r-6koalj.r-ymttw5.r-1f1sjgu.r-o7ynqc.r-6416eg.r-1ny4l3l.r-1loqt21"
        )
        .forEach((container) => {
          if (container.getAttribute("data-testid") == "trend") {
            container.querySelectorAll("span").forEach((elements) => {
              if (elements.textContent.includes("posts")) {
                elements.textContent = elements.textContent.replace(
                  "posts",
                  "件のツイート"
                );
              }
            });
          }
        });

      document
        .querySelectorAll("span.css-1qaijid.r-bcqeeo.r-qvutc0.r-1tl8opc")
        .forEach((container) => {
          try {
            if (
              container
                .closest(".css-1dbjc4n.r-6gpygo.r-14gqq1x")
                .getAttribute("data-testid") == "UserName"
            )
              return;
          } catch {}

          try {
            if (
              container
                .closest(
                  ".css-1rynq56.r-dnmrzs.r-1udh08x.r-3s2u2q.r-bcqeeo.r-qvutc0.r-1tl8opc.r-adyw6z.r-135wba7.r-b88u0q.r-1vvnge1"
                )
                .getAttribute("role") == "heading"
            )
              return;
          } catch {}

          try {
            if (
              container
                .closest(
                  ".css-175oi2r.r-150rngu.r-yfoy6g.r-zchlnj.r-1rnoaur.r-1r851ge.r-u8s1d.r-1d2f490.r-ipm5af.r-1xfd6ze.r-xnswec.r-8fhv3p.r-h3f8nf"
                )
                .getAttribute("role") == "typeaheadDropdown-3"
            )
              return;
          } catch {}

          try {
            if (
              container
                .closest(".css-175oi2r.r-ymttw5.r-1f1sjgu.r-1loqt21.r-1ny4l3l")
                .getAttribute("data-testid") == "UserCell" ||
              container
                .closest(".css-175oi2r.r-ymttw5.r-1f1sjgu.r-1loqt21.r-1ny4l3l")
                .getAttribute("data-testid") == "TypeaheadUser"
            )
              return;
          } catch {}

          try {
            if (
              container
                .closest(".css-1rynq56.r-8akbws.r-krxsd3.r-dnmrzs")
                .getAttribute("data-testid") == "tweetText"
            )
              return;
          } catch {}

          try {
            if (
              container
                .closest(".css-1rynq56.r-8akbws.r-krxsd3.r-dnmrzs")
                .getAttribute("data-testid") == "tweetText"
            )
              return;
          } catch {}

          try {
            if (
              container
                .closest(
                  ".css-1qaijid.r-8akbws.r-krxsd3.r-dnmrzs.r-1udh08x.r-bcqeeo.r-qvutc0.r-1tl8opc.r-n6v787.r-1cwl3u0.r-b88u0q"
                )
                .getAttribute("data-testid") == "socialContext"
            ) {
            }
          } catch {
            try {
              if (container.closest("article")) return;
            } catch {}
          }

          try {
            if (
              container
                .closest(".css-175oi2r.r-g6ijar")
                .getAttribute("data-testid") == "activeRoute"
            )
              return;
          } catch {}

          if (
            (container.textContent === "Premium" ||
              container.textContent === "プレミアム") &&
            window.location.href !== "https://twitter.com/premium"
          ) {
            container.textContent = "Twitter Blue";
          }

          if (container.textContent === "X Premium") {
            container.textContent = "Twitter Blue";
          }

          if (container.textContent === "長いポスト") {
            container.textContent = "長いツイート";
          }

          if (
            container.textContent ===
            "ポストの編集、ブックマークフォルダ、その他の新機能など、すでに提供されているすべてのPremiumの機能を利用できます"
          ) {
            container.textContent =
              "ツイートの編集、ブックマークフォルダ、その他の新機能など、すでに提供されているすべてのBlueの機能を利用できます";
          }

          if (
            container.textContent ===
            "電話番号が認証済みのプレミアムユーザーには、承認後、青いチェックマークが付きます。"
          ) {
            container.textContent =
              "電話番号が認証済みのTwitter Blueユーザーには、承認後、青いチェックマークが付きます。";
          }

          if (
            container.textContent ===
            "30分以内であれば投稿を5回まで編集できます。"
          ) {
            container.textContent =
              "30分以内であればツイートを5回まで編集できます。";
          }

          if (
            container.textContent ===
            "長さが最大25,000文字の投稿、返信、引用を作成できます。"
          ) {
            container.textContent =
              "長さが最大25,000文字のツイート、返信、引用を作成できます。";
          }

          if (container.textContent === "さんの新しいポスト通知") {
            container.textContent = "さんの新しいツイート通知";
          }

          if (
            container.textContent === "さんがあなたのポストをいいねしました"
          ) {
            container.textContent = "さんがあなたのツイートをいいねしました";
          }

          if (
            container.textContent === "さんがあなたのポストをリポストしました"
          ) {
            container.textContent =
              "さんがあなたのツイートをリツイートしました";
          }

          if (container.textContent === "プレミアムにサブスクライブ") {
            container.textContent = "Twitter Blueにサブスクライブ";
          }

          if (
            container.textContent ===
            "プレミアムまたは認証済み組織にサブスクライブしている"
          ) {
            container.textContent =
              "Twitter Blueまたは認証済み組織にサブスクライブしている";
          }

          if (container.textContent === "ポスト") {
            container.textContent = "ツイート";
          }

          if (container.textContent === "リポスト") {
            container.textContent = "リツイート";
          }

          if (container.textContent === "ポストする") {
            container.textContent = "ツイートする";
          }

          if (container.textContent.includes("件のポスト")) {
            container.textContent = container.textContent.replace(
              " 件のポスト",
              " 件のツイート"
            );
          }

          if (container.textContent.includes("ポスト")) {
            container.textContent = container.textContent.replace(
              "ポスト",
              "ツイート"
            );
          }

          if (container.textContent.includes("長いポスト")) {
            container.textContent = container.textContent.replace(
              "長いポスト",
              "長いツイート"
            );
          }

          if (container.textContent.includes("Xアカウント")) {
            container.textContent = container.textContent.replace(
              "Xアカウント",
              "Twitterアカウント"
            );
          }

          if (container.textContent.includes("Xで")) {
            container.textContent = container.textContent.replace(
              "Xで",
              "Twitterで"
            );
          }

          if (container.textContent.includes("Xの")) {
            container.textContent = container.textContent.replace(
              "Xの",
              "Twitterの"
            );
          }

          if (container.textContent.includes("Xが")) {
            container.textContent = container.textContent.replace(
              "Xが",
              "Twitterが"
            );
          }

          if (container.textContent.includes("Xと")) {
            container.textContent = container.textContent.replace(
              "Xと",
              "Twitterと"
            );
          }

          if (container.textContent.includes("Xに")) {
            container.textContent = container.textContent.replace(
              "Xに",
              "Twitterに"
            );
          }

          if (
            container.textContent ===
            "プレミアムに含まれている特典を確認し、設定を管理しましょう"
          ) {
            container.textContent =
              "Blueに含まれている特典を確認し、設定を管理しましょう";
          }

          if (container.textContent === "Xアクティビティ") {
            container.textContent = "Twitterアクティビティ";
          }

          if (container.textContent === "Reposts") {
            container.textContent = "件のリツイート";
          }

          if (container.textContent === "リポストしたユーザー") {
            container.textContent = "リツイートしたユーザー";
          }

          if (container.textContent.includes("さんがポストしました")) {
            container.textContent = "さんがツイートしました";
          }
        });
    }, 1);
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
    }, 1);
  };

  const blueDelete = () => {
    setInterval(() => {
      document.querySelectorAll("div").forEach((container) => {
        if (
          container.getAttribute("aria-label") ==
          "認証済みアカウントについての詳細が表示されます。"
        ) {
          container.parentNode.remove();
        }
      });

      document.querySelectorAll("svg").forEach((container) => {
        if (container.getAttribute("aria-label") == "認証済みアカウント") {
          container.remove();
        }
      });
    });
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
        if (result.text_mode) {
          fixTitle();
          fixText();
        }
        if (result.tcoBypasser) {
          tcoBypasser();
        }
        if (result.whitemode) {
          whiteMode();
        }
        if (result.verifiedBlue) {
          verifiedBlue();
        }
        if (result.blue_delete) {
          blueDelete();
        }
        if (result.optimizeSidebar) {
          optimizeSidebar();
        }
        wc_org = result.wc_org;
        if (result.white_checkmark) whiteCheckMark();
      }
    });
})();
