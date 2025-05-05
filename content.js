function getArticle() {
    const article = document.querySelector("article");
    if (article) {
      return article.innerText;
    }
  
    const paragraphs = Array.from(document.querySelectorAll("p"));
    return paragraphs.map(p => p.innerText).join("\n");
  }
  
  chrome.runtime.onMessage.addListener((req, sender, sendResponse) => {
    if (req.type === "extractArticle") {
      const text = getArticle();
      sendResponse({ text }); 
      return true; 
    }
  });
  