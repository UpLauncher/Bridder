(function () {
  "use strict";

  function VerifiedBadgeWorker(parse_data: any) {
    function isKeyExists(obj: any) {
      if (obj == undefined) {
        return false;
      } else {
        return true;
      }
    }

    try {
      const element = document.getElementById("FSBL_base");
      if (element !== null) {
        element.remove();
      }
    } catch (e) {}

    if (
      isKeyExists(
        parse_data["data"]["user"]["result"]["verification_info"]["reason"]
      )
    ) {
      if (
        parse_data["data"]["user"]["result"]["verification_info"]["reason"][
          "description"
        ]["text"] ==
        "このアカウントは、Xが公式に認証している組織アカウントです。詳細はこちら"
      ) {
        alert(
          "このユーザーは認証済み組織の金チェックマークで認証されています。"
        );
        return;
      }

      if (parse_data["data"]["user"]["result"]["is_blue_verified"] == false) {
        alert(
          "このユーザーは認証されていて、チェックマークが非表示になっています。"
        );
      } else {
        alert(
          "このユーザーは認証されていますが、チェックマークが表示されています。"
        );
      }
    } else {
      alert("このユーザーは認証されていません。");
    }
  }

  //Verified Badge Checker
  function GetVerified(username: string) {
    const urlbase =
      "https://twitter.com/i/api/graphql/k5XapwcSikNsEsILW5FvgA/UserByScreenName";
    var query = encodeURI(
      `?variables={"screen_name":"${username}","withSafetyModeUserFields":true}&features={"hidden_profile_likes_enabled":true,"hidden_profile_subscriptions_enabled":true,"responsive_web_graphql_exclude_directive_enabled":true,"verified_phone_label_enabled":false,"subscriptions_verification_info_is_identity_verified_enabled":true,"subscriptions_verification_info_verified_since_enabled":true,"highlights_tweets_tab_ui_enabled":true,"responsive_web_twitter_article_notes_tab_enabled":true,"creator_subscriptions_tweet_preview_api_enabled":true,"responsive_web_graphql_skip_user_profile_image_extensions_enabled":false,"responsive_web_graphql_timeline_navigation_enabled":true}&fieldToggles={"withAuxiliaryUserLabels":false}`
    );
    var url = urlbase + query;
    var request = new XMLHttpRequest();
    request.open("GET", url);
    request.setRequestHeader(
      "authorization",
      "Bearer AAAAAAAAAAAAAAAAAAAAANRILgAAAAAAnNwIzUejRCOuH5E6I8xnZz4puTs=1Zv7ttfk8LF81IUq16cHjhLTvJu4FA33AGWWjCpTnA"
    );
    request.setRequestHeader("x-csrf-token", cookie.getByName("ct0"));
    var gt = cookie.getByName("gt");
    if (gt.length) {
      request.setRequestHeader("x-guest-token", gt);
    } else {
      request.withCredentials = true;
    }
    request.onreadystatechange = function () {
      if (request.readyState != 4) {
        console.warn(
          "[BRIDDER : ERROR] IGNOREABLE | Request not ready: " +
            request.readyState
        );
      } else if (request.status != 200) {
        console.error(
          "[BRIDDER : ERROR] Request status not 200: " + request.status
        );
      } else {
        console.info("[BRIDDER : INFO] Request status " + request.status);
        var result = request.responseText;
        let parse_data = JSON.parse(result);

        VerifiedBadgeWorker(parse_data);
      }
    };
    request.send(null);
  }

  var cookie = {
    getObj: function () {
      var cookie = document.cookie;
      var cookieObj: { [key: string]: any } = {};
      if (!!cookie) {
        Array.prototype.forEach.call(cookie.split(";"), function (c) {
          var array = [c][0].split("=").map(function (a: string) {
            return a.trim();
          });
          var key = ~c.indexOf("=") ? unescape(array[0]) : "";
          var val = ~c.indexOf("=") ? unescape(array[1]) : unescape(array[0]);
          if (!cookieObj.hasOwnProperty(key)) {
            cookieObj[key] = [val];
          } else {
            cookieObj[key].push(val);
          }
        });
      }
      return cookieObj;
    },
    getByName: function (name: string) {
      var ret = [];
      var cookieObj = this.getObj();
      if (cookieObj.hasOwnProperty(name)) {
        ret = cookieObj[name];
      }
      return ret;
    },
  };

  const showCheckmark = () => {
    if (
      document.getElementsByClassName(
        "css-175oi2r r-1loqt21 r-18u37iz r-ymttw5 r-1f1sjgu r-13qz1uu r-o7ynqc r-6416eg r-1ny4l3l"
      ).length
    ) {
      document
        .querySelectorAll(
          ".css-175oi2r.r-1loqt21.r-18u37iz.r-ymttw5.r-1f1sjgu.r-13qz1uu.r-o7ynqc.r-6416eg.r-1ny4l3l"
        )
        .forEach((el) => {
          if (
            el.getAttribute("data-testid") == "block" &&
            !el.hasAttribute("label_applied")
          ) {
            el.setAttribute("label_applied", "true");
            var clone = el.cloneNode(true) as HTMLElement;
            clone.querySelector("span")!.textContent = clone
              .querySelector("span")!
              .textContent!.replace("さんをブロック", "さんを確認");
            clone.querySelector("span")!.textContent = clone
              .querySelector("span")!
              .textContent!.replace("さんのブロックを解除", "さんを確認");
            clone
              .querySelector("path")!
              .setAttribute(
                "d",
                "M8.52 3.59c.8-1.1 2.04-1.84 3.48-1.84s2.68.74 3.49 1.84c1.34-.21 2.74.14 3.76 1.16s1.37 2.42 1.16 3.77c1.1.8 1.84 2.04 1.84 3.48s-.74 2.68-1.84 3.48c.21 1.34-.14 2.75-1.16 3.77s-2.42 1.37-3.76 1.16c-.8 1.1-2.05 1.84-3.49 1.84s-2.68-.74-3.48-1.84c-1.34.21-2.75-.14-3.77-1.16-1.01-1.02-1.37-2.42-1.16-3.77-1.09-.8-1.84-2.04-1.84-3.48s.75-2.68 1.84-3.48c-.21-1.35.14-2.75 1.16-3.77s2.43-1.37 3.77-1.16Zm3.48.16c-.85 0-1.66.53-2.12 1.43l-.38.77-.82-.27c-.96-.32-1.91-.12-2.51.49-.6.6-.8 1.54-.49 2.51l.27.81-.77.39c-.9.46-1.43 1.27-1.43 2.12s.53 1.66 1.43 2.12l.77.39-.27.81c-.31.97-.11 1.91.49 2.51.6.61 1.55.81 2.51.49l.82-.27.38.77c.46.9 1.27 1.43 2.12 1.43s1.66-.53 2.12-1.43l.39-.77.82.27c.96.32 1.9.12 2.51-.49.6-.6.8-1.55.48-2.51l-.26-.81.76-.39c.91-.46 1.43-1.27 1.43-2.12s-.52-1.66-1.43-2.12l-.77-.39.27-.81c.32-.97.12-1.91-.48-2.51-.61-.61-1.55-.81-2.51-.49l-.82.27-.39-.77c-.46-.9-1.27-1.43-2.12-1.43Zm4.74 5.68-6.2 6.77-3.74-3.74 1.41-1.42 2.26 2.26 4.8-5.23 1.47 1.36Z"
              );
            if (el.parentElement) {
              el.parentElement.insertBefore(clone, el);
              document.querySelector("div[label_applied=true]")?.remove();
              el.parentElement.insertBefore(clone, el.nextSibling);
            }
            clone.removeEventListener("click", function () {});
            clone.addEventListener("click", function () {
              const spanElement = clone.querySelector("span");
              if (spanElement) {
                const textContent = spanElement.textContent;
                if (textContent) {
                  const modifiedText = textContent
                    .replace("さんを確認", "")
                    .replace("@", "");
                  GetVerified(modifiedText);
                }
              }
            });
            clone.addEventListener("mouseenter", function () {
              clone.classList.add("r-1cuuowz");
            });
            clone.addEventListener("mouseleave", function () {
              clone.classList.remove("r-1cuuowz");
            });
          }
        });
    }
  };

  chrome.storage.sync.get(["enabled", "forceView"]).then((result) => {
    if (result.enabled && result.forceView) {
      new MutationObserver(showCheckmark).observe(document.body, {
        childList: true,
        subtree: true,
      });

      showCheckmark();
    }
  });
})();
