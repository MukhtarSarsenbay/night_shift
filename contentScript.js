chrome.action.onClicked.addListener(function (tab) {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: applyDayMode,
  });
});

function applyDayMode() {
  document.body.style.backgroundColor = '#fff';
  document.body.style.filter = 'brightness(100%)';
}

chrome.action.onClicked.addListener(function (tab) {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: applyNightMode,
  });
});

function applyNightMode() {
  document.body.style.backgroundColor = '';
  document.body.style.filter = 'brightness(85%)';
}
