import { build } from 'esbuild';
import { readFile, writeFile, mkdir, rm } from 'node:fs/promises';

const OUT_DIR = 'dist';
const TMP_CRITICAL = `${OUT_DIR}/_entry_critical.jsx`;
const TMP_DEFERRED = `${OUT_DIR}/_entry_deferred.jsx`;

await rm(OUT_DIR, { recursive: true, force: true });
await mkdir(OUT_DIR, { recursive: true });

/* ─── BUNDLE CRÍTICO ──────────────────────────────────────────────────────────
 * Ordem: React (via unpkg UMD não é mais necessário — React está embutido aqui)
 * components.jsx (Icon, Btn, Logo, AlphaBtn...)
 * sections-critical.jsx (Nav, UrgencyBar, Hero)
 * tweaks-panel.jsx (useTweaks — necessário para ler localStorage)
 * app-critical.jsx (renderiza Hero + injeta bundle-deferred após load)
 */
const CRITICAL_ENTRIES = [
  'components.jsx',
  'sections-critical.jsx',
  'tweaks-panel.jsx',
  'app-critical.jsx',
];

/* ─── BUNDLE DEFERIDO ─────────────────────────────────────────────────────────
 * Tudo que vem abaixo do fold. Carregado após o evento 'load'.
 */
const DEFERRED_ENTRIES = [
  'sections.jsx',
  'app.jsx',
];

async function buildBundle(entries, outfile, tmp) {
  const sources = await Promise.all(entries.map((f) => readFile(f, 'utf8')));
  const concatenated = sources
    .map((src, i) => `/* ${entries[i]} */\n;(function(){\n${src}\n})();\n`)
    .join('');
  await writeFile(tmp, concatenated);

  await build({
    entryPoints: [tmp],
    outfile,
    loader: { '.jsx': 'jsx' },
    jsxFactory: 'React.createElement',
    jsxFragment: 'React.Fragment',
    bundle: false,   // React ainda é global (carregado via CDN antes dos bundles)
    minify: true,
    target: ['es2019'],
    legalComments: 'none',
  });

  await rm(tmp, { force: true });
}

/* CSS (único — não muda) */
const cssPromise = build({
  entryPoints: ['styles.css'],
  outfile: `${OUT_DIR}/styles.css`,
  minify: true,
  loader: { '.css': 'css' },
});

/* Builds em paralelo */
await Promise.all([
  buildBundle(CRITICAL_ENTRIES, `${OUT_DIR}/bundle-critical.js`, TMP_CRITICAL),
  buildBundle(DEFERRED_ENTRIES, `${OUT_DIR}/bundle-deferred.js`, TMP_DEFERRED),
  cssPromise,
]);

console.log('build ok →', OUT_DIR);

/* Mostra tamanhos para referência */
import { stat } from 'node:fs/promises';
const [crit, deferred, css] = await Promise.all([
  stat(`${OUT_DIR}/bundle-critical.js`),
  stat(`${OUT_DIR}/bundle-deferred.js`),
  stat(`${OUT_DIR}/styles.css`),
]);
const kb = (b) => `${(b / 1024).toFixed(1)}KB`;
console.log(`  bundle-critical.js  ${kb(crit.size)}`);
console.log(`  bundle-deferred.js  ${kb(deferred.size)}`);
console.log(`  styles.css          ${kb(css.size)}`);
