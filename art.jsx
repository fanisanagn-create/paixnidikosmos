/* ============================================
   SVG art components — playful original illos
   Train, gift, toys, icons — all custom geometric
   ============================================ */

const Train = ({ size = 220 }) => (
  <svg viewBox="0 0 220 140" width={size} height={size * 140/220} xmlns="http://www.w3.org/2000/svg">
    {/* Wheels */}
    <g>
      <circle cx="65" cy="108" r="22" fill="#14110F"/>
      <circle cx="65" cy="108" r="11" fill="#FFD60A" stroke="#14110F" strokeWidth="2"/>
      <circle cx="120" cy="108" r="14" fill="#14110F"/>
      <circle cx="120" cy="108" r="7" fill="#FFD60A" stroke="#14110F" strokeWidth="2"/>
      <circle cx="170" cy="108" r="18" fill="#14110F"/>
      <circle cx="170" cy="108" r="9" fill="#FFD60A" stroke="#14110F" strokeWidth="2"/>
    </g>
    {/* main chassis */}
    <rect x="40" y="58" width="160" height="50" rx="6" fill="#E63329" stroke="#14110F" strokeWidth="3"/>
    {/* cab (back / left) */}
    <rect x="40" y="30" width="55" height="48" rx="6" fill="#E63329" stroke="#14110F" strokeWidth="3"/>
    <rect x="50" y="40" width="35" height="22" rx="4" fill="#FFD60A" stroke="#14110F" strokeWidth="2.5"/>
    {/* boiler (front / right) */}
    <rect x="95" y="50" width="95" height="44" rx="6" fill="#E63329" stroke="#14110F" strokeWidth="3"/>
    {/* funnel (chimney) — sits on the boiler, in front of cab */}
    <rect x="150" y="22" width="22" height="32" fill="#E63329" stroke="#14110F" strokeWidth="3"/>
    <rect x="144" y="18" width="34" height="8" rx="3" fill="#14110F"/>
    {/* boiler face / dome */}
    <circle cx="165" cy="72" r="9" fill="#FFD60A" stroke="#14110F" strokeWidth="2.5"/>
    <circle cx="165" cy="72" r="3.5" fill="#14110F"/>
    {/* headlight at the front */}
    <circle cx="198" cy="72" r="6" fill="#FFD60A" stroke="#14110F" strokeWidth="2.5"/>
    {/* connecting rod */}
    <rect x="53" y="105" width="125" height="6" rx="2" fill="#14110F"/>
  </svg>
);

const GiftBox = ({ size = 120 }) => (
  <svg viewBox="0 0 120 130" width={size} height={size * 130/120} xmlns="http://www.w3.org/2000/svg">
    {/* ribbon swirls */}
    <path d="M50 24 Q40 8 28 14 Q22 22 32 28" fill="none" stroke="#E63329" strokeWidth="6" strokeLinecap="round"/>
    <path d="M70 24 Q80 8 92 14 Q98 22 88 28" fill="none" stroke="#E63329" strokeWidth="6" strokeLinecap="round"/>
    <path d="M60 18 L60 30" stroke="#14110F" strokeWidth="6" strokeLinecap="round"/>
    {/* box top */}
    <rect x="14" y="44" width="92" height="20" rx="3" fill="#E63329" stroke="#14110F" strokeWidth="3"/>
    {/* box bottom */}
    <rect x="20" y="62" width="80" height="56" rx="3" fill="#FFD60A" stroke="#14110F" strokeWidth="3"/>
    {/* ribbon vertical */}
    <rect x="54" y="44" width="12" height="74" fill="#E63329" stroke="#14110F" strokeWidth="2.5"/>
  </svg>
);

