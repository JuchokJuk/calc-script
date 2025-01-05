import { CSNode } from "../../CalcScript.ts";
import { unwrap } from "../../parentheses.ts";

export function pow(base: CSNode, exponent: CSNode) {
  return CSNode(`pow(${unwrap(base)}, ${unwrap(exponent)})`, "function");
}

export function sqrt(degree: CSNode) {
  return CSNode(`sqrt(${unwrap(degree)})`, "function");
}

export function hypot(...args: CSNode[]) {
  return CSNode(`hypot(${args.map(unwrap).join(", ")})`, "function");
}

export function log(antilogarithm: CSNode, base: CSNode) {
  return CSNode(`log(${unwrap(antilogarithm)}, ${unwrap(base)})`, "function");
}

export function exp(value: CSNode) {
  return CSNode(`exp(${unwrap(value)})`, "function");
}

