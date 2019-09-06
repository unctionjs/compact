/* eslint-disable object-property-newline, no-undefined, no-magic-numbers */
import compact from "./index.ts";

test(() => {
  expect(compact({valueA: 1, valueB: undefined, valueC: null, valueD: []})).toEqual({valueA: 1, valueD: []});
});

test(() => {
  expect(compact(["x", undefined, [], 1, null])).toEqual(["x", [], 1]);
});
