function mergeArrays(a, b) {
    let result = [];
    for (let i = 0; i < Math.max(a.length, b.length); i++) {
        if (a[i]) { result.push(a[i]);}
        if (b[i]) { result.push(b[i]);}
    }
    return result;
}
