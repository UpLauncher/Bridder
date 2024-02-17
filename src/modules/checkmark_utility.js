if (typeof browser === "undefined") {
  var browser = chrome;
}

(function () {
  "use strict";

  var wc_org = false;

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
    }, 300);
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
    }, 300);
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

  browser.storage.sync.get(["enabled", "verifiedBlue", "blue_delete", "wc_org", "white_checkmark"]).then((result) => {
    if (result.enabled) {
      if (result.verifiedBlue) {
        verifiedBlue();
      }
      if (result.blue_delete) {
        blueDelete();
      }
      wc_org = result.wc_org;
      if (result.white_checkmark) whiteCheckMark();
    }
  });
})();
