import { node, type CSNode } from '../node.ts';
import { unwrap } from '../parentheses.ts';

export type RoundingStrategy = 'up' | 'down' | 'nearest' | 'to-zero';

export function round(...args: [CSNode] | [RoundingStrategy, CSNode, CSNode]) {
	if (args.length === 3) {
		return node(`round(${args[0]}, ${unwrap(args[1])}, ${unwrap(args[2])})`, 'function');
	} else {
		return node(`round(${unwrap(args[0])})`, 'function');
	}
}

export function mod(dividend: CSNode, divisor: CSNode) {
	return node(`mod(${unwrap(dividend)}, ${unwrap(divisor)})`, 'function');
}

export function rem(dividend: CSNode, divisor: CSNode) {
	return node(`rem(${unwrap(dividend)}, ${unwrap(divisor)})`, 'function');
}
