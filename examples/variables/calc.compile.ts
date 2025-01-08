import { useCalc, CSNode } from '../../src/index.ts';

function summ(a: CSNode, b: CSNode) {
	return a.add(b);
}

export const calcSumm = useCalc(summ)("--x", "--y");

/*

will be compiled to

export const calcSumm = "calc(var(--x) + var(--y))";

*/
