chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "start_refresh") {
        chrome.scripting.executeScript({
            target: { tabId: request.tabId },
            func: startAutoRefresh,
            args: [request.interval]
        });
    }
});

function startAutoRefresh(interval) {
    setInterval(() => {
        location.reload();
    }, interval);
}