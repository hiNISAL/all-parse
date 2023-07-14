# all-parse

🇨🇳[中文](https://github.com/hiNISAL/never-write#never-wirte) | [ENGLISH](https://github.com/hiNISAL/never-write/blob/main/readme-en.md)

Deep traverse the object, converting all JSON strings into JS objects.

```js
const object = {
  a: 1,
  b: '{"c": 2}',
  d: {
    e: "{"f": 3}",
  },
};

parse(object);
// output:
const object = {
  a: 1,
  b: {
    c: 2,
  },
  d: {
    e: {
      f: 3,
    },
  },
};
```

## INSTALL

```shell
npm i all-parse -S
```

## USAGE

```js
// ESM
import parse from 'all-parse';
const obj = parse(object);

// CommonJS
const parse = require('all-parse').default;

const obj = parse(object);
```

## custom JSON parser

```js
import JSON3 from 'json3';
import parse from 'all-parse';

const obj = parse(object, JSON3.parse);
```

## TIPs

The method has side effects and will modify the source object. If you want to avoid affecting the source object, you can perform a deep copy before passing it in.：

```js
import parse from 'all-parse';

const input = cloneDeep(object);

const obj = parse(input);
```
