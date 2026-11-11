const isPrime = (n: number): boolean => {
    let is_prime = true;

    if (n % 2 === 0) {
        is_prime = false;
        return is_prime;
    }
    
    for (let i = 3; i <= Math.floor(Math.sqrt(n)); i = i + 2) {
        if (n % i === 0) {
            is_prime = false;
            break;
        }
    }

    return is_prime;
}

const landau = (n: number): number[] => {
    let landau_primes: number[] = [2];

    for (let i = 1; i <= n; ++i) {
        let ith = 4 * (i * i) + 1
        if (isPrime(ith)) landau_primes.push(ith);
    }

    return landau_primes;
}

const main = (): void => {
    const landau_primes = landau(500000);

    console.dir(landau_primes, { maxArrayLength: null, depth: null })
}

main();