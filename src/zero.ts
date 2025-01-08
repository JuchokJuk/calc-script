import { CSNode } from './node.ts';

export function zero(expression: CSNode) {
	return parseFloat(expression.value) === 0;
}
