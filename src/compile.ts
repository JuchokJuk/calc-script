import { CSValue, CSNode } from "./CalcScript.ts";
import { calc, CalcSizeBasis, calcSize } from "./calc.ts";

function argumentToNode(argument: CSValue) {
  if (typeof argument === "string" && argument.startsWith("--")) {
    return CSNode(`var(${argument})`);
  } else {
    return CSNode(argument);
  }
}

export function compile(expression: (...args: CSNode[]) => CSNode) {
  return (...args: CSValue[]) => calc(expression(...args.map(argumentToNode)));
}

export function compileSize(expression: (...args: CSNode[]) => CSNode) {
  return (basis: CalcSizeBasis, ...args: CSValue[]) => calcSize(basis, expression(...args.map(argumentToNode)));
}
