/* eslint-disable object-property-newline, no-undefined, no-magic-numbers */
import compact from "./index";

test("works", () => {
  expect(compact({valueA: 1, valueB: undefined, valueC: null, valueD: []})).toEqual({valueA: 1, valueD: []});
});

test("works", () => {
  expect(compact(["x", undefined, [], 1, null])).toEqual(["x", [], 1]);
});
