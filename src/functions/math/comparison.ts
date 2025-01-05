import { CSNode } from "../../CalcScript.ts";
import { unwrap } from "../../parentheses.ts";

export function min(...args: CSNode[]) {
  return CSNode(`min(${args.map(unwrap).join(", ")})`, "function");
}

export function max(...args: CSNode[]) {
  return CSNode(`max(${args.map(unwrap).join(", ")})`, "function");
}

export function clamp(min: CSNode, value: CSNode, max: CSNode) {
  return CSNode(`clamp(${unwrap(min)}, ${unwrap(value)}, ${unwrap(max)})`, "function");
}
