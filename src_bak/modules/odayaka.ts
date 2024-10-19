//Odayaka bridder

let requireClick = true;

const hideRecommend = () => {
  document
    .querySelectorAll(".css-175oi2r.r-14tvyh0.r-cpa5s6.r-16y2uox")
    .forEach((element) => {
      const elementSpan = element.querySelector("span");
      if (elementSpan!.textContent == "おすすめ") {
        (element as HTMLElement).style.display = "none";
      } else if (elementSpan!.textContent == "フォロー中") {
        if (requireClick) {
          (element as HTMLElement).querySelector("a")!.click();
          requireClick = false;
        }
      }
    });

  document
    .querySelectorAll(
      ".css-175oi2r.r-4amgru.r-u8s1d.r-184en5c.r-orgf3d.r-633pao.r-o7ynqc.r-1i6wzkk"
    )
    .forEach((element) => {
      (element as HTMLElement).style.display = "none";
    });
};

const hideTrend = () => {
  document
    .querySelectorAll(
      ".css-175oi2r.r-1867qdf.r-1phboty.r-rs99b7.r-1ifxtd0.r-1udh08x.r-g6ijar.r-74htps"
    )
    .forEach((element) => {
      const h1 = element.querySelector("h1");
      if (!h1) return;
      if (h1.textContent == "トレンド") {
        (element as HTMLElement).style.display = "none";
      }
    });
};

const hideEngagement = () => {
  document
    .querySelectorAll(
      ".css-175oi2r.r-1kbdv8c.r-18u37iz.r-1wtj0ep.r-1ye8kvj.r-1s2bzr4"
    )
    .forEach((element) => {
      if (!element) return;
      element.querySelectorAll("span").forEach((engagement) => {
        (engagement as HTMLElement).style.display = "none";
      });
    });

  document
    .querySelectorAll(
      ".css-175oi2r.r-1kbdv8c.r-18u37iz.r-1oszu61.r-3qxfft.r-s1qlax.r-1kfrmmb.r-1efd50x.r-5kkj8d.r-h3s6tt.r-1wtj0ep.r-1ila09b.r-rull8r.r-qklmqi"
    )
    .forEach((element) => {
      if (!element) return;
      element.querySelectorAll("span").forEach((engagement) => {
        (engagement as HTMLElement).style.display = "none";
      });
    });

  document
    .querySelectorAll(".css-175oi2r.r-1d09ksm.r-18u37iz.r-1wbh5a2.r-1471scf")
    .forEach((element) => {
      if (!element) return;

      element.querySelectorAll("span").forEach((engagement) => {
        if (!engagement.parentNode) return;

        if (engagement.textContent == "件の表示") {
          engagement.style.display = "inline !important";
          engagement.textContent = "非表示";
          (engagement.parentNode as HTMLElement).querySelector(
            "span"
          )!.style.display = "none";
        }
      });
    });

  document
    .querySelectorAll(".css-175oi2r.r-13awgt0.r-18u37iz.r-1w6e6rj")
    .forEach((element) => {
      if (!element) return;
      element.querySelectorAll("span").forEach((elementSpan) => {
        if (!elementSpan) return;
        if (elementSpan.textContent != "フォロー中") {
          if (elementSpan.textContent == "フォロワー") return;
          if (elementSpan.textContent == "人のメンバー") return;
          elementSpan.style.display = "none";
        }
      });
    });
};

chrome.storage.sync
  .get(["enabled", "hideTrend", "hideRecommend", "hideEngagement"])
  .then((result: any) => {
    if (result.hideRecommend) {
      new MutationObserver(hideRecommend).observe(document.body, {
        childList: true,
        subtree: true,
      });

      hideRecommend();
    }

    if (result.hideTrend) {
      new MutationObserver(hideTrend).observe(document.body, {
        childList: true,
        subtree: true,
      });

      hideTrend();
    }

    if (result.hideEngagement) {
      new MutationObserver(hideEngagement).observe(document.body, {
        childList: true,
        subtree: true,
      });

      hideEngagement();
    }
  });
