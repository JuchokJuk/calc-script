import { CSNode } from "../../src/index.ts";

export function lerp(start: CSNode, end: CSNode, t: CSNode) {
  return start.add(t.mul(end.sub(start)));
}
