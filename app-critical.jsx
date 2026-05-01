/* app-critical.jsx
 * Entry point do bundle crítico.
 * 1. Renderiza só a Hero imediatamente (FCP/LCP rápido)
 * 2. Injeta o bundle-deferred.js após o evento 'load' (sem bloquear o main thread)
 */
/* global React, ReactDOM, Nav, UrgencyBar, Hero */

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "playful": 1,
  "accentHue": "pink",
  "videoUrl": "",
  "headline": "Viralize em 1 minuto.",
  "showUrgencyBar": true
}/*EDITMODE-END*/;

/* Lê tweaks salvos do localStorage (mesma lógica do app.jsx completo) */
function getTweaks() {
  try {
    const saved = JSON.parse(localStorage.getItem('vrl_tweaks') || '{}');
    return Object.assign({}, TWEAK_DEFAULTS, saved);
  } catch {
    return TWEAK_DEFAULTS;
  }
}

function AppCritical() {
  const tweaks = getTweaks();

  /* Aplica CSS vars imediatamente (sem useEffect para evitar flash) */
  const accentMap = { pink: '#FF2D7A', orange: '#FF6A2D', purple: '#8A2ABF', blue: '#2D7AFF' };
  if (typeof document !== 'undefined') {
    document.documentElement.style.setProperty('--playful', tweaks.playful);
    document.documentElement.style.setProperty('--accent', accentMap[tweaks.accentHue] || '#FF2D7A');
  }

  return (
    <>
      {tweaks.showUrgencyBar && <UrgencyBar />}
      <Hero videoUrl={tweaks.videoUrl} />
    </>
  );
}

/* Renderiza a hero crítica imediatamente */
const criticalRoot = ReactDOM.createRoot(document.getElementById('root'));
criticalRoot.render(<AppCritical />);

/* Carrega o bundle completo após o evento 'load' (não bloqueia a pintura inicial) */
function loadDeferred() {
  const script = document.createElement('script');
  script.src = 'dist/bundle-deferred.js?v=60';
  script.async = true;
  document.head.appendChild(script);
}

if (document.readyState === 'complete') {
  loadDeferred();
} else {
  window.addEventListener('load', loadDeferred, { once: true });
}
