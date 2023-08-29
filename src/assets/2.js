const test = fmt`123`;
function fmt(strings) {
    const aa = [/21132123/];
    const bb = strings;
    console.log(strings);
    console.log(String.raw(bb)); // 正确
    console.log(String.raw(...aa)); // 正确，注意这里使用了 ... 拓展运算符
    return String.raw(strings);
}
