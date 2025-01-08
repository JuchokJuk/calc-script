import { node, CSNode } from '../node.ts';
import { unwrap } from '../parentheses.ts';

export function sin(value: CSNode) {
	return node(`sin(${unwrap(value)})`, 'function');
}

export function cos(value: CSNode) {
	return node(`cos(${unwrap(value)})`, 'function');
}

export function tan(value: CSNode) {
	return node(`tan(${unwrap(value)})`, 'function');
}

export function asin(value: CSNode) {
	return node(`asin(${unwrap(value)})`, 'function');
}

export function acos(value: CSNode) {
	return node(`acos(${unwrap(value)})`, 'function');
}

export function atan(value: CSNode) {
	return node(`atan(${unwrap(value)})`, 'function');
}

export function atan2(y: CSNode, x: CSNode) {
	return node(`atan2(${unwrap(y)}, ${unwrap(x)})`, 'function');
}
