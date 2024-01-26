const numChars = '0123456789';
const hexChars = '0123456789abcdef';
function randomStr(chars, len) {
    let str = '';
    for (let i = 0; i < len; i++) {
        str += chars[Math.floor(Math.random() * chars.length)];
    }
    return str;
}
console.log(randomStr(numChars, 1) + randomStr(hexChars, 5));
