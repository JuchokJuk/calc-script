import { CSNode } from '../../src/index.ts';

export function map(value: CSNode, inMin: CSNode, inMax: CSNode, outMin: CSNode, outMax: CSNode) {
	return value.sub(inMin).div(inMax.sub(inMin)).mul(outMax.sub(outMin)).add(outMin);
}
