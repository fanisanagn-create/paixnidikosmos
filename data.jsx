/* ============================================
   Content data — Greek copy for the toy store
   ============================================ */

const CATEGORIES = [
  { id: "all", label: "Όλα" },
  { id: "toys", label: "Παιχνίδια" },
  { id: "edu", label: "Εκπαιδευτικά" },
  { id: "seasonal", label: "Εποχιακά" },
  { id: "gifts", label: "Δώρα" },
];

const CATEGORY_CARDS = [
  { id: "toys", title: "Παιχνίδια", count: "320+ προϊόντα", art: "blocks", theme: "yellow", desc: "Κλασικά, νέα, αγαπημένα" },
  { id: "edu", title: "Εκπαιδευτικά", count: "180+ προϊόντα", art: "book", theme: "cream", desc: "Παιχνίδι που μαθαίνει" },
  { id: "seasonal", title: "Εποχιακά", count: "Νέα κάθε μήνα", art: "star", theme: "red", desc: "Καρναβάλι, Πάσχα, Χριστούγεννα" },
  { id: "gifts", title: "Δώρα", count: "Για όλες τις ηλικίες", art: "gift", theme: "dark", desc: "Πάντα στο σωστό μέγεθος" },
];

const PRODUCTS = [
  { id: 1, name: "Τρενάκι Express", cat: "toys", price: 24.90, oldPrice: 32.00, tag: "ΝΕΟ", art: "car", bg: "yellow", age: "3+" },
  { id: 2, name: "Αρκουδάκι Φίλος", cat: "toys", price: 18.50, tag: null, art: "bear", bg: "cream", age: "0+" },
  { id: 3, name: "Κύβος του Ρούμπικ", cat: "edu", price: 14.90, tag: "HOT", art: "cube", bg: "yellow", age: "6+" },
  { id: 4, name: "Πύραυλος Αστροναύτη", cat: "toys", price: 29.90, tag: null, art: "rocket", bg: "red", age: "4+" },
  { id: 5, name: "Παιδικό Τύμπανο", cat: "toys", price: 22.00, tag: null, art: "drum", bg: "cream", age: "3+" },
  { id: 6, name: "Παζλ Χαμογελαστό", cat: "edu", price: 9.90, tag: null, art: "puzzle", bg: "yellow", age: "5+" },
  { id: 7, name: "Κηρομπογιές Set 24", cat: "edu", price: 7.50, tag: "BESTSELLER", art: "crayons", bg: "cream", age: "3+" },
  { id: 8, name: "Δεινόσαυρος Rex", cat: "toys", price: 16.90, tag: null, art: "dino", bg: "yellow", age: "4+" },
  { id: 9, name: "Καπέλο Άι-Βασίλη", cat: "seasonal", price: 4.50, tag: "ΕΟΡΤΑΣΤΙΚΟ", art: "santa", bg: "red", age: "Όλες" },
  { id: 10, name: "Μπαλόνια Πάρτι x12", cat: "seasonal", price: 6.00, tag: null, art: "balloon", bg: "cream", age: "Όλες" },
  { id: 11, name: "Κουτί Δώρου Έκπληξη", cat: "gifts", price: 34.90, tag: "ΕΚΠΛΗΞΗ", art: "gift", bg: "red", age: "Όλες" },
  { id: 12, name: "Pack Γενεθλίων", cat: "gifts", price: 19.90, oldPrice: 26.00, tag: null, art: "balloon", bg: "yellow", age: "Όλες" },
];

const TIMELINE = [
  { year: "1978", title: "Η αρχή", text: "Ο παππούς Αναγνώστου ανοίγει ένα μικρό μαγαζάκι σε ένα στενό δρομάκι της Χαλκίδας.." },
  { year: "1995", title: "Δεύτερη γενιά", text: "Η οικογένεια μετακομίζει στο κατάστημα στην Ερμού 27. Πρώτη φορά εποχιακά και είδη δώρων." },
  { year: "2010", title: "Ο Παιχνιδόκοσμος γεννιέται", text: "Νέα ταυτότητα, νέο όνομα. Το κόκκινο τρενάκι γίνεται το σύμβολό μας." },
  { year: "2024", title: "Τρίτη γενιά", text: "Συνεχίζουμε την παράδοση με την ίδια αγάπη — τώρα και online. Πάντα στη Χαλκίδα, πάντα δίπλα σας." },
];

