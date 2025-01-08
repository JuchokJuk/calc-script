import { calc, calcSize, CalcSizeBasis } from './calc.ts';
import { CSNode, Value, node } from './node.ts';

function argumentToNode(argument: Value) {
	if (typeof argument === 'string' && argument.startsWith('--')) {
		return node(`var(${argument})`);
	} else {
		return node(argument);
	}
}

export function use(expression: (...args: CSNode[]) => CSNode) {
	return (...args: Value[]) => expression(...args.map(argumentToNode));
}

export function useCalc(expression: (...args: CSNode[]) => CSNode) {
	return (...args: Value[]) => calc(use(expression)(...args));
}

export function useCalcSize(expression: (...args: CSNode[]) => CSNode) {
	return (basis: CalcSizeBasis, ...args: Value[]) => calcSize(basis, use(expression)(...args));
}
