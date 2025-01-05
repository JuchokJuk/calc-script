import { CSNode } from "../../CalcScript.ts";
import { unwrap } from "../../parentheses.ts";

export function abs(value: CSNode) {
  return CSNode(`abs(${unwrap(value)})`, "function");
}

export function sign(value: CSNode) {
  return CSNode(`sign(${unwrap(value)})`, "function");
}
