/* global React */
const { useState, useEffect, useRef } = React;

/* ===== Icons (inline SVG — simples) ===== */
function Icon({ name, size = 22, color = "currentColor" }) {
  const s = size;
  const p = { width: s, height: s, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: 2.2, strokeLinecap: "round", strokeLinejoin: "round" };
  switch (name) {
    case "bolt": return <svg {...p}><path d="M13 2 4 14h7l-1 8 9-12h-7z" /></svg>;
    case "check": return <svg {...p}><path d="M20 6 9 17l-5-5" /></svg>;
    case "x": return <svg {...p}><path d="M18 6 6 18M6 6l12 12" /></svg>;
    case "play": return <svg {...p} fill={color}><path d="M8 5v14l11-7z" stroke="none" /></svg>;
    case "arrow": return <svg {...p}><path d="M5 12h14M13 5l7 7-7 7" /></svg>;
    case "rocket": return <svg {...p}><path d="M4.5 16.5c-1.5 1.3-2 5-2 5s3.7-.5 5-2c.8-.8.8-2.2 0-3s-2.2-.8-3 0ZM12 15l-3-3a22 22 0 0 1 8-11c4 0 6 2 6 6a22 22 0 0 1-11 8Z" /><circle cx="15" cy="9" r="1.5" /></svg>;
    case "sparkles": return <svg {...p}><path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8" /></svg>;
    case "target": return <svg {...p}><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1.5" fill={color} /></svg>;
    case "chat": return <svg {...p}><path d="M21 15a2 2 0 0 1-2 2H8l-5 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>;
    case "grid": return <svg {...p}><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /></svg>;
    case "shield": return <svg {...p}><path d="M12 2 4 6v6c0 5 3.5 8.5 8 10 4.5-1.5 8-5 8-10V6z" /><path d="m9 12 2 2 4-4" /></svg>;
    case "trend": return <svg {...p}><path d="M3 17 9 11l4 4 8-8" /><path d="M17 7h4v4" /></svg>;
    case "heart": return <svg {...p}><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>;
    case "eye": return <svg {...p}><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z" /><circle cx="12" cy="12" r="3" /></svg>;
    case "infinity": return <svg {...p}><path d="M6 16c-2.2 0-4-1.8-4-4s1.8-4 4-4c3 0 5 8 8 8s4-1.8 4-4-1.8-4-4-4c-3 0-5 8-8 8z" /></svg>;
    case "clock": return <svg {...p}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>;
    case "star": return <svg {...p} fill={color}><path d="m12 2 3 7 8 1-6 5 2 8-7-4-7 4 2-8-6-5 8-1z" stroke="none" /></svg>;
    case "ig": return <svg {...p}><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill={color} /></svg>;
    case "tiktok": return <svg {...p}><path d="M16 3v3a4 4 0 0 0 4 4v3a7 7 0 0 1-4-1.3V15a6 6 0 1 1-6-6v3a3 3 0 1 0 3 3V3z" /></svg>;
    case "map": return <svg {...p}><path d="M3 6 9 4l6 2 6-2v14l-6 2-6-2-6 2z" /><path d="M9 4v16M15 6v16" /></svg>;
    case "paw": return (
      <svg width={s} height={s} viewBox="0 0 24 24" fill={color} stroke="none">
        <ellipse cx="6"  cy="9"   rx="2.1" ry="2.8" />
        <ellipse cx="10" cy="5.5" rx="2.1" ry="2.8" />
        <ellipse cx="14" cy="5.5" rx="2.1" ry="2.8" />
        <ellipse cx="18" cy="9"   rx="2.1" ry="2.8" />
        <path d="M12 10c-3.3 0-6 2.6-6 5.6 0 1.8 1 3.3 2.4 4 .9.4 1.7-.2 2.5-.6.4-.2.8-.4 1.1-.4s.7.2 1.1.4c.8.4 1.6 1 2.5.6 1.4-.7 2.4-2.2 2.4-4 0-3-2.7-5.6-6-5.6Z" />
      </svg>
    );
    default: return null;
  }
}

/* ===== Button ===== */
function Btn({ variant = "primary", size, icon, children, href = "#", onClick }) {
  const cls = `btn btn-${variant} ${size === 'lg' ? 'btn-lg' : ''}`;
  const content = <>{icon && <Icon name={icon} size={size === 'lg' ? 22 : 20} />}<span>{children}</span></>;
  return href ? <a href={href} className={cls} onClick={onClick}>{content}</a>
    : <button className={cls} onClick={onClick}>{content}</button>;
}

