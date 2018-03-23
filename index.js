const roundTo = require('round-to');

module.exports = function(val) {
    return roundTo(val, 8);
}