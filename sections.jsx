/* global React, Icon, Btn, AlphaBtn, Logo, Marquee, TestiMarquee, Eyebrow */
const { useState: useStateS, useRef: useRefS } = React;

/* ===== NAV ===== */
function InvisibleStoryAnim() {
  return (
    <div style={{ position: 'relative', width: 120, height: 100, margin: '20px auto 10px', display: 'flex', justifyContent: 'center' }}>
      {/* Avatar */}
      <div style={{ position: 'absolute', bottom: 0, left: 15, width: 48, height: 48, zIndex: 2 }}>
        {/* Normal Avatar SVG */}
        <svg width="60" height="60" viewBox="0 0 100 100" style={{ position: 'absolute', bottom: 0, left: 0, animation: 'avatarNormal 4s infinite' }}>
          <path d="M 20 50 C 15 80, 85 80, 80 50 Z" fill="#F4D03F" />
          <circle cx="50" cy="50" r="30" fill="#FAD7A1" />
          <path d="M 20 50 C 20 10, 80 10, 80 50 C 60 40, 40 40, 20 50 Z" fill="#F4D03F" />
          <circle cx="38" cy="48" r="4" fill="#333" />
          <circle cx="62" cy="48" r="4" fill="#333" />
          <path d="M 40 62 Q 50 72 60 62" fill="transparent" stroke="#333" strokeWidth="3" strokeLinecap="round" />
        </svg>

        {/* Crying Avatar SVG */}
        <svg width="60" height="60" viewBox="0 0 100 100" style={{ position: 'absolute', bottom: 0, left: 0, animation: 'avatarCry 4s infinite', opacity: 0 }}>
          <path d="M 20 50 C 15 80, 85 80, 80 50 Z" fill="#F4D03F" />
          <circle cx="50" cy="50" r="30" fill="#FAD7A1" />
          <path d="M 20 50 C 20 10, 80 10, 80 50 C 60 40, 40 40, 20 50 Z" fill="#F4D03F" />
          <path d="M 32 48 Q 38 43 44 48" fill="transparent" stroke="#333" strokeWidth="3" strokeLinecap="round" />
          <path d="M 56 48 Q 62 43 68 48" fill="transparent" stroke="#333" strokeWidth="3" strokeLinecap="round" />
          <path d="M 40 68 Q 50 58 60 68" fill="transparent" stroke="#333" strokeWidth="3" strokeLinecap="round" />
          <path d="M 35 55 Q 35 65 39 65 Q 43 65 43 55 Z" fill="#3498DB" />
          <path d="M 57 55 Q 57 65 61 65 Q 65 65 65 55 Z" fill="#3498DB" />
        </svg>
      </div>

      {/* Phone */}
      <svg width="24" height="38" viewBox="0 0 40 60" style={{ position: 'absolute', bottom: 0, left: 62, zIndex: 3, animation: 'phoneShake 4s infinite', filter: 'drop-shadow(2px 4px 6px rgba(0,0,0,0.15))' }}>
        <rect x="2" y="2" width="36" height="56" rx="6" fill="#1A1A1A" />
        <rect x="4" y="6" width="32" height="48" rx="3" fill="#FFF4E6" />
        <rect x="10" y="14" width="20" height="20" rx="3" fill="#FF2D7A" opacity="0.8" />
        <rect x="10" y="38" width="20" height="4" rx="2" fill="#d0d0d0" />
      </svg>

      {/* Post */}
      <div style={{
        position: 'absolute', bottom: 20, left: 45, zIndex: 1,
        background: '#fff', border: '1.5px solid var(--ink)', borderRadius: 12, padding: '6px 8px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        fontSize: 12, fontWeight: 700, display: 'flex', alignItems: 'center', gap: 6,
        animation: 'postSequence 4s infinite'
      }}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--accent)' }}>
          <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <polyline points="21 15 16 10 5 21" />
        </svg>
        <span style={{ color: 'var(--ink)', display: 'flex', alignItems: 'center', gap: 4 }}>
          20 <Icon name="eye" size={10} color="var(--ink-soft)" />
        </span>
      </div>
    </div>
  );
}

function Nav() {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <Logo />
        <div className="nav-links">
          <a href="#como-funciona">Como funciona</a>
          <a href="#resultados">Resultados</a>
          <a href="#o-que-recebe">O que você recebe</a>
          <a href="#investimento">Investimento</a>
          <a href="#faq">FAQ</a>
        </div>
        <Btn variant="primary" icon="rocket" href="#investimento">Ativar agora</Btn>
      </div>
    </nav>);

}

/* ===== Urgency bar ===== */
function UrgencyBar() {
  const date = new Date().toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric' });
  return (
    <div style={{
      background: '#1a1a1a',
      color: '#fff',
      textAlign: 'center',
      padding: '14px 16px',
      fontFamily: 'var(--font-head)',
      fontWeight: 700,
      fontSize: 15,
      letterSpacing: '.12em',
      textTransform: 'uppercase',
      position: 'relative',
      zIndex: 50,
    }}>
      ESSE VÍDEO SAI DO AR HOJE, {date}
    </div>
  );
}

/* ===== HERO ===== */
function Hero({ videoUrl }) {
  const [playing, setPlaying] = useStateS(false);
  return (
    <header className="hero" style={{ paddingTop: 40 }}>
      <div className="hero-bg" />
      <div className="container">

        {/* VSL ON TOP */}
        <div className="vsl-wrap" id="vsl" style={{ maxWidth: 420, margin: '0 auto 10px', animation: 'fadeUp 1s ease-out forwards' }}>
          <div className="vsl-frame" style={{ transform: 'none', borderRadius: 24, padding: 6, background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.4)', boxShadow: '0 24px 64px rgba(0,0,0,0.12)' }}>
            <div className="vsl-aspect" style={{ borderRadius: 18, overflow: 'hidden' }}>
              {playing && videoUrl ?
                <iframe
                  src={videoUrl}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }} /> :
                <div className="vsl-placeholder" onClick={() => setPlaying(true)} style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, cursor: 'pointer' }}>
                  <div className="play" style={{ animation: 'pulse 2s infinite' }}>
                    <Icon name="play" size={34} color="#fff" />
                  </div>
                  <div className="cap" style={{ marginTop: 14 }}>// CLIQUE PARA ASSISTIR · VSL 04:37</div>
                </div>
              }
            </div>
          </div>

        </div>

        <div style={{ textAlign: 'center', marginBottom: 12, animation: 'fadeUp 1s ease-out 0.1s forwards', opacity: 0 }}>
          <AlphaBtn href="#investimento">Quero meu acesso agora</AlphaBtn>
          <p style={{
            marginTop: 18, fontSize: 16, color: 'var(--ink)',
            fontStyle: 'italic', fontWeight: 500, letterSpacing: '.01em',
            lineHeight: 1.5, maxWidth: 520, marginLeft: 'auto', marginRight: 'auto'
          }}>
            Você está a um clique de nunca mais ficar <strong style={{ color: 'var(--accent)', fontStyle: 'normal', fontWeight: 800 }}>invisível no Instagram</strong>
          </p>
        </div>

        <div className="hero-grid" style={{
          gridTemplateColumns: '1fr',
          textAlign: 'center',
          marginTop: 72,
          paddingTop: 56,
          borderTop: '1px solid rgba(26,26,26,0.08)',
        }}>
          <div className="hero-copy" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', animation: 'fadeUp 1s ease-out 0.2s forwards', opacity: 0 }}>
            <div className="glitch-badge">
              <div className="glitch-badge__glass" />
              <div className="glitch-badge__scanline" />
              <span className="glitch-badge__text" data-text="MÉTODO SECRETO DE VIRALIZAÇÃO">MÉTODO SECRETO DE VIRALIZAÇÃO</span>
            </div>
            <h1 style={{ marginTop: 24, maxWidth: 800 }}>
              Seja viral em
              <div style={{ margin: '8px 0 10px 0' }}>
                <span className="highlight-lime selected-text--lime" style={{ display: 'inline-flex', alignItems: 'center' }}>
                  <span className="sel-dot tl"></span><DigitalTyper words={["60 segundos", "1 minuto"]} /><span className="sel-dot br"></span>
                </span>
              </div>
              <span style={{ display: 'inline-block', marginTop: '-4px' }}>
                sem <span className="highlight-pink">edição</span> ou super <span className="highlight-pink">produção</span>
              </span>
            </h1>
            <p className="hero-sub" style={{ maxWidth: 640 }}>
              O Viral em 1 Minuto coloca estratégia, IA, roteiros, organização e acompanhamento em um só lugar para você crescer, vender mais e virar referência no seu nicho.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginTop: 26, textAlign: 'left', maxWidth: 640 }}>
              {[
                "Sem social media.",
                "Sem IA por fora.",
                "Sem mil ferramentas.",
                "Sem precisar criar nada do zero"
              ].map((text, i) => {
                const parts = text.split(/^Sem /);
                const isSem = text.startsWith("Sem ");
                return (
                  <GlassCard 
                    key={i} 
                    text={
                      isSem ? (
                        <>
                          <span className="highlight-pink" style={{ 
                            display: 'inline-block', 
                            fontWeight: 800, 
                            textTransform: 'uppercase', 
                            fontSize: '0.9em', 
                            letterSpacing: '0.5px' 
                          }}>
                            Sem
                          </span>{' '}
                          {parts[1]}
                        </>
                      ) : text
                    } 
                    index={i} 
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </header>);
}

/* ===== Por que você não cresce ===== */
function WhyNotGrowing() {
  return (
    <section className="sec" id="pq-nao-cresce">
      <div className="container">
        <div className="sec-head">
          <div className="glass-diag-pill">
            <span className="glass-diag-sheen" />
            <svg className="glass-diag-ecg" viewBox="0 0 120 20" preserveAspectRatio="none">
              <path d="M 0 10 L 22 10 L 28 3 L 34 17 L 40 10 L 62 10 L 68 6 L 74 14 L 80 10 L 120 10"
                fill="none" stroke="rgba(255,45,122,0.28)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path className="glass-diag-ecg-pulse" d="M 0 10 L 22 10 L 28 3 L 34 17 L 40 10 L 62 10 L 68 6 L 74 14 L 80 10 L 120 10"
                fill="none" stroke="#FF2D7A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="glass-diag-label">Diagnóstico</span>
          </div>
          <h2>PORQUE VOCÊ NÃO CRESCE</h2>
          <p>Seu perfil pode estar preso em um desses dois modos agora mesmo.</p>
        </div>

        {/* SVG global defs compartilhadas */}
        <svg width="0" height="0" style={{ position: 'absolute' }}>
          <defs>
            <g id="female-side">
              <g transform="translate(-40, -90)">
                <g className="girl-leg-r"><rect x="39" y="60" width="7" height="32" fill="#333" rx="3.5" /><rect x="35" y="88" width="11" height="6" fill="#333" rx="2" /></g>
                <g className="girl-leg-l"><rect x="31" y="60" width="7" height="32" fill="#1a1a1a" rx="3.5" /><rect x="27" y="88" width="11" height="6" fill="#1a1a1a" rx="2" /></g>
                <g className="girl-body">
                  <path d="M 38 42 L 25 50 L 15 45" fill="none" stroke="#333" strokeWidth="4" strokeLinecap="round" />
                  <path d="M 32 35 Q 40 32 45 35 L 44 65 L 30 65 Z" fill="#1a1a1a" stroke="#1a1a1a" strokeWidth="2" />
                  <g className="girl-arms">
                    <path d="M 35 40 L 18 45 L 8 38" fill="none" stroke="#1a1a1a" strokeWidth="5" strokeLinecap="round" />
                    <rect x="0" y="28" width="6" height="15" rx="1.5" fill="#1a1a1a" transform="rotate(-20 0 28)" />
                    <rect x="1" y="29" width="4" height="13" rx="0.5" fill="#cfff04" transform="rotate(-20 0 28)" />
                  </g>
                </g>
                <g className="girl-head">
                  <path d="M 45 18 Q 60 15 50 40 Q 43 32 46 22 Z" fill="#1a1a1a" />
                  <circle cx="38" cy="18" r="13" fill="#1a1a1a" />
                  <path d="M 27 15 L 24 18 L 27 21" fill="#1a1a1a" />
                </g>
              </g>
            </g>
            <g id="tiny-person">
              <circle cx="0" cy="-10" r="8" fill="#1a1a1a" />
              <path d="M-12 5 Q0 -6 12 5 L14 18 L-14 18 Z" fill="#1a1a1a" />
            </g>
            <path id="heart-icon-small" d="M 0 3 A 2.5 2.5 0 0 1 5 3 Q 5 6 0 9 Q -5 6 -5 3 A 2.5 2.5 0 0 1 0 3 Z" fill="#ff1493" />
          </defs>
        </svg>

        <div className="ba-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: 32,
          alignItems: 'stretch',
          marginBottom: 60
        }}>

          {/* CARD MODO INVISÍVEL */}
          <div className="ba-card before glass-mega" style={{
            position: 'relative',
            borderRadius: 32,
            padding: '40px 32px',
            display: 'flex',
            flexDirection: 'column',
            border: '1.5px solid rgba(255, 255, 255, 0.85)',
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.55) 0%, rgba(222, 226, 232, 0.35) 55%, rgba(238, 241, 246, 0.55) 100%)',
            backdropFilter: 'blur(42px) saturate(220%) brightness(1.05)',
            WebkitBackdropFilter: 'blur(42px) saturate(220%) brightness(1.05)',
            boxShadow: '0 30px 70px -15px rgba(26, 26, 26, 0.22), 0 12px 28px -6px rgba(26, 26, 26, 0.12), 0 0 0 1px rgba(255, 255, 255, 0.4), inset 0 2px 0 rgba(255, 255, 255, 1), inset 0 48px 60px -40px rgba(255, 255, 255, 1), inset 0 20px 30px -25px rgba(255, 255, 255, 0.9), inset 0 -15px 30px -20px rgba(26, 26, 26, 0.08), inset 0 0 0 1px rgba(255, 255, 255, 0.5)',
            isolation: 'isolate'
          }}>
            <div style={{ position: 'absolute', top: -14, left: 28, background: 'linear-gradient(135deg, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.2) 45%, rgba(255,255,255,0.45) 100%)', color: '#1a1a1a', border: '1.5px solid rgba(255,255,255,0.7)', borderRadius: 999, padding: '8px 20px', fontWeight: 800, fontSize: 13, letterSpacing: 0.3, backdropFilter: 'blur(40px) saturate(220%) brightness(1.08)', WebkitBackdropFilter: 'blur(40px) saturate(220%) brightness(1.08)', boxShadow: '0 20px 40px -10px rgba(26,26,26,0.22), 0 8px 20px -4px rgba(26,26,26,0.12), 0 0 0 1px rgba(255,255,255,0.35), inset 0 2px 2px rgba(255,255,255,1), inset 0 -1px 1px rgba(0,0,0,0.08), inset 0 8px 14px -8px rgba(255,255,255,0.95), inset 0 -8px 14px -8px rgba(26,26,26,0.06)', zIndex: 10 }}>MODO · INVISÍVEL</div>
            <div style={{ width: '100%', height: 176, display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: 16 }}>
              <svg viewBox="0 0 240 180" style={{ width: '100%', maxWidth: 280, height: '100%', overflow: 'visible' }}>
                <g className="anim-person-idle">
                  <g transform="translate(20, 60) scale(0.9)"><use href="#tiny-person" /></g>
                  <g transform="translate(45, 25) scale(0.85)"><use href="#tiny-person" /></g>
                  <g transform="translate(45, 95) scale(0.85)"><use href="#tiny-person" /></g>
                  <g transform="translate(75, 35) scale(0.9)"><use href="#tiny-person" /></g>
                  <g transform="translate(75, 85) scale(0.9)"><use href="#tiny-person" /></g>
                </g>
                <g className="anim-barrier-x">
                  <line x1="120" y1="20" x2="120" y2="100" stroke="#1a1a1a" strokeWidth="4" strokeDasharray="10 5" strokeLinecap="round" />
                  <circle cx="120" cy="60" r="22" fill="#fca5a5" opacity="0.8" />
                  <path d="M110 50 L130 70 M130 50 L110 70" fill="none" stroke="#dc2626" strokeWidth="5" strokeLinecap="round" />
                </g>
                <g className="anim-post-fail">
                  <rect x="-10" y="-7" width="20" height="14" rx="2" fill="#fff" stroke="#1a1a1a" strokeWidth="2.5" />
                  <circle cx="-3" cy="-1" r="2" fill="#1a1a1a" /><path d="M-10 7 L-5 2 L2 7" fill="none" stroke="#1a1a1a" strokeWidth="2" />
                </g>
                <ellipse cx="195" cy="150" rx="20" ry="4" fill="#000" className="anim-shadow" />
                <g className="anim-float"><use href="#female-side" x="215" y="130" /></g>
              </svg>
            </div>
            <h3 style={{ fontSize: 28, fontWeight: 900, color: '#1a1a1a', marginBottom: 20, lineHeight: 1.2 }}>Você posta. Ninguém vê.</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
              <li style={{ display: 'flex', gap: 10 }}><span className="mark"><Icon name="x" size={12} /></span><span>Algoritmo não entrega para desconhecidos</span></li>
              <li style={{ display: 'flex', gap: 10 }}><span className="mark"><Icon name="x" size={12} /></span><span>Só seus seguidores atuais veem (e poucos)</span></li>
              <li style={{ display: 'flex', gap: 10 }}><span className="mark"><Icon name="x" size={12} /></span><span>Esforço alto, resultado zero</span></li>
              <li style={{ display: 'flex', gap: 10 }}><span className="mark"><Icon name="x" size={12} /></span><span>Feed morto. 0 a 5 likes por post</span></li>
              <li style={{ display: 'flex', gap: 10 }}><span className="mark"><Icon name="x" size={12} /></span><span>Algoritmo "odiava" o perfil</span></li>
            </ul>
          </div>

          {/* CARD MODO VIRAL */}
          <div className="ba-card after glass-mega" style={{
            position: 'relative',
            borderRadius: 32,
            padding: '40px 32px',
            display: 'flex',
            flexDirection: 'column',
            border: '1.5px solid rgba(255, 255, 255, 0.75)',
            background: 'linear-gradient(135deg, rgba(215, 250, 40, 0.95) 0%, rgba(180, 225, 0, 0.88) 55%, rgba(200, 240, 0, 0.95) 100%)',
            backdropFilter: 'blur(42px) saturate(280%) brightness(1.05)',
            WebkitBackdropFilter: 'blur(42px) saturate(280%) brightness(1.05)',
            boxShadow: '0 30px 70px -12px rgba(160, 200, 0, 0.65), 0 12px 28px -5px rgba(130, 170, 0, 0.45), 0 0 0 1px rgba(255, 255, 255, 0.4), inset 0 2px 0 rgba(255, 255, 255, 0.8), inset 0 40px 50px -40px rgba(255, 255, 255, 0.45), inset 0 16px 24px -20px rgba(255, 255, 255, 0.3), inset 0 -15px 30px -20px rgba(80, 120, 0, 0.3), inset 0 0 0 1px rgba(255, 255, 255, 0.4)',
            isolation: 'isolate'
          }}>
            <div style={{ position: 'absolute', top: -14, left: 28, background: 'linear-gradient(135deg, rgba(175, 215, 0, 1) 0%, rgba(140, 180, 0, 0.95) 55%, rgba(160, 200, 0, 1) 100%)', color: '#1a1a1a', border: '1.5px solid rgba(255,255,255,0.65)', borderRadius: 999, padding: '8px 20px', fontWeight: 800, fontSize: 13, letterSpacing: 0.3, backdropFilter: 'blur(40px) saturate(260%)', WebkitBackdropFilter: 'blur(40px) saturate(260%)', boxShadow: '0 20px 40px -8px rgba(110, 150, 0, 0.55), 0 8px 20px -4px rgba(90, 130, 0, 0.38), 0 0 0 1px rgba(255,255,255,0.3), inset 0 2px 2px rgba(255,255,255,0.85), inset 0 -1px 1px rgba(0,0,0,0.16), inset 0 8px 14px -8px rgba(255,255,255,0.75), inset 0 -8px 14px -8px rgba(70,110,0,0.25)', zIndex: 10 }}>MODO · VIRAL</div>
            <div style={{ width: '100%', height: 176, display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: 16 }}>
              <svg viewBox="0 0 240 180" style={{ width: '100%', maxWidth: 280, height: '100%', overflow: 'visible' }}>
                <path className="path-line-viral" d="M 110 60 C 80 40, 50 10, 20 20" />
                <path className="data-pulse dp-1" d="M 110 60 C 80 40, 50 10, 20 20" />
                <path className="path-line-viral" d="M 110 60 C 70 70, 40 50, 10 70" />
                <path className="data-pulse dp-2" d="M 110 60 C 70 70, 40 50, 10 70" />
                <path className="path-line-viral" d="M 110 60 C 80 80, 50 120, 20 110" />
                <path className="data-pulse dp-3" d="M 110 60 C 80 80, 50 120, 20 110" />
                <path className="path-line-viral" d="M 110 60 C 90 45, 80 40, 60 40" />
                <path className="data-pulse dp-2" d="M 110 60 C 90 45, 80 40, 60 40" />
                <path className="path-line-viral" d="M 110 60 C 90 75, 85 80, 75 85" />
                <path className="data-pulse dp-1" d="M 110 60 C 90 75, 85 80, 75 85" />
                <g className="anim-algo-hub">
                  <circle cx="110" cy="60" r="16" fill="#1a1a1a" />
                  <path d="M 104 60 C 104 56, 109 56, 110 60 C 111 64, 116 64, 116 60 Z" stroke="#cfff04" strokeWidth="2.5" fill="none" />
                  <circle cx="110" cy="60" r="22" fill="none" stroke="#1a1a1a" strokeWidth="2.5" strokeDasharray="10 7" className="algo-spin" />
                </g>
                <g className="anim-post-algo">
                  <rect x="-10" y="-7" width="20" height="14" rx="2" fill="#fff" stroke="#1a1a1a" strokeWidth="2.5" />
                  <circle cx="-3" cy="-1" r="2" fill="#1a1a1a" /><path d="M-10 7 L-5 2 L2 7" fill="none" stroke="#1a1a1a" strokeWidth="2" />
                </g>
                <g transform="translate(20, 20) scale(0.85)"><g className="network-node"><use href="#tiny-person" /><use href="#heart-icon-small" x="-5" y="-14" className="anim-heart" /></g></g>
                <g transform="translate(10, 70) scale(0.9)"><g className="network-node"><use href="#tiny-person" /><use href="#heart-icon-small" x="0" y="-15" className="anim-heart" /></g></g>
                <g transform="translate(20, 110) scale(0.95)"><g className="network-node"><use href="#tiny-person" /><use href="#heart-icon-small" x="5" y="-12" className="anim-heart" /></g></g>
                <g transform="translate(60, 40) scale(0.75)"><g className="network-node"><use href="#tiny-person" /><use href="#heart-icon-small" x="0" y="-14" className="anim-heart" /></g></g>
                <g transform="translate(75, 85) scale(0.8)"><g className="network-node"><use href="#tiny-person" /><use href="#heart-icon-small" x="-4" y="-15" className="anim-heart" /></g></g>
                <ellipse cx="195" cy="150" rx="20" ry="4" fill="#000" className="anim-shadow" />
                <g className="anim-float"><use href="#female-side" x="215" y="130" /></g>
              </svg>
            </div>
            <h3 style={{ fontSize: 28, fontWeight: 900, color: '#1a1a1a', marginBottom: 20, lineHeight: 1.2 }}>Você posta. O algoritmo espalha.</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
              <li style={{ display: 'flex', gap: 10 }}><span className="mark" style={{ background: '#1a1a1a' }}><Icon name="check" size={12} /></span><span>Entrega para desconhecidos — crescimento orgânico</span></li>
              <li style={{ display: 'flex', gap: 10 }}><span className="mark" style={{ background: '#1a1a1a' }}><Icon name="check" size={12} /></span><span>Esforço mínimo, resultado exponencial</span></li>
              <li style={{ display: 'flex', gap: 10 }}><span className="mark" style={{ background: '#1a1a1a' }}><Icon name="check" size={12} /></span><span>Autoridade construída em semanas</span></li>
              <li style={{ display: 'flex', gap: 10 }}><span className="mark" style={{ background: '#1a1a1a' }}><Icon name="check" size={12} /></span><span>Vídeos com 100K+ views virou rotina</span></li>
              <li style={{ display: 'flex', gap: 10 }}><span className="mark" style={{ background: '#1a1a1a' }}><Icon name="check" size={12} /></span><span>Modo Recomendação ativado</span></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ===== Resultados Reais (Depoimentos) ===== */
function ResultsCarousel({ children, delay = 0 }) {
  const scrollRef = React.useRef(null);

  React.useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    
    let direction = 1;
    let interval;

    const startAutoScroll = () => {
      interval = setInterval(() => {
        if (!el) return;
        const maxScroll = el.scrollWidth - el.clientWidth;
        
        if (el.scrollLeft >= maxScroll - 10) {
          direction = -1;
        } else if (el.scrollLeft <= 10) {
          direction = 1;
        }
        
        el.scrollBy({ left: direction * (el.clientWidth * 0.85), behavior: 'smooth' });
      }, 5000);
    };

    const initialTimeout = setTimeout(startAutoScroll, delay);

    const pause = () => clearInterval(interval);
    
    el.addEventListener('touchstart', pause, { passive: true });
    el.addEventListener('mousedown', pause, { passive: true });

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
      el.removeEventListener('touchstart', pause);
      el.removeEventListener('mousedown', pause);
    };
  }, [delay]);

  return (
    <div 
      ref={scrollRef}
      style={{ 
        display: 'flex', 
        gap: 24, 
        overflowX: 'auto', 
        padding: '32px 24px 32px 24px', 
        scrollSnapType: 'x mandatory',
        WebkitOverflowScrolling: 'touch',
        scrollbarWidth: 'none',
        msOverflowStyle: 'none'
      }}>
      <div style={{ display: 'flex', gap: 24, margin: '0 auto' }}>
        {children}
      </div>
    </div>
  );
}

function Results() {
  return (
    <section className="sec" id="resultados" style={{ paddingBottom: 60, overflow: 'hidden' }}>
      <div className="container">
        <div className="sec-head">
          <div className="lime-glass-btn">
            <div className="lime-glass-btn__sheen" />
            <span>↗</span>
            <span>RESULTADOS REAIS</span>
          </div>
          <h2>Esses perfis eram invisíveis.<br /> Hoje <span className="highlight-pink selected-text" style={{ display: 'inline-flex', alignItems: 'center' }}><span className="sel-dot tl"></span><DigitalTyper words={["são virais.", "são vistos.", "são lembrados."]} initialIndex={0} /><span className="sel-dot br"></span></span></h2>
          <p>Usaram o Viral em 1 minuto. Sem equipe de filmagem. Sem pagar anúncio. Sem virar blogueira de trend.</p>
        </div>

        <div className="sec-head" style={{ marginTop: 60, marginBottom: 40 }}>
          <Eyebrow icon="users">DEPOIMENTOS MOSTRANDO O PERFIL DE ALUNAS ANTES E DEPOIS</Eyebrow>
        </div>
      </div>

      {/* Carrossel 1: Josi */}
      <ResultsCarousel delay={0}>
        <div style={{ flexShrink: 0, width: '85vw', maxWidth: 400, scrollSnapAlign: 'center', background: '#fff', borderRadius: 24, padding: 24, boxShadow: '0 20px 40px rgba(0,0,0,0.05)', position: 'relative', border: '1px solid rgba(0,0,0,0.05)' }}>
          <div style={{ position: 'absolute', top: -16, left: 24, background: '#1a1a1a', color: '#fff', padding: '6px 16px', borderRadius: 999, fontWeight: 800, fontSize: 13, letterSpacing: 1 }}>ANTES</div>
          <div style={{ borderRadius: 16, overflow: 'hidden', border: '1px solid rgba(0,0,0,0.05)', backgroundColor: '#f0f0f0' }}>
            <img src="assets/antes-cilios.webp" alt="Perfil Antes" loading="lazy" style={{ width: '100%', display: 'block', objectFit: 'contain' }} />
          </div>
          <div style={{ marginTop: 24, textAlign: 'center' }}>
            <h4 style={{ margin: 0, fontSize: 20, fontWeight: 800, color: 'var(--ink)' }}>6.285 Seguidores</h4>
            <p style={{ margin: 0, color: 'var(--ink-soft)', fontSize: 14, marginTop: 4 }}>Josi Andrade | Cílios & Cursos</p>
          </div>
        </div>
        <div style={{ flexShrink: 0, width: '85vw', maxWidth: 400, scrollSnapAlign: 'center', background: '#fff', borderRadius: 24, padding: 24, boxShadow: '0 32px 64px rgba(255,45,122,0.15)', position: 'relative', border: '2px solid var(--accent)' }}>
          <div style={{ position: 'absolute', top: -16, left: 24, background: 'var(--accent)', color: '#fff', padding: '6px 16px', borderRadius: 999, fontWeight: 800, fontSize: 13, letterSpacing: 1, boxShadow: '0 8px 16px rgba(255,45,122,0.3)' }}>DEPOIS (COM O MÉTODO)</div>
          <div style={{ borderRadius: 16, overflow: 'hidden', border: '1px solid rgba(0,0,0,0.05)', backgroundColor: '#f0f0f0' }}>
            <img src="assets/depois-cilios.webp" alt="Perfil Depois Josi" loading="lazy" style={{ width: '100%', display: 'block', objectFit: 'contain' }} />
          </div>
          <div style={{ marginTop: 24, textAlign: 'center' }}>
            <h4 style={{ margin: 0, fontSize: 26, fontWeight: 900, color: 'var(--accent)' }}>12,9 mil Seguidores</h4>
            <p style={{ margin: 0, color: 'var(--ink-soft)', fontSize: 14, marginTop: 4 }}>Josiana Academy</p>
          </div>
        </div>
      </ResultsCarousel>

      {/* Carrossel 2: Dayane */}
      <ResultsCarousel delay={1500}>
        <div style={{ flexShrink: 0, width: '85vw', maxWidth: 400, scrollSnapAlign: 'center', background: '#fff', borderRadius: 24, padding: 24, boxShadow: '0 20px 40px rgba(0,0,0,0.05)', position: 'relative', border: '1px solid rgba(0,0,0,0.05)' }}>
          <div style={{ position: 'absolute', top: -16, left: 24, background: '#1a1a1a', color: '#fff', padding: '6px 16px', borderRadius: 999, fontWeight: 800, fontSize: 13, letterSpacing: 1 }}>ANTES</div>
          <div style={{ borderRadius: 16, overflow: 'hidden', border: '1px solid rgba(0,0,0,0.05)', backgroundColor: '#f0f0f0' }}>
            <img src="assets/antes-dayane.webp" alt="Perfil Antes Dayane" loading="lazy" style={{ width: '100%', display: 'block', objectFit: 'contain' }} />
          </div>
          <div style={{ marginTop: 24, textAlign: 'center' }}>
            <h4 style={{ margin: 0, fontSize: 20, fontWeight: 800, color: 'var(--ink)' }}>3.816 Seguidores</h4>
            <p style={{ margin: 0, color: 'var(--ink-soft)', fontSize: 14, marginTop: 4 }}>Dayane Oliveira</p>
          </div>
        </div>
        <div style={{ flexShrink: 0, width: '85vw', maxWidth: 400, scrollSnapAlign: 'center', background: '#fff', borderRadius: 24, padding: 24, boxShadow: '0 32px 64px rgba(255,45,122,0.15)', position: 'relative', border: '2px solid var(--accent)' }}>
          <div style={{ position: 'absolute', top: -16, left: 24, background: 'var(--accent)', color: '#fff', padding: '6px 16px', borderRadius: 999, fontWeight: 800, fontSize: 13, letterSpacing: 1, boxShadow: '0 8px 16px rgba(255,45,122,0.3)' }}>DEPOIS (COM O MÉTODO)</div>
          <div style={{ borderRadius: 16, overflow: 'hidden', border: '1px solid rgba(0,0,0,0.05)', backgroundColor: '#f0f0f0' }}>
            <img src="assets/depois-dayane.webp" alt="Perfil Depois Dayane" loading="lazy" style={{ width: '100%', display: 'block', objectFit: 'contain' }} />
          </div>
          <div style={{ marginTop: 24, textAlign: 'center' }}>
            <h4 style={{ margin: 0, fontSize: 26, fontWeight: 900, color: 'var(--accent)' }}>26,8 mil Seguidores</h4>
            <p style={{ margin: 0, color: 'var(--ink-soft)', fontSize: 14, marginTop: 4 }}>Cílios & Cursos | Jardim Ângela</p>
          </div>
        </div>
      </ResultsCarousel>

      {/* Carrossel 3: Karolin */}
      <ResultsCarousel delay={3000}>
        <div style={{ flexShrink: 0, width: '85vw', maxWidth: 400, scrollSnapAlign: 'center', background: '#fff', borderRadius: 24, padding: 24, boxShadow: '0 20px 40px rgba(0,0,0,0.05)', position: 'relative', border: '1px solid rgba(0,0,0,0.05)' }}>
          <div style={{ position: 'absolute', top: -16, left: 24, background: '#1a1a1a', color: '#fff', padding: '6px 16px', borderRadius: 999, fontWeight: 800, fontSize: 13, letterSpacing: 1 }}>ANTES</div>
          <div style={{ borderRadius: 16, overflow: 'hidden', border: '1px solid rgba(0,0,0,0.05)', backgroundColor: '#f0f0f0' }}>
            <img src="assets/karolin-antes.webp" alt="Perfil Antes Karolin" loading="lazy" style={{ width: '100%', display: 'block', objectFit: 'contain' }} />
          </div>
          <div style={{ marginTop: 24, textAlign: 'center' }}>
            <h4 style={{ margin: 0, fontSize: 20, fontWeight: 800, color: 'var(--ink)' }}>1.002 Seguidores</h4>
            <p style={{ margin: 0, color: 'var(--ink-soft)', fontSize: 14, marginTop: 4 }}>Karollin Farias | Instrutora Nail</p>
          </div>
        </div>
        <div style={{ flexShrink: 0, width: '85vw', maxWidth: 400, scrollSnapAlign: 'center', background: '#fff', borderRadius: 24, padding: 24, boxShadow: '0 32px 64px rgba(255,45,122,0.15)', position: 'relative', border: '2px solid var(--accent)' }}>
          <div style={{ position: 'absolute', top: -16, left: 24, background: 'var(--accent)', color: '#fff', padding: '6px 16px', borderRadius: 999, fontWeight: 800, fontSize: 13, letterSpacing: 1, boxShadow: '0 8px 16px rgba(255,45,122,0.3)' }}>DEPOIS (COM O MÉTODO)</div>
          <div style={{ borderRadius: 16, overflow: 'hidden', border: '1px solid rgba(0,0,0,0.05)', backgroundColor: '#f0f0f0' }}>
            <img src="assets/karollin-depois.webp" alt="Perfil Depois Karolin" loading="lazy" style={{ width: '100%', display: 'block', objectFit: 'contain' }} />
          </div>
          <div style={{ marginTop: 24, textAlign: 'center' }}>
            <h4 style={{ margin: 0, fontSize: 26, fontWeight: 900, color: 'var(--accent)' }}>14,8 mil Seguidores</h4>
            <p style={{ margin: 0, color: 'var(--ink-soft)', fontSize: 14, marginTop: 4 }}>Karollin Farias | Instrutora Nail</p>
          </div>
        </div>
      </ResultsCarousel>

      {/* Carrossel 4: Carolina */}
      <ResultsCarousel delay={4500}>
        <div style={{ flexShrink: 0, width: '85vw', maxWidth: 400, scrollSnapAlign: 'center', background: '#fff', borderRadius: 24, padding: 24, boxShadow: '0 20px 40px rgba(0,0,0,0.05)', position: 'relative', border: '1px solid rgba(0,0,0,0.05)' }}>
          <div style={{ position: 'absolute', top: -16, left: 24, background: '#1a1a1a', color: '#fff', padding: '6px 16px', borderRadius: 999, fontWeight: 800, fontSize: 13, letterSpacing: 1 }}>ANTES</div>
          <div style={{ borderRadius: 16, overflow: 'hidden', border: '1px solid rgba(0,0,0,0.05)', backgroundColor: '#f0f0f0' }}>
            <img src="assets/carolina-antes.webp" alt="Perfil Antes Carolina" loading="lazy" style={{ width: '100%', display: 'block', objectFit: 'contain' }} />
          </div>
          <div style={{ marginTop: 24, textAlign: 'center' }}>
            <h4 style={{ margin: 0, fontSize: 20, fontWeight: 800, color: 'var(--ink)' }}>2.340 Seguidores</h4>
            <p style={{ margin: 0, color: 'var(--ink-soft)', fontSize: 14, marginTop: 4 }}>Carolina</p>
          </div>
        </div>
        <div style={{ flexShrink: 0, width: '85vw', maxWidth: 400, scrollSnapAlign: 'center', background: '#fff', borderRadius: 24, padding: 24, boxShadow: '0 32px 64px rgba(255,45,122,0.15)', position: 'relative', border: '2px solid var(--accent)' }}>
          <div style={{ position: 'absolute', top: -16, left: 24, background: 'var(--accent)', color: '#fff', padding: '6px 16px', borderRadius: 999, fontWeight: 800, fontSize: 13, letterSpacing: 1, boxShadow: '0 8px 16px rgba(255,45,122,0.3)' }}>DEPOIS (COM O MÉTODO)</div>
          <div style={{ borderRadius: 16, overflow: 'hidden', border: '1px solid rgba(0,0,0,0.05)', backgroundColor: '#f0f0f0' }}>
            <img src="assets/carolina-depois.webp" alt="Perfil Depois Carolina" loading="lazy" style={{ width: '100%', display: 'block', objectFit: 'contain' }} />
          </div>
          <div style={{ marginTop: 24, textAlign: 'center' }}>
            <h4 style={{ margin: 0, fontSize: 26, fontWeight: 900, color: 'var(--accent)' }}>21,5 mil Seguidores</h4>
            <p style={{ margin: 0, color: 'var(--ink-soft)', fontSize: 14, marginTop: 4 }}>Carolina</p>
          </div>
        </div>
      </ResultsCarousel>

    </section>
  );
}




/* ===== Big proof number + como funciona ===== */
function HowItWorks() {
  const wrapRef = React.useRef(null);
  const svgRef = React.useRef(null);
  const pathLeftBgRef = React.useRef(null);
  const pathLeftFgRef = React.useRef(null);
  const pathRightBgRef = React.useRef(null);
  const pathRightFgRef = React.useRef(null);
  const pathMainBgRef = React.useRef(null);
  const pathMainFgRef = React.useRef(null);
  const dotLeftRef = React.useRef(null);
  const dotRightRef = React.useRef(null);
  const dotMainRef = React.useRef(null);

  React.useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;
    const svg = svgRef.current;
    const pLeftBg = pathLeftBgRef.current;
    const pLeftFg = pathLeftFgRef.current;
    const pRightBg = pathRightBgRef.current;
    const pRightFg = pathRightFgRef.current;
    const pMainBg = pathMainBgRef.current;
    const pMainFg = pathMainFgRef.current;
    const dLeft = dotLeftRef.current;
    const dRight = dotRightRef.current;
    const dMain = dotMainRef.current;

    let lenLeft = 0, lenRight = 0, lenMain = 0;
    let samplesLeft = null, samplesRight = null, samplesMain = null;
    let rafId = null;
    let isVisible = false;

    let targetP = 0;
    let currentP = 0;
    let isRunning = false;

    let cachedRows = null;
    let cachedSplitRow = null;
    let allActivated = false;

    const SAMPLES = 300;

    const getOffset = (el, wrapRect) => {
      const r = el.getBoundingClientRect();
      return {
        x: r.left + r.width / 2 - wrapRect.left,
        y: r.top + r.height / 2 - wrapRect.top
      };
    };

    const samplePath = (path, length) => {
      if (length <= 0) return null;
      const arr = new Float32Array((SAMPLES + 1) * 2);
      for (let i = 0; i <= SAMPLES; i++) {
        const pt = path.getPointAtLength((length * i) / SAMPLES);
        arr[i * 2] = pt.x;
        arr[i * 2 + 1] = pt.y;
      }
      return arr;
    };

    const buildSnake = (pts) => {
      let d = 'M ' + pts[0].x.toFixed(1) + ' ' + pts[0].y.toFixed(1);
      for (let i = 1; i < pts.length; i++) {
        const p0 = pts[i - 1];
        const p1 = pts[i];
        const midY = (p0.y + p1.y) / 2;
        d += ' C ' + p0.x.toFixed(1) + ' ' + midY.toFixed(1) +
          ', ' + p1.x.toFixed(1) + ' ' + midY.toFixed(1) +
          ', ' + p1.x.toFixed(1) + ' ' + p1.y.toFixed(1);
      }
      return d;
    };

    const assignPath = (bg, fg, d) => {
      bg.setAttribute('d', d);
      fg.setAttribute('d', d);
      const len = fg.getTotalLength();
      fg.style.strokeDasharray = String(len);
      fg.style.strokeDashoffset = String(len);
      return len;
    };

    const buildPaths = () => {
      const wrapRect = wrap.getBoundingClientRect();
      const w = wrapRect.width;
      const h = wrap.offsetHeight;
      if (w === 0 || h === 0) return;

      const mainOff = Math.min(w * 0.22, 180);

      svg.setAttribute('viewBox', `0 0 ${w} ${h}`);

      const leftCard = wrap.querySelector('[data-branch="left"]');
      const rightCard = wrap.querySelector('[data-branch="right"]');
      const mergedNodes = Array.from(wrap.querySelectorAll('.tl-row .tl-node'));
      if (!leftCard || !rightCard || mergedNodes.length === 0) return;

      const pLeft = getOffset(leftCard, wrapRect);
      const pRight = getOffset(rightCard, wrapRect);
      const pMerge = getOffset(mergedNodes[0], wrapRect);

      const startX = w / 2;

      const midY1L = pLeft.y / 2;
      const midY2L = (pLeft.y + pMerge.y) / 2;
      const dLeftPath =
        `M ${startX.toFixed(1)} 0` +
        ` C ${startX.toFixed(1)} ${midY1L.toFixed(1)}, ${pLeft.x.toFixed(1)} ${midY1L.toFixed(1)}, ${pLeft.x.toFixed(1)} ${pLeft.y.toFixed(1)}` +
        ` C ${pLeft.x.toFixed(1)} ${midY2L.toFixed(1)}, ${pMerge.x.toFixed(1)} ${midY2L.toFixed(1)}, ${pMerge.x.toFixed(1)} ${pMerge.y.toFixed(1)}`;

      const midY1R = pRight.y / 2;
      const midY2R = (pRight.y + pMerge.y) / 2;
      const dRightPath =
        `M ${startX.toFixed(1)} 0` +
        ` C ${startX.toFixed(1)} ${midY1R.toFixed(1)}, ${pRight.x.toFixed(1)} ${midY1R.toFixed(1)}, ${pRight.x.toFixed(1)} ${pRight.y.toFixed(1)}` +
        ` C ${pRight.x.toFixed(1)} ${midY2R.toFixed(1)}, ${pMerge.x.toFixed(1)} ${midY2R.toFixed(1)}, ${pMerge.x.toFixed(1)} ${pMerge.y.toFixed(1)}`;

      lenLeft = assignPath(pLeftBg, pLeftFg, dLeftPath);
      lenRight = assignPath(pRightBg, pRightFg, dRightPath);
      samplesLeft = samplePath(pLeftBg, lenLeft);
      samplesRight = samplePath(pRightBg, lenRight);

      const mainPts = [{ x: pMerge.x, y: pMerge.y }];

      for (let i = 1; i < mergedNodes.length; i++) {
        const node = mergedNodes[i];
        const pNode = getOffset(node, wrapRect);

        const row = node.closest('.tl-row');
        const side = row && row.classList.contains('left') ? -1 : 1;
        mainPts.push({ x: pNode.x + side * mainOff, y: pNode.y });
      }

      const lastNode = mergedNodes[mergedNodes.length - 1];
      const pLast = getOffset(lastNode, wrapRect);
      mainPts.push({ x: pLast.x, y: h });

      lenMain = assignPath(pMainBg, pMainFg, buildSnake(mainPts));
      samplesMain = samplePath(pMainBg, lenMain);
    };

    const setDot = (dot, samples, t, visible) => {
      const exactIdx = Math.max(0, Math.min(SAMPLES, t * SAMPLES));
      const i0 = Math.floor(exactIdx);
      const i1 = Math.min(SAMPLES, Math.ceil(exactIdx));
      const frac = exactIdx - i0;

      const x0 = samples[i0 * 2];
      const y0 = samples[i0 * 2 + 1];

      let x = x0;
      let y = y0;

      if (i1 <= SAMPLES) {
        const x1 = samples[i1 * 2];
        const y1 = samples[i1 * 2 + 1];
        x = x0 + (x1 - x0) * frac;
        y = y0 + (y1 - y0) * frac;
      }

      dot.style.transform = `translate3d(${x.toFixed(2)}px, ${y.toFixed(2)}px, 0) translate(-50%, -50%)`;
      dot.style.opacity = visible ? '1' : '0';
    };

    const calculateTargetProgress = () => {
      const rect = wrap.getBoundingClientRect();
      const vh = window.innerHeight;
      const start = vh * 0.85;
      const end = -rect.height + vh * 0.5;
      const range = Math.max(1, start - end);
      return Math.max(0, Math.min(1, (start - rect.top) / range));
    };

    const renderLoop = () => {
      currentP += (targetP - currentP) * 0.12;

      const pBranch = currentP < 0.55 ? currentP / 0.55 : 1;
      const pMain = currentP > 0.45 ? Math.min(1, (currentP - 0.45) / 0.55) : 0;

      if (samplesLeft) {
        pLeftFg.style.strokeDashoffset = String(lenLeft * (1 - pBranch));
        setDot(dLeft, samplesLeft, pBranch, pBranch > 0.005 && pBranch < 0.995);
      }
      if (samplesRight) {
        pRightFg.style.strokeDashoffset = String(lenRight * (1 - pBranch));
        setDot(dRight, samplesRight, pBranch, pBranch > 0.005 && pBranch < 0.995);
      }
      if (samplesMain) {
        pMainFg.style.strokeDashoffset = String(lenMain * (1 - pMain));
        setDot(dMain, samplesMain, pMain, pMain > 0.005 && pMain < 0.995);
      }

      if (!allActivated) {
        if (cachedSplitRow === null) cachedSplitRow = wrap.querySelector('.tl-split-row');
        if (cachedRows === null) {
          cachedRows = Array.from(wrap.querySelectorAll('.tl-row'))
            .map((r) => ({ row: r, node: r.querySelector('.tl-node') }))
            .filter((x) => x.node);
        }
        const threshold = window.innerHeight * 0.88;
        let remaining = 0;
        if (cachedSplitRow && !cachedSplitRow.classList.contains('is-active')) {
          if (cachedSplitRow.getBoundingClientRect().top < threshold) {
            cachedSplitRow.classList.add('is-active');
          } else remaining++;
        }
        for (let i = 0; i < cachedRows.length; i++) {
          const { row, node } = cachedRows[i];
          if (row.classList.contains('is-active')) continue;
          if (node.getBoundingClientRect().top < threshold) {
            row.classList.add('is-active');
          } else remaining++;
        }
        if (remaining === 0) allActivated = true;
      }

      if (Math.abs(targetP - currentP) > 0.0001) {
        rafId = requestAnimationFrame(renderLoop);
      } else {
        isRunning = false;
        currentP = targetP;
      }
    };

    const onScroll = () => {
      if (!isVisible) return;
      targetP = calculateTargetProgress();
      if (!isRunning) {
        isRunning = true;
        rafId = requestAnimationFrame(renderLoop);
      }
    };

    const onResize = () => {
      buildPaths();
      targetP = calculateTargetProgress();
      currentP = targetP;
      if (!isRunning) {
        isRunning = true;
        rafId = requestAnimationFrame(renderLoop);
      }
    };

    const visObs = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
        if (isVisible) {
          targetP = calculateTargetProgress();
          if (!isRunning) {
            isRunning = true;
            rafId = requestAnimationFrame(renderLoop);
          }
        }
      },
      { rootMargin: '400px 0px' }
    );
    visObs.observe(wrap);

    const initTimer = setTimeout(() => {
      buildPaths();
      targetP = calculateTargetProgress();
      currentP = targetP;
      isRunning = true;
      renderLoop();
    }, 50);

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);
    const ro = new ResizeObserver(onResize);
    ro.observe(wrap);

    return () => {
      clearTimeout(initTimer);
      if (rafId != null) cancelAnimationFrame(rafId);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      ro.disconnect();
      visObs.disconnect();
    };
  }, []);

  const dotStyle = {
    position: 'absolute', top: 0, left: 0,
    width: 'clamp(14px, 3vw, 22px)', height: 'clamp(14px, 3vw, 22px)', borderRadius: '50%',
    background: '#FF2D7A',
    border: 'clamp(1.5px, 0.4vw, 3px) solid #fff',
    boxShadow: '0 0 0 clamp(1.5px, 0.4vw, 3px) rgba(255,45,122,0.35), 0 8px 28px rgba(255,45,122,0.6)',
    pointerEvents: 'none',
    zIndex: 1,
    opacity: 0,
    transition: 'opacity .3s ease',
    willChange: 'transform'
  };

  return (
    <section className="sec" id="como-funciona" style={{
      backgroundImage: 'radial-gradient(circle, rgba(26,26,26,0.14) 1.2px, transparent 1.2px)',
      backgroundSize: '26px 26px',
      backgroundPosition: '0 0',
      position: 'relative'
    }}>
      <div className="container">
        <div className="sec-head">
          <span className="eyebrow">Como funciona</span>
          <h2>Duas rotas. Um destino: <span className="highlight-pink">Viralizar</span></h2>
          <p>Pegue o link de um reel ou o roteiro do dia. Escolha quando gravar. O resto é com a gente</p>
        </div>

        <div className="timeline" ref={wrapRef}>
          <svg ref={svgRef} preserveAspectRatio="none" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 0, overflow: 'visible' }}>
            <defs>
              <linearGradient id="tlPathGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#FF2D7A" />
                <stop offset="50%" stopColor="#ff4d8c" />
                <stop offset="100%" stopColor="#ff6aa3" />
              </linearGradient>
            </defs>
            <path ref={pathLeftBgRef} fill="none" stroke="rgba(26,26,26,0.12)" strokeWidth="clamp(2px, 0.6vw, 4px)" strokeLinecap="round" strokeDasharray="3 10" />
            <path ref={pathRightBgRef} fill="none" stroke="rgba(26,26,26,0.12)" strokeWidth="clamp(2px, 0.6vw, 4px)" strokeLinecap="round" strokeDasharray="3 10" />
            <path ref={pathMainBgRef} fill="none" stroke="rgba(26,26,26,0.12)" strokeWidth="clamp(2px, 0.6vw, 4px)" strokeLinecap="round" strokeDasharray="3 10" />
            <path ref={pathLeftFgRef} fill="none" stroke="url(#tlPathGrad)" strokeWidth="clamp(2.5px, 0.8vw, 5px)" strokeLinecap="round" />
            <path ref={pathRightFgRef} fill="none" stroke="url(#tlPathGrad)" strokeWidth="clamp(2.5px, 0.8vw, 5px)" strokeLinecap="round" />
            <path ref={pathMainFgRef} fill="none" stroke="url(#tlPathGrad)" strokeWidth="clamp(2.5px, 0.8vw, 5px)" strokeLinecap="round" />
          </svg>

          <div ref={dotLeftRef} style={dotStyle} />
          <div ref={dotRightRef} style={dotStyle} />
          <div ref={dotMainRef} style={dotStyle} />

          <div className="tl-split-row" style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 'clamp(8px, 2vw, 80px)',
            marginBottom: 'clamp(20px, 6vw, 60px)',
            paddingTop: 'clamp(20px, 8vw, 120px)',
            position: 'relative',
            zIndex: 2
          }}>
            <div className="tl-card" data-branch="left">
              <span className="tl-eyebrow">Rota 1 · Link de reel</span>
              <h3>Transforme qualquer link em roteiro</h3>
              <p>Viu algum reel? Cole o link e a IA transforma em roteiro.</p>
              <div className="app-mock">
                <div className="head">
                  <span style={{ fontWeight: 800, fontSize: 'clamp(9px, 2vw, 14px)' }}>Link colado</span>
                  <span className="pill" style={{ background: 'var(--accent)', color: '#fff', border: 'none' }}>IA ON</span>
                </div>
                <div style={{ padding: 'clamp(4px, 1vw, 8px) clamp(6px, 1.5vw, 10px)', background: 'rgba(0,0,0,0.04)', borderRadius: 8, fontFamily: 'JetBrains Mono, monospace', fontSize: 'clamp(7px, 1.5vw, 11px)', color: 'var(--ink-soft)', marginTop: 'clamp(4px, 1vw, 6px)', border: '1px dashed rgba(0,0,0,0.15)' }}>
                  instagram.com/reel/C9...
                </div>
                <div style={{ marginTop: 'clamp(6px, 1.5vw, 10px)', display: 'flex', alignItems: 'center', gap: 'clamp(4px, 1vw, 8px)', fontSize: 'clamp(8px, 1.8vw, 12px)', color: 'var(--ink)' }}>
                  <span style={{ display: 'inline-block', width: 'clamp(4px, 1vw, 8px)', height: 'clamp(4px, 1vw, 8px)', borderRadius: '50%', background: 'var(--accent)', boxShadow: '0 0 8px var(--accent)', flexShrink: 0 }} />
                  <span>Gerando roteiro...</span>
                </div>
              </div>
            </div>

            <div className="tl-card" data-branch="right">
              <span className="tl-eyebrow">Rota 2 · Manhã · 6h</span>
              <PixelPenguin size={64} />
              <h3>Converse com seu bichinho virtual assistente</h3>
              <p>Alimente o pet diariamente e receba roteiros virais pronto para gravar</p>
              <div className="app-mock">
                <div className="head">
                  <span style={{ fontWeight: 800, fontSize: 'clamp(9px, 2vw, 14px)' }}>Roteiro de hoje</span>
                  <span className="pill">#DIA 23</span>
                </div>
                <div className="line md" /><div className="line sh" /><div className="line md" />
              </div>
            </div>
          </div>

          <div className="tl-row left">
            <div className="tl-card">
              <span className="tl-eyebrow">Agenda · WhatsApp</span>
              <h3>Escolha o dia de gravação</h3>
              <p>Agende e a IA envia o roteiro direto no seu WhatsApp.</p>
              <div className="app-mock">
                <div className="head">
                  <span style={{ fontWeight: 800, fontSize: 'clamp(9px, 2vw, 14px)' }}>Quinta · 18/04</span>
                  <span className="pill" style={{ background: 'var(--accent)', color: '#fff', border: 'none' }}>WHATSAPP</span>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 'clamp(1px, 0.5vw, 4px)', marginTop: 'clamp(6px, 1.5vw, 10px)' }}>
                  {Array.from({ length: 14 }).map((_, i) => (
                    <div key={i} style={{
                      aspectRatio: '1', borderRadius: 'clamp(3px, 1vw, 6px)',
                      border: '1.5px solid var(--ink)',
                      background: i === 3 ? 'var(--accent)' : (i < 3 ? 'rgba(0,0,0,0.06)' : '#fff'),
                      display: 'grid', placeItems: 'center',
                      fontSize: 'clamp(6px, 1.2vw, 10px)', fontWeight: 700, color: i === 3 ? '#fff' : 'var(--ink)',
                      fontFamily: 'JetBrains Mono, monospace'
                    }}>{i < 3 ? '✓' : (i === 3 ? '◉' : (i + 1))}</div>
                  ))}
                </div>
              </div>
            </div>
            <div className="tl-node">02</div>
            <div></div>
          </div>

          <div className="tl-row right">
            <div></div>
            <div className="tl-node">03</div>
            <div className="tl-card">
              <span className="tl-eyebrow">1 minuto · Celular</span>
              <h3>Grava em 1 minuto</h3>
              <p>Sem cenário. Seu celular basta. Já no formato viral.</p>
              <div className="app-mock" style={{ background: 'var(--ink)', color: '#fff' }}>
                <div className="head" style={{ borderColor: 'rgba(255,255,255,.15)' }}>
                  <span style={{ fontWeight: 800, fontSize: 'clamp(9px, 2vw, 14px)', color: 'var(--secondary)' }}>● REC 00:47</span>
                  <span className="pill" style={{ background: 'var(--accent)', color: '#fff', border: 'none' }}>1 MIN</span>
                </div>
                <div style={{
                  height: 'clamp(40px, 8vw, 70px)', borderRadius: 'clamp(6px, 1.5vw, 10px)', background: 'linear-gradient(135deg, var(--accent), #8a2abf)',
                  opacity: .85, display: 'grid', placeItems: 'center', color: '#fff', fontSize: 'clamp(8px, 1.5vw, 12px)', fontFamily: 'JetBrains Mono, monospace'
                }}>// GRAVANDO</div>
              </div>
            </div>
          </div>

          <div className="tl-row left">
            <div className="tl-card">
              <span className="tl-eyebrow">Alcance · Recomendação</span>
              <h3>Posta e viraliza</h3>
              <p>Modo Recomendação ativado. Autoridade construída.</p>
              <div className="app-mock">
                <div className="head">
                  <span style={{ fontWeight: 800, fontSize: 'clamp(9px, 2vw, 14px)' }}>Alcance</span>
                  <span className="pill" style={{ background: 'var(--accent)', color: '#fff', border: 'none' }}>+847%</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-end', gap: 'clamp(2px, 0.8vw, 6px)', height: 'clamp(30px, 6vw, 54px)', marginTop: 'clamp(4px, 1vw, 6px)' }}>
                  {[20, 32, 28, 45, 60, 82, 100].map((h, i) =>
                    <div key={i} style={{
                      flex: 1, height: `${h}%`,
                      background: i > 4 ? 'var(--accent)' : 'var(--secondary)',
                      border: '1.5px solid var(--ink)', borderRadius: 'clamp(2px, 0.5vw, 4px)'
                    }} />
                  )}
                </div>
              </div>
            </div>
            <div className="tl-node">04</div>
            <div></div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ===== Big proof number ===== */
const PROOF_AVATARS = [
  { bg: '#FFB4C9', initials: 'MC' },
  { bg: '#FDE68A', initials: 'JR' },
  { bg: '#BFDBFE', initials: 'AS' },
  { bg: '#C7F9CC', initials: 'LP' },
  { bg: '#FECACA', initials: 'RS' },
  { bg: '#DDD6FE', initials: 'BK' },
  { bg: '#FED7AA', initials: 'TN' },
  { bg: '#FBCFE8', initials: 'CV' },
];

const FloatingPlays = ({ started }) => {
  const particles = React.useMemo(() => {
    return Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      left: Math.random() * 90 + 5, // 5% to 95%
      delay: Math.random() * 1.5, // 0 to 1.5s
      duration: 1.5 + Math.random() * 1.5, // 1.5s to 3.0s
      scale: 0.6 + Math.random() * 0.8,
      rotate: Math.random() * 80 - 40, // -40 to 40
      color: ['#FF2D7A', '#C8F000', '#00e5ff', '#a78bfa', '#fb923c', '#fff'][Math.floor(Math.random() * 6)]
    }));
  }, []);

  if (!started) return null;

  return (
    <div className="floating-plays-container">
      {particles.map(p => (
        <div key={p.id} className="floating-play" style={{
          left: `${p.left}%`,
          animation: `floatUp ${p.duration}s ease-out ${p.delay}s forwards`,
          '--p-scale': p.scale,
          '--p-rotate': `${p.rotate}deg`
        }}>
          <div className="play-card" style={{ background: p.color }}>
            <svg viewBox="0 0 24 24" fill="#111" width="16" height="16" style={{marginLeft: 2}}>
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      ))}
    </div>
  );
};

function BigProof() {
  const [viewsCount, setViewsCount] = React.useState(0);
  const [started, setStarted] = React.useState(false);
  const sectionRef = React.useRef(null);
  const viewsTarget = 3000000000;

  React.useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) setStarted(true); });
    }, { threshold: 0.35 });
    obs.observe(node);
    return () => obs.disconnect();
  }, []);

  React.useEffect(() => {
    if (!started) return;
    const duration = 2600;
    const start = performance.now();
    let raf;
    const tick = (now) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setViewsCount(Math.round(viewsTarget * eased));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [started]);

  const formatted = viewsCount.toLocaleString('pt-BR');

  // Cores dos "vídeos" no feed de Reels
  const reelColors = [
    { bg: 'linear-gradient(160deg,#FF2D7A,#ff6ba8)', views: '2.3M', user: '@beleza.pro' },
    { bg: 'linear-gradient(160deg,#C8F000,#8fad00)', views: '1.8M', user: '@studio.mk' },
    { bg: 'linear-gradient(160deg,#a78bfa,#7c3aed)', views: '4.1M', user: '@viral.tips' },
    { bg: 'linear-gradient(160deg,#fb923c,#ea580c)', views: '987K', user: '@cabelo.day' },
    { bg: 'linear-gradient(160deg,#34d399,#059669)', views: '3.2M', user: '@estet.ica' },
    { bg: 'linear-gradient(160deg,#60a5fa,#2563eb)', views: '1.5M', user: '@nails.br' },
    { bg: 'linear-gradient(160deg,#FF2D7A,#C8F000)', views: '5.7M', user: '@viral1min' },
  ];

  return (
    <section className="sec" ref={sectionRef}>
      <div className="container">
        <div style={{ textAlign: 'center' }}>

          {/* Importação da fonte JetBrains Mono solicitada no CSS */}
          <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@800&display=swap" rel="stylesheet" />

          {/* Estilos CSS combinados */}
          <style>{`
            /* ===== BADGE ORIGINAL ===== */
            .glitch-badge {
              position: relative;
              display: inline-flex;
              align-items: center;
              gap: 12px; /* Ajustado para o novo tamanho do celular */
              padding: 12px 26px 12px 16px;
              border-radius: 999px;
              margin-bottom: 24px;
              overflow: hidden;
              cursor: default;

              /* Liquid glass base */
              background: rgba(255, 255, 255, 0.18);
              border: 1.5px solid rgba(255, 255, 255, 0.55);
              backdrop-filter: blur(20px) saturate(1.8);
              -webkit-backdrop-filter: blur(20px) saturate(1.8);
              box-shadow:
                0 8px 32px rgba(255, 45, 122, 0.18),
                0 2px 8px rgba(255,255,255,0.25) inset,
                0 -1px 4px rgba(0,0,0,0.08) inset;

              animation: glitchContainer 3s infinite;
            }

            /* Brilho líquido interno */
            .glitch-badge__glass {
              position: absolute;
              inset: 0;
              border-radius: inherit;
              background: linear-gradient(
                135deg,
                rgba(255,255,255,0.45) 0%,
                rgba(255,255,255,0.05) 40%,
                rgba(255, 45, 122, 0.08) 70%,
                rgba(255,255,255,0.12) 100%
              );
              pointer-events: none;
              animation: liquidSheen 3s ease-in-out infinite;
            }

            @keyframes liquidSheen {
              0%, 100% { opacity: 1; }
              50%        { opacity: 0.7; }
            }

            /* Scanline / ruído */
            .glitch-badge__scanline {
              position: absolute;
              inset: 0;
              border-radius: inherit;
              background: repeating-linear-gradient(
                0deg,
                transparent, transparent 2px,
                rgba(0,0,0,0.04) 2px, rgba(0,0,0,0.04) 4px
              );
              pointer-events: none;
              animation: scanMove 0.8s linear infinite;
              opacity: 0;
            }

            @keyframes scanMove {
              0%   { background-position: 0 0; }
              100% { background-position: 0 40px; }
            }

            /* Texto com efeito glitch */
            .glitch-badge__text {
              position: relative;
              font-family: 'JetBrains Mono', monospace;
              font-weight: 800;
              font-size: clamp(9.5px, 2.5vw, 13px); /* Responsivo */
              letter-spacing: .08em;
              color: #1a1a1a;
              z-index: 2;
              animation: glitchText 3s infinite;
              white-space: nowrap; /* <-- GARANTE QUE FIQUE TUDO EM UMA LINHA SÓ */
              line-height: 1.4;
            }

            @media (max-width: 600px) {
              .glitch-badge {
                padding: 10px 16px 10px 10px;
                gap: 8px;
                margin-left: auto;
                margin-right: auto;
              }
              .glitch-badge__text {
                letter-spacing: .05em;
              }
            }

            /* Camadas de cor do glitch */
            .glitch-badge__text::before,
            .glitch-badge__text::after {
              content: attr(data-text);
              position: absolute;
              top: 0; left: 0;
              width: 100%;
              overflow: hidden;
              opacity: 0;
            }

            .glitch-badge__text::before {
              color: #FF2D7A;
              clip-path: polygon(0 30%, 100% 30%, 100% 55%, 0 55%);
              animation: glitchSliceTop 3s infinite;
            }

            .glitch-badge__text::after {
              color: #00e5ff;
              clip-path: polygon(0 65%, 100% 65%, 100% 80%, 0 80%);
              animation: glitchSliceBot 3s infinite;
            }

            /* ===== KEYFRAMES DO GLITCH ===== */
            @keyframes glitchContainer {
              0%, 80%, 100% { transform: translate(0); }
              81% { transform: translate(-5px, 2px); box-shadow: -4px 0 8px rgba(255,45,122,0.6), 4px 0 8px rgba(0,229,255,0.5); }
              83% { transform: translate(5px, -2px); box-shadow: 4px 0 8px rgba(255,45,122,0.6), -4px 0 8px rgba(0,229,255,0.5); }
              85% { transform: translate(-3px, 3px) scaleX(1.03); opacity: 0.8; }
              87% { transform: translate(3px, 0); opacity: 1; }
              89% { transform: translate(0) scaleX(0.98); }
            }

            @keyframes glitchText {
              0%, 80%, 100% { transform: translate(0); opacity: 1; }
              81% { transform: translate(-3px); opacity: 0.8; }
              83% { transform: translate(3px); opacity: 0.9; }
              85% { transform: translate(-2px); opacity: 0.5; }
              87% { transform: translate(2px); opacity: 1; }
            }

            @keyframes glitchSliceTop {
              0%, 80%, 100% { opacity: 0; transform: translate(0); }
              81% { opacity: 1; transform: translate(-6px); }
              83% { opacity: 1; transform: translate(6px); }
              85% { opacity: 0.5; transform: translate(-3px); }
              87% { opacity: 1; transform: translate(3px); }
              89% { opacity: 0; }
            }

            @keyframes glitchSliceBot {
              0%, 80%, 100% { opacity: 0; transform: translate(0); }
              81% { opacity: 1; transform: translate(6px); }
              83% { opacity: 1; transform: translate(-6px); }
              85% { opacity: 0.5; transform: translate(3px); }
              87% { opacity: 1; transform: translate(-3px); }
              89% { opacity: 0; }
            }

            /* Ativa scanline durante glitch */
            .glitch-badge:hover .glitch-badge__scanline,
            .glitch-badge.glitching .glitch-badge__scanline {
              opacity: 1;
            }

            /* ===== FRAME DO IPHONE ===== */
            .reels-phone {
              display: flex;
              align-items: center;
              justify-content: center;
              flex-shrink: 0;
              z-index: 3;
              position: relative;
            }

            .iphone-frame {
              width: 32px;
              height: 66px;
              background: #444; /* Cor da borda metálica (Titânio/Grafite) */
              border-radius: 9px;
              padding: 1.5px; /* Espessura da borda */
              box-shadow: 
                inset 0 0 0 0.5px #666,
                0 2px 8px rgba(0,0,0,0.4),
                0 0 15px rgba(255,45,122,0.15);
              position: relative;
              display: flex;
            }

            /* Botões laterais do iPhone */
            .iphone-btn-mute { position: absolute; left: -1px; top: 10px; width: 1.5px; height: 3px; background: #666; border-radius: 1px 0 0 1px; }
            .iphone-btn-vol-up { position: absolute; left: -1px; top: 16px; width: 1.5px; height: 6px; background: #777; border-radius: 1px 0 0 1px; }
            .iphone-btn-vol-down { position: absolute; left: -1px; top: 24px; width: 1.5px; height: 6px; background: #777; border-radius: 1px 0 0 1px; }
            .iphone-btn-power { position: absolute; right: -1px; top: 18px; width: 1.5px; height: 8px; background: #777; border-radius: 0 1px 1px 0; }

            .iphone-screen {
              flex: 1;
              background: #050505;
              border-radius: 7.5px;
              overflow: hidden;
              position: relative;
            }

            /* Dynamic Island */
            .iphone-dynamic-island {
              position: absolute;
              top: 2.5px;
              left: 50%;
              transform: translateX(-50%);
              width: 10px;
              height: 3.5px;
              background: #000;
              border-radius: 4px;
              z-index: 10;
              box-shadow: 0 0 1px rgba(255,255,255,0.1);
            }

            /* Barra Home do iOS */
            .iphone-home-indicator {
              position: absolute;
              bottom: 2px;
              left: 50%;
              transform: translateX(-50%);
              width: 12px;
              height: 1.5px;
              background: rgba(255, 255, 255, 0.8);
              border-radius: 2px;
              z-index: 10;
            }

            /* ===== FEED SCROLLANDO ===== */
            .reels-feed {
              display: flex;
              flex-direction: column;
              animation: reels-scroll 10s linear infinite;
              will-change: transform;
            }

            @keyframes reels-scroll {
              0%   { transform: translateY(0); }
              100% { transform: translateY(-50%); }
            }

            /* ===== CADA CARD DE VÍDEO ===== */
            .reels-card {
              width: 100%;
              height: 63px; /* Preenche a altura exata da tela (66px frame - 3px padding) */
              position: relative;
              flex-shrink: 0;
              display: flex;
              align-items: center;
              justify-content: center;
            }

            .reels-play {
              width: 10px;
              height: 10px;
              opacity: 0.85;
              filter: drop-shadow(0 1px 2px rgba(0,0,0,0.5));
            }

            .reels-info {
              position: absolute;
              bottom: 4px;
              left: 2px;
              display: flex;
              flex-direction: column;
              gap: 0.5px;
              transform: scale(0.55);
              transform-origin: bottom left;
              z-index: 5;
            }

            .reels-user {
              font-size: 6px;
              font-weight: 800;
              color: #fff;
              text-shadow: 0 1px 2px rgba(0,0,0,0.8);
            }

            .reels-views {
              font-size: 5px;
              font-weight: 700;
              color: rgba(255,255,255,0.9);
            }

            .reels-actions {
              position: absolute;
              bottom: 5px;
              right: 2px;
              display: flex;
              flex-direction: column;
              gap: 2px;
              font-size: 6px;
              transform: scale(0.6);
              transform-origin: bottom right;
              z-index: 5;
              filter: drop-shadow(0 1px 1px rgba(0,0,0,0.8));
            }

            /* ===== ANIMACAO PLAY FLOATING ===== */
            .floating-plays-container {
              position: absolute;
              bottom: 0;
              left: 0;
              width: 100%;
              height: 100%;
              pointer-events: none;
              z-index: 0;
              overflow: visible;
            }

            .floating-play {
              position: absolute;
              bottom: -20px;
              opacity: 0;
              will-change: transform, opacity;
            }

            .play-card {
              width: 28px;
              height: 36px;
              border-radius: 6px;
              display: flex;
              align-items: center;
              justify-content: center;
              box-shadow: 0 4px 12px rgba(0,0,0,0.25);
              border: 1px solid rgba(255,255,255,0.4);
            }

            @keyframes floatUp {
              0% {
                opacity: 0;
                transform: translateY(20px) scale(0.5) rotate(0deg);
              }
              15% {
                opacity: 1;
              }
              70% {
                opacity: 1;
              }
              100% {
                opacity: 0;
                transform: translateY(-160px) scale(var(--p-scale)) rotate(var(--p-rotate));
              }
            }
          `}</style>

          {/* Estrutura HTML/JSX do componente */}
          <div className="glitch-badge">
            <div className="glitch-badge__glass" />
            <div className="glitch-badge__scanline" />
            
            {/* === ANIMAÇÃO DO IPHONE === */}
            <div className="reels-phone" aria-hidden="true">
              <div className="iphone-frame">
                {/* Botões Físicos */}
                <div className="iphone-btn-mute" />
                <div className="iphone-btn-vol-up" />
                <div className="iphone-btn-vol-down" />
                <div className="iphone-btn-power" />

                <div className="iphone-screen">
                  <div className="iphone-dynamic-island" />
                  <div className="reels-feed">
                    {[...reelColors, ...reelColors].map((r, i) => (
                      <div key={i} className="reels-card" style={{ background: r.bg }}>
                        <svg className="reels-play" viewBox="0 0 24 24" fill="white">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                        <div className="reels-info">
                          <span className="reels-user">{r.user}</span>
                          <span className="reels-views">👁 {r.views}</span>
                        </div>
                        <div className="reels-actions">
                          <span>❤️</span>
                          <span>💬</span>
                          <span>➤</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="iphone-home-indicator" />
                </div>
              </div>
            </div>

            {/* === TEXTO ORIGINAL === */}
            <span className="glitch-badge__text" data-text="VISUALIZAÇÕES GERADAS COM ESSE MÉTODO">
              VISUALIZAÇÕES GERADAS COM ESSE MÉTODO
            </span>
          </div>

          {/* Número grande abaixo do card */}
          <div className={`proof-number-wrap ${started ? 'on' : ''}`} style={{ position: 'relative' }}>
            <FloatingPlays started={started} />
            <div className="proof-number" style={{ fontSize: 'clamp(28px, 10vw, 130px)', lineHeight: 1, position: 'relative', zIndex: 2, display: 'flex', alignItems: 'baseline', justifyContent: 'center', gap: '12px' }}>
              <span>+{formatted}</span>
              <span style={{ fontSize: 'clamp(18px, 4vw, 48px)', fontWeight: 800, color: 'var(--accent)', letterSpacing: '-0.03em', alignSelf: 'flex-end', paddingBottom: '0.15em' }}>Bilhões</span>
            </div>
          </div>

          <p style={{ fontSize: 22, fontWeight: 600, maxWidth: 640, margin: '0 auto', textWrap: 'pretty' }}>
            de visualizações geradas com o <strong>Método Viral</strong>. Em nichos da beleza.
            Do zero. Sem equipe. Sem anúncio.
          </p>
        </div>

      </div>
    </section>);

}


/* ===== Features (o que você recebe) ===== */
function Features() {
  return (
    <section className="sec" id="o-que-recebe">
      <div className="container">
        <div className="sec-head">
          <Eyebrow icon="grid">O que você recebe</Eyebrow>
          <h2>Viral em 1 Minuto — <span className="highlight-pink">curso + app + mentoria</span> no mesmo lugar.</h2>
          <p>Pela primeira vez na área da beleza, tudo isso junto em um único acesso. Não é só curso. Não é só app.</p>
        </div>

        <div className="feats">
          <div className="feat a">
            <div>
              <div className="tag">Modo recomendação</div>
              <h3>Modelos que ativam o algoritmo</h3>
              <p>Formatos validados que o Instagram prioriza e entrega para desconhecidos. Nós criamos, você grava e posta.</p>
            </div>
            <div className="app-mock" style={{ background: '#fff', color: 'var(--ink)' }}>
              <div className="head">
                <span style={{ fontWeight: 800, fontSize: 13 }}>Formato #47 · Viral</span>
                <span className="pill">TOP 1%</span>
              </div>
              <div className="line md" /><div className="line sh" />
            </div>
          </div>

          <div className="feat b">
            <div>
              <div className="tag">90 dias de roteiros</div>
              <h3>Todos os dias, novos roteiros virais prontos</h3>
              <p>Um roteiro por dia, já no app. Você não pensa no que postar. Só abre, copia e grava em 1 minuto.</p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7,1fr)', gap: 6, marginTop: 18 }}>
              {Array.from({ length: 28 }).map((_, i) =>
                <div key={i} style={{
                  aspectRatio: '1', borderRadius: 6,
                  border: '2px solid var(--ink)',
                  background: i < 15 ? 'var(--accent)' : i === 15 ? 'var(--secondary)' : '#fff',
                  display: 'grid', placeItems: 'center',
                  fontSize: 10, fontWeight: 700, color: i < 15 ? '#fff' : 'var(--ink)',
                  fontFamily: 'JetBrains Mono, monospace'
                }}>{i < 15 ? '✓' : i === 15 ? '●' : ''}</div>
              )}
            </div>
          </div>

          <div className="feat c">
            <div>
              <div className="tag">IA integrada</div>
              <h3>IA criando conteúdo por você</h3>
              <p>Gera roteiros, transcreve modelos virais, cria ideias infinitas. 10x mais focada no seu nicho.</p>
            </div>
            <div className="app-mock">
              <div className="head"><span style={{ fontWeight: 800, fontSize: 13 }}>✨ IA Viral</span><span className="pill" style={{ background: 'var(--accent)', color: '#fff' }}>GERANDO</span></div>
              <div className="line md" /><div className="line md" />
            </div>
          </div>

          <div className="feat d">
            <div>
              <div className="tag">Método 1 minuto</div>
              <h3>Grave, poste, viralize</h3>
              <p>Sem equipamento caro, sem edição complexa, sem cenário. O celular que você tem já basta.</p>
            </div>
            <div style={{ display: 'flex', gap: 8, marginTop: 16 }}>
              <div style={{ flex: 1, padding: 10, border: '2px solid var(--ink)', borderRadius: 10, textAlign: 'center', fontWeight: 800, background: 'var(--secondary)' }}>
                <div style={{ fontSize: 22 }}>1</div><div style={{ fontSize: 10 }}>ABRE</div>
              </div>
              <div style={{ flex: 1, padding: 10, border: '2px solid var(--ink)', borderRadius: 10, textAlign: 'center', fontWeight: 800 }}>
                <div style={{ fontSize: 22 }}>2</div><div style={{ fontSize: 10 }}>GRAVA</div>
              </div>
              <div style={{ flex: 1, padding: 10, border: '2px solid var(--ink)', borderRadius: 10, textAlign: 'center', fontWeight: 800, background: 'var(--accent)', color: '#fff' }}>
                <div style={{ fontSize: 22 }}>3</div><div style={{ fontSize: 10 }}>POSTA</div>
              </div>
            </div>
          </div>

          <div className="feat e">
            <div>
              <div className="tag">Curso + ao vivo</div>
              <h3>Aulas gravadas + mentorias ao vivo</h3>
              <p>Área de membros completa. Primeira vez que curso e app se juntam no mesmo lugar.</p>
            </div>
            <div className="app-mock" style={{ background: 'rgba(255,255,255,.08)', borderColor: 'var(--secondary)', color: '#fff' }}>
              <div className="head" style={{ borderColor: 'rgba(255,255,255,.15)' }}>
                <span style={{ fontWeight: 800, fontSize: 13, color: 'var(--secondary)' }}>● AO VIVO · QUI 20H</span>
              </div>
              <div className="line md" style={{ background: 'rgba(255,255,255,.18)' }} />
              <div className="line sh" style={{ background: 'rgba(255,255,255,.18)' }} />
            </div>
          </div>
        </div>

        {/* Carrossel dos 12 módulos do curso */}
        <ModulosCarousel />

        {/* Desafio + Atualizações */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 22, marginTop: 22 }} className="extras">
          <div className="glass-liquid-card" style={{
            padding: 'clamp(24px, 4vw, 36px)',
            display: 'flex', alignItems: 'center', gap: 'clamp(20px, 3vw, 32px)',
            flexWrap: 'wrap'
          }}>
            <div style={{
              width: 'clamp(100px, 14vw, 130px)', height: 'clamp(100px, 14vw, 130px)', flexShrink: 0,
              background: 'linear-gradient(135deg, rgba(207,255,4,0.85) 0%, rgba(207,255,4,0.5) 100%)',
              backdropFilter: 'blur(24px) saturate(180%)',
              WebkitBackdropFilter: 'blur(24px) saturate(180%)',
              border: '1.5px solid rgba(255,255,255,0.8)',
              borderRadius: 24,
              display: 'grid', placeItems: 'center',
              color: 'var(--ink)',
              fontFamily: 'var(--font-head)', fontWeight: 900,
              boxShadow: '0 10px 30px -5px rgba(207,255,4,0.55), inset 0 4px 10px -2px rgba(255,255,255,0.7)'
            }}>
              <div style={{ textAlign: 'center', lineHeight: .9 }}>
                <div style={{ fontSize: 'clamp(26px, 3.5vw, 32px)' }}>0→10K</div>
                <div style={{ fontSize: 11, letterSpacing: '.1em', marginTop: 6 }}>30 DIAS</div>
              </div>
            </div>
            <div style={{ flex: 1, minWidth: 240 }}>
              <div className="tag" style={{
                display: 'inline-block',
                background: 'rgba(255,255,255,0.5)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                border: '1px solid rgba(255,255,255,0.6)',
                color: 'var(--accent)'
              }}>Desafio gamificado</div>
              <h3 style={{ marginTop: 12, fontSize: 'clamp(22px, 3vw, 28px)', color: 'var(--ink)' }}>Desafio do 0 aos 10K em 30 dias</h3>
              <p style={{ marginTop: 10, color: 'var(--ink-soft)' }}>Todas as coordenadas para postagens. Em 30 dias você bate 10 mil seguidores. Com gamificação você vê o progresso em tempo real.</p>
            </div>
          </div>

          <div className="glass-liquid-card" style={{
            padding: 'clamp(20px, 3vw, 30px)',
            display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: 16
          }}>
            <div>
              <div className="tag" style={{
                display: 'inline-block',
                background: 'rgba(255,255,255,0.5)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                border: '1px solid rgba(255,255,255,0.6)',
                color: 'var(--accent)'
              }}>Sempre atual</div>
              <h3 style={{ marginTop: 10 }}>Atualizações constantes</h3>
              <p style={{ marginTop: 10, color: 'var(--ink-soft)' }}>O conteúdo é atualizado conforme o algoritmo evolui. Você nunca fica desatualizada.</p>
            </div>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {['v2.1', 'v2.2', 'v2.3', 'v2.4'].map((v, i) =>
                <span key={i} style={{
                  fontFamily: 'JetBrains Mono, monospace', fontSize: 11,
                  padding: '5px 11px', borderRadius: 20,
                  border: i === 3 ? '1.5px solid rgba(255,45,122,0.3)' : '1px solid rgba(255,255,255,0.6)',
                  background: i === 3
                    ? 'linear-gradient(135deg, rgba(255,45,122,0.15) 0%, rgba(255,45,122,0.08) 100%)'
                    : 'rgba(255,255,255,0.4)',
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                  color: i === 3 ? 'var(--accent)' : 'var(--ink-soft)',
                  fontWeight: 700,
                  boxShadow: i === 3 ? '0 4px 12px -2px rgba(255,45,122,0.25)' : 'inset 0 1px 0 rgba(255,255,255,0.6)'
                }}>{v}{i === 3 && ' ←'}</span>
              )}
            </div>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: 60 }}>
          <Btn variant="primary" size="lg" icon="rocket" href="#investimento">Ativar App Viral agora</Btn>
        </div>
      </div>
    </section>);

}

/* ===== Módulos do curso (bloco embutido em Features) ===== */
function ModulosCarousel() {
  const modulos = [
    { n: '01', slug: 'comece-por-aqui', file: 'comece-por-aqui.webp', tag: 'Módulo', name: 'Comece por aqui', sub: 'Boas-vindas', desc: 'Precisão extrema para viralizar. O mapa completo do método antes de qualquer gravação.', accent: 'pink' },
    { n: '02', slug: 'do-zero-aos-10k', file: 'desafio-10k.webp', tag: 'Módulo', name: 'Do Zero aos 10K', sub: '30 dias', desc: 'Passo a passo gamificado para sair do zero e bater 10 mil seguidores em 30 dias.', accent: 'lime' },
    { n: '03', slug: 'tutorial-sem-edicao', file: 'tutorial-sem-edicao.webp', tag: 'Módulo', name: 'Tutorial sem Edição', sub: 'Método 1 min', desc: 'Como criar vídeos que prendem atenção sem depender de edição nem equipamento.', accent: 'pink' },
    { n: '04', slug: 'problema-solucao', file: 'problema solucao.webp', tag: 'Formato', name: 'Problema Solução', sub: 'Estrutura viral', desc: 'Formato que entrega valor e ativa o algoritmo de recomendação do Instagram.', accent: 'pink' },
    { n: '05', slug: 'formato-ranking', file: 'formato ranking.webp', tag: 'Formato', name: 'Ranking', sub: 'Top 3 · Top 5', desc: 'O formato mais compartilhado em 2026. Retém até o final e gera salvamentos.', accent: 'lime' },
    { n: '06', slug: 'formato-bastidores', file: 'formato bastidores.webp', tag: 'Formato', name: 'Bastidores', sub: 'Conexão real', desc: 'Transforma rotina em conteúdo que conecta. O formato que mais humaniza o perfil.', accent: 'pink' },
    { n: '07', slug: 'formato-palestrinha', file: 'formato-palestrinha.webp', tag: 'Formato', name: 'Palestrinha', sub: 'Autoridade', desc: 'Para quem quer virar referência falando direto para a câmera. Script + enquadramento.', accent: 'lime' },
    { n: '08', slug: 'formato-carrossel', file: 'formato-carrossel.webp', tag: 'Formato', name: 'Carrossel', sub: 'Alcance orgânico', desc: 'O formato com maior tempo de tela do Instagram. Ideal para nichos de educação.', accent: 'pink' },
    { n: '09', slug: 'formato-narrado', file: 'formato narrado.webp', tag: 'Formato', name: 'Narrado', sub: 'Sem aparecer', desc: 'Viraliza sem mostrar o rosto. Voz + corte seco + legenda que puxa o dedo.', accent: 'pink' },
    { n: '10', slug: 'formato-tela-dividida', file: 'tela-dividida-2.webp', tag: 'Formato', name: 'Tela Dividida', sub: 'Alto retention', desc: 'Duas camadas que seguram o olhar até o final. O preferido da Geração Z.', accent: 'lime' },
    { n: '11', slug: 'formato-mito-ou-verdades', file: 'mito.webp', tag: 'Formato', name: 'Mito ou Verdades', sub: 'Engajamento', desc: 'Gatilho de curiosidade + comentários automáticos. Ranqueia em explorar.', accent: 'pink' },
    { n: '12', slug: 'formato-usar-x-nao-usar', file: 'oque usar e oque nao usar.webp', tag: 'Formato', name: 'Usar x Não Usar', sub: 'Guia rápido', desc: 'Estratégias de 1 minuto que transformam ideias em alcance real. Rosto opcional.', accent: 'lime' }
  ];

  const handleImgError = (e) => {
    e.currentTarget.style.display = 'none';
    e.currentTarget.parentElement.classList.add('mod-no-img');
  };

  const trackRef = React.useRef(null);
  const pausedRef = React.useRef(false);

  React.useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    let rafId;
    let lastTs = 0;
    const SPEED = 40;

    const tick = (ts) => {
      if (!lastTs) lastTs = ts;
      const dt = ts - lastTs;
      lastTs = ts;

      if (!pausedRef.current) {
        el.scrollLeft += (SPEED * dt) / 1000;
        const half = el.scrollWidth / 2;
        if (el.scrollLeft >= half) {
          el.scrollLeft -= half;
        }
      } else {
        lastTs = ts;
      }

      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);

    const pause = () => { pausedRef.current = true; };
    const resume = () => { pausedRef.current = false; };

    el.addEventListener('pointerenter', pause);
    el.addEventListener('pointerleave', resume);
    el.addEventListener('pointerdown', pause);
    el.addEventListener('touchstart', pause, { passive: true });
    el.addEventListener('touchend', resume);
    el.addEventListener('focusin', pause);
    el.addEventListener('focusout', resume);

    return () => {
      cancelAnimationFrame(rafId);
      el.removeEventListener('pointerenter', pause);
      el.removeEventListener('pointerleave', resume);
      el.removeEventListener('pointerdown', pause);
      el.removeEventListener('touchstart', pause);
      el.removeEventListener('touchend', resume);
      el.removeEventListener('focusin', pause);
      el.removeEventListener('focusout', resume);
    };
  }, []);

  const loopList = [...modulos, ...modulos];

  return (
    <div className="modulos-block" id="modulos">
      <div className="container">
        <div className="modulos-head">
          <div className="tag" style={{ display: 'inline-block', background: 'var(--secondary)', color: 'var(--ink)' }}>12 módulos do curso</div>
          <h3 style={{ marginTop: 14, fontSize: 'clamp(22px, 2.6vw, 30px)', color: 'var(--ink)' }}>
            Cada formato que <span className="highlight-pink">viraliza</span>, num módulo separado.
          </h3>
        </div>
      </div>

      <div className="modulos-carousel">
        <div className="modulos-track" ref={trackRef}>
          {loopList.map((m, i) => (
            <article
              key={`${m.slug}-${i}`}
              className={`mod-card mod-${m.accent}${m.file ? '' : ' mod-no-img'}`}
              data-mod={m.n}
              aria-hidden={i >= modulos.length ? 'true' : undefined}
            >
              {m.file && (
                <img
                  src={`uploads/modulos/${m.file}`}
                  alt={`Módulo ${m.name}`}
                  loading="lazy"
                  onError={handleImgError}
                />
              )}
              <div className="mod-fallback" aria-hidden="true">
                <span className="mod-fb-bolt"><Icon name="bolt" size={40} color="#fff" /></span>
                <span className="mod-fb-title">{m.name}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>);

}

/* ===== Quem criou ===== */
function Creator() {
  const expertsTrackRef = React.useRef(null);
  const expertsPausedRef = React.useRef(false);

  const experts = [
    { name: 'Ana Paula', role: 'Especialista em Reels', img: null },
    { name: 'Camila Torres', role: 'Growth & Viral Strategy', img: null },
    { name: 'Fernanda Lima', role: 'Copywriting & Roteiros', img: null },
    { name: 'Júlia Moraes', role: 'Branding Visual', img: null },
    { name: 'Beatriz Alves', role: 'Edição & Produção', img: null },
    { name: 'Larissa Costa', role: 'IA & Automação', img: null },
    { name: 'Patrícia Nunes', role: 'Nicho Beleza', img: null },
    { name: 'Renata Souza', role: 'Nicho Fitness', img: null },
    { name: 'Mariana Gomes', role: 'Nicho Saúde', img: null },
    { name: 'Isabela Rocha', role: 'Nicho Moda', img: null },
    { name: 'Viviane Santos', role: 'Nicho Gastronomia', img: null },
    { name: 'Daniela Pires', role: 'Nicho Educação', img: null },
  ];

  const loopExperts = [...experts, ...experts];

  React.useEffect(() => {
    const el = expertsTrackRef.current;
    if (!el) return;
    let rafId;
    let lastTs = 0;
    const SPEED = 35;
    const tick = (ts) => {
      if (!lastTs) lastTs = ts;
      const dt = ts - lastTs;
      lastTs = ts;
      if (!expertsPausedRef.current) {
        el.scrollLeft += (SPEED * dt) / 1000;
        const half = el.scrollWidth / 2;
        if (el.scrollLeft >= half) el.scrollLeft -= half;
      } else {
        lastTs = ts;
      }
      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);
    const pause = () => { expertsPausedRef.current = true; };
    const resume = () => { expertsPausedRef.current = false; };
    el.addEventListener('pointerenter', pause);
    el.addEventListener('pointerleave', resume);
    el.addEventListener('pointerdown', pause);
    el.addEventListener('touchstart', pause, { passive: true });
    el.addEventListener('touchend', resume);
    return () => {
      cancelAnimationFrame(rafId);
      el.removeEventListener('pointerenter', pause);
      el.removeEventListener('pointerleave', resume);
      el.removeEventListener('pointerdown', pause);
      el.removeEventListener('touchstart', pause);
      el.removeEventListener('touchend', resume);
    };
  }, []);

  return (
    <section className="sec">
      <div className="container">
        <div className="sec-head">
          <Eyebrow icon="star">Quem criou</Eyebrow>
          <h2>A mente por trás do <span className="highlight-pink">Viral em 1 Minuto</span></h2>
        </div>

        {/* Criador 1 — Thaylor Jobs */}
        <div className="creator" style={{ marginBottom: 56 }}>
          <div className="creator-photo">
            <span className="ph-text">// foto do criador</span>
            <div className="tag">Thaylor Jobs · Criador</div>
          </div>
          <div>
            <h2 style={{ fontSize: 'clamp(32px, 4vw, 52px)' }}>Thaylor Jobs</h2>
            <p style={{ marginTop: 16, fontSize: 19, color: 'var(--ink-soft)', textWrap: 'pretty' }}>
              Responsável pelo sistema que já transformou <strong>+44.000 profissionais</strong> da área da beleza em referências dos seus nichos.
              Não por teoria — por método testado diariamente por milhares de alunas que saíram do zero e construíram autoridade real no Instagram.
            </p>
            <div style={{
              marginTop: 22, padding: '20px 24px',
              background: 'var(--primary)', border: '2.5px solid var(--ink)',
              borderRadius: 20, boxShadow: '4px 4px 0 var(--ink)',
              fontFamily: 'var(--font-head)', fontWeight: 700, fontSize: 20,
              fontStyle: 'italic', position: 'relative'
            }}>
              <span style={{ fontSize: 60, lineHeight: 0, position: 'absolute', top: 28, left: 12, color: 'var(--accent)', opacity: .5 }}>"</span>
              <span style={{ display: 'block', paddingLeft: 24 }}>Tudo isso na área da beleza.</span>
            </div>
            <div className="creator-stats">
              <div className="creator-stat"><div className="n">+44K</div><div className="l">alunas ativas</div></div>
              <div className="creator-stat"><div className="n">+2.4B</div><div className="l">views gerados</div></div>
              <div className="creator-stat"><div className="n">8 anos</div><div className="l">de método</div></div>
            </div>
          </div>
        </div>

        {/* Criador 2 */}
        <div className="creator creator-reverse">
          <div className="creator-photo">
            <span className="ph-text">// foto do criador 2</span>
            <div className="tag">Criador</div>
          </div>
          <div>
            <h2 style={{ fontSize: 'clamp(32px, 4vw, 52px)' }}>Gabriel Nalli</h2>
            <p style={{ marginTop: 16, fontSize: 19, color: 'var(--ink-soft)', textWrap: 'pretty' }}>
              Breve descrição do segundo criador — seu papel, experiência e o que ele traz de diferencial para o ecossistema do <strong>Viral em 1 Minuto</strong>.
            </p>
            <div style={{
              marginTop: 22, padding: '20px 24px',
              background: 'var(--primary)', border: '2.5px solid var(--ink)',
              borderRadius: 20, boxShadow: '4px 4px 0 var(--ink)',
              fontFamily: 'var(--font-head)', fontWeight: 700, fontSize: 20,
              fontStyle: 'italic', position: 'relative'
            }}>
              <span style={{ fontSize: 60, lineHeight: 0, position: 'absolute', top: 28, left: 12, color: 'var(--accent)', opacity: .5 }}>"</span>
              <span style={{ display: 'block', paddingLeft: 24 }}>Frase de impacto do segundo criador.</span>
            </div>
            <div className="creator-stats">
              <div className="creator-stat"><div className="n">+10K</div><div className="l">seguidores</div></div>
              <div className="creator-stat"><div className="n">+500M</div><div className="l">views</div></div>
              <div className="creator-stat"><div className="n">5 anos</div><div className="l">de expertise</div></div>
            </div>
          </div>
        </div>
      </div>

      {/* Carrossel das 12 Experts */}
      <div className="modulos-block" style={{ marginTop: 80 }}>
        <div className="container">
          <div className="modulos-head">
            <div className="tag" style={{ display: 'inline-block', background: 'var(--secondary)', color: 'var(--ink)' }}>12 experts do ecossistema</div>
            <h3 style={{ marginTop: 14, fontSize: 'clamp(22px, 2.6vw, 30px)', color: 'var(--ink)' }}>
              Especialistas reais, resultados <span className="highlight-pink">comprovados</span>.
            </h3>
          </div>
        </div>
        <div className="modulos-carousel">
          <div className="modulos-track experts-track" ref={expertsTrackRef}>
            {loopExperts.map((expert, i) => (
              <article key={i} className="mod-card mod-no-img expert-card" aria-hidden={i >= experts.length ? 'true' : undefined}>
                <div className="mod-fallback" style={{ display: 'flex' }}>
                  <div className="expert-avatar">
                    <Icon name="user" size={36} color="#fff" />
                  </div>
                  <span className="mod-fb-title" style={{ fontSize: 'clamp(16px, 1.8vw, 20px)' }}>{expert.name}</span>
                  <span style={{ color: 'rgba(255,255,255,0.75)', fontSize: 13, fontWeight: 500, marginTop: -8, textAlign: 'center', lineHeight: 1.3 }}>{expert.role}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>);

}

/* ===== Testimonials =====  */
function Testimonials() {
  return (
    <section className="sec" style={{ paddingBottom: 60 }}>
      <div className="container">
        <div className="sec-head">
          <Eyebrow icon="heart">Depoimentos reais</Eyebrow>
          <h2>O que estão falando do <span className="highlight-pink">Viral em 1 Minuto?</span></h2>
          <p>Mensagens reais de alunas. Sem filtro. Sem roteiro.</p>
        </div>
      </div>
      <TestiMarquee />
    </section>);

}

/* ===== Comparison ===== */
function Comparison() {
  const rows = [
    ["Roteiros virais prontos diariamente", true, false, false],
    ["IA especializada no seu nicho", true, false, false],
    ["Formatos testados e validados", true, "Parcial", false],
    ["Mentorias ao vivo", true, false, false],
    ["Curso completo incluído", true, false, "Pago à parte"],
    ["Desafio gamificado 0→10K", true, false, false],
    ["Atualização constante do método", true, false, false],
    ["Preço mensal", "R$37", "R$97+", "R$120+"]];

  const cell = (v) => {
    if (v === true) return <span className="check"><Icon name="check" /></span>;
    if (v === false) return <span className="xmark"><Icon name="x" /></span>;
    return <span style={{ fontWeight: 700 }}>{v}</span>;
  };

  return (
    <section className="sec">
      <div className="container">
        <div className="sec-head">
          <Eyebrow icon="target">Comparativo</Eyebrow>
          <h2>R$37 é <span className="highlight-lime">óbvio.</span> É menos que o ChatGPT e entrega <span className="highlight-pink">10x mais.</span></h2>
          <p>Compare e decida você mesma.</p>
        </div>

        <div className="cmp">
          <div className="cmp-row">
            <div className="feat-name"></div>
            <div className="head-us">Viral em 1 Min</div>
            <div className="head-oth">ChatGPT</div>
            <div className="head-oth">Curso tradicional</div>
          </div>
          {rows.map((r, i) =>
            <div key={i} className="cmp-row">
              <div className="feat-name">{r[0]}</div>
              <div className="us">{cell(r[1])}</div>
              <div className="oth">{cell(r[2])}</div>
              <div className="oth">{cell(r[3])}</div>
            </div>
          )}
        </div>

        <div style={{ textAlign: 'center', marginTop: 40 }}>
          <Btn variant="primary" size="lg" icon="rocket" href="#investimento">Quero o App Viral por 12x de R$37</Btn>
          <div style={{ marginTop: 14, fontSize: 14, color: 'var(--ink-soft)' }}>
            <em>Sem contrato · Cancela quando quiser · Acesso imediato</em>
          </div>
        </div>
      </div>
    </section>);

}

/* ===== Pricing ===== */
function Pricing() {
  const [yearly, setYearly] = useStateS(true);
  const mensal = { price: 47, cents: "00", per: "/mês", old: null, badge: null };
  const anual = { price: 37, cents: "00", per: "/mês · 12x", old: "R$ 47,00", badge: "-21% anual" };
  const data = yearly ? anual : mensal;

  return (
    <section className="sec" id="investimento">
      <div className="container">
        <div className="sec-head">
          <Eyebrow icon="rocket">Investimento</Eyebrow>
          <h2>Ative o <span className="highlight-pink">App Viral em 1 Minuto.</span></h2>
          <p>Escolha o plano que combina com você. Sem letra miúda.</p>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div className="pricing-toggle">
            <button className={!yearly ? 'active' : ''} onClick={() => setYearly(false)}>Mensal</button>
            <button className={yearly ? 'active' : ''} onClick={() => setYearly(true)}>Anual <span className="save">-21%</span></button>
          </div>
        </div>

        <div className="pricing-grid">
                      <div className="plan">
            <span className="tier">Starter · Mensal</span>
            <div className="price">
              <span className="cur">R$</span>
              <span className="num">47</span>
              <span className="per">/mês</span>
            </div>
            <p style={{ marginTop: 4, fontSize: 14, color: 'var(--ink-soft)' }}>Para testar tudo sem compromisso.</p>
            <ul>
              <li><span className="ck">✓</span><span>App completo com roteiros diários</span></li>
              <li><span className="ck">✓</span><span>IA Viral para modelar conteúdos</span></li>
              <li><span className="ck">✓</span><span>Curso + área de membros</span></li>
              <li><span className="ck">✓</span><span>Mentorias ao vivo</span></li>
              <li><span className="ck">✓</span><span>Desafio 0→10K em 30 dias</span></li>
              <li><span className="ck">✓</span><span>Cancela quando quiser</span></li>
            </ul>
          </div>

          <div className="plan popular">
            <span className="badge">⚡ Mais escolhido</span>
            <span className="tier" style={{ color: '#ffe6ef' }}>Pro · Anual</span>
            <div className="price">
              <span className="cur">12x R$</span>
              <span className="num">37</span>
              <span className="per">/mês</span>
            </div>
            <div className="old" style={{ color: '#ffd9e6' }}>de R$47 por R$37 · à vista R$397</div>
            <ul>
              <li><span className="ck">✓</span><span>Tudo do mensal</span></li>
              <li><span className="ck">✓</span><span><strong>2 meses grátis</strong> no anual</span></li>
              <li><span className="ck">✓</span><span>Acesso prioritário a novos formatos</span></li>
              <li><span className="ck">✓</span><span>Grupo VIP de alunas anuais</span></li>
              <li><span className="ck">✓</span><span>Bônus: Pack de 30 stories que vendem</span></li>
              <li><span className="ck">✓</span><span>Garantia incondicional de 30 dias</span></li>
            </ul>
            <Btn variant="primary" size="lg" icon="rocket">Ativar App Viral agora</Btn>
          </div>
        </div>
      </div>
    </section>);

}

/* ===== Garantia ===== */
function Guarantee() {
  return (
    <section className="sec" style={{ paddingTop: 40 }}>
      <div className="container">
        <div className="guarantee">
          <div className="seal" style={{ border: '1px solid var(--glass-border)', boxShadow: '0 12px 32px rgba(200, 240, 0, 0.4)' }}>
            <div>
              <div className="big">30</div>
              <div className="sm">DIAS DE GARANTIA</div>
            </div>
          </div>
          <div>
            <Eyebrow icon="shield">Risco reverso</Eyebrow>
            <h2 style={{ marginTop: 14 }}>Ou você viraliza. Ou devolvemos 100%.</h2>
            <p>Teste o sistema por 30 dias completos. Use os roteiros. Grave os vídeos. Aplique o Método Viral em 1 Minuto.
              Se você seguir o protocolo e não ver resultado, basta enviar um e-mail com os prints e devolvemos tudo.
              <strong style={{ color: '#fff' }}> Sem burocracia. Sem pergunta. Sem enrolação.</strong></p>
          </div>
          <Btn variant="lime" size="lg" icon="rocket" href="#investimento">Ativar sem risco</Btn>
        </div>
      </div>
    </section>);

}

/* ===== FAQ ===== */
function FAQ() {
  const [open, setOpen] = useStateS(0);
  const items = [
    ["Serve para qualquer nicho?", "Sim. Os formatos do App Viral foram testados em nichos de beleza, saúde, moda, gastronomia, fitness, educação e muito mais. Se você tem algo para mostrar ou vender, o método funciona. O que viraliza é a estrutura, não o tema."],
    ["Preciso aparecer?", "Não. Existem dezenas de modelos no app que viralizam sem mostrar o rosto, sem falar nada, usando só as mãos, o trabalho ou texto na tela. Muitos deles performam melhor do que vídeos com rosto."],
    ["Preciso editar os vídeos?", "Não. O Método 1 Minuto foi criado exatamente para eliminar a edição. Você grava com o celular que tem, no formato que o algoritmo já quer entregar. Sem corte, sem efeito, sem app de edição."],
    ["Preciso ter seguidores para começar?", "Zero seguidores. O App Viral foi criado para quem está começando do zero. O Desafio 0 aos 10K em 30 dias existe justamente para isso: sair do zero e bater 10 mil seguidores com o método."],
    ["Preciso entender de algoritmo?", "Não. Você só precisa abrir o app, pegar o roteiro do dia, gravar em 1 minuto e postar. O sistema já está estruturado para acionar o Modo Recomendação automaticamente."],
    ["Posso cancelar quando quiser?", "Sim. Sem fidelidade. Sem contrato. Cancela com 1 clique dentro da plataforma e pronto. Seu acesso fica até o fim do ciclo já pago."]];

  return (
    <section className="sec" id="faq">
      <div className="container">
        <div className="sec-head">
          <Eyebrow icon="chat">Dúvidas</Eyebrow>
          <h2>Respostas <span className="highlight-pink">diretas.</span></h2>
        </div>
        <div className="faq-list">
          {items.map(([q, a], i) =>
            <div key={i} className={`faq-item ${open === i ? 'open' : ''}`}>
              <div className="faq-q" onClick={() => setOpen(open === i ? -1 : i)}>
                <span>{q}</span>
                <span className="faq-toggle">+</span>
              </div>
              <div className="faq-a"><p style={{ padding: '4px 0' }}>{a}</p></div>
            </div>
          )}
        </div>
      </div>
    </section>);

}

/* ===== Final CTA ===== */
function FinalCTA() {
  return (
    <section className="sec" style={{ paddingTop: 40 }}>
      <div className="container">
        <div className="final-cta">
          <span className="spark s1"><Icon name="sparkles" size={32} color="var(--secondary)" /></span>
          <span className="spark s2"><Icon name="star" size={28} color="#fff" /></span>
          <span className="spark s3"><Icon name="bolt" size={32} color="var(--secondary)" /></span>
          <Eyebrow icon="bolt">A decisão é simples</Eyebrow>
          <h2 style={{ marginTop: 18, color: '#fff' }}>Continuar invisível<br />ou <span style={{ 
            background: 'var(--secondary)', 
            color: 'var(--ink)', 
            padding: '0 .3em', 
            borderRadius: 16, 
            border: '1px solid rgba(255,255,255,0.4)', 
            display: 'inline-block', 
            boxShadow: '0 8px 24px rgba(200, 240, 0, 0.3)',
            transform: 'rotate(calc(-1.5deg * var(--playful)))' 
          }}>ativar o Modo Viralização?</span></h2>
          <p>Você pode continuar tentando adivinhar o que funciona. Ou usar um sistema pronto.
            A diferença entre essas duas decisões cabe em um clique.</p>
          <div className="btns">
            <Btn variant="primary" size="lg" icon="rocket">Ativar App Viral por 12x de R$37</Btn>
            <Btn variant="ghost" size="lg" icon="play" href="#vsl">Ver VSL de novo</Btn>
          </div>
          <div style={{ marginTop: 20, fontSize: 14, opacity: .9 }}>
            <em>Sem contrato · Sem fidelidade · Cancela quando quiser</em>
          </div>
        </div>
      </div>
    </section>);

}

/* ===== Footer ===== */
function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div className="foot-logo">
            <img src="assets/logo-viral.webp?v=2" alt="Viral em 1 minuto" width="240" height="240" loading="lazy" decoding="async" />
            <p>O sistema mais completo para viralizar no Instagram na área da beleza. Curso + app + mentoria, tudo em um acesso.</p>
          </div>
          <div>
            <h4>Produto</h4>
            <ul>
              <li><a href="#como-funciona">Como funciona</a></li>
              <li><a href="#o-que-recebe">O que você recebe</a></li>
              <li><a href="#investimento">Preços</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h4>Suporte</h4>
            <ul>
              <li><a href="#">Central de ajuda</a></li>
              <li><a href="#">Contato</a></li>
              <li><a href="#">Política de reembolso</a></li>
              <li><a href="#">Termos de uso</a></li>
            </ul>
          </div>
          <div>
            <h4>Redes</h4>
            <ul>
              <li><a href="#">@viralem1minuto</a></li>
              <li><a href="#">TikTok</a></li>
              <li><a href="#">YouTube</a></li>
              <li><a href="#">Telegram VIP</a></li>
            </ul>
          </div>
        </div>
        <div className="foot-bottom">
          <div>© 2026 Viral em 1 Minuto · Todos os direitos reservados</div>
          <div>CNPJ 00.000.000/0001-00 · Brasil</div>
        </div>
      </div>
    </footer>);

}

function GlassCard({ text, index }) {
  const { useState, useRef, useEffect } = React;
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2, rootMargin: "0px" }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  const cardDelay = index * 0.15;
  const circleDelay = cardDelay + 0.5;
  const checkDelay = circleDelay + 0.3;

  return (
    <div
      ref={cardRef}
      className={`glass-liquid-card ${isVisible ? 'animate-sail-in' : ''}`}
      style={{
        padding: '20px 24px',
        display: 'flex', alignItems: 'center', gap: '20px',
        opacity: 0,
        animationDelay: `${cardDelay}s`,
        transform: 'translateZ(0)'
      }}
    >
      <div style={{ position: 'relative', flexShrink: 0, width: 48, height: 48, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {isVisible && (
          <div
            className="glass-liquid-icon animate-pop-in-glass"
            style={{
              position: 'absolute', inset: 0, borderRadius: '50%', opacity: 0,
              animationDelay: `${circleDelay}s`, animationFillMode: 'forwards'
            }}
          ></div>
        )}

        {isVisible && (
          <svg
            className="animate-draw-check"
            style={{
              width: 24, height: 24, color: '#fff', position: 'relative', zIndex: 10, opacity: 0, strokeWidth: 3,
              animationDelay: `${checkDelay}s`, animationFillMode: 'forwards'
            }}
            fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
          >
            <polyline pathLength="1" points="20 6 9 17 4 12" />
          </svg>
        )}
      </div>

      <p style={{ color: 'var(--ink)', fontSize: 20, fontWeight: 600, lineHeight: 1.4, margin: 0 }}>
        {text}
      </p>
    </div>
  );
}

function StudentCard({ student, index }) {
  const { useState, useRef, useEffect } = React;
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  const delay = index * 0.12;
  const ease = 'cubic-bezier(0.16, 1, 0.3, 1)';

  return (
    <div
      ref={cardRef}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(140px)',
        filter: isVisible ? 'blur(0px)' : 'blur(12px)',
        transition:
          'opacity 0.85s ' + ease + ' ' + delay + 's, ' +
          'transform 0.85s ' + ease + ' ' + delay + 's, ' +
          'filter 0.85s ' + ease + ' ' + delay + 's',
        willChange: 'transform, opacity, filter'
      }}
    >
      <div
        className="glass-liquid-card"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          padding: '32px',
          textAlign: 'left',
          transform: isHovered ? 'scale(1.03)' : 'scale(1)',
          transition: 'transform 0.4s ' + ease,
          cursor: 'default'
        }}
      >
        <div style={{ marginBottom: 20 }}>
          <h4 style={{ fontSize: 20, fontWeight: 900, color: 'var(--ink)', margin: 0 }}>{student.nome}</h4>
          <span style={{ fontSize: 13, color: 'var(--accent)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>{student.nicho}</span>
        </div>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 12,
          background: 'rgba(255,255,255,0.3)',
          padding: '20px',
          borderRadius: '16px',
          border: '1px solid rgba(255,255,255,0.5)'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: 14, opacity: 0.7 }}>Antes</span>
            <span style={{ fontSize: 16, fontWeight: 700, color: '#ff4d4d' }}>{student.antes} seguidores</span>
          </div>
          <div style={{ height: '1px', background: 'rgba(0,0,0,0.05)' }} />
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: 14, opacity: 0.7 }}>Depois</span>
            <span style={{ fontSize: 18, fontWeight: 900, color: '#00c853' }}>{student.depois} Seguidores</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function DigitalTyper({ words = ["60 segundos.", "1 minuto."], initialIndex = 1 }) {
  const { useState, useEffect } = React;
  const [wordIndex, setWordIndex] = useState(initialIndex);
  const [text, setText] = useState(words[initialIndex] || "");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    let typingSpeed = isDeleting ? 40 : 100;

    if (!isDeleting && text === currentWord) {
      typingSpeed = 3000;
      const timeout = setTimeout(() => setIsDeleting(true), typingSpeed);
      return () => clearTimeout(timeout);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
      typingSpeed = 500;
      return;
    }

    const timeout = setTimeout(() => {
      setText(currentWord.substring(0, text.length + (isDeleting ? -1 : 1)));
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words]);

  return (
    <span style={{
      display: 'inline-flex',
      alignItems: 'center',
      whiteSpace: 'nowrap'
    }}>
      {text}
    </span>
  );
}


/* ===== Jornada Viral 10 Passos ===== */
function Journey() {
  const dashedPathRef = React.useRef(null);
  const drawMaskPathRef = React.useRef(null);
  const petContainerRef = React.useRef(null);
  const petScaleWrapperRef = React.useRef(null);
  const petFlipperRef = React.useRef(null);
  const trackContainerRef = React.useRef(null);
  const pawsContainerRef = React.useRef(null);
  const collContainerRef = React.useRef(null);
  const svgContainerRef = React.useRef(null);
  const cardsRef = React.useRef([]);

  const addToCards = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  React.useEffect(() => {
    const trackContainer = trackContainerRef.current;
    const svgContainer = svgContainerRef.current;
    const dashedPath = dashedPathRef.current;
    const drawMaskPath = drawMaskPathRef.current;
    const petContainer = petContainerRef.current;
    const petScaleWrapper = petScaleWrapperRef.current;
    const petFlipper = petFlipperRef.current;
    const pawsContainer = pawsContainerRef.current;
    const collContainer = collContainerRef.current;
    const cards = cardsRef.current;

    if (!trackContainer || !svgContainer || !dashedPath || !drawMaskPath || !petContainer) return;

    // Collectibles Setup
    const collectiblesData = [
      { type: 'coin' }, { type: 'heart' },
      { type: 'coin' }, { type: 'heart' },
      { type: 'coin' }, { type: 'heart' },
      { type: 'coin' }, { type: 'heart' },
      { type: 'coin' }, { type: 'heart' }
    ];

    collContainer.innerHTML = '';
    const collElements = collectiblesData.map(item => {
      const el = document.createElement('div');
      el.className = `collectible ${item.type}`;
      el.innerHTML = `<div class="coll-inner"><svg><use href="#pixel-${item.type}"/></svg></div>`;
      collContainer.appendChild(el);
      return { el, p: 0 };
    });

    let pathLength = 0;
    let lastX = 0; 
    let pawElements = [];

    const renderPathLayout = () => {
      const w = trackContainer.offsetWidth;
      const h = trackContainer.offsetHeight;
      svgContainer.setAttribute('viewBox', `0 0 ${w} ${h}`);
      
      const houseDoorY = 90; 
      let d = `M ${w/2} ${houseDoorY}`; 
      
      const apexYs = [];

      for (let i = 0; i < 10; i++) {
        const isCardLeft = i % 2 === 0;
        const apexX = isCardLeft ? w * 0.88 : w * 0.12; 
        
        const cardCenterY = ((i * 9) + 8 + 3.5) * h / 100;
        apexYs.push(cardCenterY);
        
        if (i === 0) {
          d += ` C ${w/2} ${houseDoorY + 60}, ${apexX} ${cardCenterY - 40}, ${apexX} ${cardCenterY}`;
        } else {
          const prevApexX = !isCardLeft ? w * 0.88 : w * 0.12;
          const prevCardCenterY = (((i - 1) * 9) + 8 + 3.5) * h / 100;
          const gapY = (prevCardCenterY + cardCenterY) / 2;
          d += ` C ${prevApexX} ${gapY}, ${apexX} ${gapY}, ${apexX} ${cardCenterY}`;
        }
      }
      
      dashedPath.setAttribute('d', d);
      drawMaskPath.setAttribute('d', d);
      pathLength = drawMaskPath.getTotalLength();
      drawMaskPath.style.strokeDasharray = pathLength;
      drawMaskPath.style.strokeDashoffset = pathLength; 

      let currentApex = 0;
      const resolution = 1500;
      for(let i=0; i<=resolution; i++) {
         let p = i / resolution;
         let pt = dashedPath.getPointAtLength(p * pathLength);
         if (currentApex < 10 && pt.y >= apexYs[currentApex]) {
             collElements[currentApex].p = p;
             collElements[currentApex].el.style.left = `${pt.x}px`;
             collElements[currentApex].el.style.top = `${pt.y}px`;
             currentApex++;
         }
      }

      pawsContainer.innerHTML = '';
      pawElements = [];
      const pawSpacing = 40; 
      const totalPaws = Math.floor(pathLength / pawSpacing);
      
      for(let i = 1; i < totalPaws; i++) {
        const l = i * pawSpacing;
        const p = l / pathLength;
        
        let skip = false;
        for(let coll of collElements) {
           if(Math.abs(coll.p - p) < 0.015) { skip = true; break; }
        }
        if(skip) continue;

        const pt1 = dashedPath.getPointAtLength(l);
        const pt2 = dashedPath.getPointAtLength(Math.min(l + 2, pathLength)); 
        
        const tangentAngle = Math.atan2(pt2.y - pt1.y, pt2.x - pt1.x);
        const perpAngle = tangentAngle + (Math.PI / 2);
        const deg = (tangentAngle * 180 / Math.PI) + 90;
        
        const offsetDist = (i % 2 === 0) ? 6 : -6;
        const offsetX = pt1.x + offsetDist * Math.cos(perpAngle);
        const offsetY = pt1.y + offsetDist * Math.sin(perpAngle);

        const paw = document.createElement('div');
        paw.className = 'paw-print';
        paw.style.left = `${offsetX}px`;
        paw.style.top = `${offsetY}px`;
        paw.style.setProperty('--rot', `${deg}deg`);
        paw.innerHTML = '<svg style="width:100%;height:100%;"><use href="#pixel-paw"/></svg>';
        
        pawsContainer.appendChild(paw);
        pawElements.push({ el: paw, p: p });
      }
    };

    const updateJourney = () => {
      if(pathLength === 0) return; 
      // Adjusted scroll calculation to be relative to the component bounds instead of global scroll
      const rect = trackContainer.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // we want progress to be 0 when top is at bottom of screen, 1 when bottom is at top
      // actually, to match the original behavior, progress depends on how far down the section we scrolled
      const startTrigger = windowHeight * 0.7; // when top of section reaches 70% of screen height
      const endTrigger = windowHeight * 0.3; // when bottom of section reaches 30% of screen height
      
      // Calculate how far the section has been scrolled.
      // progress = 0 when rect.top == windowHeight / 2
      // progress = 1 when rect.bottom == windowHeight / 2
      let progress = (windowHeight / 2 - rect.top) / rect.height;
      
      progress = Math.max(0, Math.min(1, progress)); 

      if (progress < 0.005) {
        petScaleWrapper.classList.add('inside-house');
      } else {
        petScaleWrapper.classList.remove('inside-house');
      }

      drawMaskPath.style.strokeDashoffset = pathLength - (progress * pathLength);

      const point = dashedPath.getPointAtLength(progress * pathLength);
      petContainer.style.transform = `translate(${point.x - 30}px, ${point.y - 30}px)`;

      if (point.x > lastX + 0.5) {
        petFlipper.style.transform = 'scaleX(1)';
      } else if (point.x < lastX - 0.5) {
        petFlipper.style.transform = 'scaleX(-1)';
      }
      lastX = point.x;

      cards.forEach((card, index) => {
        if (!card) return;
        const triggerPoint = collElements[index].p - 0.06; 
        if (progress >= triggerPoint) {
          card.classList.add('is-visible');
        } else {
          card.classList.remove('is-visible');
        }
      });

      collElements.forEach(item => {
        if (progress >= item.p - 0.01) {
          item.el.classList.add('collected');
        } else {
          item.el.classList.remove('collected');
        }
      });

      pawElements.forEach(paw => {
        if (progress >= paw.p - 0.005) { 
          paw.el.classList.add('visible');
        } else {
          paw.el.classList.remove('visible');
        }
      });
    };

    // Use ResizeObserver for more robust dimensions
    const ro = new ResizeObserver(() => {
      renderPathLayout();
      updateJourney();
    });
    ro.observe(trackContainer);

    renderPathLayout();

    let ticking = false;
    let walkTimeout;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateJourney();
          ticking = false;
        });
        ticking = true;
      }
      
      petContainer.classList.add('is-walking');
      clearTimeout(walkTimeout);
      walkTimeout = setTimeout(() => {
        petContainer.classList.remove('is-walking');
      }, 120);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    updateJourney();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      ro.disconnect();
      clearTimeout(walkTimeout);
    };
  }, []);

  return (
    <section className="journey-container" id="journey">
      <div className="container" style={{ position: 'relative', zIndex: 10, paddingTop: '60px', paddingBottom: '20px', textAlign: 'center' }}>
        <div className="sec-head" style={{ marginBottom: 0 }}>
          <Eyebrow icon="zap">O PASSO A PASSO</Eyebrow>
          <h2 style={{ color: 'var(--dark)' }}>Veja o diferencial do nosso <span className="chameleon-neon">ecossistema</span></h2>
          <p style={{ color: 'var(--text-sec)' }}>Alguns passos para alcançar a viralização</p>
        </div>
      </div>

      {/* SPRITES INLINE */}
      <svg style={{ display: 'none' }} xmlns="http://www.w3.org/2000/svg">
        <g id="dog-body">
          <path fill="#9B5A30" d="M 2 2 h 2 v 1 h -2 z M 16 2 h 2 v 1 h -2 z M 1 3 h 3 v 1 h -3 z M 16 3 h 3 v 1 h -3 z M 1 4 h 1 v 1 h -1 z M 18 4 h 1 v 1 h -1 z"/>
          <path fill="#F4B678" d="M 4 3 h 1 v 1 h -1 z M 15 3 h 1 v 1 h -1 z M 2 4 h 3 v 1 h -3 z M 15 4 h 3 v 1 h -3 z M 2 5 h 16 v 1 h -16 z M 1 6 h 18 v 1 h -18 z M 1 7 h 3 v 1 h -3 z M 6 7 h 8 v 1 h -8 z M 16 7 h 3 v 1 h -3 z M 1 8 h 18 v 1 h -18 z M 1 9 h 18 v 1 h -18 z M 1 10 h 5 v 1 h -5 z M 14 10 h 5 v 1 h -5 z M 1 11 h 4 v 1 h -4 z M 15 11 h 4 v 1 h -4 z M 1 12 h 4 v 1 h -4 z M 15 12 h 4 v 1 h -4 z M 1 13 h 4 v 1 h -4 z M 15 13 h 4 v 1 h -4 z M 1 14 h 18 v 1 h -18 z M 2 15 h 16 v 1 h -16 z M 3 16 h 14 v 1 h -14 z"/>
          <path fill="#1A1A1A" d="M 4 7 h 2 v 1 h -2 z M 14 7 h 2 v 1 h -2 z M 8 12 h 4 v 1 h -4 z M 7 13 h 2 v 1 h -2 z M 11 13 h 2 v 1 h -2 z"/>
          <path fill="#FFF0DB" d="M 6 10 h 8 v 1 h -8 z M 5 11 h 4 v 1 h -4 z M 11 11 h 4 v 1 h -4 z M 5 12 h 3 v 1 h -3 z M 12 12 h 3 v 1 h -3 z M 5 13 h 2 v 1 h -2 z M 13 13 h 2 v 1 h -2 z"/>
          <path fill="#3B2617" d="M 9 11 h 2 v 1 h -2 z"/>
          <path fill="#FF8FBC" d="M 9 13 h 2 v 1 h -2 z"/>
        </g>
        <g id="dog-leg-left">
          <path fill="#F4B678" d="M 4 17 h 4 v 2 h -4 z"/>
        </g>
        <g id="dog-leg-right">
          <path fill="#F4B678" d="M 12 17 h 4 v 2 h -4 z"/>
        </g>

        <symbol id="pixel-doghouse" viewBox="0 0 30 29" shapeRendering="crispEdges" dangerouslySetInnerHTML={{ __html: `<rect x="13" y="0" width="1.05" height="1.05" fill="#FF6B9E"/><rect x="14" y="0" width="1.05" height="1.05" fill="#FF6B9E"/><rect x="15" y="0" width="1.05" height="1.05" fill="#FF6B9E"/><rect x="16" y="0" width="1.05" height="1.05" fill="#FF6B9E"/><rect x="12" y="1" width="1.05" height="1.05" fill="#FF6B9E"/><rect x="13" y="1" width="1.05" height="1.05" fill="#FF6B9E"/><rect x="14" y="1" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="15" y="1" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="16" y="1" width="1.05" height="1.05" fill="#D81B60"/><rect x="17" y="1" width="1.05" height="1.05" fill="#D81B60"/><rect x="11" y="2" width="1.05" height="1.05" fill="#FF6B9E"/><rect x="12" y="2" width="1.05" height="1.05" fill="#FF6B9E"/><rect x="13" y="2" width="1.05" height="1.05" fill="#FF6B9E"/><rect x="14" y="2" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="15" y="2" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="16" y="2" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="17" y="2" width="1.05" height="1.05" fill="#D81B60"/><rect x="18" y="2" width="1.05" height="1.05" fill="#D81B60"/><rect x="10" y="3" width="1.05" height="1.05" fill="#FF6B9E"/><rect x="11" y="3" width="1.05" height="1.05" fill="#FF6B9E"/><rect x="12" y="3" width="1.05" height="1.05" fill="#FF6B9E"/><rect x="13" y="3" width="1.05" height="1.05" fill="#FF6B9E"/><rect x="14" y="3" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="15" y="3" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="16" y="3" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="17" y="3" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="18" y="3" width="1.05" height="1.05" fill="#D81B60"/><rect x="19" y="3" width="1.05" height="1.05" fill="#D81B60"/><rect x="9" y="4" width="1.05" height="1.05" fill="#FF6B9E"/><rect x="10" y="4" width="1.05" height="1.05" fill="#FF6B9E"/><rect x="11" y="4" width="1.05" height="1.05" fill="#FF6B9E"/><rect x="12" y="4" width="1.05" height="1.05" fill="#FF6B9E"/><rect x="13" y="4" width="1.05" height="1.05" fill="#FF6B9E"/><rect x="14" y="4" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="15" y="4" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="16" y="4" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="17" y="4" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="18" y="4" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="19" y="4" width="1.05" height="1.05" fill="#D81B60"/><rect x="20" y="4" width="1.05" height="1.05" fill="#D81B60"/><rect x="8" y="5" width="1.05" height="1.05" fill="#FF6B9E"/><rect x="9" y="5" width="1.05" height="1.05" fill="#FF6B9E"/><rect x="10" y="5" width="1.05" height="1.05" fill="#FF6B9E"/><rect x="11" y="5" width="1.05" height="1.05" fill="#FF6B9E"/><rect x="12" y="5" width="1.05" height="1.05" fill="#FF6B9E"/><rect x="13" y="5" width="1.05" height="1.05" fill="#FF6B9E"/><rect x="14" y="5" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="15" y="5" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="16" y="5" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="17" y="5" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="18" y="5" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="19" y="5" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="20" y="5" width="1.05" height="1.05" fill="#D81B60"/><rect x="21" y="5" width="1.05" height="1.05" fill="#D81B60"/><rect x="7" y="6" width="1.05" height="1.05" fill="#FF6B9E"/><rect x="8" y="6" width="1.05" height="1.05" fill="#FF6B9E"/><rect x="9" y="6" width="1.05" height="1.05" fill="#FF6B9E"/><rect x="10" y="6" width="1.05" height="1.05" fill="#FF6B9E"/><rect x="11" y="6" width="1.05" height="1.05" fill="#FF6B9E"/><rect x="12" y="6" width="1.05" height="1.05" fill="#FF6B9E"/><rect x="13" y="6" width="1.05" height="1.05" fill="#FF6B9E"/><rect x="14" y="6" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="15" y="6" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="16" y="6" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="17" y="6" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="18" y="6" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="19" y="6" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="20" y="6" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="21" y="6" width="1.05" height="1.05" fill="#D81B60"/><rect x="22" y="6" width="1.05" height="1.05" fill="#D81B60"/><rect x="6" y="7" width="1.05" height="1.05" fill="#FF6B9E"/><rect x="7" y="7" width="1.05" height="1.05" fill="#FF6B9E"/><rect x="8" y="7" width="1.05" height="1.05" fill="#FF6B9E"/><rect x="9" y="7" width="1.05" height="1.05" fill="#FF6B9E"/><rect x="10" y="7" width="1.05" height="1.05" fill="#FF6B9E"/><rect x="11" y="7" width="1.05" height="1.05" fill="#FF6B9E"/><rect x="12" y="7" width="1.05" height="1.05" fill="#FF6B9E"/><rect x="13" y="7" width="1.05" height="1.05" fill="#FF6B9E"/><rect x="14" y="7" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="15" y="7" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="16" y="7" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="17" y="7" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="18" y="7" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="19" y="7" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="20" y="7" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="21" y="7" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="22" y="7" width="1.05" height="1.05" fill="#D81B60"/><rect x="23" y="7" width="1.05" height="1.05" fill="#D81B60"/><rect x="5" y="8" width="1.05" height="1.05" fill="#FF6B9E"/><rect x="6" y="8" width="1.05" height="1.05" fill="#FF6B9E"/><rect x="7" y="8" width="1.05" height="1.05" fill="#FF6B9E"/><rect x="8" y="8" width="1.05" height="1.05" fill="#FF6B9E"/><rect x="9" y="8" width="1.05" height="1.05" fill="#FF6B9E"/><rect x="10" y="8" width="1.05" height="1.05" fill="#FF6B9E"/><rect x="11" y="8" width="1.05" height="1.05" fill="#FF6B9E"/><rect x="12" y="8" width="1.05" height="1.05" fill="#FF6B9E"/><rect x="13" y="8" width="1.05" height="1.05" fill="#FF6B9E"/><rect x="14" y="8" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="15" y="8" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="16" y="8" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="17" y="8" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="18" y="8" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="19" y="8" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="20" y="8" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="21" y="8" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="22" y="8" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="23" y="8" width="1.05" height="1.05" fill="#D81B60"/><rect x="24" y="8" width="1.05" height="1.05" fill="#D81B60"/><rect x="4" y="9" width="1.05" height="1.05" fill="#FF6B9E"/><rect x="5" y="9" width="1.05" height="1.05" fill="#FF6B9E"/><rect x="6" y="9" width="1.05" height="1.05" fill="#FF6B9E"/><rect x="7" y="9" width="1.05" height="1.05" fill="#FF6B9E"/><rect x="8" y="9" width="1.05" height="1.05" fill="#FF6B9E"/><rect x="9" y="9" width="1.05" height="1.05" fill="#FF6B9E"/><rect x="10" y="9" width="1.05" height="1.05" fill="#FF6B9E"/><rect x="11" y="9" width="1.05" height="1.05" fill="#FF6B9E"/><rect x="12" y="9" width="1.05" height="1.05" fill="#FF6B9E"/><rect x="13" y="9" width="1.05" height="1.05" fill="#FF6B9E"/><rect x="14" y="9" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="15" y="9" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="16" y="9" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="17" y="9" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="18" y="9" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="19" y="9" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="20" y="9" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="21" y="9" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="22" y="9" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="23" y="9" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="24" y="9" width="1.05" height="1.05" fill="#D81B60"/><rect x="25" y="9" width="1.05" height="1.05" fill="#D81B60"/><rect x="3" y="10" width="1.05" height="1.05" fill="#FF6B9E"/><rect x="4" y="10" width="1.05" height="1.05" fill="#FF6B9E"/><rect x="5" y="10" width="1.05" height="1.05" fill="#FF6B9E"/><rect x="6" y="10" width="1.05" height="1.05" fill="#FF6B9E"/><rect x="7" y="10" width="1.05" height="1.05" fill="#FF6B9E"/><rect x="8" y="10" width="1.05" height="1.05" fill="#FF6B9E"/><rect x="9" y="10" width="1.05" height="1.05" fill="#FF6B9E"/><rect x="10" y="10" width="1.05" height="1.05" fill="#FF6B9E"/><rect x="11" y="10" width="1.05" height="1.05" fill="#FF6B9E"/><rect x="12" y="10" width="1.05" height="1.05" fill="#FF6B9E"/><rect x="13" y="10" width="1.05" height="1.05" fill="#FF6B9E"/><rect x="14" y="10" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="15" y="10" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="16" y="10" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="17" y="10" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="18" y="10" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="19" y="10" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="20" y="10" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="21" y="10" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="22" y="10" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="23" y="10" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="24" y="10" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="25" y="10" width="1.05" height="1.05" fill="#D81B60"/><rect x="26" y="10" width="1.05" height="1.05" fill="#D81B60"/><rect x="2" y="11" width="1.05" height="1.05" fill="#FF6B9E"/><rect x="3" y="11" width="1.05" height="1.05" fill="#FF6B9E"/><rect x="4" y="11" width="1.05" height="1.05" fill="#FF6B9E"/><rect x="5" y="11" width="1.05" height="1.05" fill="#FF6B9E"/><rect x="6" y="11" width="1.05" height="1.05" fill="#FF6B9E"/><rect x="7" y="11" width="1.05" height="1.05" fill="#FF6B9E"/><rect x="8" y="11" width="1.05" height="1.05" fill="#FF6B9E"/><rect x="9" y="11" width="1.05" height="1.05" fill="#FF6B9E"/><rect x="10" y="11" width="1.05" height="1.05" fill="#FF6B9E"/><rect x="11" y="11" width="1.05" height="1.05" fill="#FF6B9E"/><rect x="12" y="11" width="1.05" height="1.05" fill="#FF6B9E"/><rect x="13" y="11" width="1.05" height="1.05" fill="#FF6B9E"/><rect x="14" y="11" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="15" y="11" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="16" y="11" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="17" y="11" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="18" y="11" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="19" y="11" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="20" y="11" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="21" y="11" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="22" y="11" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="23" y="11" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="24" y="11" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="25" y="11" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="26" y="11" width="1.05" height="1.05" fill="#D81B60"/><rect x="27" y="11" width="1.05" height="1.05" fill="#D81B60"/><rect x="1" y="12" width="1.05" height="1.05" fill="#FF6B9E"/><rect x="2" y="12" width="1.05" height="1.05" fill="#FF6B9E"/><rect x="3" y="12" width="1.05" height="1.05" fill="#FF6B9E"/><rect x="4" y="12" width="1.05" height="1.05" fill="#FF6B9E"/><rect x="5" y="12" width="1.05" height="1.05" fill="#FF6B9E"/><rect x="6" y="12" width="1.05" height="1.05" fill="#FF6B9E"/><rect x="7" y="12" width="1.05" height="1.05" fill="#FF6B9E"/><rect x="8" y="12" width="1.05" height="1.05" fill="#FF6B9E"/><rect x="9" y="12" width="1.05" height="1.05" fill="#FF6B9E"/><rect x="10" y="12" width="1.05" height="1.05" fill="#FF6B9E"/><rect x="11" y="12" width="1.05" height="1.05" fill="#FF6B9E"/><rect x="12" y="12" width="1.05" height="1.05" fill="#FF6B9E"/><rect x="13" y="12" width="1.05" height="1.05" fill="#FF6B9E"/><rect x="14" y="12" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="15" y="12" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="16" y="12" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="17" y="12" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="18" y="12" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="19" y="12" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="20" y="12" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="21" y="12" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="22" y="12" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="23" y="12" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="24" y="12" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="25" y="12" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="26" y="12" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="27" y="12" width="1.05" height="1.05" fill="#D81B60"/><rect x="28" y="12" width="1.05" height="1.05" fill="#D81B60"/><rect x="0" y="13" width="1.05" height="1.05" fill="#FF6B9E"/><rect x="1" y="13" width="1.05" height="1.05" fill="#FF6B9E"/><rect x="2" y="13" width="1.05" height="1.05" fill="#FF6B9E"/><rect x="3" y="13" width="1.05" height="1.05" fill="#FF6B9E"/><rect x="4" y="13" width="1.05" height="1.05" fill="#FF6B9E"/><rect x="5" y="13" width="1.05" height="1.05" fill="#FF6B9E"/><rect x="6" y="13" width="1.05" height="1.05" fill="#FF6B9E"/><rect x="7" y="13" width="1.05" height="1.05" fill="#FF6B9E"/><rect x="8" y="13" width="1.05" height="1.05" fill="#FF6B9E"/><rect x="9" y="13" width="1.05" height="1.05" fill="#FF6B9E"/><rect x="10" y="13" width="1.05" height="1.05" fill="#FF6B9E"/><rect x="11" y="13" width="1.05" height="1.05" fill="#FF6B9E"/><rect x="12" y="13" width="1.05" height="1.05" fill="#FF6B9E"/><rect x="13" y="13" width="1.05" height="1.05" fill="#FF6B9E"/><rect x="14" y="13" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="15" y="13" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="16" y="13" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="17" y="13" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="18" y="13" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="19" y="13" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="20" y="13" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="21" y="13" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="22" y="13" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="23" y="13" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="24" y="13" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="25" y="13" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="26" y="13" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="27" y="13" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="28" y="13" width="1.05" height="1.05" fill="#D81B60"/><rect x="29" y="13" width="1.05" height="1.05" fill="#D81B60"/><rect x="0" y="14" width="1.05" height="1.05" fill="#D81B60"/><rect x="4" y="14" width="1.05" height="1.05" fill="#8A4F2D"/><rect x="5" y="14" width="1.05" height="1.05" fill="#8A4F2D"/><rect x="6" y="14" width="1.05" height="1.05" fill="#8A4F2D"/><rect x="7" y="14" width="1.05" height="1.05" fill="#8A4F2D"/><rect x="8" y="14" width="1.05" height="1.05" fill="#8A4F2D"/><rect x="9" y="14" width="1.05" height="1.05" fill="#8A4F2D"/><rect x="10" y="14" width="1.05" height="1.05" fill="#8A4F2D"/><rect x="11" y="14" width="1.05" height="1.05" fill="#8A4F2D"/><rect x="12" y="14" width="1.05" height="1.05" fill="#8A4F2D"/><rect x="13" y="14" width="1.05" height="1.05" fill="#8A4F2D"/><rect x="14" y="14" width="1.05" height="1.05" fill="#8A4F2D"/><rect x="15" y="14" width="1.05" height="1.05" fill="#8A4F2D"/><rect x="16" y="14" width="1.05" height="1.05" fill="#8A4F2D"/><rect x="17" y="14" width="1.05" height="1.05" fill="#8A4F2D"/><rect x="18" y="14" width="1.05" height="1.05" fill="#8A4F2D"/><rect x="19" y="14" width="1.05" height="1.05" fill="#8A4F2D"/><rect x="20" y="14" width="1.05" height="1.05" fill="#8A4F2D"/><rect x="21" y="14" width="1.05" height="1.05" fill="#8A4F2D"/><rect x="22" y="14" width="1.05" height="1.05" fill="#8A4F2D"/><rect x="23" y="14" width="1.05" height="1.05" fill="#8A4F2D"/><rect x="24" y="14" width="1.05" height="1.05" fill="#8A4F2D"/><rect x="25" y="14" width="1.05" height="1.05" fill="#8A4F2D"/><rect x="29" y="14" width="1.05" height="1.05" fill="#D81B60"/><rect x="4" y="15" width="1.05" height="1.05" fill="#8A4F2D"/><rect x="5" y="15" width="1.05" height="1.05" fill="#ECA764"/><rect x="6" y="15" width="1.05" height="1.05" fill="#ECA764"/><rect x="7" y="15" width="1.05" height="1.05" fill="#ECA764"/><rect x="8" y="15" width="1.05" height="1.05" fill="#ECA764"/><rect x="9" y="15" width="1.05" height="1.05" fill="#ECA764"/><rect x="10" y="15" width="1.05" height="1.05" fill="#ECA764"/><rect x="11" y="15" width="1.05" height="1.05" fill="#ECA764"/><rect x="12" y="15" width="1.05" height="1.05" fill="#ECA764"/><rect x="13" y="15" width="1.05" height="1.05" fill="#ECA764"/><rect x="14" y="15" width="1.05" height="1.05" fill="#ECA764"/><rect x="15" y="15" width="1.05" height="1.05" fill="#ECA764"/><rect x="16" y="15" width="1.05" height="1.05" fill="#ECA764"/><rect x="17" y="15" width="1.05" height="1.05" fill="#ECA764"/><rect x="18" y="15" width="1.05" height="1.05" fill="#ECA764"/><rect x="19" y="15" width="1.05" height="1.05" fill="#ECA764"/><rect x="20" y="15" width="1.05" height="1.05" fill="#ECA764"/><rect x="21" y="15" width="1.05" height="1.05" fill="#ECA764"/><rect x="22" y="15" width="1.05" height="1.05" fill="#ECA764"/><rect x="23" y="15" width="1.05" height="1.05" fill="#ECA764"/><rect x="24" y="15" width="1.05" height="1.05" fill="#ECA764"/><rect x="25" y="15" width="1.05" height="1.05" fill="#8A4F2D"/><rect x="4" y="16" width="1.05" height="1.05" fill="#8A4F2D"/><rect x="5" y="16" width="1.05" height="1.05" fill="#ECA764"/><rect x="6" y="16" width="1.05" height="1.05" fill="#ECA764"/><rect x="7" y="16" width="1.05" height="1.05" fill="#ECA764"/><rect x="8" y="16" width="1.05" height="1.05" fill="#ECA764"/><rect x="9" y="16" width="1.05" height="1.05" fill="#ECA764"/><rect x="10" y="16" width="1.05" height="1.05" fill="#ECA764"/><rect x="11" y="16" width="1.05" height="1.05" fill="#ECA764"/><rect x="12" y="16" width="1.05" height="1.05" fill="#ECA764"/><rect x="13" y="16" width="1.05" height="1.05" fill="#ECA764"/><rect x="14" y="16" width="1.05" height="1.05" fill="#ECA764"/><rect x="15" y="16" width="1.05" height="1.05" fill="#ECA764"/><rect x="16" y="16" width="1.05" height="1.05" fill="#ECA764"/><rect x="17" y="16" width="1.05" height="1.05" fill="#ECA764"/><rect x="18" y="16" width="1.05" height="1.05" fill="#ECA764"/><rect x="19" y="16" width="1.05" height="1.05" fill="#ECA764"/><rect x="20" y="16" width="1.05" height="1.05" fill="#ECA764"/><rect x="21" y="16" width="1.05" height="1.05" fill="#ECA764"/><rect x="22" y="16" width="1.05" height="1.05" fill="#ECA764"/><rect x="23" y="16" width="1.05" height="1.05" fill="#ECA764"/><rect x="24" y="16" width="1.05" height="1.05" fill="#ECA764"/><rect x="25" y="16" width="1.05" height="1.05" fill="#8A4F2D"/><rect x="4" y="17" width="1.05" height="1.05" fill="#8A4F2D"/><rect x="5" y="17" width="1.05" height="1.05" fill="#ECA764"/><rect x="6" y="17" width="1.05" height="1.05" fill="#ECA764"/><rect x="7" y="17" width="1.05" height="1.05" fill="#ECA764"/><rect x="8" y="17" width="1.05" height="1.05" fill="#ECA764"/><rect x="9" y="17" width="1.05" height="1.05" fill="#ECA764"/><rect x="10" y="17" width="1.05" height="1.05" fill="#ECA764"/><rect x="11" y="17" width="1.05" height="1.05" fill="#ECA764"/><rect x="12" y="17" width="1.05" height="1.05" fill="#ECA764"/><rect x="13" y="17" width="1.05" height="1.05" fill="#ECA764"/><rect x="14" y="17" width="1.05" height="1.05" fill="#ECA764"/><rect x="15" y="17" width="1.05" height="1.05" fill="#ECA764"/><rect x="16" y="17" width="1.05" height="1.05" fill="#ECA764"/><rect x="17" y="17" width="1.05" height="1.05" fill="#ECA764"/><rect x="18" y="17" width="1.05" height="1.05" fill="#ECA764"/><rect x="19" y="17" width="1.05" height="1.05" fill="#ECA764"/><rect x="20" y="17" width="1.05" height="1.05" fill="#ECA764"/><rect x="21" y="17" width="1.05" height="1.05" fill="#ECA764"/><rect x="22" y="17" width="1.05" height="1.05" fill="#ECA764"/><rect x="23" y="17" width="1.05" height="1.05" fill="#ECA764"/><rect x="24" y="17" width="1.05" height="1.05" fill="#ECA764"/><rect x="25" y="17" width="1.05" height="1.05" fill="#8A4F2D"/><rect x="4" y="18" width="1.05" height="1.05" fill="#8A4F2D"/><rect x="5" y="18" width="1.05" height="1.05" fill="#ECA764"/><rect x="6" y="18" width="1.05" height="1.05" fill="#ECA764"/><rect x="7" y="18" width="1.05" height="1.05" fill="#ECA764"/><rect x="8" y="18" width="1.05" height="1.05" fill="#ECA764"/><rect x="9" y="18" width="1.05" height="1.05" fill="#ECA764"/><rect x="10" y="18" width="1.05" height="1.05" fill="#ECA764"/><rect x="11" y="18" width="1.05" height="1.05" fill="#ECA764"/><rect x="12" y="18" width="1.05" height="1.05" fill="#ECA764"/><rect x="13" y="18" width="1.05" height="1.05" fill="#ECA764"/><rect x="14" y="18" width="1.05" height="1.05" fill="#ECA764"/><rect x="15" y="18" width="1.05" height="1.05" fill="#ECA764"/><rect x="16" y="18" width="1.05" height="1.05" fill="#ECA764"/><rect x="17" y="18" width="1.05" height="1.05" fill="#ECA764"/><rect x="18" y="18" width="1.05" height="1.05" fill="#ECA764"/><rect x="19" y="18" width="1.05" height="1.05" fill="#ECA764"/><rect x="20" y="18" width="1.05" height="1.05" fill="#ECA764"/><rect x="21" y="18" width="1.05" height="1.05" fill="#ECA764"/><rect x="22" y="18" width="1.05" height="1.05" fill="#ECA764"/><rect x="23" y="18" width="1.05" height="1.05" fill="#ECA764"/><rect x="24" y="18" width="1.05" height="1.05" fill="#ECA764"/><rect x="25" y="18" width="1.05" height="1.05" fill="#8A4F2D"/><rect x="4" y="19" width="1.05" height="1.05" fill="#8A4F2D"/><rect x="5" y="19" width="1.05" height="1.05" fill="#ECA764"/><rect x="6" y="19" width="1.05" height="1.05" fill="#ECA764"/><rect x="7" y="19" width="1.05" height="1.05" fill="#ECA764"/><rect x="8" y="19" width="1.05" height="1.05" fill="#ECA764"/><rect x="9" y="19" width="1.05" height="1.05" fill="#ECA764"/><rect x="10" y="19" width="1.05" height="1.05" fill="#ECA764"/><rect x="11" y="19" width="1.05" height="1.05" fill="#ECA764"/><rect x="12" y="19" width="1.05" height="1.05" fill="#ECA764"/><rect x="13" y="19" width="1.05" height="1.05" fill="#ECA764"/><rect x="14" y="19" width="1.05" height="1.05" fill="#ECA764"/><rect x="15" y="19" width="1.05" height="1.05" fill="#ECA764"/><rect x="16" y="19" width="1.05" height="1.05" fill="#ECA764"/><rect x="17" y="19" width="1.05" height="1.05" fill="#ECA764"/><rect x="18" y="19" width="1.05" height="1.05" fill="#ECA764"/><rect x="19" y="19" width="1.05" height="1.05" fill="#ECA764"/><rect x="20" y="19" width="1.05" height="1.05" fill="#ECA764"/><rect x="21" y="19" width="1.05" height="1.05" fill="#ECA764"/><rect x="22" y="19" width="1.05" height="1.05" fill="#ECA764"/><rect x="23" y="19" width="1.05" height="1.05" fill="#ECA764"/><rect x="24" y="19" width="1.05" height="1.05" fill="#ECA764"/><rect x="25" y="19" width="1.05" height="1.05" fill="#8A4F2D"/><rect x="4" y="20" width="1.05" height="1.05" fill="#8A4F2D"/><rect x="5" y="20" width="1.05" height="1.05" fill="#ECA764"/><rect x="6" y="20" width="1.05" height="1.05" fill="#ECA764"/><rect x="7" y="20" width="1.05" height="1.05" fill="#ECA764"/><rect x="8" y="20" width="1.05" height="1.05" fill="#ECA764"/><rect x="9" y="20" width="1.05" height="1.05" fill="#ECA764"/><rect x="10" y="20" width="1.05" height="1.05" fill="#ECA764"/><rect x="11" y="20" width="1.05" height="1.05" fill="#ECA764"/><rect x="12" y="20" width="1.05" height="1.05" fill="#ECA764"/><rect x="13" y="20" width="1.05" height="1.05" fill="#ECA764"/><rect x="14" y="20" width="1.05" height="1.05" fill="#ECA764"/><rect x="15" y="20" width="1.05" height="1.05" fill="#ECA764"/><rect x="16" y="20" width="1.05" height="1.05" fill="#ECA764"/><rect x="17" y="20" width="1.05" height="1.05" fill="#ECA764"/><rect x="18" y="20" width="1.05" height="1.05" fill="#ECA764"/><rect x="19" y="20" width="1.05" height="1.05" fill="#ECA764"/><rect x="20" y="20" width="1.05" height="1.05" fill="#ECA764"/><rect x="21" y="20" width="1.05" height="1.05" fill="#ECA764"/><rect x="22" y="20" width="1.05" height="1.05" fill="#ECA764"/><rect x="23" y="20" width="1.05" height="1.05" fill="#ECA764"/><rect x="24" y="20" width="1.05" height="1.05" fill="#ECA764"/><rect x="25" y="20" width="1.05" height="1.05" fill="#8A4F2D"/><rect x="4" y="21" width="1.05" height="1.05" fill="#8A4F2D"/><rect x="5" y="21" width="1.05" height="1.05" fill="#ECA764"/><rect x="6" y="21" width="1.05" height="1.05" fill="#ECA764"/><rect x="7" y="21" width="1.05" height="1.05" fill="#ECA764"/><rect x="8" y="21" width="1.05" height="1.05" fill="#ECA764"/><rect x="9" y="21" width="1.05" height="1.05" fill="#8A4F2D"/><rect x="10" y="21" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="11" y="21" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="12" y="21" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="13" y="21" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="14" y="21" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="15" y="21" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="16" y="21" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="17" y="21" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="18" y="21" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="19" y="21" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="20" y="21" width="1.05" height="1.05" fill="#8A4F2D"/><rect x="21" y="21" width="1.05" height="1.05" fill="#ECA764"/><rect x="22" y="21" width="1.05" height="1.05" fill="#ECA764"/><rect x="23" y="21" width="1.05" height="1.05" fill="#ECA764"/><rect x="24" y="21" width="1.05" height="1.05" fill="#ECA764"/><rect x="25" y="21" width="1.05" height="1.05" fill="#8A4F2D"/><rect x="4" y="22" width="1.05" height="1.05" fill="#8A4F2D"/><rect x="5" y="22" width="1.05" height="1.05" fill="#ECA764"/><rect x="6" y="22" width="1.05" height="1.05" fill="#ECA764"/><rect x="7" y="22" width="1.05" height="1.05" fill="#ECA764"/><rect x="8" y="22" width="1.05" height="1.05" fill="#8A4F2D"/><rect x="9" y="22" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="10" y="22" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="11" y="22" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="12" y="22" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="13" y="22" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="14" y="22" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="15" y="22" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="16" y="22" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="17" y="22" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="18" y="22" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="19" y="22" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="20" y="22" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="21" y="22" width="1.05" height="1.05" fill="#8A4F2D"/><rect x="22" y="22" width="1.05" height="1.05" fill="#ECA764"/><rect x="23" y="22" width="1.05" height="1.05" fill="#ECA764"/><rect x="24" y="22" width="1.05" height="1.05" fill="#ECA764"/><rect x="25" y="22" width="1.05" height="1.05" fill="#8A4F2D"/><rect x="4" y="23" width="1.05" height="1.05" fill="#8A4F2D"/><rect x="5" y="23" width="1.05" height="1.05" fill="#ECA764"/><rect x="6" y="23" width="1.05" height="1.05" fill="#ECA764"/><rect x="7" y="23" width="1.05" height="1.05" fill="#ECA764"/><rect x="8" y="23" width="1.05" height="1.05" fill="#8A4F2D"/><rect x="9" y="23" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="10" y="23" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="11" y="23" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="12" y="23" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="13" y="23" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="14" y="23" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="15" y="23" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="16" y="23" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="17" y="23" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="18" y="23" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="19" y="23" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="20" y="23" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="21" y="23" width="1.05" height="1.05" fill="#8A4F2D"/><rect x="22" y="23" width="1.05" height="1.05" fill="#ECA764"/><rect x="23" y="23" width="1.05" height="1.05" fill="#ECA764"/><rect x="24" y="23" width="1.05" height="1.05" fill="#ECA764"/><rect x="25" y="23" width="1.05" height="1.05" fill="#8A4F2D"/><rect x="4" y="24" width="1.05" height="1.05" fill="#8A4F2D"/><rect x="5" y="24" width="1.05" height="1.05" fill="#ECA764"/><rect x="6" y="24" width="1.05" height="1.05" fill="#ECA764"/><rect x="7" y="24" width="1.05" height="1.05" fill="#ECA764"/><rect x="8" y="24" width="1.05" height="1.05" fill="#8A4F2D"/><rect x="9" y="24" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="10" y="24" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="11" y="24" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="12" y="24" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="13" y="24" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="14" y="24" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="15" y="24" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="16" y="24" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="17" y="24" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="18" y="24" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="19" y="24" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="20" y="24" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="21" y="24" width="1.05" height="1.05" fill="#8A4F2D"/><rect x="22" y="24" width="1.05" height="1.05" fill="#ECA764"/><rect x="23" y="24" width="1.05" height="1.05" fill="#ECA764"/><rect x="24" y="24" width="1.05" height="1.05" fill="#ECA764"/><rect x="25" y="24" width="1.05" height="1.05" fill="#8A4F2D"/><rect x="4" y="25" width="1.05" height="1.05" fill="#8A4F2D"/><rect x="5" y="25" width="1.05" height="1.05" fill="#ECA764"/><rect x="6" y="25" width="1.05" height="1.05" fill="#ECA764"/><rect x="7" y="25" width="1.05" height="1.05" fill="#ECA764"/><rect x="8" y="25" width="1.05" height="1.05" fill="#8A4F2D"/><rect x="9" y="25" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="10" y="25" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="11" y="25" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="12" y="25" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="13" y="25" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="14" y="25" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="15" y="25" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="16" y="25" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="17" y="25" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="18" y="25" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="19" y="25" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="20" y="25" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="21" y="25" width="1.05" height="1.05" fill="#8A4F2D"/><rect x="22" y="25" width="1.05" height="1.05" fill="#ECA764"/><rect x="23" y="25" width="1.05" height="1.05" fill="#ECA764"/><rect x="24" y="25" width="1.05" height="1.05" fill="#ECA764"/><rect x="25" y="25" width="1.05" height="1.05" fill="#8A4F2D"/><rect x="4" y="26" width="1.05" height="1.05" fill="#8A4F2D"/><rect x="5" y="26" width="1.05" height="1.05" fill="#ECA764"/><rect x="6" y="26" width="1.05" height="1.05" fill="#ECA764"/><rect x="7" y="26" width="1.05" height="1.05" fill="#ECA764"/><rect x="8" y="26" width="1.05" height="1.05" fill="#8A4F2D"/><rect x="9" y="26" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="10" y="26" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="11" y="26" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="12" y="26" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="13" y="26" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="14" y="26" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="15" y="26" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="16" y="26" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="17" y="26" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="18" y="26" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="19" y="26" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="20" y="26" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="21" y="26" width="1.05" height="1.05" fill="#8A4F2D"/><rect x="22" y="26" width="1.05" height="1.05" fill="#ECA764"/><rect x="23" y="26" width="1.05" height="1.05" fill="#ECA764"/><rect x="24" y="26" width="1.05" height="1.05" fill="#ECA764"/><rect x="25" y="26" width="1.05" height="1.05" fill="#8A4F2D"/><rect x="4" y="27" width="1.05" height="1.05" fill="#8A4F2D"/><rect x="5" y="27" width="1.05" height="1.05" fill="#ECA764"/><rect x="6" y="27" width="1.05" height="1.05" fill="#ECA764"/><rect x="7" y="27" width="1.05" height="1.05" fill="#ECA764"/><rect x="8" y="27" width="1.05" height="1.05" fill="#8A4F2D"/><rect x="9" y="27" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="10" y="27" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="11" y="27" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="12" y="27" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="13" y="27" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="14" y="27" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="15" y="27" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="16" y="27" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="17" y="27" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="18" y="27" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="19" y="27" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="20" y="27" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="21" y="27" width="1.05" height="1.05" fill="#8A4F2D"/><rect x="22" y="27" width="1.05" height="1.05" fill="#ECA764"/><rect x="23" y="27" width="1.05" height="1.05" fill="#ECA764"/><rect x="24" y="27" width="1.05" height="1.05" fill="#ECA764"/><rect x="25" y="27" width="1.05" height="1.05" fill="#8A4F2D"/><rect x="4" y="28" width="1.05" height="1.05" fill="#8A4F2D"/><rect x="5" y="28" width="1.05" height="1.05" fill="#8A4F2D"/><rect x="6" y="28" width="1.05" height="1.05" fill="#8A4F2D"/><rect x="7" y="28" width="1.05" height="1.05" fill="#8A4F2D"/><rect x="8" y="28" width="1.05" height="1.05" fill="#8A4F2D"/><rect x="9" y="28" width="1.05" height="1.05" fill="#8A4F2D"/><rect x="10" y="28" width="1.05" height="1.05" fill="#8A4F2D"/><rect x="11" y="28" width="1.05" height="1.05" fill="#8A4F2D"/><rect x="12" y="28" width="1.05" height="1.05" fill="#8A4F2D"/><rect x="13" y="28" width="1.05" height="1.05" fill="#8A4F2D"/><rect x="14" y="28" width="1.05" height="1.05" fill="#8A4F2D"/><rect x="15" y="28" width="1.05" height="1.05" fill="#8A4F2D"/><rect x="16" y="28" width="1.05" height="1.05" fill="#8A4F2D"/><rect x="17" y="28" width="1.05" height="1.05" fill="#8A4F2D"/><rect x="18" y="28" width="1.05" height="1.05" fill="#8A4F2D"/><rect x="19" y="28" width="1.05" height="1.05" fill="#8A4F2D"/><rect x="20" y="28" width="1.05" height="1.05" fill="#8A4F2D"/><rect x="21" y="28" width="1.05" height="1.05" fill="#8A4F2D"/><rect x="22" y="28" width="1.05" height="1.05" fill="#8A4F2D"/><rect x="23" y="28" width="1.05" height="1.05" fill="#8A4F2D"/><rect x="24" y="28" width="1.05" height="1.05" fill="#8A4F2D"/><rect x="25" y="28" width="1.05" height="1.05" fill="#8A4F2D"/>` }} />
        <symbol id="pixel-trophy-cash" viewBox="0 0 48 44" shapeRendering="crispEdges" dangerouslySetInnerHTML={{ __html: `<rect x="18" y="0" width="1.05" height="1.05" fill="#2D1C11"/><rect x="19" y="0" width="1.05" height="1.05" fill="#2D1C11"/><rect x="20" y="0" width="1.05" height="1.05" fill="#2D1C11"/><rect x="21" y="0" width="1.05" height="1.05" fill="#2D1C11"/><rect x="22" y="0" width="1.05" height="1.05" fill="#2D1C11"/><rect x="23" y="0" width="1.05" height="1.05" fill="#2D1C11"/><rect x="24" y="0" width="1.05" height="1.05" fill="#2D1C11"/><rect x="25" y="0" width="1.05" height="1.05" fill="#2D1C11"/><rect x="26" y="0" width="1.05" height="1.05" fill="#2D1C11"/><rect x="27" y="0" width="1.05" height="1.05" fill="#2D1C11"/><rect x="28" y="0" width="1.05" height="1.05" fill="#2D1C11"/><rect x="29" y="0" width="1.05" height="1.05" fill="#2D1C11"/><rect x="16" y="1" width="1.05" height="1.05" fill="#2D1C11"/><rect x="17" y="1" width="1.05" height="1.05" fill="#2D1C11"/><rect x="18" y="1" width="1.05" height="1.05" fill="#FFF275"/><rect x="19" y="1" width="1.05" height="1.05" fill="#FFF275"/><rect x="20" y="1" width="1.05" height="1.05" fill="#FFF275"/><rect x="21" y="1" width="1.05" height="1.05" fill="#FFF275"/><rect x="22" y="1" width="1.05" height="1.05" fill="#FFF275"/><rect x="23" y="1" width="1.05" height="1.05" fill="#FFF275"/><rect x="24" y="1" width="1.05" height="1.05" fill="#FFF275"/><rect x="25" y="1" width="1.05" height="1.05" fill="#FFF275"/><rect x="26" y="1" width="1.05" height="1.05" fill="#FFF275"/><rect x="27" y="1" width="1.05" height="1.05" fill="#FFF275"/><rect x="28" y="1" width="1.05" height="1.05" fill="#FFF275"/><rect x="29" y="1" width="1.05" height="1.05" fill="#FFF275"/><rect x="30" y="1" width="1.05" height="1.05" fill="#2D1C11"/><rect x="31" y="1" width="1.05" height="1.05" fill="#2D1C11"/><rect x="15" y="2" width="1.05" height="1.05" fill="#2D1C11"/><rect x="16" y="2" width="1.05" height="1.05" fill="#FFF275"/><rect x="17" y="2" width="1.05" height="1.05" fill="#FFF275"/><rect x="18" y="2" width="1.05" height="1.05" fill="#FFF275"/><rect x="19" y="2" width="1.05" height="1.05" fill="#FFF275"/><rect x="20" y="2" width="1.05" height="1.05" fill="#FFF275"/><rect x="21" y="2" width="1.05" height="1.05" fill="#FFF275"/><rect x="22" y="2" width="1.05" height="1.05" fill="#FFF275"/><rect x="23" y="2" width="1.05" height="1.05" fill="#FFF275"/><rect x="24" y="2" width="1.05" height="1.05" fill="#FFF275"/><rect x="25" y="2" width="1.05" height="1.05" fill="#FFF275"/><rect x="26" y="2" width="1.05" height="1.05" fill="#FFF275"/><rect x="27" y="2" width="1.05" height="1.05" fill="#FFF275"/><rect x="28" y="2" width="1.05" height="1.05" fill="#FFF275"/><rect x="29" y="2" width="1.05" height="1.05" fill="#FFF275"/><rect x="30" y="2" width="1.05" height="1.05" fill="#FFF275"/><rect x="31" y="2" width="1.05" height="1.05" fill="#FFF275"/><rect x="32" y="2" width="1.05" height="1.05" fill="#2D1C11"/><rect x="14" y="3" width="1.05" height="1.05" fill="#2D1C11"/><rect x="15" y="3" width="1.05" height="1.05" fill="#FFF275"/><rect x="16" y="3" width="1.05" height="1.05" fill="#FFC82F"/><rect x="17" y="3" width="1.05" height="1.05" fill="#FFC82F"/><rect x="18" y="3" width="1.05" height="1.05" fill="#FFC82F"/><rect x="19" y="3" width="1.05" height="1.05" fill="#FFC82F"/><rect x="20" y="3" width="1.05" height="1.05" fill="#FFC82F"/><rect x="21" y="3" width="1.05" height="1.05" fill="#FFC82F"/><rect x="22" y="3" width="1.05" height="1.05" fill="#FFC82F"/><rect x="23" y="3" width="1.05" height="1.05" fill="#FFC82F"/><rect x="24" y="3" width="1.05" height="1.05" fill="#FFC82F"/><rect x="25" y="3" width="1.05" height="1.05" fill="#FFC82F"/><rect x="26" y="3" width="1.05" height="1.05" fill="#FFC82F"/><rect x="27" y="3" width="1.05" height="1.05" fill="#FFC82F"/><rect x="28" y="3" width="1.05" height="1.05" fill="#FFC82F"/><rect x="29" y="3" width="1.05" height="1.05" fill="#FFC82F"/><rect x="30" y="3" width="1.05" height="1.05" fill="#FFC82F"/><rect x="31" y="3" width="1.05" height="1.05" fill="#FFC82F"/><rect x="32" y="3" width="1.05" height="1.05" fill="#FFF275"/><rect x="33" y="3" width="1.05" height="1.05" fill="#2D1C11"/><rect x="14" y="4" width="1.05" height="1.05" fill="#2D1C11"/><rect x="15" y="4" width="1.05" height="1.05" fill="#FFC82F"/><rect x="16" y="4" width="1.05" height="1.05" fill="#FFC82F"/><rect x="17" y="4" width="1.05" height="1.05" fill="#FFC82F"/><rect x="18" y="4" width="1.05" height="1.05" fill="#FFC82F"/><rect x="19" y="4" width="1.05" height="1.05" fill="#FFC82F"/><rect x="20" y="4" width="1.05" height="1.05" fill="#FFC82F"/><rect x="21" y="4" width="1.05" height="1.05" fill="#FFC82F"/><rect x="22" y="4" width="1.05" height="1.05" fill="#FFC82F"/><rect x="23" y="4" width="1.05" height="1.05" fill="#FFC82F"/><rect x="24" y="4" width="1.05" height="1.05" fill="#FFC82F"/><rect x="25" y="4" width="1.05" height="1.05" fill="#FFC82F"/><rect x="26" y="4" width="1.05" height="1.05" fill="#FFC82F"/><rect x="27" y="4" width="1.05" height="1.05" fill="#FFC82F"/><rect x="28" y="4" width="1.05" height="1.05" fill="#FFC82F"/><rect x="29" y="4" width="1.05" height="1.05" fill="#FFC82F"/><rect x="30" y="4" width="1.05" height="1.05" fill="#FFC82F"/><rect x="31" y="4" width="1.05" height="1.05" fill="#FFC82F"/><rect x="32" y="4" width="1.05" height="1.05" fill="#D68716"/><rect x="33" y="4" width="1.05" height="1.05" fill="#2D1C11"/><rect x="11" y="5" width="1.05" height="1.05" fill="#2D1C11"/><rect x="12" y="5" width="1.05" height="1.05" fill="#2D1C11"/><rect x="13" y="5" width="1.05" height="1.05" fill="#2D1C11"/><rect x="14" y="5" width="1.05" height="1.05" fill="#2D1C11"/><rect x="15" y="5" width="1.05" height="1.05" fill="#FFC82F"/><rect x="16" y="5" width="1.05" height="1.05" fill="#FFC82F"/><rect x="17" y="5" width="1.05" height="1.05" fill="#FFC82F"/><rect x="18" y="5" width="1.05" height="1.05" fill="#FFC82F"/><rect x="19" y="5" width="1.05" height="1.05" fill="#FFC82F"/><rect x="20" y="5" width="1.05" height="1.05" fill="#FFC82F"/><rect x="21" y="5" width="1.05" height="1.05" fill="#FFC82F"/><rect x="22" y="5" width="1.05" height="1.05" fill="#FFC82F"/><rect x="23" y="5" width="1.05" height="1.05" fill="#FFC82F"/><rect x="24" y="5" width="1.05" height="1.05" fill="#FFC82F"/><rect x="25" y="5" width="1.05" height="1.05" fill="#FFC82F"/><rect x="26" y="5" width="1.05" height="1.05" fill="#FFC82F"/><rect x="27" y="5" width="1.05" height="1.05" fill="#FFC82F"/><rect x="28" y="5" width="1.05" height="1.05" fill="#FFC82F"/><rect x="29" y="5" width="1.05" height="1.05" fill="#FFC82F"/><rect x="30" y="5" width="1.05" height="1.05" fill="#FFC82F"/><rect x="31" y="5" width="1.05" height="1.05" fill="#FFC82F"/><rect x="32" y="5" width="1.05" height="1.05" fill="#D68716"/><rect x="33" y="5" width="1.05" height="1.05" fill="#2D1C11"/><rect x="34" y="5" width="1.05" height="1.05" fill="#2D1C11"/><rect x="35" y="5" width="1.05" height="1.05" fill="#2D1C11"/><rect x="36" y="5" width="1.05" height="1.05" fill="#2D1C11"/><rect x="9" y="6" width="1.05" height="1.05" fill="#2D1C11"/><rect x="10" y="6" width="1.05" height="1.05" fill="#2D1C11"/><rect x="11" y="6" width="1.05" height="1.05" fill="#FFF275"/><rect x="12" y="6" width="1.05" height="1.05" fill="#FFF275"/><rect x="13" y="6" width="1.05" height="1.05" fill="#FFF275"/><rect x="14" y="6" width="1.05" height="1.05" fill="#2D1C11"/><rect x="15" y="6" width="1.05" height="1.05" fill="#FFC82F"/><rect x="16" y="6" width="1.05" height="1.05" fill="#FFC82F"/><rect x="17" y="6" width="1.05" height="1.05" fill="#FFC82F"/><rect x="18" y="6" width="1.05" height="1.05" fill="#FFC82F"/><rect x="19" y="6" width="1.05" height="1.05" fill="#FFC82F"/><rect x="20" y="6" width="1.05" height="1.05" fill="#FFC82F"/><rect x="21" y="6" width="1.05" height="1.05" fill="#FFC82F"/><rect x="22" y="6" width="1.05" height="1.05" fill="#FFC82F"/><rect x="23" y="6" width="1.05" height="1.05" fill="#FFC82F"/><rect x="24" y="6" width="1.05" height="1.05" fill="#FFC82F"/><rect x="25" y="6" width="1.05" height="1.05" fill="#FFC82F"/><rect x="26" y="6" width="1.05" height="1.05" fill="#FFC82F"/><rect x="27" y="6" width="1.05" height="1.05" fill="#FFC82F"/><rect x="28" y="6" width="1.05" height="1.05" fill="#FFC82F"/><rect x="29" y="6" width="1.05" height="1.05" fill="#FFC82F"/><rect x="30" y="6" width="1.05" height="1.05" fill="#FFC82F"/><rect x="31" y="6" width="1.05" height="1.05" fill="#FFC82F"/><rect x="32" y="6" width="1.05" height="1.05" fill="#D68716"/><rect x="33" y="6" width="1.05" height="1.05" fill="#2D1C11"/><rect x="34" y="6" width="1.05" height="1.05" fill="#FFF275"/><rect x="35" y="6" width="1.05" height="1.05" fill="#FFF275"/><rect x="36" y="6" width="1.05" height="1.05" fill="#FFF275"/><rect x="37" y="6" width="1.05" height="1.05" fill="#2D1C11"/><rect x="38" y="6" width="1.05" height="1.05" fill="#2D1C11"/><rect x="8" y="7" width="1.05" height="1.05" fill="#2D1C11"/><rect x="9" y="7" width="1.05" height="1.05" fill="#FFF275"/><rect x="10" y="7" width="1.05" height="1.05" fill="#FFF275"/><rect x="11" y="7" width="1.05" height="1.05" fill="#FFC82F"/><rect x="12" y="7" width="1.05" height="1.05" fill="#FFC82F"/><rect x="13" y="7" width="1.05" height="1.05" fill="#D68716"/><rect x="14" y="7" width="1.05" height="1.05" fill="#2D1C11"/><rect x="15" y="7" width="1.05" height="1.05" fill="#FFC82F"/><rect x="16" y="7" width="1.05" height="1.05" fill="#FFC82F"/><rect x="17" y="7" width="1.05" height="1.05" fill="#FFC82F"/><rect x="18" y="7" width="1.05" height="1.05" fill="#FFC82F"/><rect x="19" y="7" width="1.05" height="1.05" fill="#FFC82F"/><rect x="20" y="7" width="1.05" height="1.05" fill="#FFC82F"/><rect x="21" y="7" width="1.05" height="1.05" fill="#FFC82F"/><rect x="22" y="7" width="1.05" height="1.05" fill="#FFC82F"/><rect x="23" y="7" width="1.05" height="1.05" fill="#FFC82F"/><rect x="24" y="7" width="1.05" height="1.05" fill="#FFC82F"/><rect x="25" y="7" width="1.05" height="1.05" fill="#FFC82F"/><rect x="26" y="7" width="1.05" height="1.05" fill="#FFC82F"/><rect x="27" y="7" width="1.05" height="1.05" fill="#FFC82F"/><rect x="28" y="7" width="1.05" height="1.05" fill="#FFC82F"/><rect x="29" y="7" width="1.05" height="1.05" fill="#FFC82F"/><rect x="30" y="7" width="1.05" height="1.05" fill="#FFC82F"/><rect x="31" y="7" width="1.05" height="1.05" fill="#FFC82F"/><rect x="32" y="7" width="1.05" height="1.05" fill="#D68716"/><rect x="33" y="7" width="1.05" height="1.05" fill="#2D1C11"/><rect x="34" y="7" width="1.05" height="1.05" fill="#D68716"/><rect x="35" y="7" width="1.05" height="1.05" fill="#FFC82F"/><rect x="36" y="7" width="1.05" height="1.05" fill="#FFC82F"/><rect x="37" y="7" width="1.05" height="1.05" fill="#FFF275"/><rect x="38" y="7" width="1.05" height="1.05" fill="#FFF275"/><rect x="39" y="7" width="1.05" height="1.05" fill="#2D1C11"/><rect x="7" y="8" width="1.05" height="1.05" fill="#2D1C11"/><rect x="8" y="8" width="1.05" height="1.05" fill="#FFF275"/><rect x="9" y="8" width="1.05" height="1.05" fill="#FFC82F"/><rect x="10" y="8" width="1.05" height="1.05" fill="#FFC82F"/><rect x="11" y="8" width="1.05" height="1.05" fill="#FFC82F"/><rect x="12" y="8" width="1.05" height="1.05" fill="#D68716"/><rect x="13" y="8" width="1.05" height="1.05" fill="#D68716"/><rect x="14" y="8" width="1.05" height="1.05" fill="#2D1C11"/><rect x="15" y="8" width="1.05" height="1.05" fill="#FFC82F"/><rect x="16" y="8" width="1.05" height="1.05" fill="#FFC82F"/><rect x="17" y="8" width="1.05" height="1.05" fill="#FFC82F"/><rect x="18" y="8" width="1.05" height="1.05" fill="#FFC82F"/><rect x="19" y="8" width="1.05" height="1.05" fill="#FFC82F"/><rect x="20" y="8" width="1.05" height="1.05" fill="#FFC82F"/><rect x="21" y="8" width="1.05" height="1.05" fill="#FFC82F"/><rect x="22" y="8" width="1.05" height="1.05" fill="#FFC82F"/><rect x="23" y="8" width="1.05" height="1.05" fill="#FFC82F"/><rect x="24" y="8" width="1.05" height="1.05" fill="#FFC82F"/><rect x="25" y="8" width="1.05" height="1.05" fill="#FFC82F"/><rect x="26" y="8" width="1.05" height="1.05" fill="#FFC82F"/><rect x="27" y="8" width="1.05" height="1.05" fill="#FFC82F"/><rect x="28" y="8" width="1.05" height="1.05" fill="#FFC82F"/><rect x="29" y="8" width="1.05" height="1.05" fill="#FFC82F"/><rect x="30" y="8" width="1.05" height="1.05" fill="#FFC82F"/><rect x="31" y="8" width="1.05" height="1.05" fill="#FFC82F"/><rect x="32" y="8" width="1.05" height="1.05" fill="#D68716"/><rect x="33" y="8" width="1.05" height="1.05" fill="#2D1C11"/><rect x="34" y="8" width="1.05" height="1.05" fill="#D68716"/><rect x="35" y="8" width="1.05" height="1.05" fill="#D68716"/><rect x="36" y="8" width="1.05" height="1.05" fill="#FFC82F"/><rect x="37" y="8" width="1.05" height="1.05" fill="#FFC82F"/><rect x="38" y="8" width="1.05" height="1.05" fill="#FFC82F"/><rect x="39" y="8" width="1.05" height="1.05" fill="#FFF275"/><rect x="40" y="8" width="1.05" height="1.05" fill="#2D1C11"/><rect x="7" y="9" width="1.05" height="1.05" fill="#2D1C11"/><rect x="8" y="9" width="1.05" height="1.05" fill="#FFC82F"/><rect x="9" y="9" width="1.05" height="1.05" fill="#FFC82F"/><rect x="10" y="9" width="1.05" height="1.05" fill="#D68716"/><rect x="11" y="9" width="1.05" height="1.05" fill="#D68716"/><rect x="12" y="9" width="1.05" height="1.05" fill="#2D1C11"/><rect x="13" y="9" width="1.05" height="1.05" fill="#2D1C11"/><rect x="14" y="9" width="1.05" height="1.05" fill="#2D1C11"/><rect x="15" y="9" width="1.05" height="1.05" fill="#FFC82F"/><rect x="16" y="9" width="1.05" height="1.05" fill="#FFC82F"/><rect x="17" y="9" width="1.05" height="1.05" fill="#FFC82F"/><rect x="18" y="9" width="1.05" height="1.05" fill="#FFC82F"/><rect x="19" y="9" width="1.05" height="1.05" fill="#FFC82F"/><rect x="20" y="9" width="1.05" height="1.05" fill="#FFC82F"/><rect x="21" y="9" width="1.05" height="1.05" fill="#FFC82F"/><rect x="22" y="9" width="1.05" height="1.05" fill="#FFC82F"/><rect x="23" y="9" width="1.05" height="1.05" fill="#FFC82F"/><rect x="24" y="9" width="1.05" height="1.05" fill="#FFC82F"/><rect x="25" y="9" width="1.05" height="1.05" fill="#FFC82F"/><rect x="26" y="9" width="1.05" height="1.05" fill="#FFC82F"/><rect x="27" y="9" width="1.05" height="1.05" fill="#FFC82F"/><rect x="28" y="9" width="1.05" height="1.05" fill="#FFC82F"/><rect x="29" y="9" width="1.05" height="1.05" fill="#FFC82F"/><rect x="30" y="9" width="1.05" height="1.05" fill="#FFC82F"/><rect x="31" y="9" width="1.05" height="1.05" fill="#FFC82F"/><rect x="32" y="9" width="1.05" height="1.05" fill="#D68716"/><rect x="33" y="9" width="1.05" height="1.05" fill="#2D1C11"/><rect x="34" y="9" width="1.05" height="1.05" fill="#2D1C11"/><rect x="35" y="9" width="1.05" height="1.05" fill="#2D1C11"/><rect x="36" y="9" width="1.05" height="1.05" fill="#D68716"/><rect x="37" y="9" width="1.05" height="1.05" fill="#D68716"/><rect x="38" y="9" width="1.05" height="1.05" fill="#FFC82F"/><rect x="39" y="9" width="1.05" height="1.05" fill="#FFC82F"/><rect x="40" y="9" width="1.05" height="1.05" fill="#2D1C11"/><rect x="7" y="10" width="1.05" height="1.05" fill="#2D1C11"/><rect x="8" y="10" width="1.05" height="1.05" fill="#FFC82F"/><rect x="9" y="10" width="1.05" height="1.05" fill="#D68716"/><rect x="10" y="10" width="1.05" height="1.05" fill="#D68716"/><rect x="11" y="10" width="1.05" height="1.05" fill="#2D1C11"/><rect x="14" y="10" width="1.05" height="1.05" fill="#2D1C11"/><rect x="15" y="10" width="1.05" height="1.05" fill="#FFC82F"/><rect x="16" y="10" width="1.05" height="1.05" fill="#FFC82F"/><rect x="17" y="10" width="1.05" height="1.05" fill="#FFC82F"/><rect x="18" y="10" width="1.05" height="1.05" fill="#FFC82F"/><rect x="19" y="10" width="1.05" height="1.05" fill="#FFC82F"/><rect x="20" y="10" width="1.05" height="1.05" fill="#FFC82F"/><rect x="21" y="10" width="1.05" height="1.05" fill="#FFC82F"/><rect x="22" y="10" width="1.05" height="1.05" fill="#FFC82F"/><rect x="23" y="10" width="1.05" height="1.05" fill="#FF70A6"/><rect x="24" y="10" width="1.05" height="1.05" fill="#FF70A6"/><rect x="25" y="10" width="1.05" height="1.05" fill="#FFC82F"/><rect x="26" y="10" width="1.05" height="1.05" fill="#FFC82F"/><rect x="27" y="10" width="1.05" height="1.05" fill="#FFC82F"/><rect x="28" y="10" width="1.05" height="1.05" fill="#FFC82F"/><rect x="29" y="10" width="1.05" height="1.05" fill="#FFC82F"/><rect x="30" y="10" width="1.05" height="1.05" fill="#FFC82F"/><rect x="31" y="10" width="1.05" height="1.05" fill="#FFC82F"/><rect x="32" y="10" width="1.05" height="1.05" fill="#D68716"/><rect x="33" y="10" width="1.05" height="1.05" fill="#2D1C11"/><rect x="36" y="10" width="1.05" height="1.05" fill="#2D1C11"/><rect x="37" y="10" width="1.05" height="1.05" fill="#D68716"/><rect x="38" y="10" width="1.05" height="1.05" fill="#D68716"/><rect x="39" y="10" width="1.05" height="1.05" fill="#FFC82F"/><rect x="40" y="10" width="1.05" height="1.05" fill="#2D1C11"/><rect x="7" y="11" width="1.05" height="1.05" fill="#2D1C11"/><rect x="8" y="11" width="1.05" height="1.05" fill="#FFC82F"/><rect x="9" y="11" width="1.05" height="1.05" fill="#D68716"/><rect x="10" y="11" width="1.05" height="1.05" fill="#2D1C11"/><rect x="14" y="11" width="1.05" height="1.05" fill="#2D1C11"/><rect x="15" y="11" width="1.05" height="1.05" fill="#FFC82F"/><rect x="16" y="11" width="1.05" height="1.05" fill="#FFC82F"/><rect x="17" y="11" width="1.05" height="1.05" fill="#FFC82F"/><rect x="18" y="11" width="1.05" height="1.05" fill="#FFC82F"/><rect x="19" y="11" width="1.05" height="1.05" fill="#FFC82F"/><rect x="20" y="11" width="1.05" height="1.05" fill="#FFC82F"/><rect x="21" y="11" width="1.05" height="1.05" fill="#FFC82F"/><rect x="22" y="11" width="1.05" height="1.05" fill="#FF70A6"/><rect x="23" y="11" width="1.05" height="1.05" fill="#FF70A6"/><rect x="24" y="11" width="1.05" height="1.05" fill="#FF70A6"/><rect x="25" y="11" width="1.05" height="1.05" fill="#FF70A6"/><rect x="26" y="11" width="1.05" height="1.05" fill="#FFC82F"/><rect x="27" y="11" width="1.05" height="1.05" fill="#FFC82F"/><rect x="28" y="11" width="1.05" height="1.05" fill="#FFC82F"/><rect x="29" y="11" width="1.05" height="1.05" fill="#FFC82F"/><rect x="30" y="11" width="1.05" height="1.05" fill="#FFC82F"/><rect x="31" y="11" width="1.05" height="1.05" fill="#FFC82F"/><rect x="32" y="11" width="1.05" height="1.05" fill="#D68716"/><rect x="33" y="11" width="1.05" height="1.05" fill="#2D1C11"/><rect x="37" y="11" width="1.05" height="1.05" fill="#2D1C11"/><rect x="38" y="11" width="1.05" height="1.05" fill="#D68716"/><rect x="39" y="11" width="1.05" height="1.05" fill="#FFC82F"/><rect x="40" y="11" width="1.05" height="1.05" fill="#2D1C11"/><rect x="7" y="12" width="1.05" height="1.05" fill="#2D1C11"/><rect x="8" y="12" width="1.05" height="1.05" fill="#FFC82F"/><rect x="9" y="12" width="1.05" height="1.05" fill="#D68716"/><rect x="10" y="12" width="1.05" height="1.05" fill="#2D1C11"/><rect x="14" y="12" width="1.05" height="1.05" fill="#2D1C11"/><rect x="15" y="12" width="1.05" height="1.05" fill="#FFC82F"/><rect x="16" y="12" width="1.05" height="1.05" fill="#FFC82F"/><rect x="17" y="12" width="1.05" height="1.05" fill="#FFC82F"/><rect x="18" y="12" width="1.05" height="1.05" fill="#FFC82F"/><rect x="19" y="12" width="1.05" height="1.05" fill="#FFC82F"/><rect x="20" y="12" width="1.05" height="1.05" fill="#FFC82F"/><rect x="21" y="12" width="1.05" height="1.05" fill="#FF70A6"/><rect x="22" y="12" width="1.05" height="1.05" fill="#FF70A6"/><rect x="23" y="12" width="1.05" height="1.05" fill="#FF70A6"/><rect x="24" y="12" width="1.05" height="1.05" fill="#FF70A6"/><rect x="25" y="12" width="1.05" height="1.05" fill="#FF70A6"/><rect x="26" y="12" width="1.05" height="1.05" fill="#FF70A6"/><rect x="27" y="12" width="1.05" height="1.05" fill="#FFC82F"/><rect x="28" y="12" width="1.05" height="1.05" fill="#FFC82F"/><rect x="29" y="12" width="1.05" height="1.05" fill="#FFC82F"/><rect x="30" y="12" width="1.05" height="1.05" fill="#FFC82F"/><rect x="31" y="12" width="1.05" height="1.05" fill="#FFC82F"/><rect x="32" y="12" width="1.05" height="1.05" fill="#D68716"/><rect x="33" y="12" width="1.05" height="1.05" fill="#2D1C11"/><rect x="37" y="12" width="1.05" height="1.05" fill="#2D1C11"/><rect x="38" y="12" width="1.05" height="1.05" fill="#D68716"/><rect x="39" y="12" width="1.05" height="1.05" fill="#FFC82F"/><rect x="40" y="12" width="1.05" height="1.05" fill="#2D1C11"/><rect x="7" y="13" width="1.05" height="1.05" fill="#2D1C11"/><rect x="8" y="13" width="1.05" height="1.05" fill="#FFC82F"/><rect x="9" y="13" width="1.05" height="1.05" fill="#D68716"/><rect x="10" y="13" width="1.05" height="1.05" fill="#2D1C11"/><rect x="14" y="13" width="1.05" height="1.05" fill="#2D1C11"/><rect x="15" y="13" width="1.05" height="1.05" fill="#FFC82F"/><rect x="16" y="13" width="1.05" height="1.05" fill="#FFC82F"/><rect x="17" y="13" width="1.05" height="1.05" fill="#FFC82F"/><rect x="18" y="13" width="1.05" height="1.05" fill="#FFC82F"/><rect x="19" y="13" width="1.05" height="1.05" fill="#FFC82F"/><rect x="20" y="13" width="1.05" height="1.05" fill="#FF70A6"/><rect x="21" y="13" width="1.05" height="1.05" fill="#FF70A6"/><rect x="22" y="13" width="1.05" height="1.05" fill="#FF70A6"/><rect x="23" y="13" width="1.05" height="1.05" fill="#FF70A6"/><rect x="24" y="13" width="1.05" height="1.05" fill="#FF70A6"/><rect x="25" y="13" width="1.05" height="1.05" fill="#FF70A6"/><rect x="26" y="13" width="1.05" height="1.05" fill="#FF70A6"/><rect x="27" y="13" width="1.05" height="1.05" fill="#FF70A6"/><rect x="28" y="13" width="1.05" height="1.05" fill="#FFC82F"/><rect x="29" y="13" width="1.05" height="1.05" fill="#FFC82F"/><rect x="30" y="13" width="1.05" height="1.05" fill="#FFC82F"/><rect x="31" y="13" width="1.05" height="1.05" fill="#FFC82F"/><rect x="32" y="13" width="1.05" height="1.05" fill="#D68716"/><rect x="33" y="13" width="1.05" height="1.05" fill="#2D1C11"/><rect x="37" y="13" width="1.05" height="1.05" fill="#2D1C11"/><rect x="38" y="13" width="1.05" height="1.05" fill="#D68716"/><rect x="39" y="13" width="1.05" height="1.05" fill="#FFC82F"/><rect x="40" y="13" width="1.05" height="1.05" fill="#2D1C11"/><rect x="7" y="14" width="1.05" height="1.05" fill="#2D1C11"/><rect x="8" y="14" width="1.05" height="1.05" fill="#FFC82F"/><rect x="9" y="14" width="1.05" height="1.05" fill="#D68716"/><rect x="10" y="14" width="1.05" height="1.05" fill="#2D1C11"/><rect x="14" y="14" width="1.05" height="1.05" fill="#2D1C11"/><rect x="15" y="14" width="1.05" height="1.05" fill="#FFC82F"/><rect x="16" y="14" width="1.05" height="1.05" fill="#FFC82F"/><rect x="17" y="14" width="1.05" height="1.05" fill="#FFC82F"/><rect x="18" y="14" width="1.05" height="1.05" fill="#FFC82F"/><rect x="19" y="14" width="1.05" height="1.05" fill="#FFC82F"/><rect x="20" y="14" width="1.05" height="1.05" fill="#FFC82F"/><rect x="21" y="14" width="1.05" height="1.05" fill="#FF70A6"/><rect x="22" y="14" width="1.05" height="1.05" fill="#FF70A6"/><rect x="23" y="14" width="1.05" height="1.05" fill="#FF70A6"/><rect x="24" y="14" width="1.05" height="1.05" fill="#FF70A6"/><rect x="25" y="14" width="1.05" height="1.05" fill="#FF70A6"/><rect x="26" y="14" width="1.05" height="1.05" fill="#FF70A6"/><rect x="27" y="14" width="1.05" height="1.05" fill="#FFC82F"/><rect x="28" y="14" width="1.05" height="1.05" fill="#FFC82F"/><rect x="29" y="14" width="1.05" height="1.05" fill="#FFC82F"/><rect x="30" y="14" width="1.05" height="1.05" fill="#FFC82F"/><rect x="31" y="14" width="1.05" height="1.05" fill="#FFC82F"/><rect x="32" y="14" width="1.05" height="1.05" fill="#D68716"/><rect x="33" y="14" width="1.05" height="1.05" fill="#2D1C11"/><rect x="37" y="14" width="1.05" height="1.05" fill="#2D1C11"/><rect x="38" y="14" width="1.05" height="1.05" fill="#D68716"/><rect x="39" y="14" width="1.05" height="1.05" fill="#FFC82F"/><rect x="40" y="14" width="1.05" height="1.05" fill="#2D1C11"/><rect x="7" y="15" width="1.05" height="1.05" fill="#2D1C11"/><rect x="8" y="15" width="1.05" height="1.05" fill="#FFC82F"/><rect x="9" y="15" width="1.05" height="1.05" fill="#D68716"/><rect x="10" y="15" width="1.05" height="1.05" fill="#D68716"/><rect x="11" y="15" width="1.05" height="1.05" fill="#2D1C11"/><rect x="14" y="15" width="1.05" height="1.05" fill="#2D1C11"/><rect x="15" y="15" width="1.05" height="1.05" fill="#FFC82F"/><rect x="16" y="15" width="1.05" height="1.05" fill="#FFC82F"/><rect x="17" y="15" width="1.05" height="1.05" fill="#FFC82F"/><rect x="18" y="15" width="1.05" height="1.05" fill="#FFC82F"/><rect x="19" y="15" width="1.05" height="1.05" fill="#FFC82F"/><rect x="20" y="15" width="1.05" height="1.05" fill="#FFC82F"/><rect x="21" y="15" width="1.05" height="1.05" fill="#FFC82F"/><rect x="22" y="15" width="1.05" height="1.05" fill="#FF70A6"/><rect x="23" y="15" width="1.05" height="1.05" fill="#FF70A6"/><rect x="24" y="15" width="1.05" height="1.05" fill="#FF70A6"/><rect x="25" y="15" width="1.05" height="1.05" fill="#FF70A6"/><rect x="26" y="15" width="1.05" height="1.05" fill="#FFC82F"/><rect x="27" y="15" width="1.05" height="1.05" fill="#FFC82F"/><rect x="28" y="15" width="1.05" height="1.05" fill="#FFC82F"/><rect x="29" y="15" width="1.05" height="1.05" fill="#FFC82F"/><rect x="30" y="15" width="1.05" height="1.05" fill="#FFC82F"/><rect x="31" y="15" width="1.05" height="1.05" fill="#FFC82F"/><rect x="32" y="15" width="1.05" height="1.05" fill="#D68716"/><rect x="33" y="15" width="1.05" height="1.05" fill="#2D1C11"/><rect x="36" y="15" width="1.05" height="1.05" fill="#2D1C11"/><rect x="37" y="15" width="1.05" height="1.05" fill="#D68716"/><rect x="38" y="15" width="1.05" height="1.05" fill="#D68716"/><rect x="39" y="15" width="1.05" height="1.05" fill="#FFC82F"/><rect x="40" y="15" width="1.05" height="1.05" fill="#2D1C11"/><rect x="7" y="16" width="1.05" height="1.05" fill="#2D1C11"/><rect x="8" y="16" width="1.05" height="1.05" fill="#FFF275"/><rect x="9" y="16" width="1.05" height="1.05" fill="#FFC82F"/><rect x="10" y="16" width="1.05" height="1.05" fill="#D68716"/><rect x="11" y="16" width="1.05" height="1.05" fill="#D68716"/><rect x="12" y="16" width="1.05" height="1.05" fill="#2D1C11"/><rect x="13" y="16" width="1.05" height="1.05" fill="#2D1C11"/><rect x="14" y="16" width="1.05" height="1.05" fill="#2D1C11"/><rect x="15" y="16" width="1.05" height="1.05" fill="#FFC82F"/><rect x="16" y="16" width="1.05" height="1.05" fill="#FFC82F"/><rect x="17" y="16" width="1.05" height="1.05" fill="#FFC82F"/><rect x="18" y="16" width="1.05" height="1.05" fill="#FFC82F"/><rect x="19" y="16" width="1.05" height="1.05" fill="#FFC82F"/><rect x="20" y="16" width="1.05" height="1.05" fill="#FFC82F"/><rect x="21" y="16" width="1.05" height="1.05" fill="#FFC82F"/><rect x="22" y="16" width="1.05" height="1.05" fill="#FF70A6"/><rect x="23" y="16" width="1.05" height="1.05" fill="#FFC82F"/><rect x="24" y="16" width="1.05" height="1.05" fill="#FFC82F"/><rect x="25" y="16" width="1.05" height="1.05" fill="#D94A7A"/><rect x="26" y="16" width="1.05" height="1.05" fill="#FFC82F"/><rect x="27" y="16" width="1.05" height="1.05" fill="#FFC82F"/><rect x="28" y="16" width="1.05" height="1.05" fill="#FFC82F"/><rect x="29" y="16" width="1.05" height="1.05" fill="#FFC82F"/><rect x="30" y="16" width="1.05" height="1.05" fill="#FFC82F"/><rect x="31" y="16" width="1.05" height="1.05" fill="#FFC82F"/><rect x="32" y="16" width="1.05" height="1.05" fill="#D68716"/><rect x="33" y="16" width="1.05" height="1.05" fill="#2D1C11"/><rect x="34" y="16" width="1.05" height="1.05" fill="#2D1C11"/><rect x="35" y="16" width="1.05" height="1.05" fill="#2D1C11"/><rect x="36" y="16" width="1.05" height="1.05" fill="#D68716"/><rect x="37" y="16" width="1.05" height="1.05" fill="#D68716"/><rect x="38" y="16" width="1.05" height="1.05" fill="#FFC82F"/><rect x="39" y="16" width="1.05" height="1.05" fill="#FFF275"/><rect x="40" y="16" width="1.05" height="1.05" fill="#2D1C11"/><rect x="8" y="17" width="1.05" height="1.05" fill="#2D1C11"/><rect x="9" y="17" width="1.05" height="1.05" fill="#FFF275"/><rect x="10" y="17" width="1.05" height="1.05" fill="#FFC82F"/><rect x="11" y="17" width="1.05" height="1.05" fill="#FFC82F"/><rect x="12" y="17" width="1.05" height="1.05" fill="#D68716"/><rect x="13" y="17" width="1.05" height="1.05" fill="#D68716"/><rect x="14" y="17" width="1.05" height="1.05" fill="#2D1C11"/><rect x="15" y="17" width="1.05" height="1.05" fill="#D68716"/><rect x="16" y="17" width="1.05" height="1.05" fill="#FFC82F"/><rect x="17" y="17" width="1.05" height="1.05" fill="#FFC82F"/><rect x="18" y="17" width="1.05" height="1.05" fill="#FFC82F"/><rect x="19" y="17" width="1.05" height="1.05" fill="#FFC82F"/><rect x="20" y="17" width="1.05" height="1.05" fill="#FFC82F"/><rect x="21" y="17" width="1.05" height="1.05" fill="#FFC82F"/><rect x="22" y="17" width="1.05" height="1.05" fill="#FFC82F"/><rect x="23" y="17" width="1.05" height="1.05" fill="#FFC82F"/><rect x="24" y="17" width="1.05" height="1.05" fill="#FFC82F"/><rect x="25" y="17" width="1.05" height="1.05" fill="#FFC82F"/><rect x="26" y="17" width="1.05" height="1.05" fill="#FFC82F"/><rect x="27" y="17" width="1.05" height="1.05" fill="#FFC82F"/><rect x="28" y="17" width="1.05" height="1.05" fill="#FFC82F"/><rect x="29" y="17" width="1.05" height="1.05" fill="#FFC82F"/><rect x="30" y="17" width="1.05" height="1.05" fill="#FFC82F"/><rect x="31" y="17" width="1.05" height="1.05" fill="#D68716"/><rect x="32" y="17" width="1.05" height="1.05" fill="#D68716"/><rect x="33" y="17" width="1.05" height="1.05" fill="#2D1C11"/><rect x="34" y="17" width="1.05" height="1.05" fill="#D68716"/><rect x="35" y="17" width="1.05" height="1.05" fill="#D68716"/><rect x="36" y="17" width="1.05" height="1.05" fill="#FFC82F"/><rect x="37" y="17" width="1.05" height="1.05" fill="#FFC82F"/><rect x="38" y="17" width="1.05" height="1.05" fill="#FFF275"/><rect x="39" y="17" width="1.05" height="1.05" fill="#2D1C11"/><rect x="9" y="18" width="1.05" height="1.05" fill="#2D1C11"/><rect x="10" y="18" width="1.05" height="1.05" fill="#2D1C11"/><rect x="11" y="18" width="1.05" height="1.05" fill="#FFF275"/><rect x="12" y="18" width="1.05" height="1.05" fill="#FFC82F"/><rect x="13" y="18" width="1.05" height="1.05" fill="#FFC82F"/><rect x="14" y="18" width="1.05" height="1.05" fill="#2D1C11"/><rect x="15" y="18" width="1.05" height="1.05" fill="#D68716"/><rect x="16" y="18" width="1.05" height="1.05" fill="#D68716"/><rect x="17" y="18" width="1.05" height="1.05" fill="#D68716"/><rect x="18" y="18" width="1.05" height="1.05" fill="#FFC82F"/><rect x="19" y="18" width="1.05" height="1.05" fill="#FFC82F"/><rect x="20" y="18" width="1.05" height="1.05" fill="#FFC82F"/><rect x="21" y="18" width="1.05" height="1.05" fill="#FFC82F"/><rect x="22" y="18" width="1.05" height="1.05" fill="#FFC82F"/><rect x="23" y="18" width="1.05" height="1.05" fill="#FFC82F"/><rect x="24" y="18" width="1.05" height="1.05" fill="#FFC82F"/><rect x="25" y="18" width="1.05" height="1.05" fill="#FFC82F"/><rect x="26" y="18" width="1.05" height="1.05" fill="#FFC82F"/><rect x="27" y="18" width="1.05" height="1.05" fill="#FFC82F"/><rect x="28" y="18" width="1.05" height="1.05" fill="#FFC82F"/><rect x="29" y="18" width="1.05" height="1.05" fill="#FFC82F"/><rect x="30" y="18" width="1.05" height="1.05" fill="#D68716"/><rect x="31" y="18" width="1.05" height="1.05" fill="#D68716"/><rect x="32" y="18" width="1.05" height="1.05" fill="#D68716"/><rect x="33" y="18" width="1.05" height="1.05" fill="#2D1C11"/><rect x="34" y="18" width="1.05" height="1.05" fill="#FFC82F"/><rect x="35" y="18" width="1.05" height="1.05" fill="#FFC82F"/><rect x="36" y="18" width="1.05" height="1.05" fill="#FFF275"/><rect x="37" y="18" width="1.05" height="1.05" fill="#2D1C11"/><rect x="38" y="18" width="1.05" height="1.05" fill="#2D1C11"/><rect x="11" y="19" width="1.05" height="1.05" fill="#2D1C11"/><rect x="12" y="19" width="1.05" height="1.05" fill="#2D1C11"/><rect x="13" y="19" width="1.05" height="1.05" fill="#2D1C11"/><rect x="14" y="19" width="1.05" height="1.05" fill="#2D1C11"/><rect x="16" y="19" width="1.05" height="1.05" fill="#2D1C11"/><rect x="17" y="19" width="1.05" height="1.05" fill="#2D1C11"/><rect x="18" y="19" width="1.05" height="1.05" fill="#D68716"/><rect x="19" y="19" width="1.05" height="1.05" fill="#D68716"/><rect x="20" y="19" width="1.05" height="1.05" fill="#D68716"/><rect x="21" y="19" width="1.05" height="1.05" fill="#D68716"/><rect x="22" y="19" width="1.05" height="1.05" fill="#D68716"/><rect x="23" y="19" width="1.05" height="1.05" fill="#D68716"/><rect x="24" y="19" width="1.05" height="1.05" fill="#D68716"/><rect x="25" y="19" width="1.05" height="1.05" fill="#D68716"/><rect x="26" y="19" width="1.05" height="1.05" fill="#D68716"/><rect x="27" y="19" width="1.05" height="1.05" fill="#D68716"/><rect x="28" y="19" width="1.05" height="1.05" fill="#D68716"/><rect x="29" y="19" width="1.05" height="1.05" fill="#D68716"/><rect x="30" y="19" width="1.05" height="1.05" fill="#2D1C11"/><rect x="31" y="19" width="1.05" height="1.05" fill="#2D1C11"/><rect x="33" y="19" width="1.05" height="1.05" fill="#2D1C11"/><rect x="34" y="19" width="1.05" height="1.05" fill="#2D1C11"/><rect x="35" y="19" width="1.05" height="1.05" fill="#2D1C11"/><rect x="36" y="19" width="1.05" height="1.05" fill="#2D1C11"/><rect x="18" y="20" width="1.05" height="1.05" fill="#2D1C11"/><rect x="19" y="20" width="1.05" height="1.05" fill="#2D1C11"/><rect x="20" y="20" width="1.05" height="1.05" fill="#2D1C11"/><rect x="21" y="20" width="1.05" height="1.05" fill="#2D1C11"/><rect x="22" y="20" width="1.05" height="1.05" fill="#2D1C11"/><rect x="23" y="20" width="1.05" height="1.05" fill="#2D1C11"/><rect x="24" y="20" width="1.05" height="1.05" fill="#2D1C11"/><rect x="25" y="20" width="1.05" height="1.05" fill="#2D1C11"/><rect x="26" y="20" width="1.05" height="1.05" fill="#2D1C11"/><rect x="27" y="20" width="1.05" height="1.05" fill="#2D1C11"/><rect x="28" y="20" width="1.05" height="1.05" fill="#2D1C11"/><rect x="29" y="20" width="1.05" height="1.05" fill="#2D1C11"/><rect x="20" y="21" width="1.05" height="1.05" fill="#2D1C11"/><rect x="21" y="21" width="1.05" height="1.05" fill="#FFC82F"/><rect x="22" y="21" width="1.05" height="1.05" fill="#FFC82F"/><rect x="23" y="21" width="1.05" height="1.05" fill="#FFC82F"/><rect x="24" y="21" width="1.05" height="1.05" fill="#FFC82F"/><rect x="25" y="21" width="1.05" height="1.05" fill="#D68716"/><rect x="26" y="21" width="1.05" height="1.05" fill="#D68716"/><rect x="27" y="21" width="1.05" height="1.05" fill="#2D1C11"/><rect x="19" y="22" width="1.05" height="1.05" fill="#2D1C11"/><rect x="20" y="22" width="1.05" height="1.05" fill="#2D1C11"/><rect x="21" y="22" width="1.05" height="1.05" fill="#FFC82F"/><rect x="22" y="22" width="1.05" height="1.05" fill="#FFC82F"/><rect x="23" y="22" width="1.05" height="1.05" fill="#FFC82F"/><rect x="24" y="22" width="1.05" height="1.05" fill="#FFC82F"/><rect x="25" y="22" width="1.05" height="1.05" fill="#D68716"/><rect x="26" y="22" width="1.05" height="1.05" fill="#D68716"/><rect x="27" y="22" width="1.05" height="1.05" fill="#2D1C11"/><rect x="28" y="22" width="1.05" height="1.05" fill="#2D1C11"/><rect x="18" y="23" width="1.05" height="1.05" fill="#2D1C11"/><rect x="19" y="23" width="1.05" height="1.05" fill="#FFF275"/><rect x="20" y="23" width="1.05" height="1.05" fill="#FFF275"/><rect x="21" y="23" width="1.05" height="1.05" fill="#FFC82F"/><rect x="22" y="23" width="1.05" height="1.05" fill="#FFC82F"/><rect x="23" y="23" width="1.05" height="1.05" fill="#FFC82F"/><rect x="24" y="23" width="1.05" height="1.05" fill="#FFC82F"/><rect x="25" y="23" width="1.05" height="1.05" fill="#FFC82F"/><rect x="26" y="23" width="1.05" height="1.05" fill="#D68716"/><rect x="27" y="23" width="1.05" height="1.05" fill="#D68716"/><rect x="28" y="23" width="1.05" height="1.05" fill="#D68716"/><rect x="29" y="23" width="1.05" height="1.05" fill="#2D1C11"/><rect x="17" y="24" width="1.05" height="1.05" fill="#2D1C11"/><rect x="18" y="24" width="1.05" height="1.05" fill="#FFF275"/><rect x="19" y="24" width="1.05" height="1.05" fill="#FFC82F"/><rect x="20" y="24" width="1.05" height="1.05" fill="#FFC82F"/><rect x="21" y="24" width="1.05" height="1.05" fill="#FFC82F"/><rect x="22" y="24" width="1.05" height="1.05" fill="#FFC82F"/><rect x="23" y="24" width="1.05" height="1.05" fill="#FFC82F"/><rect x="24" y="24" width="1.05" height="1.05" fill="#FFC82F"/><rect x="25" y="24" width="1.05" height="1.05" fill="#FFC82F"/><rect x="26" y="24" width="1.05" height="1.05" fill="#FFC82F"/><rect x="27" y="24" width="1.05" height="1.05" fill="#D68716"/><rect x="28" y="24" width="1.05" height="1.05" fill="#D68716"/><rect x="29" y="24" width="1.05" height="1.05" fill="#D68716"/><rect x="30" y="24" width="1.05" height="1.05" fill="#2D1C11"/><rect x="10" y="25" width="1.05" height="1.05" fill="#2D1C11"/><rect x="11" y="25" width="1.05" height="1.05" fill="#2D1C11"/><rect x="12" y="25" width="1.05" height="1.05" fill="#2D1C11"/><rect x="13" y="25" width="1.05" height="1.05" fill="#2D1C11"/><rect x="17" y="25" width="1.05" height="1.05" fill="#2D1C11"/><rect x="18" y="25" width="1.05" height="1.05" fill="#2D1C11"/><rect x="19" y="25" width="1.05" height="1.05" fill="#2D1C11"/><rect x="20" y="25" width="1.05" height="1.05" fill="#2D1C11"/><rect x="21" y="25" width="1.05" height="1.05" fill="#2D1C11"/><rect x="22" y="25" width="1.05" height="1.05" fill="#2D1C11"/><rect x="23" y="25" width="1.05" height="1.05" fill="#2D1C11"/><rect x="24" y="25" width="1.05" height="1.05" fill="#2D1C11"/><rect x="25" y="25" width="1.05" height="1.05" fill="#2D1C11"/><rect x="26" y="25" width="1.05" height="1.05" fill="#2D1C11"/><rect x="27" y="25" width="1.05" height="1.05" fill="#2D1C11"/><rect x="28" y="25" width="1.05" height="1.05" fill="#2D1C11"/><rect x="29" y="25" width="1.05" height="1.05" fill="#2D1C11"/><rect x="30" y="25" width="1.05" height="1.05" fill="#2D1C11"/><rect x="8" y="26" width="1.05" height="1.05" fill="#2D1C11"/><rect x="9" y="26" width="1.05" height="1.05" fill="#2D1C11"/><rect x="10" y="26" width="1.05" height="1.05" fill="#FFF275"/><rect x="11" y="26" width="1.05" height="1.05" fill="#FFF275"/><rect x="12" y="26" width="1.05" height="1.05" fill="#FFF275"/><rect x="13" y="26" width="1.05" height="1.05" fill="#FFF275"/><rect x="14" y="26" width="1.05" height="1.05" fill="#2D1C11"/><rect x="15" y="26" width="1.05" height="1.05" fill="#2D1C11"/><rect x="7" y="27" width="1.05" height="1.05" fill="#2D1C11"/><rect x="8" y="27" width="1.05" height="1.05" fill="#FFF275"/><rect x="9" y="27" width="1.05" height="1.05" fill="#FFF275"/><rect x="10" y="27" width="1.05" height="1.05" fill="#FFC82F"/><rect x="11" y="27" width="1.05" height="1.05" fill="#FFC82F"/><rect x="12" y="27" width="1.05" height="1.05" fill="#FFC82F"/><rect x="13" y="27" width="1.05" height="1.05" fill="#FFC82F"/><rect x="14" y="27" width="1.05" height="1.05" fill="#FFF275"/><rect x="15" y="27" width="1.05" height="1.05" fill="#2D1C11"/><rect x="23" y="27" width="1.05" height="1.05" fill="#2D1C11"/><rect x="24" y="27" width="1.05" height="1.05" fill="#2D1C11"/><rect x="25" y="27" width="1.05" height="1.05" fill="#2D1C11"/><rect x="26" y="27" width="1.05" height="1.05" fill="#2D1C11"/><rect x="27" y="27" width="1.05" height="1.05" fill="#2D1C11"/><rect x="28" y="27" width="1.05" height="1.05" fill="#2D1C11"/><rect x="29" y="27" width="1.05" height="1.05" fill="#2D1C11"/><rect x="30" y="27" width="1.05" height="1.05" fill="#2D1C11"/><rect x="31" y="27" width="1.05" height="1.05" fill="#2D1C11"/><rect x="32" y="27" width="1.05" height="1.05" fill="#2D1C11"/><rect x="33" y="27" width="1.05" height="1.05" fill="#2D1C11"/><rect x="34" y="27" width="1.05" height="1.05" fill="#2D1C11"/><rect x="35" y="27" width="1.05" height="1.05" fill="#2D1C11"/><rect x="36" y="27" width="1.05" height="1.05" fill="#2D1C11"/><rect x="37" y="27" width="1.05" height="1.05" fill="#2D1C11"/><rect x="38" y="27" width="1.05" height="1.05" fill="#2D1C11"/><rect x="39" y="27" width="1.05" height="1.05" fill="#2D1C11"/><rect x="40" y="27" width="1.05" height="1.05" fill="#2D1C11"/><rect x="41" y="27" width="1.05" height="1.05" fill="#2D1C11"/><rect x="42" y="27" width="1.05" height="1.05" fill="#2D1C11"/><rect x="6" y="28" width="1.05" height="1.05" fill="#2D1C11"/><rect x="7" y="28" width="1.05" height="1.05" fill="#FFF275"/><rect x="8" y="28" width="1.05" height="1.05" fill="#FFC82F"/><rect x="9" y="28" width="1.05" height="1.05" fill="#FFC82F"/><rect x="10" y="28" width="1.05" height="1.05" fill="#FFC82F"/><rect x="11" y="28" width="1.05" height="1.05" fill="#FFC82F"/><rect x="12" y="28" width="1.05" height="1.05" fill="#FFC82F"/><rect x="13" y="28" width="1.05" height="1.05" fill="#FFC82F"/><rect x="14" y="28" width="1.05" height="1.05" fill="#D68716"/><rect x="15" y="28" width="1.05" height="1.05" fill="#2D1C11"/><rect x="22" y="28" width="1.05" height="1.05" fill="#2D1C11"/><rect x="23" y="28" width="1.05" height="1.05" fill="#8DE383"/><rect x="24" y="28" width="1.05" height="1.05" fill="#8DE383"/><rect x="25" y="28" width="1.05" height="1.05" fill="#8DE383"/><rect x="26" y="28" width="1.05" height="1.05" fill="#8DE383"/><rect x="27" y="28" width="1.05" height="1.05" fill="#8DE383"/><rect x="28" y="28" width="1.05" height="1.05" fill="#8DE383"/><rect x="29" y="28" width="1.05" height="1.05" fill="#8DE383"/><rect x="30" y="28" width="1.05" height="1.05" fill="#8DE383"/><rect x="31" y="28" width="1.05" height="1.05" fill="#8DE383"/><rect x="32" y="28" width="1.05" height="1.05" fill="#8DE383"/><rect x="33" y="28" width="1.05" height="1.05" fill="#8DE383"/><rect x="34" y="28" width="1.05" height="1.05" fill="#8DE383"/><rect x="35" y="28" width="1.05" height="1.05" fill="#8DE383"/><rect x="36" y="28" width="1.05" height="1.05" fill="#FFF275"/><rect x="37" y="28" width="1.05" height="1.05" fill="#FFF275"/><rect x="38" y="28" width="1.05" height="1.05" fill="#8DE383"/><rect x="39" y="28" width="1.05" height="1.05" fill="#8DE383"/><rect x="40" y="28" width="1.05" height="1.05" fill="#8DE383"/><rect x="41" y="28" width="1.05" height="1.05" fill="#8DE383"/><rect x="42" y="28" width="1.05" height="1.05" fill="#8DE383"/><rect x="43" y="28" width="1.05" height="1.05" fill="#2D1C11"/><rect x="6" y="29" width="1.05" height="1.05" fill="#2D1C11"/><rect x="7" y="29" width="1.05" height="1.05" fill="#FFC82F"/><rect x="8" y="29" width="1.05" height="1.05" fill="#FFC82F"/><rect x="9" y="29" width="1.05" height="1.05" fill="#FFC82F"/><rect x="10" y="29" width="1.05" height="1.05" fill="#FFC82F"/><rect x="11" y="29" width="1.05" height="1.05" fill="#FFC82F"/><rect x="12" y="29" width="1.05" height="1.05" fill="#FFC82F"/><rect x="13" y="29" width="1.05" height="1.05" fill="#D68716"/><rect x="14" y="29" width="1.05" height="1.05" fill="#D68716"/><rect x="15" y="29" width="1.05" height="1.05" fill="#2D1C11"/><rect x="21" y="29" width="1.05" height="1.05" fill="#2D1C11"/><rect x="22" y="29" width="1.05" height="1.05" fill="#8DE383"/><rect x="23" y="29" width="1.05" height="1.05" fill="#5DB554"/><rect x="24" y="29" width="1.05" height="1.05" fill="#5DB554"/><rect x="25" y="29" width="1.05" height="1.05" fill="#5DB554"/><rect x="26" y="29" width="1.05" height="1.05" fill="#5DB554"/><rect x="27" y="29" width="1.05" height="1.05" fill="#5DB554"/><rect x="28" y="29" width="1.05" height="1.05" fill="#5DB554"/><rect x="29" y="29" width="1.05" height="1.05" fill="#5DB554"/><rect x="30" y="29" width="1.05" height="1.05" fill="#5DB554"/><rect x="31" y="29" width="1.05" height="1.05" fill="#5DB554"/><rect x="32" y="29" width="1.05" height="1.05" fill="#5DB554"/><rect x="33" y="29" width="1.05" height="1.05" fill="#5DB554"/><rect x="34" y="29" width="1.05" height="1.05" fill="#5DB554"/><rect x="35" y="29" width="1.05" height="1.05" fill="#5DB554"/><rect x="36" y="29" width="1.05" height="1.05" fill="#FFC82F"/><rect x="37" y="29" width="1.05" height="1.05" fill="#FFC82F"/><rect x="38" y="29" width="1.05" height="1.05" fill="#5DB554"/><rect x="39" y="29" width="1.05" height="1.05" fill="#5DB554"/><rect x="40" y="29" width="1.05" height="1.05" fill="#5DB554"/><rect x="41" y="29" width="1.05" height="1.05" fill="#5DB554"/><rect x="42" y="29" width="1.05" height="1.05" fill="#5DB554"/><rect x="43" y="29" width="1.05" height="1.05" fill="#8DE383"/><rect x="44" y="29" width="1.05" height="1.05" fill="#2D1C11"/><rect x="6" y="30" width="1.05" height="1.05" fill="#2D1C11"/><rect x="7" y="30" width="1.05" height="1.05" fill="#FFC82F"/><rect x="8" y="30" width="1.05" height="1.05" fill="#D68716"/><rect x="9" y="30" width="1.05" height="1.05" fill="#D68716"/><rect x="10" y="30" width="1.05" height="1.05" fill="#D68716"/><rect x="11" y="30" width="1.05" height="1.05" fill="#D68716"/><rect x="12" y="30" width="1.05" height="1.05" fill="#D68716"/><rect x="13" y="30" width="1.05" height="1.05" fill="#D68716"/><rect x="14" y="30" width="1.05" height="1.05" fill="#2D1C11"/><rect x="15" y="30" width="1.05" height="1.05" fill="#2D1C11"/><rect x="21" y="30" width="1.05" height="1.05" fill="#2D1C11"/><rect x="22" y="30" width="1.05" height="1.05" fill="#8DE383"/><rect x="23" y="30" width="1.05" height="1.05" fill="#5DB554"/><rect x="24" y="30" width="1.05" height="1.05" fill="#5DB554"/><rect x="25" y="30" width="1.05" height="1.05" fill="#5DB554"/><rect x="26" y="30" width="1.05" height="1.05" fill="#5DB554"/><rect x="27" y="30" width="1.05" height="1.05" fill="#5DB554"/><rect x="28" y="30" width="1.05" height="1.05" fill="#5DB554"/><rect x="29" y="30" width="1.05" height="1.05" fill="#5DB554"/><rect x="30" y="30" width="1.05" height="1.05" fill="#5DB554"/><rect x="31" y="30" width="1.05" height="1.05" fill="#5DB554"/><rect x="32" y="30" width="1.05" height="1.05" fill="#5DB554"/><rect x="33" y="30" width="1.05" height="1.05" fill="#5DB554"/><rect x="34" y="30" width="1.05" height="1.05" fill="#5DB554"/><rect x="35" y="30" width="1.05" height="1.05" fill="#5DB554"/><rect x="36" y="30" width="1.05" height="1.05" fill="#FFC82F"/><rect x="37" y="30" width="1.05" height="1.05" fill="#FFC82F"/><rect x="38" y="30" width="1.05" height="1.05" fill="#5DB554"/><rect x="39" y="30" width="1.05" height="1.05" fill="#5DB554"/><rect x="40" y="30" width="1.05" height="1.05" fill="#5DB554"/><rect x="41" y="30" width="1.05" height="1.05" fill="#5DB554"/><rect x="42" y="30" width="1.05" height="1.05" fill="#5DB554"/><rect x="43" y="30" width="1.05" height="1.05" fill="#8DE383"/><rect x="44" y="30" width="1.05" height="1.05" fill="#2D1C11"/><rect x="6" y="31" width="1.05" height="1.05" fill="#2D1C11"/><rect x="7" y="31" width="1.05" height="1.05" fill="#2D1C11"/><rect x="8" y="31" width="1.05" height="1.05" fill="#2D1C11"/><rect x="9" y="31" width="1.05" height="1.05" fill="#2D1C11"/><rect x="10" y="31" width="1.05" height="1.05" fill="#2D1C11"/><rect x="11" y="31" width="1.05" height="1.05" fill="#2D1C11"/><rect x="12" y="31" width="1.05" height="1.05" fill="#2D1C11"/><rect x="13" y="31" width="1.05" height="1.05" fill="#2D1C11"/><rect x="14" y="31" width="1.05" height="1.05" fill="#FFF275"/><rect x="15" y="31" width="1.05" height="1.05" fill="#FFF275"/><rect x="16" y="31" width="1.05" height="1.05" fill="#2D1C11"/><rect x="17" y="31" width="1.05" height="1.05" fill="#2D1C11"/><rect x="21" y="31" width="1.05" height="1.05" fill="#2D1C11"/><rect x="22" y="31" width="1.05" height="1.05" fill="#3B7337"/><rect x="23" y="31" width="1.05" height="1.05" fill="#3B7337"/><rect x="24" y="31" width="1.05" height="1.05" fill="#3B7337"/><rect x="25" y="31" width="1.05" height="1.05" fill="#3B7337"/><rect x="26" y="31" width="1.05" height="1.05" fill="#3B7337"/><rect x="27" y="31" width="1.05" height="1.05" fill="#3B7337"/><rect x="28" y="31" width="1.05" height="1.05" fill="#3B7337"/><rect x="29" y="31" width="1.05" height="1.05" fill="#3B7337"/><rect x="30" y="31" width="1.05" height="1.05" fill="#3B7337"/><rect x="31" y="31" width="1.05" height="1.05" fill="#3B7337"/><rect x="32" y="31" width="1.05" height="1.05" fill="#3B7337"/><rect x="33" y="31" width="1.05" height="1.05" fill="#3B7337"/><rect x="34" y="31" width="1.05" height="1.05" fill="#3B7337"/><rect x="35" y="31" width="1.05" height="1.05" fill="#3B7337"/><rect x="36" y="31" width="1.05" height="1.05" fill="#D68716"/><rect x="37" y="31" width="1.05" height="1.05" fill="#D68716"/><rect x="38" y="31" width="1.05" height="1.05" fill="#3B7337"/><rect x="39" y="31" width="1.05" height="1.05" fill="#3B7337"/><rect x="40" y="31" width="1.05" height="1.05" fill="#3B7337"/><rect x="41" y="31" width="1.05" height="1.05" fill="#3B7337"/><rect x="42" y="31" width="1.05" height="1.05" fill="#3B7337"/><rect x="43" y="31" width="1.05" height="1.05" fill="#3B7337"/><rect x="44" y="31" width="1.05" height="1.05" fill="#2D1C11"/><rect x="6" y="32" width="1.05" height="1.05" fill="#2D1C11"/><rect x="7" y="32" width="1.05" height="1.05" fill="#FFF275"/><rect x="8" y="32" width="1.05" height="1.05" fill="#FFF275"/><rect x="9" y="32" width="1.05" height="1.05" fill="#FFF275"/><rect x="10" y="32" width="1.05" height="1.05" fill="#FFF275"/><rect x="11" y="32" width="1.05" height="1.05" fill="#FFF275"/><rect x="12" y="32" width="1.05" height="1.05" fill="#FFF275"/><rect x="13" y="32" width="1.05" height="1.05" fill="#2D1C11"/><rect x="14" y="32" width="1.05" height="1.05" fill="#FFC82F"/><rect x="15" y="32" width="1.05" height="1.05" fill="#FFC82F"/><rect x="16" y="32" width="1.05" height="1.05" fill="#FFF275"/><rect x="17" y="32" width="1.05" height="1.05" fill="#2D1C11"/><rect x="21" y="32" width="1.05" height="1.05" fill="#2D1C11"/><rect x="22" y="32" width="1.05" height="1.05" fill="#5DB554"/><rect x="23" y="32" width="1.05" height="1.05" fill="#5DB554"/><rect x="24" y="32" width="1.05" height="1.05" fill="#5DB554"/><rect x="25" y="32" width="1.05" height="1.05" fill="#5DB554"/><rect x="26" y="32" width="1.05" height="1.05" fill="#5DB554"/><rect x="27" y="32" width="1.05" height="1.05" fill="#5DB554"/><rect x="28" y="32" width="1.05" height="1.05" fill="#5DB554"/><rect x="29" y="32" width="1.05" height="1.05" fill="#5DB554"/><rect x="30" y="32" width="1.05" height="1.05" fill="#5DB554"/><rect x="31" y="32" width="1.05" height="1.05" fill="#5DB554"/><rect x="32" y="32" width="1.05" height="1.05" fill="#5DB554"/><rect x="33" y="32" width="1.05" height="1.05" fill="#5DB554"/><rect x="34" y="32" width="1.05" height="1.05" fill="#5DB554"/><rect x="35" y="32" width="1.05" height="1.05" fill="#5DB554"/><rect x="36" y="32" width="1.05" height="1.05" fill="#FFC82F"/><rect x="37" y="32" width="1.05" height="1.05" fill="#FFC82F"/><rect x="38" y="32" width="1.05" height="1.05" fill="#5DB554"/><rect x="39" y="32" width="1.05" height="1.05" fill="#5DB554"/><rect x="40" y="32" width="1.05" height="1.05" fill="#5DB554"/><rect x="41" y="32" width="1.05" height="1.05" fill="#5DB554"/><rect x="42" y="32" width="1.05" height="1.05" fill="#5DB554"/><rect x="43" y="32" width="1.05" height="1.05" fill="#5DB554"/><rect x="44" y="32" width="1.05" height="1.05" fill="#2D1C11"/><rect x="5" y="33" width="1.05" height="1.05" fill="#2D1C11"/><rect x="6" y="33" width="1.05" height="1.05" fill="#FFF275"/><rect x="7" y="33" width="1.05" height="1.05" fill="#FFC82F"/><rect x="8" y="33" width="1.05" height="1.05" fill="#FFC82F"/><rect x="9" y="33" width="1.05" height="1.05" fill="#FFC82F"/><rect x="10" y="33" width="1.05" height="1.05" fill="#FFC82F"/><rect x="11" y="33" width="1.05" height="1.05" fill="#FFC82F"/><rect x="12" y="33" width="1.05" height="1.05" fill="#FFC82F"/><rect x="13" y="33" width="1.05" height="1.05" fill="#2D1C11"/><rect x="14" y="33" width="1.05" height="1.05" fill="#FFC82F"/><rect x="15" y="33" width="1.05" height="1.05" fill="#FFC82F"/><rect x="16" y="33" width="1.05" height="1.05" fill="#D68716"/><rect x="17" y="33" width="1.05" height="1.05" fill="#2D1C11"/><rect x="21" y="33" width="1.05" height="1.05" fill="#2D1C11"/><rect x="22" y="33" width="1.05" height="1.05" fill="#3B7337"/><rect x="23" y="33" width="1.05" height="1.05" fill="#3B7337"/><rect x="24" y="33" width="1.05" height="1.05" fill="#3B7337"/><rect x="25" y="33" width="1.05" height="1.05" fill="#3B7337"/><rect x="26" y="33" width="1.05" height="1.05" fill="#3B7337"/><rect x="27" y="33" width="1.05" height="1.05" fill="#3B7337"/><rect x="28" y="33" width="1.05" height="1.05" fill="#3B7337"/><rect x="29" y="33" width="1.05" height="1.05" fill="#3B7337"/><rect x="30" y="33" width="1.05" height="1.05" fill="#3B7337"/><rect x="31" y="33" width="1.05" height="1.05" fill="#3B7337"/><rect x="32" y="33" width="1.05" height="1.05" fill="#3B7337"/><rect x="33" y="33" width="1.05" height="1.05" fill="#3B7337"/><rect x="34" y="33" width="1.05" height="1.05" fill="#3B7337"/><rect x="35" y="33" width="1.05" height="1.05" fill="#3B7337"/><rect x="36" y="33" width="1.05" height="1.05" fill="#D68716"/><rect x="37" y="33" width="1.05" height="1.05" fill="#D68716"/><rect x="38" y="33" width="1.05" height="1.05" fill="#3B7337"/><rect x="39" y="33" width="1.05" height="1.05" fill="#3B7337"/><rect x="40" y="33" width="1.05" height="1.05" fill="#3B7337"/><rect x="41" y="33" width="1.05" height="1.05" fill="#3B7337"/><rect x="42" y="33" width="1.05" height="1.05" fill="#3B7337"/><rect x="43" y="33" width="1.05" height="1.05" fill="#3B7337"/><rect x="44" y="33" width="1.05" height="1.05" fill="#2D1C11"/><rect x="5" y="34" width="1.05" height="1.05" fill="#2D1C11"/><rect x="6" y="34" width="1.05" height="1.05" fill="#FFC82F"/><rect x="7" y="34" width="1.05" height="1.05" fill="#FFC82F"/><rect x="8" y="34" width="1.05" height="1.05" fill="#FFC82F"/><rect x="9" y="34" width="1.05" height="1.05" fill="#FFC82F"/><rect x="10" y="34" width="1.05" height="1.05" fill="#FFC82F"/><rect x="11" y="34" width="1.05" height="1.05" fill="#FFC82F"/><rect x="12" y="34" width="1.05" height="1.05" fill="#D68716"/><rect x="13" y="34" width="1.05" height="1.05" fill="#2D1C11"/><rect x="14" y="34" width="1.05" height="1.05" fill="#D68716"/><rect x="15" y="34" width="1.05" height="1.05" fill="#D68716"/><rect x="16" y="34" width="1.05" height="1.05" fill="#D68716"/><rect x="17" y="34" width="1.05" height="1.05" fill="#2D1C11"/><rect x="21" y="34" width="1.05" height="1.05" fill="#2D1C11"/><rect x="22" y="34" width="1.05" height="1.05" fill="#5DB554"/><rect x="23" y="34" width="1.05" height="1.05" fill="#5DB554"/><rect x="24" y="34" width="1.05" height="1.05" fill="#5DB554"/><rect x="25" y="34" width="1.05" height="1.05" fill="#5DB554"/><rect x="26" y="34" width="1.05" height="1.05" fill="#5DB554"/><rect x="27" y="34" width="1.05" height="1.05" fill="#5DB554"/><rect x="28" y="34" width="1.05" height="1.05" fill="#5DB554"/><rect x="29" y="34" width="1.05" height="1.05" fill="#5DB554"/><rect x="30" y="34" width="1.05" height="1.05" fill="#5DB554"/><rect x="31" y="34" width="1.05" height="1.05" fill="#5DB554"/><rect x="32" y="34" width="1.05" height="1.05" fill="#5DB554"/><rect x="33" y="34" width="1.05" height="1.05" fill="#5DB554"/><rect x="34" y="34" width="1.05" height="1.05" fill="#5DB554"/><rect x="35" y="34" width="1.05" height="1.05" fill="#5DB554"/><rect x="36" y="34" width="1.05" height="1.05" fill="#FFC82F"/><rect x="37" y="34" width="1.05" height="1.05" fill="#FFC82F"/><rect x="38" y="34" width="1.05" height="1.05" fill="#5DB554"/><rect x="39" y="34" width="1.05" height="1.05" fill="#5DB554"/><rect x="40" y="34" width="1.05" height="1.05" fill="#5DB554"/><rect x="41" y="34" width="1.05" height="1.05" fill="#5DB554"/><rect x="42" y="34" width="1.05" height="1.05" fill="#5DB554"/><rect x="43" y="34" width="1.05" height="1.05" fill="#5DB554"/><rect x="44" y="34" width="1.05" height="1.05" fill="#2D1C11"/><rect x="4" y="35" width="1.05" height="1.05" fill="#2D1C11"/><rect x="5" y="35" width="1.05" height="1.05" fill="#FFC82F"/><rect x="6" y="35" width="1.05" height="1.05" fill="#D68716"/><rect x="7" y="35" width="1.05" height="1.05" fill="#D68716"/><rect x="8" y="35" width="1.05" height="1.05" fill="#D68716"/><rect x="9" y="35" width="1.05" height="1.05" fill="#D68716"/><rect x="10" y="35" width="1.05" height="1.05" fill="#D68716"/><rect x="11" y="35" width="1.05" height="1.05" fill="#D68716"/><rect x="12" y="35" width="1.05" height="1.05" fill="#2D1C11"/><rect x="13" y="35" width="1.05" height="1.05" fill="#2D1C11"/><rect x="14" y="35" width="1.05" height="1.05" fill="#2D1C11"/><rect x="15" y="35" width="1.05" height="1.05" fill="#2D1C11"/><rect x="16" y="35" width="1.05" height="1.05" fill="#2D1C11"/><rect x="21" y="35" width="1.05" height="1.05" fill="#2D1C11"/><rect x="22" y="35" width="1.05" height="1.05" fill="#3B7337"/><rect x="23" y="35" width="1.05" height="1.05" fill="#3B7337"/><rect x="24" y="35" width="1.05" height="1.05" fill="#3B7337"/><rect x="25" y="35" width="1.05" height="1.05" fill="#3B7337"/><rect x="26" y="35" width="1.05" height="1.05" fill="#3B7337"/><rect x="27" y="35" width="1.05" height="1.05" fill="#3B7337"/><rect x="28" y="35" width="1.05" height="1.05" fill="#3B7337"/><rect x="29" y="35" width="1.05" height="1.05" fill="#3B7337"/><rect x="30" y="35" width="1.05" height="1.05" fill="#3B7337"/><rect x="31" y="35" width="1.05" height="1.05" fill="#3B7337"/><rect x="32" y="35" width="1.05" height="1.05" fill="#3B7337"/><rect x="33" y="35" width="1.05" height="1.05" fill="#3B7337"/><rect x="34" y="35" width="1.05" height="1.05" fill="#3B7337"/><rect x="35" y="35" width="1.05" height="1.05" fill="#3B7337"/><rect x="36" y="35" width="1.05" height="1.05" fill="#D68716"/><rect x="37" y="35" width="1.05" height="1.05" fill="#D68716"/><rect x="38" y="35" width="1.05" height="1.05" fill="#3B7337"/><rect x="39" y="35" width="1.05" height="1.05" fill="#3B7337"/><rect x="40" y="35" width="1.05" height="1.05" fill="#3B7337"/><rect x="41" y="35" width="1.05" height="1.05" fill="#3B7337"/><rect x="42" y="35" width="1.05" height="1.05" fill="#3B7337"/><rect x="43" y="35" width="1.05" height="1.05" fill="#3B7337"/><rect x="44" y="35" width="1.05" height="1.05" fill="#2D1C11"/><rect x="4" y="36" width="1.05" height="1.05" fill="#2D1C11"/><rect x="5" y="36" width="1.05" height="1.05" fill="#2D1C11"/><rect x="6" y="36" width="1.05" height="1.05" fill="#2D1C11"/><rect x="7" y="36" width="1.05" height="1.05" fill="#2D1C11"/><rect x="8" y="36" width="1.05" height="1.05" fill="#2D1C11"/><rect x="9" y="36" width="1.05" height="1.05" fill="#2D1C11"/><rect x="10" y="36" width="1.05" height="1.05" fill="#2D1C11"/><rect x="11" y="36" width="1.05" height="1.05" fill="#2D1C11"/><rect x="12" y="36" width="1.05" height="1.05" fill="#FFF275"/><rect x="13" y="36" width="1.05" height="1.05" fill="#FFF275"/><rect x="14" y="36" width="1.05" height="1.05" fill="#FFF275"/><rect x="15" y="36" width="1.05" height="1.05" fill="#2D1C11"/><rect x="16" y="36" width="1.05" height="1.05" fill="#2D1C11"/><rect x="21" y="36" width="1.05" height="1.05" fill="#2D1C11"/><rect x="22" y="36" width="1.05" height="1.05" fill="#2D1C11"/><rect x="23" y="36" width="1.05" height="1.05" fill="#2D1C11"/><rect x="24" y="36" width="1.05" height="1.05" fill="#2D1C11"/><rect x="25" y="36" width="1.05" height="1.05" fill="#2D1C11"/><rect x="26" y="36" width="1.05" height="1.05" fill="#2D1C11"/><rect x="27" y="36" width="1.05" height="1.05" fill="#2D1C11"/><rect x="28" y="36" width="1.05" height="1.05" fill="#2D1C11"/><rect x="29" y="36" width="1.05" height="1.05" fill="#2D1C11"/><rect x="30" y="36" width="1.05" height="1.05" fill="#2D1C11"/><rect x="31" y="36" width="1.05" height="1.05" fill="#2D1C11"/><rect x="32" y="36" width="1.05" height="1.05" fill="#2D1C11"/><rect x="33" y="36" width="1.05" height="1.05" fill="#2D1C11"/><rect x="34" y="36" width="1.05" height="1.05" fill="#2D1C11"/><rect x="35" y="36" width="1.05" height="1.05" fill="#2D1C11"/><rect x="36" y="36" width="1.05" height="1.05" fill="#2D1C11"/><rect x="37" y="36" width="1.05" height="1.05" fill="#2D1C11"/><rect x="38" y="36" width="1.05" height="1.05" fill="#2D1C11"/><rect x="39" y="36" width="1.05" height="1.05" fill="#2D1C11"/><rect x="40" y="36" width="1.05" height="1.05" fill="#2D1C11"/><rect x="41" y="36" width="1.05" height="1.05" fill="#2D1C11"/><rect x="42" y="36" width="1.05" height="1.05" fill="#2D1C11"/><rect x="43" y="36" width="1.05" height="1.05" fill="#2D1C11"/><rect x="44" y="36" width="1.05" height="1.05" fill="#2D1C11"/><rect x="3" y="37" width="1.05" height="1.05" fill="#2D1C11"/><rect x="4" y="37" width="1.05" height="1.05" fill="#FFF275"/><rect x="5" y="37" width="1.05" height="1.05" fill="#FFF275"/><rect x="6" y="37" width="1.05" height="1.05" fill="#FFF275"/><rect x="7" y="37" width="1.05" height="1.05" fill="#FFF275"/><rect x="8" y="37" width="1.05" height="1.05" fill="#FFF275"/><rect x="9" y="37" width="1.05" height="1.05" fill="#FFF275"/><rect x="10" y="37" width="1.05" height="1.05" fill="#FFF275"/><rect x="11" y="37" width="1.05" height="1.05" fill="#2D1C11"/><rect x="12" y="37" width="1.05" height="1.05" fill="#FFC82F"/><rect x="13" y="37" width="1.05" height="1.05" fill="#FFC82F"/><rect x="14" y="37" width="1.05" height="1.05" fill="#FFC82F"/><rect x="15" y="37" width="1.05" height="1.05" fill="#FFF275"/><rect x="16" y="37" width="1.05" height="1.05" fill="#2D1C11"/><rect x="2" y="38" width="1.05" height="1.05" fill="#2D1C11"/><rect x="3" y="38" width="1.05" height="1.05" fill="#FFF275"/><rect x="4" y="38" width="1.05" height="1.05" fill="#FFC82F"/><rect x="5" y="38" width="1.05" height="1.05" fill="#FFC82F"/><rect x="6" y="38" width="1.05" height="1.05" fill="#FFC82F"/><rect x="7" y="38" width="1.05" height="1.05" fill="#FFC82F"/><rect x="8" y="38" width="1.05" height="1.05" fill="#FFC82F"/><rect x="9" y="38" width="1.05" height="1.05" fill="#FFC82F"/><rect x="10" y="38" width="1.05" height="1.05" fill="#FFC82F"/><rect x="11" y="38" width="1.05" height="1.05" fill="#2D1C11"/><rect x="12" y="38" width="1.05" height="1.05" fill="#FFC82F"/><rect x="13" y="38" width="1.05" height="1.05" fill="#FFC82F"/><rect x="14" y="38" width="1.05" height="1.05" fill="#FFC82F"/><rect x="15" y="38" width="1.05" height="1.05" fill="#D68716"/><rect x="16" y="38" width="1.05" height="1.05" fill="#2D1C11"/><rect x="2" y="39" width="1.05" height="1.05" fill="#2D1C11"/><rect x="3" y="39" width="1.05" height="1.05" fill="#FFC82F"/><rect x="4" y="39" width="1.05" height="1.05" fill="#FFC82F"/><rect x="5" y="39" width="1.05" height="1.05" fill="#FFC82F"/><rect x="6" y="39" width="1.05" height="1.05" fill="#FFC82F"/><rect x="7" y="39" width="1.05" height="1.05" fill="#FFC82F"/><rect x="8" y="39" width="1.05" height="1.05" fill="#FFC82F"/><rect x="9" y="39" width="1.05" height="1.05" fill="#FFC82F"/><rect x="10" y="39" width="1.05" height="1.05" fill="#D68716"/><rect x="11" y="39" width="1.05" height="1.05" fill="#2D1C11"/><rect x="12" y="39" width="1.05" height="1.05" fill="#D68716"/><rect x="13" y="39" width="1.05" height="1.05" fill="#D68716"/><rect x="14" y="39" width="1.05" height="1.05" fill="#D68716"/><rect x="15" y="39" width="1.05" height="1.05" fill="#D68716"/><rect x="16" y="39" width="1.05" height="1.05" fill="#2D1C11"/><rect x="2" y="40" width="1.05" height="1.05" fill="#2D1C11"/><rect x="3" y="40" width="1.05" height="1.05" fill="#FFC82F"/><rect x="4" y="40" width="1.05" height="1.05" fill="#D68716"/><rect x="5" y="40" width="1.05" height="1.05" fill="#D68716"/><rect x="6" y="40" width="1.05" height="1.05" fill="#D68716"/><rect x="7" y="40" width="1.05" height="1.05" fill="#D68716"/><rect x="8" y="40" width="1.05" height="1.05" fill="#D68716"/><rect x="9" y="40" width="1.05" height="1.05" fill="#D68716"/><rect x="10" y="40" width="1.05" height="1.05" fill="#D68716"/><rect x="11" y="40" width="1.05" height="1.05" fill="#2D1C11"/><rect x="12" y="40" width="1.05" height="1.05" fill="#2D1C11"/><rect x="13" y="40" width="1.05" height="1.05" fill="#2D1C11"/><rect x="14" y="40" width="1.05" height="1.05" fill="#2D1C11"/><rect x="15" y="40" width="1.05" height="1.05" fill="#2D1C11"/><rect x="2" y="41" width="1.05" height="1.05" fill="#2D1C11"/><rect x="3" y="41" width="1.05" height="1.05" fill="#2D1C11"/><rect x="4" y="41" width="1.05" height="1.05" fill="#2D1C11"/><rect x="5" y="41" width="1.05" height="1.05" fill="#2D1C11"/><rect x="6" y="41" width="1.05" height="1.05" fill="#2D1C11"/><rect x="7" y="41" width="1.05" height="1.05" fill="#2D1C11"/><rect x="8" y="41" width="1.05" height="1.05" fill="#2D1C11"/><rect x="9" y="41" width="1.05" height="1.05" fill="#2D1C11"/><rect x="10" y="41" width="1.05" height="1.05" fill="#2D1C11"/>` }} />
        <symbol id="pixel-ecosystem" viewBox="0 0 48 44" shapeRendering="crispEdges" dangerouslySetInnerHTML={{ __html: `<g className="eco-lines"><rect x="2" y="16" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="6" y="16" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="10" y="16" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="34" y="20" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="37" y="20" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="41" y="20" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="7" y="21" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="12" y="24" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="6" y="26" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="7" y="26" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="8" y="26" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="35" y="26" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="39" y="26" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="43" y="26" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="12" y="29" width="1.05" height="1.05" fill="#FF2D7A"/></g><g className="eco-phone"><rect x="16" y="3" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="17" y="3" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="18" y="3" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="19" y="3" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="20" y="3" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="21" y="3" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="22" y="3" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="23" y="3" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="24" y="3" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="25" y="3" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="26" y="3" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="27" y="3" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="28" y="3" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="29" y="3" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="30" y="3" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="31" y="3" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="15" y="4" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="16" y="4" width="1.05" height="1.05" fill="#333333"/><rect x="17" y="4" width="1.05" height="1.05" fill="#333333"/><rect x="18" y="4" width="1.05" height="1.05" fill="#333333"/><rect x="19" y="4" width="1.05" height="1.05" fill="#333333"/><rect x="20" y="4" width="1.05" height="1.05" fill="#333333"/><rect x="21" y="4" width="1.05" height="1.05" fill="#333333"/><rect x="22" y="4" width="1.05" height="1.05" fill="#333333"/><rect x="23" y="4" width="1.05" height="1.05" fill="#333333"/><rect x="24" y="4" width="1.05" height="1.05" fill="#333333"/><rect x="25" y="4" width="1.05" height="1.05" fill="#333333"/><rect x="26" y="4" width="1.05" height="1.05" fill="#333333"/><rect x="27" y="4" width="1.05" height="1.05" fill="#333333"/><rect x="28" y="4" width="1.05" height="1.05" fill="#333333"/><rect x="29" y="4" width="1.05" height="1.05" fill="#333333"/><rect x="30" y="4" width="1.05" height="1.05" fill="#333333"/><rect x="31" y="4" width="1.05" height="1.05" fill="#333333"/><rect x="32" y="4" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="15" y="5" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="16" y="5" width="1.05" height="1.05" fill="#333333"/><rect x="17" y="5" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="18" y="5" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="19" y="5" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="20" y="5" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="21" y="5" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="22" y="5" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="23" y="5" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="24" y="5" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="25" y="5" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="26" y="5" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="27" y="5" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="28" y="5" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="29" y="5" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="30" y="5" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="31" y="5" width="1.05" height="1.05" fill="#333333"/><rect x="32" y="5" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="15" y="6" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="16" y="6" width="1.05" height="1.05" fill="#333333"/><rect x="17" y="6" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="18" y="6" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="19" y="6" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="20" y="6" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="21" y="6" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="22" y="6" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="23" y="6" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="24" y="6" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="25" y="6" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="26" y="6" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="27" y="6" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="28" y="6" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="29" y="6" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="30" y="6" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="31" y="6" width="1.05" height="1.05" fill="#333333"/><rect x="32" y="6" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="15" y="7" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="16" y="7" width="1.05" height="1.05" fill="#333333"/><rect x="17" y="7" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="18" y="7" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="19" y="7" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="20" y="7" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="21" y="7" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="22" y="7" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="23" y="7" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="24" y="7" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="25" y="7" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="26" y="7" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="27" y="7" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="28" y="7" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="29" y="7" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="30" y="7" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="31" y="7" width="1.05" height="1.05" fill="#333333"/><rect x="32" y="7" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="15" y="8" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="16" y="8" width="1.05" height="1.05" fill="#333333"/><rect x="17" y="8" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="18" y="8" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="19" y="8" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="20" y="8" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="21" y="8" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="22" y="8" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="23" y="8" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="24" y="8" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="25" y="8" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="26" y="8" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="27" y="8" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="28" y="8" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="29" y="8" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="30" y="8" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="31" y="8" width="1.05" height="1.05" fill="#333333"/><rect x="32" y="8" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="15" y="9" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="16" y="9" width="1.05" height="1.05" fill="#333333"/><rect x="17" y="9" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="18" y="9" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="19" y="9" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="20" y="9" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="21" y="9" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="22" y="9" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="23" y="9" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="24" y="9" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="25" y="9" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="26" y="9" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="27" y="9" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="28" y="9" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="29" y="9" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="30" y="9" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="31" y="9" width="1.05" height="1.05" fill="#333333"/><rect x="32" y="9" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="15" y="10" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="16" y="10" width="1.05" height="1.05" fill="#333333"/><rect x="17" y="10" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="18" y="10" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="19" y="10" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="20" y="10" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="21" y="10" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="22" y="10" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="23" y="10" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="24" y="10" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="25" y="10" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="26" y="10" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="27" y="10" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="28" y="10" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="29" y="10" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="30" y="10" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="31" y="10" width="1.05" height="1.05" fill="#333333"/><rect x="32" y="10" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="15" y="11" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="16" y="11" width="1.05" height="1.05" fill="#333333"/><rect x="17" y="11" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="18" y="11" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="19" y="11" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="20" y="11" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="21" y="11" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="22" y="11" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="23" y="11" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="24" y="11" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="25" y="11" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="26" y="11" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="27" y="11" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="28" y="11" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="29" y="11" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="30" y="11" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="31" y="11" width="1.05" height="1.05" fill="#333333"/><rect x="32" y="11" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="15" y="12" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="16" y="12" width="1.05" height="1.05" fill="#333333"/><rect x="17" y="12" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="18" y="12" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="19" y="12" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="20" y="12" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="21" y="12" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="22" y="12" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="23" y="12" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="24" y="12" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="25" y="12" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="26" y="12" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="27" y="12" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="28" y="12" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="29" y="12" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="30" y="12" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="31" y="12" width="1.05" height="1.05" fill="#333333"/><rect x="32" y="12" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="15" y="13" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="16" y="13" width="1.05" height="1.05" fill="#333333"/><rect x="17" y="13" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="18" y="13" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="19" y="13" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="20" y="13" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="21" y="13" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="22" y="13" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="23" y="13" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="24" y="13" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="25" y="13" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="26" y="13" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="27" y="13" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="28" y="13" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="29" y="13" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="30" y="13" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="31" y="13" width="1.05" height="1.05" fill="#333333"/><rect x="32" y="13" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="15" y="14" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="16" y="14" width="1.05" height="1.05" fill="#333333"/><rect x="17" y="14" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="18" y="14" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="19" y="14" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="20" y="14" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="21" y="14" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="22" y="14" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="23" y="14" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="24" y="14" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="25" y="14" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="26" y="14" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="27" y="14" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="28" y="14" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="29" y="14" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="30" y="14" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="31" y="14" width="1.05" height="1.05" fill="#333333"/><rect x="32" y="14" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="15" y="15" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="16" y="15" width="1.05" height="1.05" fill="#333333"/><rect x="17" y="15" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="18" y="15" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="19" y="15" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="20" y="15" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="21" y="15" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="22" y="15" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="23" y="15" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="24" y="15" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="25" y="15" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="26" y="15" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="27" y="15" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="28" y="15" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="29" y="15" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="30" y="15" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="31" y="15" width="1.05" height="1.05" fill="#333333"/><rect x="32" y="15" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="15" y="16" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="16" y="16" width="1.05" height="1.05" fill="#333333"/><rect x="17" y="16" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="18" y="16" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="19" y="16" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="20" y="16" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="21" y="16" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="22" y="16" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="23" y="16" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="24" y="16" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="25" y="16" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="26" y="16" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="27" y="16" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="28" y="16" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="29" y="16" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="30" y="16" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="31" y="16" width="1.05" height="1.05" fill="#333333"/><rect x="32" y="16" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="15" y="17" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="16" y="17" width="1.05" height="1.05" fill="#333333"/><rect x="17" y="17" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="18" y="17" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="19" y="17" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="20" y="17" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="21" y="17" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="22" y="17" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="23" y="17" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="24" y="17" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="25" y="17" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="26" y="17" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="27" y="17" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="28" y="17" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="29" y="17" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="30" y="17" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="31" y="17" width="1.05" height="1.05" fill="#333333"/><rect x="32" y="17" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="15" y="18" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="16" y="18" width="1.05" height="1.05" fill="#333333"/><rect x="17" y="18" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="18" y="18" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="19" y="18" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="20" y="18" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="21" y="18" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="22" y="18" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="23" y="18" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="24" y="18" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="25" y="18" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="26" y="18" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="27" y="18" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="28" y="18" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="29" y="18" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="30" y="18" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="31" y="18" width="1.05" height="1.05" fill="#333333"/><rect x="32" y="18" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="15" y="19" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="16" y="19" width="1.05" height="1.05" fill="#333333"/><rect x="17" y="19" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="18" y="19" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="19" y="19" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="20" y="19" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="21" y="19" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="22" y="19" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="23" y="19" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="24" y="19" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="25" y="19" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="26" y="19" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="27" y="19" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="28" y="19" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="29" y="19" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="30" y="19" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="31" y="19" width="1.05" height="1.05" fill="#333333"/><rect x="32" y="19" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="15" y="20" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="16" y="20" width="1.05" height="1.05" fill="#333333"/><rect x="17" y="20" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="18" y="20" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="19" y="20" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="20" y="20" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="21" y="20" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="22" y="20" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="23" y="20" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="24" y="20" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="25" y="20" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="26" y="20" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="27" y="20" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="28" y="20" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="29" y="20" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="30" y="20" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="31" y="20" width="1.05" height="1.05" fill="#333333"/><rect x="32" y="20" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="15" y="21" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="16" y="21" width="1.05" height="1.05" fill="#333333"/><rect x="17" y="21" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="18" y="21" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="19" y="21" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="20" y="21" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="21" y="21" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="22" y="21" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="23" y="21" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="24" y="21" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="25" y="21" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="26" y="21" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="27" y="21" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="28" y="21" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="29" y="21" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="30" y="21" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="31" y="21" width="1.05" height="1.05" fill="#333333"/><rect x="32" y="21" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="15" y="22" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="16" y="22" width="1.05" height="1.05" fill="#333333"/><rect x="17" y="22" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="18" y="22" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="19" y="22" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="20" y="22" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="21" y="22" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="22" y="22" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="23" y="22" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="24" y="22" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="25" y="22" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="26" y="22" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="27" y="22" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="28" y="22" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="29" y="22" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="30" y="22" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="31" y="22" width="1.05" height="1.05" fill="#333333"/><rect x="32" y="22" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="15" y="23" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="16" y="23" width="1.05" height="1.05" fill="#333333"/><rect x="17" y="23" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="18" y="23" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="19" y="23" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="20" y="23" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="21" y="23" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="22" y="23" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="23" y="23" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="24" y="23" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="25" y="23" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="26" y="23" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="27" y="23" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="28" y="23" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="29" y="23" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="30" y="23" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="31" y="23" width="1.05" height="1.05" fill="#333333"/><rect x="32" y="23" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="15" y="24" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="16" y="24" width="1.05" height="1.05" fill="#333333"/><rect x="17" y="24" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="18" y="24" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="19" y="24" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="20" y="24" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="21" y="24" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="22" y="24" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="23" y="24" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="24" y="24" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="25" y="24" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="26" y="24" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="27" y="24" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="28" y="24" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="29" y="24" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="30" y="24" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="31" y="24" width="1.05" height="1.05" fill="#333333"/><rect x="32" y="24" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="15" y="25" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="16" y="25" width="1.05" height="1.05" fill="#333333"/><rect x="17" y="25" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="18" y="25" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="19" y="25" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="20" y="25" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="21" y="25" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="22" y="25" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="23" y="25" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="24" y="25" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="25" y="25" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="26" y="25" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="27" y="25" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="28" y="25" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="29" y="25" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="30" y="25" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="31" y="25" width="1.05" height="1.05" fill="#333333"/><rect x="32" y="25" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="15" y="26" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="16" y="26" width="1.05" height="1.05" fill="#333333"/><rect x="17" y="26" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="18" y="26" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="19" y="26" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="20" y="26" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="21" y="26" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="22" y="26" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="23" y="26" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="24" y="26" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="25" y="26" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="26" y="26" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="27" y="26" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="28" y="26" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="29" y="26" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="30" y="26" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="31" y="26" width="1.05" height="1.05" fill="#333333"/><rect x="32" y="26" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="15" y="27" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="16" y="27" width="1.05" height="1.05" fill="#333333"/><rect x="17" y="27" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="18" y="27" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="19" y="27" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="20" y="27" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="21" y="27" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="22" y="27" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="23" y="27" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="24" y="27" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="25" y="27" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="26" y="27" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="27" y="27" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="28" y="27" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="29" y="27" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="30" y="27" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="31" y="27" width="1.05" height="1.05" fill="#333333"/><rect x="32" y="27" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="15" y="28" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="16" y="28" width="1.05" height="1.05" fill="#333333"/><rect x="17" y="28" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="18" y="28" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="19" y="28" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="20" y="28" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="21" y="28" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="22" y="28" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="23" y="28" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="24" y="28" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="25" y="28" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="26" y="28" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="27" y="28" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="28" y="28" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="29" y="28" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="30" y="28" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="31" y="28" width="1.05" height="1.05" fill="#333333"/><rect x="32" y="28" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="15" y="29" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="16" y="29" width="1.05" height="1.05" fill="#333333"/><rect x="17" y="29" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="18" y="29" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="19" y="29" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="20" y="29" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="21" y="29" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="22" y="29" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="23" y="29" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="24" y="29" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="25" y="29" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="26" y="29" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="27" y="29" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="28" y="29" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="29" y="29" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="30" y="29" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="31" y="29" width="1.05" height="1.05" fill="#333333"/><rect x="32" y="29" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="15" y="30" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="16" y="30" width="1.05" height="1.05" fill="#333333"/><rect x="17" y="30" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="18" y="30" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="19" y="30" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="20" y="30" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="21" y="30" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="22" y="30" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="23" y="30" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="24" y="30" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="25" y="30" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="26" y="30" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="27" y="30" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="28" y="30" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="29" y="30" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="30" y="30" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="31" y="30" width="1.05" height="1.05" fill="#333333"/><rect x="32" y="30" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="15" y="31" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="16" y="31" width="1.05" height="1.05" fill="#333333"/><rect x="17" y="31" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="18" y="31" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="19" y="31" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="20" y="31" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="21" y="31" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="22" y="31" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="23" y="31" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="24" y="31" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="25" y="31" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="26" y="31" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="27" y="31" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="28" y="31" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="29" y="31" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="30" y="31" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="31" y="31" width="1.05" height="1.05" fill="#333333"/><rect x="32" y="31" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="15" y="32" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="16" y="32" width="1.05" height="1.05" fill="#333333"/><rect x="17" y="32" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="18" y="32" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="19" y="32" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="20" y="32" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="21" y="32" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="22" y="32" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="23" y="32" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="24" y="32" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="25" y="32" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="26" y="32" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="27" y="32" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="28" y="32" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="29" y="32" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="30" y="32" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="31" y="32" width="1.05" height="1.05" fill="#333333"/><rect x="32" y="32" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="15" y="33" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="16" y="33" width="1.05" height="1.05" fill="#333333"/><rect x="17" y="33" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="18" y="33" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="19" y="33" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="20" y="33" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="21" y="33" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="22" y="33" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="23" y="33" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="24" y="33" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="25" y="33" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="26" y="33" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="27" y="33" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="28" y="33" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="29" y="33" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="30" y="33" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="31" y="33" width="1.05" height="1.05" fill="#333333"/><rect x="32" y="33" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="15" y="34" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="16" y="34" width="1.05" height="1.05" fill="#333333"/><rect x="17" y="34" width="1.05" height="1.05" fill="#333333"/><rect x="18" y="34" width="1.05" height="1.05" fill="#333333"/><rect x="19" y="34" width="1.05" height="1.05" fill="#333333"/><rect x="20" y="34" width="1.05" height="1.05" fill="#333333"/><rect x="21" y="34" width="1.05" height="1.05" fill="#333333"/><rect x="22" y="34" width="1.05" height="1.05" fill="#333333"/><rect x="23" y="34" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="24" y="34" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="25" y="34" width="1.05" height="1.05" fill="#333333"/><rect x="26" y="34" width="1.05" height="1.05" fill="#333333"/><rect x="27" y="34" width="1.05" height="1.05" fill="#333333"/><rect x="28" y="34" width="1.05" height="1.05" fill="#333333"/><rect x="29" y="34" width="1.05" height="1.05" fill="#333333"/><rect x="30" y="34" width="1.05" height="1.05" fill="#333333"/><rect x="31" y="34" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="32" y="34" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="15" y="35" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="16" y="35" width="1.05" height="1.05" fill="#333333"/><rect x="17" y="35" width="1.05" height="1.05" fill="#333333"/><rect x="18" y="35" width="1.05" height="1.05" fill="#333333"/><rect x="19" y="35" width="1.05" height="1.05" fill="#333333"/><rect x="20" y="35" width="1.05" height="1.05" fill="#333333"/><rect x="21" y="35" width="1.05" height="1.05" fill="#333333"/><rect x="22" y="35" width="1.05" height="1.05" fill="#333333"/><rect x="23" y="35" width="1.05" height="1.05" fill="#333333"/><rect x="24" y="35" width="1.05" height="1.05" fill="#333333"/><rect x="25" y="35" width="1.05" height="1.05" fill="#333333"/><rect x="26" y="35" width="1.05" height="1.05" fill="#333333"/><rect x="27" y="35" width="1.05" height="1.05" fill="#333333"/><rect x="28" y="35" width="1.05" height="1.05" fill="#333333"/><rect x="29" y="35" width="1.05" height="1.05" fill="#333333"/><rect x="30" y="35" width="1.05" height="1.05" fill="#333333"/><rect x="31" y="35" width="1.05" height="1.05" fill="#333333"/><rect x="32" y="35" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="16" y="36" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="17" y="36" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="18" y="36" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="19" y="36" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="20" y="36" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="21" y="36" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="22" y="36" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="23" y="36" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="24" y="36" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="25" y="36" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="26" y="36" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="27" y="36" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="28" y="36" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="29" y="36" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="30" y="36" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="31" y="36" width="1.05" height="1.05" fill="#1A1A1A"/></g><g className="eco-cap"><rect x="6" y="9" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="7" y="9" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="8" y="9" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="9" y="9" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="10" y="9" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="11" y="9" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="4" y="10" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="5" y="10" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="6" y="10" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="7" y="10" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="8" y="10" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="9" y="10" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="10" y="10" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="11" y="10" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="12" y="10" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="13" y="10" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="3" y="11" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="4" y="11" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="5" y="11" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="6" y="11" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="7" y="11" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="8" y="11" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="9" y="11" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="10" y="11" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="11" y="11" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="12" y="11" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="13" y="11" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="14" y="11" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="4" y="12" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="5" y="12" width="1.05" height="1.05" fill="#333333"/><rect x="6" y="12" width="1.05" height="1.05" fill="#333333"/><rect x="7" y="12" width="1.05" height="1.05" fill="#333333"/><rect x="8" y="12" width="1.05" height="1.05" fill="#333333"/><rect x="9" y="12" width="1.05" height="1.05" fill="#333333"/><rect x="10" y="12" width="1.05" height="1.05" fill="#333333"/><rect x="11" y="12" width="1.05" height="1.05" fill="#333333"/><rect x="12" y="12" width="1.05" height="1.05" fill="#333333"/><rect x="13" y="12" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="5" y="13" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="6" y="13" width="1.05" height="1.05" fill="#333333"/><rect x="7" y="13" width="1.05" height="1.05" fill="#333333"/><rect x="8" y="13" width="1.05" height="1.05" fill="#333333"/><rect x="9" y="13" width="1.05" height="1.05" fill="#333333"/><rect x="10" y="13" width="1.05" height="1.05" fill="#333333"/><rect x="11" y="13" width="1.05" height="1.05" fill="#333333"/><rect x="12" y="13" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="6" y="14" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="7" y="14" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="8" y="14" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="9" y="14" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="10" y="14" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="11" y="14" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="13" y="14" width="1.05" height="1.05" fill="#FCD02E"/><rect x="13" y="15" width="1.05" height="1.05" fill="#FCD02E"/><rect x="13" y="16" width="1.05" height="1.05" fill="#FCD02E"/></g><g className="eco-robot"><rect x="7" y="22" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="5" y="23" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="6" y="23" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="7" y="23" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="8" y="23" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="9" y="23" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="4" y="24" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="5" y="24" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="6" y="24" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="7" y="24" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="8" y="24" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="9" y="24" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="10" y="24" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="3" y="25" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="4" y="25" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="5" y="25" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="6" y="25" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="7" y="25" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="8" y="25" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="9" y="25" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="10" y="25" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="11" y="25" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="3" y="26" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="4" y="26" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="5" y="26" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="9" y="26" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="10" y="26" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="11" y="26" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="3" y="27" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="4" y="27" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="5" y="27" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="6" y="27" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="7" y="27" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="8" y="27" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="9" y="27" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="10" y="27" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="11" y="27" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="4" y="28" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="5" y="28" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="6" y="28" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="7" y="28" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="8" y="28" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="9" y="28" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="10" y="28" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="5" y="29" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="6" y="29" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="7" y="29" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="8" y="29" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="9" y="29" width="1.05" height="1.05" fill="#1A1A1A"/></g><g className="eco-gear"><rect x="40" y="17" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="41" y="17" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="42" y="17" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="39" y="18" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="40" y="18" width="1.05" height="1.05" fill="#333333"/><rect x="41" y="18" width="1.05" height="1.05" fill="#333333"/><rect x="42" y="18" width="1.05" height="1.05" fill="#333333"/><rect x="43" y="18" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="38" y="19" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="39" y="19" width="1.05" height="1.05" fill="#333333"/><rect x="40" y="19" width="1.05" height="1.05" fill="#333333"/><rect x="41" y="19" width="1.05" height="1.05" fill="#333333"/><rect x="42" y="19" width="1.05" height="1.05" fill="#333333"/><rect x="43" y="19" width="1.05" height="1.05" fill="#333333"/><rect x="44" y="19" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="38" y="20" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="39" y="20" width="1.05" height="1.05" fill="#333333"/><rect x="40" y="20" width="1.05" height="1.05" fill="#333333"/><rect x="42" y="20" width="1.05" height="1.05" fill="#333333"/><rect x="43" y="20" width="1.05" height="1.05" fill="#333333"/><rect x="44" y="20" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="38" y="21" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="39" y="21" width="1.05" height="1.05" fill="#333333"/><rect x="40" y="21" width="1.05" height="1.05" fill="#333333"/><rect x="41" y="21" width="1.05" height="1.05" fill="#333333"/><rect x="42" y="21" width="1.05" height="1.05" fill="#333333"/><rect x="43" y="21" width="1.05" height="1.05" fill="#333333"/><rect x="44" y="21" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="39" y="22" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="40" y="22" width="1.05" height="1.05" fill="#333333"/><rect x="41" y="22" width="1.05" height="1.05" fill="#333333"/><rect x="42" y="22" width="1.05" height="1.05" fill="#333333"/><rect x="43" y="22" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="40" y="23" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="41" y="23" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="42" y="23" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="41" y="28" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="42" y="28" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="40" y="29" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="41" y="29" width="1.05" height="1.05" fill="#888888"/><rect x="42" y="29" width="1.05" height="1.05" fill="#888888"/><rect x="43" y="29" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="39" y="30" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="40" y="30" width="1.05" height="1.05" fill="#888888"/><rect x="41" y="30" width="1.05" height="1.05" fill="#888888"/><rect x="42" y="30" width="1.05" height="1.05" fill="#888888"/><rect x="43" y="30" width="1.05" height="1.05" fill="#888888"/><rect x="44" y="30" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="39" y="31" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="40" y="31" width="1.05" height="1.05" fill="#888888"/><rect x="41" y="31" width="1.05" height="1.05" fill="#888888"/><rect x="42" y="31" width="1.05" height="1.05" fill="#888888"/><rect x="43" y="31" width="1.05" height="1.05" fill="#888888"/><rect x="44" y="31" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="40" y="32" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="41" y="32" width="1.05" height="1.05" fill="#888888"/><rect x="42" y="32" width="1.05" height="1.05" fill="#888888"/><rect x="43" y="32" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="41" y="33" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="42" y="33" width="1.05" height="1.05" fill="#1A1A1A"/></g>` }} />
        <symbol id="pixel-phone-dog" viewBox="0 0 48 44" shapeRendering="crispEdges" dangerouslySetInnerHTML={{ __html: `<g className="eco-phone"><rect x="11" y="8" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="12" y="8" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="13" y="8" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="14" y="8" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="15" y="8" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="16" y="8" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="17" y="8" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="18" y="8" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="19" y="8" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="20" y="8" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="21" y="8" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="22" y="8" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="23" y="8" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="10" y="9" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="11" y="9" width="1.05" height="1.05" fill="#333333"/><rect x="12" y="9" width="1.05" height="1.05" fill="#333333"/><rect x="13" y="9" width="1.05" height="1.05" fill="#333333"/><rect x="14" y="9" width="1.05" height="1.05" fill="#333333"/><rect x="15" y="9" width="1.05" height="1.05" fill="#333333"/><rect x="16" y="9" width="1.05" height="1.05" fill="#333333"/><rect x="17" y="9" width="1.05" height="1.05" fill="#333333"/><rect x="18" y="9" width="1.05" height="1.05" fill="#333333"/><rect x="19" y="9" width="1.05" height="1.05" fill="#333333"/><rect x="20" y="9" width="1.05" height="1.05" fill="#333333"/><rect x="21" y="9" width="1.05" height="1.05" fill="#333333"/><rect x="22" y="9" width="1.05" height="1.05" fill="#333333"/><rect x="23" y="9" width="1.05" height="1.05" fill="#333333"/><rect x="10" y="10" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="11" y="10" width="1.05" height="1.05" fill="#333333"/><rect x="12" y="10" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="13" y="10" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="14" y="10" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="15" y="10" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="16" y="10" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="17" y="10" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="18" y="10" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="19" y="10" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="20" y="10" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="21" y="10" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="22" y="10" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="23" y="10" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="10" y="11" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="11" y="11" width="1.05" height="1.05" fill="#333333"/><rect x="12" y="11" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="13" y="11" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="14" y="11" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="15" y="11" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="16" y="11" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="17" y="11" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="18" y="11" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="19" y="11" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="20" y="11" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="21" y="11" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="22" y="11" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="23" y="11" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="10" y="12" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="11" y="12" width="1.05" height="1.05" fill="#333333"/><rect x="12" y="12" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="13" y="12" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="14" y="12" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="15" y="12" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="16" y="12" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="17" y="12" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="18" y="12" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="19" y="12" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="20" y="12" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="21" y="12" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="22" y="12" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="23" y="12" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="10" y="13" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="11" y="13" width="1.05" height="1.05" fill="#333333"/><rect x="12" y="13" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="13" y="13" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="14" y="13" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="15" y="13" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="16" y="13" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="17" y="13" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="18" y="13" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="19" y="13" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="20" y="13" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="21" y="13" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="22" y="13" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="23" y="13" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="10" y="14" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="11" y="14" width="1.05" height="1.05" fill="#333333"/><rect x="12" y="14" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="13" y="14" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="14" y="14" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="15" y="14" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="16" y="14" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="17" y="14" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="18" y="14" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="19" y="14" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="20" y="14" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="21" y="14" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="22" y="14" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="23" y="14" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="10" y="15" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="11" y="15" width="1.05" height="1.05" fill="#333333"/><rect x="12" y="15" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="13" y="15" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="14" y="15" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="15" y="15" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="16" y="15" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="17" y="15" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="18" y="15" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="19" y="15" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="20" y="15" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="21" y="15" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="22" y="15" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="23" y="15" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="10" y="16" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="11" y="16" width="1.05" height="1.05" fill="#333333"/><rect x="12" y="16" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="13" y="16" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="14" y="16" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="15" y="16" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="16" y="16" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="17" y="16" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="18" y="16" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="19" y="16" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="20" y="16" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="21" y="16" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="22" y="16" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="23" y="16" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="24" y="16" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="25" y="16" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="26" y="16" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="27" y="16" width="1.05" height="1.05" fill="#333333"/><rect x="28" y="16" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="10" y="17" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="11" y="17" width="1.05" height="1.05" fill="#333333"/><rect x="12" y="17" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="13" y="17" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="14" y="17" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="15" y="17" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="16" y="17" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="17" y="17" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="18" y="17" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="19" y="17" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="20" y="17" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="21" y="17" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="22" y="17" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="23" y="17" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="24" y="17" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="25" y="17" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="26" y="17" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="27" y="17" width="1.05" height="1.05" fill="#333333"/><rect x="28" y="17" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="10" y="18" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="11" y="18" width="1.05" height="1.05" fill="#333333"/><rect x="12" y="18" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="13" y="18" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="14" y="18" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="15" y="18" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="16" y="18" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="17" y="18" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="18" y="18" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="19" y="18" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="20" y="18" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="21" y="18" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="22" y="18" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="23" y="18" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="24" y="18" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="25" y="18" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="26" y="18" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="27" y="18" width="1.05" height="1.05" fill="#333333"/><rect x="28" y="18" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="10" y="19" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="11" y="19" width="1.05" height="1.05" fill="#333333"/><rect x="12" y="19" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="13" y="19" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="14" y="19" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="17" y="19" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="18" y="19" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="19" y="19" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="20" y="19" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="21" y="19" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="22" y="19" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="25" y="19" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="26" y="19" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="27" y="19" width="1.05" height="1.05" fill="#333333"/><rect x="28" y="19" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="10" y="20" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="11" y="20" width="1.05" height="1.05" fill="#333333"/><rect x="12" y="20" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="13" y="20" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="18" y="20" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="19" y="20" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="20" y="20" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="21" y="20" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="26" y="20" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="27" y="20" width="1.05" height="1.05" fill="#333333"/><rect x="28" y="20" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="10" y="21" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="11" y="21" width="1.05" height="1.05" fill="#333333"/><rect x="12" y="21" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="13" y="21" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="19" y="21" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="20" y="21" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="26" y="21" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="27" y="21" width="1.05" height="1.05" fill="#333333"/><rect x="28" y="21" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="10" y="22" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="11" y="22" width="1.05" height="1.05" fill="#333333"/><rect x="12" y="22" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="13" y="22" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="26" y="22" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="27" y="22" width="1.05" height="1.05" fill="#333333"/><rect x="28" y="22" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="10" y="23" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="11" y="23" width="1.05" height="1.05" fill="#333333"/><rect x="12" y="23" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="13" y="23" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="26" y="23" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="27" y="23" width="1.05" height="1.05" fill="#333333"/><rect x="28" y="23" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="10" y="24" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="11" y="24" width="1.05" height="1.05" fill="#333333"/><rect x="12" y="24" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="13" y="24" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="26" y="24" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="27" y="24" width="1.05" height="1.05" fill="#333333"/><rect x="28" y="24" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="10" y="25" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="11" y="25" width="1.05" height="1.05" fill="#333333"/><rect x="12" y="25" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="13" y="25" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="26" y="25" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="27" y="25" width="1.05" height="1.05" fill="#333333"/><rect x="28" y="25" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="10" y="26" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="11" y="26" width="1.05" height="1.05" fill="#333333"/><rect x="12" y="26" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="13" y="26" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="26" y="26" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="27" y="26" width="1.05" height="1.05" fill="#333333"/><rect x="28" y="26" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="10" y="27" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="11" y="27" width="1.05" height="1.05" fill="#333333"/><rect x="12" y="27" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="13" y="27" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="26" y="27" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="27" y="27" width="1.05" height="1.05" fill="#333333"/><rect x="28" y="27" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="10" y="28" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="11" y="28" width="1.05" height="1.05" fill="#333333"/><rect x="12" y="28" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="13" y="28" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="26" y="28" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="27" y="28" width="1.05" height="1.05" fill="#333333"/><rect x="28" y="28" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="10" y="29" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="11" y="29" width="1.05" height="1.05" fill="#333333"/><rect x="12" y="29" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="13" y="29" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="27" y="29" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="28" y="29" width="1.05" height="1.05" fill="#333333"/><rect x="29" y="29" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="10" y="30" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="11" y="30" width="1.05" height="1.05" fill="#333333"/><rect x="12" y="30" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="13" y="30" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="26" y="30" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="27" y="30" width="1.05" height="1.05" fill="#333333"/><rect x="28" y="30" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="10" y="31" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="11" y="31" width="1.05" height="1.05" fill="#333333"/><rect x="12" y="31" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="13" y="31" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="26" y="31" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="27" y="31" width="1.05" height="1.05" fill="#333333"/><rect x="28" y="31" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="10" y="32" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="11" y="32" width="1.05" height="1.05" fill="#333333"/><rect x="12" y="32" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="27" y="32" width="1.05" height="1.05" fill="#333333"/><rect x="28" y="32" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="10" y="33" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="11" y="33" width="1.05" height="1.05" fill="#333333"/><rect x="12" y="33" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="13" y="33" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="14" y="33" width="1.05" height="1.05" fill="#F4B678"/><rect x="15" y="33" width="1.05" height="1.05" fill="#F4B678"/><rect x="16" y="33" width="1.05" height="1.05" fill="#F4B678"/><rect x="17" y="33" width="1.05" height="1.05" fill="#F4B678"/><rect x="18" y="33" width="1.05" height="1.05" fill="#F4B678"/><rect x="19" y="33" width="1.05" height="1.05" fill="#F4B678"/><rect x="20" y="33" width="1.05" height="1.05" fill="#F4B678"/><rect x="21" y="33" width="1.05" height="1.05" fill="#F4B678"/><rect x="22" y="33" width="1.05" height="1.05" fill="#F4B678"/><rect x="23" y="33" width="1.05" height="1.05" fill="#F4B678"/><rect x="24" y="33" width="1.05" height="1.05" fill="#F4B678"/><rect x="25" y="33" width="1.05" height="1.05" fill="#F4B678"/><rect x="26" y="33" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="27" y="33" width="1.05" height="1.05" fill="#333333"/><rect x="28" y="33" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="10" y="34" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="11" y="34" width="1.05" height="1.05" fill="#333333"/><rect x="12" y="34" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="13" y="34" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="14" y="34" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="15" y="34" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="16" y="34" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="17" y="34" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="18" y="34" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="19" y="34" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="20" y="34" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="21" y="34" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="22" y="34" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="23" y="34" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="24" y="34" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="25" y="34" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="26" y="34" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="27" y="34" width="1.05" height="1.05" fill="#333333"/><rect x="28" y="34" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="10" y="35" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="11" y="35" width="1.05" height="1.05" fill="#333333"/><rect x="12" y="35" width="1.05" height="1.05" fill="#333333"/><rect x="13" y="35" width="1.05" height="1.05" fill="#333333"/><rect x="14" y="35" width="1.05" height="1.05" fill="#333333"/><rect x="15" y="35" width="1.05" height="1.05" fill="#333333"/><rect x="16" y="35" width="1.05" height="1.05" fill="#333333"/><rect x="17" y="35" width="1.05" height="1.05" fill="#333333"/><rect x="18" y="35" width="1.05" height="1.05" fill="#333333"/><rect x="19" y="35" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="20" y="35" width="1.05" height="1.05" fill="#333333"/><rect x="21" y="35" width="1.05" height="1.05" fill="#333333"/><rect x="22" y="35" width="1.05" height="1.05" fill="#333333"/><rect x="23" y="35" width="1.05" height="1.05" fill="#333333"/><rect x="24" y="35" width="1.05" height="1.05" fill="#333333"/><rect x="25" y="35" width="1.05" height="1.05" fill="#333333"/><rect x="26" y="35" width="1.05" height="1.05" fill="#333333"/><rect x="27" y="35" width="1.05" height="1.05" fill="#333333"/><rect x="28" y="35" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="10" y="36" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="11" y="36" width="1.05" height="1.05" fill="#333333"/><rect x="12" y="36" width="1.05" height="1.05" fill="#333333"/><rect x="13" y="36" width="1.05" height="1.05" fill="#333333"/><rect x="14" y="36" width="1.05" height="1.05" fill="#333333"/><rect x="15" y="36" width="1.05" height="1.05" fill="#333333"/><rect x="16" y="36" width="1.05" height="1.05" fill="#333333"/><rect x="17" y="36" width="1.05" height="1.05" fill="#333333"/><rect x="18" y="36" width="1.05" height="1.05" fill="#333333"/><rect x="19" y="36" width="1.05" height="1.05" fill="#333333"/><rect x="20" y="36" width="1.05" height="1.05" fill="#333333"/><rect x="21" y="36" width="1.05" height="1.05" fill="#333333"/><rect x="22" y="36" width="1.05" height="1.05" fill="#333333"/><rect x="23" y="36" width="1.05" height="1.05" fill="#333333"/><rect x="24" y="36" width="1.05" height="1.05" fill="#333333"/><rect x="25" y="36" width="1.05" height="1.05" fill="#333333"/><rect x="26" y="36" width="1.05" height="1.05" fill="#333333"/><rect x="27" y="36" width="1.05" height="1.05" fill="#333333"/><rect x="28" y="36" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="11" y="37" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="12" y="37" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="13" y="37" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="14" y="37" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="15" y="37" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="16" y="37" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="17" y="37" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="18" y="37" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="19" y="37" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="20" y="37" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="21" y="37" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="22" y="37" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="23" y="37" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="24" y="37" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="25" y="37" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="26" y="37" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="27" y="37" width="1.05" height="1.05" fill="#1A1A1A"/></g><g className="pd-dog"><rect x="15" y="19" width="1.05" height="1.05" fill="#9B5A30"/><rect x="16" y="19" width="1.05" height="1.05" fill="#9B5A30"/><rect x="23" y="19" width="1.05" height="1.05" fill="#9B5A30"/><rect x="24" y="19" width="1.05" height="1.05" fill="#9B5A30"/><rect x="14" y="20" width="1.05" height="1.05" fill="#9B5A30"/><rect x="15" y="20" width="1.05" height="1.05" fill="#9B5A30"/><rect x="16" y="20" width="1.05" height="1.05" fill="#9B5A30"/><rect x="17" y="20" width="1.05" height="1.05" fill="#9B5A30"/><rect x="22" y="20" width="1.05" height="1.05" fill="#9B5A30"/><rect x="23" y="20" width="1.05" height="1.05" fill="#9B5A30"/><rect x="24" y="20" width="1.05" height="1.05" fill="#9B5A30"/><rect x="25" y="20" width="1.05" height="1.05" fill="#9B5A30"/><rect x="14" y="21" width="1.05" height="1.05" fill="#9B5A30"/><rect x="15" y="21" width="1.05" height="1.05" fill="#F4B678"/><rect x="16" y="21" width="1.05" height="1.05" fill="#F4B678"/><rect x="17" y="21" width="1.05" height="1.05" fill="#9B5A30"/><rect x="18" y="21" width="1.05" height="1.05" fill="#9B5A30"/><rect x="21" y="21" width="1.05" height="1.05" fill="#9B5A30"/><rect x="22" y="21" width="1.05" height="1.05" fill="#F4B678"/><rect x="23" y="21" width="1.05" height="1.05" fill="#F4B678"/><rect x="24" y="21" width="1.05" height="1.05" fill="#9B5A30"/><rect x="25" y="21" width="1.05" height="1.05" fill="#9B5A30"/><rect x="14" y="22" width="1.05" height="1.05" fill="#F4B678"/><rect x="15" y="22" width="1.05" height="1.05" fill="#F4B678"/><rect x="16" y="22" width="1.05" height="1.05" fill="#F4B678"/><rect x="17" y="22" width="1.05" height="1.05" fill="#F4B678"/><rect x="18" y="22" width="1.05" height="1.05" fill="#F4B678"/><rect x="19" y="22" width="1.05" height="1.05" fill="#F4B678"/><rect x="20" y="22" width="1.05" height="1.05" fill="#F4B678"/><rect x="21" y="22" width="1.05" height="1.05" fill="#F4B678"/><rect x="22" y="22" width="1.05" height="1.05" fill="#F4B678"/><rect x="23" y="22" width="1.05" height="1.05" fill="#F4B678"/><rect x="24" y="22" width="1.05" height="1.05" fill="#F4B678"/><rect x="25" y="22" width="1.05" height="1.05" fill="#F4B678"/><rect x="14" y="23" width="1.05" height="1.05" fill="#F4B678"/><rect x="15" y="23" width="1.05" height="1.05" fill="#F4B678"/><rect x="16" y="23" width="1.05" height="1.05" fill="#F4B678"/><rect x="17" y="23" width="1.05" height="1.05" fill="#F4B678"/><rect x="18" y="23" width="1.05" height="1.05" fill="#F4B678"/><rect x="19" y="23" width="1.05" height="1.05" fill="#F4B678"/><rect x="20" y="23" width="1.05" height="1.05" fill="#F4B678"/><rect x="21" y="23" width="1.05" height="1.05" fill="#F4B678"/><rect x="22" y="23" width="1.05" height="1.05" fill="#F4B678"/><rect x="23" y="23" width="1.05" height="1.05" fill="#F4B678"/><rect x="24" y="23" width="1.05" height="1.05" fill="#F4B678"/><rect x="25" y="23" width="1.05" height="1.05" fill="#F4B678"/><rect x="14" y="24" width="1.05" height="1.05" fill="#F4B678"/><rect x="15" y="24" width="1.05" height="1.05" fill="#F4B678"/><rect x="16" y="24" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="17" y="24" width="1.05" height="1.05" fill="#F4B678"/><rect x="18" y="24" width="1.05" height="1.05" fill="#F4B678"/><rect x="19" y="24" width="1.05" height="1.05" fill="#F4B678"/><rect x="20" y="24" width="1.05" height="1.05" fill="#F4B678"/><rect x="21" y="24" width="1.05" height="1.05" fill="#F4B678"/><rect x="22" y="24" width="1.05" height="1.05" fill="#F4B678"/><rect x="23" y="24" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="24" y="24" width="1.05" height="1.05" fill="#F4B678"/><rect x="25" y="24" width="1.05" height="1.05" fill="#F4B678"/><rect x="14" y="25" width="1.05" height="1.05" fill="#F4B678"/><rect x="15" y="25" width="1.05" height="1.05" fill="#F4B678"/><rect x="16" y="25" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="17" y="25" width="1.05" height="1.05" fill="#F4B678"/><rect x="18" y="25" width="1.05" height="1.05" fill="#F4B678"/><rect x="19" y="25" width="1.05" height="1.05" fill="#F4B678"/><rect x="20" y="25" width="1.05" height="1.05" fill="#F4B678"/><rect x="21" y="25" width="1.05" height="1.05" fill="#F4B678"/><rect x="22" y="25" width="1.05" height="1.05" fill="#F4B678"/><rect x="23" y="25" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="24" y="25" width="1.05" height="1.05" fill="#F4B678"/><rect x="25" y="25" width="1.05" height="1.05" fill="#F4B678"/><rect x="14" y="26" width="1.05" height="1.05" fill="#F4B678"/><rect x="15" y="26" width="1.05" height="1.05" fill="#F4B678"/><rect x="16" y="26" width="1.05" height="1.05" fill="#F4B678"/><rect x="17" y="26" width="1.05" height="1.05" fill="#F4B678"/><rect x="18" y="26" width="1.05" height="1.05" fill="#F4B678"/><rect x="19" y="26" width="1.05" height="1.05" fill="#F4B678"/><rect x="20" y="26" width="1.05" height="1.05" fill="#F4B678"/><rect x="21" y="26" width="1.05" height="1.05" fill="#F4B678"/><rect x="22" y="26" width="1.05" height="1.05" fill="#F4B678"/><rect x="23" y="26" width="1.05" height="1.05" fill="#F4B678"/><rect x="24" y="26" width="1.05" height="1.05" fill="#F4B678"/><rect x="25" y="26" width="1.05" height="1.05" fill="#F4B678"/><rect x="14" y="27" width="1.05" height="1.05" fill="#F4B678"/><rect x="15" y="27" width="1.05" height="1.05" fill="#F4B678"/><rect x="16" y="27" width="1.05" height="1.05" fill="#F4B678"/><rect x="17" y="27" width="1.05" height="1.05" fill="#FFF0DB"/><rect x="18" y="27" width="1.05" height="1.05" fill="#FFF0DB"/><rect x="19" y="27" width="1.05" height="1.05" fill="#FFF0DB"/><rect x="20" y="27" width="1.05" height="1.05" fill="#FFF0DB"/><rect x="21" y="27" width="1.05" height="1.05" fill="#FFF0DB"/><rect x="22" y="27" width="1.05" height="1.05" fill="#FFF0DB"/><rect x="23" y="27" width="1.05" height="1.05" fill="#F4B678"/><rect x="24" y="27" width="1.05" height="1.05" fill="#F4B678"/><rect x="25" y="27" width="1.05" height="1.05" fill="#F4B678"/><rect x="14" y="28" width="1.05" height="1.05" fill="#F4B678"/><rect x="15" y="28" width="1.05" height="1.05" fill="#F4B678"/><rect x="16" y="28" width="1.05" height="1.05" fill="#FFF0DB"/><rect x="17" y="28" width="1.05" height="1.05" fill="#FFF0DB"/><rect x="18" y="28" width="1.05" height="1.05" fill="#FFF0DB"/><rect x="19" y="28" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="20" y="28" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="21" y="28" width="1.05" height="1.05" fill="#FFF0DB"/><rect x="22" y="28" width="1.05" height="1.05" fill="#FFF0DB"/><rect x="23" y="28" width="1.05" height="1.05" fill="#FFF0DB"/><rect x="24" y="28" width="1.05" height="1.05" fill="#F4B678"/><rect x="25" y="28" width="1.05" height="1.05" fill="#F4B678"/><rect x="14" y="29" width="1.05" height="1.05" fill="#F4B678"/><rect x="15" y="29" width="1.05" height="1.05" fill="#F4B678"/><rect x="16" y="29" width="1.05" height="1.05" fill="#FFF0DB"/><rect x="17" y="29" width="1.05" height="1.05" fill="#FFF0DB"/><rect x="18" y="29" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="19" y="29" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="20" y="29" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="21" y="29" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="22" y="29" width="1.05" height="1.05" fill="#FFF0DB"/><rect x="23" y="29" width="1.05" height="1.05" fill="#FFF0DB"/><rect x="24" y="29" width="1.05" height="1.05" fill="#FFF0DB"/><rect x="25" y="29" width="1.05" height="1.05" fill="#F4B678"/><rect x="26" y="29" width="1.05" height="1.05" fill="#F4B678"/><rect x="14" y="30" width="1.05" height="1.05" fill="#F4B678"/><rect x="15" y="30" width="1.05" height="1.05" fill="#F4B678"/><rect x="16" y="30" width="1.05" height="1.05" fill="#F4B678"/><rect x="17" y="30" width="1.05" height="1.05" fill="#FFF0DB"/><rect x="18" y="30" width="1.05" height="1.05" fill="#FFF0DB"/><rect x="19" y="30" width="1.05" height="1.05" fill="#FFF0DB"/><rect x="20" y="30" width="1.05" height="1.05" fill="#FFF0DB"/><rect x="21" y="30" width="1.05" height="1.05" fill="#FFF0DB"/><rect x="22" y="30" width="1.05" height="1.05" fill="#FFF0DB"/><rect x="23" y="30" width="1.05" height="1.05" fill="#F4B678"/><rect x="24" y="30" width="1.05" height="1.05" fill="#F4B678"/><rect x="25" y="30" width="1.05" height="1.05" fill="#F4B678"/><rect x="14" y="31" width="1.05" height="1.05" fill="#F4B678"/><rect x="15" y="31" width="1.05" height="1.05" fill="#F4B678"/><rect x="16" y="31" width="1.05" height="1.05" fill="#F4B678"/><rect x="17" y="31" width="1.05" height="1.05" fill="#F4B678"/><rect x="18" y="31" width="1.05" height="1.05" fill="#F4B678"/><rect x="19" y="31" width="1.05" height="1.05" fill="#F4B678"/><rect x="20" y="31" width="1.05" height="1.05" fill="#F4B678"/><rect x="21" y="31" width="1.05" height="1.05" fill="#F4B678"/><rect x="22" y="31" width="1.05" height="1.05" fill="#F4B678"/><rect x="23" y="31" width="1.05" height="1.05" fill="#F4B678"/><rect x="24" y="31" width="1.05" height="1.05" fill="#F4B678"/><rect x="25" y="31" width="1.05" height="1.05" fill="#F4B678"/><rect x="13" y="32" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="14" y="32" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="15" y="32" width="1.05" height="1.05" fill="#F4B678"/><rect x="16" y="32" width="1.05" height="1.05" fill="#F4B678"/><rect x="17" y="32" width="1.05" height="1.05" fill="#F4B678"/><rect x="18" y="32" width="1.05" height="1.05" fill="#F4B678"/><rect x="19" y="32" width="1.05" height="1.05" fill="#F4B678"/><rect x="20" y="32" width="1.05" height="1.05" fill="#F4B678"/><rect x="21" y="32" width="1.05" height="1.05" fill="#F4B678"/><rect x="22" y="32" width="1.05" height="1.05" fill="#F4B678"/><rect x="23" y="32" width="1.05" height="1.05" fill="#F4B678"/><rect x="24" y="32" width="1.05" height="1.05" fill="#F4B678"/><rect x="25" y="32" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="26" y="32" width="1.05" height="1.05" fill="#1A1A1A"/></g><g className="pd-bubble"><rect x="27" y="1" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="28" y="1" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="29" y="1" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="30" y="1" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="31" y="1" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="32" y="1" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="33" y="1" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="34" y="1" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="35" y="1" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="36" y="1" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="37" y="1" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="25" y="2" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="26" y="2" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="27" y="2" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="28" y="2" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="29" y="2" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="30" y="2" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="31" y="2" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="32" y="2" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="33" y="2" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="34" y="2" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="35" y="2" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="36" y="2" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="37" y="2" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="38" y="2" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="39" y="2" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="24" y="3" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="25" y="3" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="26" y="3" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="27" y="3" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="28" y="3" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="29" y="3" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="30" y="3" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="31" y="3" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="32" y="3" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="33" y="3" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="34" y="3" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="35" y="3" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="36" y="3" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="37" y="3" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="38" y="3" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="39" y="3" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="40" y="3" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="24" y="4" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="25" y="4" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="26" y="4" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="27" y="4" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="28" y="4" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="29" y="4" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="30" y="4" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="31" y="4" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="32" y="4" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="33" y="4" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="34" y="4" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="35" y="4" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="36" y="4" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="37" y="4" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="38" y="4" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="39" y="4" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="40" y="4" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="24" y="5" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="25" y="5" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="26" y="5" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="27" y="5" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="28" y="5" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="29" y="5" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="30" y="5" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="31" y="5" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="32" y="5" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="33" y="5" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="34" y="5" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="35" y="5" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="36" y="5" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="37" y="5" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="38" y="5" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="39" y="5" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="40" y="5" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="24" y="6" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="25" y="6" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="26" y="6" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="27" y="6" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="28" y="6" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="29" y="6" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="30" y="6" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="31" y="6" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="32" y="6" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="33" y="6" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="34" y="6" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="35" y="6" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="36" y="6" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="37" y="6" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="38" y="6" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="39" y="6" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="40" y="6" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="24" y="7" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="25" y="7" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="26" y="7" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="27" y="7" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="28" y="7" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="29" y="7" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="30" y="7" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="31" y="7" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="32" y="7" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="33" y="7" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="34" y="7" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="35" y="7" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="36" y="7" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="37" y="7" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="38" y="7" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="39" y="7" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="40" y="7" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="24" y="8" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="25" y="8" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="26" y="8" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="27" y="8" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="29" y="8" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="30" y="8" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="31" y="8" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="32" y="8" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="33" y="8" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="34" y="8" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="35" y="8" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="36" y="8" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="37" y="8" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="38" y="8" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="39" y="8" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="40" y="8" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="24" y="9" width="1.05" height="1.05" fill="#333333"/><rect x="25" y="9" width="1.05" height="1.05" fill="#333333"/><rect x="26" y="9" width="1.05" height="1.05" fill="#333333"/><rect x="27" y="9" width="1.05" height="1.05" fill="#333333"/><rect x="28" y="9" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="30" y="9" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="31" y="9" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="32" y="9" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="33" y="9" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="34" y="9" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="35" y="9" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="36" y="9" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="37" y="9" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="38" y="9" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="39" y="9" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="40" y="9" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="24" y="10" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="25" y="10" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="26" y="10" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="27" y="10" width="1.05" height="1.05" fill="#333333"/><rect x="28" y="10" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="31" y="10" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="32" y="10" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="33" y="10" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="34" y="10" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="35" y="10" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="36" y="10" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="37" y="10" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="38" y="10" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="39" y="10" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="40" y="10" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="24" y="11" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="25" y="11" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="26" y="11" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="27" y="11" width="1.05" height="1.05" fill="#333333"/><rect x="28" y="11" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="31" y="11" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="32" y="11" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="33" y="11" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="34" y="11" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="35" y="11" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="36" y="11" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="37" y="11" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="38" y="11" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="39" y="11" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="40" y="11" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="24" y="12" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="25" y="12" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="26" y="12" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="27" y="12" width="1.05" height="1.05" fill="#333333"/><rect x="28" y="12" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="30" y="12" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="31" y="12" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="32" y="12" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="33" y="12" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="34" y="12" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="35" y="12" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="36" y="12" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="37" y="12" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="38" y="12" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="24" y="13" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="25" y="13" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="26" y="13" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="27" y="13" width="1.05" height="1.05" fill="#333333"/><rect x="28" y="13" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="29" y="13" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="30" y="13" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="31" y="13" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="32" y="13" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="33" y="13" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="34" y="13" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="35" y="13" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="36" y="13" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="24" y="14" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="25" y="14" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="26" y="14" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="27" y="14" width="1.05" height="1.05" fill="#333333"/><rect x="28" y="14" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="29" y="14" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="30" y="14" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="31" y="14" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="24" y="15" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="25" y="15" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="26" y="15" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="27" y="15" width="1.05" height="1.05" fill="#333333"/><rect x="28" y="15" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="29" y="15" width="1.05" height="1.05" fill="#FF2D7A"/></g>` }} />
        <symbol id="pixel-phone-script" viewBox="0 0 48 44" shapeRendering="crispEdges" dangerouslySetInnerHTML={{ __html: `<g className="eco-lines"><rect x="34" y="19" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="35" y="20" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="36" y="21" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="14" y="22" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="36" y="22" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="15" y="23" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="36" y="23" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="16" y="24" width="1.05" height="1.05" fill="#FF2D7A"/></g><g className="eco-phone"><rect x="18" y="6" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="19" y="6" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="20" y="6" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="21" y="6" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="22" y="6" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="23" y="6" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="24" y="6" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="25" y="6" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="26" y="6" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="27" y="6" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="28" y="6" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="29" y="6" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="30" y="6" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="17" y="7" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="18" y="7" width="1.05" height="1.05" fill="#333333"/><rect x="19" y="7" width="1.05" height="1.05" fill="#333333"/><rect x="20" y="7" width="1.05" height="1.05" fill="#333333"/><rect x="21" y="7" width="1.05" height="1.05" fill="#333333"/><rect x="22" y="7" width="1.05" height="1.05" fill="#333333"/><rect x="23" y="7" width="1.05" height="1.05" fill="#333333"/><rect x="24" y="7" width="1.05" height="1.05" fill="#333333"/><rect x="25" y="7" width="1.05" height="1.05" fill="#333333"/><rect x="26" y="7" width="1.05" height="1.05" fill="#333333"/><rect x="27" y="7" width="1.05" height="1.05" fill="#333333"/><rect x="28" y="7" width="1.05" height="1.05" fill="#333333"/><rect x="29" y="7" width="1.05" height="1.05" fill="#333333"/><rect x="30" y="7" width="1.05" height="1.05" fill="#333333"/><rect x="31" y="7" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="17" y="8" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="18" y="8" width="1.05" height="1.05" fill="#333333"/><rect x="19" y="8" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="20" y="8" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="21" y="8" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="22" y="8" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="23" y="8" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="24" y="8" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="25" y="8" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="26" y="8" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="27" y="8" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="28" y="8" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="29" y="8" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="30" y="8" width="1.05" height="1.05" fill="#333333"/><rect x="31" y="8" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="17" y="9" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="18" y="9" width="1.05" height="1.05" fill="#333333"/><rect x="19" y="9" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="20" y="9" width="1.05" height="1.05" fill="#2B2B36"/><rect x="21" y="9" width="1.05" height="1.05" fill="#2B2B36"/><rect x="22" y="9" width="1.05" height="1.05" fill="#2B2B36"/><rect x="23" y="9" width="1.05" height="1.05" fill="#2B2B36"/><rect x="24" y="9" width="1.05" height="1.05" fill="#2B2B36"/><rect x="25" y="9" width="1.05" height="1.05" fill="#2B2B36"/><rect x="26" y="9" width="1.05" height="1.05" fill="#2B2B36"/><rect x="27" y="9" width="1.05" height="1.05" fill="#2B2B36"/><rect x="28" y="9" width="1.05" height="1.05" fill="#2B2B36"/><rect x="29" y="9" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="30" y="9" width="1.05" height="1.05" fill="#333333"/><rect x="31" y="9" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="17" y="10" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="18" y="10" width="1.05" height="1.05" fill="#333333"/><rect x="19" y="10" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="20" y="10" width="1.05" height="1.05" fill="#2B2B36"/><rect x="21" y="10" width="1.05" height="1.05" fill="#2B2B36"/><rect x="22" y="10" width="1.05" height="1.05" fill="#2B2B36"/><rect x="23" y="10" width="1.05" height="1.05" fill="#2B2B36"/><rect x="24" y="10" width="1.05" height="1.05" fill="#2B2B36"/><rect x="25" y="10" width="1.05" height="1.05" fill="#2B2B36"/><rect x="26" y="10" width="1.05" height="1.05" fill="#2B2B36"/><rect x="27" y="10" width="1.05" height="1.05" fill="#2B2B36"/><rect x="28" y="10" width="1.05" height="1.05" fill="#2B2B36"/><rect x="29" y="10" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="30" y="10" width="1.05" height="1.05" fill="#333333"/><rect x="31" y="10" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="17" y="11" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="18" y="11" width="1.05" height="1.05" fill="#333333"/><rect x="19" y="11" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="20" y="11" width="1.05" height="1.05" fill="#2B2B36"/><rect x="21" y="11" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="22" y="11" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="23" y="11" width="1.05" height="1.05" fill="#2B2B36"/><rect x="24" y="11" width="1.05" height="1.05" fill="#2B2B36"/><rect x="25" y="11" width="1.05" height="1.05" fill="#2B2B36"/><rect x="26" y="11" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="27" y="11" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="28" y="11" width="1.05" height="1.05" fill="#2B2B36"/><rect x="29" y="11" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="30" y="11" width="1.05" height="1.05" fill="#333333"/><rect x="31" y="11" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="17" y="12" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="18" y="12" width="1.05" height="1.05" fill="#333333"/><rect x="19" y="12" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="20" y="12" width="1.05" height="1.05" fill="#2B2B36"/><rect x="21" y="12" width="1.05" height="1.05" fill="#2B2B36"/><rect x="22" y="12" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="23" y="12" width="1.05" height="1.05" fill="#2B2B36"/><rect x="24" y="12" width="1.05" height="1.05" fill="#2B2B36"/><rect x="25" y="12" width="1.05" height="1.05" fill="#2B2B36"/><rect x="26" y="12" width="1.05" height="1.05" fill="#2B2B36"/><rect x="27" y="12" width="1.05" height="1.05" fill="#2B2B36"/><rect x="28" y="12" width="1.05" height="1.05" fill="#2B2B36"/><rect x="29" y="12" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="30" y="12" width="1.05" height="1.05" fill="#333333"/><rect x="31" y="12" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="17" y="13" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="18" y="13" width="1.05" height="1.05" fill="#333333"/><rect x="19" y="13" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="20" y="13" width="1.05" height="1.05" fill="#2B2B36"/><rect x="21" y="13" width="1.05" height="1.05" fill="#2B2B36"/><rect x="22" y="13" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="23" y="13" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="24" y="13" width="1.05" height="1.05" fill="#2B2B36"/><rect x="25" y="13" width="1.05" height="1.05" fill="#2B2B36"/><rect x="26" y="13" width="1.05" height="1.05" fill="#2B2B36"/><rect x="27" y="13" width="1.05" height="1.05" fill="#2B2B36"/><rect x="28" y="13" width="1.05" height="1.05" fill="#2B2B36"/><rect x="29" y="13" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="30" y="13" width="1.05" height="1.05" fill="#333333"/><rect x="31" y="13" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="17" y="14" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="18" y="14" width="1.05" height="1.05" fill="#333333"/><rect x="19" y="14" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="20" y="14" width="1.05" height="1.05" fill="#2B2B36"/><rect x="21" y="14" width="1.05" height="1.05" fill="#2B2B36"/><rect x="22" y="14" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="23" y="14" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="24" y="14" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="25" y="14" width="1.05" height="1.05" fill="#2B2B36"/><rect x="26" y="14" width="1.05" height="1.05" fill="#2B2B36"/><rect x="27" y="14" width="1.05" height="1.05" fill="#2B2B36"/><rect x="28" y="14" width="1.05" height="1.05" fill="#2B2B36"/><rect x="29" y="14" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="30" y="14" width="1.05" height="1.05" fill="#333333"/><rect x="31" y="14" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="17" y="15" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="18" y="15" width="1.05" height="1.05" fill="#333333"/><rect x="19" y="15" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="20" y="15" width="1.05" height="1.05" fill="#2B2B36"/><rect x="21" y="15" width="1.05" height="1.05" fill="#2B2B36"/><rect x="22" y="15" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="23" y="15" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="24" y="15" width="1.05" height="1.05" fill="#2B2B36"/><rect x="25" y="15" width="1.05" height="1.05" fill="#2B2B36"/><rect x="26" y="15" width="1.05" height="1.05" fill="#2B2B36"/><rect x="27" y="15" width="1.05" height="1.05" fill="#2B2B36"/><rect x="28" y="15" width="1.05" height="1.05" fill="#2B2B36"/><rect x="29" y="15" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="30" y="15" width="1.05" height="1.05" fill="#333333"/><rect x="31" y="15" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="17" y="16" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="18" y="16" width="1.05" height="1.05" fill="#333333"/><rect x="19" y="16" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="20" y="16" width="1.05" height="1.05" fill="#2B2B36"/><rect x="21" y="16" width="1.05" height="1.05" fill="#2B2B36"/><rect x="22" y="16" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="23" y="16" width="1.05" height="1.05" fill="#2B2B36"/><rect x="24" y="16" width="1.05" height="1.05" fill="#2B2B36"/><rect x="25" y="16" width="1.05" height="1.05" fill="#2B2B36"/><rect x="26" y="16" width="1.05" height="1.05" fill="#2B2B36"/><rect x="27" y="16" width="1.05" height="1.05" fill="#2B2B36"/><rect x="28" y="16" width="1.05" height="1.05" fill="#2B2B36"/><rect x="29" y="16" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="30" y="16" width="1.05" height="1.05" fill="#333333"/><rect x="31" y="16" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="17" y="17" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="18" y="17" width="1.05" height="1.05" fill="#333333"/><rect x="19" y="17" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="20" y="17" width="1.05" height="1.05" fill="#2B2B36"/><rect x="21" y="17" width="1.05" height="1.05" fill="#2B2B36"/><rect x="22" y="17" width="1.05" height="1.05" fill="#2B2B36"/><rect x="23" y="17" width="1.05" height="1.05" fill="#2B2B36"/><rect x="24" y="17" width="1.05" height="1.05" fill="#2B2B36"/><rect x="25" y="17" width="1.05" height="1.05" fill="#2B2B36"/><rect x="26" y="17" width="1.05" height="1.05" fill="#2B2B36"/><rect x="27" y="17" width="1.05" height="1.05" fill="#2B2B36"/><rect x="28" y="17" width="1.05" height="1.05" fill="#2B2B36"/><rect x="29" y="17" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="30" y="17" width="1.05" height="1.05" fill="#333333"/><rect x="31" y="17" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="17" y="18" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="18" y="18" width="1.05" height="1.05" fill="#333333"/><rect x="19" y="18" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="20" y="18" width="1.05" height="1.05" fill="#2B2B36"/><rect x="21" y="18" width="1.05" height="1.05" fill="#2B2B36"/><rect x="22" y="18" width="1.05" height="1.05" fill="#2B2B36"/><rect x="23" y="18" width="1.05" height="1.05" fill="#2B2B36"/><rect x="24" y="18" width="1.05" height="1.05" fill="#2B2B36"/><rect x="25" y="18" width="1.05" height="1.05" fill="#2B2B36"/><rect x="26" y="18" width="1.05" height="1.05" fill="#2B2B36"/><rect x="27" y="18" width="1.05" height="1.05" fill="#2B2B36"/><rect x="28" y="18" width="1.05" height="1.05" fill="#2B2B36"/><rect x="29" y="18" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="30" y="18" width="1.05" height="1.05" fill="#333333"/><rect x="31" y="18" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="17" y="19" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="18" y="19" width="1.05" height="1.05" fill="#333333"/><rect x="19" y="19" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="20" y="19" width="1.05" height="1.05" fill="#2B2B36"/><rect x="21" y="19" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="22" y="19" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="23" y="19" width="1.05" height="1.05" fill="#2B2B36"/><rect x="24" y="19" width="1.05" height="1.05" fill="#2B2B36"/><rect x="25" y="19" width="1.05" height="1.05" fill="#2B2B36"/><rect x="26" y="19" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="27" y="19" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="28" y="19" width="1.05" height="1.05" fill="#2B2B36"/><rect x="29" y="19" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="30" y="19" width="1.05" height="1.05" fill="#333333"/><rect x="31" y="19" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="17" y="20" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="18" y="20" width="1.05" height="1.05" fill="#333333"/><rect x="19" y="20" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="20" y="20" width="1.05" height="1.05" fill="#2B2B36"/><rect x="21" y="20" width="1.05" height="1.05" fill="#2B2B36"/><rect x="22" y="20" width="1.05" height="1.05" fill="#2B2B36"/><rect x="23" y="20" width="1.05" height="1.05" fill="#2B2B36"/><rect x="24" y="20" width="1.05" height="1.05" fill="#2B2B36"/><rect x="25" y="20" width="1.05" height="1.05" fill="#2B2B36"/><rect x="26" y="20" width="1.05" height="1.05" fill="#2B2B36"/><rect x="27" y="20" width="1.05" height="1.05" fill="#2B2B36"/><rect x="28" y="20" width="1.05" height="1.05" fill="#2B2B36"/><rect x="29" y="20" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="30" y="20" width="1.05" height="1.05" fill="#333333"/><rect x="31" y="20" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="17" y="21" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="18" y="21" width="1.05" height="1.05" fill="#333333"/><rect x="19" y="21" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="20" y="21" width="1.05" height="1.05" fill="#2B2B36"/><rect x="21" y="21" width="1.05" height="1.05" fill="#2B2B36"/><rect x="22" y="21" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="23" y="21" width="1.05" height="1.05" fill="#2B2B36"/><rect x="24" y="21" width="1.05" height="1.05" fill="#2B2B36"/><rect x="25" y="21" width="1.05" height="1.05" fill="#2B2B36"/><rect x="26" y="21" width="1.05" height="1.05" fill="#2B2B36"/><rect x="27" y="21" width="1.05" height="1.05" fill="#2B2B36"/><rect x="28" y="21" width="1.05" height="1.05" fill="#2B2B36"/><rect x="29" y="21" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="30" y="21" width="1.05" height="1.05" fill="#333333"/><rect x="31" y="21" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="17" y="22" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="18" y="22" width="1.05" height="1.05" fill="#333333"/><rect x="19" y="22" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="20" y="22" width="1.05" height="1.05" fill="#2B2B36"/><rect x="21" y="22" width="1.05" height="1.05" fill="#2B2B36"/><rect x="22" y="22" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="23" y="22" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="24" y="22" width="1.05" height="1.05" fill="#2B2B36"/><rect x="25" y="22" width="1.05" height="1.05" fill="#2B2B36"/><rect x="26" y="22" width="1.05" height="1.05" fill="#2B2B36"/><rect x="27" y="22" width="1.05" height="1.05" fill="#2B2B36"/><rect x="28" y="22" width="1.05" height="1.05" fill="#2B2B36"/><rect x="29" y="22" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="30" y="22" width="1.05" height="1.05" fill="#333333"/><rect x="31" y="22" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="17" y="23" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="18" y="23" width="1.05" height="1.05" fill="#333333"/><rect x="19" y="23" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="20" y="23" width="1.05" height="1.05" fill="#2B2B36"/><rect x="21" y="23" width="1.05" height="1.05" fill="#2B2B36"/><rect x="22" y="23" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="23" y="23" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="24" y="23" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="25" y="23" width="1.05" height="1.05" fill="#2B2B36"/><rect x="26" y="23" width="1.05" height="1.05" fill="#2B2B36"/><rect x="27" y="23" width="1.05" height="1.05" fill="#2B2B36"/><rect x="28" y="23" width="1.05" height="1.05" fill="#2B2B36"/><rect x="29" y="23" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="30" y="23" width="1.05" height="1.05" fill="#333333"/><rect x="31" y="23" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="17" y="24" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="18" y="24" width="1.05" height="1.05" fill="#333333"/><rect x="19" y="24" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="20" y="24" width="1.05" height="1.05" fill="#2B2B36"/><rect x="21" y="24" width="1.05" height="1.05" fill="#2B2B36"/><rect x="22" y="24" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="23" y="24" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="24" y="24" width="1.05" height="1.05" fill="#2B2B36"/><rect x="25" y="24" width="1.05" height="1.05" fill="#2B2B36"/><rect x="26" y="24" width="1.05" height="1.05" fill="#2B2B36"/><rect x="27" y="24" width="1.05" height="1.05" fill="#2B2B36"/><rect x="28" y="24" width="1.05" height="1.05" fill="#2B2B36"/><rect x="29" y="24" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="30" y="24" width="1.05" height="1.05" fill="#333333"/><rect x="31" y="24" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="17" y="25" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="18" y="25" width="1.05" height="1.05" fill="#333333"/><rect x="19" y="25" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="20" y="25" width="1.05" height="1.05" fill="#2B2B36"/><rect x="21" y="25" width="1.05" height="1.05" fill="#2B2B36"/><rect x="22" y="25" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="23" y="25" width="1.05" height="1.05" fill="#2B2B36"/><rect x="24" y="25" width="1.05" height="1.05" fill="#2B2B36"/><rect x="25" y="25" width="1.05" height="1.05" fill="#2B2B36"/><rect x="26" y="25" width="1.05" height="1.05" fill="#2B2B36"/><rect x="27" y="25" width="1.05" height="1.05" fill="#2B2B36"/><rect x="28" y="25" width="1.05" height="1.05" fill="#2B2B36"/><rect x="29" y="25" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="30" y="25" width="1.05" height="1.05" fill="#333333"/><rect x="31" y="25" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="17" y="26" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="18" y="26" width="1.05" height="1.05" fill="#333333"/><rect x="19" y="26" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="20" y="26" width="1.05" height="1.05" fill="#2B2B36"/><rect x="21" y="26" width="1.05" height="1.05" fill="#2B2B36"/><rect x="22" y="26" width="1.05" height="1.05" fill="#2B2B36"/><rect x="23" y="26" width="1.05" height="1.05" fill="#2B2B36"/><rect x="24" y="26" width="1.05" height="1.05" fill="#2B2B36"/><rect x="25" y="26" width="1.05" height="1.05" fill="#2B2B36"/><rect x="26" y="26" width="1.05" height="1.05" fill="#2B2B36"/><rect x="27" y="26" width="1.05" height="1.05" fill="#2B2B36"/><rect x="28" y="26" width="1.05" height="1.05" fill="#2B2B36"/><rect x="29" y="26" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="30" y="26" width="1.05" height="1.05" fill="#333333"/><rect x="31" y="26" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="17" y="27" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="18" y="27" width="1.05" height="1.05" fill="#333333"/><rect x="19" y="27" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="20" y="27" width="1.05" height="1.05" fill="#2B2B36"/><rect x="21" y="27" width="1.05" height="1.05" fill="#2B2B36"/><rect x="22" y="27" width="1.05" height="1.05" fill="#2B2B36"/><rect x="23" y="27" width="1.05" height="1.05" fill="#2B2B36"/><rect x="24" y="27" width="1.05" height="1.05" fill="#2B2B36"/><rect x="25" y="27" width="1.05" height="1.05" fill="#2B2B36"/><rect x="26" y="27" width="1.05" height="1.05" fill="#2B2B36"/><rect x="27" y="27" width="1.05" height="1.05" fill="#2B2B36"/><rect x="28" y="27" width="1.05" height="1.05" fill="#2B2B36"/><rect x="29" y="27" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="30" y="27" width="1.05" height="1.05" fill="#333333"/><rect x="31" y="27" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="17" y="28" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="18" y="28" width="1.05" height="1.05" fill="#333333"/><rect x="19" y="28" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="20" y="28" width="1.05" height="1.05" fill="#2B2B36"/><rect x="21" y="28" width="1.05" height="1.05" fill="#2B2B36"/><rect x="22" y="28" width="1.05" height="1.05" fill="#2B2B36"/><rect x="23" y="28" width="1.05" height="1.05" fill="#2B2B36"/><rect x="24" y="28" width="1.05" height="1.05" fill="#2B2B36"/><rect x="25" y="28" width="1.05" height="1.05" fill="#2B2B36"/><rect x="26" y="28" width="1.05" height="1.05" fill="#2B2B36"/><rect x="27" y="28" width="1.05" height="1.05" fill="#2B2B36"/><rect x="28" y="28" width="1.05" height="1.05" fill="#2B2B36"/><rect x="29" y="28" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="30" y="28" width="1.05" height="1.05" fill="#333333"/><rect x="31" y="28" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="17" y="29" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="18" y="29" width="1.05" height="1.05" fill="#333333"/><rect x="19" y="29" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="20" y="29" width="1.05" height="1.05" fill="#2B2B36"/><rect x="21" y="29" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="22" y="29" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="23" y="29" width="1.05" height="1.05" fill="#2B2B36"/><rect x="24" y="29" width="1.05" height="1.05" fill="#2B2B36"/><rect x="25" y="29" width="1.05" height="1.05" fill="#2B2B36"/><rect x="26" y="29" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="27" y="29" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="28" y="29" width="1.05" height="1.05" fill="#2B2B36"/><rect x="29" y="29" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="30" y="29" width="1.05" height="1.05" fill="#333333"/><rect x="31" y="29" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="17" y="30" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="18" y="30" width="1.05" height="1.05" fill="#333333"/><rect x="19" y="30" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="20" y="30" width="1.05" height="1.05" fill="#2B2B36"/><rect x="21" y="30" width="1.05" height="1.05" fill="#2B2B36"/><rect x="22" y="30" width="1.05" height="1.05" fill="#2B2B36"/><rect x="23" y="30" width="1.05" height="1.05" fill="#2B2B36"/><rect x="24" y="30" width="1.05" height="1.05" fill="#2B2B36"/><rect x="25" y="30" width="1.05" height="1.05" fill="#2B2B36"/><rect x="26" y="30" width="1.05" height="1.05" fill="#2B2B36"/><rect x="27" y="30" width="1.05" height="1.05" fill="#2B2B36"/><rect x="28" y="30" width="1.05" height="1.05" fill="#2B2B36"/><rect x="29" y="30" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="30" y="30" width="1.05" height="1.05" fill="#333333"/><rect x="31" y="30" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="17" y="31" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="18" y="31" width="1.05" height="1.05" fill="#333333"/><rect x="19" y="31" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="20" y="31" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="21" y="31" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="22" y="31" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="23" y="31" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="24" y="31" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="25" y="31" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="26" y="31" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="27" y="31" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="28" y="31" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="29" y="31" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="30" y="31" width="1.05" height="1.05" fill="#333333"/><rect x="31" y="31" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="17" y="32" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="18" y="32" width="1.05" height="1.05" fill="#333333"/><rect x="19" y="32" width="1.05" height="1.05" fill="#333333"/><rect x="20" y="32" width="1.05" height="1.05" fill="#333333"/><rect x="21" y="32" width="1.05" height="1.05" fill="#333333"/><rect x="22" y="32" width="1.05" height="1.05" fill="#333333"/><rect x="23" y="32" width="1.05" height="1.05" fill="#333333"/><rect x="24" y="32" width="1.05" height="1.05" fill="#333333"/><rect x="25" y="32" width="1.05" height="1.05" fill="#333333"/><rect x="26" y="32" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="27" y="32" width="1.05" height="1.05" fill="#333333"/><rect x="28" y="32" width="1.05" height="1.05" fill="#333333"/><rect x="29" y="32" width="1.05" height="1.05" fill="#333333"/><rect x="30" y="32" width="1.05" height="1.05" fill="#333333"/><rect x="31" y="32" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="17" y="33" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="18" y="33" width="1.05" height="1.05" fill="#333333"/><rect x="19" y="33" width="1.05" height="1.05" fill="#333333"/><rect x="20" y="33" width="1.05" height="1.05" fill="#333333"/><rect x="21" y="33" width="1.05" height="1.05" fill="#333333"/><rect x="22" y="33" width="1.05" height="1.05" fill="#333333"/><rect x="23" y="33" width="1.05" height="1.05" fill="#333333"/><rect x="24" y="33" width="1.05" height="1.05" fill="#333333"/><rect x="25" y="33" width="1.05" height="1.05" fill="#333333"/><rect x="26" y="33" width="1.05" height="1.05" fill="#333333"/><rect x="27" y="33" width="1.05" height="1.05" fill="#333333"/><rect x="28" y="33" width="1.05" height="1.05" fill="#333333"/><rect x="29" y="33" width="1.05" height="1.05" fill="#333333"/><rect x="30" y="33" width="1.05" height="1.05" fill="#333333"/><rect x="31" y="33" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="18" y="34" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="19" y="34" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="20" y="34" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="21" y="34" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="22" y="34" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="23" y="34" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="24" y="34" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="25" y="34" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="26" y="34" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="27" y="34" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="28" y="34" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="29" y="34" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="30" y="34" width="1.05" height="1.05" fill="#1A1A1A"/></g><g className="eco-cap"><rect x="4" y="20" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="5" y="20" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="6" y="20" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="7" y="20" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="8" y="20" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="9" y="20" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="10" y="20" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="3" y="21" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="4" y="21" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="5" y="21" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="6" y="21" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="7" y="21" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="8" y="21" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="9" y="21" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="10" y="21" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="11" y="21" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="2" y="22" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="3" y="22" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="4" y="22" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="5" y="22" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="6" y="22" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="7" y="22" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="8" y="22" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="9" y="22" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="10" y="22" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="11" y="22" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="12" y="22" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="2" y="23" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="3" y="23" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="4" y="23" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="5" y="23" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="6" y="23" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="7" y="23" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="8" y="23" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="9" y="23" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="10" y="23" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="11" y="23" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="12" y="23" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="2" y="24" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="3" y="24" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="4" y="24" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="5" y="24" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="6" y="24" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="7" y="24" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="8" y="24" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="9" y="24" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="10" y="24" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="11" y="24" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="12" y="24" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="3" y="25" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="4" y="25" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="5" y="25" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="6" y="25" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="7" y="25" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="8" y="25" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="9" y="25" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="10" y="25" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="11" y="25" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="4" y="26" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="5" y="26" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="6" y="26" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="7" y="26" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="8" y="26" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="9" y="26" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="10" y="26" width="1.05" height="1.05" fill="#FF2D7A"/></g><g className="eco-robot"><rect x="39" y="17" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="40" y="17" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="41" y="17" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="42" y="17" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="43" y="17" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="44" y="17" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="45" y="17" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="38" y="18" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="39" y="18" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="40" y="18" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="41" y="18" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="42" y="18" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="43" y="18" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="44" y="18" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="45" y="18" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="46" y="18" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="38" y="19" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="39" y="19" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="40" y="19" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="41" y="19" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="42" y="19" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="43" y="19" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="44" y="19" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="45" y="19" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="46" y="19" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="38" y="20" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="39" y="20" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="40" y="20" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="41" y="20" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="42" y="20" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="43" y="20" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="44" y="20" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="45" y="20" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="46" y="20" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="38" y="21" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="39" y="21" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="40" y="21" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="41" y="21" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="42" y="21" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="43" y="21" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="44" y="21" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="45" y="21" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="46" y="21" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="38" y="22" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="39" y="22" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="40" y="22" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="41" y="22" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="42" y="22" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="43" y="22" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="44" y="22" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="45" y="22" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="46" y="22" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="38" y="23" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="39" y="23" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="40" y="23" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="41" y="23" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="42" y="23" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="43" y="23" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="44" y="23" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="45" y="23" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="46" y="23" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="38" y="24" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="39" y="24" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="40" y="24" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="41" y="24" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="42" y="24" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="43" y="24" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="44" y="24" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="45" y="24" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="46" y="24" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="38" y="25" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="39" y="25" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="40" y="25" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="41" y="25" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="42" y="25" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="43" y="25" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="44" y="25" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="45" y="25" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="46" y="25" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="38" y="26" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="39" y="26" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="40" y="26" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="41" y="26" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="42" y="26" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="43" y="26" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="44" y="26" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="45" y="26" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="46" y="26" width="1.05" height="1.05" fill="#FF2D7A"/></g>` }} />
        <symbol id="pixel-ai-bot" viewBox="0 0 48 44" shapeRendering="crispEdges" dangerouslySetInnerHTML={{ __html: `<g className="ai-robot-body"><rect x="22" y="3" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="23" y="3" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="24" y="3" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="25" y="3" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="28" y="3" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="29" y="3" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="30" y="3" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="31" y="3" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="21" y="4" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="22" y="4" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="23" y="4" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="24" y="4" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="25" y="4" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="26" y="4" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="27" y="4" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="28" y="4" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="29" y="4" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="30" y="4" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="31" y="4" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="32" y="4" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="21" y="5" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="22" y="5" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="23" y="5" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="24" y="5" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="26" y="5" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="27" y="5" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="29" y="5" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="30" y="5" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="31" y="5" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="32" y="5" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="22" y="6" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="23" y="6" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="24" y="6" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="25" y="6" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="28" y="6" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="29" y="6" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="30" y="6" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="31" y="6" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="17" y="7" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="18" y="7" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="19" y="7" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="20" y="7" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="21" y="7" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="22" y="7" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="23" y="7" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="24" y="7" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="25" y="7" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="26" y="7" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="27" y="7" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="28" y="7" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="29" y="7" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="30" y="7" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="31" y="7" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="32" y="7" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="15" y="8" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="16" y="8" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="17" y="8" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="18" y="8" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="19" y="8" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="20" y="8" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="21" y="8" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="22" y="8" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="23" y="8" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="24" y="8" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="25" y="8" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="26" y="8" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="27" y="8" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="28" y="8" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="29" y="8" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="30" y="8" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="31" y="8" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="32" y="8" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="33" y="8" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="34" y="8" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="14" y="9" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="15" y="9" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="16" y="9" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="17" y="9" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="18" y="9" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="19" y="9" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="20" y="9" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="21" y="9" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="22" y="9" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="23" y="9" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="24" y="9" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="25" y="9" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="26" y="9" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="27" y="9" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="28" y="9" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="29" y="9" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="30" y="9" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="31" y="9" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="32" y="9" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="33" y="9" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="34" y="9" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="35" y="9" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="13" y="10" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="14" y="10" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="15" y="10" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="16" y="10" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="17" y="10" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="18" y="10" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="19" y="10" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="20" y="10" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="21" y="10" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="22" y="10" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="23" y="10" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="24" y="10" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="25" y="10" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="26" y="10" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="27" y="10" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="28" y="10" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="29" y="10" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="30" y="10" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="31" y="10" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="32" y="10" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="33" y="10" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="34" y="10" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="35" y="10" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="36" y="10" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="12" y="11" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="13" y="11" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="14" y="11" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="15" y="11" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="16" y="11" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="17" y="11" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="18" y="11" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="19" y="11" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="20" y="11" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="21" y="11" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="22" y="11" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="23" y="11" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="24" y="11" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="25" y="11" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="26" y="11" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="27" y="11" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="28" y="11" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="29" y="11" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="30" y="11" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="31" y="11" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="32" y="11" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="33" y="11" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="34" y="11" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="35" y="11" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="36" y="11" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="37" y="11" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="12" y="12" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="13" y="12" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="14" y="12" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="15" y="12" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="16" y="12" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="17" y="12" width="1.05" height="1.05" fill="#2B2B36"/><rect x="18" y="12" width="1.05" height="1.05" fill="#2B2B36"/><rect x="19" y="12" width="1.05" height="1.05" fill="#2B2B36"/><rect x="20" y="12" width="1.05" height="1.05" fill="#2B2B36"/><rect x="21" y="12" width="1.05" height="1.05" fill="#2B2B36"/><rect x="22" y="12" width="1.05" height="1.05" fill="#2B2B36"/><rect x="23" y="12" width="1.05" height="1.05" fill="#2B2B36"/><rect x="24" y="12" width="1.05" height="1.05" fill="#2B2B36"/><rect x="25" y="12" width="1.05" height="1.05" fill="#2B2B36"/><rect x="26" y="12" width="1.05" height="1.05" fill="#2B2B36"/><rect x="27" y="12" width="1.05" height="1.05" fill="#2B2B36"/><rect x="28" y="12" width="1.05" height="1.05" fill="#2B2B36"/><rect x="29" y="12" width="1.05" height="1.05" fill="#2B2B36"/><rect x="30" y="12" width="1.05" height="1.05" fill="#2B2B36"/><rect x="31" y="12" width="1.05" height="1.05" fill="#2B2B36"/><rect x="32" y="12" width="1.05" height="1.05" fill="#2B2B36"/><rect x="33" y="12" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="34" y="12" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="35" y="12" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="36" y="12" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="37" y="12" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="12" y="13" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="13" y="13" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="14" y="13" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="15" y="13" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="16" y="13" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="17" y="13" width="1.05" height="1.05" fill="#2B2B36"/><rect x="18" y="13" width="1.05" height="1.05" fill="#2B2B36"/><rect x="19" y="13" width="1.05" height="1.05" fill="#2B2B36"/><rect x="20" y="13" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="21" y="13" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="22" y="13" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="23" y="13" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="24" y="13" width="1.05" height="1.05" fill="#2B2B36"/><rect x="25" y="13" width="1.05" height="1.05" fill="#2B2B36"/><rect x="26" y="13" width="1.05" height="1.05" fill="#2B2B36"/><rect x="27" y="13" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="28" y="13" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="29" y="13" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="30" y="13" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="31" y="13" width="1.05" height="1.05" fill="#2B2B36"/><rect x="32" y="13" width="1.05" height="1.05" fill="#2B2B36"/><rect x="33" y="13" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="34" y="13" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="35" y="13" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="36" y="13" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="37" y="13" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="6" y="14" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="7" y="14" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="12" y="14" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="13" y="14" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="14" y="14" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="15" y="14" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="16" y="14" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="17" y="14" width="1.05" height="1.05" fill="#2B2B36"/><rect x="18" y="14" width="1.05" height="1.05" fill="#2B2B36"/><rect x="19" y="14" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="20" y="14" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="21" y="14" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="22" y="14" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="23" y="14" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="24" y="14" width="1.05" height="1.05" fill="#2B2B36"/><rect x="25" y="14" width="1.05" height="1.05" fill="#2B2B36"/><rect x="26" y="14" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="27" y="14" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="28" y="14" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="29" y="14" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="30" y="14" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="31" y="14" width="1.05" height="1.05" fill="#2B2B36"/><rect x="32" y="14" width="1.05" height="1.05" fill="#2B2B36"/><rect x="33" y="14" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="34" y="14" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="35" y="14" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="36" y="14" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="37" y="14" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="42" y="14" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="43" y="14" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="5" y="15" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="6" y="15" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="7" y="15" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="8" y="15" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="12" y="15" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="13" y="15" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="14" y="15" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="15" y="15" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="16" y="15" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="17" y="15" width="1.05" height="1.05" fill="#2B2B36"/><rect x="18" y="15" width="1.05" height="1.05" fill="#2B2B36"/><rect x="19" y="15" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="20" y="15" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="21" y="15" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="22" y="15" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="23" y="15" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="24" y="15" width="1.05" height="1.05" fill="#2B2B36"/><rect x="25" y="15" width="1.05" height="1.05" fill="#2B2B36"/><rect x="26" y="15" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="27" y="15" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="28" y="15" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="29" y="15" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="30" y="15" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="31" y="15" width="1.05" height="1.05" fill="#2B2B36"/><rect x="32" y="15" width="1.05" height="1.05" fill="#2B2B36"/><rect x="33" y="15" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="34" y="15" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="35" y="15" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="36" y="15" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="37" y="15" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="41" y="15" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="42" y="15" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="43" y="15" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="44" y="15" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="4" y="16" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="5" y="16" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="6" y="16" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="7" y="16" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="8" y="16" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="9" y="16" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="12" y="16" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="13" y="16" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="14" y="16" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="15" y="16" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="16" y="16" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="17" y="16" width="1.05" height="1.05" fill="#2B2B36"/><rect x="18" y="16" width="1.05" height="1.05" fill="#2B2B36"/><rect x="19" y="16" width="1.05" height="1.05" fill="#2B2B36"/><rect x="20" y="16" width="1.05" height="1.05" fill="#2B2B36"/><rect x="21" y="16" width="1.05" height="1.05" fill="#2B2B36"/><rect x="22" y="16" width="1.05" height="1.05" fill="#2B2B36"/><rect x="23" y="16" width="1.05" height="1.05" fill="#2B2B36"/><rect x="24" y="16" width="1.05" height="1.05" fill="#2B2B36"/><rect x="25" y="16" width="1.05" height="1.05" fill="#2B2B36"/><rect x="26" y="16" width="1.05" height="1.05" fill="#2B2B36"/><rect x="27" y="16" width="1.05" height="1.05" fill="#2B2B36"/><rect x="28" y="16" width="1.05" height="1.05" fill="#2B2B36"/><rect x="29" y="16" width="1.05" height="1.05" fill="#2B2B36"/><rect x="30" y="16" width="1.05" height="1.05" fill="#2B2B36"/><rect x="31" y="16" width="1.05" height="1.05" fill="#2B2B36"/><rect x="32" y="16" width="1.05" height="1.05" fill="#2B2B36"/><rect x="33" y="16" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="34" y="16" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="35" y="16" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="36" y="16" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="37" y="16" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="40" y="16" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="41" y="16" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="42" y="16" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="43" y="16" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="44" y="16" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="45" y="16" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="3" y="17" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="4" y="17" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="5" y="17" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="6" y="17" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="7" y="17" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="8" y="17" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="9" y="17" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="10" y="17" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="11" y="17" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="12" y="17" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="13" y="17" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="14" y="17" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="15" y="17" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="16" y="17" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="17" y="17" width="1.05" height="1.05" fill="#2B2B36"/><rect x="18" y="17" width="1.05" height="1.05" fill="#2B2B36"/><rect x="19" y="17" width="1.05" height="1.05" fill="#2B2B36"/><rect x="20" y="17" width="1.05" height="1.05" fill="#2B2B36"/><rect x="21" y="17" width="1.05" height="1.05" fill="#2B2B36"/><rect x="22" y="17" width="1.05" height="1.05" fill="#2B2B36"/><rect x="23" y="17" width="1.05" height="1.05" fill="#2B2B36"/><rect x="24" y="17" width="1.05" height="1.05" fill="#2B2B36"/><rect x="25" y="17" width="1.05" height="1.05" fill="#2B2B36"/><rect x="26" y="17" width="1.05" height="1.05" fill="#2B2B36"/><rect x="27" y="17" width="1.05" height="1.05" fill="#2B2B36"/><rect x="28" y="17" width="1.05" height="1.05" fill="#2B2B36"/><rect x="29" y="17" width="1.05" height="1.05" fill="#2B2B36"/><rect x="30" y="17" width="1.05" height="1.05" fill="#2B2B36"/><rect x="31" y="17" width="1.05" height="1.05" fill="#2B2B36"/><rect x="32" y="17" width="1.05" height="1.05" fill="#2B2B36"/><rect x="33" y="17" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="34" y="17" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="35" y="17" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="36" y="17" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="37" y="17" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="38" y="17" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="39" y="17" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="40" y="17" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="41" y="17" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="42" y="17" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="43" y="17" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="44" y="17" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="45" y="17" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="46" y="17" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="3" y="18" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="4" y="18" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="5" y="18" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="6" y="18" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="7" y="18" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="8" y="18" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="9" y="18" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="10" y="18" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="11" y="18" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="12" y="18" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="13" y="18" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="14" y="18" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="15" y="18" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="16" y="18" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="17" y="18" width="1.05" height="1.05" fill="#2B2B36"/><rect x="18" y="18" width="1.05" height="1.05" fill="#2B2B36"/><rect x="19" y="18" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="20" y="18" width="1.05" height="1.05" fill="#2B2B36"/><rect x="21" y="18" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="22" y="18" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="23" y="18" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="24" y="18" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="25" y="18" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="26" y="18" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="27" y="18" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="28" y="18" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="29" y="18" width="1.05" height="1.05" fill="#2B2B36"/><rect x="30" y="18" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="31" y="18" width="1.05" height="1.05" fill="#2B2B36"/><rect x="32" y="18" width="1.05" height="1.05" fill="#2B2B36"/><rect x="33" y="18" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="34" y="18" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="35" y="18" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="36" y="18" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="37" y="18" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="38" y="18" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="39" y="18" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="40" y="18" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="41" y="18" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="42" y="18" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="43" y="18" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="44" y="18" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="45" y="18" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="46" y="18" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="4" y="19" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="5" y="19" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="6" y="19" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="7" y="19" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="8" y="19" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="9" y="19" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="12" y="19" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="13" y="19" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="14" y="19" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="15" y="19" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="16" y="19" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="17" y="19" width="1.05" height="1.05" fill="#2B2B36"/><rect x="18" y="19" width="1.05" height="1.05" fill="#2B2B36"/><rect x="19" y="19" width="1.05" height="1.05" fill="#2B2B36"/><rect x="20" y="19" width="1.05" height="1.05" fill="#2B2B36"/><rect x="21" y="19" width="1.05" height="1.05" fill="#2B2B36"/><rect x="22" y="19" width="1.05" height="1.05" fill="#2B2B36"/><rect x="23" y="19" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="24" y="19" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="25" y="19" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="26" y="19" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="27" y="19" width="1.05" height="1.05" fill="#2B2B36"/><rect x="28" y="19" width="1.05" height="1.05" fill="#2B2B36"/><rect x="29" y="19" width="1.05" height="1.05" fill="#2B2B36"/><rect x="30" y="19" width="1.05" height="1.05" fill="#2B2B36"/><rect x="31" y="19" width="1.05" height="1.05" fill="#2B2B36"/><rect x="32" y="19" width="1.05" height="1.05" fill="#2B2B36"/><rect x="33" y="19" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="34" y="19" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="35" y="19" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="36" y="19" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="37" y="19" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="40" y="19" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="41" y="19" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="42" y="19" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="43" y="19" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="44" y="19" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="45" y="19" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="5" y="20" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="6" y="20" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="7" y="20" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="8" y="20" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="12" y="20" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="13" y="20" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="14" y="20" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="15" y="20" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="16" y="20" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="17" y="20" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="18" y="20" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="19" y="20" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="20" y="20" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="21" y="20" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="22" y="20" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="23" y="20" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="24" y="20" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="25" y="20" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="26" y="20" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="27" y="20" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="28" y="20" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="29" y="20" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="30" y="20" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="31" y="20" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="32" y="20" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="33" y="20" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="34" y="20" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="35" y="20" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="36" y="20" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="37" y="20" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="41" y="20" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="42" y="20" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="43" y="20" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="44" y="20" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="6" y="21" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="7" y="21" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="12" y="21" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="13" y="21" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="14" y="21" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="15" y="21" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="16" y="21" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="17" y="21" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="18" y="21" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="19" y="21" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="20" y="21" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="21" y="21" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="22" y="21" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="23" y="21" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="24" y="21" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="25" y="21" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="26" y="21" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="27" y="21" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="28" y="21" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="29" y="21" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="30" y="21" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="31" y="21" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="32" y="21" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="33" y="21" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="34" y="21" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="35" y="21" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="36" y="21" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="37" y="21" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="42" y="21" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="43" y="21" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="13" y="22" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="14" y="22" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="15" y="22" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="16" y="22" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="17" y="22" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="18" y="22" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="19" y="22" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="20" y="22" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="21" y="22" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="22" y="22" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="23" y="22" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="24" y="22" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="25" y="22" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="26" y="22" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="27" y="22" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="28" y="22" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="29" y="22" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="30" y="22" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="31" y="22" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="32" y="22" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="33" y="22" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="34" y="22" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="35" y="22" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="36" y="22" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="14" y="23" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="15" y="23" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="16" y="23" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="17" y="23" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="18" y="23" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="19" y="23" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="20" y="23" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="21" y="23" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="22" y="23" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="23" y="23" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="24" y="23" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="25" y="23" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="26" y="23" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="27" y="23" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="28" y="23" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="29" y="23" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="30" y="23" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="31" y="23" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="32" y="23" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="33" y="23" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="34" y="23" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="35" y="23" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="15" y="24" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="16" y="24" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="17" y="24" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="18" y="24" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="19" y="24" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="20" y="24" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="21" y="24" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="22" y="24" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="23" y="24" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="24" y="24" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="25" y="24" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="26" y="24" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="27" y="24" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="28" y="24" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="29" y="24" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="30" y="24" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="31" y="24" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="32" y="24" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="33" y="24" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="34" y="24" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="17" y="25" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="18" y="25" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="19" y="25" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="20" y="25" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="21" y="25" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="22" y="25" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="23" y="25" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="24" y="25" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="25" y="25" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="26" y="25" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="27" y="25" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="28" y="25" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="29" y="25" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="30" y="25" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="31" y="25" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="32" y="25" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="22" y="26" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="23" y="26" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="24" y="26" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="25" y="26" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="26" y="26" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="27" y="26" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="19" y="27" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="20" y="27" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="21" y="27" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="22" y="27" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="23" y="27" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="24" y="27" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="25" y="27" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="26" y="27" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="27" y="27" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="28" y="27" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="29" y="27" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="30" y="27" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="18" y="28" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="19" y="28" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="20" y="28" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="21" y="28" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="22" y="28" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="23" y="28" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="24" y="28" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="25" y="28" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="26" y="28" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="27" y="28" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="28" y="28" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="29" y="28" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="30" y="28" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="31" y="28" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="18" y="29" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="19" y="29" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="20" y="29" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="21" y="29" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="22" y="29" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="23" y="29" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="24" y="29" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="25" y="29" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="26" y="29" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="27" y="29" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="28" y="29" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="29" y="29" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="30" y="29" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="31" y="29" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="19" y="30" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="20" y="30" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="21" y="30" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="22" y="30" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="23" y="30" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="24" y="30" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="25" y="30" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="26" y="30" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="27" y="30" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="28" y="30" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="29" y="30" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="30" y="30" width="1.05" height="1.05" fill="#1A1A1A"/></g><g className="ai-sparkles-layer"><g className="ai-sparkle-group"><g className="ai-sparkle"><rect x="5" y="32" width="1.05" height="1.05" fill="#FFC107"/></g></g><g className="ai-sparkle-group"><g className="ai-sparkle"><rect x="6" y="32" width="1.05" height="1.05" fill="#FFC107"/></g></g><g className="ai-sparkle-group"><g className="ai-sparkle"><rect x="7" y="32" width="1.05" height="1.05" fill="#FFC107"/></g></g><g className="ai-sparkle-group"><g className="ai-sparkle"><rect x="8" y="32" width="1.05" height="1.05" fill="#FFC107"/></g></g><g className="ai-sparkle-group"><g className="ai-sparkle"><rect x="4" y="33" width="1.05" height="1.05" fill="#FFC107"/></g></g><g className="ai-sparkle-group"><g className="ai-sparkle"><rect x="5" y="33" width="1.05" height="1.05" fill="#FFC107"/></g></g><g className="ai-sparkle-group"><g className="ai-sparkle"><rect x="6" y="33" width="1.05" height="1.05" fill="#FFC107"/></g></g><g className="ai-sparkle-group"><g className="ai-sparkle"><rect x="7" y="33" width="1.05" height="1.05" fill="#FFC107"/></g></g><g className="ai-sparkle-group"><g className="ai-sparkle"><rect x="8" y="33" width="1.05" height="1.05" fill="#FFC107"/></g></g><g className="ai-sparkle-group"><g className="ai-sparkle"><rect x="9" y="33" width="1.05" height="1.05" fill="#FFC107"/></g></g><g className="ai-sparkle-group"><g className="ai-sparkle"><rect x="39" y="33" width="1.05" height="1.05" fill="#FFC107"/></g></g><g className="ai-sparkle-group"><g className="ai-sparkle"><rect x="40" y="33" width="1.05" height="1.05" fill="#FFC107"/></g></g><g className="ai-sparkle-group"><g className="ai-sparkle"><rect x="41" y="33" width="1.05" height="1.05" fill="#FFC107"/></g></g><g className="ai-sparkle-group"><g className="ai-sparkle"><rect x="42" y="33" width="1.05" height="1.05" fill="#FFC107"/></g></g><g className="ai-sparkle-group"><g className="ai-sparkle"><rect x="5" y="34" width="1.05" height="1.05" fill="#FFC107"/></g></g><g className="ai-sparkle-group"><g className="ai-sparkle"><rect x="6" y="34" width="1.05" height="1.05" fill="#FFC107"/></g></g><g className="ai-sparkle-group"><g className="ai-sparkle"><rect x="7" y="34" width="1.05" height="1.05" fill="#FFC107"/></g></g><g className="ai-sparkle-group"><g className="ai-sparkle"><rect x="8" y="34" width="1.05" height="1.05" fill="#FFC107"/></g></g><g className="ai-sparkle-group"><g className="ai-sparkle"><rect x="38" y="34" width="1.05" height="1.05" fill="#FFC107"/></g></g><g className="ai-sparkle-group"><g className="ai-sparkle"><rect x="39" y="34" width="1.05" height="1.05" fill="#FFC107"/></g></g><g className="ai-sparkle-group"><g className="ai-sparkle"><rect x="40" y="34" width="1.05" height="1.05" fill="#FFC107"/></g></g><g className="ai-sparkle-group"><g className="ai-sparkle"><rect x="41" y="34" width="1.05" height="1.05" fill="#FFC107"/></g></g><g className="ai-sparkle-group"><g className="ai-sparkle"><rect x="42" y="34" width="1.05" height="1.05" fill="#FFC107"/></g></g><g className="ai-sparkle-group"><g className="ai-sparkle"><rect x="43" y="34" width="1.05" height="1.05" fill="#FFC107"/></g></g><g className="ai-sparkle-group"><g className="ai-sparkle"><rect x="39" y="35" width="1.05" height="1.05" fill="#FFC107"/></g></g><g className="ai-sparkle-group"><g className="ai-sparkle"><rect x="40" y="35" width="1.05" height="1.05" fill="#FFC107"/></g></g><g className="ai-sparkle-group"><g className="ai-sparkle"><rect x="41" y="35" width="1.05" height="1.05" fill="#FFC107"/></g></g><g className="ai-sparkle-group"><g className="ai-sparkle"><rect x="42" y="35" width="1.05" height="1.05" fill="#FFC107"/></g></g></g>` }} />
        <symbol id="pixel-live-class" viewBox="0 0 48 44" shapeRendering="crispEdges" dangerouslySetInnerHTML={{ __html: `<g className="eco-phone"><rect x="26" y="2" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="27" y="2" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="28" y="2" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="29" y="2" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="30" y="2" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="31" y="2" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="32" y="2" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="33" y="2" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="34" y="2" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="35" y="2" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="36" y="2" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="37" y="2" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="38" y="2" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="39" y="2" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="40" y="2" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="41" y="2" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="42" y="2" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="26" y="3" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="27" y="3" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="28" y="3" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="29" y="3" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="30" y="3" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="31" y="3" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="32" y="3" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="33" y="3" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="34" y="3" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="35" y="3" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="36" y="3" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="37" y="3" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="38" y="3" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="39" y="3" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="40" y="3" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="41" y="3" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="42" y="3" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="26" y="4" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="27" y="4" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="28" y="4" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="29" y="4" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="30" y="4" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="31" y="4" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="32" y="4" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="33" y="4" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="34" y="4" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="35" y="4" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="36" y="4" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="37" y="4" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="38" y="4" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="39" y="4" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="40" y="4" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="41" y="4" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="42" y="4" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="26" y="5" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="27" y="5" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="28" y="5" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="29" y="5" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="30" y="5" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="31" y="5" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="32" y="5" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="33" y="5" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="34" y="5" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="35" y="5" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="36" y="5" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="37" y="5" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="38" y="5" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="39" y="5" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="40" y="5" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="41" y="5" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="42" y="5" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="26" y="6" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="27" y="6" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="28" y="6" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="29" y="6" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="30" y="6" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="31" y="6" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="32" y="6" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="33" y="6" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="34" y="6" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="35" y="6" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="36" y="6" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="37" y="6" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="38" y="6" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="39" y="6" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="40" y="6" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="41" y="6" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="42" y="6" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="6" y="7" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="7" y="7" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="8" y="7" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="9" y="7" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="10" y="7" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="11" y="7" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="12" y="7" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="13" y="7" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="14" y="7" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="15" y="7" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="16" y="7" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="17" y="7" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="18" y="7" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="19" y="7" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="20" y="7" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="21" y="7" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="22" y="7" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="23" y="7" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="24" y="7" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="25" y="7" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="26" y="7" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="27" y="7" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="28" y="7" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="29" y="7" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="30" y="7" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="31" y="7" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="32" y="7" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="33" y="7" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="34" y="7" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="35" y="7" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="36" y="7" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="37" y="7" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="38" y="7" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="39" y="7" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="40" y="7" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="41" y="7" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="42" y="7" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="5" y="8" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="6" y="8" width="1.05" height="1.05" fill="#333333"/><rect x="7" y="8" width="1.05" height="1.05" fill="#333333"/><rect x="8" y="8" width="1.05" height="1.05" fill="#333333"/><rect x="9" y="8" width="1.05" height="1.05" fill="#333333"/><rect x="10" y="8" width="1.05" height="1.05" fill="#333333"/><rect x="11" y="8" width="1.05" height="1.05" fill="#333333"/><rect x="12" y="8" width="1.05" height="1.05" fill="#333333"/><rect x="13" y="8" width="1.05" height="1.05" fill="#333333"/><rect x="14" y="8" width="1.05" height="1.05" fill="#333333"/><rect x="15" y="8" width="1.05" height="1.05" fill="#333333"/><rect x="16" y="8" width="1.05" height="1.05" fill="#333333"/><rect x="17" y="8" width="1.05" height="1.05" fill="#333333"/><rect x="18" y="8" width="1.05" height="1.05" fill="#333333"/><rect x="19" y="8" width="1.05" height="1.05" fill="#333333"/><rect x="20" y="8" width="1.05" height="1.05" fill="#333333"/><rect x="21" y="8" width="1.05" height="1.05" fill="#333333"/><rect x="22" y="8" width="1.05" height="1.05" fill="#333333"/><rect x="23" y="8" width="1.05" height="1.05" fill="#333333"/><rect x="24" y="8" width="1.05" height="1.05" fill="#333333"/><rect x="25" y="8" width="1.05" height="1.05" fill="#333333"/><rect x="26" y="8" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="27" y="8" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="28" y="8" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="29" y="8" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="30" y="8" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="31" y="8" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="32" y="8" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="33" y="8" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="34" y="8" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="35" y="8" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="36" y="8" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="37" y="8" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="38" y="8" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="39" y="8" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="40" y="8" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="41" y="8" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="42" y="8" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="5" y="9" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="6" y="9" width="1.05" height="1.05" fill="#333333"/><rect x="7" y="9" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="8" y="9" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="9" y="9" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="10" y="9" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="11" y="9" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="12" y="9" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="13" y="9" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="14" y="9" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="15" y="9" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="16" y="9" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="17" y="9" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="18" y="9" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="19" y="9" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="20" y="9" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="21" y="9" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="22" y="9" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="23" y="9" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="24" y="9" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="25" y="9" width="1.05" height="1.05" fill="#333333"/><rect x="26" y="9" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="5" y="10" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="6" y="10" width="1.05" height="1.05" fill="#333333"/><rect x="7" y="10" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="8" y="10" width="1.05" height="1.05" fill="#FFC2D6"/><rect x="9" y="10" width="1.05" height="1.05" fill="#FFC2D6"/><rect x="10" y="10" width="1.05" height="1.05" fill="#FFC2D6"/><rect x="11" y="10" width="1.05" height="1.05" fill="#FFC2D6"/><rect x="12" y="10" width="1.05" height="1.05" fill="#FFC2D6"/><rect x="13" y="10" width="1.05" height="1.05" fill="#FFC2D6"/><rect x="14" y="10" width="1.05" height="1.05" fill="#FFC2D6"/><rect x="15" y="10" width="1.05" height="1.05" fill="#FFC2D6"/><rect x="16" y="10" width="1.05" height="1.05" fill="#FFC2D6"/><rect x="17" y="10" width="1.05" height="1.05" fill="#FFC2D6"/><rect x="18" y="10" width="1.05" height="1.05" fill="#FFC2D6"/><rect x="19" y="10" width="1.05" height="1.05" fill="#FFC2D6"/><rect x="20" y="10" width="1.05" height="1.05" fill="#FFC2D6"/><rect x="21" y="10" width="1.05" height="1.05" fill="#FFC2D6"/><rect x="22" y="10" width="1.05" height="1.05" fill="#FFC2D6"/><rect x="23" y="10" width="1.05" height="1.05" fill="#FFC2D6"/><rect x="24" y="10" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="25" y="10" width="1.05" height="1.05" fill="#333333"/><rect x="26" y="10" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="5" y="11" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="6" y="11" width="1.05" height="1.05" fill="#333333"/><rect x="7" y="11" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="8" y="11" width="1.05" height="1.05" fill="#FFC2D6"/><rect x="9" y="11" width="1.05" height="1.05" fill="#FF9EBE"/><rect x="10" y="11" width="1.05" height="1.05" fill="#FF9EBE"/><rect x="11" y="11" width="1.05" height="1.05" fill="#FF9EBE"/><rect x="12" y="11" width="1.05" height="1.05" fill="#FF9EBE"/><rect x="13" y="11" width="1.05" height="1.05" fill="#FF9EBE"/><rect x="14" y="11" width="1.05" height="1.05" fill="#FF9EBE"/><rect x="15" y="11" width="1.05" height="1.05" fill="#FF9EBE"/><rect x="16" y="11" width="1.05" height="1.05" fill="#FF9EBE"/><rect x="17" y="11" width="1.05" height="1.05" fill="#FF9EBE"/><rect x="18" y="11" width="1.05" height="1.05" fill="#FF9EBE"/><rect x="19" y="11" width="1.05" height="1.05" fill="#FF9EBE"/><rect x="20" y="11" width="1.05" height="1.05" fill="#FF9EBE"/><rect x="21" y="11" width="1.05" height="1.05" fill="#FF9EBE"/><rect x="22" y="11" width="1.05" height="1.05" fill="#FF9EBE"/><rect x="23" y="11" width="1.05" height="1.05" fill="#FFC2D6"/><rect x="24" y="11" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="25" y="11" width="1.05" height="1.05" fill="#333333"/><rect x="26" y="11" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="5" y="12" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="6" y="12" width="1.05" height="1.05" fill="#333333"/><rect x="7" y="12" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="8" y="12" width="1.05" height="1.05" fill="#FFC2D6"/><rect x="9" y="12" width="1.05" height="1.05" fill="#FF9EBE"/><rect x="10" y="12" width="1.05" height="1.05" fill="#FFC2D6"/><rect x="11" y="12" width="1.05" height="1.05" fill="#FFC2D6"/><rect x="12" y="12" width="1.05" height="1.05" fill="#FFC2D6"/><rect x="13" y="12" width="1.05" height="1.05" fill="#FFC2D6"/><rect x="14" y="12" width="1.05" height="1.05" fill="#FFC2D6"/><rect x="15" y="12" width="1.05" height="1.05" fill="#FFC2D6"/><rect x="16" y="12" width="1.05" height="1.05" fill="#FFC2D6"/><rect x="17" y="12" width="1.05" height="1.05" fill="#FFC2D6"/><rect x="18" y="12" width="1.05" height="1.05" fill="#FFC2D6"/><rect x="19" y="12" width="1.05" height="1.05" fill="#FFC2D6"/><rect x="20" y="12" width="1.05" height="1.05" fill="#FFC2D6"/><rect x="21" y="12" width="1.05" height="1.05" fill="#FFC2D6"/><rect x="22" y="12" width="1.05" height="1.05" fill="#FF9EBE"/><rect x="23" y="12" width="1.05" height="1.05" fill="#FFC2D6"/><rect x="24" y="12" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="25" y="12" width="1.05" height="1.05" fill="#333333"/><rect x="26" y="12" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="5" y="13" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="6" y="13" width="1.05" height="1.05" fill="#333333"/><rect x="7" y="13" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="8" y="13" width="1.05" height="1.05" fill="#FFC2D6"/><rect x="9" y="13" width="1.05" height="1.05" fill="#FF9EBE"/><rect x="10" y="13" width="1.05" height="1.05" fill="#FFC2D6"/><rect x="11" y="13" width="1.05" height="1.05" fill="#FFC2D6"/><rect x="12" y="13" width="1.05" height="1.05" fill="#FFC2D6"/><rect x="13" y="13" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="14" y="13" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="15" y="13" width="1.05" height="1.05" fill="#FFC2D6"/><rect x="16" y="13" width="1.05" height="1.05" fill="#FFC2D6"/><rect x="17" y="13" width="1.05" height="1.05" fill="#FFC2D6"/><rect x="18" y="13" width="1.05" height="1.05" fill="#FFC2D6"/><rect x="19" y="13" width="1.05" height="1.05" fill="#FFC2D6"/><rect x="20" y="13" width="1.05" height="1.05" fill="#FFC2D6"/><rect x="21" y="13" width="1.05" height="1.05" fill="#FFC2D6"/><rect x="22" y="13" width="1.05" height="1.05" fill="#FF9EBE"/><rect x="23" y="13" width="1.05" height="1.05" fill="#FFC2D6"/><rect x="24" y="13" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="25" y="13" width="1.05" height="1.05" fill="#333333"/><rect x="26" y="13" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="5" y="14" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="6" y="14" width="1.05" height="1.05" fill="#333333"/><rect x="7" y="14" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="8" y="14" width="1.05" height="1.05" fill="#FFC2D6"/><rect x="9" y="14" width="1.05" height="1.05" fill="#FF9EBE"/><rect x="10" y="14" width="1.05" height="1.05" fill="#FFC2D6"/><rect x="11" y="14" width="1.05" height="1.05" fill="#FFC2D6"/><rect x="12" y="14" width="1.05" height="1.05" fill="#FFC2D6"/><rect x="13" y="14" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="14" y="14" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="15" y="14" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="16" y="14" width="1.05" height="1.05" fill="#FFC2D6"/><rect x="17" y="14" width="1.05" height="1.05" fill="#FFC2D6"/><rect x="18" y="14" width="1.05" height="1.05" fill="#FFC2D6"/><rect x="19" y="14" width="1.05" height="1.05" fill="#FFC2D6"/><rect x="20" y="14" width="1.05" height="1.05" fill="#FFC2D6"/><rect x="21" y="14" width="1.05" height="1.05" fill="#FFC2D6"/><rect x="22" y="14" width="1.05" height="1.05" fill="#FF9EBE"/><rect x="23" y="14" width="1.05" height="1.05" fill="#FFC2D6"/><rect x="24" y="14" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="25" y="14" width="1.05" height="1.05" fill="#333333"/><rect x="26" y="14" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="5" y="15" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="6" y="15" width="1.05" height="1.05" fill="#333333"/><rect x="7" y="15" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="8" y="15" width="1.05" height="1.05" fill="#FFC2D6"/><rect x="9" y="15" width="1.05" height="1.05" fill="#FF9EBE"/><rect x="10" y="15" width="1.05" height="1.05" fill="#FFC2D6"/><rect x="11" y="15" width="1.05" height="1.05" fill="#FFC2D6"/><rect x="12" y="15" width="1.05" height="1.05" fill="#FFC2D6"/><rect x="13" y="15" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="14" y="15" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="15" y="15" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="16" y="15" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="17" y="15" width="1.05" height="1.05" fill="#FFC2D6"/><rect x="18" y="15" width="1.05" height="1.05" fill="#FFC2D6"/><rect x="19" y="15" width="1.05" height="1.05" fill="#FFC2D6"/><rect x="20" y="15" width="1.05" height="1.05" fill="#FFC2D6"/><rect x="21" y="15" width="1.05" height="1.05" fill="#FFC2D6"/><rect x="22" y="15" width="1.05" height="1.05" fill="#FF9EBE"/><rect x="23" y="15" width="1.05" height="1.05" fill="#FFC2D6"/><rect x="24" y="15" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="25" y="15" width="1.05" height="1.05" fill="#333333"/><rect x="26" y="15" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="5" y="16" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="6" y="16" width="1.05" height="1.05" fill="#333333"/><rect x="7" y="16" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="8" y="16" width="1.05" height="1.05" fill="#FFC2D6"/><rect x="9" y="16" width="1.05" height="1.05" fill="#FF9EBE"/><rect x="10" y="16" width="1.05" height="1.05" fill="#FFC2D6"/><rect x="11" y="16" width="1.05" height="1.05" fill="#FFC2D6"/><rect x="12" y="16" width="1.05" height="1.05" fill="#FFC2D6"/><rect x="13" y="16" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="14" y="16" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="15" y="16" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="16" y="16" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="17" y="16" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="18" y="16" width="1.05" height="1.05" fill="#FFC2D6"/><rect x="19" y="16" width="1.05" height="1.05" fill="#FFC2D6"/><rect x="20" y="16" width="1.05" height="1.05" fill="#FFC2D6"/><rect x="21" y="16" width="1.05" height="1.05" fill="#FFC2D6"/><rect x="22" y="16" width="1.05" height="1.05" fill="#FF9EBE"/><rect x="23" y="16" width="1.05" height="1.05" fill="#FFC2D6"/><rect x="24" y="16" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="25" y="16" width="1.05" height="1.05" fill="#333333"/><rect x="26" y="16" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="5" y="17" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="6" y="17" width="1.05" height="1.05" fill="#333333"/><rect x="7" y="17" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="8" y="17" width="1.05" height="1.05" fill="#FFC2D6"/><rect x="9" y="17" width="1.05" height="1.05" fill="#FF9EBE"/><rect x="10" y="17" width="1.05" height="1.05" fill="#FFC2D6"/><rect x="11" y="17" width="1.05" height="1.05" fill="#FFC2D6"/><rect x="12" y="17" width="1.05" height="1.05" fill="#FFC2D6"/><rect x="13" y="17" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="14" y="17" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="15" y="17" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="16" y="17" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="17" y="17" width="1.05" height="1.05" fill="#FFC2D6"/><rect x="18" y="17" width="1.05" height="1.05" fill="#FFC2D6"/><rect x="19" y="17" width="1.05" height="1.05" fill="#FFC2D6"/><rect x="20" y="17" width="1.05" height="1.05" fill="#FFC2D6"/><rect x="21" y="17" width="1.05" height="1.05" fill="#FFC2D6"/><rect x="22" y="17" width="1.05" height="1.05" fill="#FF9EBE"/><rect x="23" y="17" width="1.05" height="1.05" fill="#FFC2D6"/><rect x="24" y="17" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="25" y="17" width="1.05" height="1.05" fill="#333333"/><rect x="26" y="17" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="5" y="18" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="6" y="18" width="1.05" height="1.05" fill="#333333"/><rect x="7" y="18" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="8" y="18" width="1.05" height="1.05" fill="#FFC2D6"/><rect x="9" y="18" width="1.05" height="1.05" fill="#FF9EBE"/><rect x="10" y="18" width="1.05" height="1.05" fill="#FFC2D6"/><rect x="11" y="18" width="1.05" height="1.05" fill="#FFC2D6"/><rect x="12" y="18" width="1.05" height="1.05" fill="#FFC2D6"/><rect x="13" y="18" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="14" y="18" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="15" y="18" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="16" y="18" width="1.05" height="1.05" fill="#FFC2D6"/><rect x="17" y="18" width="1.05" height="1.05" fill="#FFC2D6"/><rect x="18" y="18" width="1.05" height="1.05" fill="#FFC2D6"/><rect x="19" y="18" width="1.05" height="1.05" fill="#FFC2D6"/><rect x="20" y="18" width="1.05" height="1.05" fill="#FFC2D6"/><rect x="21" y="18" width="1.05" height="1.05" fill="#FFC2D6"/><rect x="22" y="18" width="1.05" height="1.05" fill="#FF9EBE"/><rect x="23" y="18" width="1.05" height="1.05" fill="#FFC2D6"/><rect x="24" y="18" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="25" y="18" width="1.05" height="1.05" fill="#333333"/><rect x="26" y="18" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="5" y="19" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="6" y="19" width="1.05" height="1.05" fill="#333333"/><rect x="7" y="19" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="8" y="19" width="1.05" height="1.05" fill="#FFC2D6"/><rect x="9" y="19" width="1.05" height="1.05" fill="#FF9EBE"/><rect x="10" y="19" width="1.05" height="1.05" fill="#FFC2D6"/><rect x="11" y="19" width="1.05" height="1.05" fill="#FFC2D6"/><rect x="12" y="19" width="1.05" height="1.05" fill="#FFC2D6"/><rect x="13" y="19" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="14" y="19" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="15" y="19" width="1.05" height="1.05" fill="#FFC2D6"/><rect x="16" y="19" width="1.05" height="1.05" fill="#FFC2D6"/><rect x="17" y="19" width="1.05" height="1.05" fill="#FFC2D6"/><rect x="18" y="19" width="1.05" height="1.05" fill="#FFC2D6"/><rect x="19" y="19" width="1.05" height="1.05" fill="#FFC2D6"/><rect x="20" y="19" width="1.05" height="1.05" fill="#FFC2D6"/><rect x="21" y="19" width="1.05" height="1.05" fill="#FFC2D6"/><rect x="22" y="19" width="1.05" height="1.05" fill="#FF9EBE"/><rect x="23" y="19" width="1.05" height="1.05" fill="#FFC2D6"/><rect x="24" y="19" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="25" y="19" width="1.05" height="1.05" fill="#333333"/><rect x="26" y="19" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="5" y="20" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="6" y="20" width="1.05" height="1.05" fill="#333333"/><rect x="7" y="20" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="8" y="20" width="1.05" height="1.05" fill="#FFC2D6"/><rect x="9" y="20" width="1.05" height="1.05" fill="#FF9EBE"/><rect x="10" y="20" width="1.05" height="1.05" fill="#FF9EBE"/><rect x="11" y="20" width="1.05" height="1.05" fill="#FF9EBE"/><rect x="12" y="20" width="1.05" height="1.05" fill="#FF9EBE"/><rect x="13" y="20" width="1.05" height="1.05" fill="#FF9EBE"/><rect x="14" y="20" width="1.05" height="1.05" fill="#FF9EBE"/><rect x="15" y="20" width="1.05" height="1.05" fill="#FF9EBE"/><rect x="16" y="20" width="1.05" height="1.05" fill="#FF9EBE"/><rect x="17" y="20" width="1.05" height="1.05" fill="#FF9EBE"/><rect x="18" y="20" width="1.05" height="1.05" fill="#FF9EBE"/><rect x="19" y="20" width="1.05" height="1.05" fill="#FF9EBE"/><rect x="20" y="20" width="1.05" height="1.05" fill="#FF9EBE"/><rect x="21" y="20" width="1.05" height="1.05" fill="#FF9EBE"/><rect x="22" y="20" width="1.05" height="1.05" fill="#FF9EBE"/><rect x="23" y="20" width="1.05" height="1.05" fill="#FFC2D6"/><rect x="24" y="20" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="25" y="20" width="1.05" height="1.05" fill="#333333"/><rect x="26" y="20" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="5" y="21" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="6" y="21" width="1.05" height="1.05" fill="#333333"/><rect x="7" y="21" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="8" y="21" width="1.05" height="1.05" fill="#FFC2D6"/><rect x="9" y="21" width="1.05" height="1.05" fill="#FFC2D6"/><rect x="10" y="21" width="1.05" height="1.05" fill="#FFC2D6"/><rect x="11" y="21" width="1.05" height="1.05" fill="#FFC2D6"/><rect x="12" y="21" width="1.05" height="1.05" fill="#FFC2D6"/><rect x="13" y="21" width="1.05" height="1.05" fill="#FFC2D6"/><rect x="14" y="21" width="1.05" height="1.05" fill="#FFC2D6"/><rect x="15" y="21" width="1.05" height="1.05" fill="#FFC2D6"/><rect x="16" y="21" width="1.05" height="1.05" fill="#FFC2D6"/><rect x="17" y="21" width="1.05" height="1.05" fill="#FFC2D6"/><rect x="18" y="21" width="1.05" height="1.05" fill="#FFC2D6"/><rect x="19" y="21" width="1.05" height="1.05" fill="#FFC2D6"/><rect x="20" y="21" width="1.05" height="1.05" fill="#FFC2D6"/><rect x="21" y="21" width="1.05" height="1.05" fill="#FFC2D6"/><rect x="22" y="21" width="1.05" height="1.05" fill="#FFC2D6"/><rect x="23" y="21" width="1.05" height="1.05" fill="#FFC2D6"/><rect x="24" y="21" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="25" y="21" width="1.05" height="1.05" fill="#333333"/><rect x="26" y="21" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="5" y="22" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="6" y="22" width="1.05" height="1.05" fill="#333333"/><rect x="7" y="22" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="8" y="22" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="9" y="22" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="10" y="22" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="11" y="22" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="12" y="22" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="13" y="22" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="14" y="22" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="15" y="22" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="16" y="22" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="17" y="22" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="18" y="22" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="19" y="22" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="20" y="22" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="21" y="22" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="22" y="22" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="23" y="22" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="24" y="22" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="25" y="22" width="1.05" height="1.05" fill="#333333"/><rect x="26" y="22" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="5" y="23" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="6" y="23" width="1.05" height="1.05" fill="#333333"/><rect x="7" y="23" width="1.05" height="1.05" fill="#333333"/><rect x="8" y="23" width="1.05" height="1.05" fill="#333333"/><rect x="9" y="23" width="1.05" height="1.05" fill="#333333"/><rect x="10" y="23" width="1.05" height="1.05" fill="#333333"/><rect x="11" y="23" width="1.05" height="1.05" fill="#333333"/><rect x="12" y="23" width="1.05" height="1.05" fill="#333333"/><rect x="13" y="23" width="1.05" height="1.05" fill="#333333"/><rect x="14" y="23" width="1.05" height="1.05" fill="#333333"/><rect x="15" y="23" width="1.05" height="1.05" fill="#333333"/><rect x="16" y="23" width="1.05" height="1.05" fill="#333333"/><rect x="17" y="23" width="1.05" height="1.05" fill="#333333"/><rect x="18" y="23" width="1.05" height="1.05" fill="#333333"/><rect x="19" y="23" width="1.05" height="1.05" fill="#333333"/><rect x="20" y="23" width="1.05" height="1.05" fill="#333333"/><rect x="21" y="23" width="1.05" height="1.05" fill="#333333"/><rect x="22" y="23" width="1.05" height="1.05" fill="#333333"/><rect x="23" y="23" width="1.05" height="1.05" fill="#333333"/><rect x="24" y="23" width="1.05" height="1.05" fill="#333333"/><rect x="25" y="23" width="1.05" height="1.05" fill="#333333"/><rect x="26" y="23" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="6" y="24" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="7" y="24" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="8" y="24" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="9" y="24" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="10" y="24" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="11" y="24" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="12" y="24" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="13" y="24" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="14" y="24" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="15" y="24" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="16" y="24" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="17" y="24" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="18" y="24" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="19" y="24" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="20" y="24" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="21" y="24" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="22" y="24" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="23" y="24" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="24" y="24" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="25" y="24" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="11" y="25" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="12" y="25" width="1.05" height="1.05" fill="#333333"/><rect x="13" y="25" width="1.05" height="1.05" fill="#333333"/><rect x="14" y="25" width="1.05" height="1.05" fill="#333333"/><rect x="15" y="25" width="1.05" height="1.05" fill="#333333"/><rect x="16" y="25" width="1.05" height="1.05" fill="#333333"/><rect x="17" y="25" width="1.05" height="1.05" fill="#333333"/><rect x="18" y="25" width="1.05" height="1.05" fill="#333333"/><rect x="19" y="25" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="11" y="26" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="12" y="26" width="1.05" height="1.05" fill="#333333"/><rect x="13" y="26" width="1.05" height="1.05" fill="#333333"/><rect x="14" y="26" width="1.05" height="1.05" fill="#333333"/><rect x="15" y="26" width="1.05" height="1.05" fill="#333333"/><rect x="16" y="26" width="1.05" height="1.05" fill="#333333"/><rect x="17" y="26" width="1.05" height="1.05" fill="#333333"/><rect x="18" y="26" width="1.05" height="1.05" fill="#333333"/><rect x="19" y="26" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="11" y="27" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="12" y="27" width="1.05" height="1.05" fill="#333333"/><rect x="13" y="27" width="1.05" height="1.05" fill="#333333"/><rect x="14" y="27" width="1.05" height="1.05" fill="#333333"/><rect x="15" y="27" width="1.05" height="1.05" fill="#333333"/><rect x="16" y="27" width="1.05" height="1.05" fill="#333333"/><rect x="17" y="27" width="1.05" height="1.05" fill="#333333"/><rect x="18" y="27" width="1.05" height="1.05" fill="#333333"/><rect x="19" y="27" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="8" y="28" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="9" y="28" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="10" y="28" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="11" y="28" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="12" y="28" width="1.05" height="1.05" fill="#333333"/><rect x="13" y="28" width="1.05" height="1.05" fill="#333333"/><rect x="14" y="28" width="1.05" height="1.05" fill="#333333"/><rect x="15" y="28" width="1.05" height="1.05" fill="#333333"/><rect x="16" y="28" width="1.05" height="1.05" fill="#333333"/><rect x="17" y="28" width="1.05" height="1.05" fill="#333333"/><rect x="18" y="28" width="1.05" height="1.05" fill="#333333"/><rect x="19" y="28" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="20" y="28" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="21" y="28" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="22" y="28" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="7" y="29" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="8" y="29" width="1.05" height="1.05" fill="#333333"/><rect x="9" y="29" width="1.05" height="1.05" fill="#333333"/><rect x="10" y="29" width="1.05" height="1.05" fill="#333333"/><rect x="11" y="29" width="1.05" height="1.05" fill="#333333"/><rect x="12" y="29" width="1.05" height="1.05" fill="#333333"/><rect x="13" y="29" width="1.05" height="1.05" fill="#333333"/><rect x="14" y="29" width="1.05" height="1.05" fill="#333333"/><rect x="15" y="29" width="1.05" height="1.05" fill="#333333"/><rect x="16" y="29" width="1.05" height="1.05" fill="#333333"/><rect x="17" y="29" width="1.05" height="1.05" fill="#333333"/><rect x="18" y="29" width="1.05" height="1.05" fill="#333333"/><rect x="19" y="29" width="1.05" height="1.05" fill="#333333"/><rect x="20" y="29" width="1.05" height="1.05" fill="#333333"/><rect x="21" y="29" width="1.05" height="1.05" fill="#333333"/><rect x="22" y="29" width="1.05" height="1.05" fill="#333333"/><rect x="23" y="29" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="7" y="30" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="8" y="30" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="9" y="30" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="10" y="30" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="11" y="30" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="12" y="30" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="13" y="30" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="14" y="30" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="15" y="30" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="16" y="30" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="17" y="30" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="18" y="30" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="19" y="30" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="20" y="30" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="21" y="30" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="22" y="30" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="23" y="30" width="1.05" height="1.05" fill="#1A1A1A"/></g><g className="eco-cap"><rect x="29" y="21" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="30" y="21" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="31" y="21" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="32" y="21" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="33" y="21" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="34" y="21" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="35" y="21" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="36" y="21" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="37" y="21" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="38" y="21" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="39" y="21" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="40" y="21" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="41" y="21" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="42" y="21" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="43" y="21" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="29" y="22" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="30" y="22" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="31" y="22" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="32" y="22" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="33" y="22" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="34" y="22" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="35" y="22" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="36" y="22" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="37" y="22" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="38" y="22" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="39" y="22" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="40" y="22" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="41" y="22" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="42" y="22" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="43" y="22" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="29" y="23" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="30" y="23" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="31" y="23" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="32" y="23" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="33" y="23" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="34" y="23" width="1.05" height="1.05" fill="#3B2617"/><rect x="35" y="23" width="1.05" height="1.05" fill="#3B2617"/><rect x="36" y="23" width="1.05" height="1.05" fill="#3B2617"/><rect x="37" y="23" width="1.05" height="1.05" fill="#3B2617"/><rect x="38" y="23" width="1.05" height="1.05" fill="#3B2617"/><rect x="39" y="23" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="40" y="23" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="41" y="23" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="42" y="23" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="43" y="23" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="29" y="24" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="30" y="24" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="31" y="24" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="32" y="24" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="33" y="24" width="1.05" height="1.05" fill="#3B2617"/><rect x="34" y="24" width="1.05" height="1.05" fill="#3B2617"/><rect x="35" y="24" width="1.05" height="1.05" fill="#3B2617"/><rect x="36" y="24" width="1.05" height="1.05" fill="#3B2617"/><rect x="37" y="24" width="1.05" height="1.05" fill="#3B2617"/><rect x="38" y="24" width="1.05" height="1.05" fill="#3B2617"/><rect x="39" y="24" width="1.05" height="1.05" fill="#3B2617"/><rect x="40" y="24" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="41" y="24" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="42" y="24" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="43" y="24" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="29" y="25" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="30" y="25" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="31" y="25" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="32" y="25" width="1.05" height="1.05" fill="#3B2617"/><rect x="33" y="25" width="1.05" height="1.05" fill="#3B2617"/><rect x="34" y="25" width="1.05" height="1.05" fill="#3B2617"/><rect x="35" y="25" width="1.05" height="1.05" fill="#3B2617"/><rect x="36" y="25" width="1.05" height="1.05" fill="#3B2617"/><rect x="37" y="25" width="1.05" height="1.05" fill="#3B2617"/><rect x="38" y="25" width="1.05" height="1.05" fill="#3B2617"/><rect x="39" y="25" width="1.05" height="1.05" fill="#3B2617"/><rect x="40" y="25" width="1.05" height="1.05" fill="#3B2617"/><rect x="41" y="25" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="42" y="25" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="43" y="25" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="29" y="26" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="30" y="26" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="31" y="26" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="32" y="26" width="1.05" height="1.05" fill="#3B2617"/><rect x="33" y="26" width="1.05" height="1.05" fill="#3B2617"/><rect x="34" y="26" width="1.05" height="1.05" fill="#F4B678"/><rect x="35" y="26" width="1.05" height="1.05" fill="#F4B678"/><rect x="36" y="26" width="1.05" height="1.05" fill="#F4B678"/><rect x="37" y="26" width="1.05" height="1.05" fill="#F4B678"/><rect x="38" y="26" width="1.05" height="1.05" fill="#F4B678"/><rect x="39" y="26" width="1.05" height="1.05" fill="#F4B678"/><rect x="40" y="26" width="1.05" height="1.05" fill="#3B2617"/><rect x="41" y="26" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="42" y="26" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="43" y="26" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="29" y="27" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="30" y="27" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="31" y="27" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="32" y="27" width="1.05" height="1.05" fill="#3B2617"/><rect x="33" y="27" width="1.05" height="1.05" fill="#F4B678"/><rect x="34" y="27" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="35" y="27" width="1.05" height="1.05" fill="#F4B678"/><rect x="36" y="27" width="1.05" height="1.05" fill="#F4B678"/><rect x="37" y="27" width="1.05" height="1.05" fill="#F4B678"/><rect x="38" y="27" width="1.05" height="1.05" fill="#F4B678"/><rect x="39" y="27" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="40" y="27" width="1.05" height="1.05" fill="#F4B678"/><rect x="41" y="27" width="1.05" height="1.05" fill="#3B2617"/><rect x="42" y="27" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="43" y="27" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="29" y="28" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="30" y="28" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="31" y="28" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="32" y="28" width="1.05" height="1.05" fill="#3B2617"/><rect x="33" y="28" width="1.05" height="1.05" fill="#F4B678"/><rect x="34" y="28" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="35" y="28" width="1.05" height="1.05" fill="#F4B678"/><rect x="36" y="28" width="1.05" height="1.05" fill="#F4B678"/><rect x="37" y="28" width="1.05" height="1.05" fill="#F4B678"/><rect x="38" y="28" width="1.05" height="1.05" fill="#F4B678"/><rect x="39" y="28" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="40" y="28" width="1.05" height="1.05" fill="#F4B678"/><rect x="41" y="28" width="1.05" height="1.05" fill="#3B2617"/><rect x="42" y="28" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="43" y="28" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="29" y="29" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="30" y="29" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="31" y="29" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="32" y="29" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="33" y="29" width="1.05" height="1.05" fill="#3B2617"/><rect x="34" y="29" width="1.05" height="1.05" fill="#3B2617"/><rect x="35" y="29" width="1.05" height="1.05" fill="#F4B678"/><rect x="36" y="29" width="1.05" height="1.05" fill="#F4B678"/><rect x="37" y="29" width="1.05" height="1.05" fill="#F4B678"/><rect x="38" y="29" width="1.05" height="1.05" fill="#F4B678"/><rect x="39" y="29" width="1.05" height="1.05" fill="#3B2617"/><rect x="40" y="29" width="1.05" height="1.05" fill="#3B2617"/><rect x="41" y="29" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="42" y="29" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="43" y="29" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="29" y="30" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="30" y="30" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="31" y="30" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="32" y="30" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="33" y="30" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="34" y="30" width="1.05" height="1.05" fill="#3B2617"/><rect x="35" y="30" width="1.05" height="1.05" fill="#FFC82F"/><rect x="36" y="30" width="1.05" height="1.05" fill="#FFC82F"/><rect x="37" y="30" width="1.05" height="1.05" fill="#FFC82F"/><rect x="38" y="30" width="1.05" height="1.05" fill="#FFC82F"/><rect x="39" y="30" width="1.05" height="1.05" fill="#3B2617"/><rect x="40" y="30" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="41" y="30" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="42" y="30" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="43" y="30" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="29" y="31" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="30" y="31" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="31" y="31" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="32" y="31" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="33" y="31" width="1.05" height="1.05" fill="#FFC82F"/><rect x="34" y="31" width="1.05" height="1.05" fill="#FFC82F"/><rect x="35" y="31" width="1.05" height="1.05" fill="#FFC82F"/><rect x="36" y="31" width="1.05" height="1.05" fill="#FFC82F"/><rect x="37" y="31" width="1.05" height="1.05" fill="#FFC82F"/><rect x="38" y="31" width="1.05" height="1.05" fill="#FFC82F"/><rect x="39" y="31" width="1.05" height="1.05" fill="#FFC82F"/><rect x="40" y="31" width="1.05" height="1.05" fill="#FFC82F"/><rect x="41" y="31" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="42" y="31" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="43" y="31" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="29" y="32" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="30" y="32" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="31" y="32" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="32" y="32" width="1.05" height="1.05" fill="#FFC82F"/><rect x="33" y="32" width="1.05" height="1.05" fill="#FFC82F"/><rect x="34" y="32" width="1.05" height="1.05" fill="#FFC82F"/><rect x="35" y="32" width="1.05" height="1.05" fill="#FFC82F"/><rect x="36" y="32" width="1.05" height="1.05" fill="#FFC82F"/><rect x="37" y="32" width="1.05" height="1.05" fill="#FFC82F"/><rect x="38" y="32" width="1.05" height="1.05" fill="#FFC82F"/><rect x="39" y="32" width="1.05" height="1.05" fill="#FFC82F"/><rect x="40" y="32" width="1.05" height="1.05" fill="#FFC82F"/><rect x="41" y="32" width="1.05" height="1.05" fill="#FFC82F"/><rect x="42" y="32" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="43" y="32" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="29" y="33" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="30" y="33" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="31" y="33" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="32" y="33" width="1.05" height="1.05" fill="#FFC82F"/><rect x="33" y="33" width="1.05" height="1.05" fill="#FFC82F"/><rect x="34" y="33" width="1.05" height="1.05" fill="#FFC82F"/><rect x="35" y="33" width="1.05" height="1.05" fill="#FFC82F"/><rect x="36" y="33" width="1.05" height="1.05" fill="#FFC82F"/><rect x="37" y="33" width="1.05" height="1.05" fill="#FFC82F"/><rect x="38" y="33" width="1.05" height="1.05" fill="#FFC82F"/><rect x="39" y="33" width="1.05" height="1.05" fill="#FFC82F"/><rect x="40" y="33" width="1.05" height="1.05" fill="#FFC82F"/><rect x="41" y="33" width="1.05" height="1.05" fill="#FFC82F"/><rect x="42" y="33" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="43" y="33" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="29" y="34" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="30" y="34" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="31" y="34" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="32" y="34" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="33" y="34" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="34" y="34" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="35" y="34" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="36" y="34" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="37" y="34" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="38" y="34" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="39" y="34" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="40" y="34" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="41" y="34" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="42" y="34" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="43" y="34" width="1.05" height="1.05" fill="#1A1A1A"/></g>` }} />
        <symbol id="pixel-viral-video" viewBox="0 0 48 44" shapeRendering="crispEdges" dangerouslySetInnerHTML={{ __html: `<g className="eco-phone"><rect x="18" y="8" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="19" y="8" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="20" y="8" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="21" y="8" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="22" y="8" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="23" y="8" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="24" y="8" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="25" y="8" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="26" y="8" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="27" y="8" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="28" y="8" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="29" y="8" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="30" y="8" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="17" y="9" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="18" y="9" width="1.05" height="1.05" fill="#333333"/><rect x="19" y="9" width="1.05" height="1.05" fill="#333333"/><rect x="20" y="9" width="1.05" height="1.05" fill="#333333"/><rect x="21" y="9" width="1.05" height="1.05" fill="#333333"/><rect x="22" y="9" width="1.05" height="1.05" fill="#333333"/><rect x="23" y="9" width="1.05" height="1.05" fill="#333333"/><rect x="24" y="9" width="1.05" height="1.05" fill="#333333"/><rect x="25" y="9" width="1.05" height="1.05" fill="#333333"/><rect x="26" y="9" width="1.05" height="1.05" fill="#333333"/><rect x="27" y="9" width="1.05" height="1.05" fill="#333333"/><rect x="28" y="9" width="1.05" height="1.05" fill="#333333"/><rect x="29" y="9" width="1.05" height="1.05" fill="#333333"/><rect x="30" y="9" width="1.05" height="1.05" fill="#333333"/><rect x="31" y="9" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="17" y="10" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="18" y="10" width="1.05" height="1.05" fill="#333333"/><rect x="19" y="10" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="20" y="10" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="21" y="10" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="22" y="10" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="23" y="10" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="24" y="10" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="25" y="10" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="26" y="10" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="27" y="10" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="28" y="10" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="29" y="10" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="30" y="10" width="1.05" height="1.05" fill="#333333"/><rect x="31" y="10" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="17" y="11" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="18" y="11" width="1.05" height="1.05" fill="#333333"/><rect x="19" y="11" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="20" y="11" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="21" y="11" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="22" y="11" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="23" y="11" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="24" y="11" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="25" y="11" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="26" y="11" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="27" y="11" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="28" y="11" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="29" y="11" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="30" y="11" width="1.05" height="1.05" fill="#333333"/><rect x="31" y="11" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="17" y="12" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="18" y="12" width="1.05" height="1.05" fill="#333333"/><rect x="19" y="12" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="20" y="12" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="21" y="12" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="22" y="12" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="23" y="12" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="24" y="12" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="25" y="12" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="26" y="12" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="27" y="12" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="28" y="12" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="29" y="12" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="30" y="12" width="1.05" height="1.05" fill="#333333"/><rect x="31" y="12" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="17" y="13" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="18" y="13" width="1.05" height="1.05" fill="#333333"/><rect x="19" y="13" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="20" y="13" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="21" y="13" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="22" y="13" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="23" y="13" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="24" y="13" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="25" y="13" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="26" y="13" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="27" y="13" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="28" y="13" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="29" y="13" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="30" y="13" width="1.05" height="1.05" fill="#333333"/><rect x="31" y="13" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="17" y="14" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="18" y="14" width="1.05" height="1.05" fill="#333333"/><rect x="19" y="14" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="20" y="14" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="21" y="14" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="22" y="14" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="23" y="14" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="24" y="14" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="25" y="14" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="26" y="14" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="27" y="14" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="28" y="14" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="29" y="14" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="30" y="14" width="1.05" height="1.05" fill="#333333"/><rect x="31" y="14" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="17" y="15" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="18" y="15" width="1.05" height="1.05" fill="#333333"/><rect x="19" y="15" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="20" y="15" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="21" y="15" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="22" y="15" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="23" y="15" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="24" y="15" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="25" y="15" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="26" y="15" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="27" y="15" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="28" y="15" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="29" y="15" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="30" y="15" width="1.05" height="1.05" fill="#333333"/><rect x="31" y="15" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="17" y="16" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="18" y="16" width="1.05" height="1.05" fill="#333333"/><rect x="19" y="16" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="20" y="16" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="21" y="16" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="22" y="16" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="23" y="16" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="24" y="16" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="25" y="16" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="26" y="16" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="27" y="16" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="28" y="16" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="29" y="16" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="30" y="16" width="1.05" height="1.05" fill="#333333"/><rect x="31" y="16" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="17" y="17" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="18" y="17" width="1.05" height="1.05" fill="#333333"/><rect x="19" y="17" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="20" y="17" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="21" y="17" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="22" y="17" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="23" y="17" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="24" y="17" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="25" y="17" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="26" y="17" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="27" y="17" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="28" y="17" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="29" y="17" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="30" y="17" width="1.05" height="1.05" fill="#333333"/><rect x="31" y="17" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="17" y="18" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="18" y="18" width="1.05" height="1.05" fill="#333333"/><rect x="19" y="18" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="20" y="18" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="21" y="18" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="22" y="18" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="23" y="18" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="24" y="18" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="25" y="18" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="26" y="18" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="27" y="18" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="28" y="18" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="29" y="18" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="30" y="18" width="1.05" height="1.05" fill="#333333"/><rect x="31" y="18" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="17" y="19" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="18" y="19" width="1.05" height="1.05" fill="#333333"/><rect x="19" y="19" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="20" y="19" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="21" y="19" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="22" y="19" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="23" y="19" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="24" y="19" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="25" y="19" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="26" y="19" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="27" y="19" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="28" y="19" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="29" y="19" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="30" y="19" width="1.05" height="1.05" fill="#333333"/><rect x="31" y="19" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="17" y="20" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="18" y="20" width="1.05" height="1.05" fill="#333333"/><rect x="19" y="20" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="20" y="20" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="21" y="20" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="22" y="20" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="23" y="20" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="24" y="20" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="25" y="20" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="26" y="20" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="27" y="20" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="28" y="20" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="29" y="20" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="30" y="20" width="1.05" height="1.05" fill="#333333"/><rect x="31" y="20" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="17" y="21" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="18" y="21" width="1.05" height="1.05" fill="#333333"/><rect x="19" y="21" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="20" y="21" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="21" y="21" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="22" y="21" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="23" y="21" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="24" y="21" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="25" y="21" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="26" y="21" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="27" y="21" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="28" y="21" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="29" y="21" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="30" y="21" width="1.05" height="1.05" fill="#333333"/><rect x="31" y="21" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="17" y="22" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="18" y="22" width="1.05" height="1.05" fill="#333333"/><rect x="19" y="22" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="20" y="22" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="21" y="22" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="22" y="22" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="23" y="22" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="24" y="22" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="25" y="22" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="26" y="22" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="27" y="22" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="28" y="22" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="29" y="22" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="30" y="22" width="1.05" height="1.05" fill="#333333"/><rect x="31" y="22" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="17" y="23" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="18" y="23" width="1.05" height="1.05" fill="#333333"/><rect x="19" y="23" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="20" y="23" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="21" y="23" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="22" y="23" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="23" y="23" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="24" y="23" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="25" y="23" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="26" y="23" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="27" y="23" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="28" y="23" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="29" y="23" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="30" y="23" width="1.05" height="1.05" fill="#333333"/><rect x="31" y="23" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="17" y="24" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="18" y="24" width="1.05" height="1.05" fill="#333333"/><rect x="19" y="24" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="20" y="24" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="21" y="24" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="22" y="24" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="23" y="24" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="24" y="24" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="25" y="24" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="26" y="24" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="27" y="24" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="28" y="24" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="29" y="24" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="30" y="24" width="1.05" height="1.05" fill="#333333"/><rect x="31" y="24" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="17" y="25" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="18" y="25" width="1.05" height="1.05" fill="#333333"/><rect x="19" y="25" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="20" y="25" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="21" y="25" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="22" y="25" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="23" y="25" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="24" y="25" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="25" y="25" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="26" y="25" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="27" y="25" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="28" y="25" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="29" y="25" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="30" y="25" width="1.05" height="1.05" fill="#333333"/><rect x="31" y="25" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="17" y="26" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="18" y="26" width="1.05" height="1.05" fill="#333333"/><rect x="19" y="26" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="20" y="26" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="21" y="26" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="22" y="26" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="25" y="26" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="26" y="26" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="27" y="26" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="28" y="26" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="29" y="26" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="30" y="26" width="1.05" height="1.05" fill="#333333"/><rect x="31" y="26" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="17" y="27" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="18" y="27" width="1.05" height="1.05" fill="#333333"/><rect x="19" y="27" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="20" y="27" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="21" y="27" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="22" y="27" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="25" y="27" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="26" y="27" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="27" y="27" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="28" y="27" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="29" y="27" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="30" y="27" width="1.05" height="1.05" fill="#333333"/><rect x="31" y="27" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="17" y="28" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="18" y="28" width="1.05" height="1.05" fill="#333333"/><rect x="19" y="28" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="20" y="28" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="21" y="28" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="22" y="28" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="23" y="28" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="24" y="28" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="25" y="28" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="26" y="28" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="27" y="28" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="28" y="28" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="29" y="28" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="30" y="28" width="1.05" height="1.05" fill="#333333"/><rect x="31" y="28" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="17" y="29" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="18" y="29" width="1.05" height="1.05" fill="#333333"/><rect x="19" y="29" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="20" y="29" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="21" y="29" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="22" y="29" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="23" y="29" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="24" y="29" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="25" y="29" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="26" y="29" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="27" y="29" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="28" y="29" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="29" y="29" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="30" y="29" width="1.05" height="1.05" fill="#333333"/><rect x="31" y="29" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="17" y="30" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="18" y="30" width="1.05" height="1.05" fill="#333333"/><rect x="19" y="30" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="20" y="30" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="21" y="30" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="22" y="30" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="23" y="30" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="24" y="30" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="25" y="30" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="26" y="30" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="27" y="30" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="28" y="30" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="29" y="30" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="30" y="30" width="1.05" height="1.05" fill="#333333"/><rect x="31" y="30" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="17" y="31" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="18" y="31" width="1.05" height="1.05" fill="#333333"/><rect x="19" y="31" width="1.05" height="1.05" fill="#333333"/><rect x="20" y="31" width="1.05" height="1.05" fill="#333333"/><rect x="21" y="31" width="1.05" height="1.05" fill="#333333"/><rect x="22" y="31" width="1.05" height="1.05" fill="#333333"/><rect x="23" y="31" width="1.05" height="1.05" fill="#333333"/><rect x="24" y="31" width="1.05" height="1.05" fill="#333333"/><rect x="25" y="31" width="1.05" height="1.05" fill="#333333"/><rect x="26" y="31" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="27" y="31" width="1.05" height="1.05" fill="#333333"/><rect x="28" y="31" width="1.05" height="1.05" fill="#333333"/><rect x="29" y="31" width="1.05" height="1.05" fill="#333333"/><rect x="30" y="31" width="1.05" height="1.05" fill="#333333"/><rect x="31" y="31" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="17" y="32" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="18" y="32" width="1.05" height="1.05" fill="#333333"/><rect x="19" y="32" width="1.05" height="1.05" fill="#333333"/><rect x="20" y="32" width="1.05" height="1.05" fill="#333333"/><rect x="21" y="32" width="1.05" height="1.05" fill="#333333"/><rect x="22" y="32" width="1.05" height="1.05" fill="#333333"/><rect x="23" y="32" width="1.05" height="1.05" fill="#333333"/><rect x="24" y="32" width="1.05" height="1.05" fill="#333333"/><rect x="25" y="32" width="1.05" height="1.05" fill="#333333"/><rect x="26" y="32" width="1.05" height="1.05" fill="#333333"/><rect x="27" y="32" width="1.05" height="1.05" fill="#333333"/><rect x="28" y="32" width="1.05" height="1.05" fill="#333333"/><rect x="29" y="32" width="1.05" height="1.05" fill="#333333"/><rect x="30" y="32" width="1.05" height="1.05" fill="#333333"/><rect x="31" y="32" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="18" y="33" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="19" y="33" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="20" y="33" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="21" y="33" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="22" y="33" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="23" y="33" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="24" y="33" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="25" y="33" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="26" y="33" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="27" y="33" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="28" y="33" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="29" y="33" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="30" y="33" width="1.05" height="1.05" fill="#1A1A1A"/></g><g className="pv-rec"><rect x="23" y="26" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="24" y="26" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="23" y="27" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="24" y="27" width="1.05" height="1.05" fill="#FF2D7A"/></g><g className="ai-sparkle-group"><g className="ai-sparkle"><rect x="19" y="4" width="1.05" height="1.05" fill="#FFC107"/><rect x="20" y="4" width="1.05" height="1.05" fill="#FFC107"/><rect x="18" y="5" width="1.05" height="1.05" fill="#FFC107"/><rect x="19" y="5" width="1.05" height="1.05" fill="#FFC107"/><rect x="20" y="5" width="1.05" height="1.05" fill="#FFC107"/><rect x="21" y="5" width="1.05" height="1.05" fill="#FFC107"/><rect x="19" y="6" width="1.05" height="1.05" fill="#FFC107"/><rect x="20" y="6" width="1.05" height="1.05" fill="#FFC107"/><rect x="39" y="13" width="1.05" height="1.05" fill="#FFC107"/><rect x="40" y="13" width="1.05" height="1.05" fill="#FFC107"/><rect x="38" y="14" width="1.05" height="1.05" fill="#FFC107"/><rect x="39" y="14" width="1.05" height="1.05" fill="#FFC107"/><rect x="40" y="14" width="1.05" height="1.05" fill="#FFC107"/><rect x="41" y="14" width="1.05" height="1.05" fill="#FFC107"/><rect x="39" y="15" width="1.05" height="1.05" fill="#FFC107"/><rect x="40" y="15" width="1.05" height="1.05" fill="#FFC107"/></g></g></g>` }} />
        <symbol id="pixel-zap-reminders" viewBox="0 0 48 44" shapeRendering="crispEdges" dangerouslySetInnerHTML={{ __html: `<g className="eco-phone"><rect x="15" y="6" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="16" y="6" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="17" y="6" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="18" y="6" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="19" y="6" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="20" y="6" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="21" y="6" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="22" y="6" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="23" y="6" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="24" y="6" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="25" y="6" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="26" y="6" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="27" y="6" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="28" y="6" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="29" y="6" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="30" y="6" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="14" y="7" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="15" y="7" width="1.05" height="1.05" fill="#333333"/><rect x="16" y="7" width="1.05" height="1.05" fill="#333333"/><rect x="17" y="7" width="1.05" height="1.05" fill="#333333"/><rect x="18" y="7" width="1.05" height="1.05" fill="#333333"/><rect x="19" y="7" width="1.05" height="1.05" fill="#333333"/><rect x="20" y="7" width="1.05" height="1.05" fill="#333333"/><rect x="21" y="7" width="1.05" height="1.05" fill="#333333"/><rect x="22" y="7" width="1.05" height="1.05" fill="#333333"/><rect x="23" y="7" width="1.05" height="1.05" fill="#333333"/><rect x="24" y="7" width="1.05" height="1.05" fill="#333333"/><rect x="25" y="7" width="1.05" height="1.05" fill="#333333"/><rect x="26" y="7" width="1.05" height="1.05" fill="#333333"/><rect x="27" y="7" width="1.05" height="1.05" fill="#333333"/><rect x="28" y="7" width="1.05" height="1.05" fill="#333333"/><rect x="29" y="7" width="1.05" height="1.05" fill="#333333"/><rect x="30" y="7" width="1.05" height="1.05" fill="#333333"/><rect x="31" y="7" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="14" y="8" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="15" y="8" width="1.05" height="1.05" fill="#333333"/><rect x="16" y="8" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="17" y="8" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="18" y="8" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="19" y="8" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="20" y="8" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="21" y="8" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="22" y="8" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="23" y="8" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="24" y="8" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="25" y="8" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="26" y="8" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="27" y="8" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="28" y="8" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="29" y="8" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="30" y="8" width="1.05" height="1.05" fill="#333333"/><rect x="31" y="8" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="14" y="9" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="15" y="9" width="1.05" height="1.05" fill="#333333"/><rect x="16" y="9" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="17" y="9" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="18" y="9" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="19" y="9" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="20" y="9" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="21" y="9" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="22" y="9" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="23" y="9" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="24" y="9" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="25" y="9" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="26" y="9" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="27" y="9" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="28" y="9" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="29" y="9" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="30" y="9" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="31" y="9" width="1.05" height="1.05" fill="#333333"/><rect x="32" y="9" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="14" y="10" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="15" y="10" width="1.05" height="1.05" fill="#333333"/><rect x="16" y="10" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="17" y="10" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="18" y="10" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="19" y="10" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="20" y="10" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="21" y="10" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="22" y="10" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="23" y="10" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="24" y="10" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="25" y="10" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="26" y="10" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="27" y="10" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="28" y="10" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="29" y="10" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="30" y="10" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="31" y="10" width="1.05" height="1.05" fill="#333333"/><rect x="32" y="10" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="14" y="11" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="15" y="11" width="1.05" height="1.05" fill="#333333"/><rect x="16" y="11" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="17" y="11" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="18" y="11" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="19" y="11" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="20" y="11" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="21" y="11" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="22" y="11" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="23" y="11" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="24" y="11" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="25" y="11" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="26" y="11" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="27" y="11" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="28" y="11" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="29" y="11" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="30" y="11" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="31" y="11" width="1.05" height="1.05" fill="#333333"/><rect x="32" y="11" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="14" y="12" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="15" y="12" width="1.05" height="1.05" fill="#333333"/><rect x="16" y="12" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="17" y="12" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="18" y="12" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="19" y="12" width="1.05" height="1.05" fill="#FFE0EC"/><rect x="20" y="12" width="1.05" height="1.05" fill="#CBD5E1"/><rect x="21" y="12" width="1.05" height="1.05" fill="#CBD5E1"/><rect x="22" y="12" width="1.05" height="1.05" fill="#CBD5E1"/><rect x="23" y="12" width="1.05" height="1.05" fill="#CBD5E1"/><rect x="24" y="12" width="1.05" height="1.05" fill="#CBD5E1"/><rect x="25" y="12" width="1.05" height="1.05" fill="#CBD5E1"/><rect x="26" y="12" width="1.05" height="1.05" fill="#CBD5E1"/><rect x="27" y="12" width="1.05" height="1.05" fill="#FFE0EC"/><rect x="28" y="12" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="29" y="12" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="30" y="12" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="31" y="12" width="1.05" height="1.05" fill="#333333"/><rect x="32" y="12" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="14" y="13" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="15" y="13" width="1.05" height="1.05" fill="#333333"/><rect x="16" y="13" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="17" y="13" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="18" y="13" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="19" y="13" width="1.05" height="1.05" fill="#FFE0EC"/><rect x="20" y="13" width="1.05" height="1.05" fill="#CBD5E1"/><rect x="21" y="13" width="1.05" height="1.05" fill="#CBD5E1"/><rect x="22" y="13" width="1.05" height="1.05" fill="#CBD5E1"/><rect x="23" y="13" width="1.05" height="1.05" fill="#CBD5E1"/><rect x="24" y="13" width="1.05" height="1.05" fill="#CBD5E1"/><rect x="25" y="13" width="1.05" height="1.05" fill="#CBD5E1"/><rect x="26" y="13" width="1.05" height="1.05" fill="#CBD5E1"/><rect x="27" y="13" width="1.05" height="1.05" fill="#FFE0EC"/><rect x="28" y="13" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="29" y="13" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="30" y="13" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="31" y="13" width="1.05" height="1.05" fill="#333333"/><rect x="32" y="13" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="14" y="14" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="15" y="14" width="1.05" height="1.05" fill="#333333"/><rect x="16" y="14" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="17" y="14" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="18" y="14" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="19" y="14" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="20" y="14" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="21" y="14" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="22" y="14" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="23" y="14" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="24" y="14" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="25" y="14" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="26" y="14" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="27" y="14" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="28" y="14" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="29" y="14" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="30" y="14" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="31" y="14" width="1.05" height="1.05" fill="#333333"/><rect x="32" y="14" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="14" y="15" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="15" y="15" width="1.05" height="1.05" fill="#333333"/><rect x="16" y="15" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="17" y="15" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="18" y="15" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="19" y="15" width="1.05" height="1.05" fill="#FFE0EC"/><rect x="27" y="15" width="1.05" height="1.05" fill="#FFE0EC"/><rect x="28" y="15" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="29" y="15" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="30" y="15" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="31" y="15" width="1.05" height="1.05" fill="#333333"/><rect x="32" y="15" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="14" y="16" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="15" y="16" width="1.05" height="1.05" fill="#333333"/><rect x="16" y="16" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="17" y="16" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="18" y="16" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="28" y="16" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="29" y="16" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="30" y="16" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="31" y="16" width="1.05" height="1.05" fill="#333333"/><rect x="32" y="16" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="14" y="17" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="15" y="17" width="1.05" height="1.05" fill="#333333"/><rect x="16" y="17" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="17" y="17" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="18" y="17" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="21" y="17" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="22" y="17" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="23" y="17" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="24" y="17" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="28" y="17" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="29" y="17" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="30" y="17" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="31" y="17" width="1.05" height="1.05" fill="#333333"/><rect x="32" y="17" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="14" y="18" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="15" y="18" width="1.05" height="1.05" fill="#333333"/><rect x="16" y="18" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="17" y="18" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="18" y="18" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="28" y="18" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="29" y="18" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="30" y="18" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="31" y="18" width="1.05" height="1.05" fill="#333333"/><rect x="32" y="18" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="14" y="19" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="15" y="19" width="1.05" height="1.05" fill="#333333"/><rect x="16" y="19" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="17" y="19" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="18" y="19" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="28" y="19" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="29" y="19" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="30" y="19" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="31" y="19" width="1.05" height="1.05" fill="#333333"/><rect x="32" y="19" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="14" y="20" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="15" y="20" width="1.05" height="1.05" fill="#333333"/><rect x="16" y="20" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="17" y="20" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="18" y="20" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="19" y="20" width="1.05" height="1.05" fill="#FFE0EC"/><rect x="27" y="20" width="1.05" height="1.05" fill="#FFE0EC"/><rect x="28" y="20" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="29" y="20" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="30" y="20" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="31" y="20" width="1.05" height="1.05" fill="#333333"/><rect x="32" y="20" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="14" y="21" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="15" y="21" width="1.05" height="1.05" fill="#333333"/><rect x="16" y="21" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="17" y="21" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="18" y="21" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="19" y="21" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="20" y="21" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="21" y="21" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="24" y="21" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="25" y="21" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="26" y="21" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="27" y="21" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="28" y="21" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="29" y="21" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="30" y="21" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="31" y="21" width="1.05" height="1.05" fill="#333333"/><rect x="32" y="21" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="14" y="22" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="15" y="22" width="1.05" height="1.05" fill="#333333"/><rect x="16" y="22" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="17" y="22" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="18" y="22" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="19" y="22" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="20" y="22" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="23" y="22" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="24" y="22" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="25" y="22" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="26" y="22" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="27" y="22" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="28" y="22" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="29" y="22" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="30" y="22" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="31" y="22" width="1.05" height="1.05" fill="#333333"/><rect x="32" y="22" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="14" y="23" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="15" y="23" width="1.05" height="1.05" fill="#333333"/><rect x="16" y="23" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="17" y="23" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="18" y="23" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="19" y="23" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="20" y="23" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="21" y="23" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="22" y="23" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="23" y="23" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="24" y="23" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="25" y="23" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="26" y="23" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="27" y="23" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="28" y="23" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="29" y="23" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="30" y="23" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="31" y="23" width="1.05" height="1.05" fill="#333333"/><rect x="32" y="23" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="14" y="24" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="15" y="24" width="1.05" height="1.05" fill="#333333"/><rect x="16" y="24" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="17" y="24" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="18" y="24" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="19" y="24" width="1.05" height="1.05" fill="#FFE0EC"/><rect x="27" y="24" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="28" y="24" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="29" y="24" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="30" y="24" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="31" y="24" width="1.05" height="1.05" fill="#333333"/><rect x="32" y="24" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="14" y="25" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="15" y="25" width="1.05" height="1.05" fill="#333333"/><rect x="16" y="25" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="17" y="25" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="18" y="25" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="28" y="25" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="29" y="25" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="30" y="25" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="31" y="25" width="1.05" height="1.05" fill="#333333"/><rect x="32" y="25" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="14" y="26" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="15" y="26" width="1.05" height="1.05" fill="#333333"/><rect x="16" y="26" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="17" y="26" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="18" y="26" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="21" y="26" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="22" y="26" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="23" y="26" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="24" y="26" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="28" y="26" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="29" y="26" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="30" y="26" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="31" y="26" width="1.05" height="1.05" fill="#333333"/><rect x="32" y="26" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="14" y="27" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="15" y="27" width="1.05" height="1.05" fill="#333333"/><rect x="16" y="27" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="17" y="27" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="18" y="27" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="28" y="27" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="29" y="27" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="30" y="27" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="31" y="27" width="1.05" height="1.05" fill="#333333"/><rect x="32" y="27" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="14" y="28" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="15" y="28" width="1.05" height="1.05" fill="#333333"/><rect x="16" y="28" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="17" y="28" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="18" y="28" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="28" y="28" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="29" y="28" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="30" y="28" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="31" y="28" width="1.05" height="1.05" fill="#333333"/><rect x="32" y="28" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="14" y="29" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="15" y="29" width="1.05" height="1.05" fill="#333333"/><rect x="16" y="29" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="17" y="29" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="18" y="29" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="19" y="29" width="1.05" height="1.05" fill="#FFE0EC"/><rect x="27" y="29" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="28" y="29" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="29" y="29" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="30" y="29" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="31" y="29" width="1.05" height="1.05" fill="#333333"/><rect x="32" y="29" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="14" y="30" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="15" y="30" width="1.05" height="1.05" fill="#333333"/><rect x="16" y="30" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="17" y="30" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="18" y="30" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="19" y="30" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="20" y="30" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="21" y="30" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="22" y="30" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="25" y="30" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="26" y="30" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="27" y="30" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="28" y="30" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="29" y="30" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="30" y="30" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="31" y="30" width="1.05" height="1.05" fill="#333333"/><rect x="32" y="30" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="14" y="31" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="15" y="31" width="1.05" height="1.05" fill="#333333"/><rect x="16" y="31" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="17" y="31" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="18" y="31" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="19" y="31" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="20" y="31" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="21" y="31" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="22" y="31" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="23" y="31" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="26" y="31" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="27" y="31" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="28" y="31" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="29" y="31" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="30" y="31" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="31" y="31" width="1.05" height="1.05" fill="#333333"/><rect x="32" y="31" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="14" y="32" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="15" y="32" width="1.05" height="1.05" fill="#333333"/><rect x="16" y="32" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="17" y="32" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="18" y="32" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="19" y="32" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="20" y="32" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="21" y="32" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="22" y="32" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="23" y="32" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="24" y="32" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="25" y="32" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="26" y="32" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="27" y="32" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="28" y="32" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="29" y="32" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="30" y="32" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="31" y="32" width="1.05" height="1.05" fill="#333333"/><rect x="32" y="32" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="14" y="33" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="15" y="33" width="1.05" height="1.05" fill="#333333"/><rect x="16" y="33" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="17" y="33" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="18" y="33" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="19" y="33" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="20" y="33" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="21" y="33" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="22" y="33" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="23" y="33" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="24" y="33" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="25" y="33" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="26" y="33" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="27" y="33" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="28" y="33" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="29" y="33" width="1.05" height="1.05" fill="#FFFFFF"/><rect x="30" y="33" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="31" y="33" width="1.05" height="1.05" fill="#333333"/><rect x="32" y="33" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="14" y="34" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="15" y="34" width="1.05" height="1.05" fill="#333333"/><rect x="16" y="34" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="17" y="34" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="18" y="34" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="19" y="34" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="20" y="34" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="21" y="34" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="22" y="34" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="23" y="34" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="24" y="34" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="25" y="34" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="26" y="34" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="27" y="34" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="28" y="34" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="29" y="34" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="30" y="34" width="1.05" height="1.05" fill="#333333"/><rect x="31" y="34" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="14" y="35" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="15" y="35" width="1.05" height="1.05" fill="#333333"/><rect x="16" y="35" width="1.05" height="1.05" fill="#333333"/><rect x="17" y="35" width="1.05" height="1.05" fill="#333333"/><rect x="18" y="35" width="1.05" height="1.05" fill="#333333"/><rect x="19" y="35" width="1.05" height="1.05" fill="#333333"/><rect x="20" y="35" width="1.05" height="1.05" fill="#333333"/><rect x="21" y="35" width="1.05" height="1.05" fill="#333333"/><rect x="22" y="35" width="1.05" height="1.05" fill="#333333"/><rect x="23" y="35" width="1.05" height="1.05" fill="#333333"/><rect x="24" y="35" width="1.05" height="1.05" fill="#333333"/><rect x="25" y="35" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="26" y="35" width="1.05" height="1.05" fill="#333333"/><rect x="27" y="35" width="1.05" height="1.05" fill="#333333"/><rect x="28" y="35" width="1.05" height="1.05" fill="#333333"/><rect x="29" y="35" width="1.05" height="1.05" fill="#333333"/><rect x="30" y="35" width="1.05" height="1.05" fill="#333333"/><rect x="31" y="35" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="14" y="36" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="15" y="36" width="1.05" height="1.05" fill="#333333"/><rect x="16" y="36" width="1.05" height="1.05" fill="#333333"/><rect x="17" y="36" width="1.05" height="1.05" fill="#333333"/><rect x="18" y="36" width="1.05" height="1.05" fill="#333333"/><rect x="19" y="36" width="1.05" height="1.05" fill="#333333"/><rect x="20" y="36" width="1.05" height="1.05" fill="#333333"/><rect x="21" y="36" width="1.05" height="1.05" fill="#333333"/><rect x="22" y="36" width="1.05" height="1.05" fill="#333333"/><rect x="23" y="36" width="1.05" height="1.05" fill="#333333"/><rect x="24" y="36" width="1.05" height="1.05" fill="#333333"/><rect x="25" y="36" width="1.05" height="1.05" fill="#333333"/><rect x="26" y="36" width="1.05" height="1.05" fill="#333333"/><rect x="27" y="36" width="1.05" height="1.05" fill="#333333"/><rect x="28" y="36" width="1.05" height="1.05" fill="#333333"/><rect x="29" y="36" width="1.05" height="1.05" fill="#333333"/><rect x="30" y="36" width="1.05" height="1.05" fill="#333333"/><rect x="31" y="36" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="15" y="37" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="16" y="37" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="17" y="37" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="18" y="37" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="19" y="37" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="20" y="37" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="21" y="37" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="22" y="37" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="23" y="37" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="24" y="37" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="25" y="37" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="26" y="37" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="27" y="37" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="28" y="37" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="29" y="37" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="30" y="37" width="1.05" height="1.05" fill="#1A1A1A"/></g><g className="zap-bubble"><rect x="20" y="15" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="21" y="15" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="22" y="15" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="23" y="15" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="24" y="15" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="25" y="15" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="26" y="15" width="1.05" height="1.05" fill="#D81B60"/><rect x="19" y="16" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="20" y="16" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="21" y="16" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="22" y="16" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="23" y="16" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="24" y="16" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="25" y="16" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="26" y="16" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="27" y="16" width="1.05" height="1.05" fill="#D81B60"/><rect x="19" y="17" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="20" y="17" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="25" y="17" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="26" y="17" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="27" y="17" width="1.05" height="1.05" fill="#D81B60"/><rect x="19" y="18" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="20" y="18" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="21" y="18" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="22" y="18" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="23" y="18" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="24" y="18" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="25" y="18" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="26" y="18" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="27" y="18" width="1.05" height="1.05" fill="#D81B60"/><rect x="19" y="19" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="20" y="19" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="21" y="19" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="22" y="19" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="23" y="19" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="24" y="19" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="25" y="19" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="26" y="19" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="27" y="19" width="1.05" height="1.05" fill="#D81B60"/><rect x="20" y="20" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="21" y="20" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="22" y="20" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="23" y="20" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="24" y="20" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="25" y="20" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="26" y="20" width="1.05" height="1.05" fill="#D81B60"/><rect x="22" y="21" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="23" y="21" width="1.05" height="1.05" fill="#D81B60"/><rect x="21" y="22" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="22" y="22" width="1.05" height="1.05" fill="#D81B60"/><rect x="20" y="24" width="1.05" height="1.05" fill="#8DE383"/><rect x="21" y="24" width="1.05" height="1.05" fill="#8DE383"/><rect x="22" y="24" width="1.05" height="1.05" fill="#8DE383"/><rect x="23" y="24" width="1.05" height="1.05" fill="#8DE383"/><rect x="24" y="24" width="1.05" height="1.05" fill="#8DE383"/><rect x="25" y="24" width="1.05" height="1.05" fill="#8DE383"/><rect x="26" y="24" width="1.05" height="1.05" fill="#5DB554"/><rect x="19" y="25" width="1.05" height="1.05" fill="#8DE383"/><rect x="20" y="25" width="1.05" height="1.05" fill="#8DE383"/><rect x="21" y="25" width="1.05" height="1.05" fill="#8DE383"/><rect x="22" y="25" width="1.05" height="1.05" fill="#8DE383"/><rect x="23" y="25" width="1.05" height="1.05" fill="#8DE383"/><rect x="24" y="25" width="1.05" height="1.05" fill="#8DE383"/><rect x="25" y="25" width="1.05" height="1.05" fill="#8DE383"/><rect x="26" y="25" width="1.05" height="1.05" fill="#8DE383"/><rect x="27" y="25" width="1.05" height="1.05" fill="#5DB554"/><rect x="19" y="26" width="1.05" height="1.05" fill="#8DE383"/><rect x="20" y="26" width="1.05" height="1.05" fill="#8DE383"/><rect x="25" y="26" width="1.05" height="1.05" fill="#8DE383"/><rect x="26" y="26" width="1.05" height="1.05" fill="#8DE383"/><rect x="27" y="26" width="1.05" height="1.05" fill="#5DB554"/><rect x="19" y="27" width="1.05" height="1.05" fill="#8DE383"/><rect x="20" y="27" width="1.05" height="1.05" fill="#8DE383"/><rect x="21" y="27" width="1.05" height="1.05" fill="#8DE383"/><rect x="22" y="27" width="1.05" height="1.05" fill="#8DE383"/><rect x="23" y="27" width="1.05" height="1.05" fill="#8DE383"/><rect x="24" y="27" width="1.05" height="1.05" fill="#8DE383"/><rect x="25" y="27" width="1.05" height="1.05" fill="#8DE383"/><rect x="26" y="27" width="1.05" height="1.05" fill="#8DE383"/><rect x="27" y="27" width="1.05" height="1.05" fill="#5DB554"/><rect x="19" y="28" width="1.05" height="1.05" fill="#8DE383"/><rect x="20" y="28" width="1.05" height="1.05" fill="#8DE383"/><rect x="21" y="28" width="1.05" height="1.05" fill="#8DE383"/><rect x="22" y="28" width="1.05" height="1.05" fill="#8DE383"/><rect x="23" y="28" width="1.05" height="1.05" fill="#8DE383"/><rect x="24" y="28" width="1.05" height="1.05" fill="#8DE383"/><rect x="25" y="28" width="1.05" height="1.05" fill="#8DE383"/><rect x="26" y="28" width="1.05" height="1.05" fill="#8DE383"/><rect x="27" y="28" width="1.05" height="1.05" fill="#5DB554"/><rect x="20" y="29" width="1.05" height="1.05" fill="#8DE383"/><rect x="21" y="29" width="1.05" height="1.05" fill="#8DE383"/><rect x="22" y="29" width="1.05" height="1.05" fill="#8DE383"/><rect x="23" y="29" width="1.05" height="1.05" fill="#8DE383"/><rect x="24" y="29" width="1.05" height="1.05" fill="#8DE383"/><rect x="25" y="29" width="1.05" height="1.05" fill="#8DE383"/><rect x="26" y="29" width="1.05" height="1.05" fill="#5DB554"/><rect x="23" y="30" width="1.05" height="1.05" fill="#8DE383"/><rect x="24" y="30" width="1.05" height="1.05" fill="#5DB554"/><rect x="24" y="31" width="1.05" height="1.05" fill="#8DE383"/><rect x="25" y="31" width="1.05" height="1.05" fill="#5DB554"/></g><g className="wb-bell"><rect x="40" y="19" width="1.05" height="1.05" fill="#FFC107"/><rect x="41" y="19" width="1.05" height="1.05" fill="#FFC107"/><rect x="39" y="20" width="1.05" height="1.05" fill="#FFC107"/><rect x="40" y="20" width="1.05" height="1.05" fill="#FFC107"/><rect x="41" y="20" width="1.05" height="1.05" fill="#FFC107"/><rect x="42" y="20" width="1.05" height="1.05" fill="#FFC107"/><rect x="39" y="21" width="1.05" height="1.05" fill="#FFC107"/><rect x="40" y="21" width="1.05" height="1.05" fill="#FFC107"/><rect x="41" y="21" width="1.05" height="1.05" fill="#FFC107"/><rect x="42" y="21" width="1.05" height="1.05" fill="#FFC107"/><rect x="38" y="22" width="1.05" height="1.05" fill="#FFC107"/><rect x="39" y="22" width="1.05" height="1.05" fill="#FFC107"/><rect x="40" y="22" width="1.05" height="1.05" fill="#FFC107"/><rect x="41" y="22" width="1.05" height="1.05" fill="#FFC107"/><rect x="42" y="22" width="1.05" height="1.05" fill="#FFC107"/><rect x="43" y="22" width="1.05" height="1.05" fill="#FFC107"/><rect x="38" y="23" width="1.05" height="1.05" fill="#FFC107"/><rect x="39" y="23" width="1.05" height="1.05" fill="#FFC107"/><rect x="40" y="23" width="1.05" height="1.05" fill="#FFC107"/><rect x="41" y="23" width="1.05" height="1.05" fill="#FFC107"/><rect x="42" y="23" width="1.05" height="1.05" fill="#FFC107"/><rect x="43" y="23" width="1.05" height="1.05" fill="#FFC107"/><rect x="39" y="24" width="1.05" height="1.05" fill="#FFC107"/><rect x="40" y="24" width="1.05" height="1.05" fill="#FFC107"/><rect x="41" y="24" width="1.05" height="1.05" fill="#FFC107"/><rect x="42" y="24" width="1.05" height="1.05" fill="#FFC107"/><rect x="40" y="25" width="1.05" height="1.05" fill="#FFC107"/><rect x="41" y="25" width="1.05" height="1.05" fill="#FFC107"/></g>` }} />
        <symbol id="pixel-chart" viewBox="0 0 48 44" shapeRendering="crispEdges" dangerouslySetInnerHTML={{ __html: `<g className="eco-robot"><rect x="31" y="7" width="1.05" height="1.05" fill="#8DE383"/><rect x="28" y="9" width="1.05" height="1.05" fill="#8DE383"/><rect x="25" y="11" width="1.05" height="1.05" fill="#8DE383"/><rect x="34" y="11" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="35" y="11" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="36" y="11" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="37" y="11" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="38" y="11" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="39" y="11" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="40" y="11" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="41" y="11" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="33" y="12" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="34" y="12" width="1.05" height="1.05" fill="#B5E474"/><rect x="35" y="12" width="1.05" height="1.05" fill="#B5E474"/><rect x="36" y="12" width="1.05" height="1.05" fill="#B5E474"/><rect x="37" y="12" width="1.05" height="1.05" fill="#B5E474"/><rect x="38" y="12" width="1.05" height="1.05" fill="#B5E474"/><rect x="39" y="12" width="1.05" height="1.05" fill="#B5E474"/><rect x="40" y="12" width="1.05" height="1.05" fill="#B5E474"/><rect x="41" y="12" width="1.05" height="1.05" fill="#B5E474"/><rect x="42" y="12" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="22" y="13" width="1.05" height="1.05" fill="#8DE383"/><rect x="33" y="13" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="34" y="13" width="1.05" height="1.05" fill="#B5E474"/><rect x="35" y="13" width="1.05" height="1.05" fill="#E3F9C6"/><rect x="36" y="13" width="1.05" height="1.05" fill="#B5E474"/><rect x="37" y="13" width="1.05" height="1.05" fill="#B5E474"/><rect x="38" y="13" width="1.05" height="1.05" fill="#B5E474"/><rect x="39" y="13" width="1.05" height="1.05" fill="#B5E474"/><rect x="40" y="13" width="1.05" height="1.05" fill="#8DE383"/><rect x="41" y="13" width="1.05" height="1.05" fill="#333333"/><rect x="42" y="13" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="33" y="14" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="34" y="14" width="1.05" height="1.05" fill="#B5E474"/><rect x="35" y="14" width="1.05" height="1.05" fill="#E3F9C6"/><rect x="36" y="14" width="1.05" height="1.05" fill="#B5E474"/><rect x="37" y="14" width="1.05" height="1.05" fill="#B5E474"/><rect x="38" y="14" width="1.05" height="1.05" fill="#B5E474"/><rect x="39" y="14" width="1.05" height="1.05" fill="#B5E474"/><rect x="40" y="14" width="1.05" height="1.05" fill="#8DE383"/><rect x="41" y="14" width="1.05" height="1.05" fill="#333333"/><rect x="42" y="14" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="19" y="15" width="1.05" height="1.05" fill="#8DE383"/><rect x="33" y="15" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="34" y="15" width="1.05" height="1.05" fill="#B5E474"/><rect x="35" y="15" width="1.05" height="1.05" fill="#E3F9C6"/><rect x="36" y="15" width="1.05" height="1.05" fill="#B5E474"/><rect x="37" y="15" width="1.05" height="1.05" fill="#B5E474"/><rect x="38" y="15" width="1.05" height="1.05" fill="#B5E474"/><rect x="39" y="15" width="1.05" height="1.05" fill="#B5E474"/><rect x="40" y="15" width="1.05" height="1.05" fill="#8DE383"/><rect x="41" y="15" width="1.05" height="1.05" fill="#333333"/><rect x="42" y="15" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="33" y="16" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="34" y="16" width="1.05" height="1.05" fill="#B5E474"/><rect x="35" y="16" width="1.05" height="1.05" fill="#E3F9C6"/><rect x="36" y="16" width="1.05" height="1.05" fill="#B5E474"/><rect x="37" y="16" width="1.05" height="1.05" fill="#B5E474"/><rect x="38" y="16" width="1.05" height="1.05" fill="#B5E474"/><rect x="39" y="16" width="1.05" height="1.05" fill="#B5E474"/><rect x="40" y="16" width="1.05" height="1.05" fill="#8DE383"/><rect x="41" y="16" width="1.05" height="1.05" fill="#333333"/><rect x="42" y="16" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="16" y="17" width="1.05" height="1.05" fill="#8DE383"/><rect x="33" y="17" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="34" y="17" width="1.05" height="1.05" fill="#B5E474"/><rect x="35" y="17" width="1.05" height="1.05" fill="#E3F9C6"/><rect x="36" y="17" width="1.05" height="1.05" fill="#B5E474"/><rect x="37" y="17" width="1.05" height="1.05" fill="#B5E474"/><rect x="38" y="17" width="1.05" height="1.05" fill="#B5E474"/><rect x="39" y="17" width="1.05" height="1.05" fill="#B5E474"/><rect x="40" y="17" width="1.05" height="1.05" fill="#8DE383"/><rect x="41" y="17" width="1.05" height="1.05" fill="#333333"/><rect x="42" y="17" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="23" y="18" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="24" y="18" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="25" y="18" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="26" y="18" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="27" y="18" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="28" y="18" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="29" y="18" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="30" y="18" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="33" y="18" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="34" y="18" width="1.05" height="1.05" fill="#B5E474"/><rect x="35" y="18" width="1.05" height="1.05" fill="#E3F9C6"/><rect x="36" y="18" width="1.05" height="1.05" fill="#B5E474"/><rect x="37" y="18" width="1.05" height="1.05" fill="#B5E474"/><rect x="38" y="18" width="1.05" height="1.05" fill="#B5E474"/><rect x="39" y="18" width="1.05" height="1.05" fill="#B5E474"/><rect x="40" y="18" width="1.05" height="1.05" fill="#8DE383"/><rect x="41" y="18" width="1.05" height="1.05" fill="#333333"/><rect x="42" y="18" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="13" y="19" width="1.05" height="1.05" fill="#8DE383"/><rect x="22" y="19" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="23" y="19" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="24" y="19" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="25" y="19" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="26" y="19" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="27" y="19" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="28" y="19" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="29" y="19" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="30" y="19" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="31" y="19" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="33" y="19" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="34" y="19" width="1.05" height="1.05" fill="#B5E474"/><rect x="35" y="19" width="1.05" height="1.05" fill="#E3F9C6"/><rect x="36" y="19" width="1.05" height="1.05" fill="#B5E474"/><rect x="37" y="19" width="1.05" height="1.05" fill="#B5E474"/><rect x="38" y="19" width="1.05" height="1.05" fill="#B5E474"/><rect x="39" y="19" width="1.05" height="1.05" fill="#B5E474"/><rect x="40" y="19" width="1.05" height="1.05" fill="#8DE383"/><rect x="41" y="19" width="1.05" height="1.05" fill="#333333"/><rect x="42" y="19" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="22" y="20" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="23" y="20" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="24" y="20" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="25" y="20" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="26" y="20" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="27" y="20" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="28" y="20" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="29" y="20" width="1.05" height="1.05" fill="#D81B60"/><rect x="30" y="20" width="1.05" height="1.05" fill="#333333"/><rect x="31" y="20" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="33" y="20" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="34" y="20" width="1.05" height="1.05" fill="#B5E474"/><rect x="35" y="20" width="1.05" height="1.05" fill="#E3F9C6"/><rect x="36" y="20" width="1.05" height="1.05" fill="#B5E474"/><rect x="37" y="20" width="1.05" height="1.05" fill="#B5E474"/><rect x="38" y="20" width="1.05" height="1.05" fill="#B5E474"/><rect x="39" y="20" width="1.05" height="1.05" fill="#B5E474"/><rect x="40" y="20" width="1.05" height="1.05" fill="#8DE383"/><rect x="41" y="20" width="1.05" height="1.05" fill="#333333"/><rect x="42" y="20" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="10" y="21" width="1.05" height="1.05" fill="#8DE383"/><rect x="22" y="21" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="23" y="21" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="24" y="21" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="25" y="21" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="26" y="21" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="27" y="21" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="28" y="21" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="29" y="21" width="1.05" height="1.05" fill="#D81B60"/><rect x="30" y="21" width="1.05" height="1.05" fill="#333333"/><rect x="31" y="21" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="33" y="21" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="34" y="21" width="1.05" height="1.05" fill="#B5E474"/><rect x="35" y="21" width="1.05" height="1.05" fill="#E3F9C6"/><rect x="36" y="21" width="1.05" height="1.05" fill="#B5E474"/><rect x="37" y="21" width="1.05" height="1.05" fill="#B5E474"/><rect x="38" y="21" width="1.05" height="1.05" fill="#B5E474"/><rect x="39" y="21" width="1.05" height="1.05" fill="#B5E474"/><rect x="40" y="21" width="1.05" height="1.05" fill="#8DE383"/><rect x="41" y="21" width="1.05" height="1.05" fill="#333333"/><rect x="42" y="21" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="22" y="22" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="23" y="22" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="24" y="22" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="25" y="22" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="26" y="22" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="27" y="22" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="28" y="22" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="29" y="22" width="1.05" height="1.05" fill="#D81B60"/><rect x="30" y="22" width="1.05" height="1.05" fill="#333333"/><rect x="31" y="22" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="33" y="22" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="34" y="22" width="1.05" height="1.05" fill="#B5E474"/><rect x="35" y="22" width="1.05" height="1.05" fill="#E3F9C6"/><rect x="36" y="22" width="1.05" height="1.05" fill="#B5E474"/><rect x="37" y="22" width="1.05" height="1.05" fill="#B5E474"/><rect x="38" y="22" width="1.05" height="1.05" fill="#B5E474"/><rect x="39" y="22" width="1.05" height="1.05" fill="#B5E474"/><rect x="40" y="22" width="1.05" height="1.05" fill="#8DE383"/><rect x="41" y="22" width="1.05" height="1.05" fill="#333333"/><rect x="42" y="22" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="7" y="23" width="1.05" height="1.05" fill="#8DE383"/><rect x="22" y="23" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="23" y="23" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="24" y="23" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="25" y="23" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="26" y="23" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="27" y="23" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="28" y="23" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="29" y="23" width="1.05" height="1.05" fill="#D81B60"/><rect x="30" y="23" width="1.05" height="1.05" fill="#333333"/><rect x="31" y="23" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="33" y="23" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="34" y="23" width="1.05" height="1.05" fill="#B5E474"/><rect x="35" y="23" width="1.05" height="1.05" fill="#E3F9C6"/><rect x="36" y="23" width="1.05" height="1.05" fill="#B5E474"/><rect x="37" y="23" width="1.05" height="1.05" fill="#B5E474"/><rect x="38" y="23" width="1.05" height="1.05" fill="#B5E474"/><rect x="39" y="23" width="1.05" height="1.05" fill="#B5E474"/><rect x="40" y="23" width="1.05" height="1.05" fill="#8DE383"/><rect x="41" y="23" width="1.05" height="1.05" fill="#333333"/><rect x="42" y="23" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="22" y="24" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="23" y="24" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="24" y="24" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="25" y="24" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="26" y="24" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="27" y="24" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="28" y="24" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="29" y="24" width="1.05" height="1.05" fill="#D81B60"/><rect x="30" y="24" width="1.05" height="1.05" fill="#333333"/><rect x="31" y="24" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="33" y="24" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="34" y="24" width="1.05" height="1.05" fill="#B5E474"/><rect x="35" y="24" width="1.05" height="1.05" fill="#E3F9C6"/><rect x="36" y="24" width="1.05" height="1.05" fill="#B5E474"/><rect x="37" y="24" width="1.05" height="1.05" fill="#B5E474"/><rect x="38" y="24" width="1.05" height="1.05" fill="#B5E474"/><rect x="39" y="24" width="1.05" height="1.05" fill="#B5E474"/><rect x="40" y="24" width="1.05" height="1.05" fill="#8DE383"/><rect x="41" y="24" width="1.05" height="1.05" fill="#333333"/><rect x="42" y="24" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="12" y="25" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="13" y="25" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="14" y="25" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="15" y="25" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="16" y="25" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="17" y="25" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="18" y="25" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="19" y="25" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="22" y="25" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="23" y="25" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="24" y="25" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="25" y="25" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="26" y="25" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="27" y="25" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="28" y="25" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="29" y="25" width="1.05" height="1.05" fill="#D81B60"/><rect x="30" y="25" width="1.05" height="1.05" fill="#333333"/><rect x="31" y="25" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="33" y="25" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="34" y="25" width="1.05" height="1.05" fill="#B5E474"/><rect x="35" y="25" width="1.05" height="1.05" fill="#E3F9C6"/><rect x="36" y="25" width="1.05" height="1.05" fill="#B5E474"/><rect x="37" y="25" width="1.05" height="1.05" fill="#B5E474"/><rect x="38" y="25" width="1.05" height="1.05" fill="#B5E474"/><rect x="39" y="25" width="1.05" height="1.05" fill="#B5E474"/><rect x="40" y="25" width="1.05" height="1.05" fill="#8DE383"/><rect x="41" y="25" width="1.05" height="1.05" fill="#333333"/><rect x="42" y="25" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="11" y="26" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="12" y="26" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="13" y="26" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="14" y="26" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="15" y="26" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="16" y="26" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="17" y="26" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="18" y="26" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="19" y="26" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="20" y="26" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="22" y="26" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="23" y="26" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="24" y="26" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="25" y="26" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="26" y="26" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="27" y="26" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="28" y="26" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="29" y="26" width="1.05" height="1.05" fill="#D81B60"/><rect x="30" y="26" width="1.05" height="1.05" fill="#333333"/><rect x="31" y="26" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="33" y="26" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="34" y="26" width="1.05" height="1.05" fill="#B5E474"/><rect x="35" y="26" width="1.05" height="1.05" fill="#E3F9C6"/><rect x="36" y="26" width="1.05" height="1.05" fill="#B5E474"/><rect x="37" y="26" width="1.05" height="1.05" fill="#B5E474"/><rect x="38" y="26" width="1.05" height="1.05" fill="#B5E474"/><rect x="39" y="26" width="1.05" height="1.05" fill="#B5E474"/><rect x="40" y="26" width="1.05" height="1.05" fill="#8DE383"/><rect x="41" y="26" width="1.05" height="1.05" fill="#333333"/><rect x="42" y="26" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="11" y="27" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="12" y="27" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="13" y="27" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="14" y="27" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="15" y="27" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="16" y="27" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="17" y="27" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="18" y="27" width="1.05" height="1.05" fill="#D81B60"/><rect x="19" y="27" width="1.05" height="1.05" fill="#333333"/><rect x="20" y="27" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="22" y="27" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="23" y="27" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="24" y="27" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="25" y="27" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="26" y="27" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="27" y="27" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="28" y="27" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="29" y="27" width="1.05" height="1.05" fill="#D81B60"/><rect x="30" y="27" width="1.05" height="1.05" fill="#333333"/><rect x="31" y="27" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="33" y="27" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="34" y="27" width="1.05" height="1.05" fill="#B5E474"/><rect x="35" y="27" width="1.05" height="1.05" fill="#E3F9C6"/><rect x="36" y="27" width="1.05" height="1.05" fill="#B5E474"/><rect x="37" y="27" width="1.05" height="1.05" fill="#B5E474"/><rect x="38" y="27" width="1.05" height="1.05" fill="#B5E474"/><rect x="39" y="27" width="1.05" height="1.05" fill="#B5E474"/><rect x="40" y="27" width="1.05" height="1.05" fill="#8DE383"/><rect x="41" y="27" width="1.05" height="1.05" fill="#333333"/><rect x="42" y="27" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="11" y="28" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="12" y="28" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="13" y="28" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="14" y="28" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="15" y="28" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="16" y="28" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="17" y="28" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="18" y="28" width="1.05" height="1.05" fill="#D81B60"/><rect x="19" y="28" width="1.05" height="1.05" fill="#333333"/><rect x="20" y="28" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="22" y="28" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="23" y="28" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="24" y="28" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="25" y="28" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="26" y="28" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="27" y="28" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="28" y="28" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="29" y="28" width="1.05" height="1.05" fill="#D81B60"/><rect x="30" y="28" width="1.05" height="1.05" fill="#333333"/><rect x="31" y="28" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="33" y="28" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="34" y="28" width="1.05" height="1.05" fill="#B5E474"/><rect x="35" y="28" width="1.05" height="1.05" fill="#E3F9C6"/><rect x="36" y="28" width="1.05" height="1.05" fill="#B5E474"/><rect x="37" y="28" width="1.05" height="1.05" fill="#B5E474"/><rect x="38" y="28" width="1.05" height="1.05" fill="#B5E474"/><rect x="39" y="28" width="1.05" height="1.05" fill="#B5E474"/><rect x="40" y="28" width="1.05" height="1.05" fill="#8DE383"/><rect x="41" y="28" width="1.05" height="1.05" fill="#333333"/><rect x="42" y="28" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="11" y="29" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="12" y="29" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="13" y="29" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="14" y="29" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="15" y="29" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="16" y="29" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="17" y="29" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="18" y="29" width="1.05" height="1.05" fill="#D81B60"/><rect x="19" y="29" width="1.05" height="1.05" fill="#333333"/><rect x="20" y="29" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="22" y="29" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="23" y="29" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="24" y="29" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="25" y="29" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="26" y="29" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="27" y="29" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="28" y="29" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="29" y="29" width="1.05" height="1.05" fill="#D81B60"/><rect x="30" y="29" width="1.05" height="1.05" fill="#333333"/><rect x="31" y="29" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="33" y="29" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="34" y="29" width="1.05" height="1.05" fill="#B5E474"/><rect x="35" y="29" width="1.05" height="1.05" fill="#E3F9C6"/><rect x="36" y="29" width="1.05" height="1.05" fill="#B5E474"/><rect x="37" y="29" width="1.05" height="1.05" fill="#B5E474"/><rect x="38" y="29" width="1.05" height="1.05" fill="#B5E474"/><rect x="39" y="29" width="1.05" height="1.05" fill="#B5E474"/><rect x="40" y="29" width="1.05" height="1.05" fill="#8DE383"/><rect x="41" y="29" width="1.05" height="1.05" fill="#333333"/><rect x="42" y="29" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="11" y="30" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="12" y="30" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="13" y="30" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="14" y="30" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="15" y="30" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="16" y="30" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="17" y="30" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="18" y="30" width="1.05" height="1.05" fill="#D81B60"/><rect x="19" y="30" width="1.05" height="1.05" fill="#333333"/><rect x="20" y="30" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="22" y="30" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="23" y="30" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="24" y="30" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="25" y="30" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="26" y="30" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="27" y="30" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="28" y="30" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="29" y="30" width="1.05" height="1.05" fill="#D81B60"/><rect x="30" y="30" width="1.05" height="1.05" fill="#333333"/><rect x="31" y="30" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="33" y="30" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="34" y="30" width="1.05" height="1.05" fill="#B5E474"/><rect x="35" y="30" width="1.05" height="1.05" fill="#E3F9C6"/><rect x="36" y="30" width="1.05" height="1.05" fill="#B5E474"/><rect x="37" y="30" width="1.05" height="1.05" fill="#B5E474"/><rect x="38" y="30" width="1.05" height="1.05" fill="#B5E474"/><rect x="39" y="30" width="1.05" height="1.05" fill="#B5E474"/><rect x="40" y="30" width="1.05" height="1.05" fill="#8DE383"/><rect x="41" y="30" width="1.05" height="1.05" fill="#333333"/><rect x="42" y="30" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="11" y="31" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="12" y="31" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="13" y="31" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="14" y="31" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="15" y="31" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="16" y="31" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="17" y="31" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="18" y="31" width="1.05" height="1.05" fill="#D81B60"/><rect x="19" y="31" width="1.05" height="1.05" fill="#333333"/><rect x="20" y="31" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="22" y="31" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="23" y="31" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="24" y="31" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="25" y="31" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="26" y="31" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="27" y="31" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="28" y="31" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="29" y="31" width="1.05" height="1.05" fill="#D81B60"/><rect x="30" y="31" width="1.05" height="1.05" fill="#333333"/><rect x="31" y="31" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="33" y="31" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="34" y="31" width="1.05" height="1.05" fill="#B5E474"/><rect x="35" y="31" width="1.05" height="1.05" fill="#E3F9C6"/><rect x="36" y="31" width="1.05" height="1.05" fill="#B5E474"/><rect x="37" y="31" width="1.05" height="1.05" fill="#B5E474"/><rect x="38" y="31" width="1.05" height="1.05" fill="#B5E474"/><rect x="39" y="31" width="1.05" height="1.05" fill="#B5E474"/><rect x="40" y="31" width="1.05" height="1.05" fill="#8DE383"/><rect x="41" y="31" width="1.05" height="1.05" fill="#333333"/><rect x="42" y="31" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="11" y="32" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="12" y="32" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="13" y="32" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="14" y="32" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="15" y="32" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="16" y="32" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="17" y="32" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="18" y="32" width="1.05" height="1.05" fill="#D81B60"/><rect x="19" y="32" width="1.05" height="1.05" fill="#333333"/><rect x="20" y="32" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="22" y="32" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="23" y="32" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="24" y="32" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="25" y="32" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="26" y="32" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="27" y="32" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="28" y="32" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="29" y="32" width="1.05" height="1.05" fill="#D81B60"/><rect x="30" y="32" width="1.05" height="1.05" fill="#333333"/><rect x="31" y="32" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="33" y="32" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="34" y="32" width="1.05" height="1.05" fill="#B5E474"/><rect x="35" y="32" width="1.05" height="1.05" fill="#E3F9C6"/><rect x="36" y="32" width="1.05" height="1.05" fill="#B5E474"/><rect x="37" y="32" width="1.05" height="1.05" fill="#B5E474"/><rect x="38" y="32" width="1.05" height="1.05" fill="#B5E474"/><rect x="39" y="32" width="1.05" height="1.05" fill="#B5E474"/><rect x="40" y="32" width="1.05" height="1.05" fill="#8DE383"/><rect x="41" y="32" width="1.05" height="1.05" fill="#333333"/><rect x="42" y="32" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="11" y="33" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="12" y="33" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="13" y="33" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="14" y="33" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="15" y="33" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="16" y="33" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="17" y="33" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="18" y="33" width="1.05" height="1.05" fill="#D81B60"/><rect x="19" y="33" width="1.05" height="1.05" fill="#333333"/><rect x="20" y="33" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="22" y="33" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="23" y="33" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="24" y="33" width="1.05" height="1.05" fill="#FFA6C9"/><rect x="25" y="33" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="26" y="33" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="27" y="33" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="28" y="33" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="29" y="33" width="1.05" height="1.05" fill="#D81B60"/><rect x="30" y="33" width="1.05" height="1.05" fill="#333333"/><rect x="31" y="33" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="33" y="33" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="34" y="33" width="1.05" height="1.05" fill="#B5E474"/><rect x="35" y="33" width="1.05" height="1.05" fill="#E3F9C6"/><rect x="36" y="33" width="1.05" height="1.05" fill="#B5E474"/><rect x="37" y="33" width="1.05" height="1.05" fill="#B5E474"/><rect x="38" y="33" width="1.05" height="1.05" fill="#B5E474"/><rect x="39" y="33" width="1.05" height="1.05" fill="#B5E474"/><rect x="40" y="33" width="1.05" height="1.05" fill="#8DE383"/><rect x="41" y="33" width="1.05" height="1.05" fill="#333333"/><rect x="42" y="33" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="5" y="34" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="6" y="34" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="7" y="34" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="8" y="34" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="9" y="34" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="10" y="34" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="11" y="34" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="12" y="34" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="13" y="34" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="14" y="34" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="15" y="34" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="16" y="34" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="17" y="34" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="18" y="34" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="19" y="34" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="20" y="34" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="21" y="34" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="22" y="34" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="23" y="34" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="24" y="34" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="25" y="34" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="26" y="34" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="27" y="34" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="28" y="34" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="29" y="34" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="30" y="34" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="31" y="34" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="32" y="34" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="33" y="34" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="34" y="34" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="35" y="34" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="36" y="34" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="37" y="34" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="38" y="34" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="39" y="34" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="40" y="34" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="41" y="34" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="42" y="34" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="43" y="34" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="44" y="34" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="45" y="34" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="5" y="35" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="6" y="35" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="7" y="35" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="8" y="35" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="9" y="35" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="10" y="35" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="11" y="35" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="12" y="35" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="13" y="35" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="14" y="35" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="15" y="35" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="16" y="35" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="17" y="35" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="18" y="35" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="19" y="35" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="20" y="35" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="21" y="35" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="22" y="35" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="23" y="35" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="24" y="35" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="25" y="35" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="26" y="35" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="27" y="35" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="28" y="35" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="29" y="35" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="30" y="35" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="31" y="35" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="32" y="35" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="33" y="35" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="34" y="35" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="35" y="35" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="36" y="35" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="37" y="35" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="38" y="35" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="39" y="35" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="40" y="35" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="41" y="35" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="42" y="35" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="43" y="35" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="44" y="35" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="45" y="35" width="1.05" height="1.05" fill="#1A1A1A"/></g><g className="ch-star"><rect x="39" y="1" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="38" y="2" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="39" y="2" width="1.05" height="1.05" fill="#FFC107"/><rect x="40" y="2" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="37" y="3" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="38" y="3" width="1.05" height="1.05" fill="#FFC107"/><rect x="39" y="3" width="1.05" height="1.05" fill="#FFC107"/><rect x="40" y="3" width="1.05" height="1.05" fill="#FFC107"/><rect x="41" y="3" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="38" y="4" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="39" y="4" width="1.05" height="1.05" fill="#FFC107"/><rect x="40" y="4" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="39" y="5" width="1.05" height="1.05" fill="#FF2D7A"/></g>` }} />
        <symbol id="pixel-kanban" viewBox="0 0 48 44" shapeRendering="crispEdges" dangerouslySetInnerHTML={{ __html: `<g className="eco-robot"><rect x="19" y="7" width="1.05" height="1.05" fill="#94A3B8"/><rect x="20" y="7" width="1.05" height="1.05" fill="#94A3B8"/><rect x="21" y="7" width="1.05" height="1.05" fill="#94A3B8"/><rect x="22" y="7" width="1.05" height="1.05" fill="#94A3B8"/><rect x="23" y="7" width="1.05" height="1.05" fill="#94A3B8"/><rect x="24" y="7" width="1.05" height="1.05" fill="#94A3B8"/><rect x="25" y="7" width="1.05" height="1.05" fill="#94A3B8"/><rect x="26" y="7" width="1.05" height="1.05" fill="#94A3B8"/><rect x="27" y="7" width="1.05" height="1.05" fill="#94A3B8"/><rect x="28" y="7" width="1.05" height="1.05" fill="#94A3B8"/><rect x="29" y="7" width="1.05" height="1.05" fill="#94A3B8"/><rect x="30" y="7" width="1.05" height="1.05" fill="#94A3B8"/><rect x="31" y="7" width="1.05" height="1.05" fill="#94A3B8"/><rect x="19" y="8" width="1.05" height="1.05" fill="#94A3B8"/><rect x="20" y="8" width="1.05" height="1.05" fill="#94A3B8"/><rect x="21" y="8" width="1.05" height="1.05" fill="#94A3B8"/><rect x="22" y="8" width="1.05" height="1.05" fill="#94A3B8"/><rect x="23" y="8" width="1.05" height="1.05" fill="#94A3B8"/><rect x="24" y="8" width="1.05" height="1.05" fill="#94A3B8"/><rect x="25" y="8" width="1.05" height="1.05" fill="#94A3B8"/><rect x="26" y="8" width="1.05" height="1.05" fill="#94A3B8"/><rect x="27" y="8" width="1.05" height="1.05" fill="#94A3B8"/><rect x="28" y="8" width="1.05" height="1.05" fill="#94A3B8"/><rect x="29" y="8" width="1.05" height="1.05" fill="#94A3B8"/><rect x="30" y="8" width="1.05" height="1.05" fill="#94A3B8"/><rect x="31" y="8" width="1.05" height="1.05" fill="#94A3B8"/><rect x="19" y="9" width="1.05" height="1.05" fill="#94A3B8"/><rect x="20" y="9" width="1.05" height="1.05" fill="#94A3B8"/><rect x="21" y="9" width="1.05" height="1.05" fill="#94A3B8"/><rect x="22" y="9" width="1.05" height="1.05" fill="#94A3B8"/><rect x="23" y="9" width="1.05" height="1.05" fill="#94A3B8"/><rect x="24" y="9" width="1.05" height="1.05" fill="#94A3B8"/><rect x="25" y="9" width="1.05" height="1.05" fill="#94A3B8"/><rect x="26" y="9" width="1.05" height="1.05" fill="#94A3B8"/><rect x="27" y="9" width="1.05" height="1.05" fill="#94A3B8"/><rect x="28" y="9" width="1.05" height="1.05" fill="#94A3B8"/><rect x="29" y="9" width="1.05" height="1.05" fill="#94A3B8"/><rect x="30" y="9" width="1.05" height="1.05" fill="#94A3B8"/><rect x="31" y="9" width="1.05" height="1.05" fill="#94A3B8"/><rect x="18" y="10" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="19" y="10" width="1.05" height="1.05" fill="#94A3B8"/><rect x="20" y="10" width="1.05" height="1.05" fill="#94A3B8"/><rect x="21" y="10" width="1.05" height="1.05" fill="#94A3B8"/><rect x="22" y="10" width="1.05" height="1.05" fill="#94A3B8"/><rect x="23" y="10" width="1.05" height="1.05" fill="#94A3B8"/><rect x="24" y="10" width="1.05" height="1.05" fill="#94A3B8"/><rect x="25" y="10" width="1.05" height="1.05" fill="#94A3B8"/><rect x="26" y="10" width="1.05" height="1.05" fill="#94A3B8"/><rect x="27" y="10" width="1.05" height="1.05" fill="#94A3B8"/><rect x="28" y="10" width="1.05" height="1.05" fill="#94A3B8"/><rect x="29" y="10" width="1.05" height="1.05" fill="#94A3B8"/><rect x="30" y="10" width="1.05" height="1.05" fill="#94A3B8"/><rect x="31" y="10" width="1.05" height="1.05" fill="#94A3B8"/><rect x="32" y="10" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="18" y="11" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="19" y="11" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="20" y="11" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="21" y="11" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="22" y="11" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="23" y="11" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="24" y="11" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="25" y="11" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="26" y="11" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="27" y="11" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="28" y="11" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="29" y="11" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="30" y="11" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="31" y="11" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="32" y="11" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="18" y="12" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="19" y="12" width="1.05" height="1.05" fill="#E2E8F0"/><rect x="20" y="12" width="1.05" height="1.05" fill="#E2E8F0"/><rect x="21" y="12" width="1.05" height="1.05" fill="#E2E8F0"/><rect x="22" y="12" width="1.05" height="1.05" fill="#E2E8F0"/><rect x="23" y="12" width="1.05" height="1.05" fill="#E2E8F0"/><rect x="24" y="12" width="1.05" height="1.05" fill="#E2E8F0"/><rect x="25" y="12" width="1.05" height="1.05" fill="#E2E8F0"/><rect x="26" y="12" width="1.05" height="1.05" fill="#E2E8F0"/><rect x="27" y="12" width="1.05" height="1.05" fill="#E2E8F0"/><rect x="28" y="12" width="1.05" height="1.05" fill="#E2E8F0"/><rect x="29" y="12" width="1.05" height="1.05" fill="#E2E8F0"/><rect x="30" y="12" width="1.05" height="1.05" fill="#E2E8F0"/><rect x="31" y="12" width="1.05" height="1.05" fill="#E2E8F0"/><rect x="32" y="12" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="18" y="13" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="19" y="13" width="1.05" height="1.05" fill="#E2E8F0"/><rect x="20" y="13" width="1.05" height="1.05" fill="#94A3B8"/><rect x="21" y="13" width="1.05" height="1.05" fill="#94A3B8"/><rect x="22" y="13" width="1.05" height="1.05" fill="#94A3B8"/><rect x="23" y="13" width="1.05" height="1.05" fill="#94A3B8"/><rect x="24" y="13" width="1.05" height="1.05" fill="#94A3B8"/><rect x="25" y="13" width="1.05" height="1.05" fill="#FFC107"/><rect x="26" y="13" width="1.05" height="1.05" fill="#FFC107"/><rect x="27" y="13" width="1.05" height="1.05" fill="#94A3B8"/><rect x="28" y="13" width="1.05" height="1.05" fill="#94A3B8"/><rect x="29" y="13" width="1.05" height="1.05" fill="#94A3B8"/><rect x="30" y="13" width="1.05" height="1.05" fill="#64748B"/><rect x="31" y="13" width="1.05" height="1.05" fill="#475569"/><rect x="32" y="13" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="18" y="14" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="19" y="14" width="1.05" height="1.05" fill="#E2E8F0"/><rect x="20" y="14" width="1.05" height="1.05" fill="#94A3B8"/><rect x="21" y="14" width="1.05" height="1.05" fill="#94A3B8"/><rect x="22" y="14" width="1.05" height="1.05" fill="#94A3B8"/><rect x="23" y="14" width="1.05" height="1.05" fill="#94A3B8"/><rect x="24" y="14" width="1.05" height="1.05" fill="#94A3B8"/><rect x="25" y="14" width="1.05" height="1.05" fill="#FFC107"/><rect x="26" y="14" width="1.05" height="1.05" fill="#FFC107"/><rect x="27" y="14" width="1.05" height="1.05" fill="#94A3B8"/><rect x="28" y="14" width="1.05" height="1.05" fill="#94A3B8"/><rect x="29" y="14" width="1.05" height="1.05" fill="#94A3B8"/><rect x="30" y="14" width="1.05" height="1.05" fill="#64748B"/><rect x="31" y="14" width="1.05" height="1.05" fill="#475569"/><rect x="32" y="14" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="18" y="15" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="19" y="15" width="1.05" height="1.05" fill="#E2E8F0"/><rect x="20" y="15" width="1.05" height="1.05" fill="#94A3B8"/><rect x="21" y="15" width="1.05" height="1.05" fill="#94A3B8"/><rect x="22" y="15" width="1.05" height="1.05" fill="#94A3B8"/><rect x="23" y="15" width="1.05" height="1.05" fill="#94A3B8"/><rect x="24" y="15" width="1.05" height="1.05" fill="#94A3B8"/><rect x="25" y="15" width="1.05" height="1.05" fill="#94A3B8"/><rect x="26" y="15" width="1.05" height="1.05" fill="#94A3B8"/><rect x="27" y="15" width="1.05" height="1.05" fill="#94A3B8"/><rect x="28" y="15" width="1.05" height="1.05" fill="#94A3B8"/><rect x="29" y="15" width="1.05" height="1.05" fill="#94A3B8"/><rect x="30" y="15" width="1.05" height="1.05" fill="#64748B"/><rect x="31" y="15" width="1.05" height="1.05" fill="#475569"/><rect x="32" y="15" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="18" y="16" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="19" y="16" width="1.05" height="1.05" fill="#E2E8F0"/><rect x="20" y="16" width="1.05" height="1.05" fill="#94A3B8"/><rect x="21" y="16" width="1.05" height="1.05" fill="#94A3B8"/><rect x="22" y="16" width="1.05" height="1.05" fill="#94A3B8"/><rect x="23" y="16" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="24" y="16" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="25" y="16" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="26" y="16" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="27" y="16" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="28" y="16" width="1.05" height="1.05" fill="#94A3B8"/><rect x="29" y="16" width="1.05" height="1.05" fill="#94A3B8"/><rect x="30" y="16" width="1.05" height="1.05" fill="#64748B"/><rect x="31" y="16" width="1.05" height="1.05" fill="#475569"/><rect x="32" y="16" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="18" y="17" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="19" y="17" width="1.05" height="1.05" fill="#E2E8F0"/><rect x="20" y="17" width="1.05" height="1.05" fill="#94A3B8"/><rect x="21" y="17" width="1.05" height="1.05" fill="#94A3B8"/><rect x="22" y="17" width="1.05" height="1.05" fill="#94A3B8"/><rect x="23" y="17" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="24" y="17" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="25" y="17" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="26" y="17" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="27" y="17" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="28" y="17" width="1.05" height="1.05" fill="#94A3B8"/><rect x="29" y="17" width="1.05" height="1.05" fill="#94A3B8"/><rect x="30" y="17" width="1.05" height="1.05" fill="#64748B"/><rect x="31" y="17" width="1.05" height="1.05" fill="#475569"/><rect x="32" y="17" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="18" y="18" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="19" y="18" width="1.05" height="1.05" fill="#E2E8F0"/><rect x="20" y="18" width="1.05" height="1.05" fill="#94A3B8"/><rect x="21" y="18" width="1.05" height="1.05" fill="#94A3B8"/><rect x="22" y="18" width="1.05" height="1.05" fill="#94A3B8"/><rect x="23" y="18" width="1.05" height="1.05" fill="#94A3B8"/><rect x="24" y="18" width="1.05" height="1.05" fill="#94A3B8"/><rect x="25" y="18" width="1.05" height="1.05" fill="#94A3B8"/><rect x="26" y="18" width="1.05" height="1.05" fill="#94A3B8"/><rect x="27" y="18" width="1.05" height="1.05" fill="#94A3B8"/><rect x="28" y="18" width="1.05" height="1.05" fill="#94A3B8"/><rect x="29" y="18" width="1.05" height="1.05" fill="#94A3B8"/><rect x="30" y="18" width="1.05" height="1.05" fill="#64748B"/><rect x="31" y="18" width="1.05" height="1.05" fill="#475569"/><rect x="32" y="18" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="18" y="19" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="19" y="19" width="1.05" height="1.05" fill="#E2E8F0"/><rect x="20" y="19" width="1.05" height="1.05" fill="#94A3B8"/><rect x="21" y="19" width="1.05" height="1.05" fill="#94A3B8"/><rect x="22" y="19" width="1.05" height="1.05" fill="#94A3B8"/><rect x="23" y="19" width="1.05" height="1.05" fill="#94A3B8"/><rect x="24" y="19" width="1.05" height="1.05" fill="#94A3B8"/><rect x="25" y="19" width="1.05" height="1.05" fill="#94A3B8"/><rect x="26" y="19" width="1.05" height="1.05" fill="#94A3B8"/><rect x="27" y="19" width="1.05" height="1.05" fill="#94A3B8"/><rect x="28" y="19" width="1.05" height="1.05" fill="#94A3B8"/><rect x="29" y="19" width="1.05" height="1.05" fill="#94A3B8"/><rect x="30" y="19" width="1.05" height="1.05" fill="#64748B"/><rect x="31" y="19" width="1.05" height="1.05" fill="#475569"/><rect x="32" y="19" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="18" y="20" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="19" y="20" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="20" y="20" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="21" y="20" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="22" y="20" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="23" y="20" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="24" y="20" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="25" y="20" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="26" y="20" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="27" y="20" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="28" y="20" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="29" y="20" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="30" y="20" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="31" y="20" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="32" y="20" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="18" y="21" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="19" y="21" width="1.05" height="1.05" fill="#E2E8F0"/><rect x="20" y="21" width="1.05" height="1.05" fill="#E2E8F0"/><rect x="21" y="21" width="1.05" height="1.05" fill="#E2E8F0"/><rect x="22" y="21" width="1.05" height="1.05" fill="#E2E8F0"/><rect x="23" y="21" width="1.05" height="1.05" fill="#E2E8F0"/><rect x="24" y="21" width="1.05" height="1.05" fill="#E2E8F0"/><rect x="25" y="21" width="1.05" height="1.05" fill="#E2E8F0"/><rect x="26" y="21" width="1.05" height="1.05" fill="#E2E8F0"/><rect x="27" y="21" width="1.05" height="1.05" fill="#E2E8F0"/><rect x="28" y="21" width="1.05" height="1.05" fill="#E2E8F0"/><rect x="29" y="21" width="1.05" height="1.05" fill="#E2E8F0"/><rect x="30" y="21" width="1.05" height="1.05" fill="#E2E8F0"/><rect x="31" y="21" width="1.05" height="1.05" fill="#E2E8F0"/><rect x="32" y="21" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="18" y="22" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="19" y="22" width="1.05" height="1.05" fill="#E2E8F0"/><rect x="20" y="22" width="1.05" height="1.05" fill="#94A3B8"/><rect x="21" y="22" width="1.05" height="1.05" fill="#94A3B8"/><rect x="22" y="22" width="1.05" height="1.05" fill="#94A3B8"/><rect x="23" y="22" width="1.05" height="1.05" fill="#94A3B8"/><rect x="24" y="22" width="1.05" height="1.05" fill="#94A3B8"/><rect x="25" y="22" width="1.05" height="1.05" fill="#FFC107"/><rect x="26" y="22" width="1.05" height="1.05" fill="#FFC107"/><rect x="27" y="22" width="1.05" height="1.05" fill="#94A3B8"/><rect x="28" y="22" width="1.05" height="1.05" fill="#94A3B8"/><rect x="29" y="22" width="1.05" height="1.05" fill="#94A3B8"/><rect x="30" y="22" width="1.05" height="1.05" fill="#64748B"/><rect x="31" y="22" width="1.05" height="1.05" fill="#475569"/><rect x="32" y="22" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="18" y="23" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="19" y="23" width="1.05" height="1.05" fill="#E2E8F0"/><rect x="20" y="23" width="1.05" height="1.05" fill="#94A3B8"/><rect x="21" y="23" width="1.05" height="1.05" fill="#94A3B8"/><rect x="22" y="23" width="1.05" height="1.05" fill="#94A3B8"/><rect x="23" y="23" width="1.05" height="1.05" fill="#94A3B8"/><rect x="24" y="23" width="1.05" height="1.05" fill="#94A3B8"/><rect x="25" y="23" width="1.05" height="1.05" fill="#FFC107"/><rect x="26" y="23" width="1.05" height="1.05" fill="#FFC107"/><rect x="27" y="23" width="1.05" height="1.05" fill="#94A3B8"/><rect x="28" y="23" width="1.05" height="1.05" fill="#94A3B8"/><rect x="29" y="23" width="1.05" height="1.05" fill="#94A3B8"/><rect x="30" y="23" width="1.05" height="1.05" fill="#64748B"/><rect x="31" y="23" width="1.05" height="1.05" fill="#475569"/><rect x="32" y="23" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="18" y="24" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="19" y="24" width="1.05" height="1.05" fill="#E2E8F0"/><rect x="20" y="24" width="1.05" height="1.05" fill="#94A3B8"/><rect x="21" y="24" width="1.05" height="1.05" fill="#94A3B8"/><rect x="22" y="24" width="1.05" height="1.05" fill="#94A3B8"/><rect x="23" y="24" width="1.05" height="1.05" fill="#94A3B8"/><rect x="24" y="24" width="1.05" height="1.05" fill="#94A3B8"/><rect x="25" y="24" width="1.05" height="1.05" fill="#94A3B8"/><rect x="26" y="24" width="1.05" height="1.05" fill="#94A3B8"/><rect x="27" y="24" width="1.05" height="1.05" fill="#94A3B8"/><rect x="28" y="24" width="1.05" height="1.05" fill="#94A3B8"/><rect x="29" y="24" width="1.05" height="1.05" fill="#94A3B8"/><rect x="30" y="24" width="1.05" height="1.05" fill="#64748B"/><rect x="31" y="24" width="1.05" height="1.05" fill="#475569"/><rect x="32" y="24" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="18" y="25" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="19" y="25" width="1.05" height="1.05" fill="#E2E8F0"/><rect x="20" y="25" width="1.05" height="1.05" fill="#94A3B8"/><rect x="21" y="25" width="1.05" height="1.05" fill="#94A3B8"/><rect x="22" y="25" width="1.05" height="1.05" fill="#94A3B8"/><rect x="23" y="25" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="24" y="25" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="25" y="25" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="26" y="25" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="27" y="25" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="28" y="25" width="1.05" height="1.05" fill="#94A3B8"/><rect x="29" y="25" width="1.05" height="1.05" fill="#94A3B8"/><rect x="30" y="25" width="1.05" height="1.05" fill="#64748B"/><rect x="31" y="25" width="1.05" height="1.05" fill="#475569"/><rect x="32" y="25" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="18" y="26" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="19" y="26" width="1.05" height="1.05" fill="#E2E8F0"/><rect x="20" y="26" width="1.05" height="1.05" fill="#94A3B8"/><rect x="21" y="26" width="1.05" height="1.05" fill="#94A3B8"/><rect x="22" y="26" width="1.05" height="1.05" fill="#94A3B8"/><rect x="23" y="26" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="24" y="26" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="25" y="26" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="26" y="26" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="27" y="26" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="28" y="26" width="1.05" height="1.05" fill="#94A3B8"/><rect x="29" y="26" width="1.05" height="1.05" fill="#94A3B8"/><rect x="30" y="26" width="1.05" height="1.05" fill="#64748B"/><rect x="31" y="26" width="1.05" height="1.05" fill="#475569"/><rect x="32" y="26" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="18" y="27" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="19" y="27" width="1.05" height="1.05" fill="#E2E8F0"/><rect x="20" y="27" width="1.05" height="1.05" fill="#94A3B8"/><rect x="21" y="27" width="1.05" height="1.05" fill="#94A3B8"/><rect x="22" y="27" width="1.05" height="1.05" fill="#94A3B8"/><rect x="23" y="27" width="1.05" height="1.05" fill="#94A3B8"/><rect x="24" y="27" width="1.05" height="1.05" fill="#94A3B8"/><rect x="25" y="27" width="1.05" height="1.05" fill="#94A3B8"/><rect x="26" y="27" width="1.05" height="1.05" fill="#94A3B8"/><rect x="27" y="27" width="1.05" height="1.05" fill="#94A3B8"/><rect x="28" y="27" width="1.05" height="1.05" fill="#94A3B8"/><rect x="29" y="27" width="1.05" height="1.05" fill="#94A3B8"/><rect x="30" y="27" width="1.05" height="1.05" fill="#64748B"/><rect x="31" y="27" width="1.05" height="1.05" fill="#475569"/><rect x="32" y="27" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="18" y="28" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="19" y="28" width="1.05" height="1.05" fill="#E2E8F0"/><rect x="20" y="28" width="1.05" height="1.05" fill="#94A3B8"/><rect x="21" y="28" width="1.05" height="1.05" fill="#94A3B8"/><rect x="22" y="28" width="1.05" height="1.05" fill="#94A3B8"/><rect x="23" y="28" width="1.05" height="1.05" fill="#94A3B8"/><rect x="24" y="28" width="1.05" height="1.05" fill="#94A3B8"/><rect x="25" y="28" width="1.05" height="1.05" fill="#94A3B8"/><rect x="26" y="28" width="1.05" height="1.05" fill="#94A3B8"/><rect x="27" y="28" width="1.05" height="1.05" fill="#94A3B8"/><rect x="28" y="28" width="1.05" height="1.05" fill="#94A3B8"/><rect x="29" y="28" width="1.05" height="1.05" fill="#94A3B8"/><rect x="30" y="28" width="1.05" height="1.05" fill="#64748B"/><rect x="31" y="28" width="1.05" height="1.05" fill="#475569"/><rect x="32" y="28" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="18" y="29" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="19" y="29" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="20" y="29" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="21" y="29" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="22" y="29" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="23" y="29" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="24" y="29" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="25" y="29" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="26" y="29" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="27" y="29" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="28" y="29" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="29" y="29" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="30" y="29" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="31" y="29" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="32" y="29" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="18" y="30" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="19" y="30" width="1.05" height="1.05" fill="#E2E8F0"/><rect x="20" y="30" width="1.05" height="1.05" fill="#E2E8F0"/><rect x="21" y="30" width="1.05" height="1.05" fill="#E2E8F0"/><rect x="22" y="30" width="1.05" height="1.05" fill="#E2E8F0"/><rect x="23" y="30" width="1.05" height="1.05" fill="#E2E8F0"/><rect x="24" y="30" width="1.05" height="1.05" fill="#E2E8F0"/><rect x="25" y="30" width="1.05" height="1.05" fill="#E2E8F0"/><rect x="26" y="30" width="1.05" height="1.05" fill="#E2E8F0"/><rect x="27" y="30" width="1.05" height="1.05" fill="#E2E8F0"/><rect x="28" y="30" width="1.05" height="1.05" fill="#E2E8F0"/><rect x="29" y="30" width="1.05" height="1.05" fill="#E2E8F0"/><rect x="30" y="30" width="1.05" height="1.05" fill="#E2E8F0"/><rect x="31" y="30" width="1.05" height="1.05" fill="#E2E8F0"/><rect x="32" y="30" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="18" y="31" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="19" y="31" width="1.05" height="1.05" fill="#E2E8F0"/><rect x="20" y="31" width="1.05" height="1.05" fill="#94A3B8"/><rect x="21" y="31" width="1.05" height="1.05" fill="#94A3B8"/><rect x="22" y="31" width="1.05" height="1.05" fill="#94A3B8"/><rect x="23" y="31" width="1.05" height="1.05" fill="#94A3B8"/><rect x="24" y="31" width="1.05" height="1.05" fill="#94A3B8"/><rect x="25" y="31" width="1.05" height="1.05" fill="#FFC107"/><rect x="26" y="31" width="1.05" height="1.05" fill="#FFC107"/><rect x="27" y="31" width="1.05" height="1.05" fill="#94A3B8"/><rect x="28" y="31" width="1.05" height="1.05" fill="#94A3B8"/><rect x="29" y="31" width="1.05" height="1.05" fill="#94A3B8"/><rect x="30" y="31" width="1.05" height="1.05" fill="#64748B"/><rect x="31" y="31" width="1.05" height="1.05" fill="#475569"/><rect x="32" y="31" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="18" y="32" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="19" y="32" width="1.05" height="1.05" fill="#E2E8F0"/><rect x="20" y="32" width="1.05" height="1.05" fill="#94A3B8"/><rect x="21" y="32" width="1.05" height="1.05" fill="#94A3B8"/><rect x="22" y="32" width="1.05" height="1.05" fill="#94A3B8"/><rect x="23" y="32" width="1.05" height="1.05" fill="#94A3B8"/><rect x="24" y="32" width="1.05" height="1.05" fill="#94A3B8"/><rect x="25" y="32" width="1.05" height="1.05" fill="#FFC107"/><rect x="26" y="32" width="1.05" height="1.05" fill="#FFC107"/><rect x="27" y="32" width="1.05" height="1.05" fill="#94A3B8"/><rect x="28" y="32" width="1.05" height="1.05" fill="#94A3B8"/><rect x="29" y="32" width="1.05" height="1.05" fill="#94A3B8"/><rect x="30" y="32" width="1.05" height="1.05" fill="#64748B"/><rect x="31" y="32" width="1.05" height="1.05" fill="#475569"/><rect x="32" y="32" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="18" y="33" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="19" y="33" width="1.05" height="1.05" fill="#E2E8F0"/><rect x="20" y="33" width="1.05" height="1.05" fill="#94A3B8"/><rect x="21" y="33" width="1.05" height="1.05" fill="#94A3B8"/><rect x="22" y="33" width="1.05" height="1.05" fill="#94A3B8"/><rect x="23" y="33" width="1.05" height="1.05" fill="#94A3B8"/><rect x="24" y="33" width="1.05" height="1.05" fill="#94A3B8"/><rect x="25" y="33" width="1.05" height="1.05" fill="#94A3B8"/><rect x="26" y="33" width="1.05" height="1.05" fill="#94A3B8"/><rect x="27" y="33" width="1.05" height="1.05" fill="#94A3B8"/><rect x="28" y="33" width="1.05" height="1.05" fill="#94A3B8"/><rect x="29" y="33" width="1.05" height="1.05" fill="#94A3B8"/><rect x="30" y="33" width="1.05" height="1.05" fill="#64748B"/><rect x="31" y="33" width="1.05" height="1.05" fill="#475569"/><rect x="32" y="33" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="18" y="34" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="19" y="34" width="1.05" height="1.05" fill="#E2E8F0"/><rect x="20" y="34" width="1.05" height="1.05" fill="#94A3B8"/><rect x="21" y="34" width="1.05" height="1.05" fill="#94A3B8"/><rect x="22" y="34" width="1.05" height="1.05" fill="#94A3B8"/><rect x="23" y="34" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="24" y="34" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="25" y="34" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="26" y="34" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="27" y="34" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="28" y="34" width="1.05" height="1.05" fill="#94A3B8"/><rect x="29" y="34" width="1.05" height="1.05" fill="#94A3B8"/><rect x="30" y="34" width="1.05" height="1.05" fill="#64748B"/><rect x="31" y="34" width="1.05" height="1.05" fill="#475569"/><rect x="32" y="34" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="18" y="35" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="19" y="35" width="1.05" height="1.05" fill="#E2E8F0"/><rect x="20" y="35" width="1.05" height="1.05" fill="#94A3B8"/><rect x="21" y="35" width="1.05" height="1.05" fill="#94A3B8"/><rect x="22" y="35" width="1.05" height="1.05" fill="#94A3B8"/><rect x="23" y="35" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="24" y="35" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="25" y="35" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="26" y="35" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="27" y="35" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="28" y="35" width="1.05" height="1.05" fill="#94A3B8"/><rect x="29" y="35" width="1.05" height="1.05" fill="#94A3B8"/><rect x="30" y="35" width="1.05" height="1.05" fill="#64748B"/><rect x="31" y="35" width="1.05" height="1.05" fill="#475569"/><rect x="32" y="35" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="18" y="36" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="19" y="36" width="1.05" height="1.05" fill="#E2E8F0"/><rect x="20" y="36" width="1.05" height="1.05" fill="#94A3B8"/><rect x="21" y="36" width="1.05" height="1.05" fill="#94A3B8"/><rect x="22" y="36" width="1.05" height="1.05" fill="#94A3B8"/><rect x="23" y="36" width="1.05" height="1.05" fill="#94A3B8"/><rect x="24" y="36" width="1.05" height="1.05" fill="#94A3B8"/><rect x="25" y="36" width="1.05" height="1.05" fill="#94A3B8"/><rect x="26" y="36" width="1.05" height="1.05" fill="#94A3B8"/><rect x="27" y="36" width="1.05" height="1.05" fill="#94A3B8"/><rect x="28" y="36" width="1.05" height="1.05" fill="#94A3B8"/><rect x="29" y="36" width="1.05" height="1.05" fill="#94A3B8"/><rect x="30" y="36" width="1.05" height="1.05" fill="#64748B"/><rect x="31" y="36" width="1.05" height="1.05" fill="#475569"/><rect x="32" y="36" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="18" y="37" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="19" y="37" width="1.05" height="1.05" fill="#E2E8F0"/><rect x="20" y="37" width="1.05" height="1.05" fill="#94A3B8"/><rect x="21" y="37" width="1.05" height="1.05" fill="#94A3B8"/><rect x="22" y="37" width="1.05" height="1.05" fill="#94A3B8"/><rect x="23" y="37" width="1.05" height="1.05" fill="#94A3B8"/><rect x="24" y="37" width="1.05" height="1.05" fill="#94A3B8"/><rect x="25" y="37" width="1.05" height="1.05" fill="#94A3B8"/><rect x="26" y="37" width="1.05" height="1.05" fill="#94A3B8"/><rect x="27" y="37" width="1.05" height="1.05" fill="#94A3B8"/><rect x="28" y="37" width="1.05" height="1.05" fill="#94A3B8"/><rect x="29" y="37" width="1.05" height="1.05" fill="#94A3B8"/><rect x="30" y="37" width="1.05" height="1.05" fill="#64748B"/><rect x="31" y="37" width="1.05" height="1.05" fill="#475569"/><rect x="32" y="37" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="18" y="38" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="19" y="38" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="20" y="38" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="21" y="38" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="22" y="38" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="23" y="38" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="24" y="38" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="25" y="38" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="26" y="38" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="27" y="38" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="28" y="38" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="29" y="38" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="30" y="38" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="31" y="38" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="32" y="38" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="19" y="39" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="20" y="39" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="21" y="39" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="29" y="39" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="30" y="39" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="31" y="39" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="19" y="40" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="20" y="40" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="21" y="40" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="29" y="40" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="30" y="40" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="31" y="40" width="1.05" height="1.05" fill="#1A1A1A"/></g><g className="folders-anim"><rect x="23" y="3" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="24" y="3" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="25" y="3" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="26" y="3" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="27" y="3" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="21" y="4" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="22" y="4" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="23" y="4" width="1.05" height="1.05" fill="#FFC107"/><rect x="24" y="4" width="1.05" height="1.05" fill="#FFC107"/><rect x="25" y="4" width="1.05" height="1.05" fill="#FFC107"/><rect x="26" y="4" width="1.05" height="1.05" fill="#FFC107"/><rect x="27" y="4" width="1.05" height="1.05" fill="#FFC107"/><rect x="28" y="4" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="29" y="4" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="20" y="5" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="21" y="5" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="22" y="5" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="23" y="5" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="24" y="5" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="25" y="5" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="26" y="5" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="27" y="5" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="28" y="5" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="29" y="5" width="1.05" height="1.05" fill="#FF2D7A"/><rect x="30" y="5" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="19" y="6" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="20" y="6" width="1.05" height="1.05" fill="#8DE383"/><rect x="21" y="6" width="1.05" height="1.05" fill="#8DE383"/><rect x="22" y="6" width="1.05" height="1.05" fill="#8DE383"/><rect x="23" y="6" width="1.05" height="1.05" fill="#8DE383"/><rect x="24" y="6" width="1.05" height="1.05" fill="#8DE383"/><rect x="25" y="6" width="1.05" height="1.05" fill="#8DE383"/><rect x="26" y="6" width="1.05" height="1.05" fill="#8DE383"/><rect x="27" y="6" width="1.05" height="1.05" fill="#8DE383"/><rect x="28" y="6" width="1.05" height="1.05" fill="#8DE383"/><rect x="29" y="6" width="1.05" height="1.05" fill="#8DE383"/><rect x="30" y="6" width="1.05" height="1.05" fill="#8DE383"/><rect x="31" y="6" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="18" y="7" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="32" y="7" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="18" y="8" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="32" y="8" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="18" y="9" width="1.05" height="1.05" fill="#1A1A1A"/><rect x="32" y="9" width="1.05" height="1.05" fill="#1A1A1A"/></g>` }} />

        <symbol id="pixel-paw" viewBox="0 0 11 11">
          <rect x="2" y="1" width="2" height="3" fill="#FF2D7A" opacity="0.25"/>
          <rect x="7" y="1" width="2" height="3" fill="#FF2D7A" opacity="0.25"/>
          <rect x="0" y="4" width="2" height="3" fill="#FF2D7A" opacity="0.25"/>
          <rect x="9" y="4" width="2" height="3" fill="#FF2D7A" opacity="0.25"/>
          <path d="M3 5h5v4H3z" fill="#FF2D7A" opacity="0.25"/>
          <rect x="4" y="9" width="3" height="1" fill="#FF2D7A" opacity="0.25"/>
          <rect x="2" y="6" width="1" height="2" fill="#FF2D7A" opacity="0.25"/>
          <rect x="8" y="6" width="1" height="2" fill="#FF2D7A" opacity="0.25"/>
        </symbol>
        <symbol id="pixel-heart" viewBox="0 0 11 11">
          <path fill="#D65A8D" d="M2 1h2v1h1v1h1V2h2V1h2v2h1v3h-1v2h-2v1H7v1H6v1H5v-1H4V9H2V8H1V6H0V3h1V2h1z"/>
          <path fill="#FFA6C9" d="M2 2h2v1h3V2h2v2h1v2h-1v2H7V7H6V8H5V7H4v1H2V6H1V4h1z"/>
          <path fill="#FFFFFF" d="M2 3h1v1H2z M3 2h1v1H3z"/>
        </symbol>
        <symbol id="pixel-coin" viewBox="0 0 12 12">
          <path fill="#B8860B" d="M4 1h4v1h2v2h1v4h-1v2h-2v1H4v-1H2V8H1V4h1V2h2z"/>
          <path fill="#FFD700" d="M4 2h4v1h1v4h-1v1H4V7H3V3h1z"/>
          <path fill="#FFF2CC" d="M4 2h3v1H4z M3 3h1v2H3z"/>
          <path fill="#DAA520" d="M5 4h2v1H5z M5 6h2v1H5z"/>
        </symbol>
        <symbol id="cloud" viewBox="0 0 24 24">
          <path fill="#FFFFFF" d="M17.5 19c2.48 0 4.5-2.02 4.5-4.5 0-2.31-1.74-4.2-3.98-4.46A6.98 6.98 0 0 0 11.5 5 7 7 0 0 0 4.6 10.4C2.04 10.65 0 12.8 0 15.5 0 18.25 2.25 20.5 5 20.5h12.5z"/>
        </symbol>
        <symbol id="sparkle" viewBox="0 0 24 24">
          <path fill="#FFC107" d="M12 0l2.5 8.5L23 11l-8.5 2.5L12 22l-2.5-8.5L1 11l8.5-2.5L12 0z"/>
        </symbol>
      </svg>

      <svg className="bg-decor" style={{top: 50, left: 20, width: 60, height: 30}}><use href="#cloud"/></svg>
      <svg className="bg-decor" style={{top: 150, right: 20, width: 80, height: 40}}><use href="#cloud"/></svg>
      <svg className="bg-decor" style={{top: 800, left: -10, width: 50, height: 25}}><use href="#cloud"/></svg>
      <svg className="bg-decor" style={{top: 1400, right: 30, width: 70, height: 35}}><use href="#cloud"/></svg>
      <svg className="bg-decor" style={{top: 2200, left: 20, width: 60, height: 30}}><use href="#cloud"/></svg>
      <svg className="bg-decor" style={{top: 100, right: 50, width: 16, height: 16}}><use href="#sparkle"/></svg>
      <svg className="bg-decor" style={{top: 600, left: 30, width: 20, height: 20}}><use href="#sparkle"/></svg>
      <svg className="bg-decor" style={{top: 1200, right: 40, width: 14, height: 14}}><use href="#sparkle"/></svg>

      <div className="journey-track" ref={trackContainerRef}>
        <div className="doghouse-container">
          <svg style={{width: '100%', height: '100%'}}><use href="#pixel-doghouse"/></svg>
        </div>
        
        <div className="svg-track-container">
          <svg id="journey-svg" style={{width: '100%', height: '100%'}} ref={svgContainerRef}>
            <defs>
              <mask id="draw-mask">
                <path id="draw-mask-path" ref={drawMaskPathRef} stroke="white" strokeWidth="16" fill="none" />
              </mask>
            </defs>
            <path id="dashed-path" ref={dashedPathRef} stroke="#FF2D7A" strokeWidth="2.5" strokeDasharray="8 10" strokeLinecap="round" fill="none" mask="url(#draw-mask)" />
          </svg>
        </div>

        <div id="paws-container" ref={pawsContainerRef}></div>
        <div id="collectibles-container" ref={collContainerRef}></div>

        {/* OS 10 CARDS */}
        <article className="card left" ref={addToCards}>
          <div className="card-num-badge">1</div>
          <div className="card-content">
            <div className="card-image-large"><svg className="animated-float"><use href="#pixel-trophy-cash"/></svg></div>
            <div className="card-text">
              <h2 className="card-title">Seja premiada <br/><span className="text-pink">por viralizar</span></h2>
              <p className="card-desc">Poste, cresça e concorra a prêmios em dinheiro de até R$ 5 mil dentro do app.</p>
            </div>
          </div>
        </article>

        <article className="card right" ref={addToCards}>
          <div className="card-num-badge">2</div>
          <div className="card-content">
            <div className="card-image-large"><svg style={{overflow: 'visible'}}><use href="#pixel-ecosystem"/></svg></div>
            <div className="card-text">
              <h2 className="card-title">Tenha um ecossistema <br/><span className="text-pink">completo em um só lugar</span></h2>
              <p className="card-desc">Curso, app, IA, mentores e ferramentas virais para criar, organizar, postar e crescer.</p>
            </div>
          </div>
        </article>

        <article className="card left" ref={addToCards}>
          <div className="card-num-badge">3</div>
          <div className="card-content">
            <div className="card-image-large"><svg style={{overflow: 'visible'}}><use href="#pixel-phone-dog"/></svg></div>
            <div className="card-text">
              <h2 className="card-title">Receba roteiros virais <br/><span className="text-pink">do seu bichinho com IA</span></h2>
              <p className="card-desc">Alimente seu assistente virtual e ganhe ideias prontas adaptadas ao seu nicho.</p>
            </div>
          </div>
        </article>

        <article className="card right" ref={addToCards}>
          <div className="card-num-badge">4</div>
          <div className="card-content">
            <div className="card-image-large"><svg style={{overflow: 'visible'}}><use href="#pixel-phone-script"/></svg></div>
            <div className="card-text">
              <h2 className="card-title">Modele vídeos virais <br/><span className="text-pink">em segundos</span></h2>
              <p className="card-desc">Cole o link de um vídeo viral e receba um roteiro adaptado para o seu nicho.</p>
            </div>
          </div>
        </article>

        <article className="card left" ref={addToCards}>
          <div className="card-num-badge">5</div>
          <div className="card-content">
            <div className="card-image-large"><svg style={{overflow: 'visible'}}><use href="#pixel-ai-bot"/></svg></div>
            <div className="card-text">
              <h2 className="card-title">Use agentes de IA <br/><span className="text-pink">treinados para beleza</span></h2>
              <p className="card-desc">Crie ganchos, carrosséis, stories e roteiros com IA treinada nos formatos virais.</p>
            </div>
          </div>
        </article>

        <article className="card right" ref={addToCards}>
          <div className="card-num-badge">6</div>
          <div className="card-content">
            <div className="card-image-large"><svg style={{overflow: 'visible'}}><use href="#pixel-live-class"/></svg></div>
            <div className="card-text">
              <h2 className="card-title">Tenha aulas ao vivo <br/><span className="text-pink">e oficinas práticas</span></h2>
              <p className="card-desc">Aprenda com mentoras e aplique os formatos virais com direção e acompanhamento.</p>
            </div>
          </div>
        </article>

        <article className="card left" ref={addToCards}>
          <div className="card-num-badge">7</div>
          <div className="card-content">
            <div className="card-image-large"><svg style={{overflow: 'visible'}}><use href="#pixel-viral-video"/></svg></div>
            <div className="card-text">
              <h2 className="card-title">Grave vídeos virais <br/><span className="text-pink">sem edição difícil</span></h2>
              <p className="card-desc">Use formatos simples para gravar em menos de 1 minuto e postar com mais frequência.</p>
            </div>
          </div>
        </article>

        <article className="card right" ref={addToCards}>
          <div className="card-num-badge">8</div>
          <div className="card-content">
            <div className="card-image-large"><svg style={{overflow: 'visible'}}><use href="#pixel-zap-reminders"/></svg></div>
            <div className="card-text">
              <h2 className="card-title">Receba seus roteiros <br/><span className="text-pink">e lembretes no WhatsApp</span></h2>
              <p className="card-desc">Saiba o que gravar, quando postar e mantenha constância sem depender da memória.</p>
            </div>
          </div>
        </article>

        <article className="card left" ref={addToCards}>
          <div className="card-num-badge">9</div>
          <div className="card-content">
            <div className="card-image-large"><svg style={{overflow: 'visible'}}><use href="#pixel-chart"/></svg></div>
            <div className="card-text">
              <h2 className="card-title">Acompanhe suas <br/><span className="text-pink">métricas com clareza</span></h2>
              <p className="card-desc">Veja o que trouxe mais alcance, seguidores, clientes e alunas para repetir o que funciona.</p>
            </div>
          </div>
        </article>

        <article className="card right" ref={addToCards}>
          <div className="card-num-badge">10</div>
          <div className="card-content">
            <div className="card-image-large"><svg style={{overflow: 'visible'}}><use href="#pixel-kanban"/></svg></div>
            <div className="card-text">
              <h2 className="card-title">Organize tudo dentro <br/><span className="text-pink">do próprio app</span></h2>
              <p className="card-desc">Salve ideias, roteiros e conteúdos com biblioteca, calendário e Kanban integrados.</p>
            </div>
          </div>
        </article>

        {/* O CACHORRO ANIMADO */}
        <div className="moving-pet-container" id="walking-pet" ref={petContainerRef}>
          <div className="pet-scale-wrapper inside-house" id="pet-scale-wrapper" ref={petScaleWrapperRef}>
            <div className="pet-shadow"></div>
            <div className="pet-flipper" id="pet-flipper" ref={petFlipperRef}>
              <div className="pet-bounce">
                <svg className="pet-sprite" viewBox="0 0 20 20">
                  <use href="#dog-body"/>
                  <use href="#dog-leg-left" className="dog-leg-left"/>
                  <use href="#dog-leg-right" className="dog-leg-right"/>
                </svg>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}


const MasonryStyles = () => (
  <style>{`
    /* Estilos globais isolados removidos para não quebrar o layout */
    .list {
      position: relative;
      width: 100%;
      height: 100%;
      min-height: 800px;
    }

    .item-wrapper {
      position: absolute;
      will-change: transform, width, height, opacity;
      padding: 10px;
      cursor: pointer;
      top: 0;
      left: 0;
      box-sizing: border-box;
    }

    .item-wrapper > .item-img {
      position: relative;
      background-size: cover;
      background-position: center center;
      background-color: #2a2a2a; /* Cor de fundo de segurança caso a imagem não carregue */
      width: 100%;
      height: 100%;
      border-radius: 8px;
      box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.8);
    }
    
    .masonry-app-container {
      width: 100%;
      min-height: 100vh;
      background-color: transparent;
      padding: 20px;
      box-sizing: border-box;
    }
  `}</style>
);

/**
 * HOOKS ORIGINAIS
 */
const useMedia = (queries, values, defaultValue) => {
  const get = () => {
    if (typeof window === 'undefined') return defaultValue;
    const index = queries.findIndex(q => window.matchMedia(q).matches);
    return index !== -1 ? values[index] : defaultValue;
  };

  const [value, setValue] = React.useState(get);

  React.useEffect(() => {
    const handler = () => setValue(get);
    const mediaQueryLists = queries.map(q => window.matchMedia(q));
    
    mediaQueryLists.forEach(mql => {
      if (mql.addListener) mql.addListener(handler); // Suporte legado
      else mql.addEventListener('change', handler);
    });

    return () => {
      mediaQueryLists.forEach(mql => {
        if (mql.removeListener) mql.removeListener(handler); // Suporte legado
        else mql.removeEventListener('change', handler);
      });
    };
  }, [queries, values, defaultValue]);

  return value;
};

const useMeasure = () => {
  const ref = React.useRef(null);
  const [size, setSize] = React.useState({ width: 0, height: 0 });

  React.useLayoutEffect(() => {
    if (!ref.current) return;
    const ro = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      setSize({ width, height });
    });
    ro.observe(ref.current);
    return () => ro.disconnect();
  }, []);

  return [ref, size];
};

const preloadImages = async urls => {
  await Promise.all(
    urls.map(
      src =>
        new Promise(resolve => {
          const img = new Image();
          img.src = src;
          img.onload = img.onerror = () => resolve();
        })
    )
  );
};

/**
 * COMPONENTE MASONRY
 */
const Masonry = ({
  items,
  ease = 'power3.out',
  duration = 0.6,
  stagger = 0.05,
  animateFrom = 'bottom',
  scaleOnHover = true,
  hoverScale = 1.04,
  blurToFocus = true
}) => {
  const columns = useMedia(
    ['(min-width:1500px)', '(min-width:1000px)', '(min-width:600px)'],
    [5, 4, 3],
    2 // Alterado para padrão de 2 colunas no mobile para manter o estilo Masonry
  );

  const [containerRef, { width }] = useMeasure();
  const [imagesReady, setImagesReady] = React.useState(false);
  const [gsapReady, setGsapReady] = React.useState(false);

  React.useEffect(() => {
    if (window.gsap) {
      setGsapReady(true);
    } else {
      let script = document.querySelector('script[src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"]');
      if (!script) {
        script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js';
        script.async = true;
        document.head.appendChild(script);
      }
      
      script.addEventListener('load', () => setGsapReady(true));
    }
  }, []);

  const getInitialPosition = (item) => {
    let direction = animateFrom;
    switch (direction) {
      case 'top': return { x: item.x, y: -200 };
      case 'bottom': return { x: item.x, y: window.innerHeight + 200 };
      default: return { x: item.x, y: item.y + 100 };
    }
  };

  React.useEffect(() => {
    preloadImages(items.map(i => i.img)).then(() => setImagesReady(true));
  }, [items]);

  const { gridItems, containerHeight } = React.useMemo(() => {
    if (!width) return { gridItems: [], containerHeight: 0 };
    const colHeights = new Array(columns).fill(0);
    const columnWidth = width / columns;
    const baseWidth = 600; // Largura base das imagens do Unsplash no seu array

    const itemsPositioned = items.map(child => {
      const col = colHeights.indexOf(Math.min(...colHeights));
      const x = columnWidth * col;
      // Calcula a altura proporcionalmente à largura da coluna para manter a proporção
      const height = (columnWidth / baseWidth) * child.height; 
      const y = colHeights[col];
      colHeights[col] += height;
      return { ...child, x, y, w: columnWidth, h: height };
    });

    return { 
      gridItems: itemsPositioned, 
      containerHeight: Math.max(...colHeights) // Pega a altura da maior coluna
    };
  }, [columns, items, width]);

  const hasMounted = React.useRef(false);

  React.useLayoutEffect(() => {
    if (!imagesReady || !gsapReady || !window.gsap) return;
    const { gsap } = window;

    gridItems.forEach((item, index) => {
      const selector = `[data-key="${item.id}"]`;
      if (!hasMounted.current) {
        const initialPos = getInitialPosition(item);
        gsap.fromTo(selector, 
          { opacity: 0, x: initialPos.x, y: initialPos.y, filter: blurToFocus ? 'blur(10px)' : 'none' },
          { opacity: 1, x: item.x, y: item.y, width: item.w, height: item.h, filter: 'blur(0px)', duration: 0.8, ease: 'power3.out', delay: index * stagger }
        );
      } else {
        gsap.to(selector, { x: item.x, y: item.y, width: item.w, height: item.h, duration: duration, ease: ease, overwrite: 'auto' });
      }
    });
    if (gridItems.length > 0) hasMounted.current = true;
  }, [gridItems, imagesReady, gsapReady, stagger, animateFrom, blurToFocus, duration, ease]);

  const handleMouseEnter = (e, item) => {
    if (!window.gsap || !scaleOnHover) return;
    window.gsap.to(`[data-key="${item.id}"]`, { scale: hoverScale, duration: 0.4, ease: 'power2.out' });
  };

  const handleMouseLeave = (e, item) => {
    if (!window.gsap) return;
    window.gsap.to(`[data-key="${item.id}"]`, { scale: 1, duration: 0.4, ease: 'power2.out' });
  };

  return (
    <div ref={containerRef} className="list" style={{ height: containerHeight }}>
      {gridItems.map(item => (
        <div
          key={item.id}
          data-key={item.id}
          className="item-wrapper"
          onMouseEnter={e => handleMouseEnter(e, item)}
          onMouseLeave={e => handleMouseLeave(e, item)}
          onClick={() => window.open(item.url, '_blank')}
        >
          {/* Adicionadas aspas ao redor da URL para suportar nomes de ficheiro com espaços */}
          <div className="item-img" style={{ backgroundImage: `url("${item.img}")` }} />
        </div>
      ))}
    </div>
  );
};

/**
 * APP PRINCIPAL
 */
function MasonryApp() {
  const items = [
    { id: "1", img: "assets/prova-social-1.webp", url: "#", height: 900 },
    { id: "2", img: "assets/prova-social-2.webp", url: "#", height: 750 },
    { id: "3", img: "assets/prova-social-3.webp", url: "#", height: 800 },
    { id: "4", img: "assets/prova-social-4.webp", url: "#", height: 600 },
    { id: "5", img: "assets/prova-social-5.webp", url: "#", height: 1000 },
    { id: "6", img: "assets/prova-social-6.webp", url: "#", height: 700 },
    { id: "7", img: "assets/prova-social-7.webp", url: "#", height: 900 },
    { id: "8", img: "assets/prova-social-8.webp", url: "#", height: 560 },
    { id: "9", img: "assets/prova-social-9.webp", url: "#", height: 1100 },
    { id: "10", img: "assets/prova-social-10.webp", url: "#", height: 800 },
    { id: "11", img: "assets/prova-social-11.webp", url: "#", height: 640 },
    { id: "12", img: "assets/prova-social-12.webp", url: "#", height: 960 },
  ];

  return (
    <div className="masonry-app-container">
      <MasonryStyles />
      <Masonry
        items={items}
        ease="power3.out"
        duration={0.6}
        stagger={0.06}
        animateFrom="bottom"
        scaleOnHover={true}
        hoverScale={1.03}
        blurToFocus={true}
      />
    </div>
  );
}

Object.assign(window, {
  Journey,
  Nav, UrgencyBar, Hero, Results, BigProof, HowItWorks, WhyNotGrowing,
  Features, Creator, Testimonials, Comparison, Pricing, Guarantee, FAQ, FinalCTA, Footer,
  MasonryApp
});
