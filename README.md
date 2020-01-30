In first terminal:

```bash
nvm
tsc --watch
```

In second terminal:

```bash
nvm
OUTPUT_PATH=output.txt watchexec --exts js 'node dist/index.js < input/input03.txt
```

for new task

```bash
cp -r previous_task next_task
cd next_task
rm -rf input/ output*
```