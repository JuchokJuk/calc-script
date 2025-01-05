import { CSNode } from "../../src/index.ts";
import { map } from "./map.ts";

export function mapClamp(value: CSNode, minIn: CSNode, maxIn: CSNode, minOut: CSNode, maxOut: CSNode) {
  return map(value, minIn, maxIn, minOut, maxOut).clamp(minOut, maxOut);
}
