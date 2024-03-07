(function () {
  "use strict";

  var lastName = "";

  function ShowBadge() {
    var labelFieldBody = document.getElementsByClassName(
      "css-175oi2r r-6gpygo r-14gqq1x"
    );
    var labelField = labelFieldBody[0].getElementsByClassName(
      "css-1qaijid r-bcqeeo r-qvutc0 r-1tl8opc r-1awozwy r-xoduu5"
    );
    if (labelField.length) {
      var base = document.createElement("div");
      base.innerHTML = `<div class="css-175oi2r r-xoduu5"><div aria-label="認証済みアカウントについての詳細が表示されます。" role="button" tabindex="0" class="css-175oi2r r-9cviqr r-6koalj r-1loqt21 r-o7ynqc r-6416eg r-1ny4l3l"><svg viewBox="0 0 22 22" aria-label="認証済みアカウント" role="img" class="r-4qtqp9 r-yyyyoo r-1xvli5t r-bnwqim r-1plcrui r-lrvibr r-1cvl2hr r-f9ja8p r-og9te1" data-testid="icon-verified"><g><path d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z"></path></g></svg></div></div>`;
      base.setAttribute("id", "FSBB_base");
      labelField[0].appendChild(base);
    }
  }

  function VerifiedBadgeWorker(parse_data: any) {
    function isKeyExists(obj: any) {
      if (obj == undefined) {
        return false;
      } else {
        return true;
      }
    }

    try {
      const fsbbBase = document.getElementById("FSBB_base");
      if (fsbbBase !== null) {
        fsbbBase.remove();
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
        console.info(
          "[BRIDDER : INFO] This user verified with golden checkmark (Check not passed)"
        );
        return;
      }

      if (parse_data["data"]["user"]["result"]["is_blue_verified"] == false) {
        console.info(
          "[BRIDDER : INFO] This user is verified and the checkmark is hidden. (Check passed)"
        );
        ShowBadge();
      } else {
        try {
        } catch (e) {
          console.error(
            "[BRIDDER : ERROR] IGNOREABLE | FSBB_base not found: " + e
          );
        }
        console.info(
          "[BRIDDER : INFO] This user is verified, but is set to display a checkmark. (Check not passed)"
        );
      }
    } else {
      try {
      } catch (e) {
        console.error(
          "[BRIDDER : ERROR] IGNOREABLE | FSBB_base not found: " + e
        );
      }
      console.info(
        "[BRIDDER : INFO] This user is not verified. (Check not passed)"
      );
    }
  }

  //Return Tweet Label
  function GetVerifiedBadge(username: string) {
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
    setInterval(function () {
      if (
        document.getElementsByClassName(
          "css-1rynq56 r-bcqeeo r-qvutc0 r-1tl8opc r-adyw6z r-135wba7 r-1vr29t4 r-1awozwy r-6koalj r-1udh08x"
        ).length
      ) {
        var CurrentURL = location.href;
        if (CurrentURL.includes("twitter.com/")) {
          var st_index = CurrentURL.indexOf("r.com/") + 6;
          var status_id_str = CurrentURL.slice(st_index);
          if (lastName == status_id_str) return;
          lastName = status_id_str;
          GetVerifiedBadge(status_id_str);
        }
      }
    }, 300);
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
