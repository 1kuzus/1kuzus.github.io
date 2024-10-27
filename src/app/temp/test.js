var addOperators = function (num, target) {
    const ans = [];
    const search = (i, M, C, val, expr) => {
        if (i === -1) {
            if (val === target) ans.push(expr);
            return;
        }
        i && search(i - 1, M, num[i] + C, val, num[i] + expr); // .
        if (C && num[i] === '0') return;
        i && search(i - 1, M * (num[i] + C), '', val, '*' + num[i] + expr); // *
        i && search(i - 1, 1, '', val - (num[i] + C) * M, '-' + num[i] + expr); // -
        search(i - 1, 1, '', val + (num[i] + C) * M, (i ? '+' : '') + num[i] + expr); // +
    };
    search(num.length - 1, 1, '', 0, '');
    return ans;
};