const Balloon = ({ size = 56, color = "#E63329" }) => (
  <svg viewBox="0 0 56 80" width={size} height={size * 80/56} xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="28" cy="28" rx="22" ry="26" fill={color} stroke="#14110F" strokeWidth="3"/>
    <ellipse cx="20" cy="22" rx="5" ry="8" fill="rgba(255,255,255,0.4)"/>
    <path d="M28 54 L25 60 L31 60 L28 54" fill="#14110F"/>
    <path d="M28 60 Q22 70 30 78" fill="none" stroke="#14110F" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

/* ===== Category icons ===== */

const IconBlocks = () => (
  <svg viewBox="0 0 88 88" xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="10" width="32" height="32" rx="4" fill="#E63329" stroke="#14110F" strokeWidth="3"/>
    <text x="24" y="32" textAnchor="middle" fontFamily="Baloo 2" fontWeight="800" fontSize="20" fill="#FFD60A">A</text>
    <rect x="46" y="22" width="32" height="32" rx="4" fill="#FFD60A" stroke="#14110F" strokeWidth="3"/>
    <text x="62" y="44" textAnchor="middle" fontFamily="Baloo 2" fontWeight="800" fontSize="20" fill="#14110F">B</text>
    <rect x="22" y="46" width="32" height="32" rx="4" fill="#14110F" stroke="#14110F" strokeWidth="3"/>
    <text x="38" y="68" textAnchor="middle" fontFamily="Baloo 2" fontWeight="800" fontSize="20" fill="#FFD60A">C</text>
  </svg>
);

const IconStar = () => (
  <svg viewBox="0 0 88 88" xmlns="http://www.w3.org/2000/svg">
    <path d="M44 8 L52 32 L78 32 L57 47 L65 72 L44 57 L23 72 L31 47 L10 32 L36 32 Z" fill="#FFD60A" stroke="#14110F" strokeWidth="3" strokeLinejoin="round"/>
    <circle cx="44" cy="44" r="6" fill="#E63329"/>
  </svg>
);

const IconBook = () => (
  <svg viewBox="0 0 88 88" xmlns="http://www.w3.org/2000/svg">
    <rect x="10" y="14" width="68" height="60" rx="4" fill="#E63329" stroke="#14110F" strokeWidth="3"/>
    <rect x="18" y="22" width="52" height="44" rx="2" fill="#FFF8E1" stroke="#14110F" strokeWidth="2.5"/>
    <line x1="44" y1="22" x2="44" y2="66" stroke="#14110F" strokeWidth="2.5"/>
    <line x1="26" y1="34" x2="38" y2="34" stroke="#14110F" strokeWidth="2"/>
    <line x1="26" y1="42" x2="38" y2="42" stroke="#14110F" strokeWidth="2"/>
    <line x1="50" y1="34" x2="62" y2="34" stroke="#14110F" strokeWidth="2"/>
    <line x1="50" y1="42" x2="62" y2="42" stroke="#14110F" strokeWidth="2"/>
  </svg>
);

const IconGift = () => (
  <svg viewBox="0 0 88 88" xmlns="http://www.w3.org/2000/svg">
    <rect x="12" y="32" width="64" height="16" rx="3" fill="#E63329" stroke="#14110F" strokeWidth="3"/>
    <rect x="16" y="46" width="56" height="32" rx="3" fill="#FFD60A" stroke="#14110F" strokeWidth="3"/>
    <rect x="39" y="32" width="10" height="46" fill="#E63329" stroke="#14110F" strokeWidth="2.5"/>
    <path d="M38 22 Q28 12 22 18 Q18 24 30 30" fill="none" stroke="#14110F" strokeWidth="3" strokeLinecap="round"/>
    <path d="M50 22 Q60 12 66 18 Q70 24 58 30" fill="none" stroke="#14110F" strokeWidth="3" strokeLinecap="round"/>
  </svg>
);

/* ===== Product placeholder illos ===== */

const ToyCar = () => (
  <svg viewBox="0 0 120 80" xmlns="http://www.w3.org/2000/svg">
    <rect x="10" y="34" width="100" height="26" rx="6" fill="#E63329" stroke="#14110F" strokeWidth="3"/>
    <path d="M30 34 L40 18 L78 18 L88 34 Z" fill="#14110F" stroke="#14110F" strokeWidth="2"/>
    <rect x="44" y="22" width="14" height="10" rx="2" fill="#FFD60A"/>
    <rect x="60" y="22" width="14" height="10" rx="2" fill="#FFD60A"/>
    <circle cx="30" cy="62" r="10" fill="#14110F"/>
    <circle cx="30" cy="62" r="4" fill="#FFD60A"/>
    <circle cx="90" cy="62" r="10" fill="#14110F"/>
    <circle cx="90" cy="62" r="4" fill="#FFD60A"/>
  </svg>
);

const TeddyBear = () => (
  <svg viewBox="0 0 100 110" xmlns="http://www.w3.org/2000/svg">
    <circle cx="22" cy="30" r="10" fill="#E63329" stroke="#14110F" strokeWidth="3"/>
    <circle cx="78" cy="30" r="10" fill="#E63329" stroke="#14110F" strokeWidth="3"/>
    <circle cx="50" cy="44" r="28" fill="#E63329" stroke="#14110F" strokeWidth="3"/>
    <ellipse cx="50" cy="86" rx="34" ry="22" fill="#E63329" stroke="#14110F" strokeWidth="3"/>
    <circle cx="40" cy="40" r="3.5" fill="#14110F"/>
    <circle cx="60" cy="40" r="3.5" fill="#14110F"/>
    <circle cx="50" cy="50" r="5" fill="#FFD60A" stroke="#14110F" strokeWidth="2"/>
    <path d="M44 56 Q50 60 56 56" stroke="#14110F" strokeWidth="2" fill="none" strokeLinecap="round"/>
  </svg>
);

const RubikCube = () => (
  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <g stroke="#14110F" strokeWidth="2.5">
      <rect x="12" y="12" width="22" height="22" fill="#E63329"/>
      <rect x="38" y="12" width="22" height="22" fill="#FFD60A"/>
      <rect x="64" y="12" width="22" height="22" fill="#FFF8E1"/>
      <rect x="12" y="38" width="22" height="22" fill="#FFD60A"/>
      <rect x="38" y="38" width="22" height="22" fill="#E63329"/>
      <rect x="64" y="38" width="22" height="22" fill="#FFD60A"/>
      <rect x="12" y="64" width="22" height="22" fill="#FFF8E1"/>
      <rect x="38" y="64" width="22" height="22" fill="#FFD60A"/>
      <rect x="64" y="64" width="22" height="22" fill="#E63329"/>
    </g>
  </svg>
);

const Rocket = () => (
  <svg viewBox="0 0 80 110" xmlns="http://www.w3.org/2000/svg">
    <path d="M40 8 Q24 30 24 60 L56 60 Q56 30 40 8" fill="#FFF8E1" stroke="#14110F" strokeWidth="3"/>
    <circle cx="40" cy="38" r="8" fill="#E63329" stroke="#14110F" strokeWidth="3"/>
    <path d="M24 60 L14 80 L28 72 Z" fill="#E63329" stroke="#14110F" strokeWidth="3" strokeLinejoin="round"/>
    <path d="M56 60 L66 80 L52 72 Z" fill="#E63329" stroke="#14110F" strokeWidth="3" strokeLinejoin="round"/>
    <path d="M32 72 L40 100 L48 72 Z" fill="#FFD60A" stroke="#14110F" strokeWidth="3" strokeLinejoin="round"/>
  </svg>
);

const Drum = () => (
  <svg viewBox="0 0 100 90" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="50" cy="68" rx="38" ry="10" fill="#14110F"/>
    <rect x="12" y="28" width="76" height="40" fill="#E63329" stroke="#14110F" strokeWidth="3"/>
    <ellipse cx="50" cy="28" rx="38" ry="10" fill="#FFF8E1" stroke="#14110F" strokeWidth="3"/>
    <path d="M14 32 L24 64 L34 32 L44 64 L54 32 L64 64 L74 32 L84 64" stroke="#FFD60A" strokeWidth="3" fill="none"/>
  </svg>
);

const PuzzleP = () => (
  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 14 L42 14 Q42 22 50 22 Q58 22 58 14 L86 14 L86 42 Q78 42 78 50 Q78 58 86 58 L86 86 L58 86 Q58 78 50 78 Q42 78 42 86 L14 86 Z"
      fill="#FFD60A" stroke="#14110F" strokeWidth="3" strokeLinejoin="round"/>
    <circle cx="36" cy="42" r="4" fill="#14110F"/>
    <circle cx="64" cy="42" r="4" fill="#14110F"/>
    <path d="M38 58 Q50 66 62 58" stroke="#14110F" strokeWidth="3" fill="none" strokeLinecap="round"/>
  </svg>
);

const Crayons = () => (
  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <g stroke="#14110F" strokeWidth="2.5" strokeLinejoin="round">
      <path d="M20 86 L30 24 L42 24 L32 86 Z" fill="#E63329"/>
      <path d="M36 24 L33 18 L39 18 Z" fill="#FFF8E1"/>
      <path d="M38 86 L42 18 L54 18 L50 86 Z" fill="#FFD60A"/>
      <path d="M48 18 L45 12 L51 12 Z" fill="#FFF8E1"/>
      <path d="M56 86 L60 30 L72 30 L68 86 Z" fill="#14110F"/>
      <path d="M66 30 L63 24 L69 24 Z" fill="#FFF8E1"/>
    </g>
  </svg>
);

const Dino = () => (
  <svg viewBox="0 0 120 90" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 74 Q14 50 30 46 Q34 28 50 28 Q70 26 78 38 L96 32 L96 44 Q108 50 108 64 L108 78 L96 78 L94 70 L70 70 L68 78 L52 78 L48 70 L30 70 L26 78 L14 78 Z"
      fill="#E63329" stroke="#14110F" strokeWidth="3" strokeLinejoin="round"/>
    <circle cx="78" cy="42" r="3" fill="#FFF8E1"/>
    <circle cx="78" cy="42" r="1.5" fill="#14110F"/>
    <path d="M48 38 L52 32 L56 38 L60 32 L64 38" stroke="#14110F" strokeWidth="2.5" fill="none" strokeLinejoin="round"/>
  </svg>
);

const SantaHat = () => (
  <svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 60 L86 60 L78 22 Q60 12 42 22 Z" fill="#E63329" stroke="#14110F" strokeWidth="3" strokeLinejoin="round"/>
    <rect x="10" y="58" width="80" height="14" rx="2" fill="#FFF8E1" stroke="#14110F" strokeWidth="3"/>
    <circle cx="80" cy="18" r="9" fill="#FFF8E1" stroke="#14110F" strokeWidth="3"/>
  </svg>
);

const ProductArt = ({ kind }) => {
  const map = {
    car: <ToyCar/>, bear: <TeddyBear/>, cube: <RubikCube/>, rocket: <Rocket/>,
    drum: <Drum/>, puzzle: <PuzzleP/>, crayons: <Crayons/>, dino: <Dino/>,
    santa: <SantaHat/>, balloon: <Balloon color="#FFD60A"/>, gift: <GiftBox/>,
  };
  return map[kind] || <ToyCar/>;
};

/* ===== UI icons ===== */

const Icon = ({ name, size = 18 }) => {
  const s = { width: size, height: size, fill: "none", stroke: "currentColor", strokeWidth: 2.2, strokeLinecap: "round", strokeLinejoin: "round" };
  const paths = {
    phone: <path d="M4 5 Q4 3 6 3 L8 3 L10 8 L7.5 10 Q9 14 12.5 16 L14 14 L19 16 L19 18 Q19 20 17 20 Q9 20 4 13 Q4 9 4 5"/>,
    pin: <><path d="M12 2 C7 2 4 6 4 10 C4 16 12 22 12 22 C12 22 20 16 20 10 C20 6 17 2 12 2"/><circle cx="12" cy="10" r="3"/></>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7 L12 13 L21 7"/></>,
    clock: <><circle cx="12" cy="12" r="9"/><path d="M12 7 V12 L15 14"/></>,
    cart: <><circle cx="9" cy="20" r="1.5"/><circle cx="17" cy="20" r="1.5"/><path d="M3 3 H5 L7 15 H19 L21 7 H6"/></>,
    arrow: <><path d="M5 12 H19"/><path d="M13 6 L19 12 L13 18"/></>,
    arrowleft: <><path d="M19 12 H5"/><path d="M11 6 L5 12 L11 18"/></>,
    arrowright: <><path d="M5 12 H19"/><path d="M13 6 L19 12 L13 18"/></>,
    plus: <><path d="M12 5 V19"/><path d="M5 12 H19"/></>,
    minus: <path d="M5 12 H19"/>,
    close: <><path d="M6 6 L18 18"/><path d="M18 6 L6 18"/></>,
    heart: <path d="M12 21 C8 18 3 14 3 9 Q3 5 7 5 Q10 5 12 8 Q14 5 17 5 Q21 5 21 9 C21 14 16 18 12 21" fill="currentColor" stroke="none"/>,
    heartOutline: <path d="M12 21 C8 18 3 14 3 9 Q3 5 7 5 Q10 5 12 8 Q14 5 17 5 Q21 5 21 9 C21 14 16 18 12 21"/>,
    check: <path d="M5 12 L10 17 L19 7"/>,
    menu: <><path d="M4 7 H20"/><path d="M4 12 H20"/><path d="M4 17 H20"/></>,
    star: <path d="M12 3 L14.5 9 L21 9.5 L16 13.5 L17.5 20 L12 16.5 L6.5 20 L8 13.5 L3 9.5 L9.5 9 Z"/>,
    fb: <path d="M14 22 V13 H17 L17.5 9.5 H14 V7.5 Q14 6 15.5 6 H17.5 V3 Q16 2.8 14.5 2.8 Q11 2.8 11 6.5 V9.5 H8 V13 H11 V22 Z" fill="currentColor" stroke="none"/>,
    ig: <><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></>,
    tt: <path d="M14 3 V14.5 Q14 17.5 11 17.5 Q8 17.5 8 14.5 Q8 11.5 11 11.5 V8 Q5 8 5 14.5 Q5 21 11 21 Q17 21 17 14.5 V8.5 Q19 10 22 10 V6.5 Q17 6.5 17 3 Z"/>,
    yt: <><rect x="3" y="6" width="18" height="12" rx="3"/><path d="M11 9.5 L15 12 L11 14.5 Z" fill="currentColor"/></>,
    play: <path d="M8 5 L19 12 L8 19 Z" fill="currentColor" stroke="none"/>,
    sparkle: <><path d="M12 3 L13.5 10.5 L21 12 L13.5 13.5 L12 21 L10.5 13.5 L3 12 L10.5 10.5 Z" fill="currentColor" stroke="none"/></>,
  };
  return <svg viewBox="0 0 24 24" style={s}>{paths[name]}</svg>;
};

window.Train = Train;
window.GiftBox = GiftBox;
window.Balloon = Balloon;
window.IconBlocks = IconBlocks;
window.IconStar = IconStar;
window.IconBook = IconBook;
window.IconGift = IconGift;
window.ProductArt = ProductArt;
window.Icon = Icon;
