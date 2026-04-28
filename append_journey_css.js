const fs = require('fs');

const css = `
/* ==========================================================================
   JORNADA VIRAL EM 1 MINUTO
   ========================================================================== */

.journey-container {
  --pink: #FF2D7A;
  --pink-light: #FFE0EC;
  --bg-journey: #F9F1EB; 
  --dark: #1A1A1A;
  --text-sec: #4d4d4d;
  --text-light: #6b6b6b;
  --white: #FFFFFF;
  --shadow: rgba(255, 45, 122, 0.08); 

  background-color: var(--bg-journey);
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20'%3E%3Crect width='20' height='20' fill='%23F9F1EB'/%3E%3Crect x='9' y='9' width='1' height='1' fill='%23D4CAC0'/%3E%3C/svg%3E");
  background-size: 80px 80px;
  image-rendering: pixelated;
  position: relative;
  box-shadow: 0 0 40px rgba(0,0,0,0.1);
  min-height: 100vh;
  overflow: hidden;
}

.journey-container .bg-decor {
  position: absolute;
  pointer-events: none;
  opacity: 0.6;
  z-index: 0;
}

/* ==========================================================================
   ÁREA DA JORNADA & ZIG-ZAG COMPACTO
   ========================================================================== */
.journey-track {
  position: relative;
  width: 100%;
  max-width: 420px;
  margin: 0 auto;
  height: 2500px; 
  padding-top: 40px;
}

/* A Casinha do Cachorro (Início) */
.doghouse-container {
  position: absolute;
  top: 15px; 
  left: 50%;
  transform: translateX(-50%);
  width: 90px;
  height: 87px;
  z-index: 40; 
  filter: drop-shadow(0 6px 12px rgba(0,0,0,0.08));
}

/* O Card */
.journey-container .card {
  background: rgba(255, 255, 255, 0.45);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.8);
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  border-right: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 20px;
  padding: 18px 14px 18px 18px;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.1), inset 0 2px 16px rgba(255, 255, 255, 0.9);
  width: 74%;
  position: absolute;
  z-index: 30; 
  opacity: 0;
  transform: scale(0.4) translateY(50px);
  transition: opacity 0.4s ease-out, 
              transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.journey-container .card.is-visible {
  opacity: 1;
  transform: scale(1) translateY(0);
}

/* Origem da Animação do Card */
.journey-container .card.left { left: 4%; transform-origin: right center; }
.journey-container .card.right { right: 4%; transform-origin: left center; }

/* Posições Y Distribuídas */
.journey-container .card:nth-of-type(1)  { top: 8%; }   
.journey-container .card:nth-of-type(2)  { top: 17%; }  
.journey-container .card:nth-of-type(3)  { top: 26%; }  
.journey-container .card:nth-of-type(4)  { top: 35%; }  
.journey-container .card:nth-of-type(5)  { top: 44%; }  
.journey-container .card:nth-of-type(6)  { top: 53%; }  
.journey-container .card:nth-of-type(7)  { top: 62%; }  
.journey-container .card:nth-of-type(8)  { top: 71%; }  
.journey-container .card:nth-of-type(9)  { top: 80%; }  
.journey-container .card:nth-of-type(10) { top: 89%; }  

/* Badge do Número */
.card-num-badge {
  position: absolute;
  top: -14px;
  left: 16px;
  background: linear-gradient(180deg, rgba(255, 0, 128, 0.75) 0%, rgba(220, 0, 100, 0.85) 100%);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.95);
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  border-right: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 12px;
  box-shadow: 0 6px 16px rgba(255, 0, 128, 0.5), inset 0 2px 12px rgba(255, 255, 255, 0.9);
  color: white;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
  font-weight: 900;
  font-size: 18px;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 35;
}

/* Layout do Conteúdo do Card */
.journey-container .card-content {
  display: flex;
  flex-direction: row;
  gap: 14px;
  align-items: center;
}

.card-image-large {
  width: 80px;
  height: 80px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.card-image-large svg {
  width: 100%;
  height: 100%;
  image-rendering: pixelated;
  filter: drop-shadow(0 6px 8px rgba(0,0,0,0.1));
}

.journey-container .card-text {
  flex: 1;
}

.journey-container .card-title {
  font-size: 15px;
  font-weight: 800;
  line-height: 1.2;
  color: var(--dark);
  margin-bottom: 6px;
}

.journey-container .text-pink { color: var(--pink); }

.journey-container .card-desc {
  font-size: 12px;
  color: var(--text-light);
  line-height: 1.4;
  font-weight: 500;
}

/* ==========================================================================
   SVG PATH (A Linha Pontilhada Animada)
   ========================================================================== */
.svg-track-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1; 
  pointer-events: none;
}

.dashed-path {
  stroke: var(--pink);
  stroke-width: 2.5; 
  stroke-dasharray: 8 10; 
  stroke-linecap: round;
  fill: none;
  mask: url(#draw-mask); 
}

#draw-mask-path {
  stroke: white;
  stroke-width: 16; 
  fill: none;
  stroke-linecap: round;
  stroke-linejoin: round;
}

/* ==========================================================================
   O PET MÓVEL E COLECIONÁVEIS
   ========================================================================== */
.moving-pet-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 60px;
  height: 60px;
  z-index: 20; 
  pointer-events: none;
  will-change: transform;
}

.pet-scale-wrapper {
  width: 100%;
  height: 100%;
  transform-origin: center top;
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), opacity 0.2s ease;
}

.pet-scale-wrapper.inside-house {
  transform: scale(0.2) translateY(-20px);
  opacity: 0;
}

.pet-flipper {
  width: 100%;
  height: 100%;
  transform-origin: center;
  transition: transform 0.2s ease; 
}

.pet-bounce {
  width: 100%;
  height: 100%;
  animation: bounce-pet 0.5s ease-in-out infinite alternate;
}

.pet-shadow {
  position: absolute;
  bottom: -10px;
  left: 50%;
  width: 24px;
  height: 6px;
  background: rgba(0,0,0,0.12);
  border-radius: 50%;
  transform: translateX(-50%);
  animation: shadow-shrink 0.5s ease-in-out infinite alternate;
  z-index: -1;
}

.pet-sprite {
  width: 100%;
  height: 100%;
  image-rendering: pixelated;
  filter: drop-shadow(0 4px 6px rgba(0,0,0,0.1));
}

@keyframes bounce-pet {
  0%   { transform: translateY(0) scale(1.05, 0.95); } 
  100% { transform: translateY(-15px) scale(0.95, 1.05); } 
}

@keyframes shadow-shrink {
  0%   { transform: translateX(-50%) scale(1); opacity: 0.12; }
  100% { transform: translateX(-50%) scale(0.6); opacity: 0.04; }
}

/* COLECIONÁVEIS */
#collectibles-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 15; 
  pointer-events: none;
}

.collectible {
  position: absolute;
  width: 28px;
  height: 28px;
  margin-left: -14px; 
  margin-top: -14px;  
}

.coll-inner {
  width: 100%;
  height: 100%;
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.coll-inner svg {
  width: 100%;
  height: 100%;
  image-rendering: pixelated;
  filter: drop-shadow(0 2px 6px rgba(0,0,0,0.15));
}

.collectible.heart .coll-inner { animation: pulse-heart 1s ease-in-out infinite alternate; }
.collectible.coin .coll-inner { animation: float-coin 1s ease-in-out infinite alternate; }

@keyframes pulse-heart {
  0% { transform: scale(1); }
  100% { transform: scale(1.15); }
}

@keyframes float-coin {
  0% { transform: translateY(0px); }
  100% { transform: translateY(-6px); }
}

.collectible.collected .coll-inner {
  animation: item-collect-pop 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards !important;
}

@keyframes item-collect-pop {
  0% { 
    transform: translateY(0) scale(1) rotate(0deg); 
    opacity: 1; 
  }
  40% { 
    transform: translateY(-45px) scale(1.8) rotate(15deg); 
    opacity: 1; 
  }
  100% { 
    transform: translateY(-100px) scale(0.4) rotate(-15deg); 
    opacity: 0; 
  }
}

/* ANIMAÇÃO DAS PATINHAS DO CACHORRO */
.dog-leg-left, .dog-leg-right {
  transition: transform 0.1s ease;
}

.moving-pet-container.is-walking .dog-leg-left {
  animation: dog-march-l 0.25s linear infinite alternate;
}

.moving-pet-container.is-walking .dog-leg-right {
  animation: dog-march-r 0.25s linear infinite alternate;
}

.moving-pet-container.is-walking .pet-bounce {
  animation-duration: 0.25s; 
}

@keyframes dog-march-l {
  0%, 30% { transform: translateY(0); }
  70%, 100% { transform: translateY(-1.5px); }
}
@keyframes dog-march-r {
  0%, 30% { transform: translateY(-1.5px); }
  70%, 100% { transform: translateY(0); }
}

/* PEGADAS DO CACHORRINHO */
#paws-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2; 
  pointer-events: none;
}

.paw-print {
  position: absolute;
  width: 12px;
  height: 12px;
  margin-left: -6px;
  margin-top: -6px;
  opacity: 0;
  transform: scale(0) rotate(var(--rot, 0deg));
  transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.3s ease;
}

.paw-print.visible {
  opacity: 1;
  transform: scale(1) rotate(var(--rot, 0deg));
}

/* ==========================================================================
   ANIMAÇÕES DE COMPONENTES DE CARDS
   ========================================================================== */
.animated-float {
  animation: eco-float 4s ease-in-out infinite;
}
.eco-phone {
  animation: eco-float 4s ease-in-out infinite;
  transform-origin: 24px 22px;
}
.eco-cap {
  animation: eco-float-tilt 3.5s ease-in-out infinite 0.5s;
  transform-origin: 8.5px 12px;
}
.eco-robot {
  animation: eco-float 3s ease-in-out infinite 1s;
  transform-origin: 7px 26px;
}
.eco-gear {
  animation: eco-spin 8s linear infinite;
  transform-origin: 41.5px 31px;
}
.eco-lines rect {
  animation: eco-pulse 1.5s ease-in-out infinite alternate;
}
.eco-lines rect:nth-child(even) {
  animation-delay: 0.75s;
}

@keyframes eco-float {
  0%, 100% { transform: translateY(0); }
  50%      { transform: translateY(-4px); }
}
@keyframes eco-float-tilt {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50%      { transform: translateY(-5px) rotate(-5deg); }
}
@keyframes eco-spin {
  0%   { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
@keyframes eco-pulse {
  0%   { opacity: 0.2; }
  100% { opacity: 1; }
}

.pd-dog {
  animation: pd-dog-pop 4s ease-in-out infinite 0.5s;
}
.pd-bubble {
  animation: pd-bubble-pulse 2.5s ease-in-out infinite;
  transform-origin: 36px 14px;
}

@keyframes pd-dog-pop {
  0%, 100% { transform: translateY(0); }
  50%      { transform: translateY(-2px); }
}
@keyframes pd-bubble-pulse {
  0%, 100% { transform: scale(1) translateY(0) rotate(0deg); }
  50%      { transform: scale(1.08) translateY(-2px) rotate(3deg); }
}

.ai-robot-body {
  animation: eco-float 3.5s ease-in-out infinite;
  transform-origin: 24px 25px;
}
.ai-sparkle {
  animation: ai-twinkle 2s ease-in-out infinite alternate;
  transform-origin: center center;
}
.ai-sparkle-group:nth-child(1) .ai-sparkle { animation-delay: 0s; }
.ai-sparkle-group:nth-child(2) .ai-sparkle { animation-delay: 0.6s; }
.ai-sparkle-group:nth-child(3) .ai-sparkle { animation-delay: 1.2s; }

@keyframes ai-twinkle {
  0%   { opacity: 0.4; transform: scale(0.7) rotate(0deg); }
  100% { opacity: 1; transform: scale(1.1) rotate(15deg); }
}

/* Novas Animações Cards 6 a 10 */
.pv-rec { animation: pv-rec-blink 1s steps(2, start) infinite; }
@keyframes pv-rec-blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }

.wb-bell { animation: wb-bell-ring 3s ease-in-out infinite 0.5s; transform-origin: 40px 19px; }
@keyframes wb-bell-ring { 0%, 20%, 100% { transform: rotate(0deg); } 5%, 15% { transform: rotate(15deg); } 10% { transform: rotate(-15deg); } }

.zap-bubble { animation: pd-bubble-pulse 2.5s ease-in-out infinite; transform-origin: 22px 20px; }

.lc-avatar { animation: lc-avatar-bounce 2s ease-in-out infinite; transform-origin: 24px 20px; }
@keyframes lc-avatar-bounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-2px); } }

.ch-star { animation: ai-twinkle 1.5s ease-in-out infinite alternate; transform-origin: 39px 4px; }

.folders-anim { animation: eco-float 3s ease-in-out infinite; transform-origin: 24px 10px; }

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
  .journey-container .card { opacity: 1 !important; transform: none !important; filter: none !important; }
}

`;

fs.appendFileSync('styles.css', css);
