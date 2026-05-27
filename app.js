/* ============================================
   App root + state (cart, filter, tweaks)
   ============================================ */

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "trainSpeed": 6,
  "palette": "classic",
  "reducedMotion": false
}/*EDITMODE-END*/;

const PALETTES = {
  classic:  { yellow: "#FFD60A", red: "#E63329", ink: "#14110F", cream: "#FFF8E1", paper: "#FFFDF5" },
  candy:    { yellow: "#FFE34F", red: "#FF5470", ink: "#1B1F3A", cream: "#FFF1F4", paper: "#FFFDFB" },
  vintage:  { yellow: "#E8B83E", red: "#B43A2E", ink: "#1F1A12", cream: "#F4EAD0", paper: "#FAF4E4" },
  forest:   { yellow: "#F7C948", red: "#D7503A", ink: "#1F2A20", cream: "#EBE8D8", paper: "#F8F5E9" },
};

const applyPalette = (key) => {
  const p = PALETTES[key] || PALETTES.classic;
  const r = document.documentElement.style;
  r.setProperty("--yellow", p.yellow);
  r.setProperty("--red", p.red);
  r.setProperty("--ink", p.ink);
  r.setProperty("--cream", p.cream);
  r.setProperty("--paper", p.paper);
};

const App = () => {
  const [active, setActive] = React.useState("home");
  const [filter, setFilter] = React.useState("all");
  const [tweaks, setTweak] = window.useTweaks ? window.useTweaks(TWEAK_DEFAULTS) : [TWEAK_DEFAULTS, () => {}];

  const [dataVersion, setDataVersion] = React.useState(0);

  const [cookieOk, setCookieOk] = React.useState(() => {
    try { return localStorage.getItem('pa_cookie') === '1'; } catch { return false; }
  });
  const acceptCookies  = () => { try { localStorage.setItem('pa_cookie', '1'); } catch {} setCookieOk(true); };
  const declineCookies = () => { setCookieOk(true); };

  React.useEffect(() => { applyPalette(tweaks.palette); }, [tweaks.palette]);

  React.useEffect(() => {
    document.body.classList.toggle("reduced-motion", !!tweaks.reducedMotion);
  }, [tweaks.reducedMotion]);

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
      for (const s of sections) {
        if (s.offsetTop <= mid) cur = s.id;
      }
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

  return (
    <>
      <Nav active={active} onNav={navTo}/>
      <Hero onNav={navTo} speed={tweaks.trainSpeed} motion={!tweaks.reducedMotion}/>
      <Marquee/>
      <Categories onPick={(c) => { setFilter(c); navTo("products"); }}/>
      <Products
        filter={filter} setFilter={setFilter}
        dataVersion={dataVersion}/>
      <About/>
      <Offers dataVersion={dataVersion}/>
      <Contact/>
      <Footer onNav={navTo}/>

      {/* GDPR Cookie Banner */}
      {!cookieOk && (
        <div className="cookie-banner" role="dialog" aria-label="Συγκατάθεση cookies">
          <p>
            Χρησιμοποιούμε cookies για τη σωστή λειτουργία της σελίδας και την καλύτερη εμπειρία σου.{" "}
            <a href="#">Πολιτική απορρήτου</a>
          </p>
          <div className="cookie-actions">
            <button className="cookie-accept" onClick={acceptCookies}>Αποδοχή</button>
            <button className="cookie-decline" onClick={declineCookies}>Μόνο απαραίτητα</button>
          </div>
        </div>
      )}

      {/* Tweaks panel */}
      {window.TweaksPanel && (
        <window.TweaksPanel title="Tweaks">
          <window.TweakSection label="Χρώματα">
            <window.TweakSelect
              label="Παλέτα"
              value={tweaks.palette}
              onChange={(v) => setTweak("palette", v)}
              options={[
                { value: "classic", label: "Classic — yellow & red" },
                { value: "candy", label: "Candy — pink twist" },
                { value: "vintage", label: "Vintage — mustard & brick" },
                { value: "forest", label: "Forest — earthy" },
              ]}/>
          </window.TweakSection>
          <window.TweakSection label="Κίνηση">
            <window.TweakSlider
              label="Ταχύτητα τρένου"
              min={1} max={10} step={1}
              value={tweaks.trainSpeed}
              onChange={(v) => setTweak("trainSpeed", v)}/>
            <window.TweakToggle
              label="Reduced motion"
              value={tweaks.reducedMotion}
              onChange={(v) => setTweak("reducedMotion", v)}/>
          </window.TweakSection>
        </window.TweaksPanel>
      )}
    </>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App/>);
