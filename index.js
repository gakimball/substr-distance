'use strict';

const length = require('string-length');
const escapeRegex = require('escape-regex');

/**
 * Find string `needle` in `haystack`, and return the number of characters `needle` sits from the beginning of the line.
 * @param {String} haystack - String to search in.
 * @param {String} needle - String to search for.
 * @returns {Integer} Distance from start of line to `needle`. If `needle` is not found at all, `-1` is returned.
 */
module.exports = (haystack, needle) => {
  const regexp = new RegExp(`^(.*)${escapeRegex(needle)}`, 'm');
  const match = regexp.exec(haystack);

  // No match means there's no length to report
  if (!match) {
    return -1;
  }

  const leadingChars = match[1];

  // No match for the `(.*)` capture group means the needle is at the start of the line
  if (!leadingChars) {
    return 0;
  }

  // Return the real length of the string (accounting for emojis and so on)
  return length(leadingChars);
};
