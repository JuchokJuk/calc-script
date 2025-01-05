import { compile } from "../../src/index.ts";
import { mapClamp } from "../utils/mapClamp.ts";

export const calcString = compile(mapClamp)("--value", "--min", "--max", 0, "--width");
/*
    will be compiled to
    calc(clamp(0, ((var(--value) - var(--min)) / (var(--max) - var(--min))) * var(--width), var(--width)))
*/
