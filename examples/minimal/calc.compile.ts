import { useCalc, CSNode } from '../../src/index.ts';

function summ(a: CSNode, b: CSNode) {
	return a.add(b);
}

export const calcSumm = useCalc(summ)(1, 2);

/*

will be compiled to

export const calcSumm = "calc(1 + 2)";

*/
