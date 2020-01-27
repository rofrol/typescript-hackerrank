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

function count_a(str: string, n: number) {
    let stop = Math.min(str.length, n);
    let count = 0;
    for (let i = 0; i < stop; i++) {
        count += +(str[i] === 'a');
    }
    return count;
}

// Lilah has a string, , of lowercase English letters that she repeated infinitely many times.
function repeatedString(s: string, n: number): number {
    let repeats = Math.floor(n / s.length);
    let reminder = n % s.length;
    let a_in_s = count_a(s, s.length);
    let count = a_in_s * repeats + count_a(s, reminder);
    return count;
}



function main() {
    // https://stackoverflow.com/questions/45194964/how-to-assign-string-undefined-to-string-in-typescript/47553970#47553970
    // https://stackoverflow.com/questions/23314806/setting-default-value-for-typescript-object-passed-as-argument/44937766#44937766
    // const ws = fs.createWriteStream(process.env.OUTPUT_PATH!);
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH ?? "output.txt");

    const s = readLine();

    const n = parseInt(readLine(), 10);

    let result = repeatedString(s, n);

    console.log(result);
    ws.write(result + "\n");

    ws.end();
}