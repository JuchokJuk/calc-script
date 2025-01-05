import { CSNode } from "../../CalcScript.ts";
import { unwrap } from "../../parentheses.ts";

export function env(name: string, fallback?: CSNode) {
  if (fallback) {
    return CSNode(`env(${name}, ${unwrap(fallback)})`, "function");
  } else {
    return CSNode(`env(${name})`, "function");
  }
}

export function variable(name: string, fallback?: CSNode) {
  if (fallback) {
    return CSNode(`var(${name}, ${unwrap(fallback)})`, "function");
  } else {
    return CSNode(`var(${name})`, "function");
  }
}
