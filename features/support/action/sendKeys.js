const assert = require('assert').strict;

/**
 * Sets the value of an input, textarea or select element.  Will only set the value if the element is not
 * disabled/readonly, and in the case of a select, contains an option with a matching value.
 * @param {String} selector The selector of the element to set the alue of.
 * @param {String} value The value to set on the element.
 */
module.exports = async function (selector, value) {
    const valueToSet = value ? value : '';
    await this.page.type(selector, valueToSet)
};
