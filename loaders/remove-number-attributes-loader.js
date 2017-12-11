function recursivelyRemoveNumberAttributes(source) {
    for (let key in source) {
        if (!isNaN(key)) {
            delete source[key];
        } else if (typeof source[key] == "object" && source[key] !== null)
            recursivelyRemoveNumberAttributes(source[key]);
    }
    return source;
}

module.exports = function(source) {
    source = recursivelyRemoveNumberAttributes(JSON.parse(source));
    return JSON.stringify(source);
};
