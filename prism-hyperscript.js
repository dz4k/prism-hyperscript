
(Prism => {
	Prism.languages.hyperscript = {
		'comment': /\-\-.*/,
		'punctuation': /[(){}[\],:.]/,
		'keyword': {
			pattern: /\b(?:on|def|js|worker|eventsource|socket|init|add|async|call|get|fetch|hide|if|js|log|put|remove|repeat|return|send|set|settle|show|take|throw|toggle|transition|trigger|wait|tell|go|then)\b/,
			inside: {
				'italic': /then/
			}
		},
		'operator': /\+|-|\/|\*|<\b|>|<=|>=|\b(?:is|as|and|or|no|closest|the|of|first|last|from|to|with|on|while|until|for|in|is\sa|is\san)\b/,
		'builtin': /\b(?:I|me|my|it|its|result|event|target|detail)\b/,
		'function': /[-A-Za-z0-9]+(?=\()/i,
		'boolean': /\b(?:true|false)\b/,
		'string': {
			pattern: /([^\w_\$])("[^\n]*[^\\]?"|'[\n]*[^\\]?)'/,
			greedy: true,
			lookbehind: true,
		},
		'hs-template-literal': {
			pattern: /`[^\n`]`/,
			greedy: true,
			inside: {
				'string': /`.*\$\{|`.*`|\}*\$\{|\}.*`/
			}
		}
	}
})(Prism)
