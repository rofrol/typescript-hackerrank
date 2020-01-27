https://www.hackerrank.com/interview/interview-preparation-kit

## Run

```bash
$ npm i typescript @types/express ts-node-dev -D
$ tsc
# in another terminal
$ node src/index.js
```

## Watch

```bash
$ tsc --watch
# in another terminal
$ watchexec --exts js 'node dist/index.js'
```

## Links

- I am targeting es2018 https://kangax.github.io/compat-table/es2016plus/
- https://www.typescriptlang.org/docs/handbook/tsconfig-json.html
- `tsc filename.ts` means the compiler will not take into account your tsconfig.json file. Use `tsc -p tsconfig.json` or just `tsc`. https://stackoverflow.com/questions/51024947/typescript-error-error-ts2705-an-async-function-or-method-in-es5-es3-requires/51026131#51026131
- you need to target ES6 in Typescript 1.7 to use async/await https://stackoverflow.com/questions/32401741/async-await-simple-example-typescript/34384241#34384241
  - "error TS2468: Cannot find global value 'Promise'"
  - "error TS2705: An async function or method in ES5/ES3 requires the 'Promise' constructor"
- lib is different to target. target roughly means the JavaScript version of the generated output files. lib means the features you will use in TypeScript. For example, you can use new features in ES2018 ("lib": ["ES2018"]), but still target at ES6 ("target": "ES6"). Those new features will be translated to ES6 during compilation (this may be done via third party tools like babel, and some new features may not be translatable, but these are just implementation details). https://stackoverflow.com/questions/52593816/how-do-i-target-es2018-in-typescript/55198819#55198819 https://www.typescriptlang.org/docs/handbook/compiler-options.html
- it `"target": "es5"` and `"lib": ["es2015"]` you need to add `"dom"` to `"lib"` if you use i.e. `console.log`. So `es5` has `dom` but `es2015`  has not. https://stackoverflow.com/questions/47648506/typescript-complains-with-and-without-lib/47648605#47648605
- If you want to use module 'system' at server side - you will have to install systemjs package and configure it. But in my opinion it would be better to target commonjs and run it 'natively' in node.js without any extra dependencies. https://stackoverflow.com/questions/36244639/how-do-i-fix-referenceerror-system-is-not-defined-when-running-script-from-co/36245046#36245046
  - cannot use `outFile` but can use `outDir`
- Notice that **es2018** target is needed to be able to use [**Optional chaining**](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html#optional-chaining) and [**Nullish Coalescing**](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html#nullish-coalescing), as **esnext** target doesn't seem to support these features for now. https://github.com/nuxt/typescript/commit/826234b5ff24a90e771d10b1029d1adabd8de6fb