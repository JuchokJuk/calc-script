import { CSNode } from "./CalcScript.ts";

export function wrap(expression: string) {
  return CSNode(`(${expression})`, "parentheses");
}

export function unwrap(expression: CSNode) {
  if (expression.nodeType === "parentheses") {
    return expression.value.slice(1, -1);
  } else {
    return expression.value;
  }
}
