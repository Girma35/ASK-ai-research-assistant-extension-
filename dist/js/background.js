/******/ (() => { // webpackBootstrap
/*!******************************!*\
  !*** ./src/js/background.js ***!
  \******************************/
chrome.runtime.onInstalled.addListener(function () {
  chrome.storage.sync.get(["geminiPiKeys"], function (result) {
    if (!result.geminiPiKeys) {
      chrome.tabs.create({
        url: "options.html"
      });
    }
  });
});
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message.type === "save_summary") {
    // Only store if we don't already have this content
    chrome.storage.local.get(['savedSummary'], function (result) {
      if (result.savedSummary !== message.content) {
        chrome.storage.local.set({
          savedSummary: message.content,
          lastSaved: new Date().toISOString()
        }, function () {
          console.log("Summary saved at", new Date().toISOString());
        });
      }
    });
    return true; // Keep the message channel open for sendResponse
  }
});
/******/ })()
;
//# sourceMappingURL=background.js.map