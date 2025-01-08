import { useCalc, CSNode, sin, node } from '../../src/index.ts';
import { ladder } from './ladder.ts';
import { map } from './map.ts';

function blockyWave(x: CSNode, t: CSNode, min: CSNode, max: CSNode) {
	return map(sin(ladder(x, t)), node(-1), node(1), min, max).mul(node('1px'));
}

function offsetLeft(x: CSNode) {
	return x.mul(node('10px'));
}

export const calcBlockyWave = useCalc(blockyWave)('--x', '--t', 50, 150);
export const calcOffsetLeft = useCalc(offsetLeft)('--x');
