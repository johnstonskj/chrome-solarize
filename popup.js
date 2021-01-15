/**
 This file contains click listeners or event handlers of elements in popup.html
 You can add the logic to take some action on particular event
*/

let toggleTheme = document.getElementById('toggleTheme');

// A11y...
toggleTheme.tabIndex = 0;
toggleTheme.focus();

chrome.storage.sync.get('theme', function(data) {
	if (data.theme === "light") {
		toggleTheme.setAttribute("value", "dark");
	} else {
		toggleTheme.setAttribute("value", "light")
	}
});

toggleTheme.onclick = function(element) {
	const newTheme = toggleTheme.getAttribute("value");
	chrome.storage.sync.set({theme: newTheme}, function() {
    	console.log("Theme set to " + newTheme + ".");
  	});
  	window.close();
};