const colors = {
	// Background/Foreground Tones
    solar_base03: "#002b36",
    solar_base02: "#073642",

	// Content Tones
    solar_base01: "#586e75",
    solar_base00: "#657b83",
    solar_base0: "#839496",
    solar_base1: "#93a1a1",

	// Background/Foreground Tones
    solar_base2: "#eee8d5",
    solar_base3: "#fdf6e3",

	// Accent Colors
    solar_yellow: "#b58900",
    solar_orange: "#cb4b16",
    solar_red: "#dc322f",
    solar_magenta: "#d33682",
    solar_violet: "#6c71c4",
    solar_blue: "#268bd2",
    solar_cyan: "#2aa198",
    solar_green: "#859900"
};

const rules = [
	{
		"matches": ["https://www.google.com"],
		"rules": [
			{"kind": "tag", "name": "body", "add": "solarized-lt-text"},
			{"kind": "tag", "name": "header", "add": "solarized-lt-pre"},
			{"kind": "class", "name": ["jobcontainer", "YSlUOe"], "add": "solarized-lt-text"},
			{"kind": "id", "name": "pTwnEc", "add": "solarized-lt-pre"},
			{"kind": "class", "name": ["appbar", "MXl0lf", "sfbg"], "add": "solarized-lt-pre"}
		]
	},
	{
		"matches": ["https://mail.google.com"],
		"rules": [
			{"kind": "tag", "name": "header", "add": "solarized-lt-pre"},
			{"kind": "class", "name": "no", "add": "solarized-lt-text"}
		]
	},
	{
		"matches": ["https://github.com"],
		"rules": [
			{"kind": "tag", "name": "body", "add": "solarized-lt-text"},
			{"kind": "class", "name": "Header", "add": "solarized-lt-reversed"},
			{"kind": "class", "name": "js-profile-timeline-year-list", "add": "solarized-lt-text"},
			{
				"kind": "class", 
				"name": ["Box-body", "Box-row", "graph-before-activity-overview", "pinned-item-list-item", "pt-3", "top-0"], 
				"add": "solarized-lt-pre"
			},
			{"kind": "class", "name": "Box-row", "add": "solarized-lt-border-secondary"},
			{"kind": "class", "name": "color-border-primary", "add": "solarized-lt-border-primary"},
			{"kind": "class", "name": "color-border-secondary", "add": "solarized-lt-border-secondary"}
		]
	},
	{
		"matches": ["https://code.amazon.com"],
		"rules": [
			{"kind": "tag", "name": "body", "add": "solarized-lt-text"},
			{"kind": "class", "name": ["alert", "panel-body"], "add": "solarized-lt-text"},
			{"kind": "class", "name": ["navbar", "panel-heading", "top-packages-tab"], "add": "solarized-lt-pre"}
		]
	}
];

function findPageRules(pageUrl) {
	function isMatch(pattern) {
		return pageUrl.startsWith(pattern);
	}
	for (rule of rules) {
		if (rule.matches.find(isMatch) !== undefined) {
			return rule.rules;
		}
	}
	return undefined;
}

function hasPageRules(pageUrl) {
	findPageRules(pageUrl) === undefined
}

function addClass(element, solarClass) {
	if (element !== null && element !== undefined) {
		console.log("Adding class '" + solarClass + "' to: ");
		console.log(element);
		element.classList.add(solarClass);
	}
}

function runRules(rules) {
	for (rule of rules) {
		switch (rule.kind) {
			case "tag":
				for (element of document.getElementsByTagName(rule.name)) {
					addClass(element, rule.add);
				}
				break;
			case "id":
				addClass(document.getElementById(rule.name), rule.add);
				break;
			case "class":
				let name_or_names = rule.name;
				if (Array.isArray(name_or_names)) {
					for (name of name_or_names) {
						for (element of document.getElementsByClassName(name)) {
							addClass(element, rule.add);
						}
					}
				} else {
					for (element of document.getElementsByClassName(rule.name)) {
						addClass(element, rule.add);
					}
				}				
				break;
		}
	}
}

function injectStyles(stylesheetUrl) {
  	var elem = document.createElement('link');
  	elem.rel = 'stylesheet';
  	elem.setAttribute('href', stylesheetUrl);
  	document.head.appendChild(elem);
}

function solarizeMe() {
	let pageUrl = document.location.href;
	console.log("Do I care about " + pageUrl);
	let matchingRules = findPageRules(pageUrl);

	if (matchingRules !== undefined) {
		injectStyles(chrome.extension.getURL('solarize.css'));
		console.log("Solarizing page '" + pageUrl + "', theme: " + chrome.i18n.getMessage("theme_light"));
		runRules(matchingRules);
	}
}

solarizeMe();
