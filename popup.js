document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('dayModeButton').addEventListener('click', function () {
    setFilter('brightness(100%)', '#E0FFFF'); // Cold screen filter
    animateButton(this);
  });

  document.getElementById('nightModeButton').addEventListener('click', function () {
    setFilter('brightness(85%)', '#F5DEB3'); // Warm screen filter
    animateButton(this);
  });
});

function setFilter(filterValue, backgroundColor) {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      func: applyFilter,
      args: [filterValue, backgroundColor],
    });
  });
}

function applyFilter(filterValue, backgroundColor) {
  document.body.style.backgroundColor = backgroundColor;
  document.body.style.filter = filterValue;
}

function animateButton(button) {
  button.classList.add('sun-moon-animation');
  setTimeout(() => {
    button.classList.remove('sun-moon-animation');
  }, 2000);
}
