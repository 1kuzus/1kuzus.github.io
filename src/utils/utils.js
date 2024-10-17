export function assert(condition, message) {
    if (!condition) {
        throw new Error('[Custom Assertion] ' + message);
    }
}

export function isStringOrStringArray(x) {
    if (typeof x === 'string') return true;
    if (Array.isArray(x)) {
        return x.every((i) => typeof i === 'string');
    }
    return false;
}
