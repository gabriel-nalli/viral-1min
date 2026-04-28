const fs = require('fs');

const pixelArts = JSON.parse(fs.readFileSync('pixel_arts.json', 'utf8'));

const componentCode = `
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
      el.className = \`collectible \${item.type}\`;
      el.innerHTML = \`<div class="coll-inner"><svg><use href="#pixel-\${item.type}"/></svg></div>\`;
      collContainer.appendChild(el);
      return { el, p: 0 };
    });

    let pathLength = 0;
    let lastX = 0; 
    let pawElements = [];

    const renderPathLayout = () => {
      const w = trackContainer.offsetWidth;
      const h = trackContainer.offsetHeight;
      svgContainer.setAttribute('viewBox', \`0 0 \${w} \${h}\`);
      
      const houseDoorY = 90; 
      let d = \`M \${w/2} \${houseDoorY}\`; 
      
      const apexYs = [];

      for (let i = 0; i < 10; i++) {
        const isCardLeft = i % 2 === 0;
        const apexX = isCardLeft ? w * 0.88 : w * 0.12; 
        
        const cardCenterY = ((i * 9) + 8 + 3.5) * h / 100;
        apexYs.push(cardCenterY);
        
        if (i === 0) {
          d += \` C \${w/2} \${houseDoorY + 60}, \${apexX} \${cardCenterY - 40}, \${apexX} \${cardCenterY}\`;
        } else {
          const prevApexX = !isCardLeft ? w * 0.88 : w * 0.12;
          const prevCardCenterY = (((i - 1) * 9) + 8 + 3.5) * h / 100;
          const gapY = (prevCardCenterY + cardCenterY) / 2;
          d += \` C \${prevApexX} \${gapY}, \${apexX} \${gapY}, \${apexX} \${cardCenterY}\`;
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
             collElements[currentApex].el.style.left = \`\${pt.x}px\`;
             collElements[currentApex].el.style.top = \`\${pt.y}px\`;
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
        paw.style.left = \`\${offsetX}px\`;
        paw.style.top = \`\${offsetY}px\`;
        paw.style.setProperty('--rot', \`\${deg}deg\`);
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
      petContainer.style.transform = \`translate(\${point.x - 30}px, \${point.y - 30}px)\`;

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

        <symbol id="pixel-doghouse" viewBox="0 0 30 29" shapeRendering="crispEdges" dangerouslySetInnerHTML={{ __html: \`${pixelArts.houseHtml}\` }} />
        <symbol id="pixel-trophy-cash" viewBox="0 0 48 44" shapeRendering="crispEdges" dangerouslySetInnerHTML={{ __html: \`${pixelArts.troHtml}\` }} />
        <symbol id="pixel-ecosystem" viewBox="0 0 48 44" shapeRendering="crispEdges" dangerouslySetInnerHTML={{ __html: \`${pixelArts.ecoHtml}\` }} />
        <symbol id="pixel-phone-dog" viewBox="0 0 48 44" shapeRendering="crispEdges" dangerouslySetInnerHTML={{ __html: \`${pixelArts.pdHtml}\` }} />
        <symbol id="pixel-phone-script" viewBox="0 0 48 44" shapeRendering="crispEdges" dangerouslySetInnerHTML={{ __html: \`${pixelArts.psHtml}\` }} />
        <symbol id="pixel-ai-bot" viewBox="0 0 48 44" shapeRendering="crispEdges" dangerouslySetInnerHTML={{ __html: \`${pixelArts.aiHtml}\` }} />
        <symbol id="pixel-live-class" viewBox="0 0 48 44" shapeRendering="crispEdges" dangerouslySetInnerHTML={{ __html: \`${pixelArts.lcHtml}\` }} />
        <symbol id="pixel-viral-video" viewBox="0 0 48 44" shapeRendering="crispEdges" dangerouslySetInnerHTML={{ __html: \`${pixelArts.vvHtml}\` }} />
        <symbol id="pixel-zap-reminders" viewBox="0 0 48 44" shapeRendering="crispEdges" dangerouslySetInnerHTML={{ __html: \`${pixelArts.zHtml}\` }} />
        <symbol id="pixel-chart" viewBox="0 0 48 44" shapeRendering="crispEdges" dangerouslySetInnerHTML={{ __html: \`${pixelArts.chHtml}\` }} />
        <symbol id="pixel-kanban" viewBox="0 0 48 44" shapeRendering="crispEdges" dangerouslySetInnerHTML={{ __html: \`${pixelArts.kbHtml}\` }} />

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
`;

const sectionsContent = fs.readFileSync('sections.jsx', 'utf8');
const newSectionsContent = sectionsContent.replace(
  'Object.assign(window, {',
  componentCode + '\n\nObject.assign(window, {\n  Journey,'
);

fs.writeFileSync('sections.jsx', newSectionsContent);
