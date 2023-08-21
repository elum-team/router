type Object = Record<string, any>;

const equal = (first: Object, second: Object): boolean => {
  const keys = Object.keys(first);
  return keys.every((key) => {

    const typeFirst = (Object.prototype.toString.call(first[key]));
    const typeSecond = (Object.prototype.toString.call(second[key]));

    if (typeFirst != typeSecond) { return false }

    switch (typeFirst) {
      case "[object String]": return first[key] === second[key];
      case "[object Number]": return first[key] === second[key];
      case "[object Boolean]": return first[key] === second[key];
      case "[object Object]": return equal(first[key], second[key]);
      case "[object Array]": return equal(first[key], second[key]);
      default: return false;
    }

  })
}

export default equal;
