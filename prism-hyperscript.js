
(Prism => {
	Prism.languages.hyperscript = {
		'comment': /\-\-.*/,
		'punctuation': /[(){}[\],:;\?&]/,
		'keyword': {
			pattern: /\b(?:on|def|js|worker|eventsource|socket|init|add|async|call|get|fetch|hide|measure|if|js|log|put|remove|repeat\sforever|repeat\sfor|repeat\sin|repeat\swhile|repeat\suntil\sevent|repeat until|repeat|return|send|settle|set|show|take|throw|toggle\sbetween|toggle|transition|trigger|wait for|wait|tell|go|then|end|while|until|for|in|from|to|with|over)\b/g,
			inside: {
				'marker': {
					pattern: /\b(?:on|def|js|worker|eventsource|socket|init|add|async|call|get|fetch|hide|measure|if|js|log|put|remove|repeat\sforever|repeat\sfor|repeat\sin|repeat\swhile|repeat\suntil\sevent|repeat\suntil|repeat|return|send|set|settle|show|take|throw|toggle\sbetween|toggle|transition|trigger|wait for|wait|tell|go|end|for)\b/g,
					alias: 'bold',
				}
			}
		},
		'operator': {
			pattern: /\+|-|\/|\*|\\|<\s|>|<=|>=|==|===|!=|!==|=|\.\.|(\w)\.|%|\||!|$|\b()(?:is|am|as|and|or|no|closest|the|of|first|last|on|is\sa|is\san|s|ms|seconds|milliseconds)\b/,
			lookbehind: true,
		},
		'builtin': /\b(?:I|me|my|it|its|result|event|target|detail)\b/,
		'function': /[A-Za-z0-9]+(?=\()/i,
		'class-ref': {
			pattern: /\s\.[\-\w\d_\$]+/,
			alias: 'selector',
			greedy: true
		},
		'id-ref': {
			pattern: /#[\-\w\d_\$]+/,
			alias: 'selector',
			greedy: true
		},
		'selector': /<[^\s].*\/>/,
		'boolean': /\b(?:true|false|null)\b/,
		'string': {
			pattern: /("[^\n]*[^\\]?"|'[^\n]*[^\\]?')/,
			greedy: true,
		},
		'number': /(\d+\.?|\d*\.\d+)(s|ms)?/,
		'hs-template-literal': {
			pattern: /`[^\n`]*`/,
			greedy: true,
			inside: {
				'string': {
					pattern: /`\$\{|}\$\{|}`|`.*[^\\]\$\{|`.*`|\}.*[^\\]\$\{|\}.*`/,
					inside: {
						operator: /^}|\$\{$/
					}
				}
			}
		}
	}

	// `

	if (Prism.languages.markup) {
		Prism.languages.markup.tag.addInlined('script', 'hyperscript')
		Prism.languages.markup.tag.addAttribute('_', 'hyperscript')
	}
})(Prism)
