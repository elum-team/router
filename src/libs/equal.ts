import { Sector } from "types";

export type Keys = "stay" | "freeze" | "params" | string;

const equal = (a?: Sector, b?: Sector, exclude: Keys[] = []) => {
  if (a === b) return true;

  if (a && b && typeof a == 'object' && typeof b == 'object') {
    if (a.constructor !== b.constructor) return false;

    var length, i, keys;
    if (Array.isArray(a)) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;)
        if (!equal(a[i], b[i])) return false;
      return true;
    }

    if (a.constructor === RegExp) return ((a as any).source === b.source) && ((a as any).flags === b.flags);
    if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
    if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();

    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length) return false;

    for (i = length; i-- !== 0;) {
      var key = keys[i];
      if (exclude.includes(key)) { continue; };
      if (!Object.prototype.hasOwnProperty.call(b, key)) return false;
      if (!equal(a[key], b[key])) return false;
    }

    return true;
  }
  return a !== a && b !== b;
}

export default equal;
