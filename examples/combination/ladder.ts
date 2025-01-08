import { CSNode, node, round,  } from '../../src/index.ts';

export function ladder(x: CSNode, t: CSNode) {
	return t.add(round('down', x.sub(t), node(3)));
}
