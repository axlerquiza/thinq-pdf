exports.getDateTime = function() {
    const today = new Date();

    return today.toLocaleString();
}