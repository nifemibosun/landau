import { ratios } from "./ratios.js";
import { primes } from "./primes.js";

const maxRatio = Math.max(...ratios);
const minRatio = Math.min(...ratios);

const maxIndex = ratios.indexOf(maxRatio);

console.log({
    minRatio,
    maxRatio,
    index: maxIndex,
    p1: primes[maxIndex],
    p2: primes[maxIndex + 1],
});