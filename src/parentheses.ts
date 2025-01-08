import { node, CSNode } from './node.ts';

export function wrap(expression: string) {
	return node(`(${expression})`, 'parentheses');
}

export function unwrap(expression: CSNode) {
	if (expression.type === 'parentheses') {
		return expression.value.slice(1, -1);
	} else {
		return expression.value;
	}
}