const OFFERS = [
  {
    badge: "Καλοκαιρινή προσφορά",
    title: "Έκπτωση 30%",
    titleAccent: "σε όλα τα εξωτερικά παιχνίδια",
    text: "Φουσκωτές πισίνες, ποδήλατα, παιχνίδια θαλάσσης — όλα -30% μέχρι τέλος Ιουνίου.",
    art: "rocket",
  },
  {
    badge: "Πακέτο γενεθλίων",
    title: "Δωρεάν",
    titleAccent: "συσκευασία δώρου",
    text: "Σε κάθε αγορά πάνω από 25€. Διαλέγεις χρώμα κορδέλας και κάρτα — το ετοιμάζουμε εμείς.",
    art: "gift",
  },
  {
    badge: "Πιστοί πελάτες",
    title: "1 + 1 = 3",
    titleAccent: "στις κηρομπογιές",
    text: "Φέρε δύο πακέτα κηρομπογιές, παίρνεις και τρίτο δωρεάν. Όλο τον μήνα.",
    art: "crayons",
  },
];

const NAV_ITEMS = [
  { id: "home", label: "Αρχική" },
  { id: "categories", label: "Κατηγορίες" },
  { id: "products", label: "Δημοφιλή" },
  { id: "about", label: "Η ιστορία μας" },
  { id: "offers", label: "Προσφορές" },
  { id: "contact", label: "Επικοινωνία" },
];

window.CATEGORIES = CATEGORIES;
window.CATEGORY_CARDS = CATEGORY_CARDS;
window.PRODUCTS = PRODUCTS;
window.TIMELINE = TIMELINE;
window.OFFERS = OFFERS;
window.NAV_ITEMS = NAV_ITEMS;

const SUPABASE_URL      = "https://dgsijgqqnjtsxpujkinj.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRnc2lqZ3Fxbmp0c3hwdWpraW5qIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk4MTE1MDEsImV4cCI6MjA5NTM4NzUwMX0.JqOtx3-Ewk_SFgAx0nX3mFfz6lbX13ijhQt-_K2-z08";

function _sbClient() {
  if (!window.supabase || SUPABASE_URL === "YOUR_SUPABASE_URL") return null;
  if (!window._sbInstance) {
    window._sbInstance = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
  }
  return window._sbInstance;
}

async function loadProductsFromSheets() {
  const sb = _sbClient();
  if (!sb) return;
  try {
    const { data, error } = await sb
      .from('products')
      .select('*')
      .eq('active', true)
      .order('sort_order', { ascending: true });
    if (error) throw error;
    if (!data || data.length === 0) return;
    window.PRODUCTS = data.map(r => ({
      id:       r.id,
      name:     r.name       || '',
      cat:      r.cat        || 'toys',
      price:    parseFloat(r.price)     || 0,
      oldPrice: r.old_price  ? parseFloat(r.old_price) : null,
      tag:      r.tag        || null,
      art:      r.art        || 'gift',
      bg:       r.bg         || 'yellow',
      age:      r.age        || 'Όλες',
      image:    r.image      || null,
    }));
    console.info(`[Supabase] ✓ ${window.PRODUCTS.length} προϊόντα`);
  } catch (e) {
    console.warn('[Supabase] Αδυναμία φόρτωσης προϊόντων — χρησιμοποιούνται οι προεπιλογές.', e.message);
  }
}

async function loadOffersFromSheets() {
  const sb = _sbClient();
  if (!sb) return;
  try {
    const { data, error } = await sb
      .from('offers')
      .select('*')
      .eq('active', true)
      .order('sort_order', { ascending: true });
    if (error) throw error;
    if (!data || data.length === 0) return;
    window.OFFERS = data.map(r => ({
      badge:       r.badge        || '',
      title:       r.title        || '',
      titleAccent: r.title_accent || '',
      text:        r.text         || '',
      art:         r.art          || 'gift',
    }));
    console.info(`[Supabase] ✓ ${window.OFFERS.length} προσφορές`);
  } catch (e) {
    console.warn('[Supabase] Αδυναμία φόρτωσης προσφορών — χρησιμοποιούνται οι προεπιλογές.', e.message);
  }
}

window.loadProductsFromSheets = loadProductsFromSheets;
window.loadOffersFromSheets   = loadOffersFromSheets;

window.SITE_SETTINGS = {};

window.getSetting = (key, fallback) =>
  (window.SITE_SETTINGS && window.SITE_SETTINGS[key] !== undefined && window.SITE_SETTINGS[key] !== '')
    ? window.SITE_SETTINGS[key]
    : (fallback !== undefined ? fallback : '');

async function loadSettingsFromSupabase() {
  const sb = _sbClient();
  if (!sb) return;
  try {
    const { data, error } = await sb.from('settings').select('key, value');
    if (error) throw error;
    if (!data || data.length === 0) return;
    window.SITE_SETTINGS = Object.fromEntries(data.map(r => [r.key, r.value]));
    console.info(`[Supabase] ✓ ${data.length} ρυθμίσεις φορτώθηκαν`);
  } catch (e) {
    console.warn('[Supabase] Αδυναμία φόρτωσης ρυθμίσεων — χρησιμοποιούνται οι προεπιλογές.', e.message);
  }
}

window.loadSettingsFromSupabase = loadSettingsFromSupabase;
