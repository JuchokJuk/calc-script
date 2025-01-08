import { calcBlockyWave, calcOffsetLeft } from './blockyWave.compile.ts';

const app = document.getElementById('app') as HTMLDivElement;

CSS.registerProperty({
	name: '--t',
	syntax: '<number>',
	inherits: false,
	initialValue: '0'
});

for (let i = 0; i < 100; i++) {
	const element = document.createElement('div');

	element.style.setProperty('width', '10px');
	element.style.setProperty('height', '10px');
	element.style.setProperty('background-color', 'black');
	element.style.setProperty('border-radius', '5px');
	element.style.setProperty('position', 'absolute');

	element.style.setProperty('--x', `${i}`);
	element.style.setProperty('translate', `0 ${calcBlockyWave}`);
	element.style.setProperty('left', `${calcOffsetLeft}`);

	element.animate([{ '--t': 0 }, { '--t': 100 }], {
		duration: 20000,
		iterations: Infinity,
		easing: 'linear'
	});

	app.appendChild(element);
}
