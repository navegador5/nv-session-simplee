function extend(dest, source) {
    for (var prop in source) {
        dest[prop] = source[prop];
    }
};


module.exports = {
    extend
}
