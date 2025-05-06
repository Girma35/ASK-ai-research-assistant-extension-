/******/ (() => { // webpackBootstrap
/*!***************************!*\
  !*** ./src/js/content.js ***!
  \***************************/
function getArticle() {
  var article = document.querySelector("article");
  if (article) {
    return article.innerText;
  }
  var paragraphs = Array.from(document.querySelectorAll("p"));
  return paragraphs.map(function (p) {
    return p.innerText;
  }).join("\n");
}
chrome.runtime.onMessage.addListener(function (req, sender, sendResponse) {
  if (req.type === "extractArticle") {
    var text = getArticle();
    sendResponse({
      text: text
    });
    return true;
  }
});
/******/ })()
;
//# sourceMappingURL=content.js.map