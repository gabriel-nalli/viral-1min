/* app.jsx — Bundle DEFERIDO
 * Este arquivo é compilado em dist/bundle-deferred.js.
 * É carregado pelo app-critical.jsx após o evento 'load',
 * então NÃO bloqueia o FCP/LCP.
 * Renderiza tudo abaixo do fold no #deferred-root.
 */
/* global React, ReactDOM, useTweaks, TweaksPanel, TweakSection, TweakSlider, TweakToggle, TweakRadio, TweakText,
          Results, Journey, BigProof, MasonryApp, HowItWorks, WhyNotGrowing, Features, Creator, Testimonials,
          Comparison, Pricing, Guarantee, FAQ, FinalCTA, Footer, Marquee */

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "playful": 1,
  "accentHue": "pink",
  "videoUrl": "",
  "headline": "Viralize em 1 minuto.",
  "showUrgencyBar": true
}/*EDITMODE-END*/;

function AppDeferred() {
  const [tweaks, setTweaks] = useTweaks(TWEAK_DEFAULTS);

  React.useEffect(() => {
    document.documentElement.style.setProperty('--playful', tweaks.playful);
    const accentMap = { pink: '#FF2D7A', orange: '#FF6A2D', purple: '#8A2ABF', blue: '#2D7AFF' };
    document.documentElement.style.setProperty('--accent', accentMap[tweaks.accentHue] || '#FF2D7A');
  }, [tweaks.playful, tweaks.accentHue]);

  return (
    <>
      <Journey />
      <Marquee />
      <Results />
      <BigProof />
      <MasonryApp />
      <HowItWorks />
      <WhyNotGrowing />
      <Features />
      <Creator />
      <Testimonials />
      <Comparison />
      <Pricing />
      <Guarantee />
      <FAQ />
      <FinalCTA />

      <TweaksPanel title="Tweaks">
        <TweakSection label="Intensidade lúdica" />
        <TweakSlider
          label="Stickers"
          value={Math.round(tweaks.playful * 100)}
          onChange={v => setTweaks({ playful: v / 100 })}
          min={0} max={150} step={10} unit="%"
        />
        <TweakSection label="Cor de destaque" />
        <TweakRadio
          label="Accent"
          value={tweaks.accentHue}
          onChange={v => setTweaks({ accentHue: v })}
          options={['pink', 'orange', 'purple', 'blue']}
        />
        <TweakSection label="Conteúdo" />
        <TweakToggle
          label="Barra urgência"
          value={tweaks.showUrgencyBar}
          onChange={v => setTweaks({ showUrgencyBar: v })}
        />
        <TweakText
          label="URL VSL"
          value={tweaks.videoUrl}
          onChange={v => setTweaks({ videoUrl: v })}
          placeholder="https://..."
        />
      </TweaksPanel>
    </>
  );
}

/* Monta no #deferred-root criado pelo bundle crítico */
const deferredEl = document.getElementById('deferred-root');
if (deferredEl) {
  ReactDOM.createRoot(deferredEl).render(<AppDeferred />);
}
