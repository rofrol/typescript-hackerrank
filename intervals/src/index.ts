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

class Interval {
    startTime: number;
    endTime: number;
    price: number;

    constructor(startTime: number, endTime: number, price: number) {
        this.startTime = startTime;
        this.endTime = endTime;
        this.price = price;
    }
}

function readLine() {
    return inputString[currentLine++];
}


function calculateIntervals(intervals: Interval[]): Interval[] {
    let hours: number[] = new Array(24);
    hours.fill(0);
    for (let interval of intervals) {
        for (let i = interval.startTime; i < interval.endTime + 1; i++) {
            //console.log(interval.price, hours[i]);
            if (hours[i] === 0 || interval.price < hours[i]) {
                hours[i] = interval.price;
            }
        }
    }

    //console.log("hours", hours);
    let newIntervals: Interval[] = []
    for (let i = 0; i < hours.length; i++) {
        if (hours[i] != 0) {
            let t = new Interval(i, i, hours[i]);
            while (i + 1 < hours.length && hours[i + 1] === t.price) {
                i++;
            }
            t.endTime = i;
            newIntervals.push(t);
        }
    }
    //console.log("newIntervals", newIntervals);
    return newIntervals;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH ?? "output.txt");

    const n = parseInt(readLine(), 10);

    let intervals = [];

    for (let i = 0; i < n; i++) {
        const [s, e, p] = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));
        intervals.push(new Interval(s, e, p));
    }

    const res = calculateIntervals(intervals);

    for (let { startTime, endTime, price } of res) {
        //console.log(`${startTime} ${endTime} ${price}`);
        ws.write(`${startTime} ${endTime} ${price}\n`);
    }

    ws.end();
}