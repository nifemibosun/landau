
import Plotly from "plotly.js-dist-min";
import { primes } from "./primes";
import "./style.css";

console.log(primes.length)

const approximation = (x: number, c: number): number => {
    return c * Math.sqrt(x) / Math.log(x);
};

const countingFunction = (
    x: number,
    values: number[]
): number => {
    let count = 0;

    for (const p of values) {
        if (p > x) break;
        ++count;
    }

    return count;
};

const logarithmicSamples = (
    min: number,
    max: number,
    count: number
): number[] => {
    const values: number[] = [];

    for (let i = 0; i < count; ++i) {
        const t = i / (count - 1);
        values.push(min * Math.pow(max / min, t));
    }

    return values;
};

const rx_all = (x: number): number => {
    return  (countingFunction(x, primes) * Math.log(x)) / Math.sqrt(x);
}

const plotLandauPrimes = (): void => {
    const minX = 100;
    const maxX = 1_000_000_000_000;

    const xs = logarithmicSamples(minX, maxX, 500);

    const actual = xs.map(x =>
        countingFunction(x, primes)
    );

    const predicted1 = xs.map(x =>
        approximation(x, 1)
    );

    const predicted15 = xs.map(x =>
        approximation(x, 26 / 19)
    );

    const rx = xs.map(x =>
        rx_all(x)
    );

    const data = [
        {
            x: xs,
            y: actual,
            type: "scatter" as const,
            mode: "lines" as const,
            name: "Actual L(x)",
            line: { shape: "hv" as const }
        },
        {
            x: xs,
            y: predicted1,
            type: "scatter" as const,
            mode: "lines" as const,
            name: "√x / ln(x)"
        },
        {
            x: xs,
            y: predicted15,
            type: "scatter" as const,
            mode: "lines" as const,
            name: "26/19 √x / ln(x)"
        },
        {
            x: xs,
            y: rx,
            type: "scatter" as const,
            mode: "lines" as const,
            name: "L(x)ln(x) / √x"
        }
    ];

    const layout = {
        title: { text: "Landau Prime Counting Function" },
        xaxis: {
            title: { text: "x" },
            type: "log" as const
        },
        yaxis: {
            title: { text: "L(x)" },
            rangemode: "tozero" as const
        },
        autosize: true,
        margin: { t: 60, r: 30, b: 60, l: 70 }
    };

    Plotly.newPlot("plot", data, layout, {
        responsive: true
    });
};

plotLandauPrimes();
