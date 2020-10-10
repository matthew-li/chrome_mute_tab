/**
 * Listen for a key binding (Alt+Shift+M). Mute or unmute the current tab.
 */
chrome.commands.onCommand.addListener(function(command) {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.update(tabs[0].id, {"muted": !tabs[0].mutedInfo.muted});
  });
});
