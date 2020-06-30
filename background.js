function openMyPage() {
    console.log("injecting");
     browser.tabs.create({
       "url": "https://www.youtube.com/watch?v=de7XRW-Cywo"
     });
  }
browser.browserAction.onClicked.addListener(openMyPage);