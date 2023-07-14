const parse = require('../dist/all-parse').default;

const obj1 = [{}, {
  a: 1,
  b: "{}",
}];
const obj2 = {
  a: '{}',
  b: {
    c: '[{"x": 1}]',
  },
};

const cloneDeep = function(obj) {
  return JSON.parse(JSON.stringify(obj));
};

console.log(parse(cloneDeep(obj1)));
console.log(parse(cloneDeep(obj2)));
