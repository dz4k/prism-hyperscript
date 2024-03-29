
(prismHyperscript => {
            this.module && (this.module.exports = prismHyperscript)
            this.Prism && prismHyperscript(this.Prism)
        }) (Prism => {

	Prism.languages.hyperscript = {};
	Object.assign(Prism.languages.hyperscript, {
		'comment': /\-\-.*/,
		'punctuation': /[(){}[\],:;\?&]/,
		'url': {
			pattern: /((?:fetch|require)\s)[^`"'\s][^\s]*/, // `
			lookbehind: true,
			greedy: true,
		},
		'attribute': {
			pattern: /@[a-zA-Z\-\_]+/,
			inside: {
				'attr-name': /[a-zA-Z\-\_].*/,
			}
		},
		'attribute-ref': {
			pattern: /\[@[a-zA-Z\-\_]=(?:"[^\n"]*"|'[^\n']*')\]/,    //"
			alias: 'selector',
			inside: {
				'attr-name': {
					pattern: /(^\[@)[^=]*/,
					lookbehind: true,
				},
				'attr-value': /"[^\n"]*"|'[^\n']*'/,                 //"
			}
		},
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
		'selector': {
			pattern: /<[^\s].*\/>/,
			greedy: true,
		},
		'keyword': {
			pattern: new RegExp(`
\\b(?:on|def|js|worker|eventsource|socket|init|behavior|install|require|
catch|add|async|call|get|hide|measure|if|else|js|log|put|remove|append|
repeat forever|repeat for|repeat in|repeat while|times|
repeat until event|repeat until|repeat|return|send|settle|set|default|
show|take|throw|toggle between|toggle|transition|trigger|continue|breakpoint|
wait for|wait|fetch|tell|go|increment|decrement|halt|make an|
make a|make|then|end|while|until|for|in|from|to|by|with|over|into|
before|after|at end of|at start of|is an|is a|is not|is not a|is not an|is|am|
as|as a|as an|called|and|or|no|closest|the|of|first|last|random|
local|element|global|match|matches|do not match|does not match|
contain|contains|include|includes|on|seconds|millisecondss|(\s)s|(\s)ms)\\b
`.split('\n').join(''), 'g'),
			lookbehind: true,
			inside: {
				'hs-start': {
					pattern: new RegExp(`
^(?:on|def|js|worker|eventsource|socket|init|behavior|install|require|
catch|add|async|call|get|hide|measure|if|else|js|log|put|remove|append|
repeat forever|repeat for|repeat in|repeat while|default|
repeat until event|repeat until|repeat|return|send|set|settle|
show|take|throw|toggle between|toggle|transition|trigger|continue|breakpoint|
wait for|wait|fetch|tell|go|increment|decrement|halt|end|for)$|
^make
`.split('\n').join(''), 'g'),
					alias: 'bold',
				}
			}
		},
		'operator': {
			pattern: /\+|\s-\s|\/|\*|\\|->|<\s|>|<=|>===|==|=|!==|!=|=|\.\.|([^\d\s]|^)\.|\%|\||!|\$|'s/, // '
			lookbehind: true,
		},
		'builtin': /\b(?:I|me|my|it|its|result|event|target|detail|body|you|your|yourself|String|Number|Int|Float|Date|Array|HTML|Fragment|JSON|Object|Values)\b/,
		'function': /[A-Za-z0-9]+(?=\()/,
		'boolean': /\b(?:true|false|null)\b/,
		'string': {
			pattern: /"[^\n"]*"|'[^\n']*'/, // "
			greedy: true,
		},
		'number': {
			pattern: /(\d+\.?|\d*\.\d+)(s|ms)?/,
			greedy: true,
		},
		'template-string': {
			pattern: /`[^\n`]*`/, // ` //
			greedy: true,
			inside: {
				'template-punctuation': {
					pattern: /^`|`$/,
					alias: 'string'
				},
				'interpolation': {
					pattern: /((?:^|[^\\])(?:\\{2})*)\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/,
					lookbehind: true,
					inside: {
						'interpolation-punctuation': {
							pattern: /^\${|}$/,
							alias: 'punctuation'
						},
						rest: Prism.languages.hyperscript
					},
				},
				'string': /[\s\S]+/,
			}
		}
	})

	if (Prism.languages.markup) {
		Prism.languages.markup.tag.addInlined('script', 'hyperscript')
		if ('addAttribute' in Prism.languages.markup.tag) {
			Prism.languages.markup.tag.addAttribute('_', 'hyperscript')
		}
	}
})
