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

function minimumBribesSlow(q: number[]) {
    let bribes: number | string = 0;
    //console.log(q);
    for (let i = 0; i < q.length; i++) {
        if (q[i] > i + 3) {
            bribes = "Too chaotic";
            break;
        } else {
            for (let j = i + 1; j < q.length; j++) {
                if (q[i] > q[j]) bribes++;
            }
        }
        //console.log(`q[i] ${q[i]}, i ${i}, bribes ${bribes}`);
    }
    console.log(bribes);
}


// https://github.com/gabrielgiordan/hackerrank/blob/5ec19e853d20d36f9c997721621c7aa38f996886/algorithms/constructive-algorithms/new-year-chaos.js
function minimumBribes(q: number[]) {
    let c: number | string = 0;
    for (let i = q.length - 1; i > -1; i--) {
        if (q[i] > i + 3) {
            c = "Too chaotic";
            break;
        }
        for (let j = q[i] - 2; j < i; j++) {
            if (q[j] > q[i]) c++;
        }
    }
    console.log(c);
}

function main() {
    const t = parseInt(readLine(), 10);

    console.log();
    for (let tItr = 0; tItr < t; tItr++) {
        const n = parseInt(readLine(), 10);

        const q = readLine().split(' ').map(qTemp => parseInt(qTemp, 10));

        minimumBribes(q);
    }
}