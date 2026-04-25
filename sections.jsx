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
              <span className="glitch-badge__text" data-text="SISTEMA SECRETO DE VIRALIZAÇÃO">SISTEMA SECRETO DE VIRALIZAÇÃO</span>
            </div>
            <h1 style={{ marginTop: 24, maxWidth: 800 }}>
              Viralize em
              <div style={{ margin: '8px 0 10px 0' }}>
                <span className="highlight-lime selected-text--lime" style={{ display: 'inline-flex', alignItems: 'center' }}>
                  <span className="sel-dot tl"></span><DigitalTyper /><span className="sel-dot br"></span>
                </span>
              </div>
              <span style={{ display: 'inline-block', marginTop: '-4px' }}>
                Sem edição. Sem dancinha. <span className="highlight-pink">Sem anúncio.</span>
              </span>
            </h1>
            <p className="hero-sub" style={{ maxWidth: 640 }}>
              Todos os dias roteiros virais prontos + stories que vendem e lotam agenda.
              <strong> Referência viral + App viral = crescimento acelerado</strong> do seu perfil no Instagram.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginTop: 26, textAlign: 'left', maxWidth: 640 }}>
              {[
                "90 dias de roteiros virais prontos — um por dia, já no app",
                "Copie o link de algum vídeo do seu instagram e tenha todo o roteiro para modelar em segundos",
                "Grave em 1 minuto e viralize sem esforço"
              ].map((text, i) => (
                <GlassCard key={i} text={text} index={i} />
              ))}
            </div>
            <div className="hero-meta" style={{ justifyContent: 'center' }}>
              <div className="hero-stack">
                <div className="av" /><div className="av" /><div className="av" /><div className="av" />
              </div>
              <div style={{ textAlign: 'left' }}>
                <div className="hero-stars"><span className="stars">★★★★★</span> 4,9/5</div>
                <div style={{ fontSize: 13 }}>+44.000 profissionais ativaram</div>
              </div>
            </div>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: 40, fontSize: 14, color: 'var(--ink-soft)' }}>
          <em>Garantia de 30 dias · Cancela quando quiser · Sem fidelidade</em>
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
function Results() {
  return (
    <section className="sec" id="resultados" style={{ paddingBottom: 60 }}>
      <div className="container">
        <div className="sec-head">
          <div className="lime-glass-btn">
            <div className="lime-glass-btn__sheen" />
            <span>↗</span>
            <span>RESULTADOS REAIS</span>
          </div>
          <h2>Esses perfis eram invisíveis.<br /> Hoje <span className="highlight-pink selected-text" style={{ display: 'inline-flex', alignItems: 'center' }}><span className="sel-dot tl"></span><DigitalTyper words={["são virais.", "são vistos.", "são lembrados."]} initialIndex={0} /><span className="sel-dot br"></span></span></h2>
          <p>Usaram o App Viral em 1 Minuto. Sem equipe de filmagem. Sem pagar anúncio. Sem virar blogueira de trend.</p>
        </div>

        <div className="sec-head" style={{ marginTop: 60, marginBottom: 40 }}>
          <Eyebrow icon="users">DEPOIMENTOS MOSTRANDO O PERFIL DE ALUNAS ANTES E DEPOIS</Eyebrow>
        </div>

        <div className="student-grid" style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: 24 
        }}>
          {[
            { nome: "(NOME ALUNA 1)", nicho: "(NICHO)", antes: "XXX", depois: "XXX" },
            { nome: "(NOME ALUNA 2)", nicho: "(NICHO)", antes: "XXX", depois: "XXX" },
            { nome: "(NOME ALUNA 3)", nicho: "(NICHO)", antes: "XXX", depois: "XXX" }
          ].map((s, i) => (
            <StudentCard key={i} student={s} index={i} />
          ))}
        </div>
      </div>
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
          <h2>Duas rotas. <span className="highlight-pink">Um destino: viral.</span></h2>
          <p>Pegue o link de um reel ou o roteiro do dia. Escolha quando gravar. O resto é deixar ir.</p>
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
              <h3>Copie o link, IA vira roteiro</h3>
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
              <h3>Ou abre o app</h3>
              <p>Todo dia um roteiro viral novo pronto pro formato.</p>
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

function BigProof() {
  const [count, setCount] = React.useState(0);
  const [started, setStarted] = React.useState(false);
  const sectionRef = React.useRef(null);
  const target = 44000;

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
    const duration = 2200;
    const start = performance.now();
    let raf;
    const tick = (now) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setCount(Math.round(target * eased));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [started]);

  const formatted = count.toLocaleString('pt-BR');

  return (
    <section className="sec" ref={sectionRef}>
      <div className="container">
        <div style={{ textAlign: 'center' }}>
          {/* Live activity badge */}
          <div className={`live-proof-badge ${started ? 'on' : ''}`}>
            <span className="live-pulse" />
            <div className="live-avatars">
              {PROOF_AVATARS.slice(0, 4).map((a, i) => (
                <span key={i} className="live-avatar" style={{ background: a.bg, zIndex: 4 - i }}>{a.initials}</span>
              ))}
            </div>
            <span className="live-label">PROFISSIONAIS ATIVANDO AGORA</span>
          </div>

          {/* Big number with avatars behind */}
          <div className={`proof-number-wrap ${started ? 'on' : ''}`}>
            <div className="proof-avatars-bg" aria-hidden>
              {PROOF_AVATARS.map((a, i) => (
                <span key={i} className={`proof-avatar pa-${i}`} style={{ background: a.bg }}>{a.initials}</span>
              ))}
            </div>
            <div className="proof-number">+{formatted}</div>
          </div>

          <p style={{ fontSize: 22, fontWeight: 600, maxWidth: 640, margin: '0 auto', textWrap: 'pretty' }}>
            profissionais da beleza já ativaram o <strong>Método Viral</strong>. Em todos os nichos.
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
  return (
    <section className="sec">
      <div className="container">
        <div className="sec-head">
          <Eyebrow icon="star">Quem criou</Eyebrow>
          <h2>A mente por trás do <span className="highlight-pink">Viral em 1 Minuto</span></h2>
        </div>

        <div className="creator">
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
            <img src="assets/logo-viral.webp" alt="Viral em 1 minuto" />
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

      <p style={{ color: 'var(--ink)', fontSize: 16, fontWeight: 600, lineHeight: 1.4, margin: 0 }}>
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

Object.assign(window, {
  Nav, UrgencyBar, Hero, Results, BigProof, HowItWorks, WhyNotGrowing,
  Features, Creator, Testimonials, Comparison, Pricing, Guarantee, FAQ, FinalCTA, Footer
});
