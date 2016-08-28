var toggle = false;
chrome.browserAction.onClicked.addListener(function(tab) {
  toggle = !toggle;
  if(toggle) {
    chrome.browserAction.setIcon({path: "images/on.png"});
    chrome.tabs.executeScript(null, {file: "js/content.js"});
  } else {
    chrome.browserAction.setIcon({path: "images/off.png"});
    chrome.tabs.executeScript(null, {path: "js/terminate.js"});
  }
});
