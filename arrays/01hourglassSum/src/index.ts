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

function hourglassSum(arr: number[][]) {
    if (arr.length < 3 || arr[0].length < 3) return 0;
    let max = 6 * -9;

    for (let i = 1; i < arr.length - 1; i++) {
        for (let j = 1; j < arr[0].length - 1; j++) {
            let newMax = arr[i - 1][j - 1] + arr[i - 1][j] + arr[i - 1][j + 1]
                + arr[i][j]
                + arr[i + 1][j - 1] + arr[i + 1][j] + arr[i + 1][j + 1];
            console.log(newMax);
            max = Math.max(max, newMax);
            console.log(max);
        }
    }
    return max;
}


function main() {
    // https://stackoverflow.com/questions/45194964/how-to-assign-string-undefined-to-string-in-typescript/47553970#47553970
    // https://stackoverflow.com/questions/23314806/setting-default-value-for-typescript-object-passed-as-argument/44937766#44937766
    // const ws = fs.createWriteStream(process.env.OUTPUT_PATH!);
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH ?? "output.txt");

    let arr = Array(6);

    for (let i = 0; i < 6; i++) {
        arr[i] = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }

    let result = hourglassSum(arr);

    console.log(result);
    ws.write(result + "\n");

    ws.end();
}