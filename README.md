# Chrome Solarize

![MIT License](https://img.shields.io/badge/license-mit-118811.svg)
![Lifecycle state: alpha](https://img.shields.io/badge/lifecycle-alpha-orange)

TBD

# How rules work

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

* `matches`
* `rules`
  * `kind`
  * `name`
  * `add`

# TODO

* Work on dark theme.
* Add ability to re-run the content script.
