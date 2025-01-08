# CalcScript: A library for building reusable and maintainable CSS `calc()` expressions with TypeScript.

CalcScript is a library for crafting complex CSS calc() expressions. It simplifies working with intricate expressions by allowing developers to break them into smaller, reusable parts using JavaScript. The library is designed for build-time use with the [`vite-plugin-compile-time`](https://github.com/egoist/vite-plugin-compile-time), ensuring no additional code is shipped to the final bundle.

---

## What Does CalcScript Do?

- Simplifies handling complex `calc()` expressions using familiar JavaScript syntax.

- Enables reusable functions that compile into clean CSS.

- Ideal for working with dynamic calculations in CSS, such as CSS animations or adaptive layouts.

---

## Examples

Use `.compile.ts` extension with [`vite-plugin-compile-time`](https://github.com/egoist/vite-plugin-compile-time) for constructing `calc()` expressions at build time

### Minimal

```TypeScript
import { useCalc, CSNode } from 'css-calc-script';

function summ(a: CSNode, b: CSNode) {
	return a.add(b);
}

export const calcSumm = useCalc(summ)(1, 2);
```

Will be compiled to:

```TypeScript
export const calcSumm = "calc(1 + 2)";
```

### Variables

```TypeScript
import { useCalc, CSNode } from 'css-calc-script';

function summ(a: CSNode, b: CSNode) {
	return a.add(b);
}

export const calcSumm = useCalc(summ)("--x", "--y");
```

Will be compiled to:

```TypeScript
export const calcSumm = "calc(var(--x) + var(--y))";
```

### Combination

```TypeScript
import { useCalc, CSNode, sin, node } from 'css-calc-script';
import { ladder } from './ladder.ts';
import { map } from './map.ts';

function map(value: CSNode, inMin: CSNode, inMax: CSNode, outMin: CSNode, outMax: CSNode) {
	return value.sub(inMin).div(inMax.sub(inMin)).mul(outMax.sub(outMin)).add(outMin);
}

function ladder(x: CSNode, t: CSNode) {
	return t.add(round('down', x.sub(t), node(3)));
}

function blockyWave(x: CSNode, t: CSNode, min: CSNode, max: CSNode) {
	return map(sin(ladder(x, t)), node(-1), node(1), min, max).mul(node('1px'));
}

export const calcBlockyWave = useCalc(blockyWave)('--x', '--t', 50, 150);
```

Will be compiled to:

```TypeScript
export const calcBlockyWave = "calc(((((sin(var(--t) + round(down, var(--x) - var(--t), 3)) + 1) / (1 + 1)) * (150 - 50)) + 50) * 1px)";
```

Clone repo and run `dev` script to see live examples.

## Available functions

```TypeScript
add(value) // Only available as Node method
sub(value) // Only available as Node method
mul(value) // Only available as Node method
div(value) // Only available as Node method

min(...args)
max(...args)
clamp(min, value, max) // Available as both Node method and plain function

round(?strategy, value, ?interval) // Available as both Node method and plain function
mod(value, divisor) // Available as both Node method and plain function
rem(value, divisor) // Available as both Node method and plain function

sin(value)
cos(value)
tan(value)
asin(value)
acos(value)
atan(value)
atan2(y, x)

pow(value, exponent) // Available as both Node method and plain function
sqrt(value)
hypot(...args)
log(value, ?base) // Available as both Node method and plain function
exp(value)

abs(value)
sign(value)

env(name, ?fallback)
variable(name, ?fallback)
```
