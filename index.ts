import { getter } from "elum-state";
import {
  nextPage,
  backPage,
  ACTIVE_VIEW,
  ACTIVE_PANEL,
  ACTIVE_MODAL,
  ACTIVE_POPOUT,
  ACTIVE_PARAMS
} from "./src";

// const get = () => ({
//   view: getter(ACTIVE_VIEW),
//   panel: getter(ACTIVE_PANEL),
//   modal: getter(ACTIVE_MODAL),
//   popout: getter(ACTIVE_POPOUT),
//   params: getter(ACTIVE_PARAMS)
// })

// nextPage({
//   view: "main",
//   panel: "profile",
//   params: {
//     id: 123
//   }
// })

// console.log(get());

// nextPage({
//   view: "main",
//   panel: "setings",
//   params: {
//     refs: "jdfghsdfjghsdfjk"
//   }
// })

// console.log(1,get());

// backPage()

// console.log(2,get());

// backPage()

// console.log(3,get());


// backPage()

// console.log(4,get());

// nextPage({
//   view: "main",
//   panel: "setings_theme"
// })


// nextPage({
//   view: "error"
// })

import Benchmark from "benchmark";
import isequal from "lodash.isequal";

var suite = new Benchmark.Suite();

const a: Record<string, any> = {
  view: 'main',
  panel: 'profile',
  modal: undefined,
  popout: undefined,
  params: { id: "123" }
};

const b: Record<string, any> = {
  view: 'main',
  panel: 'setings',
  modal: undefined,
  popout: undefined,
  params: { refs: 'jdfghsdfjghsdfjk' }
};

const c: Record<string, any> = {
  view: 'main',
  panel: 'profile',
  modal: undefined,
  popout: undefined,
  params: { refs: '123' }
};

const isEqual = (first: any, second: any): boolean => {
  let result: boolean[] = [];
  for (let item of Object.keys(first)) {
    result.push(first[item] === second[item]);
  };
  return !result.includes(false);
};

const equalJSON = (first: Record<string, any>, second: Record<string, any>): boolean => {
  return JSON.stringify(a) === JSON.stringify(c);
}

const equal = (first: any, second: any): boolean =>
  Object.keys(first).every((key) => first[key] === second[key] ||
    (Object.prototype.toString.call(first[key]) === "[object Object]") &&
    equal(first[key], second[key])
  );

console.time("json");
const res = equalJSON(a, c);
console.timeEnd("json");

console.time("equ");
const res2 = equal(a, c)
console.timeEnd("equ");

console.time("old");
const res3 = isEqual(a, c)
console.timeEnd("old");

console.time("lodash");
const res4 = isequal(a, c)
console.timeEnd("lodash");

console.log(res, res2, res3)

// suite
//   .add("json", () => equalJSON(a, c))
//   .add("equal", () => equal(a, c))
//   .add("old", () => isEqual(a, c))
//   .add("lodash", () => isequal(a, c))
//   .on("cycle", (event: any) => console.log(String(event.target)))
//   .run({ async: false });

suite
  .add("nextPage", () => nextPage({
    view: "main",
    panel: "profile",
    params: {
      id: 123
    }
  }))
  // .add("equal", () => equal(a, c))
  // .add("old", () => isEqual(a, c))
  // .add("lodash", () => isequal(a, c))
  .on("cycle", (event: any) => console.log(String(event.target)))
  .run({ async: false });