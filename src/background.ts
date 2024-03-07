chrome.runtime.onMessage.addListener((request) => {
    console.log("[background.js] Received message: ", request);
    if (request.action === "openOptionsPage") {
        console.log("[background.js] Opening options page (Response: openOptionsPage)")
        chrome.runtime.openOptionsPage();
    }
});

chrome.runtime.onInstalled.addListener((details) => {
    if (details.reason === "update") {
        chrome.tabs.create({
            url: "src/other/updated.html?old_version=" + details.previousVersion
        })
    } else if (details.reason == "install") {
        chrome.tabs.create({
            url: "src/other/installed.html"
        })
    }
});
