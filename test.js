/* eslint-env mocha */

'use strict';

const expect = require('chai').expect;
const substrDistance = require('.');

const multiline = `
Not me!
    Find me!
Nor me!
`;

describe('substrDistance()', () => {
  it('returns -1 if needle is not found', () => {
    expect(substrDistance('Find me!', 'Nope')).to.equal(-1);
  });

  it('returns 0 for needle at start of line', () => {
    expect(substrDistance('Find me!', 'Find')).to.equal(0);
  });

  it('returns distance from start of line to needle', () => {
    expect(substrDistance('    Find me!', 'Find')).to.equal(4);
  });

  it('works with multiline strings', () => {
    expect(substrDistance(multiline, 'Find')).to.equal(4);
  });

  it('accounts for weird Unicode characters in distance', () => {
    expect(substrDistance('🍔Find me!', 'Find')).to.equal(1);
  });
});
