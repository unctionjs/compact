import rejectByValue from "@unction/rejectbyvalue";
import isNil from "@unction/isnil";

import {EnumerableType} from "./types";

export default function compact<A> (enumerable: EnumerableType<A | null>): EnumerableType<A> {
  return rejectByValue(isNil)(enumerable);
}
