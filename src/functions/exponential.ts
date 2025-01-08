import { node, type CSNode } from '../node.ts';
import { unwrap } from '../parentheses.ts';

export function pow(base: CSNode, exponent: CSNode) {
	return node(`pow(${unwrap(base)}, ${unwrap(exponent)})`, 'function');
}

export function sqrt(degree: CSNode) {
	return node(`sqrt(${unwrap(degree)})`, 'function');
}

export function hypot(...args: CSNode[]) {
	return node(`hypot(${args.map(unwrap).join(', ')})`, 'function');
}

export function log(antilogarithm: CSNode, base: CSNode) {
	return node(`log(${unwrap(antilogarithm)}, ${unwrap(base)})`, 'function');
}

export function exp(value: CSNode) {
	return node(`exp(${unwrap(value)})`, 'function');
}
