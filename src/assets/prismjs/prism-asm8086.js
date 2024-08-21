Prism.languages.asm8086 = {
    comment: /;.*$/m,
    string: /(["'`])(?:\\.|(?!\1)[^\\\r\n])*\1/,
    /* 'label': {
        pattern: /(^\s*)[A-Za-z._?$][\w.?$@~#]*:/m,
        lookbehind: true,
        alias: 'function'
    },*/
    function:
        /\b(?:jmp|mov|push|pop|xchg|in|out|xlat|lea|lds|les|lahf|sahf|add|adc|inc|aaa|daa|sub|sbb|dec|neg|cmp|aas|das|mul|imul|aam|div|idiv|aad|cbw|cwd|not|and|or|xor|test|shl|sal|shr|sar|rol|ror|rcl|rcr|rep|repe|repz|repne|repnz|movs|movsb|movsw|cmps|cmpsb|cmpsw|scas|scasb|scasw|lods|lodsb|lodsw|stos|stosb|stosw|call|ret|retf|je|jz|jl|jnz|jle|jg|jge|jb|jc|jnae|jbe|ja|js|jns|jp|jpe|jnp|jpo|loop|loope|loopz|loopne|loopnz|jcxz|clc|cld|cli|clv|cmc|stc|std|sti|stv|hlt|wait|nop|esc|lock|seg|int)\b/i,
    keyword:
        /\b(?:assume|end|db|dw|dd|dq|dt|dup|equ|org|proc|endp|segment|ends|public|extern|global|section|bits|times|resb|resw|resd|resq|byte|word|dword|qword|ptr|align|offset|far|near|short)\b/i,
    register: {
        pattern: /\b(?:ax|bx|cx|dx|si|di|sp|bp|ah|bh|ch|dh|al|bl|cl|dl|cs|ds|es|fs|gs|ss|ip|flags)\b/i,
        alias: 'variable',
    },
    number: /(?:\b|\$)(?:0[hx][\da-f]+|[0-7]+[oq]|0[by][01]+|[\da-f]+h?)\b/i,
    operator: /[\[\]*+\-\/%<>=&|$!~^]/,
};
