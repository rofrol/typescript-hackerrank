import * as fs from 'fs';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputStringTemp = '';
let inputString: string[] = [];
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputStringTemp += inputStdin;
});

process.stdin.on('end', () => {
    inputString = inputStringTemp.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

function sockMerchant(n: number, ar: number[]): number {
    // https://stackoverflow.com/questions/21070401/how-does-the-hash-variable-syntax-work-in-typescript/21071089#21071089
    // https://www.typescriptlang.org/docs/handbook/interfaces.html#indexable-types
    // https://stackoverflow.com/questions/44337856/check-if-specific-object-is-empty-in-typescript/44338054
    interface NumberMap {
        [index: number]: number;
    }
    type NumberMap2 = Map<number, number>;
    // does not work
    //let obj: NumberMap2 = {};
    // does not work
    //let obj = {} as NumberMap2;

    // https://stackoverflow.com/questions/37894517/using-strong-typed-map/37894867#37894867
    //const obj = new Map<number, number>();
    //const obj: NumberMap2 = new Map();
    const obj: Map<number, number> = new Map<number, number>();

    // works
    // https://stackoverflow.com/questions/56833469/typescript-error-ts7053-element-implicitly-has-an-any-type/56833507#56833507
    //let obj: { [index: number]: number } = {}
    // this also works
    //let obj: NumberMap = {}

    // https://stackoverflow.com/questions/45571161/typescript-typing-map-object-and-instantiate-with-empty-object/45571346#45571346
    // https://stackoverflow.com/questions/29043279/how-to-use-string-indexed-interface-of-typescript/29043535#29043535
    for (let key of ar) {
        // https://stackoverflow.com/questions/39590858/how-to-increment-a-value-in-a-javascript-object/39591127#39591127
        // https://stackoverflow.com/questions/55098647/typescript-error-ts2532-for-guarded-map-access/55099056#55099056
        obj.has(key) ? obj.set(key, 1) : obj.set(key, obj.get(key)! + 1);
    }
    let count = 0;
    // https://stackoverflow.com/questions/37699320/iterating-over-typescript-map/50232058#50232058
    for (const [key, value] of Object.entries(obj)) {
        // https://stackoverflow.com/questions/4228356/integer-division-with-remainder-in-javascript/4228376#4228376
        count += Math.floor(value / 2);
    }
    let a = null;
    let b = a ?? 2;
    console.log(b);
    return count;
}

function main() {
    // https://stackoverflow.com/questions/45194964/how-to-assign-string-undefined-to-string-in-typescript/47553970#47553970
    // https://stackoverflow.com/questions/23314806/setting-default-value-for-typescript-object-passed-as-argument/44937766#44937766
    // const ws = fs.createWriteStream(process.env.OUTPUT_PATH!);
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH ?? "output.txt");

    const n = parseInt(readLine(), 10);
    const ar = readLine().split(' ').map(arTemp => parseInt(arTemp, 10));
    let result = sockMerchant(n, ar);
    ws.write(result + "\n");

    ws.end();
}