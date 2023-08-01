(function () {
    'use strict';

    const xLogo = 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z';
    const oldLogo = 'M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z';

    const documentLogo = 'M17.9686 10.1623L26.7065 0H24.6358L17.0488 8.82382L10.9891 0H4L13.1634 13.3432L4 24H6.07069L14.0827 14.6817L20.4822 24H27.4714L17.9686 10.1623ZM15.1326 13.4607L14.2041 12.132L6.81679 1.55961H9.99723L15.9589 10.0919L16.8873 11.4206L24.6368 22.5113H21.4564L15.1326 13.4607Z'

    const fixLogo = () => {
        document.querySelectorAll('svg').forEach(container => {
            const path = container.querySelector(`path[d='${xLogo}']`);
            if (path) {
                path.style.color = 'rgb(29, 155, 240)';
                path.setAttribute('d', oldLogo);
            }
        });

        document.querySelectorAll('svg').forEach(container => {
            const filter = container.querySelector(`g[filter="url(#filter0_d_40_56253)"]`);
            const path = container.querySelector(`path[d='${documentLogo}']`);
            if (path) {
                path.style.fill = 'rgb(29, 155, 240)';
                path.setAttribute('d', oldLogo);
            }
            if (filter) {
                filter.removeAttribute("filter")
            }
        });
    };

    const fixIcon = () => {
        let link = document.querySelector("link[rel~='icon']");
        if (!link) {
            link = document.createElement('link');
            link.rel = 'icon';
            document.head.appendChild(link);
        }
        link.href = 'https://abs.twimg.com/favicons/twitter.2.ico';
    };

    const fixTitle = () => {
        setInterval(function () {
            if (document.title == "X") {
                document.title = "Twitter";
            }
            if (document.title.includes("/ X")) {
                var Replace = document.title.replace("/ X", "/ Twitter")
                document.title = Replace;
            }
        }, 1)
    };

    const fixText = () => {
        setInterval(function () {
            document.querySelectorAll('*').forEach(container => {
                if (container.textContent === "© 2023 X Corp.") {
                    container.textContent = '© 2023 Twitter Inc.';
                }

                if (container.textContent === "Earn a living on X by letting anyone subscribe to you for monthly content.") {
                    container.textContent = 'Earn a living on Twitter by letting anyone subscribe to you for monthly content.';
                }

                if (container.textContent === "Post your reply!" && container.classList.contains("public-DraftEditorPlaceholder-inner")) {
                    if (window.navigator.language == "ja") {
                        container.textContent = container.textContent.replace("Post your reply!", "ツイートを返信")
                    } else {
                        container.textContent = container.textContent.replace("Post your reply!", "Tweet your reply")
                    }
                }
            });

            document.querySelectorAll('.css-901oao.css-16my406.r-1tl8opc.r-bcqeeo.r-qvutc0').forEach(container => {
                if (container.textContent === "青") {
                    container.textContent = 'Twitter Blue';
                }
            });
        }, 1)
    };

    new MutationObserver(fixLogo).observe(document.body, {
        childList: true,
        subtree: true
    });

    fixLogo();
    fixIcon();
    fixTitle();
    fixText();
})();