/* App root + state */

const TWEAK_DEFAULTS = { trainSpeed: 6, palette: "classic", reducedMotion: false };

const PALETTES = {
  classic:  { yellow: "#FFD60A", red: "#E63329", ink: "#14110F", cream: "#FFF8E1", paper: "#FFFDF5" },
  candy:    { yellow: "#FFE34F", red: "#FF5470", ink: "#1B1F3A", cream: "#FFF1F4", paper: "#FFFDFB" },
  vintage:  { yellow: "#E8B83E", red: "#B43A2E", ink: "#1F1A12", cream: "#F4EAD0", paper: "#FAF4E4" },
  forest:   { yellow: "#F7C948", red: "#D7503A", ink: "#1F2A20", cream: "#EBE8D8", paper: "#F8F5E9" },
};

const applyPalette = (key) => {
  const p = PALETTES[key] || PALETTES.classic;
  const r = document.documentElement.style;
  r.setProperty("--yellow", p.yellow); r.setProperty("--red", p.red);
  r.setProperty("--ink", p.ink); r.setProperty("--cream", p.cream); r.setProperty("--paper", p.paper);
};

const App = () => {
  const [active, setActive] = React.useState("home");
  const [filter, setFilter] = React.useState("all");
  const [cart, setCart] = React.useState([]);
  const [cartOpen, setCartOpen] = React.useState(false);
  const [favorites, setFavorites] = React.useState([]);
  const [addedFlash, setAddedFlash] = React.useState(null);
  const [cartBounce, setCartBounce] = React.useState(false);
  const [tweaks, setTweak] = window.useTweaks ? window.useTweaks(TWEAK_DEFAULTS) : [TWEAK_DEFAULTS, () => {}];
  const [dataVersion, setDataVersion] = React.useState(0);
  const [cookieOk, setCookieOk] = React.useState(() => {
    try { return localStorage.getItem('pa_cookie') === '1'; } catch { return false; }
  });
  const acceptCookies  = () => { try { localStorage.setItem('pa_cookie', '1'); } catch {} setCookieOk(true); };
  const declineCookies = () => { setCookieOk(true); };

  React.useEffect(() => { applyPalette(tweaks.palette); }, [tweaks.palette]);
  React.useEffect(() => { document.body.classList.toggle("reduced-motion", !!tweaks.reducedMotion); }, [tweaks.reducedMotion]);

  React.useEffect(() => {
    if (window.loadProductsFromSheets && window.loadOffersFromSheets) {
      Promise.all([
        window.loadProductsFromSheets(),
        window.loadOffersFromSheets(),
        window.loadSettingsFromSupabase && window.loadSettingsFromSupabase(),
      ]).then(() => setDataVersion(v => v + 1));
    }
  }, []);

  React.useEffect(() => {
    const handler = () => {
      const sections = window.NAV_ITEMS.map(i => document.getElementById(i.id)).filter(Boolean);
      const mid = window.scrollY + window.innerHeight * 0.35;
      let cur = "home";
      for (const s of sections) { if (s.offsetTop <= mid) cur = s.id; }
      setActive(cur);
    };
    window.addEventListener("scroll", handler, { passive: true });
    handler();
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const navTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const addToCart = (p) => {
    setCart(prev => {
      const existing = prev.find(x => x.id === p.id);
      if (existing) return prev.map(x => x.id === p.id ? { ...x, qty: x.qty + 1 } : x);
      return [...prev, { ...p, qty: 1 }];
    });
    setAddedFlash(p.id); setCartBounce(true);
    setTimeout(() => setAddedFlash(null), 900);
    setTimeout(() => setCartBounce(false), 500);
  };
  const changeQty = (id, d) => {
    setCart(prev => prev.flatMap(x => {
      if (x.id !== id) return [x];
      const q = x.qty + d;
      if (q <= 0) return [];
      return [{ ...x, qty: q }];
    }));
  };
  const toggleFav = (id) => setFavorites(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
  const total = cart.reduce((s, x) => s + x.price * x.qty, 0);
  const itemCount = cart.reduce((s, x) => s + x.qty, 0);

  return (
    <>
      <Nav active={active} onNav={navTo}/>
      <Hero onNav={navTo} speed={tweaks.trainSpeed} motion={!tweaks.reducedMotion}/>
      <Marquee/>
      <Categories onPick={(c) => { setFilter(c); navTo("products"); }}/>
      <Products filter={filter} setFilter={setFilter} onAdd={addToCart} addedFlash={addedFlash} favorites={favorites} toggleFav={toggleFav} dataVersion={dataVersion}/>
      <About/>
      <Offers dataVersion={dataVersion}/>
      <Contact/>
      <Footer onNav={navTo}/>

      <button className={`cart-fab ${cartBounce ? "cart-bounce" : ""}`} onClick={() => setCartOpen(true)}>
        <Icon name="cart" size={20}/>Καλάθι<span className="badge">{itemCount}</span>
      </button>

      <div className={`drawer-backdrop ${cartOpen ? "open" : ""}`} onClick={() => setCartOpen(false)}></div>
      <aside className={`drawer ${cartOpen ? "open" : ""}`} aria-hidden={!cartOpen}>
        <div className="drawer-head">
          <h3>Το καλάθι σου</h3>
          <button className="drawer-close" onClick={() => setCartOpen(false)} aria-label="Κλείσιμο"><Icon name="close" size={18}/></button>
        </div>
        <div className="drawer-body">
          {cart.length === 0 ? (
            <div className="empty-cart">
              <div style={{ fontSize: 48, marginBottom: 8 }}>🎁</div>
              <div style={{ fontWeight: 600, fontSize: 18, marginBottom: 6 }}>Άδειο προς το παρόν</div>
              <div style={{ fontSize: 14 }}>Πρόσθεσε ό,τι σου αρέσει από τα δημοφιλή.</div>
            </div>
          ) : cart.map(item => (
            <div key={item.id} className="cart-item">
              <div className={`thumb ${item.bg}`}><ProductArt kind={item.art}/></div>
              <div className="info">
                <div className="name">{item.name}</div>
                <div className="qty">
                  <button onClick={() => changeQty(item.id, -1)} aria-label="Μείωση">−</button>
                  <span>{item.qty}</span>
                  <button onClick={() => changeQty(item.id, +1)} aria-label="Αύξηση">+</button>
                </div>
              </div>
              <div className="price">{(item.price * item.qty).toFixed(2)}€</div>
            </div>
          ))}
        </div>
        {cart.length > 0 && (
          <div className="drawer-foot">
            <div className="total-row"><span className="label">Σύνολο</span><span className="total">{total.toFixed(2)}€</span></div>
            <button className="btn primary" style={{ width: "100%", justifyContent: "center" }}>Παραγγελία τηλεφωνικά <Icon name="phone" size={18}/></button>
            <div style={{ fontSize: 12, opacity: 0.6, marginTop: 8, textAlign: "center" }}>Παραλαβή από το κατάστημα ή τηλεφωνική παραγγελία</div>
          </div>
        )}
      </aside>

      <a href="https://wa.me/302221023391?text=%CE%93%CE%B5%CE%B9%CE%B1%20%CF%83%CE%B1%CF%82%2C%20%CE%AE%CE%B8%CE%B5%CE%BB%CE%B1%20%CE%BD%CE%B1%20%CF%81%CF%89%CF%84%CE%AE%CF%83%CF%89..."
        target="_blank" rel="noopener noreferrer" className="whatsapp-fab"
        aria-label="Επικοινωνία μέσω WhatsApp">
        <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>

      {!cookieOk && (
        <div className="cookie-banner" role="dialog" aria-label="Συγκατάθεση cookies">
          <p>Χρησιμοποιούμε cookies για τη σωστή λειτουργία της σελίδας και την καλύτερη εμπειρία σου.{" "}<a href="#">Πολιτική απορρήτου</a></p>
          <div className="cookie-actions">
            <button className="cookie-accept" onClick={acceptCookies}>Αποδοχή</button>
            <button className="cookie-decline" onClick={declineCookies}>Μόνο απαραίτητα</button>
          </div>
        </div>
      )}

      {window.TweaksPanel && (
        <window.TweaksPanel title="Tweaks">
          <window.TweakSection label="Χρώματα">
            <window.TweakSelect label="Παλέτα" value={tweaks.palette}
              onChange={(v) => setTweak("palette", v)}
              options={[
                { value: "classic", label: "Classic — yellow & red" },
                { value: "candy", label: "Candy — pink twist" },
                { value: "vintage", label: "Vintage — mustard & brick" },
                { value: "forest", label: "Forest — earthy" },
              ]}/>
          </window.TweakSection>
          <window.TweakSection label="Κίνηση">
            <window.TweakSlider label="Ταχύτητα τρένου" min={1} max={10} step={1} value={tweaks.trainSpeed} onChange={(v) => setTweak("trainSpeed", v)}/>
            <window.TweakToggle label="Reduced motion" value={tweaks.reducedMotion} onChange={(v) => setTweak("reducedMotion", v)}/>
          </window.TweakSection>
        </window.TweaksPanel>
      )}
    </>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App/>);
