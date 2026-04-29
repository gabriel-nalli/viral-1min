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
    case "heart": return <svg {...p}><path d="M20.8 7.6a5.5 5.5 0 0 0-9.3-3A5.5 5.5 0 0 0 3.2 12l8.8 8.8 8.8-8.8a5.5 5.5 0 0 0 0-4.4Z" /></svg>;
    case "eye": return <svg {...p}><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z" /><circle cx="12" cy="12" r="3" /></svg>;
    case "infinity": return <svg {...p}><path d="M6 16c-2.2 0-4-1.8-4-4s1.8-4 4-4c3 0 5 8 8 8s4-1.8 4-4-1.8-4-4-4c-3 0-5 8-8 8z" /></svg>;
    case "clock": return <svg {...p}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>;
    case "star": return <svg {...p} fill={color}><path d="m12 2 3 7 8 1-6 5 2 8-7-4-7 4 2-8-6-5 8-1z" stroke="none" /></svg>;
    case "ig": return <svg {...p}><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill={color} /></svg>;
    case "tiktok": return <svg {...p}><path d="M16 3v3a4 4 0 0 0 4 4v3a7 7 0 0 1-4-1.3V15a6 6 0 1 1-6-6v3a3 3 0 1 0 3 3V3z" /></svg>;
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

/* ===== Testimonial Marquee (duas linhas, rolando) ===== */
function TestiMarquee() {
  const row1 = [
    { name: "Camila R.", handle: "@camilarbeauty", nicho: "Extensão de cílios", text: "Tô em choque. Segui o roteiro do app, gravei em 40s e o Reels bateu 1.2M de views em 3 dias. Fechou 14 clientes novas só com isso.", metric: "+38.400 seg. em 21 dias", style: "" },
    { name: "Paula V.", handle: "@paulinhanails", nicho: "Nail designer", text: "Eu achava que precisava de equipamento, iluminação, cenário… Nada disso. Só celular + roteiro do app + postar. Simples.", metric: "de 900 p/ 27K", style: "lime" },
    { name: "Juliana M.", handle: "@jumakeup", nicho: "Maquiadora", text: "O que mais pegou foi a IA modelando conteúdo viral do nicho. Copiei a estrutura dos vídeos que já bombaram e adaptei pra mim. Fila de noivas lotada.", metric: "Agenda fechada 2 meses", style: "" },
    { name: "Rafa C.", handle: "@rafaestudiosbb", nicho: "Sobrancelhas", text: "Testei por birra. Em 10 dias já tinha 3 vídeos acima de 100K. Mudou meu CEP, juro.", metric: "+52K seguidores", style: "pink" },
    { name: "Bruna L.", handle: "@bru.hair", nicho: "Cabeleireira", text: "O desafio de 30 dias me deu uma estrutura que eu nunca tive. Hoje posto todo dia sem me desgastar.", metric: "De 1.2K → 18K", style: "" },
    { name: "Thaís O.", handle: "@thais.estetica", nicho: "Estética facial", text: "Investi R$37 e recuperei no primeiro cliente que veio do vídeo. Virou minha principal fonte de leads.", metric: "ROI no 1º dia", style: "lime" },
  ];
  const row2 = [
    { name: "Larissa F.", handle: "@laridepilacao", nicho: "Depilação", text: "Eu travava pra gravar porque não sabia o que falar. O roteiro diário resolve isso. Abro, leio, gravo, posto.", metric: "+11K em 2 semanas", style: "" },
    { name: "Monique A.", handle: "@moni.mua", nicho: "Auto maquiagem", text: "A parte da IA é o pulo do gato. Pego vídeo viral, ela transcreve, adapta pro meu nicho. Surreal.", metric: "1 vídeo c/ 2.4M views", style: "pink" },
    { name: "Gabi S.", handle: "@gabisobrancelhas", nicho: "Designer de sobrancelha", text: "Não tenho cara pra câmera. Vários modelos no app viralizam sem mostrar rosto, só as mãos. Salvou minha vida.", metric: "+22K sem aparecer", style: "" },
    { name: "Dani P.", handle: "@danicilios", nicho: "Cílios fio a fio", text: "Antes postava 1x por semana e ninguém via. Agora posto todo dia e virei referência na minha cidade.", metric: "Ranking local top 1", style: "lime" },
    { name: "Amanda T.", handle: "@amandahair", nicho: "Mega hair", text: "O curso + app + mentoria ao vivo é diferente de tudo que já comprei. E eu comprei MUITA coisa antes.", metric: "+41K em 45 dias", style: "" },
    { name: "Carol B.", handle: "@carolspa", nicho: "SPA", text: "Meu feed era morto. Hoje é uma máquina de atrair clientes. Sem me estressar criando.", metric: "Agenda +3x", style: "pink" },
  ];

  const Card = ({ t }) => (
    <div className={`testi-card ${t.style}`}>
      <div className="who">
        <div className="av" />
        <div>
          <div className="name">{t.name} <span style={{ opacity: .6, fontWeight: 500 }}>· {t.nicho}</span></div>
          <div className="handle">{t.handle}</div>
        </div>
      </div>
      <div className="text">"{t.text}"</div>
      <div className="metric"><Icon name="trend" size={12} /> {t.metric}</div>
    </div>
  );
  const dup = arr => [...arr, ...arr];
  return (
    <div style={{ padding: "10px 0" }}>
      <div className="testi-marquee">
        <div className="testi-track">
          {dup(row1).map((t, i) => <Card key={i} t={t} />)}
        </div>
      </div>
      <div style={{ height: 18 }} />
      <div className="testi-marquee">
        <div className="testi-track reverse">
          {dup(row2).map((t, i) => <Card key={i} t={t} />)}
        </div>
      </div>
    </div>
  );
}

/* ===== Eyebrow chip ===== */
function Eyebrow({ children, icon }) {
  return (
    <span className="eyebrow">
      <span className="dot" />
      {icon && <Icon name={icon} size={14} />}
      {children}
    </span>
  );
}

/* ===== Alpha Premium Button ===== */
function AlphaBtn({href="#", variant, children}) {
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
