/* sections-critical.jsx
 * Contém APENAS os componentes acima do fold: Nav, UrgencyBar, Hero
 * e as dependências inline deles (InvisibleStoryAnim, GlassCard, DigitalTyper).
 * Este arquivo é compilado no bundle-critical.js (~80KB) que carrega primeiro.
 */
/* global React */
const { useState: useStateC, useEffect: useEffectC, useRef: useRefC } = React;

/* ===== Icon (subset crítico — apenas ícones usados no Hero/Nav) ===== */
function IconC({ name, size = 22, color = "currentColor" }) {
  const s = size;
  const p = { width: s, height: s, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: 2.2, strokeLinecap: "round", strokeLinejoin: "round" };
  switch (name) {
    case "rocket": return <svg {...p}><path d="M4.5 16.5c-1.5 1.3-2 5-2 5s3.7-.5 5-2c.8-.8.8-2.2 0-3s-2.2-.8-3 0ZM12 15l-3-3a22 22 0 0 1 8-11c4 0 6 2 6 6a22 22 0 0 1-11 8Z" /><circle cx="15" cy="9" r="1.5" /></svg>;
    case "play":   return <svg {...p} fill={color}><path d="M8 5v14l11-7z" stroke="none" /></svg>;
    case "eye":    return <svg {...p}><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z" /><circle cx="12" cy="12" r="3" /></svg>;
    case "zap":    return <svg {...p}><path d="M13 2 4 14h7l-1 8 9-12h-7z" /></svg>;
    case "bolt":   return <svg {...p}><path d="M13 2 4 14h7l-1 8 9-12h-7z" /></svg>;
    default: return null;
  }
}

/* ===== Btn (subset crítico) ===== */
function BtnC({ variant = "primary", size, icon, children, href = "#", onClick }) {
  const cls = `btn btn-${variant} ${size === 'lg' ? 'btn-lg' : ''}`;
  const content = <>{icon && <IconC name={icon} size={size === 'lg' ? 22 : 20} />}<span>{children}</span></>;
  return href ? <a href={href} className={cls} onClick={onClick}>{content}</a>
    : <button className={cls} onClick={onClick}>{content}</button>;
}

/* ===== Logo ===== */
function LogoC() {
  return (
    <div className="nav-logo">
      <img
        src="assets/logo-viral.webp?v=2"
        alt="Viral em 1 minuto"
        width="240"
        height="240"
        decoding="async"
        fetchpriority="high"
      />
    </div>
  );
}

/* ===== AlphaBtn ===== */
function AlphaBtnC({ href = "#", children }) {
  return (
    <a href={href} className="alpha-btn">
      <div className="shimmer-effect"></div>
      <div className="hover-overlay"></div>
      <span className="btn-content">{children}</span>
    </a>
  );
}

/* ===== DigitalTyper ===== */
function DigitalTyperC({ words = [], initialIndex = 0 }) {
  const [index, setIndex] = useStateC(initialIndex);
  const [displayed, setDisplayed] = useStateC('');
  const [phase, setPhase] = useStateC('typing');

  useEffectC(() => {
    const target = words[index] || '';
    if (phase === 'typing') {
      if (displayed.length < target.length) {
        const t = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 60);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setPhase('deleting'), 2000);
        return () => clearTimeout(t);
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
        return () => clearTimeout(t);
      } else {
        setIndex((index + 1) % words.length);
        setPhase('typing');
      }
    }
  }, [displayed, phase, index, words]);

  return <span>{displayed}<span style={{ opacity: phase === 'typing' ? 1 : 0.4 }}>|</span></span>;
}

/* ===== GlassCard (Hero bullet points) ===== */
function GlassCardC({ text, index }) {
  const [isVisible, setIsVisible] = useStateC(false);
  const cardRef = useRefC(null);

  useEffectC(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.2 }
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
          />
        )}
        {isVisible && (
          <svg
            className="animate-draw-check"
            style={{
              width: 24, height: 24, color: '#fff', position: 'relative', zIndex: 10,
              opacity: 0, strokeWidth: 3,
              animationDelay: `${checkDelay}s`, animationFillMode: 'forwards'
            }}
            fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
          >
            <polyline pathLength="1" points="20 6 9 17 4 12" />
          </svg>
        )}
      </div>
      <p style={{ color: 'var(--ink)', fontSize: 20, fontWeight: 600, lineHeight: 1.4, margin: 0 }}>{text}</p>
    </div>
  );
}

