import { build } from 'esbuild';
import { readFile, writeFile, mkdir, rm } from 'node:fs/promises';

const JS_ENTRIES = ['tweaks-panel.jsx', 'components.jsx', 'sections.jsx', 'app.jsx'];
const OUT_DIR = 'dist';
const TMP = `${OUT_DIR}/_entry.jsx`;

await rm(OUT_DIR, { recursive: true, force: true });
await mkdir(OUT_DIR, { recursive: true });

const sources = await Promise.all(JS_ENTRIES.map((f) => readFile(f, 'utf8')));
const concatenated = sources
  .map((src, i) => `/* ${JS_ENTRIES[i]} */\n;(function(){\n${src}\n})();\n`)
  .join('');
await writeFile(TMP, concatenated);

await Promise.all([
  build({
    entryPoints: [TMP],
    outfile: `${OUT_DIR}/bundle.js`,
    loader: { '.jsx': 'jsx' },
    jsxFactory: 'React.createElement',
    jsxFragment: 'React.Fragment',
    bundle: false,
    minify: true,
    target: ['es2019'],
    legalComments: 'none'
  }),
  build({
    entryPoints: ['styles.css'],
    outfile: `${OUT_DIR}/styles.css`,
    minify: true,
    loader: { '.css': 'css' }
  })
]);

await rm(TMP, { force: true });

console.log('build ok →', OUT_DIR);
