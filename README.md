# Chrome Solarize

![MIT License](https://img.shields.io/badge/license-mit-118811.svg)
![Lifecycle state: alpha](https://img.shields.io/badge/lifecycle-alpha-orange)

A simple Chrome extension to apply a Solarized theme to web pages I use a lot.

# How rules work

This uses the standard `content_scripts` block in the manifest file to determine which
pages to inject the CSS and script into. When the script runs it has it's own rule 
system to apply the CSS. This has a similar matches array that determines the specific
page group, and then a set of rules that apply CSS classes from the injected CSS onto
the page elements.

```javascript
const rules = [
  {
   	"matches": ["https://www.google.com"],
		"rules": [
			{"kind": "tag", "name": "body", "add": "solarized-lt-text"},
			{"kind": "class", "name": ["jobcontainer", "YSlUOe"], "add": "solarized-lt-text"},
			{"kind": "id", "name": "pTwnEc", "add": "solarized-lt-pre"}
		]
  }
];
```

* `matches` - a list of URL prefixes, this doesn't quite match the rules system used
  by the manifest, addition of regex support may be useful some day.
* `rules` - the rules to match/apply within the page.
  * `kind` - determine the kind of rule, is it matching a `tag` name, `class` name, 
    or element `id`.
  * `name` - the name, or names, of the tag, class, or id to match.
  * `add` - the name of a class to apply to matching elements.

Note that the value for `name` may be a string, or an array of strings.

# TODO

* Work on a dark theme.
* Add the ability to re-run the content script on a page.
* Add an indicator to the popup if the page is/not supported.
