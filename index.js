function is(value, type) {
  return Object.prototype.toString.call(value) === `[object ${type}]`;
}

function isArray(value) {
  return is(value, 'Array');
}

function isObject(value) {
  return is(value, 'Object');
}

function isString(value) {
  return is(value, 'String');
}


function allParse(object, parser = JSON.parse) {
  if (isArray(object)) {
    object.forEach((item) => {
      allParse(item);
    });
  }

  if (isObject(object)) {
    Object.keys(object).forEach((key) => {
      const v = object[key];

      if (isString(v)) {
        try {
          object[key] = parser(v);

          allParse(object[key]);
        } catch {}
      } else {
        allParse(v);
      }
    });
  }

  return object;
}

export default allParse;
