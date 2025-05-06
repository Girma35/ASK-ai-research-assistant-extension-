chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.get(["geminiPiKeys"], (result) => {
      if (!result.geminiPiKeys) {
        chrome.tabs.create({ url: "options.html" });
      }
    });
  });

  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === "save_summary") {
        // Only store if we don't already have this content
        chrome.storage.local.get(['savedSummary'], (result) => {
            if (result.savedSummary !== message.content) {
                chrome.storage.local.set({ 
                    savedSummary: message.content,
                    lastSaved: new Date().toISOString() 
                }, () => {
                    console.log("Summary saved at", new Date().toISOString());
                });
            }
        });
        return true; // Keep the message channel open for sendResponse
    }
});
