(function () {
  "use strict";

  const xLogo =
    "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z";
  const oldLogo =
    "M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z";

  const documentLogo =
    "M17.9686 10.1623L26.7065 0H24.6358L17.0488 8.82382L10.9891 0H4L13.1634 13.3432L4 24H6.07069L14.0827 14.6817L20.4822 24H27.4714L17.9686 10.1623ZM15.1326 13.4607L14.2041 12.132L6.81679 1.55961H9.99723L15.9589 10.0919L16.8873 11.4206L24.6368 22.5113H21.4564L15.1326 13.4607Z";

  const fixIcon = () => {
    let link = document.querySelector("link[rel~='icon']") as HTMLLinkElement;
    if (!link) {
      link = document.createElement("link");
      link.rel = "icon";
      document.head.appendChild(link);
    }
    link.href = "https://abs.twimg.com/favicons/twitter.ico";
  };

  const fixLogo = () => {
    document.querySelectorAll("svg").forEach((container) => {
      const path = container.querySelector(`path[d='${xLogo}']`);
      if (
        container.classList[0] == "r-1nao33i" &&
        container.classList[1] == "r-4qtqp9" &&
        container.classList[2] == "r-yyyyoo" &&
        container.classList[3] == "r-lwhw9o"
      ) {
        if (path) {
          (container as SVGElement).style.fill = "none";
          (container as SVGElement).style.stroke = "rgb(0, 0, 0)";
          (container as SVGElement).style.paintOrder = "fill";
          path.setAttribute(
            "d",
            "M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z"
          );
        }
      } else {
        if (path) {
          if (
            document.body.style.backgroundColor == "rgb(21, 32, 43)" ||
            document.body.style.backgroundColor == "rgb(0, 0, 0)"
          ) {
            (container as SVGElement).style.color = "#fff";
          } else {
            (container as SVGElement).style.color = "rgb(29, 155, 240)";
          }
          path.setAttribute("d", oldLogo);
        }
      }
    });

    document.querySelectorAll("svg").forEach((container) => {
      const path = container.querySelector(
        `path[d='M21.591 7.146L12.52 1.157c-.316-.21-.724-.21-1.04 0l-9.071 5.99c-.26.173-.409.456-.409.757v13.183c0 .502.418.913.929.913h6.638c.511 0 .929-.41.929-.913v-7.075h3.008v7.075c0 .502.418.913.929.913h6.639c.51 0 .928-.41.928-.913V7.904c0-.301-.158-.584-.408-.758zM20 20l-4.5.01.011-7.097c0-.502-.418-.913-.928-.913H9.44c-.511 0-.929.41-.929.913L8.5 20H4V8.773l8.011-5.342L20 8.764z']`
      );

      if (path) {
        path.setAttribute(
          "d",
          "M12 9c-2.209 0-4 1.791-4 4s1.791 4 4 4 4-1.791 4-4-1.791-4-4-4zm0 6c-1.105 0-2-.895-2-2s.895-2 2-2 2 .895 2 2-.895 2-2 2zm0-13.304L.622 8.807l1.06 1.696L3 9.679V19.5C3 20.881 4.119 22 5.5 22h13c1.381 0 2.5-1.119 2.5-2.5V9.679l1.318.824 1.06-1.696L12 1.696zM19 19.5c0 .276-.224.5-.5.5h-13c-.276 0-.5-.224-.5-.5V8.429l7-4.375 7 4.375V19.5z"
        );
      }
    });

    document.querySelectorAll("svg").forEach((container) => {
      const path = container.querySelector(
        `path[d='M21.591 7.146L12.52 1.157c-.316-.21-.724-.21-1.04 0l-9.071 5.99c-.26.173-.409.456-.409.757v13.183c0 .502.418.913.929.913h6.638c.511 0 .929-.41.929-.913v-7.075h3.008v7.075c0 .502.418.913.929.913h6.639c.51 0 .928-.41.928-.913V7.904c0-.301-.158-.584-.408-.758zM20 20l-4.5.01.011-7.097c0-.502-.418-.913-.928-.913H9.44c-.511 0-.929.41-.929.913L8.5 20H4V8.773l8.011-5.342L20 8.764z']`
      );

      const pathFilled = container.querySelector(
        `path[d='M21.591 7.146L12.52 1.157c-.316-.21-.724-.21-1.04 0l-9.071 5.99c-.26.173-.409.456-.409.757v13.183c0 .502.418.913.929.913H9.14c.51 0 .929-.41.929-.913v-7.075h3.909v7.075c0 .502.417.913.928.913h6.165c.511 0 .929-.41.929-.913V7.904c0-.301-.158-.584-.408-.758z']`
      );

      try {
        try {
          if (pathFilled != null) {
            pathFilled.setAttribute(
              "d",
              "M12 1.696.622 8.807l1.06 1.696L3 9.679V19.5C3 20.881 4.119 22 5.5 22h13c1.381 0 2.5-1.119 2.5-2.5V9.679l1.318.824 1.06-1.696L12 1.696ZM12 16.5c-1.933 0-3.5-1.567-3.5-3.5s1.567-3.5 3.5-3.5 3.5 1.567 3.5 3.5-1.567 3.5-3.5 3.5Z"
            );
          }
        } catch {}

        if (path) {
          (container as SVGElement).style.fill = "#fff";
          path.setAttribute("fill-rule", "nonzero");
          path.setAttribute(
            "d",
            "M 12 9 c -2.209 0 -4 1.791 -4 4 s 1.791 4 4 4 s 4 -1.791 4 -4 s -1.791 -4 -4 -4 z m 0 6 c -1.105 0 -2 -0.895 -2 -2 s 0.895 -2 2 -2 s 2 0.895 2 2 s -0.895 2 -2 2 z m 0 -13.304 L 0.622 8.807 l 1.06 1.696 L 3 9.679 V 19.5 C 3 20.881 4.119 22 5.5 22 h 13 c 1.381 0 2.5 -1.119 2.5 -2.5 V 9.679 l 1.318 0.824 l 1.06 -1.696 L 12 1.696 z M 19 19.5 c 0 0.276 -0.224 0.5 -0.5 0.5 h -13 c -0.276 0 -0.5 -0.224 -0.5 -0.5 V 8.429 l 7 -4.375 l 7 4.375 V 19.5 z"
          );
        }
      } catch {}
    });

    document.querySelectorAll("svg").forEach((container) => {
      const filter = container.querySelector(
        `g[filter="url(#filter0_d_40_56253)"]`
      );
      const path = container.querySelector(`path[d='${documentLogo}']`);
      if (path) {
        if (
          document.body.style.backgroundColor == "rgb(21, 32, 43)" ||
          document.body.style.backgroundColor == "rgb(0, 0, 0)"
        ) {
          (container as SVGElement).style.color = "#fff";
        } else {
          (container as SVGElement).style.color = "rgb(29, 155, 240)";
        }
        path.setAttribute("d", oldLogo);
      }
      if (filter) {
        filter.removeAttribute("filter");
      }
    });
  };

  chrome.storage.sync.get(["enabled", "icon_mode"]).then((result) => {
    if (result.enabled) {
      if (result.icon_mode) {
        console.log(document.body);
        new MutationObserver(fixLogo).observe(document.body, {
          childList: true,
          subtree: true,
        });

        new MutationObserver(fixIcon).observe(document.body, {
          childList: true,
          subtree: true,
        });

        fixLogo();
        fixIcon();
      }
    }
  });
})();
