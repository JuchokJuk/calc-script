import { CSNode } from "./CalcScript.ts";

export function zero(expression: CSNode) {
  return parseFloat(expression.value as string) === 0;
}
