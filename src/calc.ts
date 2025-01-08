import { CSNode } from './node.ts';
import { unwrap } from './parentheses.ts';

export function calc(expression: CSNode) {
	return `calc(${unwrap(expression)})`;
}

export type CalcSizeBasis = 'auto' | 'min-content' | 'max-content' | 'fit-content' | 'content';

export function calcSize(basis: CalcSizeBasis, expression: CSNode) {
	return `calc-size(${basis}, ${unwrap(expression)})`;
}
