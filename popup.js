/* global chrome */
'use strict';

document.addEventListener('DOMContentLoaded', function() {
  chrome.tabs.executeScript({
    code: "window.getSelection().toString();"
  }, function(selection) {
    let selectedWord = selection[0];
    // look up selectedWord on https://npmjs.com?search?q=minimatch
    // replace popup contents with search page
  });
});
