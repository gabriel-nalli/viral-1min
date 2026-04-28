/* global React, ReactDOM, useTweaks, TweaksPanel, TweakSection, TweakSlider, TweakToggle, TweakRadio, TweakText,
          Nav, UrgencyBar, Hero, Results, Journey, BigProof, HowItWorks, WhyNotGrowing, Features, Creator, Testimonials,
          Comparison, Pricing, Guarantee, FAQ, FinalCTA, Footer, Marquee */

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "playful": 1,
  "accentHue": "pink",
  "videoUrl": "",
  "headline": "Viralize em 1 minuto.",
  "showUrgencyBar": true
}/*EDITMODE-END*/;

function App() {
  const [tweaks, setTweaks] = useTweaks(TWEAK_DEFAULTS);

  // apply CSS vars from tweaks
  React.useEffect(() => {
    document.documentElement.style.setProperty('--playful', tweaks.playful);

    const accentMap = {
      pink: '#FF2D7A',
      orange: '#FF6A2D',
      purple: '#8A2ABF',
      blue: '#2D7AFF'
    };
    document.documentElement.style.setProperty('--accent', accentMap[tweaks.accentHue] || '#FF2D7A');
  }, [tweaks.playful, tweaks.accentHue]);

  return (
    <>
      {tweaks.showUrgencyBar && <UrgencyBar />}
      <Hero videoUrl={tweaks.videoUrl} />
      <Journey />
      <Marquee />
      <Results />
      <BigProof />
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
      <Footer />

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

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
