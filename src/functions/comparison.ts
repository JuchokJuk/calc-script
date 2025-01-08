import { node, type CSNode } from '../node.ts';
import { unwrap } from '../parentheses.ts';

export function min(...args: CSNode[]) {
	return node(`min(${args.map(unwrap).join(', ')})`, 'function');
}

export function max(...args: CSNode[]) {
	return node(`max(${args.map(unwrap).join(', ')})`, 'function');
}

export function clamp(min: CSNode, value: CSNode, max: CSNode) {
	return node(`clamp(${unwrap(min)}, ${unwrap(value)}, ${unwrap(max)})`, 'function');
}
