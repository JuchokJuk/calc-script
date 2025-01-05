import { CSNode } from "../../CalcScript.ts";
import { unwrap } from "../../parentheses.ts";

export function sin(value: CSNode) {
  return CSNode(`sin(${unwrap(value)})`, "function");
}

export function cos(value: CSNode) {
  return CSNode(`cos(${unwrap(value)})`, "function");
}

export function tan(value: CSNode) {
  return CSNode(`tan(${unwrap(value)})`, "function");
}

export function asin(value: CSNode) {
  return CSNode(`asin(${unwrap(value)})`, "function");
}

export function acos(value: CSNode) {
  return CSNode(`acos(${unwrap(value)})`, "function");
}

export function atan(value: CSNode) {
  return CSNode(`atan(${unwrap(value)})`, "function");
}

export function atan2(y: CSNode, x: CSNode) {
  return CSNode(`atan2(${unwrap(y)}, ${unwrap(x)})`, "function");
}
