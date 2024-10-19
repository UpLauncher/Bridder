export function resetSettings() {
  chrome.storage.sync.set({
    enabled: true,
    text_mode: true,
    icon_mode: true,
    white_checkmark: true,
    tcoBypasser: true,
    wc_org: false,
    whitemode: false,
    blue_delete: false,
    verifiedBlue: false,
    optimizeMore: true,
    featureFlags: false,
    hideTrend: false,
    hideEngagement: false,
    hideRecommend: false,
  });
}
