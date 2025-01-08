import { node, CSNode } from '../node.ts';
import { unwrap } from '../parentheses.ts';

export function env(name: string, fallback?: CSNode) {
	if (fallback) {
		return node(`env(${name}, ${unwrap(fallback)})`, 'function');
	} else {
		return node(`env(${name})`, 'function');
	}
}

export function variable(name: string, fallback?: CSNode) {
	if (fallback) {
		return node(`var(${name}, ${unwrap(fallback)})`, 'function');
	} else {
		return node(`var(${name})`, 'function');
	}
}
