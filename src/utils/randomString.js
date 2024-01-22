const chars = '0123456789abcdefghijklmnopqrstuvwxyz';
function randomStr(len) {
    let str = '';
    for (let i = 0; i < len; i++) {
        str += chars[Math.floor(Math.random() * chars.length)];
    }
    return str;
}
console.log(randomStr(4));
