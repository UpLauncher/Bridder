(function () {
  "use strict";

  const fixText = () => {
    document.querySelectorAll(".css-4rbku5.css-18t94o4.css-1dbjc4n.r-1habvwh.r-1loqt21.r-6koalj.r-eqz5dr.r-16y2uox.r-1ny4l3l.r-oyd9sg.r-13qz1uu").forEach((container: Element) => {
      // Change the type of container to Element
      if (container.getAttribute("aria-label") == "プレミアム") {
        (container as HTMLElement).style.display = "none";
      }
    });

    document.querySelectorAll(".css-1rynq56.r-dnmrzs.r-1udh08x.r-3s2u2q.r-bcqeeo.r-qvutc0.r-1tl8opc.r-n6v787.r-1cwl3u0.r-16dba41").forEach((container) => {
      if (container.textContent && container.textContent.includes(" 件のポスト")) {
        container.textContent = container.textContent.replaceAll(" 件のポスト", " 件のツイート");
      }
    });

    document.querySelectorAll(".css-1qaijid.r-bcqeeo.r-qvutc0.r-1tl8opc").forEach((container) => {
      if (container && container.textContent && container.textContent.includes(" X Corp.")) {
        container.textContent = container.textContent.replaceAll(" X Corp.", ` Twitter Inc.\nBridder v2.1.6 (Grasshopper)`);
      }
    });

    document.querySelectorAll(".public-DraftEditorPlaceholder-inner").forEach((container) => {
      if (container.textContent) {
        container.textContent = container.textContent.replaceAll("ポスト", "ツイート");
      }
    });

    document.querySelectorAll(".css-175oi2r.r-6koalj.r-ymttw5.r-1f1sjgu.r-o7ynqc.r-6416eg.r-1ny4l3l.r-1loqt21").forEach((container) => {
      if (container.getAttribute("data-testid") == "trend") {
        container.querySelectorAll("span").forEach((elements) => {
          if (elements.textContent && elements.textContent.includes("posts")) {
            elements.textContent = elements.textContent.replace("posts", "件のツイート");
          }
        });
      }
    });

    try {
      document.querySelectorAll("span.css-1qaijid.r-bcqeeo.r-qvutc0.r-1tl8opc").forEach((element) => {
        if (element.textContent == "プレミアム" || element.textContent == "プレミアム+にアップグレード" || element.textContent == "プレミアムプラスにアップグレード" || element.textContent == "Xプレミアムプラスにアップグレード" || element.textContent == "プレミアムプラス" || element.textContent == "Xプレミアムプラスにアップグレード" || element.textContent == "Xプレミアムプラス") {
          element.textContent = element.textContent.replace("X", "");
          element.textContent = element.textContent.replace("プレミアム", "Twitter Blue");
          element.textContent = element.textContent.replace("プラス", "+");
          if (element.parentNode && element.parentNode.parentNode) {
            if (element.closest("a.css-175oi2r.r-6koalj.r-eqz5dr.r-16y2uox.r-1habvwh.r-oyd9sg.r-13qz1uu.r-1ny4l3l.r-1loqt21")?.getAttribute("aria-label") == "プレミアム") {
              element.parentNode.parentNode.querySelectorAll("path").forEach((container) => {
                container.setAttribute("d", "M15.704 8.99c.457-.05.891-.17 1.296-.35-.302.45-.685.84-1.125 1.15.004.1.006.19.006.29 0 2.94-2.269 6.32-6.421 6.32-1.274 0-2.46-.37-3.459-1 .177.02.357.03.539.03 1.057 0 2.03-.35 2.803-.95-.988-.02-1.821-.66-2.109-1.54.138.03.28.04.425.04.206 0 .405-.03.595-.08-1.033-.2-1.811-1.1-1.811-2.18v-.03c.305.17.652.27 1.023.28-.606-.4-1.004-1.08-1.004-1.85 0-.4.111-.78.305-1.11 1.113 1.34 2.775 2.22 4.652 2.32-.038-.17-.058-.33-.058-.51 0-1.23 1.01-2.22 2.256-2.22.649 0 1.235.27 1.647.7.514-.1.997-.28 1.433-.54-.168.52-.526.96-.992 1.23ZM2 21h15c3.038 0 5.5-2.46 5.5-5.5 0-1.4-.524-2.68-1.385-3.65-.08-.09-.089-.22-.023-.32.574-.87.908-1.91.908-3.03C22 5.46 19.538 3 16.5 3H2v18ZM16.5 5C18.433 5 20 6.57 20 8.5c0 1.01-.43 1.93-1.12 2.57-.468.43-.414 1.19.111 1.55.914.63 1.509 1.69 1.509 2.88 0 1.93-1.567 3.5-3.5 3.5H4V5h12.5Z");
              });
            }

            if (element.closest("a.css-175oi2r.r-6koalj.r-eqz5dr.r-16y2uox.r-1habvwh.r-13qz1uu.r-rjfia.r-1ny4l3l.r-1loqt21")?.getAttribute("aria-label") == "プレミアム") {
              element.parentNode.parentNode.querySelectorAll("path").forEach((container) => {
                container.setAttribute("d", "M15.704 8.99c.457-.05.891-.17 1.296-.35-.302.45-.685.84-1.125 1.15.004.1.006.19.006.29 0 2.94-2.269 6.32-6.421 6.32-1.274 0-2.46-.37-3.459-1 .177.02.357.03.539.03 1.057 0 2.03-.35 2.803-.95-.988-.02-1.821-.66-2.109-1.54.138.03.28.04.425.04.206 0 .405-.03.595-.08-1.033-.2-1.811-1.1-1.811-2.18v-.03c.305.17.652.27 1.023.28-.606-.4-1.004-1.08-1.004-1.85 0-.4.111-.78.305-1.11 1.113 1.34 2.775 2.22 4.652 2.32-.038-.17-.058-.33-.058-.51 0-1.23 1.01-2.22 2.256-2.22.649 0 1.235.27 1.647.7.514-.1.997-.28 1.433-.54-.168.52-.526.96-.992 1.23ZM2 21h15c3.038 0 5.5-2.46 5.5-5.5 0-1.4-.524-2.68-1.385-3.65-.08-.09-.089-.22-.023-.32.574-.87.908-1.91.908-3.03C22 5.46 19.538 3 16.5 3H2v18ZM16.5 5C18.433 5 20 6.57 20 8.5c0 1.01-.43 1.93-1.12 2.57-.468.43-.414 1.19.111 1.55.914.63 1.509 1.69 1.509 2.88 0 1.93-1.567 3.5-3.5 3.5H4V5h12.5Z");
              });
            }
          }
        }
      });
    } catch (e) {}

    document.querySelectorAll("span.css-1qaijid.r-bcqeeo.r-qvutc0.r-1tl8opc").forEach((container) => {
      try {
        if (container.closest(".css-1dbjc4n.r-6gpygo.r-14gqq1x")?.getAttribute("data-testid") == "UserName") return;
      } catch {}

      try {
        const closestContainer = container.closest(".css-1rynq56.r-dnmrzs.r-1udh08x.r-3s2u2q.r-bcqeeo.r-qvutc0.r-1tl8opc.r-adyw6z.r-135wba7.r-b88u0q.r-1vvnge1");
        if (closestContainer && closestContainer.getAttribute("role") == "heading") {
          return;
        }
      } catch {}

      try {
        if (container.closest(".css-175oi2r.r-150rngu.r-yfoy6g.r-zchlnj.r-1rnoaur.r-1r851ge.r-u8s1d.r-1d2f490.r-ipm5af.r-1xfd6ze.r-xnswec.r-8fhv3p.r-h3f8nf")?.getAttribute("role") == "typeaheadDropdown-3") return;
      } catch {}

      try {
        const closestContainer = container.closest(".css-175oi2r.r-ymttw5.r-1f1sjgu.r-1loqt21.r-1ny4l3l");
        if ((closestContainer && closestContainer.getAttribute("data-testid") == "UserCell") || (closestContainer && closestContainer.getAttribute("data-testid") == "TypeaheadUser")) {
          return;
        }
      } catch {}

      try {
        const closestContainer = container.closest(".css-1rynq56.r-8akbws.r-krxsd3.r-dnmrzs");
        if (closestContainer && closestContainer.getAttribute("data-testid") == "tweetText") {
          return;
        }
      } catch {}

      try {
        const closestContainer = container.closest(".css-1rynq56.r-8akbws.r-krxsd3.r-dnmrzs");
        if (closestContainer && closestContainer.getAttribute("data-testid") == "tweetText") {
          return;
        }
      } catch {}

      try {
        const closestContainer = container.closest(".css-1rynq56.r-bcqeeo.r-qvutc0.r-37j5jr.r-1inkyih.r-16dba41.r-bnwqim.r-135wba7");
        if (closestContainer && closestContainer.getAttribute("data-testid") == "tweetText") {
          return;
        }
      } catch {}

      try {
        const closestContainer = container.closest(".css-175oi2r[aria-label=Grok]");
        if (closestContainer && closestContainer.getAttribute("aria-label") == "Grok") {
          return;
        }
      } catch {}

      try {
        const closestContainer = container.closest(".css-1qaijid.r-8akbws.r-krxsd3.r-dnmrzs.r-1udh08x.r-bcqeeo.r-qvutc0.r-1tl8opc.r-n6v787.r-1cwl3u0.r-b88u0q");
        if (closestContainer && closestContainer.getAttribute("data-testid") == "socialContext") {
        }
      } catch {
        try {
          if (container.closest("article")) return;
        } catch {}
      }

      try {
        const closestContainer = container.closest(".css-175oi2r.r-g6ijar");
        if (closestContainer && closestContainer.getAttribute("data-testid") == "activeRoute") {
          return;
        }
      } catch {}

      if (container.textContent === "X Premium") {
        container.textContent = "Twitter Blue";
      }

      if (container.textContent === "長いポスト") {
        container.textContent = "長いツイート";
      }

      if (container.textContent === "ポストの編集、ブックマークフォルダ、その他の新機能など、すでに提供されているすべてのPremiumの機能を利用できます") {
        container.textContent = "ツイートの編集、ブックマークフォルダ、その他の新機能など、すでに提供されているすべてのBlueの機能を利用できます";
      }

      if (container.textContent === "電話番号が認証済みのプレミアムユーザーには、承認後、青いチェックマークが付きます。") {
        container.textContent = "電話番号が認証済みのTwitter Blueユーザーには、承認後、青いチェックマークが付きます。";
      }

      if (container.textContent === "30分以内であれば投稿を5回まで編集できます。") {
        container.textContent = "30分以内であればツイートを5回まで編集できます。";
      }

      if (container.textContent === "長さが最大25,000文字の投稿、返信、引用を作成できます。") {
        container.textContent = "長さが最大25,000文字のツイート、返信、引用を作成できます。";
      }

      if (container.textContent === "さんの新しいポスト通知") {
        container.textContent = "さんの新しいツイート通知";
      }

      if (container.textContent === "さんがあなたのポストをいいねしました") {
        container.textContent = "さんがあなたのツイートをいいねしました";
      }

      if (container.textContent === "さんがあなたのポストをリポストしました") {
        container.textContent = "さんがあなたのツイートをリツイートしました";
      }

      if (container.textContent === "プレミアムにサブスクライブ") {
        container.textContent = "Twitter Blueにサブスクライブ";
      }

      if (container.textContent === "プレミアムまたは認証済み組織にサブスクライブしている") {
        container.textContent = "Twitter Blueまたは認証済み組織にサブスクライブしている";
      }

      if (container.textContent === "ポスト") {
        container.textContent = "ツイート";
      }

      if (container.textContent === "リポスト") {
        container.textContent = "リツイート";
      }

      if (container.textContent === "ポストする") {
        try {
          const spanElement = container.querySelector("span");
          if (spanElement !== null) {
            spanElement.textContent = "ツイートする";
          }
        } catch (e) {}
      }

      if (!container.textContent) return;

      if (container.textContent.includes("件のポスト")) {
        container.textContent = container.textContent.replaceAll(" 件のポスト", " 件のツイート");
      }

      if (container.textContent.includes("ポスト")) {
        if (container.textContent == "ポストする") return;
        container.textContent = container.textContent.replaceAll("ポスト", "ツイート");
      }

      if (container.textContent.includes("長いポスト")) {
        container.textContent = container.textContent.replaceAll("長いポスト", "長いツイート");
      }

      if (container.textContent.includes("Xアカウント")) {
        container.textContent = container.textContent.replaceAll("Xアカウント", "Twitterアカウント");
      }

      if (container.textContent.includes("Xで")) {
        container.textContent = container.textContent.replaceAll("Xで", "Twitterで");
      }

      if (container.textContent.includes("Xの")) {
        container.textContent = container.textContent.replaceAll("Xの", "Twitterの");
      }

      if (container.textContent.includes("Xが")) {
        container.textContent = container.textContent.replaceAll("Xが", "Twitterが");
      }

      if (container.textContent.includes("Xと")) {
        container.textContent = container.textContent.replaceAll("Xと", "Twitterと");
      }

      if (container.textContent.includes("Xに")) {
        container.textContent = container.textContent.replaceAll("Xに", "Twitterに");
      }

      if (container.textContent === "プレミアムに含まれている特典を確認し、設定を管理しましょう") {
        container.textContent = "Blueに含まれている特典を確認し、設定を管理しましょう";
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
  };

  const fixTitle = () => {
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
      document.title = document.title.replace("さん: ", "さんはTwitterを利用しています: ").replace("Xユーザーの", "");
    }
  };

  chrome.storage.sync.get(["enabled", "text_mode"]).then((result: any) => {
    if (result.enabled && result.text_mode) {
      new MutationObserver(fixText).observe(document.body, {
        childList: true,
        subtree: true,
      });

      new MutationObserver(fixTitle).observe(document.querySelector("title") || document.body, {
        childList: true,
        subtree: true,
      });

      fixText();
      fixTitle();
    }
  });
})();
