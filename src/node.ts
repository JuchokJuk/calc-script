import { clamp } from './functions/comparison.ts';
import { pow, log } from './functions/exponential.ts';
import { wrap } from './parentheses.ts';
import { RoundingStrategy, round, mod, rem } from './functions/steppedValue.ts';
import { zero } from './zero.ts';

export type Value = string | number;
export type NodeType = 'value' | 'parentheses' | 'function';

export interface CSNode {
	value: string;
	type: NodeType;
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

export function node(value: Value, type: NodeType = 'value'): CSNode {
	return {
		value: value.toString(),
		type,
		add(addend: CSNode) {
			if (zero(addend)) return this;
			if (zero(this)) return addend;
			if(addend.value.startsWith('-')) return wrap(`${this.value} - ${addend.value.slice(1)}`);

			return wrap(`${this.value} + ${addend.value}`);
		},
		mul(multiplier: CSNode) {
			if (zero(multiplier) || zero(this)) return node(0);

			return wrap(`${this.value} * ${multiplier.value}`);
		},
		sub(subtrahend: CSNode) {
			if (zero(subtrahend)) return this;
			if (subtrahend.value.startsWith('-')) return wrap(`${this.value} + ${subtrahend.value.slice(1)}`);

			return wrap(`${this.value} - ${subtrahend.value}`);
		},
		div(divisor: CSNode) {
			if (zero(divisor)) return this;

			return wrap(`${this.value} / ${divisor.value}`);
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
		}
	};
}
