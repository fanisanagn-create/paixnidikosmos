# Παιχνιδοκόσμος Αναγνώστου — Project Memory

## Τι είναι αυτό
Website για το παιχνιδοκατάστημα της αδερφής του Fanis στη Χαλκίδα (Ερμού 27).
Το site δουλεύει με React 18 + Babel (no build step), Supabase για τη βάση, EmailJS για φόρμα επικοινωνίας, Vercel για hosting.

## Αρχεία
- `index.html` — entry point
- `styles.css` — όλα τα styles
- `tweaks-panel.jsx` — dev tweaks panel
- `art.jsx` — SVG illustration components
- `data.jsx` — hardcoded fallback data + Supabase client
- `sections.jsx` — all section components
- `app.jsx` — App root, state management
- `admin.html` — standalone admin panel

## Supabase
- URL: https://dgsijgqqnjtsxpujkinj.supabase.co
- Πίνακες: products, offers, settings
- RLS: public SELECT, authenticated-only write

## EmailJS (pending)
- Service ID: YOUR_SERVICE_ID
- Template ID: YOUR_TEMPLATE_ID
- Public Key: YOUR_EMAILJS_PUBLIC_KEY

## Deployment
- GitHub: fanisanagn-create/paixnidikosmos
- Vercel: import from GitHub at vercel.com/new
- Domain: aatoys.gr (να αγοραστεί)
