# CalcScript: A library for building reusable and maintainable CSS `calc()` expressions with TypeScript.

CalcScript is a library for crafting complex CSS calc() expressions. It simplifies working with intricate expressions by allowing developers to break them into smaller, reusable parts using JavaScript. The library is designed exclusively for build-time use with the [`vite-plugin-compile-time`](https://github.com/egoist/vite-plugin-compile-time), ensuring no additional code is shipped to the final bundle.

---

## What Does CalcScript Do?

- Simplifies handling complex `calc()` expressions using familiar JavaScript syntax.

- Enables reusable functions that compile into clean CSS.

- Ideal for working with dynamic calculations in CSS, such as CSS animations or adaptive layouts.

---

## Examples

### Linear interpolation

Use `.compile.ts` extension with [`vite-plugin-compile-time`](https://github.com/egoist/vite-plugin-compile-time) for constructing `calc()` expressions at build time

```TypeScript
import { compile, type CSNode } from "CalcScript";

function lerp(start: CSNode, end: CSNode, t: CSNode) {
  return start.add(t.mul(end.sub(start)));
}

export const lerpCSS = compile(lerp)(0, "100px", "--t");
```

```jsx
<div style={{ "--t": t, transform: `translateX(${lerpCSS})` }} />
```

### Combining multiple functions

```TypeScript
import { compile, type CSNode } from "CalcScript";

function map(value: CSNode, inMin: CSNode, inMax: CSNode, outMin: CSNode, outMax: CSNode) {
  return value.sub(inMin).div(inMax.sub(inMin)).mul(outMax.sub(outMin)).add(outMin);
}

function mapClamp(value: CSNode, minIn: CSNode, maxIn: CSNode, minOut: CSNode, maxOut: CSNode) {
  return map(value, minIn, maxIn, minOut, maxOut).clamp(minOut, maxOut);
}

export const calcString = compile(mapClamp)("--value", "--min", "--max", 0, "--width");
/*
    will be compiled to
    calc(clamp(0, ((var(--value) - var(--min)) / (var(--max) - var(--min))) * var(--width), var(--width)))
*/
```

## Available functions

```TypeScript
add(value) // Only available as CSNode method
sub(value) // Only available as CSNode method
mul(value) // Only available as CSNode method
div(value) // Only available as CSNode method

min(...args)
max(...args)
clamp(min, value, max) // Available as both CSNode method and plain function

round(?strategy, value, ?interval) // Available as both CSNode method and plain function
mod(value, divisor) // Available as both CSNode method and plain function
rem(value, divisor) // Available as both CSNode method and plain function

sin(value)
cos(value)
tan(value)
asin(value)
acos(value)
atan(value)
atan2(y, x)

pow(value, exponent) // Available as both CSNode method and plain function
sqrt(value)
hypot(...args)
log(value, ?base) // Available as both CSNode method and plain function
exp(value)

abs(value)
sign(value)

env(name, ?fallback)
variable(name, ?fallback)
```