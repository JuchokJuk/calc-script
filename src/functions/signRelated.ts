import { node, CSNode } from '../node.ts';
import { unwrap } from '../parentheses.ts';

export function abs(value: CSNode) {
	return node(`abs(${unwrap(value)})`, 'function');
}

export function sign(value: CSNode) {
	return node(`sign(${unwrap(value)})`, 'function');
}
