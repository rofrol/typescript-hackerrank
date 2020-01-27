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

function jumpingOnClouds(c: number[]): number {
    let count = 0;
    let i = 0;
    while (i < c.length - 2) {
        i += c[i + 2] == 0 ? 2 : 1;
        count++;
    }
    if (i < c.length - 1) count++;

    return count;
}

function main() {
    // https://stackoverflow.com/questions/45194964/how-to-assign-string-undefined-to-string-in-typescript/47553970#47553970
    // https://stackoverflow.com/questions/23314806/setting-default-value-for-typescript-object-passed-as-argument/44937766#44937766
    // const ws = fs.createWriteStream(process.env.OUTPUT_PATH!);
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH ?? "output.txt");

    const n = parseInt(readLine(), 10);

    const c = readLine().split(' ').map(cTemp => parseInt(cTemp, 10));

    let result = jumpingOnClouds(c);

    ws.write(result + "\n");

    ws.end();
}