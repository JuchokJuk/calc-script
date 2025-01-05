import { clamp } from "./functions/math/comparison.ts";
import { pow, log } from "./functions/math/exponential.ts";
import { wrap } from "./parentheses.ts";
import { RoundingStrategy, round, mod, rem } from "./functions/math/steppedValue.ts";
import { zero } from "./zero.ts";

export type CSValue = string | number;
export type NodeType = "value" | "parentheses" | "function";

export interface CSNode {
  value: string;
  nodeType: NodeType;
  add(value: CSNode): CSNode;
  mul(value: CSNode): CSNode;
  sub(value: CSNode): CSNode;
  div(value: CSNode): CSNode;
  clamp(min: CSNode, max: CSNode): CSNode;
  round(...args: [] | [RoundingStrategy, CSNode]): CSNode;
  mod(divisor: CSNode): CSNode;
  rem(divisor: CSNode): CSNode;
  pow(exponent: CSNode): CSNode;
  log(base: CSNode): CSNode;
  toString(): string;
}

export function CSNode(value: CSValue, nodeType: NodeType = "value"): CSNode {
  return {
    value: value.toString(),
    nodeType,
    add(addend: CSNode) {
      if (zero(addend)) return this;
      if (zero(this)) return addend;

      return wrap(`${this} + ${addend}`);
    },
    mul(multiplier: CSNode) {
      if (zero(multiplier) || zero(this)) return CSNode(0);

      return wrap(`${this} * ${multiplier}`);
    },
    sub(subtrahend: CSNode) {
      if (zero(subtrahend)) return this;

      return wrap(`${this} - ${subtrahend}`);
    },
    div(divisor: CSNode) {
      if (zero(divisor)) return this;

      return wrap(`${this} / ${divisor}`);
    },
    clamp(min: CSNode, max: CSNode) {
      return clamp(min, this, max);
    },
    round(...args: [] | [RoundingStrategy, CSNode]) {
      if (args.length === 2) {
        return round(args[0], this, args[1]);
      } else {
        return round(this);
      }
    },
    mod(divisor: CSNode) {
      return mod(this, divisor);
    },
    rem(divisor: CSNode) {
      return rem(this, divisor);
    },
    pow(exponent: CSNode) {
      return pow(this, exponent);
    },
    log(base: CSNode) {
      return log(this, base);
    },
    toString() {
      return this.value;
    },
  };
}
