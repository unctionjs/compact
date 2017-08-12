/* eslint-disable flowtype/require-parameter-type, flowtype/require-return-type, object-property-newline, no-undefined, no-magic-numbers */
import {test} from "tap"

import catchP from "./source"

test(({same, end}) => {
  same(compact({valueA: 1, valueB: undefined, valueC: null, valueD: []}), {valueA: 1, valueD: []})

  end()
})

test(({same, end}) => {
  same(compact(["x", undefined, [], 1, null]), ["x", [], 1])

  end()
})
