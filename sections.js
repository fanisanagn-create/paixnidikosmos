/* ============================================
   Section components
   ============================================ */



/* Διαβάζει ρύθμιση από Supabase ή επιστρέφει fallback αν δεν έχει φορτωθεί */
const _gs = (key, fallback) => (window.SITE_SETTINGS && window.SITE_SETTINGS[key] !== undefined && window.SITE_SETTINGS[key] !== '') ? window.SITE_SETTINGS[key] : (fallback !== undefined ? fallback : '');

/* ----- Nav ----- */
const Nav = ({ active, onNav }) => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const close = () => setMobileOpen(false);
  const go = (id) => { onNav(id); close(); };

  return (
    <>
      <nav className="nav">
        <div className="container nav-inner">
          <a href="#home" className="brand" onClick={(e) => { e.preventDefault(); go("home"); }}>
            <div className="brand-mark">
              <svg viewBox="0 0 32 24" width="28" height="20">
                <rect x="2" y="10" width="22" height="9" rx="1.5" fill="#FFD60A" stroke="#14110F" strokeWidth="1.6"/>
                <rect x="18" y="5" width="9" height="9" rx="1.5" fill="#FFD60A" stroke="#14110F" strokeWidth="1.6"/>
                <circle cx="8" cy="20" r="2.5" fill="#14110F"/>
                <circle cx="20" cy="20" r="2.5" fill="#14110F"/>
                <rect x="6" y="3" width="3" height="7" fill="#FFD60A" stroke="#14110F" strokeWidth="1.6"/>
              </svg>
            </div>
            <div className="brand-name">
              Παιχνιδοκόσμος
              <span className="small">Αναγνώστου · Χαλκίδα</span>
            </div>
          </a>
          <ul className={`nav-links${mobileOpen ? " mobile-open" : ""}`}>
            {window.NAV_ITEMS.map(i => (
              <li key={i.id}>
                <a href={`#${i.id}`} className={active === i.id ? "active" : ""}
                   onClick={(e) => { e.preventDefault(); go(i.id); }}>
                  {i.label}
                </a>
              </li>
            ))}
            <li>
              <a href={`tel:${_gs('phone','2221023391')}`} className="mobile-nav-cta">
                📞 {_gs('phone','2221023391')}
              </a>
            </li>
          </ul>
          <a href={`tel:${_gs('phone','2221023391')}`} className="nav-cta">
            <Icon name="phone" size={16}/>
            {_gs('phone','2221023391')}
          </a>
          <button
            className="nav-mobile-toggle"
            aria-label={mobileOpen ? "Κλείσιμο menu" : "Άνοιγμα menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(v => !v)}
          >
            <Icon name={mobileOpen ? "close" : "menu"} size={20}/>
          </button>
        </div>
      </nav>
      {mobileOpen && <div className="nav-overlay" onClick={close} aria-hidden="true"/>}
    </>
  );
};

/* ----- Hero ----- */

