# substr-distance

> Get the distance of a substring from the start of a line

[![Travis](https://img.shields.io/travis/gakimball/substr-distance.svg?maxAge=2592000)](https://travis-ci.org/gakimball/substr-distance) [![npm](https://img.shields.io/npm/v/substr-distance.svg?maxAge=2592000)](https://www.npmjs.com/package/substr-distance)

## Installation

```bash
npm install substr-distance
```

## Usage

```js
const substrDistance = require('substr-distance');

const page = `
<html>
  <body>
    <p id="thing">Find me!</p>
  </body>
</html>
`;

substrDistance(page, '<p id="thing">'); // => 4
```

## API

### substrDistance(haystack, needle)

Find string `needle` in `haystack`, and return the number of characters `needle` sits from the beginning of the line.

- **haystack** (String): String to search in.
- **needle** (String): String to search for.

Returns distance from start of line to `needle`. If `needle` is not found at all, `-1` is returned.

## Local Development

```bash
git clone https://github.com/gakimball/substr-distance
cd substr-distance
npm install
npm test
```

## License

MIT &copy; [Geoff Kimball](http://geoffkimball.com)
