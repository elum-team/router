const equal = (first: Record<string, any>, second: Record<string, any>): boolean => Object
  .keys(first)
  .every((key) =>
    first[key] === second[key]
    || (Object.prototype.toString.call(first[key]) === "[object Object]")
    && equal(first[key], second[key])
  );

export default equal;
