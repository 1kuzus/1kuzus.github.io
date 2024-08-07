Prism.languages.asm8086 = {
	'comment': /;.*$/m,
	'string': /(["'`])(?:\\.|(?!\1)[^\\\r\n])*\1/,
	'label': {
		pattern: /(^\s*)[A-Za-z._?$][\w.?$@~#]*:/m,
		lookbehind: true,
		alias: 'function'
	},
	'keyword': [
        /\b(?:jmp|mov|push|pop|xchg|in|out|xlat|lea|lds|les|lahf|sahf|add|adc|inc|aaa|daa|sub|sbb|dec|neg|cmp|aas|das|mul|imul|aam|div|idiv|aad|cbw|cwd|not|and|or|xor|test|shl|sal|shr|sar|rol|ror|rcl|rcr|rep|repe|repz|repne|repnz|movs|movsb|movsw|cmps|cmpsb|cmpsw|scas|scasb|scasw|lods|lodsb|lodsw|stos|stosb|stosw|call|ret|retf|je|jz|jl|jnz|jle|jg|jge|jb|jc|jnae|jbe|ja|js|jns|jp|jpe|jnp|jpo|loop|loope|loopz|loopne|loopnz|jcxz|clc|cld|cli|clv|cmc|stc|std|sti|stv|hlt|wait|nop|esc|lock|seg)\b/i,
		/\[?BITS (?:16|32|64)\]?/,
		{
			pattern: /(^\s*)section\s*[a-z.]+:?/im,
			lookbehind: true
		},
		/(?:extern|global)[^;\r\n]*/i,
		/(?:CPU|DEFAULT|FLOAT).*$/m
	],
	'register': {
		pattern: /\b(?:st\d|[xyz]mm\d\d?|[cdt]r\d|r\d\d?[bwd]?|[er]?[abcd]x|[abcd][hl]|[er]?(?:bp|di|si|sp)|[cdefgs]s)\b/i,
		alias: 'variable'
	},
	'number': /(?:\b|(?=\$))(?:0[hx](?:\.[\da-f]+|[\da-f]+(?:\.[\da-f]+)?)(?:p[+-]?\d+)?|\d[\da-f]+[hx]?|\$\d[\da-f]*|0[oq][0-7]+|[0-7]+[oq]|0[by][01]+|[01]+[by]|0[dt]\d+|(?:\d+(?:\.\d+)?|\.\d+)(?:\.?e[+-]?\d+)?[dt]?)\b/i,
	'operator': /[\[\]*+\-\/%<>=&|$!]/
};
