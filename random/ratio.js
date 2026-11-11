import { primes } from "./primes.js";
const ratio = () => {
    let r_ks = [];
    for (let i = 0; i < primes.length - 1; ++i) {
        let r_k = primes[i + 1] / primes[i];
        r_ks.push(r_k);
    }
    return r_ks;
};
console.dir(ratio(), { maxArrayLength: null, depth: null });
