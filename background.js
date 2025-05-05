chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.get(["geminiPiKeys"], (result) => {
      if (!result.geminiPiKeys) {
        chrome.tabs.create({ url: "options.html" });
      }
    });
  });

  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === "save_summary") {
      const summary = "This is the saved summary.";
  
      chrome.storage.local.set({ savedSummary: summary }, () => {
        console.log("Summary saved:", summary);
      });
    }
  });
  