const Hero = ({ onNav, speed, motion }) => {
  const trainStyle = { animationDuration: `${28 - speed * 2}s` };
  return (
    <section className="hero" id="home">
      <div className="container hero-inner">
        <div className="hero-copy">
          <span className="hero-eyebrow"><span className="dot"></span>Στη Χαλκίδα από το 1978</span>
          <h1>
            Ο κόσμος του <span className="accent-red">παιχνιδιού</span>
            <br/>ξεκινά <span className="squiggle">εδώ!</span>
          </h1>
          <p className="hero-lead">
            Χιλιάδες παιχνίδια, εποχιακά είδη και έξυπνα δώρα σε ένα μαγαζί
            που αγαπάει τα παιδιά εδώ και τρεις γενιές.
          </p>
          <div className="hero-actions">
            <button className="btn primary" onClick={() => onNav("categories")}>
              Δες τις κατηγορίες <Icon name="arrow" size={18}/>
            </button>
            <button className="btn" onClick={() => onNav("offers")}>
              <Icon name="sparkle" size={18}/> Προσφορές
            </button>
          </div>
          <div className="hero-stats">
            <div className="stat"><div className="num">{_gs('stat1_num','47')}</div><div className="lbl">{_gs('stat1_label','χρόνια στη Χαλκίδα')}</div></div>
            <div className="stat"><div className="num">{_gs('stat2_num','2.5K+')}</div><div className="lbl">{_gs('stat2_label','κωδικοί στο ράφι')}</div></div>
            <div className="stat"><div className="num">{_gs('stat3_num','3')}</div><div className="lbl">{_gs('stat3_label','γενιές οικογένειας')}</div></div>
          </div>
        </div>

        <div className="hero-stage">
          <div className="sun"></div>
          <div className="cloud cloud-1"></div>
          <div className="cloud cloud-2"></div>
          <div className="cloud cloud-3"></div>

          <div className="star s1"></div>
          <div className="star s2"></div>
          <div className="star s3"></div>

          <div className="gift-float"><GiftBox size={130}/></div>
          <div className="balloon"><Balloon size={68} color="#E63329"/></div>

          {motion !== false && (
            <div className="train-wrap" style={trainStyle}>
              <div className="bob">
                <div className="smoke" style={{ left: 162, bottom: 130 }}>
                  <div className="puff" style={{ animationDelay: "0s" }}></div>
                  <div className="puff" style={{ animationDelay: "0.3s" }}></div>
                  <div className="puff" style={{ animationDelay: "0.6s" }}></div>
                  <div className="puff" style={{ animationDelay: "0.9s" }}></div>
                </div>
                <Train size={240}/>
              </div>
            </div>
          )}

          <div className="track">
            <div className="rail top"></div>
            <div className="ties"></div>
            <div className="rail bot"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ----- Marquee ----- */

const Marquee = () => {
  const defaultItems = "ΠΑΙΧΝΙΔΙΑ,ΕΚΠΑΙΔΕΥΤΙΚΑ,ΕΠΟΧΙΑΚΑ,ΔΩΡΑ,ΔΩΡΕΑΝ ΣΥΣΚΕΥΑΣΙΑ,ΠΑΡΑΛΑΒΗ ΑΠΟ ΤΟ ΚΑΤΑΣΤΗΜΑ";
  const items = _gs('marquee_items', defaultItems).split(',').map(s => s.trim()).filter(Boolean);
  const row = (
    <span>
      {items.map((it, i) => (
        <React.Fragment key={i}>
          {it}
          <span className="dot">★</span>
        </React.Fragment>
      ))}
    </span>
  );
  return (
    <div className="marquee">
      <div className="marquee-track">
        {row}{row}{row}
      </div>
    </div>
  );
};

/* ----- Categories ----- */

const Categories = ({ onPick }) => {
  const artFor = (a) => {
    if (a === "blocks") return <IconBlocks/>;
    if (a === "book") return <IconBook/>;
    if (a === "star") return <IconStar/>;
    if (a === "gift") return <IconGift/>;
    return null;
  };
  return (
    <section id="categories">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="eyebrow" style={{ color: "var(--red)" }}>· κατηγορίες</div>
            <h2 style={{ marginTop: 10 }}>Διάλεξε τι ψάχνεις<br/>— το έχουμε.</h2>
          </div>
          <p className="lead">
            Όλα τα κλασικά αγαπημένα, όλα τα νέα τρελά, και ό,τι χρειάζεσαι για
            γενέθλια, γιορτές, διακοπές και κουραστικές απογευματινές βροχές.
          </p>
        </div>
        <div className="cat-grid">
          {window.CATEGORY_CARDS.map(c => (
            <div key={c.id} className={`cat-card ${c.theme}`} onClick={() => onPick(c.id)}>
              <div className="cat-art">{artFor(c.art)}</div>
              <div>
                <h3>{c.title}</h3>
                <div className="cat-count">{c.count}</div>
              </div>
              <div className="cat-arrow"><Icon name="arrow" size={16}/></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ----- Products ----- */

const AGE_OPTIONS = [
  { value: "all", label: "Όλες" },
  { value: "0+",  label: "0+" },
  { value: "3+",  label: "3+" },
  { value: "4+",  label: "4+" },
  { value: "5+",  label: "5+" },
  { value: "6+",  label: "6+" },
];

const Products = ({ filter, setFilter, onAdd, addedFlash, favorites, toggleFav, dataVersion }) => {
  const [search, setSearch]       = React.useState("");
  const [ageFilter, setAgeFilter] = React.useState("all");

  const filtered = React.useMemo(() => {
    let result = [...window.PRODUCTS];
    if (filter !== "all") result = result.filter(p => p.cat === filter);
    if (ageFilter !== "all") result = result.filter(p => p.age === ageFilter);
    if (search.trim()) {
      const q = search.toLowerCase().trim();
      result = result.filter(p => p.name.toLowerCase().includes(q));
    }
    return result;
  }, [filter, ageFilter, search, dataVersion]);

  return (
    <section className="products" id="products">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="eyebrow" style={{ color: "var(--red)" }}>· δημοφιλή τώρα</div>
            <h2 style={{ marginTop: 10 }}>Τι αγαπούν τα παιδιά<br/>αυτές τις μέρες.</h2>
          </div>
          <p className="lead">
            Επιλεγμένα από εμάς. Δοκιμασμένα από τα παιδιά του μαγαζιού.
            Πρόσθεσε στο καλάθι σου ό,τι σου αρέσει — η παραγγελία ολοκληρώνεται στο κατάστημα.
          </p>
        </div>

        <div className="cat-tabs">
          {window.CATEGORIES.map(c => (
            <button key={c.id} className={`cat-tab ${filter === c.id ? "active" : ""}`}
                    onClick={() => setFilter(c.id)}>
              {c.label}
            </button>
          ))}
        </div>

        <div className="product-controls">
          <div className="search-bar">
            <svg className="search-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
            </svg>
            <input
              type="search"
              placeholder="Αναζήτηση προϊόντος..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              aria-label="Αναζήτηση προϊόντων"
            />
          </div>
          <div className="age-filter">
            <span className="age-label">Ηλικία:</span>
            {AGE_OPTIONS.map(opt => (
              <button
                key={opt.value}
                className={`age-btn ${ageFilter === opt.value ? "active" : ""}`}
                onClick={() => setAgeFilter(opt.value)}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        <div className="product-grid">
          {filtered.length === 0 ? (
            <div className="no-results">
              <div className="emoji">🔍</div>
              <p>Δεν βρέθηκαν προϊόντα.<br/>Δοκίμασε διαφορετική αναζήτηση.</p>
            </div>
          ) : filtered.map(p => (
            <div key={p.id} className="product">
              <div className={`product-img ${p.bg}`}>
                {p.tag && <span className={`product-tag ${p.tag === "HOT" ? "hot" : ""}`}>{p.tag}</span>}
                <button className={`product-fav ${favorites.includes(p.id) ? "on" : ""}`}
                        onClick={() => toggleFav(p.id)} aria-label="Αγαπημένο">
                  <Icon name={favorites.includes(p.id) ? "heart" : "heartOutline"} size={16}/>
                </button>
                {p.image
                  ? <img src={p.image} alt={p.name} loading="lazy"/>
                  : <ProductArt kind={p.art}/>
                }
              </div>
              <div className="product-body">
                <div className="meta">Ηλικία {p.age}</div>
                <h3>{p.name}</h3>
                <div className="product-row">
                  <div className="product-price">
                    {p.oldPrice && <span className="old">{p.oldPrice.toFixed(2)}€</span>}
                    {p.price.toFixed(2)}€
                  </div>
                  <button className={`product-add ${addedFlash === p.id ? "added" : ""}`}
                          onClick={() => onAdd(p)} aria-label="Προσθήκη στο καλάθι">
                    <Icon name={addedFlash === p.id ? "check" : "plus"} size={18}/>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ----- About / Timeline ----- */

const About = () => (
  <section id="about">
    <div className="container about-grid">
      <div className="about-lead">
        <div className="eyebrow" style={{ color: "var(--red)" }}>· η ιστορία μας</div>
        <h2 style={{ marginTop: 10 }}>Τρεις γενιές, ένα μαγαζάκι, χιλιάδες χαμόγελα.</h2>
        <p>
          Ο Παιχνιδόκοσμος Αναγνώστου ξεκίνησε ως ένα μικρό οικογενειακό κατάστημα
          στην καρδιά της Χαλκίδας. Σήμερα, η τρίτη γενιά της οικογένειας συνεχίζει
          με την ίδια αγάπη — επιλέγοντας ένα-ένα τα παιχνίδια που θα γέμιζαν τα δικά της παιδικά χρόνια.
        </p>
        <p>
          Δεν είμαστε αλυσίδα. Είμαστε γείτονες. Έλα να πεις «καλημέρα».
        </p>
        <div style={{ marginTop: 22, display: "flex", gap: 12, flexWrap: "wrap" }}>
          <a className="btn yellow" href="#contact" onClick={(e) => { e.preventDefault(); document.getElementById("contact").scrollIntoView({ behavior: "smooth" }); }}>
            <Icon name="pin" size={18}/> Έλα να μας βρεις
          </a>
        </div>
      </div>

      <div className="timeline">
        {window.TIMELINE.map((t, i) => (
          <div key={i} className="tl-item">
            <div className="year">{t.year}</div>
            <h4>{t.title}</h4>
            <p>{t.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ----- Offers carousel ----- */

const Offers = ({ dataVersion }) => {
  const [i, setI] = React.useState(0);
  const offers = window.OFFERS;
  const len = offers.length;
  React.useEffect(() => {
    setI(0);
    const id = setInterval(() => setI(v => (v + 1) % len), 6000);
    return () => clearInterval(id);
  }, [len, dataVersion]);
  const go = (d) => setI((v) => (v + d + len) % len);

  return (
    <section className="offers" id="offers">
      <div className="container">
        <div className="section-head" style={{ marginBottom: 0 }}>
          <div>
            <div className="eyebrow">· τρέχουσες προσφορές</div>
            <h2 style={{ marginTop: 10, color: "var(--paper)" }}>
              Καλές τιμές, <span className="accent-yellow">καλύτερες εκπλήξεις.</span>
            </h2>
          </div>
        </div>

        <div className="carousel">
          <div className="carousel-track">
            {offers.map((o, idx) => (
              <div key={idx} className={`slide ${i === idx ? "active" : ""}`}>
                <div>
                  <span className="badge-offer">{o.badge}</span>
                  <h3>{o.title} <span className="accent">{o.titleAccent}</span></h3>
                  <p>{o.text}</p>
                  <button className="btn yellow">
                    Δες περισσότερα <Icon name="arrow" size={18}/>
                  </button>
                </div>
                <div className="slide-art">
                  <ProductArt kind={o.art}/>
                </div>
              </div>
            ))}
          </div>
          <div className="carousel-nav">
            <div className="carousel-dots">
              {offers.map((_, idx) => (
                <button key={idx} className={`dot-btn ${i === idx ? "active" : ""}`}
                        onClick={() => setI(idx)} aria-label={`Slide ${idx + 1}`}/>
              ))}
            </div>
            <div className="car-arrows">
              <button className="car-arrow" onClick={() => go(-1)} aria-label="Προηγούμενο">
                <Icon name="arrowleft" size={18}/>
              </button>
              <button className="car-arrow" onClick={() => go(1)} aria-label="Επόμενο">
                <Icon name="arrowright" size={18}/>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ----- Contact ----- */

const EMAILJS_SERVICE_ID  = "YOUR_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";

const Contact = () => {
  const [sent, setSent]       = React.useState(false);
  const [sending, setSending] = React.useState(false);
  const [error, setError]     = React.useState(false);
  const [form, setForm]       = React.useState({ name: "", email: "", msg: "" });

  const submit = (e) => {
    e.preventDefault();
    setError(false);

    if (EMAILJS_SERVICE_ID === "YOUR_SERVICE_ID" || !window.emailjs) {
      setSent(true);
      setTimeout(() => setSent(false), 4500);
      setForm({ name: "", email: "", msg: "" });
      return;
    }

    setSending(true);
    window.emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
      from_name: form.name,
      reply_to:  form.email,
      message:   form.msg,
    }).then(() => {
      setSent(true);
      setSending(false);
      setForm({ name: "", email: "", msg: "" });
      setTimeout(() => setSent(false), 5000);
    }).catch(() => {
      setSending(false);
      setError(true);
    });
  };

  return (
    <section id="contact" style={{ background: "var(--paper)" }}>
      <div className="container">
        <div className="section-head">
          <div>
            <div className="eyebrow" style={{ color: "var(--red)" }}>· επικοινωνία</div>
            <h2 style={{ marginTop: 10 }}>Πέρνα από το μαγαζί.<br/>Ή στείλε μήνυμα.</h2>
          </div>
          <p className="lead">
            Είμαστε ανοιχτά κάθε μέρα. Αν θέλεις να σου κρατήσουμε κάτι ή ψάχνεις
            δώρο για συγκεκριμένη ηλικία — πες μας. Σου απαντάμε αυθημερόν.
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-card">
            <h3>Στοιχεία επικοινωνίας</h3>
            <div className="contact-item">
              <div className="ico"><Icon name="pin" size={20}/></div>
              <div>
                <div className="label">Διεύθυνση</div>
                <div className="value">{_gs('address','Ερμού 27, Χαλκίδα 34100')}</div>
              </div>
            </div>
            <div className="contact-item">
              <div className="ico"><Icon name="phone" size={20}/></div>
              <div>
                <div className="label">Τηλέφωνο</div>
                <div className="value"><a href={`tel:${_gs('phone','2221023391')}`}>{_gs('phone_display','2221 023391')}</a></div>
              </div>
            </div>
            <div className="contact-item">
              <div className="ico"><Icon name="mail" size={20}/></div>
              <div>
                <div className="label">Email</div>
                <div className="value"><a href={`mailto:${_gs('email','hello@paixnidokosmos.gr')}`}>{_gs('email','hello@paixnidokosmos.gr')}</a></div>
              </div>
            </div>
            <div className="contact-item">
              <div className="ico"><Icon name="clock" size={20}/></div>
              <div>
                <div className="label">Ώρες λειτουργίας</div>
                <div className="value">{_gs('hours','Δευτ – Σαβ · 09:00 – 21:00')}</div>
              </div>
            </div>

            <div className="map">
              <iframe
                title="Χάρτης"
                src="https://maps.google.com/maps?q=Παιχνιδοκόσμος+Αναγνώστου+Ερμού+27+Χαλκίδα&t=&z=16&ie=UTF8&iwloc=&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <a className="btn yellow" style={{ marginTop: 16 }} href="https://maps.app.goo.gl/7m74cQj7MXWpgcLU9" target="_blank" rel="noopener">
              <Icon name="pin" size={18}/> Άνοιγμα στο Google Maps
            </a>
          </div>

          <div>
            <form className="contact-form" onSubmit={submit}>
              <div>
                <label>Όνομα</label>
                <input required value={form.name} onChange={e => setForm({...form, name: e.target.value})} placeholder="Π.χ. Μαρία Παπαδοπούλου"/>
              </div>
              <div>
                <label>Email ή τηλέφωνο</label>
                <input required value={form.email} onChange={e => setForm({...form, email: e.target.value})} placeholder="email@example.gr"/>
              </div>
              <div>
                <label>Μήνυμα</label>
                <textarea required value={form.msg} onChange={e => setForm({...form, msg: e.target.value})} placeholder="Ψάχνω δώρο για 5χρονο αγόρι, μπάτζετ 30€…"></textarea>
              </div>

              {sent && (
                <div className="form-success">
                  <Icon name="check" size={18}/> Έλαβα το μήνυμά σου! Θα σου απαντήσω αυθημερόν.
                </div>
              )}
              {error && (
                <div className="form-error">
                  ⚠️ Κάτι πήγε στραβά. Παρακαλώ καλέστε μας στο 2221 023391.
                </div>
              )}

              <button className="btn primary" type="submit" disabled={sending} style={{ alignSelf: "flex-start" }}>
                {sending ? "Αποστολή..." : <><span>Αποστολή μηνύματος</span> <Icon name="arrow" size={18}/></>}
              </button>

              <div style={{ marginTop: 18, padding: "18px 20px", background: "var(--ink)", color: "var(--yellow)", borderRadius: 18, border: "3px solid var(--ink)" }}>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", opacity: 0.7 }}>ΠΡΟΤΙΜΑΣ ΤΗΛΕΦΩΝΟ?</div>
                <div style={{ fontFamily: "var(--font-display)", fontSize: 26, fontWeight: 800, marginTop: 6, color: "var(--paper)" }}>
                  Πάρε μας · {_gs('phone_display','2221 023391')}
                </div>
                <div style={{ fontSize: 14, opacity: 0.75, marginTop: 4 }}>{_gs('hours','Δευτέρα έως Σάββατο, 09:00 – 21:00')}</div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ----- Footer ----- */

const Footer = ({ onNav }) => (
  <footer>
    <div className="container">
      <div className="footer-grid">
        <div className="footer-brand">
          <div className="brand" style={{ color: "var(--paper)" }}>
            <div className="brand-mark"><svg viewBox="0 0 32 24" width="28" height="20">
              <rect x="2" y="10" width="22" height="9" rx="1.5" fill="#FFD60A" stroke="#14110F" strokeWidth="1.6"/>
              <rect x="18" y="5" width="9" height="9" rx="1.5" fill="#FFD60A" stroke="#14110F" strokeWidth="1.6"/>
              <circle cx="8" cy="20" r="2.5" fill="#14110F"/>
              <circle cx="20" cy="20" r="2.5" fill="#14110F"/>
              <rect x="6" y="3" width="3" height="7" fill="#FFD60A" stroke="#14110F" strokeWidth="1.6"/>
            </svg></div>
            <div className="brand-name">Παιχνιδοκόσμος
              <span className="small" style={{ color: "var(--yellow)", opacity: 1 }}>Αναγνώστου · est. 1978</span>
            </div>
          </div>
          <p>Παιχνίδια, εκπαιδευτικά, εποχιακά και δώρα για όλες τις ηλικίες.</p>
          <div className="socials">
            {_gs('facebook_url','') && <a href={_gs('facebook_url','#')} target="_blank" rel="noopener noreferrer" aria-label="Facebook"><Icon name="fb" size={18}/></a>}
            {_gs('instagram_url','') && <a href={_gs('instagram_url','#')} target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Icon name="ig" size={18}/></a>}
            {_gs('tiktok_url','') && <a href={_gs('tiktok_url','#')} target="_blank" rel="noopener noreferrer" aria-label="TikTok"><Icon name="tt" size={18}/></a>}
            {_gs('youtube_url','') && <a href={_gs('youtube_url','#')} target="_blank" rel="noopener noreferrer" aria-label="YouTube"><Icon name="yt" size={18}/></a>}
          </div>
        </div>
        <div>
          <h4>Κατάστημα</h4>
          <ul>
            <li><a href="#categories" onClick={(e) => { e.preventDefault(); onNav("categories"); }}>Κατηγορίες</a></li>
            <li><a href="#products" onClick={(e) => { e.preventDefault(); onNav("products"); }}>Δημοφιλή</a></li>
            <li><a href="#offers" onClick={(e) => { e.preventDefault(); onNav("offers"); }}>Προσφορές</a></li>
          </ul>
        </div>
        <div>
          <h4>Εμείς</h4>
          <ul>
            <li><a href="#about" onClick={(e) => { e.preventDefault(); onNav("about"); }}>Η ιστορία μας</a></li>
            <li><a href="#contact" onClick={(e) => { e.preventDefault(); onNav("contact"); }}>Επικοινωνία</a></li>
          </ul>
        </div>
        <div>
          <h4>Βοήθεια</h4>
          <ul>
            <li><a href="#">Παραγγελίες</a></li>
            <li><a href="#">Επιστροφές</a></li>
            <li><a href="#">Όροι χρήσης</a></li>
            <li><a href="#">Απόρρητο</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bot">
        <div>© 2026 Παιχνιδοκόσμος Αναγνώστου · Ερμού 27, Χαλκίδα</div>
        <div>Με αγάπη από το 1978 ♥</div>
      </div>
    </div>
  </footer>
);

window.Nav = Nav;
window.Hero = Hero;
window.Marquee = Marquee;
window.Categories = Categories;
window.Products = Products;
window.About = About;
window.Offers = Offers;
window.Contact = Contact;
window.Footer = Footer;
