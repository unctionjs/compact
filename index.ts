import rejectByValue from "@unction/rejectbyvalue";
import isNil from "@unction/isnil";

export default function compact<A> (enumerable: EnumerableType<A | null>): Array<A> | Set<A> | Record<string | number | symbol, B> | Map<B, A> | string {
  return rejectByValue(isNil)(enumerable);
}
