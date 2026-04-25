import { build } from 'esbuild';
import { mkdir, rm } from 'node:fs/promises';

const ENTRIES = ['tweaks-panel.jsx', 'components.jsx', 'sections.jsx', 'app.jsx'];
const OUT_DIR = 'dist';

await rm(OUT_DIR, { recursive: true, force: true });
await mkdir(OUT_DIR, { recursive: true });

await Promise.all(
  ENTRIES.map((entry) =>
    build({
      entryPoints: [entry],
      outfile: `${OUT_DIR}/${entry.replace(/\.jsx$/, '.js')}`,
      loader: { '.jsx': 'jsx' },
      jsxFactory: 'React.createElement',
      jsxFragment: 'React.Fragment',
      bundle: false,
      minify: true,
      target: ['es2019'],
      legalComments: 'none'
    })
  )
);

console.log('build ok →', OUT_DIR);
