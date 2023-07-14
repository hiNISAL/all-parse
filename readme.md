# all-parse

🇨🇳[中文](https://github.com/hiNISAL/all-parse#all-parse) | [ENGLISH](https://github.com/hiNISAL/all-parse/blob/main/readme-en.md)

深遍历对象和数组，将所有JSON字符串转换成JS对象。

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

## 安装

```shell
npm i all-parse -S
```

## 使用

```js
// ESM
import parse from 'all-parse';
const obj = parse(object);
const obj = parse(array);

// CommonJS
const parse = require('all-parse').default;

const obj = parse(object);
const obj = parse(array);
```

## 自定义parser

```js
import JSON3 from 'json3';
import parse from 'all-parse';

const obj = parse(object, JSON3.parse);
```

## 注意点

方法存在副作用，会修改源对象，如果希望不影响源对象，可以再传入之前进行一次深拷贝：

```js
import parse from 'all-parse';

const input = cloneDeep(object);

const obj = parse(input);
```
