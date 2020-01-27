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

function countingValleys(n: number, s: string): number {
    const ar: number[] = s.split('').map(arTemp => arTemp === 'D' ? -1 : 1);
    let altitude = 0;
    let count = 0;
    for (let step of ar) {
        if (step === -1 && altitude == 0) {
            count++;
        }
        altitude += step;
    }

    return count;
}

https://www.podatki.gov.pl/zadaj-pytanie/telefon-do-konsultanta/
od poniedziałku do piątku w godzinach od 7: 00 do 18: 00
22 330 03 30(dla połączeń z telefonów komórkowych)

Jeśli sprzedaż z majątku wspólnego czy osobistego małżonkowi, to i tak trzeba podatek zapłacić.
    Chyba, że zwolnienie własne na cele majątkowe - kupno lub remont nieruchomości.
        Art 21 ust 25 ustawy o podatkowym na jakie celem majątkowe.
w okresie 3 lat od dnia zbycia, od końca roku kiedy zbycie, można wydać te pieniądze, żeby nie płacić podatku, ale pi39 do 30 kw roku następnego
22 330 03 30(dla połączeń z telefonów komórkowych)
darowizna między małżonkami lub rodziną - nie ma podatku

function main() {
    // https://stackoverflow.com/questions/45194964/how-to-assign-string-undefined-to-string-in-typescript/47553970#47553970
    // https://stackoverflow.com/questions/23314806/setting-default-value-for-typescript-object-passed-as-argument/44937766#44937766
    // const ws = fs.createWriteStream(process.env.OUTPUT_PATH!);
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH ?? "output.txt");

    const n = parseInt(readLine(), 10);

    const s = readLine();

    let result = countingValleys(n, s);

    ws.write(result + "\n");

    ws.end();
}