/* ===== InvisibleStoryAnim ===== */
function InvisibleStoryAnimC() {
  return (
    <div style={{ position: 'relative', width: 120, height: 100, margin: '20px auto 10px', display: 'flex', justifyContent: 'center' }}>
      <div style={{ position: 'absolute', bottom: 0, left: 15, width: 48, height: 48, zIndex: 2 }}>
        <svg width="60" height="60" viewBox="0 0 100 100" style={{ position: 'absolute', bottom: 0, left: 0, animation: 'avatarNormal 4s infinite' }}>
          <path d="M 20 50 C 15 80, 85 80, 80 50 Z" fill="#F4D03F" />
          <circle cx="50" cy="50" r="30" fill="#FAD7A1" />
          <path d="M 20 50 C 20 10, 80 10, 80 50 C 60 40, 40 40, 20 50 Z" fill="#F4D03F" />
          <circle cx="38" cy="48" r="4" fill="#333" />
          <circle cx="62" cy="48" r="4" fill="#333" />
          <path d="M 40 62 Q 50 72 60 62" fill="transparent" stroke="#333" strokeWidth="3" strokeLinecap="round" />
        </svg>
      </div>
      <svg width="24" height="38" viewBox="0 0 40 60" style={{ position: 'absolute', bottom: 0, left: 62, zIndex: 3, filter: 'drop-shadow(2px 4px 6px rgba(0,0,0,0.15))' }}>
        <rect x="2" y="2" width="36" height="56" rx="6" fill="#1A1A1A" />
        <rect x="4" y="6" width="32" height="48" rx="3" fill="#FFF4E6" />
        <rect x="10" y="14" width="20" height="20" rx="3" fill="#FF2D7A" opacity="0.8" />
        <rect x="10" y="38" width="20" height="4" rx="2" fill="#d0d0d0" />
      </svg>
    </div>
  );
}

/* ===== NAV ===== */
function Nav() {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <LogoC />
        <BtnC variant="primary" icon="rocket" href="#investimento">Ativar agora</BtnC>
      </div>
    </nav>
  );
}

/* ===== URGENCY BAR ===== */
function UrgencyBar() {
  const date = new Date().toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric' });
  return (
    <div style={{
      background: '#1a1a1a', color: '#fff', textAlign: 'center', padding: '14px 16px',
      fontFamily: 'var(--font-head)', fontWeight: 700, fontSize: 15,
      letterSpacing: '.12em', textTransform: 'uppercase', position: 'relative', zIndex: 50,
    }}>
      ESSE VÍDEO SAI DO AR HOJE, {date}
    </div>
  );
}

/* ===== HERO ===== */
function Hero({ videoUrl }) {
  const [playing, setPlaying] = useStateC(false);
  return (
    <header className="hero" style={{ paddingTop: 40 }}>
      <div className="hero-bg" />
      <div className="container">
        <div className="vsl-wrap" id="vsl" style={{ maxWidth: 420, margin: '0 auto 10px', animation: 'fadeUp 1s ease-out forwards' }}>
          <div className="vsl-frame" style={{ transform: 'none', borderRadius: 24, padding: 6, background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.4)', boxShadow: '0 24px 64px rgba(0,0,0,0.12)' }}>
            <div className="vsl-aspect" style={{ borderRadius: 18, overflow: 'hidden' }}>
              {playing && videoUrl ?
                <iframe src={videoUrl} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }} /> :
                <div className="vsl-placeholder" onClick={() => setPlaying(true)} style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, cursor: 'pointer' }}>
                  <div className="play" style={{ animation: 'pulse 2s infinite' }}>
                    <IconC name="play" size={34} color="#fff" />
                  </div>
                  <div className="cap" style={{ marginTop: 14 }}>// CLIQUE PARA ASSISTIR · VSL 04:37</div>
                </div>
              }
            </div>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginBottom: 12, animation: 'fadeUp 1s ease-out 0.1s forwards', opacity: 0 }}>
          <AlphaBtnC href="#investimento">Quero meu acesso agora</AlphaBtnC>
          <p style={{ marginTop: 18, fontSize: 16, color: 'var(--ink)', fontStyle: 'italic', fontWeight: 500, letterSpacing: '.01em', lineHeight: 1.5, maxWidth: 520, marginLeft: 'auto', marginRight: 'auto' }}>
            Você está a um clique de nunca mais ficar <strong style={{ color: 'var(--accent)', fontStyle: 'normal', fontWeight: 800 }}>invisível no Instagram</strong>
          </p>
        </div>

        <div className="hero-grid" style={{ gridTemplateColumns: '1fr', textAlign: 'center', marginTop: 72, paddingTop: 56, borderTop: '1px solid rgba(26,26,26,0.08)' }}>
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
                  <span className="sel-dot tl"></span><DigitalTyperC words={["60 segundos", "1 minuto"]} /><span className="sel-dot br"></span>
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
                  <GlassCardC
                    key={i}
                    text={
                      isSem ? (
                        <>
                          <span className="highlight-pink" style={{ display: 'inline-block', fontWeight: 800, textTransform: 'uppercase', fontSize: '0.9em', letterSpacing: '0.5px' }}>
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
    </header>
  );
}

/* Expõe globais para o app-critical.jsx */
Object.assign(window, { Nav, UrgencyBar, Hero });