/* ===== Logo ===== */
function Logo() {
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

/* ===== Marquee banda preta (headline strip) ===== */
/* ===== Premium Double Marquee ===== */
function Marquee() {
  const silverItems = [
    "VIRE REFERÊNCIA", "VIRALIZE AINDA HOJE", "ROTEIROS VIRAIS DIÁRIOS", "DO ZERO AOS 10K", "SEM DANCINHA"
  ];

  const darkItems = [
    "CRESCIMENTO ACELERADO", "ENGAJAMENTO MASSIVO", "RESULTADOS REAIS", "ALGORITMO A SEU FAVOR", "MÉTODO COMPROVADO"
  ];

  const renderGroup = (items, isSilver) => (
    <div className="premium-marquee-group">
      {items.map((text, i) => (
        <div className="premium-item" key={i}>
          {isSilver && (i === 1 || i === 3) ? <span className="highlight-pink">{text}</span> : text}
          <span className="premium-dot"></span>
        </div>
      ))}
    </div>
  );

  const groups = Array.from({ length: 6 }, (_, i) => i);

  return (
    <div className="premium-marquee-wrapper">
      <div className="premium-stripe silver-band">
        <div className="premium-scroller silver">
          {groups.map(i => <React.Fragment key={`silver-${i}`}>{renderGroup(silverItems, true)}</React.Fragment>)}
        </div>
      </div>
      <div className="premium-stripe dark-band">
        <div className="premium-scroller dark">
          {groups.map(i => <React.Fragment key={`dark-${i}`}>{renderGroup(darkItems, false)}</React.Fragment>)}
        </div>
      </div>
    </div>
  );
}

/* ===== Testimonials Deck — efeito baralho que se desempilha em scroll =====
   Estado inicial: cards empilhados no centro (z-index decrescente, pequenos offsets)
   Durante scroll: cada card "voa" para uma das duas colunas (par→esquerda, ímpar→direita)
   Estado final: layout 2 colunas com cards em tamanho natural
*/
function TestiMarquee() {
  const cards = [
    { img: "assets/IMG_0488.webp", style: "" },
    { img: "assets/IMG_0489.webp", style: "lime" },
    { img: "assets/IMG_0490.webp", style: "" },
    { img: "assets/IMG_0491.webp", style: "pink" },
    { img: "assets/IMG_0492.webp", style: "" },
    { img: "assets/IMG_0493.webp", style: "lime" },
    { img: "assets/IMG_0494.webp", style: "" },
    { img: "assets/IMG_0495.webp", style: "pink" },
    { img: "assets/IMG_0496.webp", style: "" },
    { img: "assets/IMG_0499.webp", style: "" },
    { img: "assets/IMG_0500.webp", style: "pink" },
    { img: "assets/IMG_0498.webp", style: "" },
  ];

  const Card = ({ t }) => {
    let bgColor = 'var(--glass-bg)';
    let borderColor = 'var(--glass-border)';
    if (t.style === 'lime') {
      bgColor = 'rgba(200, 240, 0, 0.15)';
      borderColor = 'rgba(200, 240, 0, 0.4)';
    } else if (t.style === 'pink') {
      bgColor = 'rgba(255, 45, 122, 0.15)';
      borderColor = 'rgba(255, 45, 122, 0.4)';
    }
    return (
      <div className="deck-card-inner" style={{
        background: bgColor,
        border: `1.5px solid ${borderColor}`,
      }}>
        <img src={t.img} alt="Prova social" decoding="async" />
      </div>
    );
  };

  const sectionRef = React.useRef(null);
  const [progress, setProgress] = React.useState(0);
  const [vh, setVh] = React.useState(typeof window !== 'undefined' ? window.innerHeight : 800);
  const [isMobile, setIsMobile] = React.useState(typeof window !== 'undefined' && window.innerWidth <= 820);

  const total = cards.length;
  const cardsPerCol = Math.ceil(total / 2);
  const colOffset = isMobile ? 95 : 180;
  const cardGap = isMobile ? 280 : 340;
  const initialTopPx = isMobile ? 40 : 60;
  const animDistance = vh;
  const spreadHeightPx = cardsPerCol * cardGap + 60;
  const sectionHeightPx = animDistance + spreadHeightPx;

  React.useEffect(() => {
    let raf = 0;
    const update = () => {
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const scrolled = -rect.top;
      const p = Math.max(0, Math.min(1, scrolled / Math.max(1, window.innerHeight)));
      setProgress(p);
    };
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };
    const onResize = () => {
      setIsMobile(window.innerWidth <= 820);
      setVh(window.innerHeight);
      update();
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  const easeOut = (t) => 1 - Math.pow(1 - t, 3);

  return (
    <section ref={sectionRef} className="deck-section" style={{ height: sectionHeightPx + 'px' }}>
      {cards.map((card, i) => {
        const start = (i / total) * 0.85;
        const end = Math.min(1, start + 0.25);
        const raw = (progress - start) / (end - start);
        const t = easeOut(Math.max(0, Math.min(1, raw)));

        const isLeft = i % 2 === 0;
        const stackIdx = Math.floor(i / 2);
        const dirSign = isLeft ? -1 : 1;

        const initX = 0;
        const initY = initialTopPx + i * 4;
        const initScale = 1 - i * 0.018;

        const finalX = dirSign * colOffset;
        const finalY = animDistance + stackIdx * cardGap;
        const finalScale = 1;

        const x = initX + (finalX - initX) * t;
        const y = initY + (finalY - initY) * t;
        const scale = initScale + (finalScale - initScale) * t;

        return (
          <div
            key={i}
            className="deck-card"
            style={{
              transform: `translate3d(calc(-50% + ${x}px), ${y}px, 0) scale(${scale})`,
              zIndex: total - i + Math.round(t * 100),
            }}
          >
            <Card t={card} />
          </div>
        );
      })}
    </section>
  );
}

/* ===== Eyebrow chip ===== */
function Eyebrow({ children, icon }) {
  const isPawTrail = icon === 'paw-trail';
  return (
    <span className="eyebrow eyebrow--glass">
      <span className="eyebrow__sheen" aria-hidden="true" />
      {isPawTrail ? (
        <span className="paw-trail" aria-hidden="true">
          {[0, 1, 2, 3].map((i) => (
            <span key={i} className={`paw-trail__step paw-trail__step--${i} ${i % 2 ? 'paw-trail__step--up' : 'paw-trail__step--down'}`}>
              <Icon name="paw" size={14} />
            </span>
          ))}
        </span>
      ) : (
        icon && <span className="eyebrow__icon"><Icon name={icon} size={16} /></span>
      )}
      <span className="eyebrow__label">{children}</span>
    </span>
  );
}

/* ===== Alpha Premium Button ===== */
function AlphaBtn({ href = "#", variant, children }) {
  const cls = variant ? `alpha-btn alpha-btn--${variant}` : 'alpha-btn';
  return (
    <a href={href} className={cls}>
      <div className="shimmer-effect"></div>
      <div className="hover-overlay"></div>
      <span className="btn-content">
        {children}
      </span>
    </a>
  );
}
/* ===== Pixel Penguin ===== */
function PixelPenguin({ size = 56 }) {
  const layout = [
    "....................",
    "........BBBB........",
    "......BBBBBBBB......",
    ".....BBBBBBBBBB.....",
    "....BBBBBBBBBBBB....",
    "....BBCCCCCCCCBB....",
    "...BCCEECCCCEECCB...",
    "...BCCCCCCCCCCCCB...",
    "...BCCCCOOOOCCCCB...",
    "....BBCCCCCCCCBB....",
    "...BBBBBBBBBBBBBB...",
    "..BBCCCCCCCCCCCCBB..",
    "..BBCCCCCCCCCCCCBB..",
    "..BBCCCCCCCCCCCCBB..",
    "...BBCCCCCCCCCCBB...",
    "....BBCCCCCCCCBB....",
    ".....BBBBBBBBBB.....",
    "....OOOO....OOOO....",
    "....................",
    "...................."
  ];

  const colors = {
    B: '#2B2B35',
    C: '#FFFFFF',
    O: '#FFB84D',
    E: '#1A1A1A'
  };

  return (
    <>
      <style>{`
        @keyframes petWalk {
          0%   { transform: translateX(0) scaleX(1); }
          45%  { transform: translateX(50px) scaleX(1); }
          50%  { transform: translateX(50px) scaleX(-1); }
          95%  { transform: translateX(0) scaleX(-1); }
          100% { transform: translateX(0) scaleX(1); }
        }
        @keyframes petWaddle {
          0%, 50%, 100% { transform: translateY(0) rotate(0deg); }
          25% { transform: translateY(-4px) rotate(4deg); }
          75% { transform: translateY(-4px) rotate(-4deg); }
        }
      `}</style>
      <div style={{ animation: 'petWalk 6s infinite linear', width: 'fit-content' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(20, 1fr)',
          width: size,
          height: size,
          marginTop: 12,
          marginBottom: -4,
          animation: 'petWaddle 1s infinite linear'
        }}>
          {layout.join('').split('').map((char, i) => (
            <div key={i} style={{
              backgroundColor: char === '.' ? 'transparent' : colors[char],
              width: '100%',
              height: '100%'
            }} />
          ))}
        </div>
      </div>
    </>
  );
}

Object.assign(window, { Icon, Btn, AlphaBtn, Logo, Marquee, TestiMarquee, Eyebrow, PixelPenguin });
