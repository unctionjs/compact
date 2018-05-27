import { reject } from "ramda";
import { isNil } from "ramda";
export default function compact(collection) {
  return reject(isNil)(collection);
}
