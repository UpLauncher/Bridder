(function () {
  "use strict";

  var LastTweetID = "";

  function ShowLabel(Source: HTMLElement) {
    var labelField = document.getElementsByClassName(
      "css-175oi2r r-1d09ksm r-18u37iz r-1wbh5a2 r-1471scf"
    );
    if (labelField.length) {
      if (document.getElementById("RTSL_base") == null) {
        var base = document.createElement("span");
        base.setAttribute("id", "RTSL_base");
        labelField[0].appendChild(base);
        const baseElement = document.getElementById("RTSL_base");
        if (baseElement) {
          Incorporate(baseElement);
        }
      } else {
        let base = document.getElementById("RTSL_base");
        if (base) {
          base.innerHTML = "";
          const baseElement = document.getElementById("RTSL_base");
          if (baseElement) {
            Incorporate(baseElement);
          }
        }
      }
    }

    function Incorporate(base_ele: HTMLElement) {
      let body = document.body;
      let style = window.getComputedStyle(body);
      let colorvalue = style.getPropertyValue("background-color");
      let themeClass;
      switch (colorvalue) {
        case "rgb(255, 255, 255)":
          themeClass = "r-14j79pv";
          break;
        case "rgb(21, 32, 43)":
          themeClass = "r-115tad6";
          break;
        case "rgb(0, 0, 0)":
          themeClass = "r-1bwzh9t";
          break;
        default:
          themeClass = "r-14j79pv";
          break;
      }
      var ele = document.createElement("span");
      ele.setAttribute("aria-hidden", "true");
      ele.style.marginLeft = "1px"
      ele.classList.add(
        "css-901oao",
        "css-16my406",
        "r-1q142lx",
        "r-poiln3",
        "r-bcqeeo",
        "r-s1qlax",
        "r-qvutc0",
        themeClass
      );
      ele.textContent = "·";
      ele.classList.add(
        "css-901oao", "css-16my406", "r-1q142lx", "r-poiln3", "r-bcqeeo", "r-s1qlax", "r-qvutc0"
      );
      base_ele.appendChild(ele);
      var div = document.createElement("div");
      div.style.display = "none";
      div.id = "sourcetmp";
      div.innerHTML = Source.toString();
      document.body.appendChild(div);
      let sourceLabel = "";
      const sourcetmpElement = document.getElementById("sourcetmp");
      if (sourcetmpElement) {
        const anchorElement = sourcetmpElement.getElementsByTagName("a")[0];
        if (anchorElement) {
          sourceLabel = anchorElement.textContent || "";
        }
      }
      document.body.removeChild(div);
      var sourcelabelfield = document.createElement("a");
      sourcelabelfield.href =
        "https://help.twitter.com/using-twitter/how-to-tweet#source-labels";
      sourcelabelfield.setAttribute("rel", "noopener noreferrer nofollow");
      sourcelabelfield.setAttribute("target", "_blank");
      sourcelabelfield.setAttribute("role", "link");
      sourcelabelfield.classList.add(
        "css-4rbku5", "css-18t94o4", "css-901oao", "css-16my406", "r-1loqt21", "r-poiln3", "r-bcqeeo", "r-1jeg54m", "r-qvutc0",
        themeClass
      );
      sourcelabelfield.innerHTML = `<span class="r-1tl8opc css-901oao css-16my406 r-bcqeeo r-qvutc0">${sourceLabel}</span>`;
      base_ele.appendChild(sourcelabelfield);
    }
  }

  //Return Tweet Label
  function GetTweetSource(tweetID: string) {
    function isKeyExists(obj: { [x: string]: undefined }, key: string) {
      if (obj[key] == undefined) {
        return false;
      } else {
        return true;
      }
    }

    const urlbase =
      "https://api.x.com/graphql/NNiD2K-nEYUfXlMwGCocMQ/TweetDetail";
    var query = encodeURI(
      `?variables={"focalTweetId":"${tweetID}","referrer":"home","controller_data":"DAACDAABDAABCgABCEAABEoCAAEKAAKAQAAAAAEBAAoACW6ei3WtrtOeCAALAAAABA8ADAMAAAAQAQACSgQAQAgAAQEAAABAgAoAEDHty/9MMBA1AAAAAA==","with_rux_injections":false,"includePromotedContent":true,"withCommunity":true,"withQuickPromoteEligibilityTweetFields":true,"withBirdwatchNotes":true,"withSuperFollowsUserFields":true,"withDownvotePerspective":false,"withReactionsMetadata":false,"withReactionsPerspective":false,"withSuperFollowsTweetFields":true,"withVoice":true,"withV2Timeline":true}&features={"responsive_web_twitter_blue_verified_badge_is_enabled":true,"responsive_web_graphql_exclude_directive_enabled":false,"verified_phone_label_enabled":false,"responsive_web_graphql_timeline_navigation_enabled":true,"responsive_web_graphql_skip_user_profile_image_extensions_enabled":false,"tweetypie_unmention_optimization_enabled":true,"vibe_api_enabled":true,"responsive_web_edit_tweet_api_enabled":true,"graphql_is_translatable_rweb_tweet_is_translatable_enabled":true,"view_counts_everywhere_api_enabled":true,"longform_notetweets_consumption_enabled":true,"tweet_awards_web_tipping_enabled":false,"freedom_of_speech_not_reach_fetch_enabled":false,"standardized_nudges_misinfo":true,"tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled":false,"interactive_text_enabled":true,"responsive_web_text_conversations_enabled":false,"responsive_web_enhance_cards_enabled":false}`
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
      } else if (request.status != 200) {
      } else {
        var result = request.responseText;
        let parse_data = JSON.parse(result);
        let instructions =
          parse_data["data"]["threaded_conversation_with_injections_v2"][
          "instructions"
          ];
        for (let i = 0; i < instructions.length; i++) {
          if (instructions[i].type == "TimelineAddEntries") {
            for (let j = 0; j < instructions[i].entries.length; j++) {
              if (
                instructions[i].entries[j]["content"]["entryType"] ==
                "TimelineTimelineItem" &&
                instructions[i].entries[j].entryId == `tweet-${tweetID}`
              ) {
                if (
                  isKeyExists(
                    instructions[i].entries[j]["content"]["itemContent"][
                    "tweet_results"
                    ]["result"],
                    "tweet"
                  )
                ) {
                  ShowLabel(
                    instructions[i].entries[j]["content"]["itemContent"][
                    "tweet_results"
                    ]["result"]["tweet"]["source"]
                  );
                } else {
                  ShowLabel(
                    instructions[i].entries[j]["content"]["itemContent"][
                    "tweet_results"
                    ]["result"]["source"]
                  );
                }
                break;
              }
            }
            break;
          }
        }
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

  function isNumber(n: string) {
    const intN = parseInt(n);
    return !isNaN(intN) && isFinite(intN);
  }

  const returnTweetLabel = () => {
    if (
      document.getElementsByClassName(
        "css-175oi2r r-1d09ksm r-1471scf r-18u37iz r-1wbh5a2"
      ).length
    ) {
      var CurrentURL = location.href;
      if (CurrentURL.includes("x.com/")) {
        var question_index = CurrentURL.indexOf("?");
        if (question_index > 0) {
          var st_index = CurrentURL.indexOf("status/") + 7;
          var q_index = CurrentURL.indexOf("?");
          var status_id_str = CurrentURL.substring(st_index, q_index);
          if (isNumber(status_id_str) && !(status_id_str == LastTweetID)) {
            GetTweetSource(status_id_str);
            LastTweetID = status_id_str;
          }
        } else {
          var st_index = CurrentURL.indexOf("status/") + 7;
          var status_id_str = CurrentURL.slice(st_index);
          if (isNumber(status_id_str) && !(status_id_str == LastTweetID)) {
            GetTweetSource(status_id_str);
            LastTweetID = status_id_str;
          }
        }
      }
    } else {
      LastTweetID = "-1";
    }
  };

  chrome.storage.sync.get(["enabled", "tweetSourceLabel"]).then((result: any) => {
    if (result.enabled && result.tweetSourceLabel) {
      new MutationObserver(returnTweetLabel).observe(document.body, {
        childList: true,
        subtree: true,
      });

      returnTweetLabel();
    }
  });
})();
