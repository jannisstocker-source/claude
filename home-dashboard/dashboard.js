/* Zuhause Dashboard – gemeinsame Logik aller Seiten */
'use strict';
const PAGES = [{"view": "heute", "file": "index.html", "name": "Zuhause Dashboard", "short": "Zuhause"}, {"view": "training", "file": "training.html", "name": "Training", "short": "Training"}, {"view": "essen", "file": "ernaehrung.html", "name": "Ernährung", "short": "Essen"}, {"view": "laufen", "file": "laufen.html", "name": "Laufen", "short": "Laufen"}, {"view": "zuhause", "file": "zuhause.html", "name": "Zuhause", "short": "Zuhause"}, {"view": "finanzen", "file": "finanzen.html", "name": "Finanzen", "short": "Finanzen"}, {"view": "planer", "file": "planer.html", "name": "Planer", "short": "Planer"}, {"view": "einstellungen", "file": "einstellungen.html", "name": "Einstellungen", "short": "Einstellungen"}];
const SPRITE = "<svg class=\"sprite\" aria-hidden=\"true\" focusable=\"false\">\n  <symbol id=\"i-home\" viewBox=\"0 0 24 24\"><path d=\"M4 11.5 12 5l8 6.5V19a1 1 0 0 1-1 1h-4.5v-5.5h-5V20H5a1 1 0 0 1-1-1z\"/></symbol>\n  <symbol id=\"i-gym\" viewBox=\"0 0 24 24\"><path d=\"M6.5 7v10M17.5 7v10M3.5 9.5v5M20.5 9.5v5M6.5 12h11\"/></symbol>\n  <symbol id=\"i-food\" viewBox=\"0 0 24 24\"><path d=\"M7 3v8M5 3v5a2 2 0 0 0 4 0V3M7 11v10M16 21V3c-2.2 1.2-3.5 3.6-3.5 7.5V14H16\"/></symbol>\n  <symbol id=\"i-run\" viewBox=\"0 0 24 24\"><circle cx=\"15\" cy=\"4.5\" r=\"1.8\"/><path d=\"m7 21 3.2-5.2 3 2.2.8 3M6 12l3.2-3.4 3.6.4 2 3.4 3 1.3M10.4 15.8l2.1-6.6\"/></symbol>\n  <symbol id=\"i-house\" viewBox=\"0 0 24 24\"><path d=\"M3.5 10 12 3.5 20.5 10M5.5 8.5V20h13V8.5\"/><path d=\"M10 20v-5.5h4V20\"/></symbol>\n  <symbol id=\"i-tv\" viewBox=\"0 0 24 24\"><rect x=\"3\" y=\"5\" width=\"18\" height=\"12\" rx=\"2\"/><path d=\"M8.5 20.5h7M12 17v3.5\"/></symbol>\n  <symbol id=\"i-settings\" viewBox=\"0 0 24 24\"><circle cx=\"12\" cy=\"12\" r=\"3\"/><path d=\"M12 2.8v2.6M12 18.6v2.6M21.2 12h-2.6M5.4 12H2.8M18.5 5.5l-1.8 1.8M7.3 16.7l-1.8 1.8M18.5 18.5l-1.8-1.8M7.3 7.3 5.5 5.5\"/></symbol>\n  <symbol id=\"i-plus\" viewBox=\"0 0 24 24\"><path d=\"M12 5v14M5 12h14\"/></symbol>\n  <symbol id=\"i-minus\" viewBox=\"0 0 24 24\"><path d=\"M5 12h14\"/></symbol>\n  <symbol id=\"i-check\" viewBox=\"0 0 24 24\"><path d=\"m5 12.5 4.5 4.5L19 7.5\"/></symbol>\n  <symbol id=\"i-x\" viewBox=\"0 0 24 24\"><path d=\"M6 6l12 12M18 6 6 18\"/></symbol>\n  <symbol id=\"i-left\" viewBox=\"0 0 24 24\"><path d=\"m14.5 6-6 6 6 6\"/></symbol>\n  <symbol id=\"i-right\" viewBox=\"0 0 24 24\"><path d=\"m9.5 6 6 6-6 6\"/></symbol>\n  <symbol id=\"i-up\" viewBox=\"0 0 24 24\"><path d=\"m6 14.5 6-6 6 6\"/></symbol>\n  <symbol id=\"i-down\" viewBox=\"0 0 24 24\"><path d=\"m6 9.5 6 6 6-6\"/></symbol>\n  <symbol id=\"i-trash\" viewBox=\"0 0 24 24\"><path d=\"M4.5 7h15M9.5 7V4.5h5V7M6.5 7l1 13h9l1-13M10.5 11v5.5M13.5 11v5.5\"/></symbol>\n  <symbol id=\"i-edit\" viewBox=\"0 0 24 24\"><path d=\"M4 20h4L19 9l-4-4L4 16zM13.5 6.5l4 4\"/></symbol>\n  <symbol id=\"i-timer\" viewBox=\"0 0 24 24\"><circle cx=\"12\" cy=\"13.5\" r=\"7.5\"/><path d=\"M12 9.5v4l2.5 2M9.5 2.8h5M19 6.5l1.5-1.5\"/></symbol>\n  <symbol id=\"i-play\" viewBox=\"0 0 24 24\"><path d=\"M7.5 5v14l11-7z\"/></symbol>\n  <symbol id=\"i-pause\" viewBox=\"0 0 24 24\"><path d=\"M8 5v14M16 5v14\"/></symbol>\n  <symbol id=\"i-stop\" viewBox=\"0 0 24 24\"><rect x=\"6\" y=\"6\" width=\"12\" height=\"12\" rx=\"1.5\"/></symbol>\n  <symbol id=\"i-search\" viewBox=\"0 0 24 24\"><circle cx=\"10.5\" cy=\"10.5\" r=\"6.5\"/><path d=\"m15.5 15.5 5 5\"/></symbol>\n  <symbol id=\"i-barcode\" viewBox=\"0 0 24 24\"><path d=\"M3 5v14M6 5v14M9.5 5v14M11.5 5v14M15 5v14M18 5v14M21 5v14\"/></symbol>\n  <symbol id=\"i-flame\" viewBox=\"0 0 24 24\"><path d=\"M12 21c-3.9 0-6.5-2.6-6.5-6.2 0-4 3.3-6 3.8-9.8 2.6 1.5 4 3.7 4.2 6.2 1-.6 1.6-1.6 1.8-3 1.9 1.7 3.2 4 3.2 6.6 0 3.6-2.6 6.2-6.5 6.2z\"/></symbol>\n  <symbol id=\"i-trophy\" viewBox=\"0 0 24 24\"><path d=\"M7.5 4h9v5a4.5 4.5 0 0 1-9 0zM7.5 6H4.5c0 2.6 1.3 4 3.3 4.3M16.5 6h3c0 2.6-1.3 4-3.3 4.3M12 13.5V17M8.5 20.5h7M9.5 17h5v3.5h-5z\"/></symbol>\n  <symbol id=\"i-drop\" viewBox=\"0 0 24 24\"><path d=\"M12 3.5c3 3.8 6 7.2 6 10.6a6 6 0 0 1-12 0c0-3.4 3-6.8 6-10.6z\"/></symbol>\n  <symbol id=\"i-scale\" viewBox=\"0 0 24 24\"><rect x=\"3.5\" y=\"3.5\" width=\"17\" height=\"17\" rx=\"4\"/><path d=\"M8.5 9.5a5 5 0 0 1 7 0L13 12\"/></symbol>\n  <symbol id=\"i-chart\" viewBox=\"0 0 24 24\"><path d=\"M4 4v16h16M8 15l3.5-4 3 2.5L19 8\"/></symbol>\n  <symbol id=\"i-list\" viewBox=\"0 0 24 24\"><path d=\"M9 6.5h11M9 12h11M9 17.5h11M4.5 6.5h.01M4.5 12h.01M4.5 17.5h.01\"/></symbol>\n  <symbol id=\"i-more\" viewBox=\"0 0 24 24\"><path d=\"M5.5 12h.01M12 12h.01M18.5 12h.01\"/></symbol>\n  <symbol id=\"i-bolt\" viewBox=\"0 0 24 24\"><path d=\"M13 3 5.5 13.5H12L11 21l7.5-10.5H12z\"/></symbol>\n  <symbol id=\"i-pin\" viewBox=\"0 0 24 24\"><path d=\"M12 21s6.5-6 6.5-11a6.5 6.5 0 0 0-13 0c0 5 6.5 11 6.5 11z\"/><circle cx=\"12\" cy=\"10\" r=\"2.3\"/></symbol>\n  <symbol id=\"i-bulb\" viewBox=\"0 0 24 24\"><path d=\"M9 17.5h6M10 20.5h4M8.3 14.5A6 6 0 1 1 15.7 14.5c-.8.7-1.2 1.6-1.2 2.5v.5h-5V17c0-.9-.4-1.8-1.2-2.5z\"/></symbol>\n  <symbol id=\"i-blinds\" viewBox=\"0 0 24 24\"><path d=\"M4 4h16M5 4v16M19 4v16M5 8h14M5 12h14M5 16h14\"/></symbol>\n  <symbol id=\"i-thermo\" viewBox=\"0 0 24 24\"><path d=\"M10 14.5V5a2 2 0 0 1 4 0v9.5a4 4 0 1 1-4 0z\"/><path d=\"M12 9v7\"/></symbol>\n  <symbol id=\"i-plug\" viewBox=\"0 0 24 24\"><path d=\"M9 3v5M15 3v5M6.5 8h11v3a5.5 5.5 0 0 1-11 0zM12 16.5V21\"/></symbol>\n  <symbol id=\"i-vacuum\" viewBox=\"0 0 24 24\"><circle cx=\"12\" cy=\"12\" r=\"8.5\"/><circle cx=\"12\" cy=\"12\" r=\"3\"/><path d=\"M12 3.5v2\"/></symbol>\n  <symbol id=\"i-speaker\" viewBox=\"0 0 24 24\"><rect x=\"6\" y=\"3\" width=\"12\" height=\"18\" rx=\"2\"/><circle cx=\"12\" cy=\"14\" r=\"3.2\"/><path d=\"M12 7h.01\"/></symbol>\n  <symbol id=\"i-coffee\" viewBox=\"0 0 24 24\"><path d=\"M5 9h11v5.5A5.5 5.5 0 0 1 10.5 20h0A5.5 5.5 0 0 1 5 14.5zM16 10.5h1.5a2.5 2.5 0 0 1 0 5H16M8 3.5c0 1.5 1.5 1.5 1.5 3M12 3.5c0 1.5 1.5 1.5 1.5 3\"/></symbol>\n  <symbol id=\"i-link\" viewBox=\"0 0 24 24\"><path d=\"M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5\"/></symbol>\n  <symbol id=\"i-copy\" viewBox=\"0 0 24 24\"><rect x=\"8.5\" y=\"8.5\" width=\"11\" height=\"11\" rx=\"2\"/><path d=\"M15.5 8.5V6a1.5 1.5 0 0 0-1.5-1.5H6A1.5 1.5 0 0 0 4.5 6v8A1.5 1.5 0 0 0 6 15.5h2.5\"/></symbol>\n  <symbol id=\"i-calendar\" viewBox=\"0 0 24 24\"><rect x=\"3.5\" y=\"5\" width=\"17\" height=\"15.5\" rx=\"2\"/><path d=\"M3.5 10h17M8 3v4M16 3v4\"/></symbol>\n  <symbol id=\"i-sync\" viewBox=\"0 0 24 24\"><path d=\"M19.5 10A7.5 7.5 0 0 0 6 6.5L4.5 8M4.5 14A7.5 7.5 0 0 0 18 17.5l1.5-1.5M4.5 4v4h4M19.5 20v-4h-4\"/></symbol>\n  <symbol id=\"i-camera\" viewBox=\"0 0 24 24\"><path d=\"M4 8h3.5L9 5.5h6L16.5 8H20v11H4z\"/><circle cx=\"12\" cy=\"13\" r=\"3.5\"/></symbol>\n  <symbol id=\"i-wallet\" viewBox=\"0 0 24 24\"><path d=\"M4 7.5A2.5 2.5 0 0 1 6.5 5H18v3M4 7.5V18a1.5 1.5 0 0 0 1.5 1.5H20V8H6.5A2.5 2.5 0 0 1 4 7.5z\"/><circle cx=\"16\" cy=\"13.75\" r=\"1.2\"/></symbol>\n  <symbol id=\"i-cart\" viewBox=\"0 0 24 24\"><path d=\"M3 4h2.5l2.2 10.5h10.6L20.5 7H6.6\"/><circle cx=\"9\" cy=\"19\" r=\"1.5\"/><circle cx=\"17\" cy=\"19\" r=\"1.5\"/></symbol>\n  <symbol id=\"i-tasks\" viewBox=\"0 0 24 24\"><rect x=\"3.5\" y=\"4\" width=\"5\" height=\"5\" rx=\"1.2\"/><path d=\"m4.8 6.5 1 1 1.8-2M11.5 6.5h9M3.5 15h5v5h-5zM11.5 17.5h9\"/></symbol>\n  <symbol id=\"i-grid\" viewBox=\"0 0 24 24\"><rect x=\"4\" y=\"4\" width=\"6.5\" height=\"6.5\" rx=\"1.5\"/><rect x=\"13.5\" y=\"4\" width=\"6.5\" height=\"6.5\" rx=\"1.5\"/><rect x=\"4\" y=\"13.5\" width=\"6.5\" height=\"6.5\" rx=\"1.5\"/><rect x=\"13.5\" y=\"13.5\" width=\"6.5\" height=\"6.5\" rx=\"1.5\"/></symbol>\n  <symbol id=\"i-meter\" viewBox=\"0 0 24 24\"><path d=\"M4.5 16.5a8 8 0 1 1 15 0\"/><path d=\"M12 13.5 15.5 9\"/><circle cx=\"12\" cy=\"14\" r=\"1.3\"/><path d=\"M5 20h14\"/></symbol>\n  <symbol id=\"i-euro\" viewBox=\"0 0 24 24\"><path d=\"M17.5 6.5A6.5 6.5 0 1 0 17.5 17.5M4.5 10.5h9M4.5 13.5h9\"/></symbol>\n  <symbol id=\"i-pulse\" viewBox=\"0 0 24 24\"><path d=\"M3 12.5h4l2.2-5 3.6 10 2.4-6.5 1.3 1.5H21\"/></symbol>\n</svg>";
/* =====================================================================
   Grundbausteine: Hilfsfunktionen, Speicher, Sync, Router, Dialoge
   ===================================================================== */

document.body.insertAdjacentHTML('afterbegin', SPRITE);
const $ = (sel, root) => (root || document).querySelector(sel);
const $$ = (sel, root) => Array.from((root || document).querySelectorAll(sel));
const clone = v => (v === undefined ? undefined : JSON.parse(JSON.stringify(v)));
const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
const sum = arr => arr.reduce((a, b) => a + (+b || 0), 0);
const uid = () => Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const icon = (name, cls) => `<svg class="ic ${cls || ''}" aria-hidden="true"><use href="#i-${name}"/></svg>`;
const num = v => { const n = parseFloat(String(v).replace(',', '.')); return isFinite(n) ? n : 0; };

/* ---------- Zahlen und Zeiten (deutsch formatiert) ---------- */
const NF = {};
function fmt(n, d) {
  d = d || 0;
  if (!NF[d]) NF[d] = new Intl.NumberFormat('de-DE', { minimumFractionDigits: 0, maximumFractionDigits: d });
  return NF[d].format(n || 0);
}
function fmtFixed(n, d) { return new Intl.NumberFormat('de-DE', { minimumFractionDigits: d, maximumFractionDigits: d }).format(n || 0); }
function fmtDur(sec, withHours) {
  sec = Math.max(0, Math.round(sec || 0));
  const h = Math.floor(sec / 3600), m = Math.floor(sec % 3600 / 60), s = sec % 60;
  const pad = x => String(x).padStart(2, '0');
  return (h || withHours) ? `${h}:${pad(m)}:${pad(s)}` : `${m}:${pad(s)}`;
}
function fmtMin(sec) {
  const m = Math.round((sec || 0) / 60);
  return m >= 60 ? `${Math.floor(m / 60)} h${m % 60 ? ' ' + (m % 60) + ' min' : ''}` : `${m} min`;
}
function fmtPace(secPerKm) {
  if (!secPerKm || !isFinite(secPerKm)) return '–';
  const m = Math.floor(secPerKm / 60), s = Math.round(secPerKm % 60);
  return s === 60 ? `${m + 1}:00` : `${m}:${String(s).padStart(2, '0')}`;
}
function parseDur(str) {
  const p = String(str || '').trim().split(':').map(x => num(x));
  if (p.length === 3) return p[0] * 3600 + p[1] * 60 + p[2];
  if (p.length === 2) return p[0] * 60 + p[1];
  return p[0] * 60; // nur Minuten
}

/* ---------- Datum: lokale Tagesschlüssel YYYY-MM-DD ---------- */
const pad2 = n => String(n).padStart(2, '0');
function dkey(d) { d = d ? new Date(d) : new Date(); return `${d.getFullYear()}-${pad2(d.getMonth() + 1)}-${pad2(d.getDate())}`; }
const todayKey = () => dkey();
function parseKey(k) { const [y, m, d] = k.split('-').map(Number); return new Date(y, m - 1, d); }
function addDays(k, n) { const d = parseKey(k); d.setDate(d.getDate() + n); return dkey(d); }
function weekStart(k) { const d = parseKey(k || todayKey()); const wd = (d.getDay() + 6) % 7; d.setDate(d.getDate() - wd); return dkey(d); }
const monthOf = k => k.slice(0, 7);
const DAYS = ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'];
const DAYS_LONG = ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'];
const MONTHS = ['Jan.', 'Feb.', 'März', 'Apr.', 'Mai', 'Juni', 'Juli', 'Aug.', 'Sept.', 'Okt.', 'Nov.', 'Dez.'];
const MONTHS_LONG = ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'];
function fmtDate(k, opts) {
  const d = typeof k === 'string' ? parseKey(k) : new Date(k);
  const t = todayKey(), key = dkey(d);
  if (!(opts && opts.plain)) {
    if (key === t) return 'Heute';
    if (key === addDays(t, -1)) return 'Gestern';
    if (key === addDays(t, 1)) return 'Morgen';
  }
  const base = `${d.getDate()}. ${MONTHS[d.getMonth()]}`;
  const withYear = d.getFullYear() !== new Date().getFullYear();
  return (opts && opts.day ? DAYS[d.getDay()] + ', ' : '') + base + (withYear ? ' ' + d.getFullYear() : '');
}
function fmtTime(ts) { const d = new Date(ts); return `${pad2(d.getHours())}:${pad2(d.getMinutes())}`; }
function daysBetween(a, b) { return Math.round((parseKey(b) - parseKey(a)) / 864e5); }

/* =====================================================================
   Speicher: Schlüssel-Wert-Ablage in localStorage, gespiegelt in die
   Claude-Datenbank (falls die Seite als Artifact läuft).
   Daten sind in Monats-Eimer aufgeteilt (w-2026-11, n-2026-11, r-2026-11),
   damit kein Dokument zu groß wird.
   ===================================================================== */
const LS = 'zh:';
const LOCAL = 'zh-local:';   // nur auf diesem Gerät (Timer, Token, Ansicht)
let lsOk = true;
try { localStorage.setItem('zh-test', '1'); localStorage.removeItem('zh-test'); } catch (e) { lsOk = false; }
function lsRead(k) { if (!lsOk) return undefined; try { const v = localStorage.getItem(k); return v == null ? undefined : JSON.parse(v); } catch (e) { return undefined; } }
function lsWrite(k, v) { if (!lsOk) return; try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { toast('Speicher voll – bitte Daten exportieren'); } }
const Local = {
  mem: {},
  get(k, def) { if (!(k in this.mem)) { const v = lsRead(LOCAL + k); this.mem[k] = v === undefined ? def : v; } return this.mem[k]; },
  set(k, v) { this.mem[k] = v; lsWrite(LOCAL + k, v); }
};

const Store = {
  mem: {},
  meta: lsRead(LS + '__meta') || {},
  get(key, def) {
    if (!(key in this.mem)) {
      const v = lsRead(LS + key);
      this.mem[key] = v === undefined ? clone(def) : v;
    }
    return this.mem[key];
  },
  set(key, val) {
    this.mem[key] = val;
    this.meta[key] = Date.now();
    lsWrite(LS + key, val);
    lsWrite(LS + '__meta', this.meta);
    Sync.push(key);
  },
  applyRemote(key, val, t) {
    this.mem[key] = val;
    this.meta[key] = t;
    lsWrite(LS + key, val);
    lsWrite(LS + '__meta', this.meta);
  },
  keys(prefix) { return Object.keys(this.meta).filter(k => !prefix || k.indexOf(prefix) === 0).sort(); },
  exportAll() { const out = {}; this.keys().forEach(k => { out[k] = this.get(k); }); return out; },
  importAll(data) { Object.keys(data).forEach(k => { if (/^[a-z][a-z0-9-]*$/i.test(k)) this.set(k, data[k]); }); },
  // Zusammenführen statt ersetzen: Listen nach id vereinigen, Objekte nach Schlüssel (die Datei gewinnt bei gleichen Einträgen)
  mergeAll(data) {
    let n = 0;
    Object.keys(data).forEach(k => {
      if (!/^[a-z][a-z0-9-]*$/i.test(k) || k === 'active' || k === 'probe' || data[k] == null) return;
      const cur = this.get(k), inc = data[k];
      let out = inc;
      if (Array.isArray(cur) && Array.isArray(inc)) {
        const key = x => x && typeof x === 'object' ? (x.id || x.d || JSON.stringify(x)) : String(x);
        const map = new Map(cur.map(x => [key(x), x]));
        inc.forEach(x => map.set(key(x), x));
        out = Array.from(map.values());
      } else if (cur && inc && typeof cur === 'object' && typeof inc === 'object' && !Array.isArray(cur) && !Array.isArray(inc)) {
        out = Object.assign({}, cur, inc);
      }
      if (JSON.stringify(out) !== JSON.stringify(cur)) { this.set(k, out); n++; }
    });
    return n;
  },
  clearAll() { this.keys().forEach(k => this.set(k, null)); }
};

/* Sync über die Claude-Datenbank: jeder Eimer ist ein Dokument unter
   data/users/<id>/<schlüssel> mit {v: Wert, t: Zeitstempel}. Neuere Zeit gewinnt. */
const Sync = {
  col: null, state: 'local', pending: {}, writing: {}, again: {}, first: true,
  async init() {
    renderSyncState();
    if (!(window.claude && typeof window.claude.use === 'function')) return;
    try {
      const [db, user] = await Promise.all([window.claude.use('db'), window.claude.use('user')]);
      if (!db || !user) return;
      const id = await user.id();
      if (!id) return;
      this.col = db.collection('data/users/' + id);
    } catch (e) { return; }
    this.state = 'connecting'; renderSyncState();
    const timer = setTimeout(() => { if (this.state === 'connecting') { this.state = 'offline'; renderSyncState(); } }, 10000);
    this.col.onSnapshot(snap => {
      if (!snap.metadata.fromCache) { clearTimeout(timer); this.state = 'synced'; }
      let changed = false;
      const remote = {};
      snap.docs.forEach(d => {
        const body = d.data();
        if (!body || typeof body.t !== 'number') return;
        remote[d.id] = body.t;
        if (body.t > (Store.meta[d.id] || 0)) { Store.applyRemote(d.id, clone(body.v), body.t); changed = true; }
      });
      if (this.first && !snap.metadata.fromCache) {
        this.first = false;
        Store.keys().forEach(k => { if ((Store.meta[k] || 0) > (remote[k] || 0)) this.push(k, true); });
      }
      renderSyncState();
      if (changed) { Bus.emit('data'); rerender(); }
    }, () => { clearTimeout(timer); this.state = 'error'; renderSyncState(); });
  },
  push(key, now) {
    if (!this.col) return;
    clearTimeout(this.pending[key]);
    this.pending[key] = setTimeout(() => this.write(key), now ? 50 : 1200);
  },
  async write(key) {
    if (this.writing[key]) { this.again[key] = true; return; }
    this.writing[key] = true;
    try {
      await this.col.doc(key).set({ v: Store.get(key) === undefined ? null : Store.get(key), t: Store.meta[key] || Date.now() });
    } catch (e) {
      if (e && e.code === 'quota_exceeded') toast('Cloud-Speicher voll – alte Daten exportieren');
      else if (e && e.code === 'invalid_argument') toast('Ein Datensatz ist zu groß für den Sync');
    } finally {
      this.writing[key] = false;
      if (this.again[key]) { this.again[key] = false; this.write(key); }
    }
  }
};
// Beim Verlassen der Seite ausstehende Sync-Schreibvorgänge sofort anstoßen
window.addEventListener('pagehide', () => { Object.keys(Sync.pending).forEach(k => { clearTimeout(Sync.pending[k]); if (Sync.col) Sync.write(k); }); Sync.pending = {}; });
const SYNC_URL = 'https://claude.ai/artifact/6UQZywCWzB9eiL1w74DySu';
const isLocalCopy = () => !(window.claude && typeof window.claude.use === 'function');
function syncText() {
  return {
    local: 'Nur auf diesem Gerät gespeichert',
    connecting: 'Verbinde mit der Cloud …',
    synced: 'Synchronisiert zwischen deinen Geräten',
    offline: 'Cloud gerade nicht erreichbar',
    error: 'Sync unterbrochen – Daten bleiben lokal'
  }[Sync.state];
}
function renderSyncState() {
  $$('[data-sync]').forEach(el => { el.textContent = syncText(); });
  const short = { local: 'Nur dieses Gerät', connecting: 'Verbinde …', synced: 'Abgeglichen', offline: 'Offline', error: 'Sync gestört' }[Sync.state];
  $$('[data-sync-chip]').forEach(el => { el.className = 'sync-chip ' + Sync.state; el.title = syncText(); el.innerHTML = `<i></i>${short}`; });
}

/* Kleiner Ereignisbus */
const Bus = {
  h: {},
  on(ev, fn) { (this.h[ev] = this.h[ev] || []).push(fn); },
  emit(ev, x) { (this.h[ev] || []).forEach(fn => fn(x)); }
};

/* ---------- Einstellungen ---------- */
const DEFAULT_SETTINGS = {
  name: 'Jannis',
  theme: 'auto',
  restSec: 90,
  weekGoal: 4,
  runYearGoal: 600,
  kcalGoal: 2500,
  protein: 170, carbs: 280, fat: 80, fiber: 30, sugar: 60, salt: 6,
  waterGoal: 8,
  creditExercise: true,
  height: 183, birthYear: 1999, sex: 'm', activity: 1.55, goalType: 'halten',
  tvUrl: 'http://192.168.192.65:8090/',
  haUrl: '',
  seenWelcome: false
};
function settings() { return Object.assign({}, DEFAULT_SETTINGS, Store.get('settings', {}) || {}); }
function saveSettings(patch) { Store.set('settings', Object.assign({}, Store.get('settings', {}) || {}, patch)); applyTheme(); }
// Theme der umgebenden Seite (z. B. Claude-Artifact) merken, damit „Automatisch“ es nicht überschreibt
const HOST_THEME = document.documentElement.getAttribute('data-theme');
function applyTheme() {
  const t = settings().theme;
  if (t === 'light' || t === 'dark') document.documentElement.setAttribute('data-theme', t);
  else if (HOST_THEME) document.documentElement.setAttribute('data-theme', HOST_THEME);
  else document.documentElement.removeAttribute('data-theme');
}

/* ---------- Datenzugriff: Trainings, Läufe, Tagebuch, Gewicht ---------- */
function bucketList(prefix) {
  let out = [];
  Store.keys(prefix).forEach(k => { const v = Store.get(k); if (Array.isArray(v)) out = out.concat(v); });
  return out;
}
function upsertBucket(prefix, item, dateField) {
  const key = prefix + monthOf(dkey(item[dateField]));
  // ggf. aus anderem Monat entfernen (Datum geändert)
  Store.keys(prefix).forEach(k => {
    if (k === key) return;
    const arr = Store.get(k);
    if (Array.isArray(arr) && arr.some(x => x.id === item.id)) Store.set(k, arr.filter(x => x.id !== item.id));
  });
  const arr = (Store.get(key, []) || []).slice();
  const i = arr.findIndex(x => x.id === item.id);
  if (i >= 0) arr[i] = item; else arr.push(item);
  Store.set(key, arr);
}
function removeFromBuckets(prefix, id) {
  Store.keys(prefix).forEach(k => {
    const arr = Store.get(k);
    if (Array.isArray(arr) && arr.some(x => x.id === id)) Store.set(k, arr.filter(x => x.id !== id));
  });
}
const Workouts = {
  all() { return bucketList('w-').sort((a, b) => b.start - a.start); },
  get(id) { return this.all().find(w => w.id === id); },
  save(w) { upsertBucket('w-', w, 'start'); },
  remove(id) { removeFromBuckets('w-', id); }
};
const Runs = {
  all() { return bucketList('r-').sort((a, b) => b.start - a.start); },
  get(id) { return this.all().find(r => r.id === id); },
  save(r) { upsertBucket('r-', r, 'start'); },
  remove(id) { removeFromBuckets('r-', id); }
};
const MEALS = [
  { id: 'b', name: 'Frühstück' },
  { id: 'l', name: 'Mittagessen' },
  { id: 'd', name: 'Abendessen' },
  { id: 's', name: 'Snacks' }
];
const Diary = {
  day(k) {
    const m = Store.get('n-' + monthOf(k), {}) || {};
    const d = m[k] ? clone(m[k]) : {};
    d.meals = d.meals || {};
    MEALS.forEach(x => { d.meals[x.id] = d.meals[x.id] || []; });
    d.water = d.water || 0;
    return d;
  },
  saveDay(k, d) {
    const key = 'n-' + monthOf(k);
    const m = Object.assign({}, Store.get(key, {}) || {});
    m[k] = d;
    Store.set(key, m);
  },
  totals(d) {
    const t = { kcal: 0, p: 0, c: 0, f: 0, fib: 0, sug: 0, salt: 0 };
    MEALS.forEach(x => d.meals[x.id].forEach(e => { Object.keys(t).forEach(n => { t[n] += +e[n] || 0; }); }));
    return t;
  },
  hasEntries(k) { const m = Store.get('n-' + monthOf(k), {}) || {}; const d = m[k]; return !!(d && d.meals && MEALS.some(x => (d.meals[x.id] || []).length)); }
};
const Body = {
  all() { return (Store.get('body', []) || []).slice().sort((a, b) => a.d < b.d ? -1 : 1); },
  latest() { const a = this.all(); return a[a.length - 1]; },
  set(d, kg) { const a = (Store.get('body', []) || []).filter(x => x.d !== d); if (kg) a.push({ d, kg }); Store.set('body', a); },
  weightOr(def) { const l = this.latest(); return l ? l.kg : def; }
};

/* Kalorienverbrauch durch Training an einem Tag (Schätzung über MET-Werte) */
function exerciseKcal(k) {
  const kg = Body.weightOr(80);
  let kcal = 0;
  Workouts.all().forEach(w => { if (dkey(w.start) === k && w.end) kcal += 5.0 * kg * ((w.end - w.start) / 3600e3); });
  Runs.all().forEach(r => { if (dkey(r.start) === k) kcal += r.km * kg * 1.0; });
  return Math.round(kcal);
}

/* =====================================================================
   Router und Darstellung
   ===================================================================== */
const V = {};          // Ansichten: V.heute = { render(route) }
const A = {};          // Aktionen für data-act
const AfterRender = [];
let lastRouteKey = '';
// Jede Seite (Datei) zeigt genau einen Bereich; Links zu anderen Bereichen wechseln die Datei
const PAGE = (document.body && document.body.dataset.page) || 'heute';
const pageOf = view => PAGES.find(p => p.view === view);
function pageUrl(path) {
  const view = path.split('/')[0] || 'heute', p = pageOf(view);
  const rest = path.split('/').slice(1).join('/');
  return (p ? p.file : 'index.html') + (rest ? '#/' + path : '');
}
function route() {
  const parts = location.hash.replace(/^#\/?/, '').split('/').filter(Boolean).map(decodeURIComponent);
  if (!parts.length || !pageOf(parts[0])) parts.unshift(PAGE);
  return { view: parts[0], sub: parts[1] || '', args: parts.slice(2) };
}
function go(path) {
  const view = path.split('/')[0];
  if (view !== PAGE) { location.href = pageUrl(path); return; }
  if (location.hash === '#/' + path) rerender(); else location.hash = '#/' + path;
}
const AREA_ICONS = { heute: 'home', training: 'gym', essen: 'food', laufen: 'run', zuhause: 'house', finanzen: 'wallet', planer: 'tasks', einstellungen: 'settings' };
function renderTopbar() {
  const p = pageOf(PAGE) || PAGES[0], s = settings();
  $('#topbar').innerHTML = `<div class="tb-inner">${PAGE === 'heute'
    ? `<span class="avatar" aria-hidden="true">${esc((s.name || 'J').trim().charAt(0).toUpperCase())}</span><span class="tb-welcome">${esc(s.name)}<small>Zuhause</small></span>`
    : `<a class="tb-back" href="index.html" aria-label="Zur Startseite">${icon('left')}Start</a><span class="tb-title">${icon(AREA_ICONS[PAGE])}<span>${esc(p.name)}</span></span>`}
    <div class="tb-actions"><a class="sync-chip" data-sync-chip href="einstellungen.html" aria-label="Status des Abgleichs"></a>${PAGE === 'einstellungen' ? '' : `<a class="icon-btn" href="einstellungen.html" aria-label="Einstellungen">${icon('settings')}</a>`}</div></div>`;
  renderSyncState();
  // Bereichs-Leiste (links am Desktop, unten am Handy)
  if (!$('#dock')) document.body.insertAdjacentHTML('beforeend', `<nav class="dock" id="dock" aria-label="Bereiche">${PAGES.filter(x => x.view !== 'einstellungen').map(x =>
    `<a href="${x.file}" class="${x.view === PAGE ? 'active' : ''}"${x.view === PAGE ? ' aria-current="page"' : ''} aria-label="${x.view === 'heute' ? 'Start' : esc(x.name)}" title="${x.view === 'heute' ? 'Start' : esc(x.name)}">${icon(AREA_ICONS[x.view])}</a>`).join('')}</nav>`);
}
A.areas = () => Sheet.open(`${sheetHead('Bereiche')}<nav class="areas" aria-label="Bereiche">${PAGES.map(p =>
  `<a class="area-link${p.view === PAGE ? ' current' : ''}" href="${p.file}"${p.view === PAGE ? ' aria-current="page"' : ''}>${icon(AREA_ICONS[p.view])}${p.view === 'heute' ? 'Start' : esc(p.name)}</a>`).join('')}</nav>`);
function rerender(keepScroll) {
  const r = route();
  if (r.view !== PAGE) { location.replace(pageUrl([r.view, r.sub].concat(r.args).filter(Boolean).join('/'))); return; }
  const view = V[r.view] ? r.view : 'heute';
  const routeKey = r.view + '/' + r.sub + '/' + r.args.join('/');
  const sameRoute = routeKey === lastRouteKey;
  const y = window.scrollY;
  AfterRender.length = 0;
  Charts.reset();
  const html = V[view].render(r);
  $('#view').innerHTML = `<div class="view-inner${lastRouteKey ? '' : ' enter'}">${html}</div>`;
  AfterRender.forEach(fn => { try { fn(); } catch (e) { console.error(e); } });
  Charts.drawAll();
  if (sameRoute || keepScroll) window.scrollTo(0, y); else window.scrollTo(0, 0);
  lastRouteKey = routeKey;
  const p = pageOf(PAGE);
  const sub = $('.tabs .tab.active');
  document.title = PAGE === 'heute' ? 'Zuhause Dashboard' : `${p.name}${sub && r.sub ? ' – ' + sub.textContent : ''} · Zuhause`;
}
window.addEventListener('hashchange', () => rerender());
// Links wie #/essen/ziele auf einer anderen Seite führen zur passenden Datei
document.addEventListener('click', e => {
  const a = e.target.closest('a[href^="#/"]');
  if (!a) return;
  const view = a.getAttribute('href').slice(2).split('/')[0];
  if (view && view !== PAGE && pageOf(view)) { e.preventDefault(); location.href = pageUrl(decodeURIComponent(a.getAttribute('href').slice(2))); }
}, true);

/* Ereignisse: data-act (Klick), data-input (Eingabe), data-change (Änderung) */
document.addEventListener('click', e => {
  const el = e.target.closest('[data-act]');
  if (!el || el.disabled) return;
  const fn = A[el.dataset.act];
  if (fn) { e.preventDefault(); fn(el, e); }
});
document.addEventListener('input', e => {
  const el = e.target.closest('[data-input]');
  if (el && A[el.dataset.input]) A[el.dataset.input](el, e);
});
document.addEventListener('change', e => {
  const el = e.target.closest('[data-change]');
  if (el && A[el.dataset.change]) A[el.dataset.change](el, e);
});
document.addEventListener('submit', e => {
  const f = e.target.closest('form[data-submit]');
  if (f) { e.preventDefault(); const fn = A[f.dataset.submit]; if (fn) fn(f, e); }
});
document.addEventListener('keydown', e => {
  if (e.key === 'Enter' && e.target.matches('[data-enter]')) {
    e.preventDefault();
    const fn = A[e.target.dataset.enter]; if (fn) fn(e.target, e);
  }
});
function formData(form) {
  const o = {};
  $$('input, select, textarea', form).forEach(el => {
    if (!el.name) return;
    if (el.type === 'checkbox') o[el.name] = el.checked;
    else if (el.type === 'radio') { if (el.checked) o[el.name] = el.value; }
    else o[el.name] = el.value;
  });
  return o;
}

/* ---------- Dialog (Bottom-Sheet auf dem Handy) ---------- */
const Sheet = {
  onClose: null,
  open(html, opts) {
    const d = $('#sheet');
    $('#sheetBody').innerHTML = html;
    this.onClose = opts && opts.onClose;
    if (!d.open) { if (d.showModal) d.showModal(); else d.setAttribute('open', ''); }
    const f = $('[autofocus]', d);
    if (f && !(opts && opts.noFocus) && window.matchMedia('(pointer: fine)').matches) setTimeout(() => f.focus(), 30);
  },
  update(html) { $('#sheetBody').innerHTML = html; },
  close() {
    const d = $('#sheet');
    if (d.open) { if (d.close) d.close(); else d.removeAttribute('open'); }
  },
  isOpen() { return $('#sheet').open; }
};
$('#sheet').addEventListener('close', () => { const fn = Sheet.onClose; Sheet.onClose = null; if (fn) fn(); });
$('#sheet').addEventListener('click', e => { if (e.target === $('#sheet')) Sheet.close(); });
A.closeSheet = () => Sheet.close();
function sheetHead(title, sub) {
  return `<div class="sheet-head"><div><h2 id="sheetTitle">${title}</h2>${sub ? `<p class="muted small">${sub}</p>` : ''}</div>
    <button class="icon-btn" data-act="closeSheet" aria-label="Schließen">${icon('x')}</button></div>`;
}
function confirmSheet(title, text, okLabel, onOk, danger) {
  Sheet.open(`${sheetHead(title)}<p>${text}</p>
    <div class="sheet-actions"><button class="btn" data-act="closeSheet">Abbrechen</button>
    <button class="btn ${danger ? 'btn-danger' : 'btn-primary'}" data-act="confirmOk">${okLabel}</button></div>`);
  A.confirmOk = () => { Sheet.close(); onOk(); };
}

let toastTimer;
function toast(msg) {
  const t = $('#toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 2600);
}

/* ---------- Töne und Vibration ---------- */
const Beep = {
  ctx: null,
  unlock() {
    if (this.ctx) return;
    const C = window.AudioContext || window.webkitAudioContext;
    if (!C) return;
    try { this.ctx = new C(); const b = this.ctx.createBuffer(1, 1, 22050); const s = this.ctx.createBufferSource(); s.buffer = b; s.connect(this.ctx.destination); s.start(0); } catch (e) { this.ctx = null; }
  },
  play(times, freq) {
    if (!this.ctx) return;
    times = times || 3;
    const now = this.ctx.currentTime;
    for (let i = 0; i < times; i++) {
      const o = this.ctx.createOscillator(), g = this.ctx.createGain();
      o.frequency.value = freq || (i === times - 1 ? 1175 : 880);
      o.type = 'sine';
      g.gain.setValueAtTime(0.0001, now + i * 0.28);
      g.gain.exponentialRampToValueAtTime(0.35, now + i * 0.28 + 0.02);
      g.gain.exponentialRampToValueAtTime(0.0001, now + i * 0.28 + 0.22);
      o.connect(g); g.connect(this.ctx.destination);
      o.start(now + i * 0.28); o.stop(now + i * 0.28 + 0.25);
    }
  },
  buzz(p) { if (navigator.vibrate) { try { navigator.vibrate(p || [180, 90, 180]); } catch (e) { /* nicht unterstützt */ } } }
};
document.addEventListener('pointerdown', () => Beep.unlock(), { once: true, capture: true });

/* =====================================================================
   Pausentimer: läuft seitenübergreifend als schwebende Pille
   ===================================================================== */
const RestTimer = {
  st: Local.get('timer', null),     // {end, total, label}
  iv: null, doneUntil: 0,
  start(sec, label) {
    this.st = { end: Date.now() + sec * 1000, total: sec, label: label || 'Pause' };
    Local.set('timer', this.st);
    this.doneUntil = 0;
    this.run();
  },
  add(sec) {
    if (!this.st) return;
    this.st.end += sec * 1000; this.st.total = Math.max(1, this.st.total + sec);
    if (this.st.end < Date.now()) return this.stop();
    Local.set('timer', this.st); this.paint();
  },
  stop() { this.st = null; Local.set('timer', null); this.paint(); },
  remaining() { return this.st ? Math.max(0, (this.st.end - Date.now()) / 1000) : 0; },
  run() {
    clearInterval(this.iv);
    this.iv = setInterval(() => this.tick(), 250);
    this.tick();
  },
  tick() {
    if (this.st && this.remaining() <= 0) {
      this.st = null; Local.set('timer', null);
      this.doneUntil = Date.now() + 5000;
      Beep.play(3); Beep.buzz();
      if (document.hidden && 'Notification' in window && Notification.permission === 'granted') {
        try { new Notification('Pause vorbei', { body: 'Weiter mit dem nächsten Satz' }); } catch (e) { /* ok */ }
      }
    }
    if (!this.st && Date.now() > this.doneUntil) { clearInterval(this.iv); this.iv = null; }
    this.paint();
  },
  paint() {
    const el = $('#timerPill');
    const done = !this.st && Date.now() < this.doneUntil;
    if (!this.st && !done) { el.hidden = true; Bus.emit('timer'); return; }
    el.hidden = false;
    el.classList.toggle('done', done);
    if (done) {
      el.innerHTML = `${icon('check')}<b style="min-width:auto">Pause vorbei</b><button data-act="timerStop" aria-label="Schließen">${icon('x', 'ic-s')}</button>`;
    } else {
      const r = this.remaining();
      el.innerHTML = `<span class="tiny">${esc(this.st.label)}</span><b>${fmtDur(Math.ceil(r))}</b>
        <span class="tp-bar"><span style="width:${clamp(100 - r / this.st.total * 100, 0, 100)}%"></span></span>
        <button data-act="timerAdd" data-sec="-15" aria-label="15 Sekunden weniger">−15</button>
        <button data-act="timerAdd" data-sec="15" aria-label="15 Sekunden mehr">+15</button>
        <button data-act="timerStop" aria-label="Timer beenden">${icon('x', 'ic-s')}</button>`;
    }
    Bus.emit('timer');
  }
};
A.timerAdd = el => RestTimer.add(+el.dataset.sec);
A.timerStop = () => { RestTimer.doneUntil = 0; RestTimer.stop(); };

/* Seitenkopf */
function pageHead(title, sub, actions) {
  return `<header class="page-head"><div><h1>${title}</h1>${sub ? `<p class="sub">${sub}</p>` : ''}</div>
    ${actions ? `<div class="head-actions">${actions}</div>` : ''}</header>`;
}
function tabs(base, items, active) {
  return `<nav class="tabs" aria-label="Bereiche">${items.map(([id, label]) =>
    `<a class="tab${id === active ? ' active' : ''}" href="#/${base}${id ? '/' + id : ''}"${id === active ? ' aria-current="page"' : ''}>${label}</a>`).join('')}</nav>`;
}
function emptyState(ic, text, action) {
  return `<div class="empty">${icon(ic)}<p>${text}</p>${action ? `<div style="margin-top:16px">${action}</div>` : ''}</div>`;
}

/* =====================================================================
   Diagramme: schlanke SVG-Linien- und Balkendiagramme mit Hover-Tooltip
   ===================================================================== */
const Tip = {
  show(html, x, y) {
    const t = $('#tooltip');
    t.innerHTML = html; t.hidden = false;
    const r = t.getBoundingClientRect();
    let left = x + 14, top = y - r.height - 12;
    if (left + r.width > window.innerWidth - 8) left = x - r.width - 14;
    if (top < 8) top = y + 16;
    t.style.left = Math.max(8, left) + 'px'; t.style.top = top + 'px';
  },
  hide() { $('#tooltip').hidden = true; }
};
window.addEventListener('scroll', () => Tip.hide(), { passive: true });

function niceTicks(min, max, count) {
  if (min === max) { min -= 1; max += 1; }
  const span = max - min, step0 = span / Math.max(1, count);
  const mag = Math.pow(10, Math.floor(Math.log10(step0)));
  const norm = step0 / mag;
  const step = (norm < 1.5 ? 1 : norm < 3 ? 2 : norm < 7 ? 5 : 10) * mag;
  const lo = Math.floor(min / step) * step, hi = Math.ceil(max / step) * step;
  const ticks = [];
  for (let v = lo; v <= hi + step / 2; v += step) ticks.push(+v.toFixed(10));
  return { lo, hi, ticks };
}

const Charts = {
  specs: [], n: 0,
  reset() { this.specs = []; },
  slot(spec) {
    const id = 'ch' + (++this.n);
    spec.id = id;
    this.specs.push(spec);
    const h = spec.height || 220;
    return `<div class="chart" id="${id}" style="min-height:${h}px" role="img" aria-label="${esc(spec.label || 'Diagramm')}"></div>`;
  },
  drawAll() { this.specs.forEach(s => this.draw(s)); },
  draw(s) {
    const el = document.getElementById(s.id);
    if (!el) return;
    const W = Math.max(240, el.clientWidth);
    if (s.type === 'line') this.line(el, s, W);
    else if (s.type === 'bars') this.bars(el, s, W);
  },

  line(el, s, W) {
    const pts = (s.points || []).filter(p => p.y != null && isFinite(p.y));
    const H = s.height || 220;
    if (!pts.length) { el.innerHTML = `<div class="chart-empty" style="min-height:${H}px">${s.empty || 'Noch keine Daten'}</div>`; return; }
    const pl = 46, pr = 14, pt = 14, pb = 28;
    const xs = pts.map(p => p.x), ys = pts.map(p => p.y);
    let x0 = Math.min(...xs), x1 = Math.max(...xs);
    if (x0 === x1) { x0 -= 864e5 * 3; x1 += 864e5 * 3; }
    let yMin = Math.min(...ys), yMax = Math.max(...ys);
    const padY = (yMax - yMin) * 0.12 || Math.abs(yMax) * 0.05 || 1;
    if (s.zero) yMin = 0; else yMin -= padY;
    yMax += padY;
    const nt = niceTicks(yMin, yMax, 4);
    const lo = s.zero ? 0 : nt.lo, hi = s.max != null ? s.max : nt.hi;
    const X = x => pl + (x - x0) / (x1 - x0) * (W - pl - pr);
    const Y = y => s.invert ? pt + (y - lo) / (hi - lo) * (H - pt - pb) : H - pb - (y - lo) / (hi - lo) * (H - pt - pb);
    const yFmt = s.yFmt || (v => fmt(v, 1));
    let g = '';
    // Hinterlegte Bereiche (z. B. Pulszonen), nur innerhalb der Achse
    (s.bands || []).forEach(b => {
      const a = Math.max(lo, b.from), c = Math.min(hi, b.to);
      if (c <= a) return;
      const y1 = Math.min(Y(a), Y(c)), y2 = Math.max(Y(a), Y(c));
      g += `<rect x="${pl}" y="${y1.toFixed(1)}" width="${W - pl - pr}" height="${(y2 - y1).toFixed(1)}" style="fill:${b.fill}"/>`;
      if (b.label && y2 - y1 >= 14) g += `<text class="band-label" x="${W - pr - 6}" y="${(y1 + 13).toFixed(1)}" text-anchor="end">${esc(b.label)}</text>`;
    });
    nt.ticks.filter(t => t >= lo && t <= hi).forEach(t => {
      g += `<line class="gridline" x1="${pl}" x2="${W - pr}" y1="${Y(t)}" y2="${Y(t)}"/>`;
      g += `<text x="${pl - 8}" y="${Y(t) + 4}" text-anchor="end">${esc(yFmt(t))}</text>`;
    });
    // x-Achse: Datumsbeschriftungen gleichmäßig verteilt
    const nx = Math.max(2, Math.min(6, Math.floor((W - pl - pr) / 90)));
    for (let i = 0; i < nx; i++) {
      const t = x0 + (x1 - x0) * i / (nx - 1);
      const anchor = i === 0 ? 'start' : i === nx - 1 ? 'end' : 'middle';
      g += `<text x="${X(t)}" y="${H - 8}" text-anchor="${anchor}">${esc((s.xFmt || (v => fmtDate(v, { plain: true })))(t))}</text>`;
    }
    const d = pts.map((p, i) => (i ? 'L' : 'M') + X(p.x).toFixed(1) + ' ' + Y(p.y).toFixed(1)).join(' ');
    const base = s.invert ? pt : H - pb;
    const area = s.area !== false && pts.length > 1 ? `<path class="area" d="${d} L${X(pts[pts.length - 1].x).toFixed(1)} ${base} L${X(pts[0].x).toFixed(1)} ${base} Z"/>` : '';
    const dots = pts.length <= 45 ? pts.map(p => `<circle class="pt" cx="${X(p.x).toFixed(1)}" cy="${Y(p.y).toFixed(1)}" r="4"/>`).join('') : '';
    let goal = '';
    if (s.goal != null && s.goal >= lo && s.goal <= hi) {
      goal = `<line class="goal" x1="${pl}" x2="${W - pr}" y1="${Y(s.goal)}" y2="${Y(s.goal)}"/><text class="goal-label" x="${W - pr}" y="${Y(s.goal) - 6}" text-anchor="end">${esc(s.goalLabel || 'Ziel')}</text>`;
    }
    el.innerHTML = `<svg viewBox="0 0 ${W} ${H}" width="${W}" height="${H}">${g}<line class="baseline" x1="${pl}" x2="${W - pr}" y1="${H - pb}" y2="${H - pb}"/>${goal}${area}<path class="line" d="${d}"/>${dots}
      <line class="cross" y1="${pt}" y2="${H - pb}" visibility="hidden"/><circle class="hot" r="6" visibility="hidden"/>
      <rect class="hit" x="${pl}" y="0" width="${W - pl - pr}" height="${H}"/></svg>`;
    const svg = el.firstChild, cross = $('.cross', svg), hot = $('.hot', svg);
    const move = e => {
      const r = svg.getBoundingClientRect();
      const mx = (e.clientX - r.left) * (W / r.width);
      let best = pts[0], bd = Infinity;
      pts.forEach(p => { const dd = Math.abs(X(p.x) - mx); if (dd < bd) { bd = dd; best = p; } });
      const cx = X(best.x), cy = Y(best.y);
      cross.setAttribute('x1', cx); cross.setAttribute('x2', cx); cross.setAttribute('visibility', 'visible');
      hot.setAttribute('cx', cx); hot.setAttribute('cy', cy); hot.setAttribute('visibility', 'visible');
      Tip.show(best.tip || `<b>${esc(yFmt(best.y))}</b><br>${esc(fmtDate(best.x, { plain: true, day: true }))}`, r.left + cx * r.width / W, r.top + cy * r.height / H);
    };
    const leave = () => { cross.setAttribute('visibility', 'hidden'); hot.setAttribute('visibility', 'hidden'); Tip.hide(); };
    svg.addEventListener('pointermove', move);
    svg.addEventListener('pointerdown', move);
    svg.addEventListener('pointerleave', leave);
  },

  bars(el, s, W) {
    const bars = s.bars || [];
    const H = s.height || 200;
    if (!bars.length || bars.every(b => !b.value) && !s.showEmpty) { el.innerHTML = `<div class="chart-empty" style="min-height:${H}px">${s.empty || 'Noch keine Daten'}</div>`; return; }
    const pl = 40, pr = 10, pt = 16, pb = 26;
    const maxV = Math.max(...bars.map(b => b.value), s.goal || 0) * 1.08 || 1;
    const nt = niceTicks(0, maxV, 3);
    const hi = nt.hi;
    const band = (W - pl - pr) / bars.length;
    const bw = Math.min(38, band * 0.62);
    const Y = v => H - pb - v / hi * (H - pt - pb);
    const yFmt = s.yFmt || (v => fmt(v));
    let g = '';
    nt.ticks.forEach(t => {
      g += `<line class="gridline" x1="${pl}" x2="${W - pr}" y1="${Y(t)}" y2="${Y(t)}"/><text x="${pl - 8}" y="${Y(t) + 4}" text-anchor="end">${esc(yFmt(t))}</text>`;
    });
    const every = Math.ceil(bars.length / Math.max(1, Math.floor((W - pl - pr) / 44)));
    let marks = '', labels = '', hits = '';
    bars.forEach((b, i) => {
      const cx = pl + band * i + band / 2, x = cx - bw / 2, y = Y(b.value), h = H - pb - y;
      if (b.value > 0) {
        const r = Math.min(4, h, bw / 2);
        marks += `<path class="bar-mark${b.dim ? ' dim' : ''}${b.over ? ' over' : ''}${b.strong ? ' cur' : ''}" d="M${x} ${H - pb} V${y + r} Q${x} ${y} ${x + r} ${y} H${x + bw - r} Q${x + bw} ${y} ${x + bw} ${y + r} V${H - pb} Z"/>`;
      }
      if (i % every === 0 || i === bars.length - 1 && bars.length < 10) labels += `<text x="${cx}" y="${H - 8}" text-anchor="middle"${b.strong ? ' style="fill:var(--ink);font-weight:700"' : ''}>${esc(b.label)}</text>`;
      hits += `<rect class="hit" data-i="${i}" x="${pl + band * i}" y="0" width="${band}" height="${H - pb + 4}"/>`;
    });
    let goal = '';
    if (s.goal) goal = `<line class="goal" x1="${pl}" x2="${W - pr}" y1="${Y(s.goal)}" y2="${Y(s.goal)}"/><text class="goal-label" x="${W - pr}" y="${Y(s.goal) - 6}" text-anchor="end">${esc(s.goalLabel || 'Ziel')}</text>`;
    el.innerHTML = `<svg viewBox="0 0 ${W} ${H}" width="${W}" height="${H}">${g}${marks}<line class="baseline" x1="${pl}" x2="${W - pr}" y1="${H - pb}" y2="${H - pb}"/>${goal}${labels}${hits}</svg>`;
    const svg = el.firstChild;
    const show = e => {
      const t = e.target.closest('.hit');
      if (!t) return;
      const b = bars[+t.dataset.i];
      const r = svg.getBoundingClientRect();
      const cx = pl + band * +t.dataset.i + band / 2;
      Tip.show(b.tip || `<b>${esc(yFmt(b.value))}</b><br>${esc(b.label)}`, r.left + cx * r.width / W, r.top + Y(b.value) * r.height / H);
    };
    svg.addEventListener('pointermove', show);
    svg.addEventListener('pointerdown', show);
    svg.addEventListener('pointerleave', () => Tip.hide());
  }
};
let resizeT;
window.addEventListener('resize', () => { clearTimeout(resizeT); resizeT = setTimeout(() => Charts.drawAll(), 120); });

/* Fortschrittsring (Kalorien, Ziele) */
function ring(frac, center, label, opts) {
  opts = opts || {};
  const r = 44, c = 2 * Math.PI * r, f = clamp(frac, 0, 1);
  return `<div class="ring-wrap ${opts.small ? 'ring-s' : ''}" role="img" aria-label="${esc(opts.aria || label)}">
    <svg viewBox="0 0 100 100"><circle class="ring-bg" cx="50" cy="50" r="${r}" fill="none" stroke-width="${opts.small ? 9 : 8}"/>
    <circle class="ring-fg${opts.over ? ' over' : ''}" cx="50" cy="50" r="${r}" fill="none" stroke-width="${opts.small ? 9 : 8}" stroke-linecap="round"
      stroke-dasharray="${c.toFixed(2)}" stroke-dashoffset="${(c * (1 - f)).toFixed(2)}"/></svg>
    <div class="ring-center"><b>${center}</b><span>${label}</span></div></div>`;
}

/* Kleine Verlaufslinie ohne Achsen */
function sparkline(values, w, h) {
  w = w || 120; h = h || 36;
  if (values.length < 2) return '';
  const mn = Math.min(...values), mx = Math.max(...values), sp = mx - mn || 1;
  const d = values.map((v, i) => `${i ? 'L' : 'M'}${(i / (values.length - 1) * (w - 4) + 2).toFixed(1)} ${(h - 3 - (v - mn) / sp * (h - 6)).toFixed(1)}`).join(' ');
  return `<svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" aria-hidden="true"><path d="${d}" fill="none" stroke="var(--accent-mark)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
}

/* Waagrechte Balken mit direkter Beschriftung */
function hbars(items, fmtV) {
  const mx = Math.max(1, ...items.map(i => i.value));
  return `<div class="hbars">${items.map(i => `<div class="hbar"><span class="nowrap" style="overflow:hidden;text-overflow:ellipsis">${esc(i.label)}</span>
    <div class="hbar-track" title="${esc(i.label)}: ${esc((fmtV || fmt)(i.value))}"><span style="width:${(i.value / mx * 100).toFixed(1)}%"></span></div>
    <span class="hbar-val">${(fmtV || fmt)(i.value)}</span></div>`).join('')}</div>`;
}

/* Aktivitäts-Raster der letzten Wochen (Mo–So je Spalte) */
function heatmap(weeks, levelOf, tipOf) {
  const t = todayKey();
  const start = addDays(weekStart(t), -7 * (weeks - 1));
  let cells = '';
  for (let i = 0; i < weeks * 7; i++) {
    const k = addDays(start, i);
    if (k > t) { cells += '<i style="visibility:hidden"></i>'; continue; }
    cells += `<i data-l="${levelOf(k)}" class="${k === t ? 'today' : ''}" data-tip="${esc(tipOf(k))}"></i>`;
  }
  return `<div class="heat" data-heat style="grid-template-columns:repeat(${weeks}, minmax(0, 1fr));max-width:${weeks * 24}px">${cells}</div>`;
}
document.addEventListener('pointerover', e => {
  const c = e.target.closest('.heat i[data-tip]');
  if (c) { const r = c.getBoundingClientRect(); Tip.show(c.dataset.tip, r.left + r.width / 2, r.top); }
});
document.addEventListener('pointerout', e => { if (e.target.closest('.heat i[data-tip]')) Tip.hide(); });

/* =====================================================================
   Stammdaten: Muskelgruppen, Übungsbibliothek, Lebensmittel-Grundliste
   ===================================================================== */
const MUSCLES = {
  brust: 'Brust', ruecken: 'Rücken', schultern: 'Schultern', bizeps: 'Bizeps', trizeps: 'Trizeps',
  quads: 'Beinstrecker', hams: 'Beinbeuger', po: 'Po', waden: 'Waden', bauch: 'Bauch', ganz: 'Ganzkörper'
};
// [id, Name, Muskel, Gerät]
const EX_LIB = [
  ['bench', 'Bankdrücken (Langhantel)', 'brust', 'Langhantel'],
  ['incline', 'Schrägbankdrücken (Langhantel)', 'brust', 'Langhantel'],
  ['db-bench', 'Bankdrücken (Kurzhantel)', 'brust', 'Kurzhantel'],
  ['db-incline', 'Schrägbankdrücken (Kurzhantel)', 'brust', 'Kurzhantel'],
  ['decline', 'Negativbankdrücken', 'brust', 'Langhantel'],
  ['db-fly', 'Fliegende (Kurzhantel)', 'brust', 'Kurzhantel'],
  ['pec-deck', 'Butterfly (Maschine)', 'brust', 'Maschine'],
  ['cable-cross', 'Cable Crossover', 'brust', 'Kabel'],
  ['chest-press', 'Brustpresse (Maschine)', 'brust', 'Maschine'],
  ['dips-chest', 'Dips (Brust)', 'brust', 'Körpergewicht'],
  ['pushup', 'Liegestütze', 'brust', 'Körpergewicht'],
  ['deadlift', 'Kreuzheben', 'ruecken', 'Langhantel'],
  ['pullup', 'Klimmzüge', 'ruecken', 'Körpergewicht'],
  ['chinup', 'Klimmzüge (Untergriff)', 'ruecken', 'Körpergewicht'],
  ['latpull', 'Latzug', 'ruecken', 'Kabel'],
  ['latpull-close', 'Latzug (eng)', 'ruecken', 'Kabel'],
  ['bb-row', 'Rudern (Langhantel)', 'ruecken', 'Langhantel'],
  ['db-row', 'Rudern einarmig (Kurzhantel)', 'ruecken', 'Kurzhantel'],
  ['cable-row', 'Rudern am Kabel (sitzend)', 'ruecken', 'Kabel'],
  ['tbar-row', 'T-Bar-Rudern', 'ruecken', 'Langhantel'],
  ['machine-row', 'Rudern (Maschine)', 'ruecken', 'Maschine'],
  ['pullover', 'Pullover am Kabel', 'ruecken', 'Kabel'],
  ['hyperext', 'Hyperextensions', 'ruecken', 'Körpergewicht'],
  ['shrug', 'Shrugs', 'ruecken', 'Kurzhantel'],
  ['ohp', 'Schulterdrücken (Langhantel)', 'schultern', 'Langhantel'],
  ['db-ohp', 'Schulterdrücken (Kurzhantel)', 'schultern', 'Kurzhantel'],
  ['arnold', 'Arnold Press', 'schultern', 'Kurzhantel'],
  ['shoulder-press', 'Schulterpresse (Maschine)', 'schultern', 'Maschine'],
  ['lat-raise', 'Seitheben (Kurzhantel)', 'schultern', 'Kurzhantel'],
  ['cable-lat-raise', 'Seitheben am Kabel', 'schultern', 'Kabel'],
  ['front-raise', 'Frontheben', 'schultern', 'Kurzhantel'],
  ['rear-delt', 'Reverse Butterfly', 'schultern', 'Maschine'],
  ['facepull', 'Face Pulls', 'schultern', 'Kabel'],
  ['upright-row', 'Aufrechtes Rudern', 'schultern', 'Langhantel'],
  ['bb-curl', 'Bizepscurls (Langhantel)', 'bizeps', 'Langhantel'],
  ['db-curl', 'Bizepscurls (Kurzhantel)', 'bizeps', 'Kurzhantel'],
  ['hammer', 'Hammercurls', 'bizeps', 'Kurzhantel'],
  ['ez-curl', 'SZ-Curls', 'bizeps', 'SZ-Stange'],
  ['preacher', 'Scottcurls', 'bizeps', 'SZ-Stange'],
  ['conc-curl', 'Konzentrationscurls', 'bizeps', 'Kurzhantel'],
  ['cable-curl', 'Bizepscurls am Kabel', 'bizeps', 'Kabel'],
  ['pushdown', 'Trizepsdrücken am Kabel', 'trizeps', 'Kabel'],
  ['overhead-ext', 'Trizepsdrücken über Kopf (Kabel)', 'trizeps', 'Kabel'],
  ['skull', 'French Press (SZ)', 'trizeps', 'SZ-Stange'],
  ['dips', 'Dips (Trizeps)', 'trizeps', 'Körpergewicht'],
  ['cgbp', 'Enges Bankdrücken', 'trizeps', 'Langhantel'],
  ['kickback', 'Trizeps-Kickbacks', 'trizeps', 'Kurzhantel'],
  ['squat', 'Kniebeuge (Langhantel)', 'quads', 'Langhantel'],
  ['front-squat', 'Frontkniebeuge', 'quads', 'Langhantel'],
  ['legpress', 'Beinpresse', 'quads', 'Maschine'],
  ['hack', 'Hackenschmidt-Kniebeuge', 'quads', 'Maschine'],
  ['goblet', 'Goblet Squat', 'quads', 'Kurzhantel'],
  ['lunge', 'Ausfallschritte', 'quads', 'Kurzhantel'],
  ['bss', 'Bulgarian Split Squats', 'quads', 'Kurzhantel'],
  ['leg-ext', 'Beinstrecker', 'quads', 'Maschine'],
  ['adductor', 'Adduktoren (Maschine)', 'quads', 'Maschine'],
  ['rdl', 'Rumänisches Kreuzheben', 'hams', 'Langhantel'],
  ['leg-curl', 'Beinbeuger liegend', 'hams', 'Maschine'],
  ['seated-curl', 'Beinbeuger sitzend', 'hams', 'Maschine'],
  ['hip-thrust', 'Hip Thrust', 'po', 'Langhantel'],
  ['glute-bridge', 'Glute Bridge', 'po', 'Körpergewicht'],
  ['abductor', 'Abduktoren (Maschine)', 'po', 'Maschine'],
  ['calf-stand', 'Wadenheben stehend', 'waden', 'Maschine'],
  ['calf-seated', 'Wadenheben sitzend', 'waden', 'Maschine'],
  ['crunch', 'Crunches', 'bauch', 'Körpergewicht'],
  ['cable-crunch', 'Kabel-Crunches', 'bauch', 'Kabel'],
  ['leg-raise', 'Beinheben hängend', 'bauch', 'Körpergewicht'],
  ['plank', 'Plank (Wdh = Sekunden)', 'bauch', 'Körpergewicht'],
  ['ab-wheel', 'Ab Wheel', 'bauch', 'Körpergewicht'],
  ['russian', 'Russian Twist', 'bauch', 'Kurzhantel'],
  ['kb-swing', 'Kettlebell Swings', 'ganz', 'Kettlebell'],
  ['farmer', 'Farmer’s Walk (Wdh = Meter)', 'ganz', 'Kurzhantel'],
  ['burpee', 'Burpees', 'ganz', 'Körpergewicht']
].map(([id, name, m, eq]) => ({ id, name, m, eq }));

const Exercises = {
  custom() { return Store.get('exercises', []) || []; },
  all() { return EX_LIB.concat(this.custom()).sort((a, b) => a.name.localeCompare(b.name, 'de')); },
  get(id) { return EX_LIB.find(e => e.id === id) || this.custom().find(e => e.id === id) || { id, name: 'Unbekannte Übung', m: 'ganz', eq: '' }; },
  add(name, m, eq) {
    const e = { id: 'c-' + uid(), name, m, eq: eq || '', custom: true };
    Store.set('exercises', this.custom().concat([e]));
    return e;
  },
  remove(id) { Store.set('exercises', this.custom().filter(e => e.id !== id)); },
  restFor(id) { const r = (Store.get('restTimes', {}) || {})[id]; return r || settings().restSec; },
  setRest(id, sec) { const r = Object.assign({}, Store.get('restTimes', {}) || {}); r[id] = sec; Store.set('restTimes', r); }
};

/* Lebensmittel-Grundliste, Richtwerte je 100 g:
   [Name, kcal, Eiweiß, Kohlenhydrate, Fett, Ballaststoffe, Zucker, Salz, Portion g, Portionsname] */
const FOOD_BASE = [
  ['Haferflocken', 372, 13.5, 58.7, 7, 10, 0.7, 0, 50, 'Portion'],
  ['Müsli ohne Zucker', 365, 10, 60, 7, 8, 12, 0.05, 60, 'Portion'],
  ['Cornflakes', 378, 7.5, 84, 0.9, 3, 8, 1.1, 30, 'Portion'],
  ['Vollkornbrot', 220, 7.5, 40, 1.5, 7, 3, 1.1, 50, 'Scheibe'],
  ['Weizenbrötchen', 270, 9, 53, 1.5, 3, 2, 1.3, 55, 'Brötchen'],
  ['Toastbrot', 260, 8, 48, 3.5, 3, 4, 1.2, 28, 'Scheibe'],
  ['Vollkorntoast', 245, 9, 41, 4, 6, 3.5, 1.1, 28, 'Scheibe'],
  ['Knäckebrot', 340, 10, 63, 1.5, 15, 2, 1.1, 10, 'Scheibe'],
  ['Laugenbrezel', 285, 8.5, 56, 2, 2.5, 1, 1.8, 80, 'Brezel'],
  ['Croissant', 406, 8, 45, 21, 2.5, 10, 1.1, 60, 'Croissant'],
  ['Milch 1,5 %', 47, 3.4, 4.8, 1.5, 0, 4.8, 0.13, 200, 'Glas (200 ml)'],
  ['Milch 3,5 %', 64, 3.3, 4.7, 3.5, 0, 4.7, 0.13, 200, 'Glas (200 ml)'],
  ['Hafermilch', 46, 1, 6.7, 1.5, 0.8, 4, 0.1, 200, 'Glas (200 ml)'],
  ['Magerquark', 67, 12, 4, 0.3, 0, 4, 0.1, 250, 'Becher'],
  ['Skyr natur', 63, 11, 4, 0.2, 0, 4, 0.1, 150, 'Becher'],
  ['Griechischer Joghurt 10 %', 120, 4, 4, 10, 0, 4, 0.1, 150, 'Portion'],
  ['Naturjoghurt 3,5 %', 66, 3.8, 4.6, 3.5, 0, 4.6, 0.1, 150, 'Becher'],
  ['Hüttenkäse', 98, 12.5, 2.7, 4.3, 0, 2.7, 0.8, 200, 'Becher'],
  ['Gouda', 356, 25, 0, 28, 0, 0, 1.8, 30, 'Scheibe'],
  ['Mozzarella', 250, 18, 1, 19.5, 0, 1, 0.5, 125, 'Kugel'],
  ['Feta', 265, 16, 0.5, 22, 0, 0.5, 2.8, 50, 'Portion'],
  ['Frischkäse natur', 240, 5.5, 3.5, 23, 0, 3.5, 0.8, 30, 'Portion'],
  ['Butter', 741, 0.7, 0.6, 83, 0, 0.6, 0, 10, 'TL'],
  ['Whey Proteinpulver', 380, 78, 6, 5, 0, 5, 0.5, 30, 'Messlöffel'],
  ['Ei (Größe M)', 155, 13, 1.1, 11, 0, 1.1, 0.35, 60, 'Ei'],
  ['Eiklar', 48, 11, 0.7, 0.2, 0, 0.7, 0.4, 33, 'Eiklar'],
  ['Hähnchenbrust roh', 105, 23.5, 0, 1.2, 0, 0, 0.15, 150, 'Filet'],
  ['Putenbrust roh', 107, 24, 0, 1, 0, 0, 0.15, 150, 'Filet'],
  ['Rinderhackfleisch', 212, 20, 0, 14.5, 0, 0, 0.17, 125, 'Portion'],
  ['Rindersteak (Hüfte)', 120, 22, 0, 4, 0, 0, 0.15, 200, 'Steak'],
  ['Schweineschnitzel', 106, 22, 0, 2, 0, 0, 0.15, 150, 'Schnitzel'],
  ['Lachs roh', 200, 20, 0, 13.5, 0, 0, 0.15, 125, 'Filet'],
  ['Thunfisch im eigenen Saft', 110, 25.5, 0, 0.8, 0, 0, 1, 140, 'Dose'],
  ['Garnelen', 85, 19, 0, 1, 0, 0, 0.8, 100, 'Portion'],
  ['Kochschinken', 110, 19, 1, 3.5, 0, 1, 2.3, 20, 'Scheibe'],
  ['Salami', 380, 21, 0.5, 33, 0, 0.5, 4, 15, '3 Scheiben'],
  ['Tofu natur', 145, 15, 2, 8.5, 1, 0.5, 0.02, 125, 'Portion'],
  ['Linsen getrocknet', 330, 24, 50, 1.5, 11, 2, 0.03, 60, 'Portion'],
  ['Kichererbsen (Dose)', 125, 7, 15, 2.5, 6.5, 0.5, 0.5, 120, 'Portion'],
  ['Kidneybohnen (Dose)', 105, 7.5, 13.5, 0.6, 7, 1, 0.5, 120, 'Portion'],
  ['Reis roh', 350, 7, 78, 0.6, 1.4, 0.2, 0, 75, 'Portion'],
  ['Reis gekocht', 130, 2.7, 28, 0.3, 0.4, 0.1, 0, 200, 'Portion'],
  ['Nudeln roh', 355, 12.5, 70, 1.5, 3, 3, 0, 100, 'Portion'],
  ['Nudeln gekocht', 150, 5.5, 30, 0.8, 1.5, 0.6, 0, 250, 'Portion'],
  ['Vollkornnudeln roh', 340, 13.5, 63, 2.5, 8, 3, 0, 100, 'Portion'],
  ['Kartoffeln gekocht', 72, 2, 15, 0.1, 2, 0.8, 0, 200, 'Portion'],
  ['Süßkartoffel', 86, 1.6, 20, 0.1, 3, 4.2, 0.1, 200, 'Stück'],
  ['Pommes frites', 290, 3.5, 36, 14.5, 3, 0.3, 0.6, 150, 'Portion'],
  ['Couscous roh', 355, 12, 72, 1.5, 5, 0.5, 0, 75, 'Portion'],
  ['Quinoa roh', 368, 14, 64, 6, 7, 0, 0, 60, 'Portion'],
  ['Weizen-Wrap', 310, 8.5, 52, 7, 2.5, 3, 1.3, 60, 'Wrap'],
  ['Brokkoli', 34, 2.8, 4, 0.4, 2.6, 1.7, 0, 200, 'Portion'],
  ['Tomate', 18, 0.9, 2.6, 0.2, 1.2, 2.6, 0, 120, 'Tomate'],
  ['Gurke', 15, 0.6, 2.2, 0.2, 0.5, 1.7, 0, 200, 'halbe Gurke'],
  ['Paprika rot', 31, 1, 6, 0.3, 2, 4.2, 0, 150, 'Schote'],
  ['Karotte', 36, 0.9, 6.8, 0.2, 2.8, 4.7, 0.1, 80, 'Karotte'],
  ['Blattsalat', 14, 1, 2, 0.2, 1.3, 1.5, 0, 80, 'Schale'],
  ['Spinat', 23, 2.9, 1.6, 0.4, 2.2, 0.4, 0.2, 100, 'Portion'],
  ['Zucchini', 17, 1.2, 3.1, 0.3, 1, 2.5, 0, 200, 'Zucchini'],
  ['Champignons', 22, 3.1, 3.3, 0.3, 1, 2, 0, 150, 'Portion'],
  ['Zwiebel', 40, 1.1, 9, 0.1, 1.7, 4.2, 0, 80, 'Zwiebel'],
  ['Avocado', 160, 2, 8.5, 14.7, 6.7, 0.7, 0, 80, 'halbe Avocado'],
  ['Mais (Dose)', 85, 3, 15.5, 1.2, 2.5, 4, 0.5, 140, 'Dose'],
  ['Apfel', 52, 0.3, 14, 0.2, 2.4, 10, 0, 180, 'Apfel'],
  ['Banane', 89, 1.1, 23, 0.3, 2.6, 12, 0, 120, 'Banane'],
  ['Orange', 47, 0.9, 12, 0.1, 2.4, 9, 0, 180, 'Orange'],
  ['Erdbeeren', 32, 0.7, 7.7, 0.3, 2, 4.9, 0, 150, 'Schale'],
  ['Heidelbeeren', 57, 0.7, 14.5, 0.3, 2.4, 10, 0, 125, 'Schale'],
  ['Weintrauben', 69, 0.7, 18, 0.2, 0.9, 16, 0, 125, 'Portion'],
  ['Kiwi', 61, 1.1, 15, 0.5, 3, 9, 0, 75, 'Kiwi'],
  ['Mango', 60, 0.8, 15, 0.4, 1.6, 13.7, 0, 150, 'Portion'],
  ['Ananas', 50, 0.5, 13, 0.1, 1.4, 10, 0, 150, 'Portion'],
  ['Mandeln', 600, 24, 5.7, 53, 11, 4.4, 0, 30, 'Handvoll'],
  ['Walnüsse', 670, 15, 7, 65, 6, 2.6, 0, 30, 'Handvoll'],
  ['Erdnüsse geröstet', 600, 26, 12, 49, 8, 4, 0, 30, 'Handvoll'],
  ['Erdnussbutter', 620, 25, 13, 50, 6, 6, 0.5, 20, 'EL'],
  ['Olivenöl', 884, 0, 0, 100, 0, 0, 0, 10, 'EL'],
  ['Chiasamen', 490, 21, 8, 31, 34, 0, 0, 15, 'EL'],
  ['Zartbitterschokolade 70 %', 580, 8, 33, 43, 11, 28, 0.02, 20, '2 Stückchen'],
  ['Vollmilchschokolade', 535, 6.5, 57, 30, 2, 55, 0.25, 25, '4 Stückchen'],
  ['Fruchtgummi', 343, 6.9, 77, 0.5, 0, 46, 0.07, 25, 'Handvoll'],
  ['Kartoffelchips', 536, 6, 50, 34, 4, 0.5, 1.4, 30, 'Handvoll'],
  ['Proteinriegel', 360, 33, 30, 11, 10, 3, 0.4, 55, 'Riegel'],
  ['Reiswaffel', 385, 8, 80, 3, 4, 0.5, 0.05, 8, 'Waffel'],
  ['Müsliriegel', 410, 6, 65, 13, 5, 25, 0.2, 25, 'Riegel'],
  ['Vanilleeis', 210, 3.5, 24, 11, 0, 21, 0.1, 100, 'Portion'],
  ['Pizza Margherita (TK)', 240, 9.5, 31, 8, 2, 3, 1.2, 350, 'Pizza'],
  ['Döner Kebab', 215, 12, 21, 9, 1.5, 2.5, 1.2, 400, 'Döner'],
  ['Burger (Fast Food)', 255, 13, 28, 10, 1.5, 5, 1.2, 220, 'Burger'],
  ['Cola', 42, 0, 10.6, 0, 0, 10.6, 0, 330, 'Dose (330 ml)'],
  ['Cola Zero', 0.3, 0, 0, 0, 0, 0, 0.02, 330, 'Dose (330 ml)'],
  ['Orangensaft', 45, 0.7, 10, 0.2, 0.2, 9, 0, 250, 'Glas (250 ml)'],
  ['Apfelschorle', 24, 0, 5.6, 0, 0, 5.6, 0, 330, 'Glas (330 ml)'],
  ['Bier (Pils)', 42, 0.5, 3, 0, 0, 0, 0, 500, 'Flasche (0,5 l)'],
  ['Rotwein', 85, 0.1, 2.6, 0, 0, 0.6, 0, 200, 'Glas (0,2 l)'],
  ['Kaffee schwarz', 2, 0.2, 0.3, 0, 0, 0, 0, 200, 'Tasse'],
  ['Cappuccino', 33, 1.9, 2.5, 1.8, 0, 2.5, 0.05, 200, 'Tasse'],
  ['Honig', 304, 0.3, 82, 0, 0, 82, 0, 20, 'EL'],
  ['Marmelade', 250, 0.4, 60, 0.1, 1, 55, 0.03, 20, 'EL'],
  ['Ketchup', 112, 1.2, 25, 0.2, 0.4, 22, 1.8, 15, 'EL'],
  ['Mayonnaise', 680, 1, 1.5, 75, 0, 1, 1.5, 15, 'EL'],
  ['Hummus', 250, 7, 12, 19, 6, 0.5, 1.1, 50, 'Portion'],
  ['Zucker', 400, 0, 100, 0, 0, 100, 0, 5, 'TL']
].map((r, i) => ({ id: 'b' + i, name: r[0], kcal: r[1], p: r[2], c: r[3], f: r[4], fib: r[5], sug: r[6], salt: r[7], serving: { g: r[8], label: r[9] }, src: 'base' }));

const NUTRIENTS = [
  ['kcal', 'Kalorien', 'kcal'], ['p', 'Eiweiß', 'g'], ['c', 'Kohlenhydrate', 'g'], ['f', 'Fett', 'g'],
  ['fib', 'Ballaststoffe', 'g'], ['sug', 'Zucker', 'g'], ['salt', 'Salz', 'g']
];

const Foods = {
  lib() { return Store.get('foods', { custom: [], recent: [], cache: {} }) || { custom: [], recent: [], cache: {} }; },
  save(lib) { Store.set('foods', lib); },
  get(id) {
    const lib = this.lib();
    return FOOD_BASE.find(f => f.id === id) || lib.custom.find(f => f.id === id) || Object.values(lib.cache).find(f => f.id === id);
  },
  addCustom(food) { const lib = this.lib(); food.id = food.id || 'u-' + uid(); food.src = 'custom'; lib.custom = lib.custom.filter(f => f.id !== food.id).concat([food]); this.save(lib); return food; },
  removeCustom(id) { const lib = this.lib(); lib.custom = lib.custom.filter(f => f.id !== id); this.save(lib); },
  cacheProduct(food) {
    const lib = this.lib();
    lib.cache = Object.assign({}, lib.cache);
    lib.cache[food.id] = food;
    const ids = Object.keys(lib.cache);
    if (ids.length > 250) ids.slice(0, ids.length - 250).forEach(k => { if (!lib.recent.includes(k)) delete lib.cache[k]; });
    this.save(lib);
  },
  touch(id) {
    const lib = this.lib();
    lib.recent = [id].concat((lib.recent || []).filter(x => x !== id)).slice(0, 40);
    this.save(lib);
  },
  recent() { return (this.lib().recent || []).map(id => this.get(id)).filter(Boolean); },
  search(q) {
    q = q.trim().toLowerCase();
    if (!q) return [];
    const lib = this.lib();
    const pool = lib.custom.concat(Object.values(lib.cache), FOOD_BASE);
    const words = q.split(/\s+/);
    return pool.filter(f => words.every(w => (f.name + ' ' + (f.brand || '')).toLowerCase().includes(w)))
      .sort((a, b) => (a.name.toLowerCase().startsWith(q) ? 0 : 1) - (b.name.toLowerCase().startsWith(q) ? 0 : 1))
      .slice(0, 30);
  }
};
function scaleFood(food, grams) {
  const k = grams / 100, o = {};
  NUTRIENTS.forEach(([n]) => { o[n] = Math.round((+food[n] || 0) * k * 10) / 10; });
  o.kcal = Math.round(o.kcal);
  return o;
}

/* =====================================================================
   Startseite: eine Kachel je Bereich, darunter der Tag auf einen Blick
   ===================================================================== */
function tile(view, title, stat, sub, extra, cls) {
  const p = pageOf(view);
  return `<a class="tile ${cls || ''}" href="${p.file}"><div class="tile-top"><span class="tile-ic">${icon(AREA_ICONS[view])}</span>${icon('right', 'ic-s')}</div>
    <h2>${title}</h2><div class="tile-stat"><b>${stat}</b><p>${sub}</p>${extra || ''}</div></a>`;
}
V.heute = {
  render() {
    const s = settings(), t = todayKey(), now = new Date(), ws = weekStart(t);
    const d = Diary.day(t), tot = Diary.totals(d), ex = s.creditExercise ? exerciseKcal(t) : 0;
    const left = s.kcalGoal - tot.kcal + ex;
    const weekWo = workoutsInRange(ws, t).length;
    const active = Active.get();
    const yearKm = sum(runsInRange(t.slice(0, 5) + '01-01', t).map(r => r.km));
    const weekKm = sum(runsInRange(ws, t).map(r => r.km));
    const live = LiveRun.st.status !== 'idle';
    const m = t.slice(0, 7);
    const due = sortTasks(Planner.due(t)), evToday = Planner.eventsOn(t), next = Planner.nextEvent();
    const shopOpen = Planner.shopping().filter(x => !x.done).length;
    const parts = [];
    if (evToday.length) parts.push(`${evToday.length} ${evToday.length === 1 ? 'Termin' : 'Termine'}`);
    if (due.length) parts.push(`${due.length} ${due.length === 1 ? 'Aufgabe' : 'Aufgaben'} offen`);
    if (tot.kcal) parts.push(`${fmt(tot.kcal)} kcal gegessen`);
    const level = k => {
      const g = Workouts.all().some(w => dkey(w.start) === k), r = Runs.all().some(x => dkey(x.start) === k);
      return g && r ? 3 : g || r ? 2 : Diary.hasEntries(k) ? 1 : 0;
    };
    const tipOf = k => {
      const g = Workouts.all().filter(w => dkey(w.start) === k).map(w => w.name), r = Runs.all().filter(x => dkey(x.start) === k).map(x => fmt(x.km, 1) + ' km');
      return `${fmtDate(k, { day: true, plain: true })}: ${g.concat(r).join(', ') || (Diary.hasEntries(k) ? 'Essen eingetragen' : 'Ruhetag')}`;
    };
    return `<header class="hero"><div><h1>${DAYS_LONG[now.getDay()]}, ${now.getDate()}. ${MONTHS_LONG[now.getMonth()]}</h1>
        <p class="sub">${parts.length ? parts.join(' · ') : 'Noch nichts eingetragen'}</p></div>
        <span class="hero-time" data-tick="clock">${fmtTime(Date.now())}</span></header>
      ${isLocalCopy() ? `<div class="card local-note"><div class="li-main"><b>Diese Fassung speichert nur auf diesem Gerät</b>
        <p class="small muted">Für Mac und iPhone mit denselben Daten nutze den Link. So nimmst du deine Einträge mit: hier exportieren, dann in der Link-Fassung unter Einstellungen → Daten importieren.</p></div>
        <div class="row wrap"><button class="btn" data-act="dataExport">Daten exportieren</button><a class="btn btn-primary" href="${SYNC_URL}" target="_blank" rel="noopener">Link öffnen</a></div></div>` : ''}
      ${active ? `<a class="banner" href="training.html#/training/aktiv">${icon('gym')}<div class="grow">${esc(active.name)} läuft<small><span data-tick="wo">${fmtDur((Date.now() - active.start) / 1000)}</span> · weiter trainieren</small></div>${icon('right')}</a>` : ''}
      ${live ? `<a class="banner" href="laufen.html#/laufen/live">${icon('run')}<div class="grow">Lauf wird aufgezeichnet<small>${fmt((LiveRun.st.dist || 0) / 1000, 2)} km</small></div>${icon('right')}</a>` : ''}
      <nav class="tiles" aria-label="Bereiche">
        ${tile('training', 'Trainingswoche', `${weekWo}<small>von ${s.weekGoal} Trainings</small>`, active ? 'Training läuft gerade' : weekWo >= s.weekGoal ? 'Wochenziel erreicht' : `noch ${s.weekGoal - weekWo} bis zum Wochenziel`,
          `<div class="week-dots">${Array.from({ length: 7 }, (_, i) => { const k = addDays(ws, i), on = Workouts.all().some(w => dkey(w.start) === k); return `<div class="${k === t ? 'today' : ''}"><i class="${on ? 'on' : ''}">${on ? icon('check', 'ic-s') : ''}</i>${DAYS[parseKey(k).getDay()]}</div>`; }).join('')}</div>`, 'tile-moment')}
        ${tile('essen', 'Ernährung', `${fmt(Math.abs(left))}<small>kcal</small>`, left < 0 ? 'über dem Ziel' : 'heute noch übrig')}
        ${tile('laufen', 'Laufen', `${fmt(yearKm)}<small>km</small>`, `${now.getFullYear()} · diese Woche ${fmt(weekKm, 1)} km`)}
        ${tile('zuhause', 'Zuhause', 'Fernbedienung', HA.ready() ? 'Wohnzimmer-TV · Smart Home verbunden' : 'Wohnzimmer-TV · Smart Home folgt', '', 'tile-full-m')}
        ${tile('finanzen', 'Finanzen', `${fmt(Finance.spent(m))}<small>€</small>`, `ausgegeben im ${MONTHS_LONG[now.getMonth()]}${Finance.monthlyFixed() ? ` · fix ${fmt(Finance.monthlyFixed())} €` : ''}`, '', 'tile-wide')}
        ${tile('planer', 'Planer', `${due.length}<small>${due.length === 1 ? 'Aufgabe' : 'Aufgaben'}</small>`, next ? `Nächster Termin: ${fmtDate(next.k, { day: true })}${next.e.time ? ' ' + next.e.time : ''}` : shopOpen ? `${shopOpen} Dinge auf der Einkaufsliste` : 'heute fällig', '', 'tile-wide')}
      </nav>
      <div class="grid">
        ${noopHomeCard()}
        <div class="card span-6"><div class="card-head"><h2>${icon('calendar')}Heute</h2><a class="btn btn-ghost btn-s" href="planer.html">Planer</a></div>
          ${evToday.length ? `<div class="list">${evToday.map(e => eventRow(e)).join('')}</div>` : ''}
          ${due.length ? `<div class="tasks" style="margin-top:${evToday.length ? 10 : 0}px">${due.slice(0, 6).map(taskRow).join('')}</div>` : ''}
          ${!evToday.length && !due.length ? `<p class="empty">Keine Termine und keine fälligen Aufgaben.${next ? ` Als Nächstes: ${esc(next.e.title)}, ${fmtDate(next.k, { day: true })}.` : ''}</p>` : ''}
          <form class="row" data-submit="taskQuick" style="margin-top:12px"><input class="input grow" name="title" placeholder="Aufgabe für heute" autocomplete="off" aria-label="Neue Aufgabe für heute"></form></div>
        <div class="card span-6"><div class="card-head"><h2>${icon('bolt')}Schnell eintragen</h2></div>
          <div class="quick" style="margin:0;grid-template-columns:repeat(2,minmax(0,1fr))">
            <button class="quick-btn" data-act="${active ? 'goActive' : 'homeStartWo'}"><span class="qi">${icon('gym')}</span><span>${active ? 'Weiter trainieren' : 'Training starten'}</span></button>
            <button class="quick-btn" data-act="homeAddFood"><span class="qi">${icon('food')}</span><span>Essen</span></button>
            <button class="quick-btn" data-act="spendNew"><span class="qi">${icon('euro')}</span><span>Ausgabe</span></button>
            <a class="quick-btn" href="zuhause.html#/zuhause/tv"><span class="qi">${icon('tv')}</span><span>Fernbedienung</span></a></div>
          <div class="row-between" style="margin-top:16px"><span class="row" style="gap:8px">${icon('drop')}<span class="small">Wasser ${fmt(d.water * 0.25, 2)} / ${fmt(s.waterGoal * 0.25, 2)} l</span></span>
            <div class="water">${Array.from({ length: s.waterGoal }, (_, i) => `<button class="glass glass-s${i < d.water ? ' full' : ''}" data-act="homeWater" data-n="${i + 1}" aria-label="${i + 1} Gläser"></button>`).join('')}</div></div></div>
        <div class="card span-12"><div class="card-head"><h2>${icon('chart')}Aktivität</h2><span class="muted small">letzte 26 Wochen</span></div>
          ${heatmap(26, level, tipOf)}
          <div class="legend" style="margin-top:12px"><span><i class="dot" style="background:var(--surface-3)"></i>Ruhetag</span><span><i class="dot" style="background:color-mix(in srgb, var(--accent-mark) 40%, var(--surface-3))"></i>Essen getrackt</span><span><i class="dot" style="background:color-mix(in srgb, var(--accent-mark) 70%, var(--surface-3))"></i>Training oder Lauf</span><span><i class="dot" style="background:var(--accent-mark)"></i>beides</span></div></div>
      </div>`;
  }
};
A.goActive = () => go('training/aktiv');
A.homeStartWo = () => {
  Sheet.open(`${sheetHead('Training starten')}<div class="list">
    <button class="li" data-act="woStartEmpty"><span style="color:var(--accent-mark)">${icon('plus')}</span><div class="li-main"><div class="li-title">Leeres Training</div><div class="li-sub">Übungen unterwegs hinzufügen</div></div></button>
    ${Templates.all().map(t => `<button class="li" data-act="woStartTpl" data-id="${t.id}"><span style="color:var(--accent-mark)">${icon('play')}</span><div class="li-main"><div class="li-title">${esc(t.name)}</div><div class="li-sub">${t.items.map(it => Exercises.get(it.ex).name.split(' (')[0]).join(', ')}</div></div></button>`).join('')}</div>`);
};
A.homeAddFood = () => { diaryDay = todayKey(); add.meal = defaultMeal(); add.tab = 'suche'; add.q = ''; add.online = []; add.edit = null; openAdd(); };
A.homeWater = el => { const d = Diary.day(todayKey()); d.water = +el.dataset.n === d.water ? d.water - 1 : +el.dataset.n; Diary.saveDay(todayKey(), d); rerender(); };

/* =====================================================================
   Training: Übersicht, Logger, Pläne, Übungen, Verlauf, Timer & Rechner
   ===================================================================== */
const e1rm = (kg, reps) => (kg > 0 && reps > 0) ? (reps === 1 ? kg : kg * (1 + reps / 30)) : 0;
const workSets = w => [].concat(...w.items.map(it => it.sets.filter(s => s.type !== 'w').map(s => Object.assign({ ex: it.ex }, s))));
const woVolume = w => sum(workSets(w).map(s => (+s.kg || 0) * (+s.reps || 0)));
const woDuration = w => w.end ? (w.end - w.start) / 1000 : 0;
// Aus NOOP übernommene Trainings haben keine Sätze, dafür Belastung, Kalorien und Puls
const woSub = w => w.src === 'noop'
  ? `${fmtDate(w.start, { day: true })} · ${fmtMin(woDuration(w))} · aus NOOP${w.avgHr ? ` · Ø ${w.avgHr} bpm` : ''}`
  : `${fmtDate(w.start, { day: true })} · ${fmtMin(woDuration(w))} · ${w.items.length} Übungen`;
const woEnd = w => w.src === 'noop' ? (w.kcal ? `${fmt(w.kcal)} kcal` : '') : `${fmt(woVolume(w))} kg`;

const DEFAULT_TEMPLATES = [
  { id: 't-push', name: 'Push', items: [['bench', 4, '6–8'], ['db-incline', 3, '8–10'], ['ohp', 3, '8–10'], ['lat-raise', 3, '12–15'], ['pushdown', 3, '10–12']] },
  { id: 't-pull', name: 'Pull', items: [['deadlift', 3, '5'], ['pullup', 3, '6–10'], ['cable-row', 3, '10–12'], ['facepull', 3, '15'], ['hammer', 3, '10–12']] },
  { id: 't-legs', name: 'Beine', items: [['squat', 4, '6–8'], ['rdl', 3, '8–10'], ['legpress', 3, '10–12'], ['leg-curl', 3, '12'], ['calf-stand', 4, '12–15']] },
  { id: 't-full', name: 'Ganzkörper', items: [['squat', 3, '8'], ['bench', 3, '8'], ['bb-row', 3, '8'], ['db-ohp', 2, '10'], ['plank', 3, '45']] }
].map(t => ({ id: t.id, name: t.name, items: t.items.map(([ex, sets, reps]) => ({ ex, sets, reps })) }));
const Templates = {
  all() { const t = Store.get('templates', null); return Array.isArray(t) ? t : DEFAULT_TEMPLATES; },
  get(id) { return this.all().find(t => t.id === id); },
  save(t) { const a = this.all().filter(x => x.id !== t.id); a.push(t); Store.set('templates', a); },
  remove(id) { Store.set('templates', this.all().filter(t => t.id !== id)); }
};

/* ---------- Auswertungen ---------- */
function exHistory(exId) {
  const out = [];
  Workouts.all().slice().reverse().forEach(w => {
    w.items.filter(it => it.ex === exId).forEach(it => {
      const sets = it.sets.filter(s => s.type !== 'w');
      if (!sets.length) return;
      const best = sets.reduce((b, s) => e1rm(+s.kg, +s.reps) > e1rm(+b.kg, +b.reps) ? s : b, sets[0]);
      out.push({
        w, date: w.start, sets: it.sets,
        e1rm: e1rm(+best.kg, +best.reps), best,
        topKg: Math.max(...sets.map(s => +s.kg || 0)),
        topReps: Math.max(...sets.map(s => +s.reps || 0)),
        volume: sum(sets.map(s => (+s.kg || 0) * (+s.reps || 0)))
      });
    });
  });
  return out;
}
function prEvents() {
  const best = {}, ev = [];
  Workouts.all().slice().reverse().forEach(w => {
    w.items.forEach(it => {
      it.sets.forEach(s => {
        if (s.type === 'w') return;
        const v = e1rm(+s.kg, +s.reps);
        if (!v) return;
        if (best[it.ex] && v > best[it.ex] + 0.01) ev.push({ w: w.id, ex: it.ex, v, date: w.start, s });
        if (!best[it.ex] || v > best[it.ex]) best[it.ex] = v;
      });
    });
  });
  return ev;
}
function bestE1rm(exId, excludeId) {
  let b = 0;
  Workouts.all().forEach(w => { if (w.id === excludeId) return; w.items.forEach(it => { if (it.ex === exId) it.sets.forEach(s => { if (s.type !== 'w') b = Math.max(b, e1rm(+s.kg, +s.reps)); }); }); });
  return b;
}
function prevSets(exId) {
  const w = Workouts.all().find(w => w.items.some(it => it.ex === exId && it.sets.length));
  if (!w) return [];
  return w.items.find(it => it.ex === exId).sets;
}
function workoutsInRange(fromKey, toKey) { return Workouts.all().filter(w => { const k = dkey(w.start); return k >= fromKey && k <= toKey; }); }
function muscleSets(days) {
  const from = addDays(todayKey(), -(days - 1));
  const m = {};
  workoutsInRange(from, todayKey()).forEach(w => w.items.forEach(it => {
    const n = it.sets.filter(s => s.type !== 'w').length;
    const mg = Exercises.get(it.ex).m;
    m[mg] = (m[mg] || 0) + n;
  }));
  return Object.keys(m).map(k => ({ label: MUSCLES[k] || k, value: m[k] })).sort((a, b) => b.value - a.value);
}

/* ---------- Aktives Training ---------- */
const Active = {
  get() { return Store.get('active', null); },
  save(a) { Store.set('active', a); },
  clear() { Store.set('active', null); }
};
function newSet(prev) { return { kg: '', reps: '', type: prev && prev.type === 'w' ? 'w' : 'n', done: false }; }
function startWorkout(tpl) {
  Sheet.close();
  const a ={ id: uid(), name: tpl ? tpl.name : workoutDefaultName(), start: Date.now(), tpl: tpl ? tpl.id : null, items: [] };
  if (tpl) tpl.items.forEach(ti => {
    const prev = prevSets(ti.ex);
    const n = ti.sets || prev.filter(s => s.type !== 'w').length || 3;
    a.items.push({ ex: ti.ex, target: ti.reps || '', sets: Array.from({ length: n }, () => newSet()) });
  });
  Active.save(a);
  go('training/aktiv');
}
function workoutDefaultName() {
  const h = new Date().getHours();
  return h < 11 ? 'Morgentraining' : h < 17 ? 'Mittagstraining' : 'Abendtraining';
}
A.woStartEmpty = () => { if (Active.get()) { Sheet.close(); return go('training/aktiv'); } startWorkout(null); };
A.woStartTpl = el => {
  if (Active.get()) { Sheet.close(); toast('Es läuft schon ein Training'); return go('training/aktiv'); }
  const t = Templates.get(el.dataset.id); if (t) startWorkout(t);
};
A.woRepeat = el => {
  const w = Workouts.get(el.dataset.id); if (!w) return;
  if (Active.get()) { toast('Es läuft schon ein Training'); return go('training/aktiv'); }
  startWorkout({ id: null, name: w.name, items: w.items.map(it => ({ ex: it.ex, sets: it.sets.length })) });
};

function setLabel(sets, j) {
  const s = sets[j];
  if (s.type === 'w') return 'A';
  if (s.type === 'd') return 'D';
  return String(sets.slice(0, j + 1).filter(x => x.type !== 'w').length);
}
function renderActive() {
  const a = Active.get();
  if (!a) {
    return `<div class="card">${emptyState('gym', 'Gerade läuft kein Training',
      `<div class="row wrap" style="justify-content:center"><button class="btn btn-primary" data-act="woStartEmpty">${icon('plus')}Leeres Training</button><a class="btn" href="#/training/plaene">Aus Plan starten</a></div>`)}</div>`;
  }
  const items = a.items.map((it, i) => {
    const ex = Exercises.get(it.ex);
    const prev = prevSets(it.ex);
    const prevWork = prev.filter(s => s.type !== 'w');
    const best = bestE1rm(it.ex);
    let workIdx = -1;
    const rows = it.sets.map((s, j) => {
      if (s.type !== 'w') workIdx++;
      const p = s.type === 'w' ? null : prevWork[workIdx];
      const isPr = s.done && s.type !== 'w' && best > 0 && e1rm(num(s.kg), num(s.reps)) > best + 0.01;
      const lab = setLabel(it.sets, j);
      return `<tr class="${s.done ? 'done' : ''}">
        <td><button class="set-type ${s.type}" data-act="setType" data-i="${i}" data-j="${j}" aria-label="Satztyp ändern: ${lab === 'A' ? 'Aufwärmsatz' : lab === 'D' ? 'Dropsatz' : 'Satz ' + lab}">${lab}</button></td>
        <td>${isPr ? `<span class="badge-pr">${icon('trophy', 'ic-s')}PR</span>` : p ? `<button class="set-prev" data-act="setPrev" data-i="${i}" data-j="${j}" data-kg="${p.kg}" data-reps="${p.reps}">${fmt(p.kg, 2)} × ${p.reps}</button>` : '<span class="muted">–</span>'}</td>
        <td><input class="set-in" inputmode="decimal" aria-label="Gewicht in kg" placeholder="${p ? fmt(p.kg, 2) : ''}" value="${esc(s.kg)}" data-input="setField" data-i="${i}" data-j="${j}" data-f="kg"></td>
        <td><input class="set-in" inputmode="numeric" aria-label="Wiederholungen" placeholder="${p ? p.reps : it.target ? esc(String(it.target).split(/[–-]/).pop()) : ''}" value="${esc(s.reps)}" data-input="setField" data-i="${i}" data-j="${j}" data-f="reps"></td>
        <td><button class="set-ok${s.done ? ' on' : ''}" data-act="setDone" data-i="${i}" data-j="${j}" aria-label="Satz erledigt" aria-pressed="${s.done}">${icon('check')}</button></td>
        <td><button class="set-del" data-act="setDel" data-i="${i}" data-j="${j}" aria-label="Satz löschen">${icon('x', 'ic-s')}</button></td></tr>`;
    }).join('');
    return `<section class="card ex-card">
      <div class="ex-head"><div class="grow"><button class="ex-name" data-act="exOpen" data-ex="${ex.id}">${esc(ex.name)}</button>
        <div class="muscle-tag">${MUSCLES[ex.m] || ''}${it.target ? ' · Ziel ' + esc(it.target) + ' Wdh.' : ''}</div></div>
        <button class="icon-btn" data-act="exMenu" data-i="${i}" aria-label="Optionen für ${esc(ex.name)}">${icon('more')}</button></div>
      ${it.note ? `<p class="small muted" style="margin:-4px 0 8px">${esc(it.note)}</p>` : ''}
      <table class="sets"><thead><tr><th>Satz</th><th>Vorher</th><th>kg</th><th>Wdh.</th><th><span class="sr">Erledigt</span>${icon('check', 'ic-s')}</th><th><span class="sr">Löschen</span></th></tr></thead><tbody>${rows}</tbody></table>
      <div class="row" style="margin-top:8px"><button class="btn btn-s btn-ghost" data-act="setAdd" data-i="${i}">${icon('plus', 'ic-s')}Satz</button><span class="grow"></span>
      <button class="btn btn-s btn-ghost" data-act="exRest" data-i="${i}">${icon('timer', 'ic-s')}Pause ${fmtDur(it.rest || Exercises.restFor(it.ex))}</button></div>
    </section>`;
  }).join('');
  const done = sum(a.items.map(it => it.sets.filter(s => s.done).length));
  const vol = sum(a.items.map(it => sum(it.sets.filter(s => s.done && s.type !== 'w').map(s => num(s.kg) * num(s.reps)))));
  return `<div class="wo-head"><div class="grow"><input class="wo-title" value="${esc(a.name)}" data-input="woName" aria-label="Name des Trainings">
      <div class="wo-clock"><span data-tick="wo">${fmtDur((Date.now() - a.start) / 1000)}</span> · ${done} ${done === 1 ? 'Satz' : 'Sätze'} · ${fmt(vol)} kg</div></div>
      <button class="btn btn-primary" data-act="woFinish">Beenden</button></div>
    <div class="ex-list">${items || `<div class="card">${emptyState('gym', 'Füge deine erste Übung hinzu')}</div>`}</div>
    <div class="stack" style="margin-top:16px">
      <button class="btn btn-l btn-block" data-act="woAddEx">${icon('plus')}Übung hinzufügen</button>
      <button class="btn btn-ghost btn-danger" data-act="woDiscard">Training verwerfen</button></div>`;
}
let saveActiveT;
function patchActive(fn, render) {
  const a = clone(Active.get());
  if (!a) return;
  fn(a);
  if (render) { Active.save(a); rerender(); }
  else { Store.mem.active = a; clearTimeout(saveActiveT); saveActiveT = setTimeout(() => Active.save(Store.mem.active), 400); }
}
A.woName = el => patchActive(a => { a.name = el.value; });
A.setField = el => patchActive(a => { a.items[+el.dataset.i].sets[+el.dataset.j][el.dataset.f] = el.value.replace(/[^0-9.,]/g, ''); });
A.setPrev = el => patchActive(a => { const s = a.items[+el.dataset.i].sets[+el.dataset.j]; s.kg = el.dataset.kg; s.reps = el.dataset.reps; }, true);
A.setType = el => patchActive(a => { const s = a.items[+el.dataset.i].sets[+el.dataset.j]; s.type = { n: 'w', w: 'd', d: 'n' }[s.type] || 'n'; }, true);
A.setDel = el => patchActive(a => { a.items[+el.dataset.i].sets.splice(+el.dataset.j, 1); }, true);
A.setAdd = el => patchActive(a => {
  const sets = a.items[+el.dataset.i].sets, last = sets[sets.length - 1];
  sets.push(last ? { kg: last.kg, reps: last.reps, type: last.type === 'w' ? 'n' : last.type, done: false } : newSet());
}, true);
A.setDone = el => {
  const i = +el.dataset.i, j = +el.dataset.j;
  let msg = null, rest = 0;
  patchActive(a => {
    const it = a.items[i], s = it.sets[j];
    if (!s.done) {
      // leere Felder aus „Vorher“ oder dem Satz davor übernehmen
      const row = el.closest('tr');
      const kgIn = row && row.querySelector('[data-f="kg"]'), repIn = row && row.querySelector('[data-f="reps"]');
      if (s.kg === '' && kgIn && kgIn.placeholder) s.kg = kgIn.placeholder.replace(/\./g, '');
      if (s.reps === '' && repIn && repIn.placeholder) s.reps = repIn.placeholder;
      if (s.kg === '' && j > 0) s.kg = it.sets[j - 1].kg;
      if (s.reps === '' && j > 0) s.reps = it.sets[j - 1].reps;
      if (s.reps === '') { msg = 'Bitte Wiederholungen eintragen'; return; }
      if (s.kg === '') s.kg = '0';
      s.done = true;
      rest = it.rest || Exercises.restFor(it.ex);
      const best = bestE1rm(it.ex), v = e1rm(num(s.kg), num(s.reps));
      if (s.type !== 'w' && best > 0 && v > best + 0.01) msg = `Neue Bestleistung: ${fmt(v, 1)} kg geschätztes 1RM`;
    } else s.done = false;
  }, true);
  if (rest) RestTimer.start(rest, Exercises.get(Active.get().items[i].ex).name.split(' (')[0]);
  if (msg) toast(msg);
};
A.exRest = el => {
  const a = Active.get(), it = a.items[+el.dataset.i];
  const cur = it.rest || Exercises.restFor(it.ex);
  Sheet.open(`${sheetHead('Pausenzeit', esc(Exercises.get(it.ex).name))}
    <div class="preset-row">${[45, 60, 90, 120, 150, 180, 240, 300].map(s => `<button class="chip chip-btn${s === cur ? ' active' : ''}" data-act="exRestSet" data-i="${el.dataset.i}" data-sec="${s}">${fmtDur(s)}</button>`).join('')}</div>
    <label class="check"><input type="checkbox" id="restRemember" checked> Für diese Übung merken</label>`);
};
A.exRestSet = el => {
  const sec = +el.dataset.sec, remember = $('#restRemember') && $('#restRemember').checked;
  patchActive(a => { a.items[+el.dataset.i].rest = sec; if (remember) Exercises.setRest(a.items[+el.dataset.i].ex, sec); }, true);
  Sheet.close();
};
A.exMenu = el => {
  const i = +el.dataset.i, a = Active.get(), it = a.items[i];
  Sheet.open(`${sheetHead(esc(Exercises.get(it.ex).name))}
    <label class="field">Notiz<textarea class="input" id="exNote" placeholder="z. B. Sitzhöhe 4, Griff eng">${esc(it.note || '')}</textarea></label>
    <div class="row wrap">
      <button class="btn" data-act="exMove" data-i="${i}" data-d="-1"${i === 0 ? ' disabled' : ''}>${icon('up')}Nach oben</button>
      <button class="btn" data-act="exMove" data-i="${i}" data-d="1"${i === a.items.length - 1 ? ' disabled' : ''}>${icon('down')}Nach unten</button>
      <button class="btn" data-act="exSwap" data-i="${i}">${icon('sync')}Tauschen</button>
      <button class="btn btn-danger" data-act="exRemove" data-i="${i}">${icon('trash')}Entfernen</button></div>
    <div class="sheet-actions"><button class="btn btn-primary" data-act="exNoteSave" data-i="${i}">Fertig</button></div>`);
};
A.exNoteSave = el => { const v = $('#exNote').value.trim(); patchActive(a => { a.items[+el.dataset.i].note = v; }, true); Sheet.close(); };
A.exMove = el => { const i = +el.dataset.i, d = +el.dataset.d; patchActive(a => { const x = a.items.splice(i, 1)[0]; a.items.splice(i + d, 0, x); }, true); Sheet.close(); };
A.exRemove = el => { patchActive(a => { a.items.splice(+el.dataset.i, 1); }, true); Sheet.close(); };
A.exSwap = el => openExercisePicker(ex => patchActive(a => { a.items[+el.dataset.i].ex = ex.id; }, true));
A.woAddEx = () => openExercisePicker(ex => patchActive(a => {
  const n = prevSets(ex.id).filter(s => s.type !== 'w').length || 3;
  a.items.push({ ex: ex.id, sets: Array.from({ length: n }, () => newSet()) });
}, true));
A.woDiscard = () => confirmSheet('Training verwerfen?', 'Alle Sätze dieses Trainings gehen verloren.', 'Verwerfen', () => { Active.clear(); RestTimer.stop(); go('training'); }, true);
A.woFinish = () => {
  const a = Active.get();
  if (!a) return;
  const open = sum(a.items.map(it => it.sets.filter(s => !s.done && (s.kg !== '' || s.reps !== '')).length));
  const doneSets = sum(a.items.map(it => it.sets.filter(s => s.done).length));
  if (!doneSets) return confirmSheet('Noch keine Sätze erledigt', 'Ohne abgehakte Sätze wird nichts gespeichert. Training verwerfen?', 'Verwerfen', () => { Active.clear(); go('training'); }, true);
  if (open) return confirmSheet('Training beenden?', `${open} ausgefüllte Sätze sind noch nicht abgehakt und werden nicht gespeichert.`, 'Beenden', finishWorkout);
  finishWorkout();
};
function finishWorkout() {
  const a = Active.get();
  const w = {
    id: a.id, name: a.name.trim() || workoutDefaultName(), start: a.start, end: Date.now(),
    items: a.items.map(it => ({ ex: it.ex, note: it.note || '', sets: it.sets.filter(s => s.done).map(s => ({ kg: num(s.kg), reps: Math.round(num(s.reps)), type: s.type })) }))
      .filter(it => it.sets.length)
  };
  const before = prEvents().length;
  Workouts.save(w);
  Active.clear();
  RestTimer.stop();
  const prs = prEvents().filter(e => e.w === w.id);
  const best = {};
  prs.forEach(p => { if (!best[p.ex] || p.v > best[p.ex].v) best[p.ex] = p; });
  go('training/einheit/' + w.id);
  Sheet.open(`${sheetHead('Training gespeichert', esc(w.name) + ' · ' + fmtDate(w.start, { day: true }))}
    <div class="nutri-grid"><div><b>${fmtMin(woDuration(w))}</b><span>Dauer</span></div><div><b>${fmt(woVolume(w))}</b><span>kg Volumen</span></div>
    <div><b>${workSets(w).length}</b><span>Arbeitssätze</span></div><div><b>${Object.keys(best).length}</b><span>Rekorde</span></div></div>
    ${Object.keys(best).length ? `<div class="list">${Object.values(best).map(p => `<div class="li"><span class="badge-pr">${icon('trophy', 'ic-s')}PR</span><div class="li-main"><div class="li-title">${esc(Exercises.get(p.ex).name)}</div><div class="li-sub">${fmt(p.s.kg, 2)} kg × ${p.s.reps}</div></div><div class="li-end">${fmt(p.v, 1)} kg 1RM</div></div>`).join('')}</div>` : ''}
    <div class="sheet-actions">${a.tpl ? '' : `<button class="btn" data-act="tplFromWorkout" data-id="${w.id}">Als Plan speichern</button>`}<button class="btn btn-primary" data-act="closeSheet">Fertig</button></div>`);
  void before;
}

/* ---------- Übungsauswahl ---------- */
let pickerCb = null, pickerFilter = '';
function openExercisePicker(cb) {
  pickerCb = cb; pickerFilter = '';
  Sheet.open(`${sheetHead('Übung wählen')}
    <div class="search-box">${icon('search')}<input class="input" id="exSearch" placeholder="Übung suchen" autocomplete="off" data-input="exPickSearch" autofocus></div>
    <div class="chips" id="exChips">${['', ...Object.keys(MUSCLES)].map(m => `<button class="chip chip-btn${m === '' ? ' active' : ''}" data-act="exPickMuscle" data-m="${m}">${m ? MUSCLES[m] : 'Alle'}</button>`).join('')}</div>
    <div class="pick-list list" id="exPickList">${exPickList('')}</div>
    <button class="btn" data-act="exNew">${icon('plus')}Eigene Übung anlegen</button>`);
}
function exPickList(q) {
  q = q.trim().toLowerCase();
  const counts = {};
  Workouts.all().forEach(w => w.items.forEach(it => { counts[it.ex] = (counts[it.ex] || 0) + 1; }));
  const list = Exercises.all().filter(e => (!pickerFilter || e.m === pickerFilter) && (!q || e.name.toLowerCase().includes(q)))
    .sort((a, b) => (counts[b.id] || 0) - (counts[a.id] || 0) || a.name.localeCompare(b.name, 'de'));
  if (!list.length) return `<p class="empty">Keine Übung gefunden</p>`;
  return list.map(e => `<button class="li" data-act="exPick" data-id="${e.id}"><div class="li-main"><div class="li-title">${esc(e.name)}</div><div class="li-sub">${MUSCLES[e.m]} · ${esc(e.eq)}${counts[e.id] ? ' · ' + counts[e.id] + '× trainiert' : ''}</div></div>${icon('plus', 'ic-s')}</button>`).join('');
}
A.exPickSearch = el => { $('#exPickList').innerHTML = exPickList(el.value); };
A.exPickMuscle = el => {
  pickerFilter = el.dataset.m;
  $$('#exChips .chip').forEach(c => c.classList.toggle('active', c === el));
  $('#exPickList').innerHTML = exPickList($('#exSearch').value);
};
A.exPick = el => { const ex = Exercises.get(el.dataset.id); Sheet.close(); if (pickerCb) pickerCb(ex); };
A.exNew = () => {
  const keep = pickerCb;
  Sheet.open(`${sheetHead('Eigene Übung')}
    <form class="stack" data-submit="exNewSave">
    <label class="field">Name<input class="input" name="name" required autofocus placeholder="z. B. Kabelrudern einarmig"></label>
    <div class="fields"><label class="field">Muskelgruppe<select class="input" name="m">${Object.keys(MUSCLES).map(m => `<option value="${m}">${MUSCLES[m]}</option>`).join('')}</select></label>
    <label class="field">Gerät<input class="input" name="eq" placeholder="Kabel, Maschine …"></label></div>
    <div class="sheet-actions"><button type="button" class="btn" data-act="closeSheet">Abbrechen</button><button class="btn btn-primary">Anlegen</button></div></form>`);
  pickerCb = keep;
};
A.exNewSave = f => {
  const d = formData(f);
  if (!d.name.trim()) return;
  const ex = Exercises.add(d.name.trim(), d.m, d.eq.trim());
  Sheet.close();
  if (pickerCb) pickerCb(ex); else rerender();
};
A.exOpen = el => go('training/uebung/' + encodeURIComponent(el.dataset.ex));

/* ---------- Pläne ---------- */
function renderPlans() {
  const list = Templates.all();
  return `<div class="row-between" style="margin-bottom:16px"><p class="muted">Vorlagen für deine Trainingstage. Ein Tipp startet das Training.</p>
    <button class="btn" data-act="tplEdit">${icon('plus')}Neuer Plan</button></div>
    <div class="grid">${list.map(t => `<div class="card template-card span-4">
      <div class="row-between"><h2>${esc(t.name)}</h2><button class="icon-btn" data-act="tplEdit" data-id="${t.id}" aria-label="${esc(t.name)} bearbeiten">${icon('edit')}</button></div>
      <ul>${t.items.map(it => `<li>${it.sets} × ${esc(Exercises.get(it.ex).name)}${it.reps ? ` <span class="tiny">(${esc(it.reps)})</span>` : ''}</li>`).join('')}</ul>
      <button class="btn btn-primary" data-act="woStartTpl" data-id="${t.id}">${icon('play')}Starten</button></div>`).join('') || `<div class="card span-12">${emptyState('list', 'Noch keine Pläne')}</div>`}</div>`;
}
let tplDraft = null;
A.tplEdit = el => {
  const t = el.dataset.id ? Templates.get(el.dataset.id) : null;
  tplDraft = t ? clone(t) : { id: 't-' + uid(), name: '', items: [] };
  tplRender(!t);
};
A.tplFromWorkout = el => {
  const w = Workouts.get(el.dataset.id);
  tplDraft = { id: 't-' + uid(), name: w.name, items: w.items.map(it => ({ ex: it.ex, sets: it.sets.filter(s => s.type !== 'w').length || it.sets.length, reps: '' })) };
  tplRender(true);
};
function tplRender(isNew) {
  Sheet.open(`${sheetHead(isNew ? 'Neuer Plan' : 'Plan bearbeiten')}
    <label class="field">Name<input class="input" id="tplName" value="${esc(tplDraft.name)}" placeholder="z. B. Oberkörper A" data-input="tplName"></label>
    <div class="list">${tplDraft.items.map((it, i) => `<div class="li"><div class="li-main"><div class="li-title">${esc(Exercises.get(it.ex).name)}</div></div>
      <input class="set-in" style="max-width:52px" inputmode="numeric" aria-label="Sätze" value="${it.sets}" data-input="tplSets" data-i="${i}"><span class="tiny muted">Sätze</span>
      <input class="set-in" style="max-width:64px" aria-label="Wiederholungen" placeholder="Wdh." value="${esc(it.reps || '')}" data-input="tplReps" data-i="${i}">
      <button class="set-del" data-act="tplDelEx" data-i="${i}" aria-label="Übung entfernen">${icon('x', 'ic-s')}</button></div>`).join('') || '<p class="muted small">Noch keine Übungen.</p>'}</div>
    <button class="btn" data-act="tplAddEx">${icon('plus')}Übung hinzufügen</button>
    <div class="sheet-actions">${isNew ? '' : `<button class="btn btn-danger" data-act="tplDelete">Löschen</button>`}<button class="btn" data-act="closeSheet">Abbrechen</button><button class="btn btn-primary" data-act="tplSave">Speichern</button></div>`);
}
A.tplName = el => { tplDraft.name = el.value; };
A.tplSets = el => { tplDraft.items[+el.dataset.i].sets = clamp(Math.round(num(el.value)) || 1, 1, 12); };
A.tplReps = el => { tplDraft.items[+el.dataset.i].reps = el.value; };
A.tplDelEx = el => { tplDraft.items.splice(+el.dataset.i, 1); tplRender(!Templates.get(tplDraft.id)); };
A.tplAddEx = () => { const d = tplDraft; openExercisePicker(ex => { tplDraft = d; d.items.push({ ex: ex.id, sets: 3, reps: '8–12' }); tplRender(!Templates.get(d.id)); }); };
A.tplSave = () => {
  if (!tplDraft.name.trim()) return toast('Bitte einen Namen eingeben');
  Templates.save(tplDraft); Sheet.close(); toast('Plan gespeichert');
  if (route().sub === 'plaene') rerender(); else go('training/plaene');
};
A.tplDelete = () => { const id = tplDraft.id; Sheet.close(); confirmSheet('Plan löschen?', 'Gespeicherte Trainings bleiben erhalten.', 'Löschen', () => { Templates.remove(id); rerender(); }, true); };

/* ---------- Übungen ---------- */
let exListFilter = '';
function renderExercises() {
  const counts = {}, best = {};
  Workouts.all().forEach(w => w.items.forEach(it => {
    counts[it.ex] = (counts[it.ex] || 0) + 1;
    it.sets.forEach(s => { if (s.type !== 'w') best[it.ex] = Math.max(best[it.ex] || 0, e1rm(s.kg, s.reps)); });
  }));
  const list = Exercises.all().filter(e => !exListFilter || e.m === exListFilter)
    .sort((a, b) => (counts[b.id] || 0) - (counts[a.id] || 0) || a.name.localeCompare(b.name, 'de'));
  return `<div class="row-between wrap" style="margin-bottom:16px"><div class="chips">${['', ...Object.keys(MUSCLES)].map(m => `<button class="chip chip-btn${m === exListFilter ? ' active' : ''}" data-act="exListMuscle" data-m="${m}">${m ? MUSCLES[m] : 'Alle'}</button>`).join('')}</div>
    <button class="btn" data-act="exNewFromList">${icon('plus')}Eigene Übung</button></div>
    <div class="card" style="padding:8px 16px"><div class="list">${list.map(e => `<a class="li" href="#/training/uebung/${encodeURIComponent(e.id)}">
      <div class="li-main"><div class="li-title">${esc(e.name)}</div><div class="li-sub">${MUSCLES[e.m]} · ${esc(e.eq)}${e.custom ? ' · eigene' : ''}</div></div>
      <div class="li-end">${counts[e.id] ? `${fmt(best[e.id] || 0, 1)} kg<div class="li-sub">${counts[e.id]}× trainiert</div>` : '<span class="muted small">neu</span>'}</div></a>`).join('')}</div></div>`;
}
A.exListMuscle = el => { exListFilter = el.dataset.m; rerender(); };
A.exNewFromList = () => { pickerCb = null; A.exNew(); };

function renderExerciseDetail(id) {
  const ex = Exercises.get(id);
  const h = exHistory(id);
  const bw = h.length && h.every(x => !x.topKg);
  const best = h.reduce((b, x) => x.e1rm > (b ? b.e1rm : 0) ? x : b, null);
  const topSet = h.reduce((b, x) => (!b || x.topKg > b.topKg) ? x : b, null);
  const pts = h.map(x => ({ x: x.date, y: bw ? x.topReps : Math.round(x.e1rm * 10) / 10, tip: `<b>${bw ? x.topReps + ' Wdh.' : fmt(x.e1rm, 1) + ' kg 1RM'}</b><br>${fmt(x.best.kg, 2)} kg × ${x.best.reps} · ${esc(fmtDate(x.date, { plain: true, day: true }))}` }));
  return `<a class="btn btn-ghost btn-s" href="#/training/uebungen" style="margin-bottom:12px">${icon('left', 'ic-s')}Alle Übungen</a>
    ${pageHead(esc(ex.name), `${MUSCLES[ex.m]} · ${esc(ex.eq)}`, ex.custom ? `<button class="btn btn-danger" data-act="exDelete" data-id="${ex.id}">${icon('trash')}Löschen</button>` : '')}
    <div class="kpis">
      <div class="card"><div class="stat-label">${bw ? 'Meiste Wdh.' : 'Geschätztes 1RM'}</div><div class="stat-value">${best ? (bw ? Math.max(...h.map(x => x.topReps)) : fmt(best.e1rm, 1)) : '–'}${best && !bw ? '<small>kg</small>' : ''}</div><div class="stat-foot">${best && !bw ? fmtDate(best.date) : ''}</div></div>
      <div class="card"><div class="stat-label">Schwerster Satz</div><div class="stat-value">${topSet ? fmt(topSet.topKg, 2) : '–'}<small>kg</small></div></div>
      <div class="card"><div class="stat-label">Einheiten</div><div class="stat-value">${h.length}</div></div>
      <div class="card"><div class="stat-label">Gesamtvolumen</div><div class="stat-value">${fmt(sum(h.map(x => x.volume)) / 1000, 1)}<small>t</small></div></div></div>
    <div class="grid"><div class="card span-7"><div class="card-head"><h2>${icon('chart')}${bw ? 'Beste Wiederholungen' : 'Geschätztes 1RM'}</h2><span class="muted small">Epley-Formel</span></div>
      ${Charts.slot({ type: 'line', points: pts, label: 'Kraftverlauf ' + ex.name, yFmt: v => fmt(v, 1), empty: 'Trainiere die Übung, dann erscheint hier dein Verlauf.' })}</div>
      <div class="card span-5"><div class="card-head"><h2>${icon('list')}Verlauf</h2></div><div class="list">${h.slice().reverse().slice(0, 12).map(x => `<a class="li" href="#/training/einheit/${x.w.id}"><div class="li-main"><div class="li-title">${fmtDate(x.date, { day: true })}</div>
        <div class="li-sub">${x.sets.map(s => (s.type === 'w' ? 'A ' : '') + fmt(s.kg, 2) + '×' + s.reps).join(' · ')}</div></div><div class="li-end">${bw ? x.topReps + ' Wdh.' : fmt(x.e1rm, 1) + ' kg'}</div></a>`).join('') || '<p class="muted">Noch nicht trainiert</p>'}</div></div></div>`;
}
A.exDelete = el => confirmSheet('Übung löschen?', 'Gespeicherte Sätze bleiben in deinen Trainings erhalten.', 'Löschen', () => { Exercises.remove(el.dataset.id); go('training/uebungen'); }, true);

/* ---------- Verlauf ---------- */
function renderHistory() {
  const ws = Workouts.all();
  if (!ws.length) return `<div class="card">${emptyState('calendar', 'Noch keine Trainings gespeichert', `<button class="btn btn-primary" data-act="woStartEmpty">Training starten</button>`)}</div>`;
  const prs = prEvents();
  const groups = {};
  ws.forEach(w => { const k = monthOf(dkey(w.start)); (groups[k] = groups[k] || []).push(w); });
  return Object.keys(groups).sort().reverse().map(k => {
    const [y, m] = k.split('-').map(Number);
    return `<h2 style="margin:20px 4px 12px">${MONTHS_LONG[m - 1]} ${y} <span class="muted small">· ${groups[k].length} Trainings</span></h2>
    <div class="card" style="padding:8px 16px"><div class="list">${groups[k].map(w => {
      const pc = new Set(prs.filter(p => p.w === w.id).map(p => p.ex)).size;
      return `<a class="li" href="#/training/einheit/${w.id}"><div class="li-main"><div class="li-title">${esc(w.name)} ${pc ? `<span class="badge-pr">${icon('trophy', 'ic-s')}${pc}</span>` : ''}</div>
        <div class="li-sub">${woSub(w)}</div></div><div class="li-end">${woEnd(w)}</div></a>`;
    }).join('')}</div></div>`;
  }).join('');
}
function renderWorkoutDetail(id) {
  const w = Workouts.get(id);
  if (!w) return `<div class="card">${emptyState('calendar', 'Training nicht gefunden')}</div>`;
  const prs = prEvents().filter(p => p.w === w.id);
  if (w.src === 'noop') {
    return `<a class="btn btn-ghost btn-s" href="#/training/verlauf" style="margin-bottom:12px">${icon('left', 'ic-s')}Verlauf</a>
    ${pageHead(esc(w.name), `${fmtDate(w.start, { day: true, plain: true })} · ${fmtTime(w.start)}–${fmtTime(w.end)} Uhr · aus NOOP`, `<button class="icon-btn bordered" data-act="woDelete" data-id="${w.id}" aria-label="Training löschen">${icon('trash')}</button>`)}
    <div class="kpis"><div class="card"><div class="stat-label">Dauer</div><div class="stat-value">${fmtMin(woDuration(w))}</div></div>
      <div class="card"><div class="stat-label">Belastung</div><div class="stat-value">${w.strain != null ? fmt(w.strain, 1) : '–'}<small>/ 100</small></div></div>
      <div class="card"><div class="stat-label">Kalorien</div><div class="stat-value">${w.kcal ? fmt(w.kcal) : '–'}<small>kcal</small></div></div>
      <div class="card"><div class="stat-label">Puls Ø / max</div><div class="stat-value">${w.avgHr || '–'}<small>/ ${w.maxHr || '–'} bpm</small></div></div></div>
    ${noopHrBlock(w)}
    <div class="card" style="margin-top:16px"><p class="muted">In NOOP aufgezeichnet (${esc(sportDe(w.sport))}). Sätze und Gewichte gibt es dafür nicht. Wenn du das Training hier im Logger mitschreibst, bekommst du beides.</p></div>`;
  }
  return `<a class="btn btn-ghost btn-s" href="#/training/verlauf" style="margin-bottom:12px">${icon('left', 'ic-s')}Verlauf</a>
    ${pageHead(esc(w.name), `${fmtDate(w.start, { day: true, plain: true })} · ${fmtTime(w.start)}–${fmtTime(w.end)} Uhr`,
      `<button class="btn" data-act="woRepeat" data-id="${w.id}">${icon('play')}Wiederholen</button><button class="btn" data-act="tplFromWorkout" data-id="${w.id}">Als Plan</button><button class="icon-btn bordered" data-act="woDelete" data-id="${w.id}" aria-label="Training löschen">${icon('trash')}</button>`)}
    <div class="kpis"><div class="card"><div class="stat-label">Dauer</div><div class="stat-value">${fmtMin(woDuration(w))}</div></div>
      <div class="card"><div class="stat-label">Volumen</div><div class="stat-value">${fmt(woVolume(w))}<small>kg</small></div></div>
      <div class="card"><div class="stat-label">Arbeitssätze</div><div class="stat-value">${workSets(w).length}</div></div>
      <div class="card"><div class="stat-label">Rekorde</div><div class="stat-value">${new Set(prs.map(p => p.ex)).size}</div></div></div>
    <div class="grid">${w.items.map(it => {
      const ex = Exercises.get(it.ex);
      let n = 0;
      return `<div class="card span-6"><div class="card-head"><h2><a href="#/training/uebung/${encodeURIComponent(ex.id)}" style="text-decoration:none">${esc(ex.name)}</a></h2><span class="muted small">${MUSCLES[ex.m]}</span></div>
        ${it.note ? `<p class="small muted" style="margin-bottom:8px">${esc(it.note)}</p>` : ''}
        <table class="ntable"><thead><tr><th>Satz</th><th>Gewicht</th><th>Wdh.</th><th>1RM</th></tr></thead><tbody>${it.sets.map(s => {
          const isPr = prs.some(p => p.ex === it.ex && p.s === s || (p.ex === it.ex && p.s.kg === s.kg && p.s.reps === s.reps));
          const lab = s.type === 'w' ? 'A' : s.type === 'd' ? 'D' : String(++n);
          return `<tr><td>${lab} ${isPr ? `<span class="badge-pr">PR</span>` : ''}</td><td>${fmt(s.kg, 2)} kg</td><td>${s.reps}</td><td>${s.type === 'w' ? '–' : fmt(e1rm(s.kg, s.reps), 1)}</td></tr>`;
        }).join('')}</tbody></table></div>`;
    }).join('')}</div>`;
}
// Pulsverlauf mit Zonen wie in NOOP (Zonen: 50/60/70/80/90 % des Maximalpulses)
const ZONES = [['Erholung', 1], ['Fettverbrennung', 2], ['Aerob', 3], ['Schwelle', 4], ['Maximum', 5]];
const zoneFill = (z, strong) => `color-mix(in srgb, var(--accent-mark) ${strong ? [0, 30, 45, 62, 80, 100][z] : [0, 5, 9, 14, 20, 28][z]}%, transparent)`;
function noopHrBlock(w) {
  if (!w.hr || !w.hr.v || !w.hr.v.some(x => x)) return '';
  const step = w.hr.step || 10, max = w.hrMax;
  const zoneOf = bpm => { if (!max) return 0; let z = 0; while (z < 5 && bpm >= [0.5, 0.6, 0.7, 0.8, 0.9][z] * max) z++; return z; };
  const pts = w.hr.v.map((bpm, i) => bpm ? { x: i * step / 60, y: bpm, tip: `<b>${bpm} bpm</b>${max ? ` · Zone ${zoneOf(bpm) || '–'}` : ''}<br>Minute ${fmtDur(i * step)}` } : null).filter(Boolean);
  const bands = max ? ZONES.map(([name, z]) => ({ from: [0.5, 0.6, 0.7, 0.8, 0.9][z - 1] * max, to: z === 5 ? max * 1.1 : [0.6, 0.7, 0.8, 0.9, 1][z - 1] * max, fill: zoneFill(z), label: 'Z' + z })) : [];
  const total = w.zones ? sum(w.zones) : 0;
  const rows = w.zones && total ? ZONES.slice().reverse().map(([name, z]) => {
    const sec = w.zones[z], pct = sec / total * 100;
    const loB = Math.round([0.5, 0.6, 0.7, 0.8, 0.9][z - 1] * max), hiB = Math.round([0.6, 0.7, 0.8, 0.9, 1][z - 1] * max);
    return `<div class="zone-row"><span class="zn" style="background:${zoneFill(z, true)}">${z}</span>
      <span class="zt">${name}<small>${loB}–${hiB} bpm</small></span><span class="zv">${fmtMin(sec)}<small>${fmt(pct)} %</small></span>
      <span class="zb"><span style="width:${pct.toFixed(1)}%;background:${zoneFill(z, true)}"></span></span></div>`;
  }).join('') + (w.zones[0] ? `<p class="small muted">Unter Zone 1: ${fmtMin(w.zones[0])}</p>` : '') : '<p class="muted">Keine Zonenzeiten vorhanden</p>';
  return `<div class="grid" style="margin-top:16px">
    <div class="card span-8"><div class="card-head"><h2>${icon('pulse')}Herzfrequenz</h2><span class="muted small">Ø ${w.avgHr || '–'} · max ${w.maxHr || '–'} bpm</span></div>
      ${Charts.slot({ type: 'line', points: pts, height: 280, area: false, bands, label: 'Herzfrequenz-Verlauf', xFmt: v => `${Math.round(v)} min`, yFmt: v => fmt(v) })}</div>
    <div class="card span-4"><div class="card-head"><h2>Zeit in Zonen</h2><span class="muted small">${max ? `Maximalpuls ${max}` : ''}</span></div>
      <div class="zone-rows">${rows}</div></div></div>`;
}
A.woDelete = el => confirmSheet('Training löschen?', 'Das Training wird endgültig aus deinem Verlauf entfernt.', 'Löschen', () => { Workouts.remove(el.dataset.id); go('training/verlauf'); }, true);

/* ---------- Übersicht ---------- */
const kv = Local.get('kv', { ex: '', metric: 'e1rm', range: 180 });
const muscleRange = { d: Local.get('muscleRange', 7) };
function renderTrainingDash() {
  const s = settings();
  const t = todayKey(), ws = weekStart(t);
  const thisWeek = workoutsInRange(ws, t);
  const last7 = workoutsInRange(addDays(t, -6), t), prev7 = workoutsInRange(addDays(t, -13), addDays(t, -7));
  const vol7 = sum(last7.map(woVolume)), volPrev = sum(prev7.map(woVolume));
  const delta = volPrev ? (vol7 - volPrev) / volPrev * 100 : 0;
  const prs30 = prEvents().filter(p => dkey(p.date) >= addDays(t, -29));
  const prEx30 = new Set(prs30.map(p => p.w + p.ex)).size;
  // Wochenserie: Wochen in Folge mit erreichtem Ziel (laufende Woche zählt, wenn erreicht)
  let streak = 0;
  for (let i = 0; i < 104; i++) {
    const a = addDays(ws, -7 * i), b = addDays(a, 6);
    const n = workoutsInRange(a, b).length;
    if (n >= s.weekGoal) streak++; else if (i > 0) break;
  }
  // Kraftverlauf
  const freq = {};
  Workouts.all().forEach(w => w.items.forEach(it => { freq[it.ex] = (freq[it.ex] || 0) + 1; }));
  const exIds = Object.keys(freq).sort((a, b) => freq[b] - freq[a]);
  if (!kv.ex || !freq[kv.ex]) kv.ex = exIds[0] || '';
  const hist = kv.ex ? exHistory(kv.ex).filter(x => !kv.range || dkey(x.date) >= addDays(t, -kv.range)) : [];
  const bw = hist.length && hist.every(x => !x.topKg);
  const metric = bw ? 'reps' : kv.metric;
  const pts = hist.map(x => {
    const y = metric === 'e1rm' ? Math.round(x.e1rm * 10) / 10 : metric === 'top' ? x.topKg : metric === 'vol' ? x.volume : x.topReps;
    const unit = metric === 'reps' ? ' Wdh.' : ' kg';
    return { x: x.date, y, tip: `<b>${fmt(y, 1)}${unit}</b> ${metric === 'e1rm' ? '1RM' : metric === 'vol' ? 'Volumen' : ''}<br>Bester Satz ${fmt(x.best.kg, 2)} kg × ${x.best.reps}<br>${esc(fmtDate(x.date, { plain: true, day: true }))}` };
  });
  const first = pts[0], last = pts[pts.length - 1];
  const change = first && last && first.y ? (last.y - first.y) / first.y * 100 : 0;
  // Trainings pro Woche (12 Wochen)
  const weeks = [];
  for (let i = 11; i >= 0; i--) {
    const a = addDays(ws, -7 * i), b = addDays(a, 6);
    const n = workoutsInRange(a, b).length;
    const d = parseKey(a);
    weeks.push({ label: `${d.getDate()}.${d.getMonth() + 1}.`, value: n, strong: i === 0, tip: `<b>${n} Trainings</b><br>Woche ab ${esc(fmtDate(a, { plain: true }))}` });
  }
  // Bestleistungen je Übung
  const bests = exIds.map(id => {
    const h = exHistory(id); const b = h.reduce((m, x) => x.e1rm > (m ? m.e1rm : 0) ? x : m, null);
    return b && b.e1rm ? { id, b } : null;
  }).filter(Boolean).sort((a, b) => b.b.e1rm - a.b.e1rm).slice(0, 7);
  const active = Active.get();
  const days = [];
  for (let i = 0; i < 7; i++) { const k = addDays(ws, i); days.push({ k, on: Workouts.all().some(w => dkey(w.start) === k) }); }

  return `${active ? `<a class="banner" href="#/training/aktiv">${icon('gym')}<div class="grow">${esc(active.name)} läuft<small><span data-tick="wo">${fmtDur((Date.now() - active.start) / 1000)}</span> · tippe zum Weitermachen</small></div>${icon('right')}</a>` : ''}
  <div class="quick">
    <button class="quick-btn" data-act="woStartEmpty"><span class="qi">${icon('plus')}</span><span>Leeres Training<small>frei loslegen</small></span></button>
    ${Templates.all().slice(0, 3).map(tp => `<button class="quick-btn" data-act="woStartTpl" data-id="${tp.id}"><span class="qi">${icon('play')}</span><span>${esc(tp.name)}<small>${tp.items.length} Übungen</small></span></button>`).join('')}
  </div>
  <div class="kpis">
    <div class="card"><div class="stat-label">Diese Woche</div><div class="stat-value">${thisWeek.length}<small>/ ${s.weekGoal}</small></div>
      <div class="week-dots" style="margin-top:12px">${days.map(d => `<div class="${d.k === t ? 'today' : ''}"><i class="${d.on ? 'on' : ''}" title="${fmtDate(d.k, { plain: true, day: true })}">${d.on ? icon('check', 'ic-s') : ''}</i>${DAYS[parseKey(d.k).getDay()]}</div>`).join('')}</div></div>
    <div class="card"><div class="stat-label">Volumen · 7 Tage</div><div class="stat-value">${fmt(vol7 / 1000, 1)}<small>t</small></div>
      <div class="stat-foot">${volPrev ? `<span class="${delta >= 0 ? 'delta-up' : 'delta-down'}">${delta >= 0 ? '+' : '−'}${fmt(Math.abs(delta))} %</span> zur Vorwoche` : 'Vorwoche ohne Training'}</div></div>
    <div class="card"><div class="stat-label">Wochenserie</div><div class="stat-value">${streak}<small>${streak === 1 ? 'Woche' : 'Wochen'}</small></div><div class="stat-foot">mit ≥ ${s.weekGoal} Trainings</div></div>
    <div class="card"><div class="stat-label">Rekorde · 30 Tage</div><div class="stat-value">${prEx30}</div><div class="stat-foot">${fmtMin(sum(last7.map(woDuration)))} Training in 7 Tagen</div></div>
  </div>
  <div class="grid">
    <div class="card span-8"><div class="card-head wrap"><h2>${icon('chart')}Kraftverlauf</h2>
      <div class="row wrap">${exIds.length ? `<select class="input" style="min-height:36px;padding:4px 12px;font-size:14px;width:auto;max-width:240px" data-change="kvEx" aria-label="Übung wählen">${exIds.map(id => `<option value="${id}"${id === kv.ex ? ' selected' : ''}>${esc(Exercises.get(id).name)}</option>`).join('')}</select>` : ''}</div></div>
      <div class="row-between wrap" style="margin-bottom:12px">
        <div class="seg" role="group" aria-label="Kennzahl">${bw ? '<button class="active">Wiederholungen</button>' : [['e1rm', '1RM'], ['top', 'Gewicht'], ['vol', 'Volumen']].map(([k, l]) => `<button class="${metric === k ? 'active' : ''}" data-act="kvMetric" data-k="${k}">${l}</button>`).join('')}</div>
        <div class="seg" role="group" aria-label="Zeitraum">${[[90, '3 M'], [180, '6 M'], [365, '1 J'], [0, 'Alles']].map(([k, l]) => `<button class="${kv.range === k ? 'active' : ''}" data-act="kvRange" data-k="${k}">${l}</button>`).join('')}</div></div>
      ${pts.length > 1 ? `<p class="small muted" style="margin-bottom:8px">${change >= 0 ? `<span class="delta-up">+${fmt(change, 1)} %</span>` : `<span class="delta-down">${fmt(change, 1)} %</span>`} im Zeitraum · zuletzt <b style="color:var(--ink)">${fmt(last.y, 1)} ${metric === 'reps' ? 'Wdh.' : 'kg'}</b></p>` : ''}
      ${Charts.slot({ type: 'line', points: pts, label: 'Kraftverlauf', height: 240, yFmt: v => fmt(v, metric === 'vol' ? 0 : 1), empty: exIds.length ? 'Zu wenig Daten im Zeitraum' : 'Nach deinem ersten Training siehst du hier, wie du stärker wirst.' })}</div>
    <div class="card span-4"><div class="card-head"><h2>${icon('gym')}Sätze je Muskel</h2>
      <div class="seg">${[[7, '7 T'], [30, '30 T']].map(([k, l]) => `<button class="${muscleRange.d === k ? 'active' : ''}" data-act="muscleRange" data-k="${k}">${l}</button>`).join('')}</div></div>
      ${(() => { const m = muscleSets(muscleRange.d); return m.length ? hbars(m, v => fmt(v)) : '<p class="empty">Noch keine Sätze im Zeitraum</p>'; })()}
      <p class="tiny muted" style="margin-top:12px">Arbeitssätze ohne Aufwärmen. Richtwert für Muskelaufbau: 10–20 Sätze je Muskel und Woche.</p></div>
    <div class="card span-7"><div class="card-head"><h2>${icon('calendar')}Trainings pro Woche</h2><span class="muted small">Ziel ${s.weekGoal}</span></div>
      ${Charts.slot({ type: 'bars', bars: weeks, goal: s.weekGoal, goalLabel: 'Ziel', height: 200, label: 'Trainings pro Woche', empty: 'Noch keine Trainings' })}</div>
    <div class="card span-5"><div class="card-head"><h2>${icon('trophy')}Bestleistungen</h2><a class="btn btn-ghost btn-s" href="#/training/uebungen">Alle</a></div>
      <div class="list">${bests.map(x => `<a class="li" href="#/training/uebung/${encodeURIComponent(x.id)}"><div class="li-main"><div class="li-title">${esc(Exercises.get(x.id).name)}</div><div class="li-sub">${fmt(x.b.best.kg, 2)} kg × ${x.b.best.reps} · ${fmtDate(x.b.date)}</div></div><div class="li-end">${fmt(x.b.e1rm, 1)} kg</div></a>`).join('') || '<p class="empty">Hier landen deine Rekorde</p>'}</div></div>
    <div class="card span-12"><div class="card-head"><h2>${icon('list')}Letzte Trainings</h2><a class="btn btn-ghost btn-s" href="#/training/verlauf">Verlauf</a></div>
      <div class="list">${Workouts.all().slice(0, 5).map(w => `<a class="li" href="#/training/einheit/${w.id}"><div class="li-main"><div class="li-title">${esc(w.name)}</div><div class="li-sub">${w.src === 'noop' ? woSub(w) : `${fmtDate(w.start, { day: true })} · ${fmtMin(woDuration(w))} · ${w.items.map(it => Exercises.get(it.ex).name.split(' (')[0]).slice(0, 4).join(', ')}`}</div></div><div class="li-end">${woEnd(w)}</div></a>`).join('') || '<p class="empty">Noch keine Trainings</p>'}</div></div>
  </div>`;
}
A.kvEx = el => { kv.ex = el.value; Local.set('kv', kv); rerender(); };
A.kvMetric = el => { kv.metric = el.dataset.k; Local.set('kv', kv); rerender(); };
A.kvRange = el => { kv.range = +el.dataset.k; Local.set('kv', kv); rerender(); };
A.muscleRange = el => { muscleRange.d = +el.dataset.k; Local.set('muscleRange', muscleRange.d); rerender(); };

/* ---------- Timer & Rechner ---------- */
const SW = Local.get('sw', { start: 0, acc: 0, laps: [] });
const IV = { work: 40, rest: 20, rounds: 8, phase: null, round: 0, end: 0, iv: null };
function swElapsed() { return SW.acc + (SW.start ? Date.now() - SW.start : 0); }
function fmtSw(ms) { const s = Math.floor(ms / 1000); return `${fmtDur(s)},${String(Math.floor(ms % 1000 / 100))}`; }
function renderTools() {
  const r = RestTimer.st ? RestTimer.remaining() : 0, tot = RestTimer.st ? RestTimer.st.total : 1;
  const c = 2 * Math.PI * 44;
  return `<div class="grid">
    <div class="card span-6"><div class="card-head"><h2>${icon('timer')}Pausentimer</h2>${RestTimer.st ? `<button class="btn btn-s" data-act="timerStop">Stopp</button>` : ''}</div>
      <div class="timer-ring"><svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="44" fill="none" stroke="var(--surface-3)" stroke-width="5"/>
        <circle id="restRing" cx="50" cy="50" r="44" fill="none" stroke="var(--accent-mark)" stroke-width="5" stroke-linecap="round" stroke-dasharray="${c.toFixed(1)}" stroke-dashoffset="${(c * (1 - r / tot)).toFixed(1)}"/></svg>
        <div class="big-time" id="restBig">${fmtDur(Math.ceil(r))}</div></div>
      <div class="preset-row" style="margin-top:16px">${[30, 60, 90, 120, 180, 300].map(sec => `<button class="chip chip-btn" data-act="restStart" data-sec="${sec}">${fmtDur(sec)}</button>`).join('')}</div>
      <div class="row" style="justify-content:center;margin-top:12px"><button class="btn btn-s" data-act="timerAdd" data-sec="-15">−15 s</button><button class="btn btn-s" data-act="timerAdd" data-sec="15">+15 s</button>
      ${'Notification' in window && Notification.permission === 'default' ? `<button class="btn btn-s btn-ghost" data-act="notifAsk">Mitteilungen erlauben</button>` : ''}</div></div>
    <div class="card span-6"><div class="card-head"><h2>${icon('timer')}Stoppuhr</h2></div>
      <div class="big-time" data-tick="sw" style="margin:24px 0">${fmtSw(swElapsed())}</div>
      <div class="row" style="justify-content:center">
        <button class="btn btn-l ${SW.start ? '' : 'btn-primary'}" data-act="swToggle">${SW.start ? icon('pause') + 'Pause' : icon('play') + 'Start'}</button>
        <button class="btn btn-l" data-act="${SW.start ? 'swLap' : 'swReset'}">${SW.start ? 'Runde' : 'Zurücksetzen'}</button></div>
      <div class="list" style="margin-top:12px">${SW.laps.slice().reverse().map((l, i) => `<div class="li"><span class="li-main">Runde ${SW.laps.length - i}</span><span class="li-end">${fmtSw(l)}</span></div>`).join('')}</div></div>
    <div class="card span-6"><div class="card-head"><h2>${icon('bolt')}Intervalltimer</h2><span class="muted small">Tabata, HIIT, Zirkel</span></div>
      ${IV.phase ? `<div class="live"><p class="stat-label" data-tick="ivPhase">${IV.phase === 'work' ? 'Belastung' : IV.phase === 'rest' ? 'Pause' : 'Gleich geht’s los'}</p>
        <div class="big-time" data-tick="iv" style="margin:12px 0">${fmtDur(Math.ceil(Math.max(0, IV.end - Date.now()) / 1000))}</div>
        <p class="muted" data-tick="ivRound">Runde ${Math.max(1, IV.round)} von ${IV.rounds}</p>
        <button class="btn btn-l" style="margin-top:16px" data-act="ivStop">${icon('stop')}Stopp</button></div>` :
      `<div class="fields"><label class="field">Belastung (s)<input class="input" inputmode="numeric" id="ivWork" value="${IV.work}"></label>
        <label class="field">Pause (s)<input class="input" inputmode="numeric" id="ivRest" value="${IV.rest}"></label>
        <label class="field">Runden<input class="input" inputmode="numeric" id="ivRounds" value="${IV.rounds}"></label></div>
        <div class="chips" style="margin:12px 0"><button class="chip chip-btn" data-act="ivPreset" data-v="20,10,8">Tabata 20/10</button><button class="chip chip-btn" data-act="ivPreset" data-v="40,20,10">HIIT 40/20</button><button class="chip chip-btn" data-act="ivPreset" data-v="60,30,6">Zirkel 60/30</button></div>
        <button class="btn btn-primary btn-block" data-act="ivStart">${icon('play')}Starten</button>`}</div>
    <div class="card span-6"><div class="card-head"><h2>${icon('trophy')}1RM-Rechner</h2></div>
      <div class="fields"><label class="field">Gewicht (kg)<input class="input" inputmode="decimal" id="ormKg" value="100" data-input="ormCalc"></label>
      <label class="field">Wiederholungen<input class="input" inputmode="numeric" id="ormReps" value="5" data-input="ormCalc"></label></div>
      <div id="ormOut" style="margin-top:12px">${ormTable(100, 5)}</div></div>
    <div class="card span-12"><div class="card-head"><h2>${icon('gym')}Scheibenrechner</h2><span class="muted small">pro Seite</span></div>
      <div class="fields"><label class="field">Zielgewicht (kg)<input class="input" inputmode="decimal" id="plTarget" value="100" data-input="plateCalc"></label>
      <label class="field">Stange (kg)<select class="input" id="plBar" data-change="plateCalc"><option value="20">Langhantel 20</option><option value="15">Damen-Stange 15</option><option value="10">SZ-Stange 10</option><option value="0">ohne</option></select></label></div>
      <div id="plOut">${plateHtml(100, 20)}</div></div>
  </div>`;
}
function ormTable(kg, reps) {
  const m = e1rm(kg, reps);
  if (!m) return '<p class="muted">Gewicht und Wiederholungen eingeben</p>';
  const rows = [[100, 1], [95, 2], [93, 3], [90, 4], [87, 5], [85, 6], [80, 8], [75, 10], [70, 12], [65, 15]];
  return `<p style="margin-bottom:8px">Geschätztes 1RM: <b style="font-size:22px">${fmt(m, 1)} kg</b></p>
    <table class="ntable"><thead><tr><th>% vom 1RM</th><th>Gewicht</th><th>≈ Wdh.</th></tr></thead><tbody>${rows.map(([p, r]) => `<tr><td>${p} %</td><td>${fmt(Math.round(m * p / 100 / 1.25) * 1.25, 2)} kg</td><td>${r}</td></tr>`).join('')}</tbody></table>`;
}
function plateHtml(target, bar) {
  const PL = [[25, '#d03b3b', 110], [20, '#2a78d6', 104], [15, '#b38200', 96], [10, '#1baf7a', 86], [5, '#6a7082', 70], [2.5, '#394052', 58], [1.25, '#8c93a3', 48]];
  let rest = (target - bar) / 2;
  if (rest < 0) return '<p class="muted" style="margin-top:12px">Ziel ist leichter als die Stange.</p>';
  const used = [];
  PL.forEach(([w, c, h]) => { while (rest >= w - 1e-9) { used.push([w, c, h]); rest -= w; } });
  return `<div class="plates" aria-label="Scheiben pro Seite"><span class="bar-sleeve"></span>${used.map(([w, c, h]) => `<span class="plate" style="background:${c};height:${h}px;width:${w >= 10 ? 22 : 16}px">${fmt(w, 2)}</span>`).join('')}<span class="bar-sleeve" style="width:24px"></span></div>
    <p class="small" style="text-align:center">${used.length ? used.map(u => fmt(u[0], 2)).join(' + ') + ' kg je Seite' : 'Nur die Stange'}${rest > 0.01 ? ` · ${fmt(rest * 2, 2)} kg passen nicht genau` : ''}</p>`;
}
A.ormCalc = () => { $('#ormOut').innerHTML = ormTable(num($('#ormKg').value), Math.round(num($('#ormReps').value))); };
A.plateCalc = () => { $('#plOut').innerHTML = plateHtml(num($('#plTarget').value), num($('#plBar').value)); };
A.restStart = el => { RestTimer.start(+el.dataset.sec, 'Pause'); rerender(); };
A.notifAsk = () => { Notification.requestPermission().then(() => rerender()); };
Bus.on('timer', () => {
  const big = $('#restBig'), ringEl = $('#restRing');
  if (!big) return;
  const r = RestTimer.st ? RestTimer.remaining() : 0, tot = RestTimer.st ? RestTimer.st.total : 1, c = 2 * Math.PI * 44;
  big.textContent = fmtDur(Math.ceil(r));
  ringEl.setAttribute('stroke-dashoffset', (c * (1 - r / tot)).toFixed(1));
});
A.swToggle = () => { if (SW.start) { SW.acc += Date.now() - SW.start; SW.start = 0; } else SW.start = Date.now(); Local.set('sw', SW); rerender(); };
A.swLap = () => { SW.laps.push(swElapsed()); Local.set('sw', SW); rerender(); };
A.swReset = () => { SW.start = 0; SW.acc = 0; SW.laps = []; Local.set('sw', SW); rerender(); };
A.ivPreset = el => { const [w, r, n] = el.dataset.v.split(',').map(Number); $('#ivWork').value = w; $('#ivRest').value = r; $('#ivRounds').value = n; };
A.ivStart = () => {
  IV.work = Math.max(5, Math.round(num($('#ivWork').value))); IV.rest = Math.max(0, Math.round(num($('#ivRest').value))); IV.rounds = Math.max(1, Math.round(num($('#ivRounds').value)));
  IV.phase = 'prep'; IV.round = 0; IV.end = Date.now() + 5000;
  Beep.play(1, 660);
  clearInterval(IV.iv); IV.iv = setInterval(ivTick, 200);
  rerender();
};
A.ivStop = () => { clearInterval(IV.iv); IV.phase = null; rerender(); };
function ivTick() {
  if (Date.now() < IV.end) return;
  if (IV.phase === 'prep' || IV.phase === 'rest') {
    IV.round++; IV.phase = 'work'; IV.end = Date.now() + IV.work * 1000; Beep.play(2, 1175); Beep.buzz([300]);
  } else if (IV.phase === 'work') {
    if (IV.round >= IV.rounds) { clearInterval(IV.iv); IV.phase = null; Beep.play(4); Beep.buzz(); toast('Intervalle fertig'); rerender(); return; }
    if (IV.rest) { IV.phase = 'rest'; IV.end = Date.now() + IV.rest * 1000; Beep.play(1, 660); Beep.buzz([120]); }
    else { IV.round++; IV.end = Date.now() + IV.work * 1000; Beep.play(2, 1175); }
  }
  const ph = $('[data-tick="ivPhase"]'), rd = $('[data-tick="ivRound"]');
  if (ph) ph.textContent = IV.phase === 'work' ? 'Belastung' : 'Pause';
  if (rd) rd.textContent = `Runde ${IV.round} von ${IV.rounds}`;
}

/* ---------- Ansicht ---------- */
V.training = {
  render(r) {
    const a = Active.get();
    const t = [['', 'Übersicht'], ['aktiv', a ? 'Training läuft' : 'Training'], ['plaene', 'Pläne'], ['uebungen', 'Übungen'], ['verlauf', 'Verlauf'], ['noop', 'NOOP'], ['timer', 'Timer & Rechner']];
    if (r.sub === 'uebung') return renderExerciseDetail(r.args[0]);
    if (r.sub === 'einheit') return renderWorkoutDetail(r.args[0]);
    const body = { '': renderTrainingDash, aktiv: renderActive, plaene: renderPlans, uebungen: renderExercises, verlauf: renderHistory, noop: renderNoop, timer: renderTools }[r.sub] || renderTrainingDash;
    const head = r.sub === 'aktiv' && a ? '' : pageHead('Training', r.sub ? '' : `${Workouts.all().length} Trainings gespeichert`);
    return head + tabs('training', t, r.sub) + body();
  }
};

/* =====================================================================
   Ernährung: Tagebuch wie bei Kalorienzählern, Barcode, Ziele, Gewicht
   ===================================================================== */
let diaryDay = todayKey();
const MACROS = [['p', 'Eiweiß', 'protein', 'var(--s1)'], ['c', 'Kohlenhydrate', 'carbs', 'var(--s2)'], ['f', 'Fett', 'fat', 'var(--s3)']];

function dateNav(act) {
  return `<div class="date-nav"><button class="icon-btn bordered" data-act="${act}" data-d="-1" aria-label="Vorheriger Tag">${icon('left')}</button>
    <b>${fmtDate(diaryDay, { day: diaryDay !== todayKey() && diaryDay !== addDays(todayKey(), -1) })}</b>
    <button class="icon-btn bordered" data-act="${act}" data-d="1" aria-label="Nächster Tag"${diaryDay >= todayKey() ? ' disabled' : ''}>${icon('right')}</button></div>`;
}
A.dayShift = el => { const n = addDays(diaryDay, +el.dataset.d); if (n <= todayKey()) { diaryDay = n; rerender(); } };
A.dayToday = () => { diaryDay = todayKey(); rerender(); };

function calorieSummary(k, compact) {
  const s = settings(), d = Diary.day(k), t = Diary.totals(d);
  const ex = s.creditExercise ? exerciseKcal(k) : 0;
  const left = s.kcalGoal - t.kcal + ex;
  const over = left < 0;
  return { s, d, t, ex, left, over, html: `<div class="diary-sum">
    ${ring((t.kcal) / Math.max(1, s.kcalGoal + ex), fmt(Math.abs(left)), over ? 'zu viel' : 'übrig', { over, small: compact, aria: `${fmt(t.kcal)} von ${fmt(s.kcalGoal + ex)} kcal gegessen` })}
    <div class="grow stack">
      <div class="equation" aria-label="Kalorienrechnung">
        <div><b>${fmt(s.kcalGoal)}</b><span>Ziel</span></div><i>−</i>
        <div><b>${fmt(t.kcal)}</b><span>Essen</span></div><i>+</i>
        <div><b>${fmt(ex)}</b><span>Training</span></div><i>=</i>
        <div class="result"><b>${fmt(left)}</b><span>Übrig</span></div></div>
      ${MACROS.map(([n, label, goalKey, col]) => {
        const g = s[goalKey], v = t[n];
        return `<div class="macro"><div class="macro-head"><span class="row" style="gap:8px"><span class="dot" style="background:${col}"></span>${label}</span><span class="num"><b>${fmt(v)}</b> / ${fmt(g)} g</span></div>
          <div class="bar${v > g * 1.1 ? ' over' : ''}"><span style="width:${clamp(v / g * 100, 0, 100)}%;background:${col}"></span></div></div>`;
      }).join('')}
    </div></div>` };
}

function renderDiary() {
  const sumBox = calorieSummary(diaryDay);
  const d = sumBox.d, s = sumBox.s;
  const meals = MEALS.map(m => {
    const list = d.meals[m.id];
    const kcal = sum(list.map(e => e.kcal));
    return `<section class="card meal span-6"><div class="meal-head"><h2>${m.name}</h2><span class="meal-kcal">${fmt(kcal)} kcal</span></div>
      <div class="list">${list.map((e, i) => `<button class="li" data-act="entryEdit" data-m="${m.id}" data-i="${i}"><div class="li-main"><div class="li-title">${esc(e.name)}</div>
        <div class="li-sub">${e.brand ? esc(e.brand) + ', ' : ''}${e.quick ? 'Schnell eingetragen' : esc(entryAmount(e))} · E ${fmt(e.p)} · K ${fmt(e.c)} · F ${fmt(e.f)}</div></div><span class="li-end">${fmt(e.kcal)}</span></button>`).join('')}</div>
      <div class="meal-foot"><button class="btn btn-ghost btn-s meal-add" data-act="foodAdd" data-m="${m.id}">${icon('plus', 'ic-s')}Hinzufügen</button>
        <button class="btn btn-ghost btn-s" data-act="mealCopy" data-m="${m.id}" title="Von gestern übernehmen">${icon('copy', 'ic-s')}Gestern</button></div></section>`;
  }).join('');
  const glasses = Array.from({ length: Math.max(s.waterGoal, d.water) }, (_, i) => `<button class="glass${i < d.water ? ' full' : ''}" data-act="water" data-n="${i + 1}" aria-label="${i + 1} Gläser"></button>`).join('');
  return `<div class="row-between wrap" style="margin-bottom:16px">${dateNav('dayShift')}
      <div class="row">${diaryDay !== todayKey() ? `<button class="btn btn-s" data-act="dayToday">Heute</button>` : ''}
      <button class="btn btn-primary" data-act="foodAdd" data-m="${defaultMeal()}">${icon('plus')}Essen</button>
      <button class="btn" data-act="foodScanQuick" aria-label="Barcode scannen">${icon('barcode')}<span class="desktop-only">Scannen</span></button></div></div>
    <div class="grid">
      <div class="card span-8"><div class="card-head"><h2>${icon('flame')}Kalorien</h2><span class="muted small">${s.creditExercise ? 'inkl. Training' : 'ohne Training'}</span></div>${sumBox.html}</div>
      <div class="card span-4"><div class="card-head"><h2>${icon('drop')}Wasser</h2><span class="num"><b>${fmt(d.water * 0.25, 2)}</b> / ${fmt(s.waterGoal * 0.25, 2)} l</span></div>
        <div class="water">${glasses}</div>
        <div class="row" style="margin-top:12px"><button class="btn btn-s" data-act="water" data-n="${d.water + 1}">${icon('plus', 'ic-s')}Glas (250 ml)</button>${d.water ? `<button class="btn btn-s btn-ghost" data-act="water" data-n="${d.water - 1}">${icon('minus', 'ic-s')}</button>` : ''}</div></div>
      ${meals}
    </div>`;
}
function defaultMeal() { const h = new Date().getHours(); return diaryDay !== todayKey() ? 's' : h < 11 ? 'b' : h < 15 ? 'l' : h < 21 ? 'd' : 's'; }
function entryAmount(e) { return e.unit === 'portion' && e.servingLabel ? `${fmt(e.qty, 2)} × ${e.servingLabel} (${fmt(e.g)} g)` : `${fmt(e.g)} g`; }
A.water = el => { const d = Diary.day(diaryDay); d.water = Math.max(0, +el.dataset.n === d.water ? d.water - 1 : +el.dataset.n); Diary.saveDay(diaryDay, d); rerender(); };
A.mealCopy = el => {
  const m = el.dataset.m, y = Diary.day(addDays(diaryDay, -1)).meals[m];
  if (!y.length) return toast('Gestern war hier nichts eingetragen');
  const d = Diary.day(diaryDay);
  d.meals[m] = d.meals[m].concat(clone(y).map(e => Object.assign(e, { id: uid() })));
  Diary.saveDay(diaryDay, d); rerender();
  toast(`${y.length} ${y.length === 1 ? 'Eintrag' : 'Einträge'} übernommen`);
};

/* ---------- Hinzufügen-Dialog ---------- */
const add = { meal: 'b', tab: 'suche', q: '', online: [], loading: false, edit: null, food: null };
A.foodAdd = el => { add.meal = el.dataset.m || defaultMeal(); add.tab = 'suche'; add.q = ''; add.online = []; add.edit = null; openAdd(); };
A.foodScanQuick = () => { add.meal = defaultMeal(); add.tab = 'scan'; add.q = ''; add.online = []; add.edit = null; openAdd(); };
function openAdd() {
  const mealName = MEALS.find(m => m.id === add.meal).name;
  Sheet.open(`${sheetHead('Essen hinzufügen', `${mealName} · ${fmtDate(diaryDay)}`)}
    <div class="seg" role="tablist" style="align-self:flex-start">${[['suche', 'Suchen'], ['scan', 'Scannen'], ['schnell', 'Schnell'], ['neu', 'Neu anlegen']].map(([k, l]) => `<button class="${add.tab === k ? 'active' : ''}" data-act="addTab" data-t="${k}" role="tab" aria-selected="${add.tab === k}">${l}</button>`).join('')}</div>
    <div id="addBody" class="stack">${addBody()}</div>`, { onClose: () => Scanner.stop(), noFocus: add.tab !== 'suche' });
  if (add.tab === 'scan') startScan();
}
A.addTab = el => {
  Scanner.stop();
  add.tab = el.dataset.t;
  $$('.sheet .seg button').forEach(b => { b.classList.toggle('active', b === el); b.setAttribute('aria-selected', b === el); });
  $('#addBody').innerHTML = addBody();
  if (add.tab === 'scan') startScan();
  if (add.tab === 'suche') { const i = $('#foodQ'); if (i) i.focus(); }
};
function addBody() {
  if (add.tab === 'suche') return `<div class="row"><div class="search-box grow">${icon('search')}<input class="input" id="foodQ" placeholder="Lebensmittel, Marke oder Barcode" value="${esc(add.q)}" autocomplete="off" data-input="foodSearch" data-enter="foodOnline" autofocus></div>
      <button class="btn" data-act="foodOnline" title="In Open Food Facts suchen">Online</button></div>
    <div id="foodResults" class="pick-list list">${foodResults()}</div>`;
  if (add.tab === 'scan') return `<div class="scan-box"><video id="scanVideo" playsinline muted></video><div class="scan-frame"></div><div class="scan-line"></div></div>
    <p class="small muted" id="scanStatus">Kamera wird gestartet …</p>
    <div class="row"><input class="input" id="eanIn" inputmode="numeric" placeholder="Barcode-Nummer eintippen" data-enter="eanLookup"><button class="btn" data-act="eanLookup">Suchen</button></div>`;
  if (add.tab === 'schnell') return `<form class="stack" data-submit="quickSave"><p class="small muted">Für Restaurant-Essen oder wenn du nur die Kalorien kennst.</p>
    <label class="field">Bezeichnung<input class="input" name="name" placeholder="z. B. Pasta beim Italiener"></label>
    <div class="fields"><label class="field">Kalorien (kcal)<input class="input" name="kcal" inputmode="numeric" required></label>
    <label class="field">Eiweiß (g)<input class="input" name="p" inputmode="decimal"></label>
    <label class="field">Kohlenhydrate (g)<input class="input" name="c" inputmode="decimal"></label>
    <label class="field">Fett (g)<input class="input" name="f" inputmode="decimal"></label></div>
    <button class="btn btn-primary">Eintragen</button></form>`;
  return foodForm({});
}
function foodForm(f) {
  return `<form class="stack" data-submit="customSave"><p class="small muted">Nährwerte je 100 g, wie auf der Verpackung.</p>
    <div class="fields"><label class="field">Name<input class="input" name="name" required value="${esc(f.name || '')}"></label><label class="field">Marke<input class="input" name="brand" value="${esc(f.brand || '')}"></label></div>
    <div class="fields">${NUTRIENTS.map(([k, l, u]) => `<label class="field">${l} (${u})<input class="input" name="${k}" inputmode="decimal" ${k === 'kcal' ? 'required' : ''} value="${f[k] != null ? esc(String(f[k]).replace('.', ',')) : ''}"></label>`).join('')}</div>
    <div class="fields"><label class="field">Portion (g)<input class="input" name="sg" inputmode="decimal" value="${f.serving ? f.serving.g : ''}"></label><label class="field">Portionsname<input class="input" name="sl" placeholder="Riegel, Becher …" value="${esc(f.serving ? f.serving.label : '')}"></label></div>
    ${f.ean ? `<input type="hidden" name="ean" value="${esc(f.ean)}">` : `<label class="field">Barcode (optional)<input class="input" name="ean" inputmode="numeric"></label>`}
    <button class="btn btn-primary">Speichern und weiter</button></form>`;
}
function foodRow(f) {
  const sv = f.serving && f.serving.g ? `${f.serving.label || 'Portion'} ${fmt(f.serving.g)} g` : '100 g';
  const kc = f.serving && f.serving.g ? f.kcal * f.serving.g / 100 : f.kcal;
  return `<button class="li" data-act="foodPick" data-id="${esc(f.id)}"><div class="li-main"><div class="li-title">${esc(f.name)}</div>
    <div class="li-sub">${f.brand ? esc(f.brand) + ' · ' : ''}${sv}${f.src === 'off' ? ' · Open Food Facts' : f.src === 'custom' ? ' · eigenes' : ''}</div></div><span class="li-end">${fmt(kc)} kcal</span></button>`;
}
function foodResults() {
  const q = add.q.trim();
  if (!q) {
    const rec = Foods.recent().slice(0, 15), own = Foods.lib().custom;
    return (rec.length ? `<p class="stat-label" style="margin:8px 4px">Zuletzt verwendet</p>${rec.map(foodRow).join('')}` : '') +
      (own.length ? `<p class="stat-label" style="margin:16px 4px 8px">Meine Lebensmittel</p>${own.map(foodRow).join('')}` : '') +
      (!rec.length && !own.length ? `<p class="empty">Tippe einen Namen, z. B. Haferflocken. „Online“ sucht zusätzlich in Open Food Facts.</p>` : '');
  }
  const local = Foods.search(q);
  const online = add.online.filter(o => !local.some(l => l.id === o.id));
  return local.map(foodRow).join('') +
    (add.loading ? `<p class="empty">Suche bei Open Food Facts …</p>` : online.length ? `<p class="stat-label" style="margin:16px 4px 8px">Open Food Facts</p>${online.map(foodRow).join('')}` : '') +
    (!local.length && !online.length && !add.loading ? `<p class="empty">Nichts gefunden. Drück Enter für die Online-Suche oder leg es unter „Neu anlegen“ an.</p>` : '');
}
A.foodSearch = el => {
  add.q = el.value; add.online = [];
  if (/^\d{8,14}$/.test(add.q.trim())) { lookupEan(add.q.trim()); return; }
  $('#foodResults').innerHTML = foodResults();
};
A.foodOnline = async () => {
  const q = add.q.trim();
  if (q.length < 2) return toast('Mindestens 2 Zeichen eingeben');
  if (/^\d{8,14}$/.test(q)) return lookupEan(q);
  add.loading = true; $('#foodResults').innerHTML = foodResults();
  try {
    const url = `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${encodeURIComponent(q)}&search_simple=1&action=process&json=1&page_size=25&lc=de&cc=de&fields=code,product_name,product_name_de,brands,nutriments,serving_quantity,serving_size`;
    const res = await fetchTimeout(url, 12000);
    const j = await res.json();
    add.online = (j.products || []).map(offToFood).filter(f => f && f.kcal > 0 || f && f.name);
  } catch (e) {
    toast('Online-Suche gerade nicht erreichbar');
  }
  add.loading = false;
  if ($('#foodResults')) $('#foodResults').innerHTML = foodResults();
};
function fetchTimeout(url, ms, opts) {
  const ctl = window.AbortController ? new AbortController() : null;
  const t = setTimeout(() => ctl && ctl.abort(), ms);
  return fetch(url, Object.assign({}, opts || {}, ctl ? { signal: ctl.signal } : {})).finally(() => clearTimeout(t));
}
function offToFood(p) {
  if (!p || !p.code) return null;
  const n = p.nutriments || {};
  const g = k => { const v = n[k + '_100g']; return v == null || v === '' ? 0 : Math.round(+v * 10) / 10; };
  let kcal = n['energy-kcal_100g'];
  if (kcal == null && n.energy_100g != null) kcal = n.energy_100g / 4.184;
  return {
    id: 'off-' + p.code, ean: p.code, src: 'off',
    name: (p.product_name_de || p.product_name || 'Unbekanntes Produkt').trim(),
    brand: (p.brands || '').split(',')[0].trim(),
    kcal: Math.round(+kcal || 0), p: g('proteins'), c: g('carbohydrates'), f: g('fat'), fib: g('fiber'), sug: g('sugars'), salt: g('salt'),
    serving: +p.serving_quantity > 0 ? { g: +p.serving_quantity, label: (p.serving_size || 'Portion').replace(/\s*\(.*\)/, '') } : null
  };
}
async function lookupEan(code) {
  code = String(code).replace(/\D/g, '');
  if (code.length < 8) return toast('Barcode zu kurz');
  const lib = Foods.lib();
  const known = lib.custom.find(f => f.ean === code) || lib.cache['off-' + code];
  if (known) return showFoodDetail(known);
  setScanStatus('Suche Produkt ' + code + ' …');
  try {
    const res = await fetchTimeout(`https://world.openfoodfacts.org/api/v2/product/${code}.json?fields=code,product_name,product_name_de,brands,nutriments,serving_quantity,serving_size`, 12000);
    const j = await res.json();
    if (j.status === 1 && j.product) {
      const f = offToFood(j.product);
      Foods.cacheProduct(f);
      return showFoodDetail(f);
    }
    notFound(code);
  } catch (e) {
    toast('Produktsuche gerade nicht erreichbar');
    notFound(code);
  }
}
function notFound(code) {
  Scanner.stop();
  add.tab = 'neu';
  Sheet.update(`${sheetHead('Produkt nicht gefunden', 'Barcode ' + esc(code))}<p class="small">Trag die Werte einmal von der Verpackung ein, beim nächsten Scan kennt das Dashboard das Produkt.</p>${foodForm({ ean: code })}`);
}
A.eanLookup = () => { const v = $('#eanIn').value.trim(); if (v) lookupEan(v); };
function setScanStatus(t) { const el = $('#scanStatus'); if (el) el.textContent = t; }
function startScan() {
  const v = $('#scanVideo');
  if (!v) return;
  Scanner.start(v, code => { Beep.play(1, 1320); Beep.buzz([60]); lookupEan(code); }, setScanStatus);
}

A.quickSave = f => {
  const d = formData(f);
  const kcal = Math.round(num(d.kcal));
  if (!kcal) return toast('Bitte Kalorien eintragen');
  const day = Diary.day(diaryDay);
  day.meals[add.meal].push({ id: uid(), quick: true, name: d.name.trim() || 'Schnelleintrag', kcal, p: num(d.p), c: num(d.c), f: num(d.f), fib: 0, sug: 0, salt: 0, g: 0 });
  Diary.saveDay(diaryDay, day);
  Sheet.close(); rerender(); toast('Eingetragen');
};
A.customSave = f => {
  const d = formData(f);
  const food = { name: d.name.trim(), brand: d.brand.trim(), ean: (d.ean || '').replace(/\D/g, '') || undefined };
  NUTRIENTS.forEach(([k]) => { food[k] = num(d[k]); });
  food.kcal = Math.round(food.kcal);
  if (num(d.sg) > 0) food.serving = { g: num(d.sg), label: d.sl.trim() || 'Portion' };
  if (!food.name) return toast('Bitte einen Namen eingeben');
  showFoodDetail(Foods.addCustom(food));
};

/* ---------- Lebensmittel-Detail: Menge wählen ---------- */
A.foodPick = el => { const f = Foods.get(el.dataset.id) || add.online.find(o => o.id === el.dataset.id); if (f) { if (f.src === 'off') Foods.cacheProduct(f); showFoodDetail(f); } };
function showFoodDetail(food, entry) {
  Scanner.stop();
  add.food = food;
  const hasServing = food.serving && food.serving.g > 0;
  const unit = entry ? entry.unit || 'g' : hasServing ? 'portion' : 'g';
  const qty = entry ? (entry.unit === 'portion' ? entry.qty : entry.g) : hasServing ? 1 : 100;
  Sheet.update(`${sheetHead(esc(food.name), esc([food.brand, food.ean].filter(Boolean).join(' · ')))}
    <div class="food-detail stack">
      <div class="fields"><label class="field">Menge<input class="input" id="fdQty" inputmode="decimal" value="${fmt(qty, 2)}" data-input="fdCalc" autofocus></label>
      <label class="field">Einheit<select class="input" id="fdUnit" data-change="fdCalc"><option value="g"${unit === 'g' ? ' selected' : ''}>Gramm</option>${hasServing ? `<option value="portion"${unit === 'portion' ? ' selected' : ''}>${esc(food.serving.label)} (${fmt(food.serving.g)} g)</option>` : ''}</select></label>
      <label class="field">Mahlzeit<select class="input" id="fdMeal">${MEALS.map(m => `<option value="${m.id}"${m.id === (entry ? entry.meal : add.meal) ? ' selected' : ''}>${m.name}</option>`).join('')}</select></label></div>
      <div id="fdOut"></div>
      <p class="tiny muted">Je 100 g: ${fmt(food.kcal)} kcal · E ${fmt(food.p, 1)} g · K ${fmt(food.c, 1)} g · F ${fmt(food.f, 1)} g${food.src === 'off' ? ' · Daten: Open Food Facts (ODbL)' : food.src === 'base' ? ' · Richtwerte' : ''}</p>
    </div>
    <div class="sheet-actions">${entry ? `<button class="btn btn-danger" data-act="entryDelete">${icon('trash')}Löschen</button>` : `<button class="btn" data-act="addBack">Zurück</button>`}
      <button class="btn btn-primary" data-act="fdSave">${entry ? 'Speichern' : 'Hinzufügen'}</button></div>`);
  A.fdCalc();
}
function fdGrams() {
  const q = num($('#fdQty').value), u = $('#fdUnit').value;
  return u === 'portion' ? q * add.food.serving.g : q;
}
A.fdCalc = () => {
  const n = scaleFood(add.food, fdGrams());
  $('#fdOut').innerHTML = `<div class="nutri-grid"><div><b>${fmt(n.kcal)}</b><span>kcal</span></div><div><b>${fmt(n.p, 1)}</b><span>Eiweiß</span></div><div><b>${fmt(n.c, 1)}</b><span>Kohlenh.</span></div><div><b>${fmt(n.f, 1)}</b><span>Fett</span></div></div>`;
};
A.addBack = () => { add.food = null; openAdd(); };
A.fdSave = () => {
  const f = add.food, g = fdGrams();
  if (!(g > 0)) return toast('Bitte eine Menge eingeben');
  const meal = $('#fdMeal').value, unit = $('#fdUnit').value;
  const e = Object.assign({ id: add.edit ? add.edit.id : uid(), food: f.id, name: f.name, brand: f.brand || '', g: Math.round(g * 10) / 10, unit, qty: num($('#fdQty').value), servingLabel: f.serving ? f.serving.label : '' }, scaleFood(f, g));
  const day = Diary.day(diaryDay);
  if (add.edit) day.meals[add.edit.meal].splice(add.edit.i, 1);
  if (add.edit && add.edit.meal === meal) day.meals[meal].splice(add.edit.i, 0, e); else day.meals[meal].push(e);
  Diary.saveDay(diaryDay, day);
  Foods.touch(f.id);
  const wasEdit = !!add.edit;
  add.edit = null;
  Sheet.close(); rerender();
  toast(wasEdit ? 'Gespeichert' : `${f.name} hinzugefügt`);
};
A.entryEdit = el => {
  const m = el.dataset.m, i = +el.dataset.i;
  const e = Diary.day(diaryDay).meals[m][i];
  add.edit = { meal: m, i, id: e.id };
  if (e.quick) {
    Sheet.open(`${sheetHead(esc(e.name), 'Schnelleintrag')}<div class="nutri-grid"><div><b>${fmt(e.kcal)}</b><span>kcal</span></div><div><b>${fmt(e.p, 1)}</b><span>Eiweiß</span></div><div><b>${fmt(e.c, 1)}</b><span>Kohlenh.</span></div><div><b>${fmt(e.f, 1)}</b><span>Fett</span></div></div>
      <div class="sheet-actions"><button class="btn btn-danger" data-act="entryDelete">${icon('trash')}Löschen</button><button class="btn" data-act="closeSheet">Schließen</button></div>`);
    return;
  }
  const food = Foods.get(e.food) || { id: e.food || 'x-' + e.id, name: e.name, brand: e.brand, kcal: e.kcal / e.g * 100, p: e.p / e.g * 100, c: e.c / e.g * 100, f: e.f / e.g * 100, fib: (e.fib || 0) / e.g * 100, sug: (e.sug || 0) / e.g * 100, salt: (e.salt || 0) / e.g * 100 };
  Sheet.open('<div></div>');
  showFoodDetail(food, Object.assign({ meal: m }, e));
};
A.entryDelete = () => {
  const day = Diary.day(diaryDay);
  day.meals[add.edit.meal].splice(add.edit.i, 1);
  Diary.saveDay(diaryDay, day);
  add.edit = null; Sheet.close(); rerender(); toast('Gelöscht');
};

/* ---------- Nährwerte, Woche, Fortschritt, Ziele ---------- */
function renderNutrients() {
  const s = settings(), t = Diary.totals(Diary.day(diaryDay));
  const goals = { kcal: s.kcalGoal, p: s.protein, c: s.carbs, f: s.fat, fib: s.fiber, sug: s.sugar, salt: s.salt };
  const kc = { p: t.p * 4, c: t.c * 4, f: t.f * 9 }, tot = kc.p + kc.c + kc.f;
  const gk = { p: s.protein * 4, c: s.carbs * 4, f: s.fat * 9 }, gt = gk.p + gk.c + gk.f;
  const split = (o, total) => `<div class="split-bar" role="img" aria-label="Makro-Verteilung">${MACROS.map(([n, l, , col]) => `<span style="width:${total ? o[n] / total * 100 : 33.3}%;background:${col}" title="${l} ${fmt(total ? o[n] / total * 100 : 0)} %"></span>`).join('')}</div>`;
  return `<div class="row-between wrap" style="margin-bottom:16px">${dateNav('dayShift')}</div>
    <div class="grid"><div class="card span-7"><div class="card-head"><h2>${icon('list')}Nährwerte</h2></div>
      <table class="ntable"><thead><tr><th>Nährstoff</th><th>Gesamt</th><th>Ziel</th><th>Übrig</th></tr></thead><tbody>${NUTRIENTS.map(([k, l, u]) => {
        const left = goals[k] - t[k], limit = k === 'sug' || k === 'salt';
        return `<tr><td>${l}</td><td>${fmt(t[k], k === 'kcal' ? 0 : 1)} ${u}</td><td>${fmt(goals[k])} ${u}</td><td style="color:${left < 0 && (limit || k === 'kcal') ? 'var(--bad)' : 'inherit'}">${fmt(left, k === 'kcal' ? 0 : 1)}</td></tr>`;
      }).join('')}</tbody></table></div>
    <div class="card span-5"><div class="card-head"><h2>${icon('chart')}Makro-Verteilung</h2></div>
      <p class="stat-label" style="margin-bottom:8px">Gegessen</p>${split(kc, tot)}
      <p class="stat-label" style="margin:16px 0 8px">Ziel</p>${split(gk, gt)}
      <div class="list" style="margin-top:16px">${MACROS.map(([n, l, , col]) => `<div class="li"><span class="dot" style="background:${col}"></span><span class="li-main">${l}</span><span class="li-end">${fmt(tot ? kc[n] / tot * 100 : 0)} % <span class="muted small">/ Ziel ${fmt(kc && gt ? gk[n] / gt * 100 : 0)} %</span></span></div>`).join('')}</div></div></div>`;
}
let weekSpan = 7;
function renderWeek() {
  const s = settings();
  const days = [];
  for (let i = weekSpan - 1; i >= 0; i--) {
    const k = addDays(diaryDay, -i), t = Diary.totals(Diary.day(k)), d = parseKey(k);
    days.push({ k, t, label: weekSpan === 7 ? DAYS[d.getDay()] : `${d.getDate()}.`, logged: Diary.hasEntries(k) });
  }
  const logged = days.filter(d => d.logged);
  const avg = n => logged.length ? sum(logged.map(d => d.t[n])) / logged.length : 0;
  return `<div class="row-between wrap" style="margin-bottom:16px">${dateNav('dayShift')}<div class="seg">${[[7, '7 Tage'], [28, '4 Wochen']].map(([k, l]) => `<button class="${weekSpan === k ? 'active' : ''}" data-act="weekSpan" data-k="${k}">${l}</button>`).join('')}</div></div>
    <div class="kpis"><div class="card"><div class="stat-label">Ø Kalorien</div><div class="stat-value">${fmt(avg('kcal'))}<small>kcal</small></div><div class="stat-foot">Ziel ${fmt(s.kcalGoal)}</div></div>
      <div class="card"><div class="stat-label">Ø Eiweiß</div><div class="stat-value">${fmt(avg('p'))}<small>g</small></div><div class="stat-foot">Ziel ${fmt(s.protein)} g</div></div>
      <div class="card"><div class="stat-label">Tage eingetragen</div><div class="stat-value">${logged.length}<small>/ ${weekSpan}</small></div></div>
      <div class="card"><div class="stat-label">Bilanz</div><div class="stat-value">${fmt(sum(logged.map(d => d.t.kcal - s.kcalGoal)))}<small>kcal</small></div><div class="stat-foot">gegenüber dem Ziel</div></div></div>
    <div class="card"><div class="card-head"><h2>${icon('flame')}Kalorien pro Tag</h2></div>
      ${Charts.slot({ type: 'bars', height: 240, goal: s.kcalGoal, goalLabel: 'Ziel ' + fmt(s.kcalGoal), label: 'Kalorien pro Tag', showEmpty: true,
        bars: days.map(d => ({ label: d.label, value: Math.round(d.t.kcal), over: d.t.kcal > s.kcalGoal * 1.05, strong: d.k === diaryDay, tip: `<b>${fmt(d.t.kcal)} kcal</b><br>${esc(fmtDate(d.k, { day: true, plain: true }))}<br>E ${fmt(d.t.p)} · K ${fmt(d.t.c)} · F ${fmt(d.t.f)} g` })) })}</div>`;
}
A.weekSpan = el => { weekSpan = +el.dataset.k; rerender(); };

let weightRange = Local.get('weightRange', 90);
function renderProgress() {
  const s = settings(), all = Body.all();
  const t = todayKey();
  const pts = all.filter(x => !weightRange || x.d >= addDays(t, -weightRange)).map(x => ({ x: parseKey(x.d).getTime(), y: x.kg, tip: `<b>${fmt(x.kg, 1)} kg</b><br>${esc(fmtDate(x.d, { day: true, plain: true }))}` }));
  const cur = Body.latest();
  const ago = all.filter(x => x.d <= addDays(t, -30)).pop();
  const bmi = cur && s.height ? cur.kg / Math.pow(s.height / 100, 2) : 0;
  const todayW = all.find(x => x.d === t);
  return `<div class="grid"><div class="card span-4"><div class="card-head"><h2>${icon('scale')}Gewicht eintragen</h2></div>
      <form class="stack" data-submit="weightSave"><div class="fields"><label class="field">Datum<input class="input" type="date" name="d" value="${t}" max="${t}"></label>
      <label class="field">Gewicht (kg)<input class="input" name="kg" inputmode="decimal" placeholder="${cur ? fmt(cur.kg, 1) : '80,0'}" value="${todayW ? fmt(todayW.kg, 1) : ''}"></label></div>
      <button class="btn btn-primary">Speichern</button></form>
      <hr class="divider"><div class="stack"><div class="row-between"><span class="muted">Aktuell</span><b class="num">${cur ? fmt(cur.kg, 1) + ' kg' : '–'}</b></div>
      <div class="row-between"><span class="muted">vs. vor 30 Tagen</span><b class="num">${cur && ago ? (cur.kg - ago.kg > 0 ? '+' : '') + fmt(cur.kg - ago.kg, 1) + ' kg' : '–'}</b></div>
      <div class="row-between"><span class="muted">BMI</span><b class="num">${bmi ? fmt(bmi, 1) : '–'}</b></div></div></div>
    <div class="card span-8"><div class="card-head wrap"><h2>${icon('chart')}Gewichtsverlauf</h2><div class="seg">${[[30, '30 T'], [90, '3 M'], [365, '1 J'], [0, 'Alles']].map(([k, l]) => `<button class="${weightRange === k ? 'active' : ''}" data-act="weightRange" data-k="${k}">${l}</button>`).join('')}</div></div>
      ${Charts.slot({ type: 'line', points: pts, height: 260, label: 'Gewichtsverlauf', yFmt: v => fmt(v, 1), empty: 'Trag dein Gewicht ein, um den Verlauf zu sehen.' })}</div>
    <div class="card span-12"><div class="card-head"><h2>${icon('list')}Einträge</h2></div><div class="list">${all.slice().reverse().slice(0, 14).map(x => `<div class="li"><span class="li-main">${fmtDate(x.d, { day: true })}</span><span class="li-end">${fmt(x.kg, 1)} kg</span><button class="set-del" data-act="weightDel" data-d="${x.d}" aria-label="Eintrag löschen">${icon('x', 'ic-s')}</button></div>`).join('') || '<p class="empty">Noch keine Einträge</p>'}</div></div></div>`;
}
A.weightSave = f => { const d = formData(f); const kg = num(d.kg); if (!(kg > 20 && kg < 400)) return toast('Bitte ein gültiges Gewicht eingeben'); Body.set(d.d || todayKey(), Math.round(kg * 10) / 10); toast('Gewicht gespeichert'); rerender(); };
A.weightDel = el => { Body.set(el.dataset.d, 0); rerender(); };
A.weightRange = el => { weightRange = +el.dataset.k; Local.set('weightRange', weightRange); rerender(); };

function renderGoals() {
  const s = settings();
  const kg = Body.weightOr(80), age = new Date().getFullYear() - s.birthYear;
  const bmr = 10 * kg + 6.25 * s.height - 5 * age + (s.sex === 'm' ? 5 : -161);
  const tdee = bmr * s.activity;
  const adj = { abnehmen: -450, halten: 0, aufbauen: 300 }[s.goalType] || 0;
  const target = Math.round((tdee + adj) / 10) * 10;
  return `<div class="grid"><div class="card span-6"><div class="card-head"><h2>${icon('flame')}Tagesziele</h2></div>
    <form class="stack" data-submit="goalsSave"><div class="fields">
      <label class="field">Kalorien (kcal)<input class="input" name="kcalGoal" inputmode="numeric" value="${s.kcalGoal}"></label>
      <label class="field">Eiweiß (g)<input class="input" name="protein" inputmode="numeric" value="${s.protein}"></label>
      <label class="field">Kohlenhydrate (g)<input class="input" name="carbs" inputmode="numeric" value="${s.carbs}"></label>
      <label class="field">Fett (g)<input class="input" name="fat" inputmode="numeric" value="${s.fat}"></label>
      <label class="field">Ballaststoffe (g)<input class="input" name="fiber" inputmode="numeric" value="${s.fiber}"></label>
      <label class="field">Zucker max. (g)<input class="input" name="sugar" inputmode="numeric" value="${s.sugar}"></label>
      <label class="field">Salz max. (g)<input class="input" name="salt" inputmode="decimal" value="${s.salt}"></label>
      <label class="field">Wasser (Gläser)<input class="input" name="waterGoal" inputmode="numeric" value="${s.waterGoal}"></label></div>
      <p class="small muted">Makros ergeben ${fmt(s.protein * 4 + s.carbs * 4 + s.fat * 9)} kcal.</p>
      <label class="check"><input type="checkbox" name="creditExercise"${s.creditExercise ? ' checked' : ''}> Trainingskalorien gutschreiben (wie MyFitnessPal)</label>
      <button class="btn btn-primary">Ziele speichern</button></form></div>
    <div class="card span-6"><div class="card-head"><h2>${icon('bolt')}Bedarfsrechner</h2><span class="muted small">Mifflin-St Jeor</span></div>
      <form class="stack" data-submit="calcSave"><div class="fields">
        <label class="field">Größe (cm)<input class="input" name="height" inputmode="numeric" value="${s.height}" data-input="calcLive"></label>
        <label class="field">Geburtsjahr<input class="input" name="birthYear" inputmode="numeric" value="${s.birthYear}" data-input="calcLive"></label>
        <label class="field">Geschlecht<select class="input" name="sex" data-change="calcLive"><option value="m"${s.sex === 'm' ? ' selected' : ''}>männlich</option><option value="w"${s.sex === 'w' ? ' selected' : ''}>weiblich</option></select></label>
        <label class="field">Aktivität<select class="input" name="activity" data-change="calcLive">${[[1.2, 'kaum Bewegung'], [1.375, 'leicht aktiv'], [1.55, 'aktiv (3–5× Sport)'], [1.725, 'sehr aktiv'], [1.9, 'extrem aktiv']].map(([v, l]) => `<option value="${v}"${s.activity === v ? ' selected' : ''}>${l}</option>`).join('')}</select></label>
        <label class="field">Ziel<select class="input" name="goalType" data-change="calcLive">${[['abnehmen', 'Abnehmen'], ['halten', 'Gewicht halten'], ['aufbauen', 'Muskelaufbau']].map(([v, l]) => `<option value="${v}"${s.goalType === v ? ' selected' : ''}>${l}</option>`).join('')}</select></label></div>
      <div id="calcOut" class="stack">${calcOut(bmr, tdee, target, kg)}</div>
      <button class="btn btn-primary">Als Ziel übernehmen</button></form></div></div>`;
}
function calcOut(bmr, tdee, target, kg) {
  const p = Math.round(kg * 2), f = Math.round(kg * 0.9), c = Math.max(0, Math.round((target - p * 4 - f * 9) / 4));
  return `<div class="nutri-grid"><div><b>${fmt(bmr)}</b><span>Grundumsatz</span></div><div><b>${fmt(tdee)}</b><span>Gesamtumsatz</span></div><div><b>${fmt(target)}</b><span>Zielkalorien</span></div><div><b>${fmt(kg, 1)}</b><span>kg Gewicht</span></div></div>
    <p class="small muted">Vorschlag: ${p} g Eiweiß (2 g/kg), ${f} g Fett, ${c} g Kohlenhydrate. Gewicht kommt aus „Fortschritt“.</p>`;
}
A.calcLive = el => {
  const d = formData(el.closest('form'));
  const kg = Body.weightOr(80), age = new Date().getFullYear() - num(d.birthYear);
  const bmr = 10 * kg + 6.25 * num(d.height) - 5 * age + (d.sex === 'm' ? 5 : -161), tdee = bmr * num(d.activity);
  const target = Math.round((tdee + ({ abnehmen: -450, halten: 0, aufbauen: 300 }[d.goalType] || 0)) / 10) * 10;
  $('#calcOut').innerHTML = calcOut(bmr, tdee, target, kg);
};
A.goalsSave = f => {
  const d = formData(f), patch = { creditExercise: d.creditExercise };
  ['kcalGoal', 'protein', 'carbs', 'fat', 'fiber', 'sugar', 'salt', 'waterGoal'].forEach(k => { patch[k] = num(d[k]) || DEFAULT_SETTINGS[k]; });
  saveSettings(patch); toast('Ziele gespeichert'); rerender();
};
A.calcSave = f => {
  const d = formData(f);
  const kg = Body.weightOr(80), age = new Date().getFullYear() - num(d.birthYear);
  const bmr = 10 * kg + 6.25 * num(d.height) - 5 * age + (d.sex === 'm' ? 5 : -161), tdee = bmr * num(d.activity);
  const target = Math.round((tdee + ({ abnehmen: -450, halten: 0, aufbauen: 300 }[d.goalType] || 0)) / 10) * 10;
  const p = Math.round(kg * 2), fat = Math.round(kg * 0.9);
  saveSettings({ height: num(d.height), birthYear: num(d.birthYear), sex: d.sex, activity: num(d.activity), goalType: d.goalType, kcalGoal: target, protein: p, fat, carbs: Math.max(0, Math.round((target - p * 4 - fat * 9) / 4)) });
  toast('Neue Ziele übernommen'); rerender();
};

V.essen = {
  render(r) {
    const body = { '': renderDiary, naehrwerte: renderNutrients, woche: renderWeek, fortschritt: renderProgress, ziele: renderGoals }[r.sub] || renderDiary;
    return pageHead('Ernährung', '') + tabs('essen', [['', 'Tagebuch'], ['naehrwerte', 'Nährwerte'], ['woche', 'Woche'], ['fortschritt', 'Gewicht'], ['ziele', 'Ziele']], r.sub) + body();
  }
};

/* =====================================================================
   Barcode-Scanner: nutzt BarcodeDetector (Chrome, Android), sonst einen
   eigenen EAN-13/EAN-8-Decoder auf Kamerabildern (z. B. iPhone-Safari).
   ===================================================================== */
const EAN = (() => {
  const L = ['3211', '2221', '2122', '1411', '1132', '1231', '1114', '1312', '1213', '3112'].map(s => s.split('').map(Number));
  const G = L.map(p => p.slice().reverse());
  const PARITY = ['LLLLLL', 'LLGLGG', 'LLGGLG', 'LLGGGL', 'LGLLGG', 'LGGLLG', 'LGGGLG', 'LGLGGL', 'LGLGLG', 'LGGLGL'];

  // Vergleich über Kanten-Abstände (Strich+Lücke), die sind robust gegen
  // verlaufene Druckfarbe und Unschärfe; Einzelbreiten nur als Feinabstimmung
  function matchDigit(r, tables) {
    const s = r[0] + r[1] + r[2] + r[3];
    const n = r.map(x => x * 7 / s);
    const e1 = n[0] + n[1], e2 = n[1] + n[2], e3 = n[2] + n[3];
    let best = null;
    tables.forEach(([name, tab]) => tab.forEach((p, d) => {
      const raw = Math.abs(n[0] - p[0]) + Math.abs(n[1] - p[1]) + Math.abs(n[2] - p[2]) + Math.abs(n[3] - p[3]);
      const err = Math.abs(e1 - p[0] - p[1]) + Math.abs(e2 - p[1] - p[2]) + Math.abs(e3 - p[2] - p[3]) + 0.25 * raw;
      if (!best || err < best.err) best = { d, par: name, err };
    }));
    return best && best.err < 2.2 ? best : null;
  }
  const near = (v, unit, lo, hi) => v >= unit * lo && v <= unit * hi;

  function checkEan13(digits) {
    let s = 0;
    for (let i = 0; i < 12; i++) s += digits[i] * (i % 2 ? 3 : 1);
    return (10 - s % 10) % 10 === digits[12];
  }
  function checkEan8(digits) {
    let s = 0;
    for (let i = 0; i < 7; i++) s += digits[i] * (i % 2 ? 1 : 3);
    return (10 - s % 10) % 10 === digits[7];
  }

  // runs: Breiten abwechselnd hell/dunkel, dark[i] = true, wenn Lauf i dunkel ist
  function tryAt(runs, i, len, modules) {
    if (i + len > runs.length) return null;
    let tot = 0;
    for (let k = i; k < i + len; k++) tot += runs[k];
    const unit = tot / modules;
    if (unit < 0.8) return null;
    // Ruhezone links und rechts
    if (i > 0 && runs[i - 1] < unit * 4) return null;
    if (i + len < runs.length && runs[i + len] < unit * 4) return null;
    for (let k = 0; k < 3; k++) if (!near(runs[i + k], unit, 0.4, 1.9) || !near(runs[i + len - 1 - k], unit, 0.4, 1.9)) return null;
    return unit;
  }
  function decode13(runs, i) {
    const unit = tryAt(runs, i, 59, 95);
    if (!unit) return null;
    for (let k = 27; k < 32; k++) if (!near(runs[i + k], unit, 0.4, 1.9)) return null;
    const left = [], par = [];
    for (let d = 0; d < 6; d++) {
      const r = runs.slice(i + 3 + d * 4, i + 7 + d * 4);
      const m = matchDigit(r, [['L', L], ['G', G]]);
      if (!m) return null;
      left.push(m.d); par.push(m.par);
    }
    const right = [];
    for (let d = 0; d < 6; d++) {
      const r = runs.slice(i + 32 + d * 4, i + 36 + d * 4);
      const m = matchDigit(r, [['R', L]]);
      if (!m) return null;
      right.push(m.d);
    }
    const first = PARITY.indexOf(par.join(''));
    if (first < 0) return null;
    const digits = [first].concat(left, right);
    return checkEan13(digits) ? digits.join('') : null;
  }
  function decode8(runs, i) {
    const unit = tryAt(runs, i, 43, 67);
    if (!unit) return null;
    for (let k = 19; k < 24; k++) if (!near(runs[i + k], unit, 0.4, 1.9)) return null;
    const digits = [];
    for (let d = 0; d < 4; d++) { const m = matchDigit(runs.slice(i + 3 + d * 4, i + 7 + d * 4), [['L', L]]); if (!m) return null; digits.push(m.d); }
    for (let d = 0; d < 4; d++) { const m = matchDigit(runs.slice(i + 24 + d * 4, i + 28 + d * 4), [['R', L]]); if (!m) return null; digits.push(m.d); }
    return checkEan8(digits) ? digits.join('') : null;
  }
  function decodeRuns(runs, firstDark) {
    for (let i = firstDark ? 0 : 1; i < runs.length; i += 2) {
      const c = decode13(runs, i) || decode8(runs, i);
      if (c) return c;
    }
    return null;
  }
  function rowRuns(gray, w, y, h, small) {
    // Zeile mit Nachbarzeilen mitteln und glätten
    const row = new Float32Array(w);
    for (let x = 0; x < w; x++) {
      let v = 0, n = 0;
      for (let dy = -1; dy <= 1; dy++) { const yy = y + dy; if (yy >= 0 && yy < h) { v += gray[yy * w + x]; n++; } }
      row[x] = v / n;
    }
    let mn = 255, mx = 0;
    for (let x = 0; x < w; x++) { if (row[x] < mn) mn = row[x]; if (row[x] > mx) mx = row[x]; }
    if (mx - mn < 35) return null;
    // adaptive Schwelle: Mittel aus globaler Mitte und gleitendem Durchschnitt;
    // im zweiten Durchgang ein kleines Fenster, das auch schmale, unscharfe Lücken findet
    const win = small ? 3 : Math.max(8, Math.round(w / 12));
    const hyst = small ? (mx - mn) * 0.06 : 0;
    const pre = new Float32Array(w + 1);
    for (let x = 0; x < w; x++) pre[x + 1] = pre[x] + row[x];
    const mid = (mn + mx) / 2;
    const thr = new Float32Array(w);
    for (let x = 0; x < w; x++) {
      const a = Math.max(0, x - win), b = Math.min(w, x + win);
      thr[x] = small ? (pre[b] - pre[a]) / (b - a) : (mid + (pre[b] - pre[a]) / (b - a)) / 2;
    }
    // Kanten auf Bruchteile eines Pixels genau (lineare Interpolation)
    const runs = [];
    let dark = row[0] < thr[0];
    const firstDark = dark;
    let lastEdge = 0;
    for (let x = 1; x < w; x++) {
      const isDark = dark ? row[x] < thr[x] + hyst : row[x] < thr[x] - hyst;
      if (isDark === dark) continue;
      const d0 = row[x - 1] - thr[x - 1], d1 = row[x] - thr[x];
      const edge = x - 1 + (d0 === d1 ? 0.5 : d0 / (d0 - d1));
      runs.push(edge - lastEdge);
      lastEdge = edge; dark = isDark;
    }
    runs.push(w - lastEdge);
    return { runs, firstDark };
  }
  function decodeGray(gray, w, h) {
    const rows = [0.5, 0.42, 0.58, 0.35, 0.65, 0.46, 0.54, 0.3, 0.7];
    for (const pass of [false, true]) for (const f of rows) {
      const rr = rowRuns(gray, w, Math.round(h * f), h, pass);
      if (!rr) continue;
      let c = decodeRuns(rr.runs, rr.firstDark);
      if (c) return c;
      // rückwärts (Barcode steht auf dem Kopf)
      const rev = rr.runs.slice().reverse();
      const lastDark = rr.runs.length % 2 === 1 ? rr.firstDark : !rr.firstDark;
      c = decodeRuns(rev, lastDark);
      if (c) return c;
    }
    return null;
  }
  function decodeImageData(img) {
    const { data, width: w, height: h } = img;
    const gray = new Uint8ClampedArray(w * h);
    for (let i = 0, j = 0; i < data.length; i += 4, j++) gray[j] = (data[i] * 77 + data[i + 1] * 150 + data[i + 2] * 29) >> 8;
    return decodeGray(gray, w, h);
  }
  return { decodeImageData, decodeGray };
})();

const Scanner = {
  stream: null, video: null, timer: null, detector: null, canvas: null, last: null, lastAt: 0, busy: false,
  async start(video, onCode, onStatus) {
    this.stop();
    this.video = video;
    this.onCode = onCode;
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      onStatus(window.isSecureContext ? 'Dieser Browser erlaubt keinen Kamerazugriff. Tipp die Nummer unten ein.' : 'Die Kamera geht nur über https oder localhost. Tipp die Nummer unten ein.');
      return;
    }
    try {
      this.stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: { ideal: 'environment' }, width: { ideal: 1280 }, height: { ideal: 720 } }, audio: false });
    } catch (e) {
      onStatus(e && e.name === 'NotAllowedError' ? 'Kamerazugriff wurde abgelehnt. Tipp die Nummer unten ein.' : 'Kamera nicht verfügbar. Tipp die Nummer unten ein.');
      return;
    }
    if (this.video !== video) return this.stop();
    video.srcObject = this.stream;
    try { await video.play(); } catch (e) { /* iOS startet nach Nutzeraktion */ }
    if ('BarcodeDetector' in window) {
      try {
        const sup = await window.BarcodeDetector.getSupportedFormats();
        const fm = ['ean_13', 'ean_8', 'upc_a', 'upc_e'].filter(f => sup.includes(f));
        if (fm.length) this.detector = new window.BarcodeDetector({ formats: fm });
      } catch (e) { this.detector = null; }
    }
    onStatus('Barcode waagrecht in den Rahmen halten.');
    this.canvas = document.createElement('canvas');
    this.timer = setInterval(() => this.scan(), 140);
  },
  async scan() {
    const v = this.video;
    if (this.busy || !v || v.readyState < 2 || !v.videoWidth) return;
    this.busy = true;
    try {
      let code = null;
      if (this.detector) {
        const res = await this.detector.detect(v);
        if (res && res[0]) code = res[0].rawValue;
        if (code) return this.found(code, true);
      }
      // eigener Decoder auf dem mittleren Bildstreifen
      const w = Math.min(960, v.videoWidth), h = Math.round(v.videoHeight * w / v.videoWidth);
      const c = this.canvas;
      c.width = w; c.height = Math.round(h * 0.5);
      const ctx = c.getContext('2d', { willReadFrequently: true });
      ctx.drawImage(v, 0, v.videoHeight * 0.25, v.videoWidth, v.videoHeight * 0.5, 0, 0, w, c.height);
      code = EAN.decodeImageData(ctx.getImageData(0, 0, w, c.height));
      if (code) this.found(code, false);
    } catch (e) { /* nächstes Bild */ } finally { this.busy = false; }
  },
  found(code, sure) {
    // Eigener Decoder: Code muss zweimal kurz hintereinander gleich gelesen werden
    if (!sure && !(this.last === code && Date.now() - this.lastAt < 2000)) { this.last = code; this.lastAt = Date.now(); return; }
    const cb = this.onCode;
    this.stop();
    if (cb) cb(code);
  },
  stop() {
    clearInterval(this.timer); this.timer = null;
    if (this.stream) this.stream.getTracks().forEach(t => t.stop());
    this.stream = null; this.detector = null; this.last = null;
    if (this.video) { try { this.video.srcObject = null; } catch (e) { /* ok */ } }
    this.video = null;
  }
};

/* =====================================================================
   Laufen: Übersicht, GPS-Live-Lauf, Eintragen, Verlauf, Rechner
   ===================================================================== */
const RUN_TYPES = ['Locker', 'Tempo', 'Intervalle', 'Lang', 'Wettkampf', 'Laufband'];
const RACES = [[5, '5 km'], [10, '10 km'], [21.0975, 'Halbmarathon'], [42.195, 'Marathon']];
const riegel = (sec, km, target) => sec * Math.pow(target / km, 1.06);

function runsInRange(a, b) { return Runs.all().filter(r => { const k = dkey(r.start); return k >= a && k <= b; }); }
function routeSvg(route, cls, w, h, kmMarks) {
  if (!route || route.length < 2) return '';
  w = w || 300; h = h || 160;
  const lat0 = route[0][0] * Math.PI / 180;
  const pts = route.map(p => [p[1] * Math.cos(lat0), -p[0]]);
  const xs = pts.map(p => p[0]), ys = pts.map(p => p[1]);
  const minX = Math.min(...xs), maxX = Math.max(...xs), minY = Math.min(...ys), maxY = Math.max(...ys);
  const pad = 10, sc = Math.min((w - 2 * pad) / (maxX - minX || 1e-9), (h - 2 * pad) / (maxY - minY || 1e-9));
  const ox = (w - (maxX - minX) * sc) / 2, oy = (h - (maxY - minY) * sc) / 2;
  const P = p => [(p[0] - minX) * sc + ox, (p[1] - minY) * sc + oy];
  const d = pts.map((p, i) => { const q = P(p); return (i ? 'L' : 'M') + q[0].toFixed(1) + ' ' + q[1].toFixed(1); }).join(' ');
  const s = P(pts[0]), e = P(pts[pts.length - 1]);
  let marks = '';
  if (kmMarks) {
    let dist = 0, next = 1000;
    for (let i = 1; i < route.length; i++) {
      dist += haversine(route[i - 1], route[i]);
      if (dist >= next) { const q = P(pts[i]); marks += `<circle class="km" cx="${q[0].toFixed(1)}" cy="${q[1].toFixed(1)}" r="3.5"/>`; next += 1000; }
    }
  }
  return `<svg class="${cls}" viewBox="0 0 ${w} ${h}" preserveAspectRatio="xMidYMid meet" aria-hidden="true"><path d="${d}"/>${marks}${cls === 'route' ? `<circle cx="${s[0]}" cy="${s[1]}" r="6"/><circle cx="${e[0]}" cy="${e[1]}" r="6" style="fill:var(--ink)"/>` : ''}</svg>`;
}
function haversine(a, b) {
  const R = 6371000, toR = x => x * Math.PI / 180;
  const dLat = toR(b[0] - a[0]), dLon = toR(b[1] - a[1]);
  const h = Math.sin(dLat / 2) ** 2 + Math.cos(toR(a[0])) * Math.cos(toR(b[0])) * Math.sin(dLon / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(h));
}

/* ---------- Übersicht ---------- */
function renderRunDash() {
  const s = settings(), t = todayKey(), ws = weekStart(t);
  const week = runsInRange(ws, t), month = runsInRange(t.slice(0, 8) + '01', t), year = runsInRange(t.slice(0, 5) + '01-01', t);
  const r30 = runsInRange(addDays(t, -29), t);
  const km = a => sum(a.map(r => r.km));
  const avgPace = km(r30) ? sum(r30.map(r => r.sec)) / km(r30) : 0;
  const yearKm = km(year), dayOfYear = daysBetween(t.slice(0, 5) + '01-01', t) + 1;
  const onTrack = s.runYearGoal * dayOfYear / 365;
  const weeks = [];
  for (let i = 11; i >= 0; i--) {
    const a = addDays(ws, -7 * i), b = addDays(a, 6), rs = runsInRange(a, b), d = parseKey(a);
    weeks.push({ label: `${d.getDate()}.${d.getMonth() + 1}.`, value: Math.round(km(rs) * 10) / 10, strong: i === 0, tip: `<b>${fmt(km(rs), 1)} km</b> · ${rs.length} Läufe<br>Woche ab ${esc(fmtDate(a, { plain: true }))}` });
  }
  const recent = Runs.all().filter(r => dkey(r.start) >= addDays(t, -180) && r.type !== 'Laufband');
  const pacePts = recent.slice().reverse().filter(r => r.km >= 2).map(r => ({ x: r.start, y: r.sec / r.km, tip: `<b>${fmtPace(r.sec / r.km)} /km</b><br>${fmt(r.km, 2)} km · ${esc(r.type || '')}<br>${esc(fmtDate(r.start, { plain: true, day: true }))}` }));
  const preds = RACES.map(([d, label]) => {
    let best = null;
    recent.filter(r => r.km >= Math.min(3, d)).forEach(r => { const p = riegel(r.sec, r.km, d); if (!best || p < best.p) best = { p, r }; });
    return { label, d, best };
  });
  const longest = Runs.all().reduce((m, r) => !m || r.km > m.km ? r : m, null);
  return `<div class="quick">
      <a class="quick-btn" href="#/laufen/live"><span class="qi">${icon('pin')}</span><span>${LiveRun.st.status !== 'idle' ? 'Lauf läuft' : 'Lauf starten'}<small>mit GPS</small></span></a>
      <a class="quick-btn" href="#/laufen/eintragen"><span class="qi">${icon('plus')}</span><span>Lauf eintragen<small>von der Uhr</small></span></a>
      <label class="quick-btn" style="cursor:pointer"><span class="qi">${icon('pin')}</span><span>Route laden<small>GPX, z. B. aus NOOP</small></span><input type="file" accept=".gpx,application/gpx+xml,application/xml,text/xml" data-change="gpxLoad" hidden></label>
      <a class="quick-btn" href="#/laufen/verlauf"><span class="qi">${icon('list')}</span><span>Alle Läufe<small>${Runs.all().length} gespeichert</small></span></a></div>
    <div class="kpis">
      <div class="card"><div class="stat-label">Diese Woche</div><div class="stat-value">${fmt(km(week), 1)}<small>km</small></div><div class="stat-foot">${week.length} ${week.length === 1 ? 'Lauf' : 'Läufe'}</div></div>
      <div class="card"><div class="stat-label">${MONTHS_LONG[new Date().getMonth()]}</div><div class="stat-value">${fmt(km(month), 1)}<small>km</small></div><div class="stat-foot">${fmtMin(sum(month.map(r => r.sec)))} unterwegs</div></div>
      <div class="card"><div class="stat-label">Jahr ${new Date().getFullYear()}</div><div class="stat-value">${fmt(yearKm)}<small>/ ${fmt(s.runYearGoal)} km</small></div>
        <div class="stat-foot">${yearKm >= onTrack ? `<span class="delta-up">${fmt(yearKm - onTrack)} km voraus</span>` : `${fmt(onTrack - yearKm)} km hinter Plan`}</div></div>
      <div class="card"><div class="stat-label">Ø Pace · 30 Tage</div><div class="stat-value">${fmtPace(avgPace)}<small>/km</small></div><div class="stat-foot">${fmt(km(r30), 1)} km in ${r30.length} Läufen</div></div></div>
    <div class="grid">
      <div class="card span-7"><div class="card-head"><h2>${icon('chart')}Wochenkilometer</h2><span class="muted small">12 Wochen</span></div>
        ${Charts.slot({ type: 'bars', bars: weeks, height: 220, yFmt: v => fmt(v), label: 'Wochenkilometer', empty: 'Noch keine Läufe' })}</div>
      <div class="card span-5"><div class="card-head"><h2>${icon('trophy')}Prognose</h2><span class="muted small">aus deinen Läufen</span></div>
        <div class="list">${preds.map(p => `<div class="li"><div class="li-main"><div class="li-title">${p.label}</div><div class="li-sub">${p.best ? `aus ${fmt(p.best.r.km, 1)} km am ${fmtDate(p.best.r.start, { plain: true })}` : 'noch kein passender Lauf'}</div></div>
          <div class="li-end">${p.best ? fmtDur(p.best.p) : '–'}<div class="li-sub">${p.best ? fmtPace(p.best.p / p.d) + ' /km' : ''}</div></div></div>`).join('')}</div>
        <p class="tiny muted" style="margin-top:8px">Riegel-Formel, beste Hochrechnung der letzten 6 Monate. ${longest ? `Längster Lauf: ${fmt(longest.km, 1)} km.` : ''}</p></div>
      <div class="card span-7"><div class="card-head"><h2>${icon('run')}Pace-Verlauf</h2><span class="muted small">oben = schneller</span></div>
        ${Charts.slot({ type: 'line', points: pacePts, invert: true, height: 220, yFmt: v => fmtPace(v), label: 'Pace-Verlauf', empty: 'Läufe ab 2 km erscheinen hier' })}</div>
      <div class="card span-5"><div class="card-head"><h2>${icon('list')}Letzte Läufe</h2><a class="btn btn-ghost btn-s" href="#/laufen/verlauf">Alle</a></div>
        <div class="list">${Runs.all().slice(0, 5).map(runRow).join('') || '<p class="empty">Noch keine Läufe</p>'}</div></div>
    </div>`;
}
function runRow(r) {
  return `<a class="li" href="#/laufen/lauf/${r.id}">${r.route && r.route.length > 1 ? routeSvg(r.route, 'mini-route', 44, 44) : `<span class="mini-route" style="display:grid;place-items:center">${icon('run', 'ic-s')}</span>`}
    <div class="li-main"><div class="li-title">${fmt(r.km, 2)} km · ${esc(r.type || 'Lauf')}</div><div class="li-sub">${fmtDate(r.start, { day: true })} · ${fmtDur(r.sec)} · ${fmtPace(r.sec / r.km)} /km</div></div></a>`;
}

/* ---------- Eintragen / Bearbeiten ---------- */
function renderRunForm(id) {
  const r = id ? Runs.get(id) : null;
  const d = r ? new Date(r.start) : new Date();
  const local = `${dkey(d)}T${pad2(d.getHours())}:${pad2(d.getMinutes())}`;
  return `<div class="card" style="max-width:640px"><div class="card-head"><h2>${icon(r ? 'edit' : 'plus')}${r ? 'Lauf bearbeiten' : 'Lauf eintragen'}</h2></div>
    <form class="stack" data-submit="runSave"><input type="hidden" name="id" value="${r ? r.id : ''}">
    <div class="fields"><label class="field">Start<input class="input" type="datetime-local" name="start" value="${local}"></label>
      <label class="field">Art<select class="input" name="type">${RUN_TYPES.map(t => `<option${r && r.type === t ? ' selected' : ''}>${t}</option>`).join('')}</select></label></div>
    <div class="fields"><label class="field">Distanz (km)<input class="input" name="km" inputmode="decimal" required value="${r ? fmt(r.km, 2) : ''}" placeholder="z. B. 8,4" data-input="runFormPace"></label>
      <label class="field">Zeit (h:mm:ss)<input class="input" name="dur" required value="${r ? fmtDur(r.sec, true) : ''}" placeholder="z. B. 0:45:30" data-input="runFormPace"></label>
      <label class="field">Ø Puls<input class="input" name="hr" inputmode="numeric" value="${r && r.hr ? r.hr : ''}" placeholder="optional"></label></div>
    <p class="small muted" id="runFormPace">${r ? 'Pace ' + fmtPace(r.sec / r.km) + ' /km' : 'Pace wird automatisch berechnet.'}</p>
    <div class="field"><span>Gefühl</span><div class="chips">${['Zäh', 'Okay', 'Gut', 'Stark', 'Fliegend'].map((l, i) => `<label class="chip chip-btn"><input type="radio" name="feel" value="${i + 1}"${r && r.feel === i + 1 || !r && i === 2 ? ' checked' : ''} style="accent-color:var(--accent-mark)"> ${l}</label>`).join('')}</div></div>
    <label class="field">Notiz<textarea class="input" name="note" placeholder="Strecke, Wetter, Schuhe …">${esc(r ? r.note || '' : '')}</textarea></label>
    <div class="sheet-actions">${r ? `<button type="button" class="btn btn-danger" data-act="runDelete" data-id="${r.id}">Löschen</button>` : ''}<a class="btn" href="#/laufen">Abbrechen</a><button class="btn btn-primary">Speichern</button></div></form></div>`;
}
A.runFormPace = el => {
  const f = el.closest('form'), km = num(f.km.value), sec = parseDur(f.dur.value);
  $('#runFormPace').textContent = km > 0 && sec > 0 ? `Pace ${fmtPace(sec / km)} /km · ${fmt(km / (sec / 3600), 1)} km/h` : 'Pace wird automatisch berechnet.';
};
A.runSave = f => {
  const d = formData(f);
  const km = num(d.km), sec = parseDur(d.dur);
  if (!(km > 0) || !(sec > 0)) return toast('Bitte Distanz und Zeit eintragen');
  const old = d.id ? Runs.get(d.id) : null;
  const r = Object.assign({}, old || {}, { id: d.id || uid(), start: d.start ? new Date(d.start).getTime() : Date.now(), km: Math.round(km * 100) / 100, sec, type: d.type, hr: Math.round(num(d.hr)) || null, feel: +d.feel || 3, note: d.note.trim() });
  Runs.save(r);
  toast('Lauf gespeichert');
  go('laufen/lauf/' + r.id);
};
A.runDelete = el => confirmSheet('Lauf löschen?', 'Der Lauf wird endgültig entfernt.', 'Löschen', () => { Runs.remove(el.dataset.id); go('laufen/verlauf'); }, true);

function renderRunDetail(id) {
  const r = Runs.get(id);
  if (!r) return `<div class="card">${emptyState('run', 'Lauf nicht gefunden')}</div>`;
  const splits = r.splits || [], hasRoute = r.route && r.route.length > 1;
  const gpxBtn = `<label class="btn" style="cursor:pointer">${icon('pin')}${hasRoute ? 'Route ersetzen' : 'Route laden'}<input type="file" accept=".gpx,application/gpx+xml,application/xml,text/xml" data-change="gpxLoad" data-id="${r.id}" hidden></label>`;
  const sub = `${fmtDate(r.start, { day: true, plain: true })} · ${fmtTime(r.start)} Uhr${r.src === 'noop' ? ' · aus NOOP' : ''}`;
  return `<a class="btn btn-ghost btn-s" href="#/laufen/verlauf" style="margin-bottom:12px">${icon('left', 'ic-s')}Alle Läufe</a>
    ${pageHead(`${fmt(r.km, 2)} km ${esc(r.type || '')}`, sub, `${gpxBtn}<a class="btn" href="#/laufen/eintragen/${r.id}">${icon('edit')}Bearbeiten</a>`)}
    <div class="kpis"><div class="card"><div class="stat-label">Zeit</div><div class="stat-value">${fmtDur(r.sec)}</div></div>
      <div class="card"><div class="stat-label">Pace</div><div class="stat-value">${fmtPace(r.sec / r.km)}<small>/km</small></div></div>
      <div class="card"><div class="stat-label">${r.elev ? 'Höhenmeter' : 'Tempo'}</div><div class="stat-value">${r.elev ? fmt(r.elev) + '<small>m</small>' : fmt(r.km / (r.sec / 3600), 1) + '<small>km/h</small>'}</div></div>
      <div class="card"><div class="stat-label">${r.hr ? 'Puls Ø / max' : 'Gefühl'}</div><div class="stat-value">${r.hr ? r.hr + `<small>${r.maxHr ? '/ ' + r.maxHr + ' ' : ''}bpm</small>` : ['–', 'Zäh', 'Okay', 'Gut', 'Stark', 'Fliegend'][r.feel || 0]}</div></div></div>
    <div class="grid">${hasRoute ? `<div class="card span-7"><div class="card-head"><h2>${icon('pin')}Strecke</h2><span class="legend small"><span><i class="dot" style="background:var(--accent-mark)"></i>Start</span><span><i class="dot" style="background:var(--ink)"></i>Ziel</span><span><i class="dot" style="background:color-mix(in srgb, var(--ink) 45%, transparent)"></i>je km</span></span></div>${routeSvg(r.route, 'route', 600, 320, true)}</div>` : ''}
      <div class="card ${hasRoute ? 'span-5' : 'span-12'}"><div class="card-head"><h2>${icon('list')}${splits.length ? 'Kilometerzeiten' : 'Notiz'}</h2></div>
      ${splits.length ? `<table class="ntable"><thead><tr><th>km</th><th>Zeit</th><th>Pace</th></tr></thead><tbody>${splits.map((s, i) => `<tr><td>${i + 1}</td><td>${fmtDur(splits.slice(0, i + 1).reduce((a, b) => a + b, 0))}</td><td>${fmtPace(s)}</td></tr>`).join('')}</tbody></table>` : ''}
      ${r.note ? `<p style="margin-top:12px">${esc(r.note)}</p>` : splits.length ? '' : `<p class="muted">${hasRoute ? 'Keine Notiz' : 'Für Karte und Kilometerzeiten die Route als GPX laden, z. B. mit dem NOOP-Kurzbefehl „Route exportieren“'}</p>`}</div></div>
    ${r.hrCurve ? noopHrBlock({ hr: r.hrCurve, zones: r.zones, hrMax: r.hrMax, avgHr: r.hr, maxHr: r.maxHr }) : ''}`;
}

/* ---------- GPX: Route, Kilometerzeiten und Höhenmeter ---------- */
const Gpx = {
  parse(text) {
    const doc = new DOMParser().parseFromString(text, 'application/xml');
    const pts = Array.from(doc.getElementsByTagName('trkpt')).concat(Array.from(doc.getElementsByTagName('rtept'))).map(p => {
      const t = p.getElementsByTagName('time')[0], e = p.getElementsByTagName('ele')[0];
      return { lat: +p.getAttribute('lat'), lon: +p.getAttribute('lon'), t: t ? Date.parse(t.textContent) : null, ele: e ? +e.textContent : null };
    }).filter(p => isFinite(p.lat) && isFinite(p.lon) && (p.lat || p.lon));
    if (pts.length < 2) throw new Error('In der Datei ist keine Strecke (GPX mit Trackpunkten nötig).');
    let dist = 0, gain = 0, lastEle = null, nextKm = 1000;
    const splits = [], hasTime = pts.every(p => p.t);
    let kmStartT = hasTime ? pts[0].t : null;
    for (let i = 1; i < pts.length; i++) {
      const d = haversine([pts[i - 1].lat, pts[i - 1].lon], [pts[i].lat, pts[i].lon]);
      if (hasTime && d > 0) {
        while (dist + d >= nextKm) {       // Kilometermarke zwischen zwei Punkten: Zeit linear einrechnen
          const f = (nextKm - dist) / d, tKm = pts[i - 1].t + f * (pts[i].t - pts[i - 1].t);
          splits.push(Math.round((tKm - kmStartT) / 1000)); kmStartT = tKm; nextKm += 1000;
        }
      }
      dist += d;
      if (pts[i].ele != null) { if (lastEle != null && pts[i].ele - lastEle > 2) { gain += pts[i].ele - lastEle; lastEle = pts[i].ele; } else if (lastEle == null || pts[i].ele < lastEle) lastEle = pts[i].ele; }
    }
    const step = Math.max(1, Math.ceil(pts.length / 500));
    return {
      start: hasTime ? pts[0].t : null, sec: hasTime ? Math.round((pts[pts.length - 1].t - pts[0].t) / 1000) : null,
      km: Math.round(dist / 10) / 100, splits, elev: gain ? Math.round(gain) : null,
      route: pts.filter((_, i) => i % step === 0 || i === pts.length - 1).map(p => [+p.lat.toFixed(6), +p.lon.toFixed(6)])
    };
  },
  // Passenden Lauf suchen: gleicher Start (± 15 min) oder GPX-Start liegt im Lauf
  match(g) {
    if (!g.start) return null;
    return Runs.all().find(r => Math.abs(r.start - g.start) < 15 * 60e3 || (g.start >= r.start && g.start <= r.start + r.sec * 1000)) || null;
  }
};
A.gpxLoad = el => {
  const file = el.files && el.files[0];
  if (!file) return;
  const fr = new FileReader();
  fr.onload = () => {
    try {
      const g = Gpx.parse(fr.result);
      let r = el.dataset.id ? Runs.get(el.dataset.id) : Gpx.match(g);
      if (r) {
        r = Object.assign({}, r, { route: g.route, splits: g.splits.length ? g.splits : r.splits, elev: g.elev || r.elev });
        if (!(r.km > 0)) r.km = g.km;
        if (!(r.sec > 0) && g.sec) r.sec = g.sec;
        toast(`Route übernommen: ${fmt(g.km, 2)} km${g.splits.length ? `, ${g.splits.length} Kilometerzeiten` : ''}`);
      } else {
        if (!g.sec) throw new Error('Die Datei hat keine Zeiten, darum lässt sich kein neuer Lauf anlegen.');
        r = { id: uid(), src: 'gpx', start: g.start, km: g.km, sec: g.sec, type: 'Locker', feel: 3, note: '', route: g.route, splits: g.splits, elev: g.elev };
        toast(`Neuer Lauf aus GPX: ${fmt(g.km, 2)} km`);
      }
      Runs.save(r);
      go('laufen/lauf/' + r.id);
    } catch (e) { toast(e && e.message ? e.message : 'GPX-Datei konnte nicht gelesen werden'); }
  };
  fr.readAsText(file);
  el.value = '';
};

function renderRunHistory() {
  const rs = Runs.all();
  if (!rs.length) return `<div class="card">${emptyState('run', 'Noch keine Läufe', `<a class="btn btn-primary" href="#/laufen/eintragen">Lauf eintragen</a>`)}</div>`;
  const groups = {};
  rs.forEach(r => { const k = monthOf(dkey(r.start)); (groups[k] = groups[k] || []).push(r); });
  return Object.keys(groups).sort().reverse().map(k => {
    const [y, m] = k.split('-').map(Number), g = groups[k];
    return `<h2 style="margin:20px 4px 12px">${MONTHS_LONG[m - 1]} ${y} <span class="muted small">· ${fmt(sum(g.map(r => r.km)), 1)} km</span></h2>
      <div class="card" style="padding:8px 16px"><div class="list">${g.map(runRow).join('')}</div></div>`;
  }).join('');
}

/* ---------- Rechner ---------- */
function renderRunCalc() {
  const paces = [240, 270, 300, 330, 360, 390, 420];
  return `<div class="grid"><div class="card span-6"><div class="card-head"><h2>${icon('bolt')}Pace-Rechner</h2></div>
      <p class="small muted" style="margin-bottom:12px">Zwei Werte eintragen, der dritte wird berechnet.</p>
      <div class="fields"><label class="field">Distanz (km)<input class="input" id="pcKm" inputmode="decimal" placeholder="10" data-input="paceCalc"></label>
        <label class="field">Zeit (h:mm:ss)<input class="input" id="pcTime" placeholder="0:50:00" data-input="paceCalc"></label>
        <label class="field">Pace (m:ss /km)<input class="input" id="pcPace" placeholder="5:00" data-input="paceCalc"></label></div>
      <div class="chips" style="margin:12px 0">${RACES.map(([d, l]) => `<button class="chip chip-btn" data-act="pcRace" data-d="${d}">${l}</button>`).join('')}</div>
      <p id="pcOut" class="stat-value" style="font-size:24px">–</p></div>
    <div class="card span-6"><div class="card-head"><h2>${icon('trophy')}Wettkampf-Prognose</h2></div>
      <div class="fields"><label class="field">Gelaufen (km)<input class="input" id="rgKm" inputmode="decimal" value="10" data-input="riegelCalc"></label><label class="field">in (h:mm:ss)<input class="input" id="rgTime" value="0:50:00" data-input="riegelCalc"></label></div>
      <div id="rgOut" style="margin-top:12px">${riegelTable(10, 3000)}</div></div>
    <div class="card span-12"><div class="card-head"><h2>${icon('list')}Pace-Tabelle</h2></div><div style="overflow-x:auto">
      <table class="ntable"><thead><tr><th>Pace</th><th>km/h</th>${RACES.map(r => `<th>${r[1]}</th>`).join('')}</tr></thead><tbody>${paces.map(p => `<tr><td>${fmtPace(p)} /km</td><td>${fmt(3600 / p, 1)}</td>${RACES.map(([d]) => `<td>${fmtDur(p * d)}</td>`).join('')}</tr>`).join('')}</tbody></table></div></div></div>`;
}
function riegelTable(km, sec) {
  if (!(km > 0 && sec > 0)) return '<p class="muted">Distanz und Zeit eintragen</p>';
  return `<div class="list">${RACES.map(([d, l]) => { const p = riegel(sec, km, d); return `<div class="li"><span class="li-main">${l}</span><span class="li-end">${fmtDur(p)} <span class="muted small">${fmtPace(p / d)} /km</span></span></div>`; }).join('')}</div>`;
}
A.riegelCalc = () => { $('#rgOut').innerHTML = riegelTable(num($('#rgKm').value), parseDur($('#rgTime').value)); };
A.pcRace = el => { $('#pcKm').value = fmt(+el.dataset.d, 4); A.paceCalc(); };
A.paceCalc = () => {
  const km = num($('#pcKm').value), t = $('#pcTime').value.trim() ? parseDur($('#pcTime').value) : 0, p = $('#pcPace').value.trim() ? parseDur($('#pcPace').value) : 0;
  const out = $('#pcOut');
  if (km && t && !p) out.textContent = `Pace ${fmtPace(t / km)} /km · ${fmt(km / (t / 3600), 1)} km/h`;
  else if (km && p) out.textContent = `Zeit ${fmtDur(p * km, true)}`;
  else if (t && p) out.textContent = `Distanz ${fmt(t / p, 2)} km`;
  else out.textContent = '–';
};

/* ---------- Live-Lauf mit GPS ---------- */
const LiveRun = {
  st: Local.get('liverun', null) || { status: 'idle' },
  watch: null, lock: null, gps: { acc: null, ok: false }, lastFix: null,
  save() { Local.set('liverun', this.st); },
  elapsed() { const s = this.st; return s.status === 'idle' ? 0 : (s.acc || 0) + (s.status === 'running' ? (Date.now() - s.seg) / 1000 : 0); },
  begin() {
    if (!navigator.geolocation) return toast('GPS ist in diesem Browser nicht verfügbar');
    this.st = { status: 'running', startedAt: Date.now(), seg: Date.now(), acc: 0, dist: 0, pts: [], splits: [] };
    this.save(); this.listen(); this.wake(); Beep.play(1, 880); rerender();
  },
  pause() { const s = this.st; s.acc += (Date.now() - s.seg) / 1000; s.status = 'paused'; this.save(); rerender(); },
  resume() { const s = this.st; s.seg = Date.now(); s.status = 'running'; s.gap = true; this.save(); this.listen(); this.wake(); rerender(); },
  listen() {
    if (this.watch != null || !navigator.geolocation) return;
    this.watch = navigator.geolocation.watchPosition(p => this.onPos(p), e => {
      this.gps = { acc: null, ok: false, err: e.code === 1 ? 'Standortzugriff abgelehnt' : 'Kein GPS-Signal' };
      this.paintLive();
    }, { enableHighAccuracy: true, maximumAge: 1000, timeout: 20000 });
  },
  unlisten() { if (this.watch != null) navigator.geolocation.clearWatch(this.watch); this.watch = null; },
  async wake() { try { if ('wakeLock' in navigator) this.lock = await navigator.wakeLock.request('screen'); } catch (e) { this.lock = null; } },
  onPos(p) {
    const c = p.coords, s = this.st;
    this.gps = { acc: c.accuracy, ok: c.accuracy <= 25 };
    if (s.status === 'running' && c.accuracy <= 35) {
      const pt = [+c.latitude.toFixed(6), +c.longitude.toFixed(6), p.timestamp];
      const last = s.pts[s.pts.length - 1];
      if (!last || s.gap) { s.pts.push(pt); s.gap = false; }
      else {
        const d = haversine(last, pt), dt = (pt[2] - last[2]) / 1000;
        if (d >= Math.max(4, c.accuracy / 4) && (dt <= 0 || d / dt < 12)) {
          s.dist += d; s.pts.push(pt);
          const doneKm = Math.floor(s.dist / 1000);
          if (doneKm > s.splits.length) {
            const t = this.elapsed();
            s.splits.push(Math.round(t - sum(s.splits)));
            Beep.play(2, 1046); Beep.buzz([150, 80, 150]);
          }
        }
      }
      if (s.pts.length > 4000) s.pts = s.pts.filter((_, i) => i % 2 === 0 || i === s.pts.length - 1);
      this.save();
    }
    this.paintLive();
  },
  curPace() {
    const pts = this.st.pts || [];
    if (pts.length < 2) return 0;
    const now = pts[pts.length - 1][2];
    let i = pts.length - 1, d = 0;
    while (i > 0 && now - pts[i - 1][2] < 45000) { d += haversine(pts[i - 1], pts[i]); i--; }
    const dt = (now - pts[i][2]) / 1000;
    return d > 20 ? dt / (d / 1000) : 0;
  },
  finish() {
    const s = this.st, sec = Math.round(this.elapsed());
    this.unlisten();
    if (this.lock) { try { this.lock.release(); } catch (e) { /* ok */ } this.lock = null; }
    if (s.dist < 50) { this.st = { status: 'idle' }; this.save(); toast('Zu kurz – nichts gespeichert'); return rerender(); }
    const step = Math.max(1, Math.ceil(s.pts.length / 500));
    const route = s.pts.filter((_, i) => i % step === 0 || i === s.pts.length - 1).map(p => [p[0], p[1]]);
    const r = { id: uid(), start: s.startedAt, km: Math.round(s.dist / 10) / 100, sec, type: 'Locker', feel: 3, note: '', route, splits: s.splits, gps: true };
    Runs.save(r);
    this.st = { status: 'idle' }; this.save();
    Beep.play(3);
    toast('Lauf gespeichert');
    go('laufen/eintragen/' + r.id);
  },
  paintLive() {
    const el = $('#liveStats');
    if (!el) return;
    const s = this.st, km = (s.dist || 0) / 1000, t = this.elapsed(), cp = this.curPace();
    el.innerHTML = `<div><b>${fmtDur(t, t >= 3600)}</b><span>Zeit</span></div><div><b>${fmt(km, 2)}</b><span>Kilometer</span></div>
      <div><b>${fmtPace(cp)}</b><span>Pace jetzt</span></div><div><b>${fmtPace(km > 0.05 ? t / km : 0)}</b><span>Ø Pace</span></div>`;
    const g = $('#gpsState');
    if (g) {
      g.className = 'gps ' + (this.gps.ok ? 'ok' : this.gps.acc ? 'weak' : '');
      g.innerHTML = `<i></i>${this.gps.err ? esc(this.gps.err) : this.gps.acc ? `GPS ± ${Math.round(this.gps.acc)} m` : 'Suche GPS …'}`;
    }
    const sp = $('#liveSplits');
    if (sp) sp.innerHTML = (s.splits || []).map((x, i) => `<div class="li"><span class="li-main">Kilometer ${i + 1}</span><span class="li-end">${fmtPace(x)} /km</span></div>`).reverse().join('');
  }
};
A.liveStart = () => LiveRun.begin();
A.livePause = () => LiveRun.pause();
A.liveResume = () => LiveRun.resume();
A.liveStop = () => confirmSheet('Lauf beenden?', `${fmt((LiveRun.st.dist || 0) / 1000, 2)} km in ${fmtDur(LiveRun.elapsed())} speichern.`, 'Beenden und speichern', () => LiveRun.finish());
A.liveDiscard = () => confirmSheet('Lauf verwerfen?', 'Die aufgezeichnete Strecke geht verloren.', 'Verwerfen', () => { LiveRun.unlisten(); LiveRun.st = { status: 'idle' }; LiveRun.save(); rerender(); }, true);
function renderLive() {
  const s = LiveRun.st;
  if (s.status !== 'idle') { LiveRun.listen(); AfterRender.push(() => LiveRun.paintLive()); }
  const secure = window.isSecureContext;
  return `<div class="card live" style="max-width:560px;margin:0 auto">
    <div class="row-between"><span class="gps" id="gpsState"><i></i>${s.status === 'idle' ? 'GPS startet mit dem Lauf' : 'Suche GPS …'}</span><span class="chip">${s.status === 'running' ? 'läuft' : s.status === 'paused' ? 'pausiert' : 'bereit'}</span></div>
    <div class="live-grid" id="liveStats"><div><b>0:00</b><span>Zeit</span></div><div><b>0,00</b><span>Kilometer</span></div><div><b>–</b><span>Pace jetzt</span></div><div><b>–</b><span>Ø Pace</span></div></div>
    ${s.status === 'idle' ? `<button class="btn btn-primary btn-l btn-block" data-act="liveStart">${icon('play')}Lauf starten</button>
      <p class="small muted" style="margin-top:12px">${secure ? 'Der Bildschirm bleibt während des Laufs an. Jeder Kilometer wird mit einem Ton angesagt.' : 'Hinweis: GPS funktioniert nur, wenn die Seite über https oder localhost geöffnet ist.'}</p>` :
      `<div class="row" style="justify-content:center">${s.status === 'running' ? `<button class="btn btn-l" data-act="livePause">${icon('pause')}Pause</button>` : `<button class="btn btn-l btn-primary" data-act="liveResume">${icon('play')}Weiter</button>`}
        <button class="btn btn-l" data-act="liveStop">${icon('stop')}Beenden</button></div>
        <button class="btn btn-ghost btn-danger btn-s" style="margin-top:12px" data-act="liveDiscard">Verwerfen</button>`}
    <div class="list" id="liveSplits" style="margin-top:16px;text-align:left"></div></div>`;
}

V.laufen = {
  render(r) {
    if (r.sub === 'lauf') return renderRunDetail(r.args[0]);
    const body = { '': renderRunDash, live: renderLive, eintragen: () => renderRunForm(r.args[0]), verlauf: renderRunHistory, rechner: renderRunCalc }[r.sub] || renderRunDash;
    return pageHead('Laufen', '') + tabs('laufen', [['', 'Übersicht'], ['live', LiveRun.st.status !== 'idle' ? 'Lauf läuft' : 'Live-Lauf'], ['eintragen', 'Eintragen'], ['verlauf', 'Verlauf'], ['rechner', 'Rechner']], r.sub) + body();
  }
};

/* =====================================================================
   Zuhause: TV-Fernbedienung und Smart Home (Home Assistant, sobald da)
   ===================================================================== */
const HA_DOMAINS = [
  ['light', 'Licht', 'bulb'], ['switch', 'Schalter', 'plug'], ['cover', 'Rollos', 'blinds'], ['climate', 'Heizung', 'thermo'],
  ['media_player', 'Medien', 'speaker'], ['vacuum', 'Saugroboter', 'vacuum'], ['fan', 'Lüfter', 'bolt'], ['scene', 'Szenen', 'bolt']
];
const HA = {
  states: [], err: null, loaded: false, iv: null,
  conf() { return { url: (settings().haUrl || '').trim().replace(/\/+$/, ''), token: Local.get('haToken', '') }; },
  ready() { const c = this.conf(); return !!(c.url && c.token); },
  async req(path, opts) {
    const c = this.conf();
    const res = await fetchTimeout(c.url + path, 8000, Object.assign({ headers: { Authorization: 'Bearer ' + c.token, 'Content-Type': 'application/json' } }, opts || {}));
    if (!res.ok) throw new Error('HTTP ' + res.status);
    return res.json();
  },
  async load() {
    try {
      const all = await this.req('/api/states');
      this.states = all.filter(s => HA_DOMAINS.some(d => s.entity_id.startsWith(d[0] + '.')) && !(s.attributes && s.attributes.hidden));
      this.err = null;
    } catch (e) {
      this.err = location.protocol === 'https:' && this.conf().url.startsWith('http:') ? 'Die Seite läuft über https, Home Assistant über http. Der Browser blockiert das.' : 'Home Assistant nicht erreichbar (Adresse, Token oder CORS prüfen).';
    }
    this.loaded = true;
    if (route().view === 'zuhause') paintHa();
  },
  async call(domain, service, data) {
    try { await this.req(`/api/services/${domain}/${service}`, { method: 'POST', body: JSON.stringify(data) }); setTimeout(() => this.load(), 400); }
    catch (e) { toast('Befehl fehlgeschlagen'); }
  },
  startPolling() {
    if (this.iv || !this.ready()) return;
    this.load();
    this.iv = setInterval(() => { if (route().view !== 'zuhause' || document.hidden) return; this.load(); }, 8000);
  }
};
function haTile(s) {
  const dom = s.entity_id.split('.')[0], a = s.attributes || {};
  const name = esc(a.friendly_name || s.entity_id);
  const ic = (HA_DOMAINS.find(d => d[0] === dom) || [])[2] || 'plug';
  const on = ['on', 'open', 'playing', 'heat', 'cleaning', 'auto'].includes(s.state);
  const id = esc(s.entity_id);
  if (dom === 'cover') {
    return `<div class="device${s.state === 'open' ? ' on' : ''}"><span class="di">${icon(ic)}</span><div><b>${name}</b><small>${s.state === 'open' ? 'offen' : s.state === 'closed' ? 'zu' : esc(s.state)}${a.current_position != null ? ' · ' + a.current_position + ' %' : ''}</small></div>
      <div class="row"><button class="icon-btn bordered" data-act="haCall" data-d="cover" data-s="open_cover" data-e="${id}" aria-label="Öffnen">${icon('up')}</button><button class="icon-btn bordered" data-act="haCall" data-d="cover" data-s="stop_cover" data-e="${id}" aria-label="Stopp">${icon('pause')}</button><button class="icon-btn bordered" data-act="haCall" data-d="cover" data-s="close_cover" data-e="${id}" aria-label="Schließen">${icon('down')}</button></div></div>`;
  }
  if (dom === 'climate') {
    const tgt = a.temperature;
    return `<div class="device${on ? ' on' : ''}"><span class="di">${icon(ic)}</span><div><b>${name}</b><small>${a.current_temperature != null ? fmt(a.current_temperature, 1) + ' °C · ' : ''}Ziel ${tgt != null ? fmt(tgt, 1) + ' °C' : '–'}</small></div>
      <div class="row"><button class="icon-btn bordered" data-act="haTemp" data-e="${id}" data-t="${(tgt || 20) - 0.5}" aria-label="Kühler">${icon('minus')}</button><button class="icon-btn bordered" data-act="haTemp" data-e="${id}" data-t="${(tgt || 20) + 0.5}" aria-label="Wärmer">${icon('plus')}</button></div></div>`;
  }
  const svc = dom === 'scene' ? 'turn_on' : dom === 'media_player' ? 'media_play_pause' : dom === 'vacuum' ? (s.state === 'cleaning' ? 'return_to_base' : 'start') : 'toggle';
  const sub = dom === 'light' && on && a.brightness ? `an · ${Math.round(a.brightness / 2.55)} %` : dom === 'scene' ? 'Szene starten' : { on: 'an', off: 'aus', playing: 'spielt', paused: 'pausiert', idle: 'bereit', docked: 'in der Station', cleaning: 'saugt', unavailable: 'nicht erreichbar' }[s.state] || esc(s.state);
  return `<button class="device${on ? ' on' : ''}" data-act="haCall" data-d="${dom}" data-s="${svc}" data-e="${id}" aria-pressed="${on}"><span class="di">${icon(ic)}</span><div><b>${name}</b><small>${sub}</small></div></button>`;
}
function paintHa() {
  const el = $('#haBox');
  if (!el) return;
  if (!HA.loaded) { el.innerHTML = '<p class="muted">Lade Geräte …</p>'; return; }
  if (HA.err) { el.innerHTML = `<p class="muted">${esc(HA.err)}</p><a class="btn" style="margin-top:12px" href="#/einstellungen">Einstellungen prüfen</a>`; return; }
  el.innerHTML = HA_DOMAINS.map(([dom, label]) => {
    const list = HA.states.filter(s => s.entity_id.startsWith(dom + '.'));
    return list.length ? `<h3 style="margin:16px 0 12px">${label}</h3><div class="devices">${list.map(haTile).join('')}</div>` : '';
  }).join('') || '<p class="muted">Keine passenden Geräte gefunden</p>';
}
A.haCall = el => HA.call(el.dataset.d, el.dataset.s, { entity_id: el.dataset.e });
A.haTemp = el => HA.call('climate', 'set_temperature', { entity_id: el.dataset.e, temperature: +el.dataset.t });

const PLANNED_ROOMS = [
  ['Wohnzimmer', [['bulb', 'Deckenlicht'], ['bulb', 'Stehlampe'], ['blinds', 'Rollo'], ['tv', 'Fernseher', '#/zuhause/tv'], ['speaker', 'Bose SoundTouch']]],
  ['Küche', [['bulb', 'Licht'], ['coffee', 'Kaffeemaschine'], ['plug', 'Steckdose']]],
  ['Schlafzimmer', [['bulb', 'Licht'], ['blinds', 'Rollo'], ['thermo', 'Temperatur']]],
  ['Flur & Bad', [['vacuum', 'Saugroboter'], ['thermo', 'Fußbodenheizung'], ['bulb', 'Licht']]]
];

function tvBlock(full) {
  const url = settings().tvUrl;
  const blocked = location.protocol === 'https:' && /^http:/i.test(url);
  if (!url) return `<p class="muted">Keine Adresse hinterlegt</p><a class="btn" href="#/einstellungen">Einstellungen</a>`;
  if (blocked) {
    return `<div class="empty" style="padding:20px 8px">${icon('tv')}<p>Die Fernbedienung läuft im Heimnetz über http. Aus dieser https-Seite heraus darf der Browser sie nicht einbetten.</p>
      <a class="btn btn-primary" style="margin-top:16px" href="${esc(url)}" target="_blank" rel="noopener">${icon('link')}Fernbedienung öffnen</a></div>`;
  }
  return `<iframe class="remote-frame" src="${esc(url)}" title="TV-Fernbedienung" allow="clipboard-write" ${full ? 'style="height:min(860px, 82vh)"' : ''}></iframe>
    <p class="tiny muted" style="margin-top:8px">Funktioniert im Heimnetz. Wenn hier nichts erscheint: Chromecast kurz per Taste wecken.</p>`;
}
function renderHome() {
  const s = settings();
  if (HA.ready()) { HA.startPolling(); AfterRender.push(paintHa); }
  return `<div class="grid">
    <div class="card span-5"><div class="card-head"><h2>${icon('tv')}Wohnzimmer-TV</h2>
      <div class="row"><a class="icon-btn" href="#/zuhause/tv" aria-label="Fernbedienung groß">${icon('right')}</a><a class="icon-btn" href="${esc(s.tvUrl)}" target="_blank" rel="noopener" aria-label="In neuem Tab öffnen">${icon('link')}</a></div></div>
      ${tvBlock(false)}</div>
    <div class="span-7 stack">
      ${HA.ready() ? `<div class="card"><div class="card-head"><h2>${icon('house')}Smart Home</h2><span class="chip">Home Assistant</span></div><div id="haBox"></div></div>` :
      `<div class="card"><div class="card-head"><h2>${icon('house')}Smart Home</h2><span class="chip chip-accent">in Planung</span></div>
        <p class="muted" style="margin-bottom:16px">Sobald in der neuen Wohnung die Steuerbox läuft, erscheinen hier echte Geräte zum Schalten. So sieht der Plan aus:</p>
        <div class="stack">${PLANNED_ROOMS.map(([room, devs]) => `<div class="room"><h2 style="margin-bottom:12px">${room}</h2><div class="devices">${devs.map(([ic, n, href]) => href ?
          `<a class="device on" href="${href}" style="text-decoration:none"><span class="di">${icon(ic)}</span><div><b>${n}</b><small>Fernbedienung</small></div></a>` :
          `<div class="device planned"><span class="di">${icon(ic)}</span><div><b>${n}</b><small>geplant</small></div></div>`).join('')}</div></div>`).join('')}</div></div>
      <div class="card"><div class="card-head"><h2>${icon('list')}So wird’s verbunden</h2></div>
        <ol class="steps"><li>Raspberry Pi mit Home Assistant ins Heimnetz (mit Zigbee-Stick für Lampen, Rollos, Thermostate).</li>
        <li>Geräte in Home Assistant einbinden: Fritz!Box, Roborock, Siemens Home Connect, Bose, Chromecast.</li>
        <li>In Home Assistant ein Langzeit-Token erstellen und dieses Dashboard bei <code>cors_allowed_origins</code> eintragen.</li>
        <li>Adresse und Token unter <a href="#/einstellungen">Einstellungen</a> eintragen – fertig.</li></ol></div>`}
    </div></div>`;
}
V.zuhause = {
  render(r) {
    if (r.sub === 'tv') {
      return `<a class="btn btn-ghost btn-s" href="#/zuhause" style="margin-bottom:12px">${icon('left', 'ic-s')}Zuhause</a>
        <div class="card" style="max-width:520px;margin:0 auto;padding:12px">${tvBlock(true)}</div>`;
    }
    return pageHead('Zuhause', 'Fernseher und bald die ganze Wohnung') + renderHome();
  }
};

/* =====================================================================
   Finanzen: Fixkosten, Ausgaben mit Budgets, Zählerstände
   ===================================================================== */
const FIX_CATS = ['Wohnen', 'Energie', 'Versicherung', 'Kommunikation', 'Abos', 'Mobilität', 'Sport', 'Sonstiges'];
const SPEND_CATS = [
  ['lebensmittel', 'Lebensmittel', 'cart'], ['essen', 'Essen gehen', 'food'], ['haushalt', 'Haushalt', 'house'],
  ['einrichtung', 'Einrichtung', 'bulb'], ['mobil', 'Mobilität', 'pin'], ['freizeit', 'Freizeit', 'bolt'],
  ['sport', 'Sport', 'gym'], ['kleidung', 'Kleidung', 'tasks'], ['gesundheit', 'Gesundheit', 'drop'],
  ['geschenke', 'Geschenke', 'trophy'], ['sonst', 'Sonstiges', 'more'], ['fix', 'Fixkosten (Konto)', 'calendar'], ['einnahme', 'Einnahme', 'euro']
];
const MANUAL_CATS = SPEND_CATS.filter(c => c[0] !== 'einnahme' && c[0] !== 'fix');
const INTERVALS = { m: ['monatlich', 1], q: ['vierteljährlich', 3], h: ['halbjährlich', 6], y: ['jährlich', 12] };
const METERS = [['strom', 'Strom', 'kWh', 'bolt'], ['wasser', 'Kaltwasser', 'm³', 'drop'], ['warmwasser', 'Warmwasser', 'm³', 'drop'], ['heizung', 'Heizung', 'kWh', 'thermo'], ['gas', 'Gas', 'm³', 'flame']];
const FIX_SUGGEST = [
  ['Miete (kalt)', 'Wohnen', 'm'], ['Nebenkosten-Vorauszahlung', 'Wohnen', 'm'], ['Strom', 'Energie', 'm'], ['Internet', 'Kommunikation', 'm'],
  ['Handyvertrag', 'Kommunikation', 'm'], ['Rundfunkbeitrag', 'Wohnen', 'q', 55.08], ['Haftpflichtversicherung', 'Versicherung', 'y'],
  ['Hausratversicherung', 'Versicherung', 'y'], ['EGYM Wellpass', 'Sport', 'm'], ['Streaming', 'Abos', 'm']
];
const eur = v => new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR', minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(v || 0);
const spendCat = id => SPEND_CATS.find(c => c[0] === id) || SPEND_CATS[SPEND_CATS.length - 1];
const monthName = m => { const [y, mo] = m.split('-').map(Number); return `${MONTHS_LONG[mo - 1]} ${y}`; };
const shiftMonth = (m, n) => { const [y, mo] = m.split('-').map(Number); const d = new Date(y, mo - 1 + n, 1); return `${d.getFullYear()}-${pad2(d.getMonth() + 1)}`; };

const Finance = {
  fixed() { return Store.get('fixkosten', []) || []; },
  saveFixed(a) { Store.set('fixkosten', a); },
  perMonth(f) { return (+f.amount || 0) / INTERVALS[f.interval || 'm'][1]; },
  monthlyFixed() { return sum(this.fixed().filter(f => f.active !== false).map(f => this.perMonth(f))); },
  spending(month) { return (Store.get('a-' + month, []) || []).slice().sort((a, b) => a.date < b.date ? 1 : a.date > b.date ? -1 : b.ts - a.ts); },
  expenses(month) { return this.spending(month).filter(e => !e.inc); },
  spent(month) { return sum(this.expenses(month).filter(e => e.cat !== 'fix').map(e => e.amount)); },
  fixDebits(month) { return sum(this.expenses(month).filter(e => e.cat === 'fix').map(e => e.amount)); },
  income(month) { return sum(this.spending(month).filter(e => e.inc).map(e => e.amount)); },
  imported(month) { return this.spending(month).some(e => e.src === 'fg'); },
  saveSpend(e) {
    removeFromBuckets('a-', e.id);
    const key = 'a-' + e.date.slice(0, 7);
    Store.set(key, (Store.get(key, []) || []).concat([e]));
  },
  removeSpend(id) { removeFromBuckets('a-', id); },
  budget() { return Store.get('budget', {}) || {}; },
  meters() { return (Store.get('zaehler', []) || []).slice().sort((a, b) => a.date < b.date ? -1 : 1); },
  prices() { return Store.get('zaehlerPreise', {}) || {}; },
  nextDue(f) {
    if (!f.day) return null;
    const step = INTERVALS[f.interval || 'm'][1], t = parseKey(todayKey());
    const start = f.startMonth ? f.startMonth - 1 : t.getMonth();
    for (let i = 0; i < 26; i++) {
      const m = t.getMonth() + i;
      if (((m - start) % step + step) % step !== 0) continue;
      const d = new Date(t.getFullYear(), m, Math.min(f.day, 28));
      if (dkey(d) >= todayKey()) return dkey(d);
    }
    return null;
  }
};
let finMonth = todayKey().slice(0, 7);

function renderFinDash() {
  const m = todayKey().slice(0, 7), fixed = Finance.monthlyFixed(), spent = Finance.spent(m);
  const budget = Finance.budget(), budgetTotal = sum(Object.values(budget));
  const months = [];
  for (let i = 5; i >= 0; i--) { const mm = shiftMonth(m, -i), v = Finance.spent(mm); months.push({ label: MONTHS[+mm.slice(5) - 1], value: Math.round(v), strong: i === 0, tip: `<b>${eur(v)}</b> Ausgaben<br>${monthName(mm)}` }); }
  const prev3 = [1, 2, 3].map(i => Finance.spent(shiftMonth(m, -i))).filter(v => v > 0);
  const byCat = {};
  Finance.expenses(m).filter(e => e.cat !== 'fix').forEach(e => { byCat[e.cat] = (byCat[e.cat] || 0) + e.amount; });
  const income = Finance.income(m), imp = Finance.imported(m), fg = Store.get('fgMeta', null);
  const fixByCat = {};
  Finance.fixed().filter(f => f.active !== false).forEach(f => { fixByCat[f.cat] = (fixByCat[f.cat] || 0) + Finance.perMonth(f); });
  const due = Finance.fixed().filter(f => f.active !== false).map(f => ({ f, d: Finance.nextDue(f) })).filter(x => x.d && x.d <= addDays(todayKey(), 21)).sort((a, b) => a.d < b.d ? -1 : 1);
  return `<div class="kpis">
      <div class="card"><div class="stat-label">Ausgaben ${MONTHS_LONG[+m.slice(5) - 1]}</div><div class="stat-value">${eur(spent)}</div><div class="stat-foot">${Finance.expenses(m).filter(e => e.cat !== 'fix').length} Einträge ohne Fixkosten</div></div>
      <div class="card"><div class="stat-label">Fixkosten pro Monat</div><div class="stat-value">${eur(fixed)}</div><div class="stat-foot">${imp ? `${eur(Finance.fixDebits(m))} schon abgebucht` : `${eur(fixed * 12)} im Jahr`}</div></div>
      <div class="card"><div class="stat-label">${budgetTotal ? 'Budget übrig' : 'Ø letzte 3 Monate'}</div><div class="stat-value">${budgetTotal ? eur(budgetTotal - spent) : prev3.length ? eur(sum(prev3) / prev3.length) : '–'}</div>
        ${budgetTotal ? `<div class="stat-foot">von ${eur(budgetTotal)} Budget</div>` : '<div class="stat-foot">variable Ausgaben</div>'}</div>
      ${imp ? `<div class="card"><div class="stat-label">Saldo ${MONTHS_LONG[+m.slice(5) - 1]}</div><div class="stat-value" style="color:${income - spent - Finance.fixDebits(m) >= 0 ? 'var(--good)' : 'var(--bad)'}">${eur(income - spent - Finance.fixDebits(m))}</div><div class="stat-foot">Einnahmen ${eur(income)} laut Konto</div></div>`
        : `<div class="card"><div class="stat-label">Monat gesamt</div><div class="stat-value">${eur(fixed + spent)}</div><div class="stat-foot">fix + variabel</div></div>`}</div>
    <div class="quick">
      <button class="quick-btn" data-act="spendNew"><span class="qi">${icon('plus')}</span><span>Ausgabe eintragen<small>in 5 Sekunden</small></span></button>
      <button class="quick-btn" data-act="fixEdit"><span class="qi">${icon('calendar')}</span><span>Fixkosten<small>Vertrag hinzufügen</small></span></button>
      <button class="quick-btn" data-act="meterNew"><span class="qi">${icon('meter')}</span><span>Zählerstand<small>Strom, Wasser, Heizung</small></span></button>
      ${fgLoadBtn(`<span class="qi">${icon('sync')}</span><span>Kontoumsätze laden<small>${fg ? 'zuletzt ' + fmtDate(fg.loaded) : 'CSV aus dem Online-Banking'}</small></span>`, 'quick-btn', true)}</div>
    ${fg ? `<p class="small muted" style="margin:-8px 4px 16px">Umsätze aus „${esc(fg.file)}“ · Umsätze vom ${fmtDate(fg.from, { plain: true })} bis ${fmtDate(fg.to, { plain: true })} · ${fg.added} neu übernommen${fg.dup ? `, ${fg.dup} schon vorhanden` : ''}${fg.skipped ? `, ${fg.skipped} Umbuchungen ausgelassen` : ''}</p>` : ''}
    <div class="grid">
      <div class="card span-7"><div class="card-head"><h2>${icon('chart')}Ausgaben pro Monat</h2><span class="muted small">ohne Fixkosten</span></div>
        ${Charts.slot({ type: 'bars', bars: months, height: 220, yFmt: v => fmt(v) + ' €', label: 'Ausgaben pro Monat', empty: 'Trag deine erste Ausgabe ein.' })}</div>
      <div class="card span-5"><div class="card-head"><h2>${icon('wallet')}Wofür im ${MONTHS_LONG[+m.slice(5) - 1]}</h2></div>
        ${Object.keys(byCat).length ? hbars(Object.keys(byCat).map(k => ({ label: spendCat(k)[1], value: Math.round(byCat[k]) })).sort((a, b) => b.value - a.value), v => fmt(v) + ' €') : '<p class="empty">Noch keine Ausgaben in diesem Monat</p>'}</div>
      <div class="card span-6"><div class="card-head"><h2>${icon('calendar')}Nächste Abbuchungen</h2><a class="btn btn-ghost btn-s" href="#/finanzen/fixkosten">Fixkosten</a></div>
        <div class="list">${due.map(x => `<div class="li"><div class="li-main"><div class="li-title">${esc(x.f.name)}</div><div class="li-sub">${fmtDate(x.d, { day: true })} · ${INTERVALS[x.f.interval][0]}</div></div><span class="li-end">${eur(x.f.amount)}</span></div>`).join('') || `<p class="empty">Keine Abbuchung in den nächsten drei Wochen${Finance.fixed().some(f => !f.day) ? ' (Tag der Abbuchung bei den Fixkosten eintragen)' : ''}.</p>`}</div></div>
      <div class="card span-6"><div class="card-head"><h2>${icon('house')}Fixkosten nach Bereich</h2></div>
        ${Object.keys(fixByCat).length ? hbars(Object.keys(fixByCat).map(k => ({ label: k, value: Math.round(fixByCat[k]) })).sort((a, b) => b.value - a.value), v => fmt(v) + ' €') : `<p class="empty">Noch keine Fixkosten</p><button class="btn" data-act="fixEdit">${icon('plus')}Erste Fixkosten anlegen</button>`}</div>
      ${fgSuggestCard('span-12')}
      <div class="card span-12"><div class="card-head"><h2>${icon('euro')}Vermietung</h2></div>
        <p class="muted">Nebenkosten, Mietverträge und Kalkulation der Mietwohnungen laufen weiter in deinem eigenen Nebenkosten-Dashboard (Ordner „Mietswohnungen → Nebenkosten“). Diese Seite ist für deine eigenen Kosten in der neuen Wohnung.</p></div>
    </div>`;
}

/* ---------- Ausgaben ---------- */
function renderSpending() {
  const list = Finance.spending(finMonth), budget = Finance.budget();
  const byCat = {};
  list.filter(e => !e.inc && e.cat !== 'fix').forEach(e => { byCat[e.cat] = (byCat[e.cat] || 0) + e.amount; });
  const cats = MANUAL_CATS.filter(c => budget[c[0]] || byCat[c[0]]);
  const groups = {};
  list.forEach(e => { (groups[e.date] = groups[e.date] || []).push(e); });
  return `<div class="row-between wrap" style="margin-bottom:16px"><div class="date-nav"><button class="icon-btn bordered" data-act="finMonth" data-d="-1" aria-label="Vorheriger Monat">${icon('left')}</button>
      <b>${monthName(finMonth)}</b><button class="icon-btn bordered" data-act="finMonth" data-d="1" aria-label="Nächster Monat"${finMonth >= todayKey().slice(0, 7) ? ' disabled' : ''}>${icon('right')}</button></div>
      <div class="row">${fgLoadBtn('Umsätze laden')}<button class="btn btn-primary" data-act="spendNew">${icon('plus')}Ausgabe</button></div></div>
    <div class="grid"><div class="card span-5"><div class="card-head"><h2>${icon('wallet')}Budget</h2><button class="btn btn-ghost btn-s" data-act="budgetEdit">Bearbeiten</button></div>
      <p class="stat-value" style="margin:0 0 12px">${eur(Finance.spent(finMonth))}<small>${sum(Object.values(budget)) ? ' von ' + eur(sum(Object.values(budget))) : ''}</small></p>
      <div class="stack">${cats.map(c => {
        const v = byCat[c[0]] || 0, b = budget[c[0]] || 0;
        return `<div class="macro"><div class="macro-head"><span class="row" style="gap:8px">${icon(c[2], 'ic-s')}${c[1]}</span><span class="num"><b>${eur(v)}</b>${b ? ' / ' + eur(b) : ''}</span></div>
          ${b ? `<div class="bar${v > b ? ' over' : ''}"><span style="width:${clamp(v / b * 100, 0, 100)}%"></span></div>` : ''}</div>`;
      }).join('') || '<p class="muted">Leg Monatsbudgets fest, dann siehst du hier, wie viel noch übrig ist</p>'}</div></div>
    <div class="card span-7" style="padding:8px 16px">${Object.keys(groups).map(d => `<p class="stat-label" style="margin:16px 4px 4px">${fmtDate(d, { day: true })} · ${eur(sum(groups[d].filter(e => !e.inc).map(e => e.amount)))}</p>
      <div class="list">${groups[d].map(e => { const c = spendCat(e.cat); return `<button class="li" data-act="spendEdit" data-id="${e.id}"><span class="tile-ic" style="width:36px;height:36px">${icon(c[2], 'ic-s')}</span><div class="li-main"><div class="li-title">${esc(e.note || c[1])}</div><div class="li-sub">${c[1]}${e.src === 'fg' ? ' · Konto' + (e.account ? ' ' + esc(e.account) : '') : ''}</div></div><span class="li-end"${e.inc ? ' style="color:var(--good)"' : ''}>${e.inc ? '+' : ''}${eur(e.amount)}</span></button>`; }).join('')}</div>`).join('')
      || emptyState('wallet', 'Keine Ausgaben in diesem Monat', `<button class="btn btn-primary" data-act="spendNew">Ausgabe eintragen</button>`)}</div></div>`;
}
A.finMonth = el => { const n = shiftMonth(finMonth, +el.dataset.d); if (n <= todayKey().slice(0, 7)) { finMonth = n; rerender(); } };
let spendDraft = null;
A.spendNew = () => { spendDraft = { id: uid(), amount: '', cat: 'lebensmittel', note: '', date: todayKey() }; spendSheet(true); };
A.spendEdit = el => { const e = Finance.spending(finMonth).find(x => x.id === el.dataset.id); if (!e) return; spendDraft = clone(e); spendSheet(false); };
function spendSheet(isNew) {
  const d = spendDraft;
  Sheet.open(`${sheetHead(isNew ? 'Ausgabe eintragen' : 'Ausgabe bearbeiten')}
    <form class="stack" data-submit="spendSave">
      <label class="field">Betrag (€)<input class="input" name="amount" inputmode="decimal" value="${d.amount === '' ? '' : fmtFixed(d.amount, 2)}" placeholder="0,00" style="font-size:28px;font-weight:700;min-height:60px" autofocus required></label>
      <div class="field"><span>Kategorie</span><div class="chips">${(d.inc ? SPEND_CATS.filter(c => c[0] === 'einnahme') : SPEND_CATS.filter(c => c[0] !== 'einnahme')).map(c => `<label class="chip chip-btn${c[0] === d.cat ? ' active' : ''}"><input type="radio" name="cat" value="${c[0]}"${c[0] === d.cat ? ' checked' : ''} class="sr" data-change="chipRadio">${c[1]}</label>`).join('')}</div></div>
      <div class="fields"><label class="field">Notiz<input class="input" name="note" value="${esc(d.note)}" placeholder="z. B. Rewe, Kino"></label>
      <label class="field">Datum<input class="input" type="date" name="date" value="${d.date}" max="${todayKey()}"></label></div>
      ${d.memo ? `<p class="small muted">Verwendungszweck: ${esc(d.memo)}</p>` : ''}
      <div class="sheet-actions">${isNew ? '' : `<button type="button" class="btn btn-danger" data-act="spendDelete">${icon('trash')}Löschen</button>`}<button type="button" class="btn" data-act="closeSheet">Abbrechen</button><button class="btn btn-primary">Speichern</button></div></form>`);
}
A.chipRadio = el => { $$('input[name="' + el.name + '"]', el.closest('form')).forEach(r => r.closest('.chip').classList.toggle('active', r.checked)); };
A.spendSave = f => {
  const d = formData(f), amount = Math.round(num(d.amount) * 100) / 100;
  if (!(amount > 0)) return toast('Bitte einen Betrag eingeben');
  Finance.saveSpend(Object.assign({}, spendDraft, { amount, cat: d.cat || 'sonst', note: d.note.trim(), date: d.date || todayKey(), ts: spendDraft.ts || Date.now() }));
  finMonth = (d.date || todayKey()).slice(0, 7);
  Sheet.close(); toast(`${eur(amount)} eingetragen`); rerender();
};
A.spendDelete = () => { Finance.removeSpend(spendDraft.id); Sheet.close(); toast('Gelöscht'); rerender(); };
A.budgetEdit = () => {
  const b = Finance.budget();
  Sheet.open(`${sheetHead('Monatsbudgets', 'Leer lassen für kein Budget')}<form class="stack" data-submit="budgetSave"><div class="fields">${MANUAL_CATS.map(c => `<label class="field">${c[1]} (€)<input class="input" name="${c[0]}" inputmode="decimal" value="${b[c[0]] ? fmt(b[c[0]], 2) : ''}"></label>`).join('')}</div>
    <div class="sheet-actions"><button type="button" class="btn" data-act="closeSheet">Abbrechen</button><button class="btn btn-primary">Speichern</button></div></form>`);
};
A.budgetSave = f => { const d = formData(f), b = {}; Object.keys(d).forEach(k => { const v = num(d[k]); if (v > 0) b[k] = v; }); Store.set('budget', b); Sheet.close(); toast('Budgets gespeichert'); rerender(); };

/* ---------- Fixkosten ---------- */
function renderFixed() {
  const all = Finance.fixed();
  const groups = {};
  all.forEach(f => { (groups[f.cat] = groups[f.cat] || []).push(f); });
  return `<div class="row-between wrap" style="margin-bottom:16px"><p><b style="font-size:22px">${eur(Finance.monthlyFixed())}</b> <span class="muted">pro Monat · ${eur(Finance.monthlyFixed() * 12)} im Jahr</span></p>
      <button class="btn btn-primary" data-act="fixEdit">${icon('plus')}Fixkosten</button></div>
    ${fgSuggestCard('', true)}
    ${all.length ? '' : `<div class="card" style="margin-bottom:16px"><p class="muted" style="margin-bottom:12px">Schnell anlegen – Betrag trägst du danach ein:</p><div class="chips">${FIX_SUGGEST.map((s, i) => `<button class="chip chip-btn" data-act="fixSuggest" data-i="${i}">${s[0]}</button>`).join('')}</div></div>`}
    <div class="grid">${FIX_CATS.filter(c => groups[c]).map(c => `<div class="card span-6"><div class="card-head"><h2>${c}</h2><span class="num muted">${eur(sum(groups[c].filter(f => f.active !== false).map(f => Finance.perMonth(f))))} / Monat</span></div>
      <div class="list">${groups[c].map(f => `<button class="li" data-act="fixEdit" data-id="${f.id}"${f.active === false ? ' style="opacity:.5"' : ''}><div class="li-main"><div class="li-title">${esc(f.name)}</div>
        <div class="li-sub">${INTERVALS[f.interval][0]}${f.day ? ' · am ' + f.day + '.' : ''}${f.active === false ? ' · pausiert' : ''}${f.note ? ' · ' + esc(f.note) : ''}</div></div>
        <span class="li-end">${eur(f.amount)}${f.interval !== 'm' ? `<div class="li-sub">${eur(Finance.perMonth(f))} / Monat</div>` : ''}</span></button>`).join('')}</div></div>`).join('')}</div>`;
}
A.fixSuggest = el => { const s = FIX_SUGGEST[+el.dataset.i]; fixSheet({ id: uid(), name: s[0], cat: s[1], interval: s[2], amount: s[3] || '', day: '', startMonth: '', note: '', active: true }, true); };
A.fixEdit = el => {
  const f = el.dataset && el.dataset.id ? Finance.fixed().find(x => x.id === el.dataset.id) : null;
  fixSheet(f ? clone(f) : { id: uid(), name: '', cat: 'Wohnen', interval: 'm', amount: '', day: '', startMonth: '', note: '', active: true }, !f);
};
function fixSheet(f, isNew) {
  Sheet.open(`${sheetHead(isNew ? 'Fixkosten anlegen' : 'Fixkosten bearbeiten')}
    <form class="stack" data-submit="fixSave"><input type="hidden" name="id" value="${f.id}">
      <label class="field">Name<input class="input" name="name" value="${esc(f.name)}" required placeholder="z. B. Internet"></label>
      <div class="fields"><label class="field">Betrag (€)<input class="input" name="amount" inputmode="decimal" value="${f.amount === '' ? '' : fmtFixed(f.amount, 2)}" required ${f.name ? 'autofocus' : ''}></label>
        <label class="field">Intervall<select class="input" name="interval">${Object.keys(INTERVALS).map(k => `<option value="${k}"${k === f.interval ? ' selected' : ''}>${INTERVALS[k][0]}</option>`).join('')}</select></label>
        <label class="field">Bereich<select class="input" name="cat">${FIX_CATS.map(c => `<option${c === f.cat ? ' selected' : ''}>${c}</option>`).join('')}</select></label></div>
      <div class="fields"><label class="field">Abbuchung am (Tag)<input class="input" name="day" inputmode="numeric" value="${f.day || ''}" placeholder="z. B. 1"></label>
        <label class="field">Erster Monat (bei nicht monatlich)<select class="input" name="startMonth"><option value="">–</option>${MONTHS_LONG.map((m, i) => `<option value="${i + 1}"${+f.startMonth === i + 1 ? ' selected' : ''}>${m}</option>`).join('')}</select></label></div>
      <label class="field">Notiz<input class="input" name="note" value="${esc(f.note || '')}" placeholder="Vertragsnummer, Kündigungsfrist …"></label>
      <label class="check"><input type="checkbox" name="active"${f.active !== false ? ' checked' : ''}> Aktiv (zählt zu den Fixkosten)</label>
      <div class="sheet-actions">${isNew ? '' : `<button type="button" class="btn btn-danger" data-act="fixDelete" data-id="${f.id}">${icon('trash')}Löschen</button>`}<button type="button" class="btn" data-act="closeSheet">Abbrechen</button><button class="btn btn-primary">Speichern</button></div></form>`);
}
A.fixSave = form => {
  const d = formData(form), amount = Math.round(num(d.amount) * 100) / 100;
  if (!d.name.trim() || !(amount > 0)) return toast('Bitte Name und Betrag eingeben');
  const f = { id: d.id, name: d.name.trim(), amount, interval: d.interval, cat: d.cat, day: clamp(Math.round(num(d.day)), 0, 31) || '', startMonth: +d.startMonth || '', note: d.note.trim(), active: d.active };
  Finance.saveFixed(Finance.fixed().filter(x => x.id !== f.id).concat([f]));
  Sheet.close(); toast('Gespeichert');
  if (route().sub === 'fixkosten') rerender(); else go('finanzen/fixkosten');
};
A.fixDelete = el => { Finance.saveFixed(Finance.fixed().filter(x => x.id !== el.dataset.id)); Sheet.close(); rerender(); };

/* Wiederkehrende Abbuchungen aus den Kontoumsätzen als Fixkosten vorschlagen */
function fgSuggestCard(cls, spaced) {
  const fg = Store.get('fgMeta', null);
  if (!fg || !fg.recurring || !fg.recurring.length) return '';
  const have = new Set(Finance.fixed().map(f => f.name.toLowerCase()));
  const open = fg.recurring.filter(r => !have.has(String(r.name).toLowerCase()) && !(Store.get('fgIgnored', []) || []).includes(r.key));
  if (!open.length) return '';
  return `<div class="card ${cls}"${spaced ? ' style="margin-bottom:16px"' : ''}><div class="card-head"><h2>${icon('calendar')}Wiederkehrend laut Konto</h2><span class="muted small">aus deinen Kontoumsätzen</span></div>
    <div class="list wrap-sub">${open.slice(0, 8).map(r => `<div class="li"><div class="li-main"><div class="li-title">${esc(r.name)}</div><div class="li-sub">in ${r.count} Monaten · zuletzt ${fmtDate(r.last)}</div></div>
      <span class="li-end">${eur(r.amount)}</span><button class="btn btn-s" data-act="fgTake" data-k="${esc(r.key)}">Übernehmen</button><button class="set-del" data-act="fgIgnore" data-k="${esc(r.key)}" aria-label="Nicht übernehmen">${icon('x', 'ic-s')}</button></div>`).join('')}</div></div>`;
}
const FIX_GUESS = [['Wohnen', /miete|nebenkosten|hausgeld|rundfunk|beitragsservice/i], ['Energie', /strom|gas|energie|stadtwerke|eon|e\.on|vattenfall|enbw|tibber/i], ['Versicherung', /versicherung|allianz|huk|ergo|axa|devk|generali|signal iduna/i],
  ['Kommunikation', /telekom|vodafone|o2|telefonica|1&1|congstar|internet|mobilfunk/i], ['Sport', /wellpass|egym|fitness|urban sports|mcfit/i], ['Mobilität', /bahn|deutschlandticket|mvv|leasing|kfz/i], ['Abos', /netflix|spotify|disney|amazon prime|apple|youtube|dazn|wow|sky|icloud|google/i]];
A.fgTake = el => {
  const r = (Store.get('fgMeta', {}).recurring || []).find(x => x.key === el.dataset.k);
  if (!r) return;
  const g = FIX_GUESS.find(([, re]) => re.test(r.name));
  Finance.saveFixed(Finance.fixed().concat([{ id: uid(), name: r.name, amount: r.amount, interval: 'm', cat: g ? g[0] : 'Sonstiges', day: +r.last.slice(8) || '', startMonth: '', note: 'aus Kontoumsätzen', active: true }]));
  toast(`${r.name} als Fixkosten übernommen`); rerender();
};
A.fgIgnore = el => { Store.set('fgIgnored', (Store.get('fgIgnored', []) || []).concat([el.dataset.k])); rerender(); };

/* ---------- Zählerstände ---------- */
function meterStats(type) {
  const r = Finance.meters().filter(x => x.type === type);
  if (r.length < 2) return { r, perDay: 0 };
  const a = r[0], b = r[r.length - 1], days = Math.max(1, daysBetween(a.date, b.date));
  return { r, perDay: (b.value - a.value) / days };
}
function renderMeters() {
  const prices = Finance.prices();
  const used = METERS.filter(m => Finance.meters().some(x => x.type === m[0]));
  return `<div class="row-between wrap" style="margin-bottom:16px"><p class="muted">Tipp: Bei der Wohnungsübergabe alle Zähler mit Foto festhalten und hier eintragen</p>
      <button class="btn btn-primary" data-act="meterNew">${icon('plus')}Zählerstand</button></div>
    <div class="grid">${used.map(([type, name, unit, ic]) => {
      const st = meterStats(type), last = st.r[st.r.length - 1], price = prices[type] || 0;
      const pts = st.r.map(x => ({ x: parseKey(x.date).getTime(), y: x.value, tip: `<b>${fmt(x.value, 1)} ${unit}</b><br>${esc(fmtDate(x.date, { plain: true, day: true }))}` }));
      return `<div class="card span-6"><div class="card-head"><h2>${icon(ic)}${name}</h2><span class="muted small">zuletzt ${fmtDate(last.date)}</span></div>
        <div class="nutri-grid" style="grid-template-columns:repeat(3,minmax(0,1fr));margin-bottom:12px">
          <div><b>${fmt(last.value, 1)}</b><span>${unit} Stand</span></div>
          <div><b>${st.perDay ? fmt(st.perDay, 2) : '–'}</b><span>${unit} pro Tag</span></div>
          <div><b>${st.perDay ? fmt(st.perDay * 365) : '–'}</b><span>${unit} im Jahr${price && st.perDay ? ' ≈ ' + eur(st.perDay * 365 * price) : ''}</span></div></div>
        ${Charts.slot({ type: 'line', points: pts, height: 160, label: name + ' Zählerstand', yFmt: v => fmt(v), empty: 'Ab zwei Ablesungen siehst du den Verbrauch.' })}
        <div class="list" style="margin-top:8px">${st.r.slice().reverse().slice(0, 5).map((x, i, arr) => { const prev = arr[i + 1]; return `<div class="li"><span class="li-main">${fmtDate(x.date, { day: true })}</span><span class="li-end">${fmt(x.value, 1)} ${unit}${prev ? `<div class="li-sub">+${fmt(x.value - prev.value, 1)} in ${daysBetween(prev.date, x.date)} T.</div>` : ''}</span><button class="set-del" data-act="meterDel" data-id="${x.id}" aria-label="Ablesung löschen">${icon('x', 'ic-s')}</button></div>`; }).join('')}</div>
        <div class="row" style="margin-top:8px"><span class="small muted">Preis je ${unit}:</span><input class="set-in" style="max-width:92px" inputmode="decimal" aria-label="Preis je ${unit} in Euro" placeholder="0,32" value="${price ? fmt(price, 4) : ''}" data-change="meterPrice" data-t="${type}"><span class="small muted">€</span></div></div>`;
    }).join('') || `<div class="card span-12">${emptyState('meter', 'Noch keine Zählerstände', `<button class="btn btn-primary" data-act="meterNew">Ersten Zählerstand eintragen</button>`)}</div>`}</div>`;
}
A.meterNew = () => Sheet.open(`${sheetHead('Zählerstand eintragen')}
  <form class="stack" data-submit="meterSave"><div class="fields"><label class="field">Zähler<select class="input" name="type">${METERS.map(m => `<option value="${m[0]}">${m[1]} (${m[2]})</option>`).join('')}</select></label>
  <label class="field">Datum<input class="input" type="date" name="date" value="${todayKey()}" max="${todayKey()}"></label>
  <label class="field">Stand<input class="input" name="value" inputmode="decimal" required autofocus></label></div>
  <div class="sheet-actions"><button type="button" class="btn" data-act="closeSheet">Abbrechen</button><button class="btn btn-primary">Speichern</button></div></form>`);
A.meterSave = f => {
  const d = formData(f), v = num(d.value);
  if (!(v >= 0) || d.value.trim() === '') return toast('Bitte den Zählerstand eingeben');
  Store.set('zaehler', (Store.get('zaehler', []) || []).concat([{ id: uid(), type: d.type, date: d.date || todayKey(), value: v }]));
  Sheet.close(); toast('Zählerstand gespeichert');
  if (route().sub === 'zaehler') rerender(); else go('finanzen/zaehler');
};
A.meterDel = el => { Store.set('zaehler', (Store.get('zaehler', []) || []).filter(x => x.id !== el.dataset.id)); rerender(); };
A.meterPrice = el => { const p = Object.assign({}, Finance.prices()); p[el.dataset.t] = num(el.value); Store.set('zaehlerPreise', p); rerender(); };

V.finanzen = {
  render(r) {
    const body = { '': renderFinDash, ausgaben: renderSpending, fixkosten: renderFixed, zaehler: renderMeters }[r.sub] || renderFinDash;
    return pageHead('Finanzen', '') + tabs('finanzen', [['', 'Übersicht'], ['ausgaben', 'Ausgaben'], ['fixkosten', 'Fixkosten'], ['zaehler', 'Zähler']], r.sub) + body();
  }
};

/* =====================================================================
   Kontoumsätze in die Finanzen übernehmen: CSV aus dem Online-Banking
   (Sparkasse, Volksbank, DKB, ING, N26, Comdirect, Commerzbank, Postbank …)
   oder der Finanzguru-Export (.xlsx/.csv, nur mit Finanzguru Plus)
   ===================================================================== */
const FgImport = (() => {
  const norm = s => String(s || '').toLowerCase().replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue').replace(/ß/g, 'ss').replace(/[^a-z0-9]/g, '');
  const COLS = {
    date: ['buchungstag', 'buchungsdatum', 'buchung', 'bookingdate', 'datum', 'date', 'valutadatum', 'valuta', 'wertstellung'],
    amount: ['betrag', 'betrageur', 'umsatzineur', 'umsatz', 'amounteur', 'amount'],
    payee: ['beguenstigterauftraggeber', 'beguenstigterzahlungspflichtiger', 'auftraggeberempfaenger', 'namezahlungsbeteiligter', 'zahlungsbeteiligter',
      'beguenstigter', 'auftraggeber', 'empfaenger', 'zahlungsempfaenger', 'partnername', 'payee', 'name', 'gegenpartei'],
    payeeOut: ['zahlungsempfaengerin', 'zahlungsempfaenger'],      // DKB: getrennte Spalten für Empfänger …
    payeeIn: ['zahlungspflichtiger', 'zahlungspflichtige'],        // … und Zahler
    memo: ['verwendungszweck', 'paymentreference', 'beschreibung', 'buchungstext'],
    kind: ['buchungstext', 'umsatzart', 'umsatztyp', 'vorgang', 'transactiontype', 'type'],
    account: ['namereferenzkonto', 'referenzkonto', 'auftragskonto', 'bezeichnungauftragskonto', 'kontoname', 'konto'],
    category: ['analysehauptkategorie', 'hauptkategorie', 'kategorie', 'analysekategorie', 'category'],
    sub: ['analyseunterkategorie', 'unterkategorie'],
    contract: ['analysevertrag', 'vertrag', 'vertragsname']
  };

  /* ---------- Excel lesen (ZIP + XML) ---------- */
  async function readXlsx(buf) {
    const text = async name => { try { return new TextDecoder().decode(await NoopBak.unzipEntry(buf, n => n === name)); } catch (e) { return null; } };
    const parse = s => new DOMParser().parseFromString(s, 'application/xml');
    const shared = [];
    const ss = await text('xl/sharedStrings.xml');
    if (ss) Array.from(parse(ss).getElementsByTagName('si')).forEach(si => shared.push(Array.from(si.getElementsByTagName('t')).map(t => t.textContent).join('')));
    let sheetPath = 'xl/worksheets/sheet1.xml';
    const wb = await text('xl/workbook.xml'), rels = await text('xl/_rels/workbook.xml.rels');
    if (wb && rels) {
      const first = parse(wb).getElementsByTagName('sheet')[0];
      const rid = first && (first.getAttribute('r:id') || first.getAttributeNS('http://schemas.openxmlformats.org/officeDocument/2006/relationships', 'id'));
      const rel = Array.from(parse(rels).getElementsByTagName('Relationship')).find(r => r.getAttribute('Id') === rid);
      if (rel) sheetPath = 'xl/' + rel.getAttribute('Target').replace(/^\/?xl\//, '').replace(/^\//, '');
    }
    const sheet = await text(sheetPath);
    if (!sheet) throw new Error('In der Excel-Datei fehlt das Tabellenblatt.');
    const rows = [];
    Array.from(parse(sheet).getElementsByTagName('row')).forEach(row => {
      const out = [];
      Array.from(row.getElementsByTagName('c')).forEach(c => {
        const ref = c.getAttribute('r') || '', col = ref.replace(/\d+/g, '');
        let idx = 0;
        for (const ch of col) idx = idx * 26 + (ch.charCodeAt(0) - 64);
        const t = c.getAttribute('t'), v = c.getElementsByTagName('v')[0];
        let val;
        if (t === 's') val = shared[+v.textContent];
        else if (t === 'inlineStr') val = Array.from(c.getElementsByTagName('t')).map(x => x.textContent).join('');
        else if (t === 'b') val = v ? v.textContent === '1' : '';
        else if (t === 'str' || t === 'e') val = v ? v.textContent : '';
        else val = v ? +v.textContent : '';
        out[(idx || out.length + 1) - 1] = val;
      });
      rows.push(Array.from(out, x => x === undefined ? '' : x));
    });
    return rows;
  }

  /* ---------- CSV lesen (; oder , oder Tab, Anführungszeichen) ---------- */
  function readCsv(text) {
    text = text.replace(/^﻿/, '');
    const first = text.split(/\r?\n/).find(l => l.trim()) || '';
    const delim = [';', '\t', ','].sort((a, b) => first.split(b).length - first.split(a).length)[0];
    const rows = [];
    let row = [], cur = '', q = false;
    for (let i = 0; i < text.length; i++) {
      const ch = text[i];
      if (q) {
        if (ch === '"' && text[i + 1] === '"') { cur += '"'; i++; } else if (ch === '"') q = false; else cur += ch;
      } else if (ch === '"') q = true;
      else if (ch === delim) { row.push(cur); cur = ''; }
      else if (ch === '\n' || ch === '\r') { if (ch === '\r' && text[i + 1] === '\n') i++; row.push(cur); rows.push(row); row = []; cur = ''; }
      else cur += ch;
    }
    if (cur || row.length) { row.push(cur); rows.push(row); }
    return rows;
  }

  /* ---------- Werte umwandeln ---------- */
  function toAmount(v) {
    if (typeof v === 'number') return v;
    let s = String(v || '').replace(/[€\s]|EUR/gi, '');
    if (!s) return NaN;
    if (/,\d{1,2}$/.test(s)) s = s.replace(/\./g, '').replace(',', '.');   // 1.234,56
    else if (/^[-+]?\d{1,3}(\.\d{3})+$/.test(s)) s = s.replace(/\./g, ''); // 2.800 (Tausenderpunkt ohne Cent)
    else s = s.replace(/,/g, '');                                           // 1,234.56
    return parseFloat(s);
  }
  function toDate(v) {
    if (typeof v === 'number' && v > 20000 && v < 80000) {                // Excel-Seriennummer
      const d = new Date(Date.UTC(1899, 11, 30) + Math.round(v) * 864e5);
      return `${d.getUTCFullYear()}-${pad2(d.getUTCMonth() + 1)}-${pad2(d.getUTCDate())}`;
    }
    const s = String(v || '').trim();
    let m = s.match(/^(\d{1,2})\.(\d{1,2})\.(\d{2,4})/);
    if (m) return `${m[3].length === 2 ? '20' + m[3] : m[3]}-${pad2(+m[2])}-${pad2(+m[1])}`;
    m = s.match(/^(\d{4})-(\d{2})-(\d{2})/);
    if (m) return `${m[1]}-${m[2]}-${m[3]}`;
    return null;
  }

  /* ---------- Kategorien ---------- */
  const RULES = [
    ['lebensmittel', /rewe|edeka|aldi|lidl|netto|penny|kaufland|norma|tegut|globus|\breal\b|bäck|baeck|backhaus|metzger|supermarkt|lebensmittel|hit markt|denns|alnatura|bio company/],
    ['essen', /restaurant|lieferando|wolt|uber ?eats|mc ?donald|burger king|starbucks|caf[eé]|pizza|d[öo]ner|kebab|imbiss|gastro|sushi|bar\b|biergarten|essen & trinken|essen und trinken|restaurants/],
    ['einrichtung', /ikea|m[öo]bel|xxxlutz|poco|segm[üu]ller|hornbach|obi\b|bauhaus|toom|home24|depot|wohnen & einrichtung|einrichtung|baumarkt/],
    ['haushalt', /dm[- ]drogerie|\bdm\b|rossmann|m[üu]ller drogerie|drogerie m[üu]ller|drogerie|haushalt|amazon/],
    ['mobil', /tank|aral|shell|esso|\bjet\b|totalenergies|deutsche bahn|db vertrieb|\bbahn\b|mvv|mvg|hvv|bvg|uber\b|bolt|tier|lime|sixt|share now|parken|park|flixbus|mobilit|verkehr|auto/],
    ['sport', /wellpass|egym|fitness|decathlon|urban sports|sportscheck|sport/],
    ['kleidung', /zalando|h&m|\bzara\b|about you|primark|c&a|snipes|nike|adidas|kleidung|mode|bekleidung/],
    ['gesundheit', /apotheke|arzt|zahnarzt|praxis|docmorris|shop apotheke|gesundheit|optiker|krankenhaus/],
    ['freizeit', /kino|cinema|steam|playstation|nintendo|eventim|ticket|museum|freizeit|urlaub|reise|hotel|airbnb|booking|unterhaltung|hobby/],
    ['geschenke', /geschenk|spende/]
  ];
  const TRANSFER = /umbuchung|übertrag|uebertrag|eigene? konten|sparen|sparplan|geldanlage|depot|trade republic|scalable|tagesgeld|kreditkartenabrechnung|kreditkarte ausgleich/;
  function category(t) {
    const hay = `${t.cat || ''} ${t.sub || ''} ${t.payee || ''} ${t.memo || ''}`.toLowerCase();
    const r = RULES.find(([, re]) => re.test(hay));
    return r ? r[0] : 'sonst';
  }
  const hash = s => { let h = 5381; for (let i = 0; i < s.length; i++) h = ((h << 5) + h + s.charCodeAt(i)) >>> 0; return h.toString(36); };

  /* ---------- Hauptfunktion ---------- */
  async function read(file) {
    const buf = await file.arrayBuffer();
    const isZip = new Uint8Array(buf, 0, 2)[0] === 0x50 && new Uint8Array(buf, 0, 2)[1] === 0x4b;
    const rows = isZip ? await readXlsx(buf) : readCsv(new TextDecoder(isUtf8(buf) ? 'utf-8' : 'windows-1252').decode(buf));
    // Kopfzeile suchen: die erste Zeile mit Datum und Betrag
    let hi = -1, map = null;
    for (let i = 0; i < Math.min(rows.length, 40); i++) {
      const h = rows[i].map(norm), m = {}, used = new Set();
      Object.keys(COLS).forEach(k => {
        for (const syn of COLS[k]) { const j = h.indexOf(syn); if (j >= 0 && !(used.has(j) && k !== 'kind')) { m[k] = j; if (k !== 'kind') used.add(j); break; } }
      });
      if (m.date != null && m.amount != null) { hi = i; map = m; break; }
    }
    if (hi < 0) throw new Error('Keine Spalten für Datum und Betrag gefunden. Ist das der Umsatz-Export (CSV) deiner Bank?');
    const tx = [];
    let skipped = 0;
    rows.slice(hi + 1).forEach(r => {
      const date = toDate(r[map.date]), amount = toAmount(r[map.amount]);
      if (!date || !isFinite(amount) || amount === 0) return;
      const t = { date, amount: Math.round(amount * 100) / 100 };
      ['payee', 'memo', 'kind', 'account', 'category', 'sub', 'contract'].forEach(k => { if (map[k] != null && r[map[k]] !== '' && r[map[k]] != null) t[k === 'category' ? 'cat' : k] = String(r[map[k]]).trim().replace(/\s+/g, ' ').slice(0, k === 'memo' ? 90 : 60); });
      const side = amount < 0 ? map.payeeOut : map.payeeIn;
      if (!t.payee && side != null && r[side]) t.payee = String(r[side]).trim().slice(0, 60);
      if (TRANSFER.test(`${t.cat || ''} ${t.sub || ''} ${t.kind || ''} ${t.memo || ''}`.toLowerCase())) { skipped++; return; }
      tx.push(t);
    });
    return { tx, skipped };
  }
  function isUtf8(buf) { try { new TextDecoder('utf-8', { fatal: true }).decode(buf); return true; } catch (e) { return false; } }

  // Wiederkehrende Abbuchungen (Verträge): gleicher Empfänger in mindestens 3 Monaten, fast gleicher
  // Betrag (±3 %) und ähnlicher Tag im Monat; Alltagskäufe (Lebensmittel, Essen, Tanken …) zählen nicht
  const DAILY = new Set(['lebensmittel', 'essen', 'mobil', 'haushalt', 'kleidung', 'einrichtung', 'gesundheit']);
  function recurring(tx) {
    const by = {};
    tx.filter(t => t.amount < 0 && (t.payee || t.contract)).forEach(t => { const k = norm(t.contract || t.payee); (by[k] = by[k] || []).push(t); });
    const out = [];
    Object.keys(by).forEach(k => {
      const list = by[k], months = new Set(list.map(t => t.date.slice(0, 7)));
      if (months.size < 3) return;
      const isContract = list.some(t => t.contract);
      const amounts = list.map(t => -t.amount).sort((a, b) => a - b), med = amounts[Math.floor(amounts.length / 2)];
      if (!isContract && med < 150 && DAILY.has(category(list[0]))) return;
      const days = list.map(t => +t.date.slice(8));
      if (!isContract && (amounts.filter(a => Math.abs(a - med) <= med * 0.03).length < months.size * 0.75 || Math.max(...days) - Math.min(...days) > 6)) return;
      out.push({ key: k, name: list[0].contract || list[0].payee, amount: Math.round(med * 100) / 100, count: months.size, last: list.map(t => t.date).sort().pop() });
    });
    return out.sort((a, b) => b.amount - a.amount);
  }

  // Ins Dashboard übernehmen: Ausgaben und Einnahmen in die Monats-Eimer, doppelte erkennen
  function apply(res, fileName) {
    const rec = recurring(res.tx), recKeys = new Set(rec.map(r => r.key));
    const buckets = {};
    let added = 0, dup = 0;
    res.tx.forEach(t => {
      const id = 'fg-' + hash([t.date, t.amount, t.payee, t.memo, t.account].join('|'));
      const key = 'a-' + t.date.slice(0, 7);
      const b = buckets[key] = buckets[key] || (Store.get(key, []) || []).slice();
      if (b.some(x => x.id === id)) { dup++; return; }
      const isFix = t.amount < 0 && recKeys.has(norm(t.contract || t.payee));
      b.push({ id, src: 'fg', date: t.date, ts: 0, amount: Math.abs(t.amount), inc: t.amount > 0 || undefined,
        cat: t.amount > 0 ? 'einnahme' : isFix ? 'fix' : category(t), note: t.payee || t.memo || '', memo: t.memo || '', account: t.account || '' });
      added++;
    });
    Object.keys(buckets).forEach(k => Store.set(k, buckets[k]));
    const dates = res.tx.map(t => t.date).sort();
    Store.set('fgMeta', { loaded: Date.now(), file: fileName, from: dates[0], to: dates[dates.length - 1], count: res.tx.length, added, dup, skipped: res.skipped, recurring: rec.slice(0, 40) });
    return { added, dup, skipped: res.skipped, recurring: rec.length };
  }
  return { read, apply, readCsv, toAmount, toDate, category, recurring };
})();

A.fgLoad = async el => {
  const file = el.files && el.files[0];
  if (!file) return;
  toast('Umsätze werden gelesen …');
  try {
    const r = FgImport.apply(await FgImport.read(file), file.name);
    toast(`${r.added} Umsätze übernommen${r.dup ? `, ${r.dup} schon vorhanden` : ''}${r.skipped ? `, ${r.skipped} Umbuchungen ausgelassen` : ''}`);
    rerender();
  } catch (e) {
    toast(e && e.message ? e.message : 'Die Datei konnte nicht gelesen werden');
  }
  el.value = '';
};
const fgLoadBtn = (label, cls, raw) => `<label class="${cls || 'btn'}" style="cursor:pointer">${raw ? '' : icon('sync')}${label}<input type="file" accept=".csv,.txt,.xlsx,text/csv,text/plain,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" data-change="fgLoad" hidden></label>`;

/* =====================================================================
   Planer: Kalender, Aufgaben, Einkaufsliste
   ===================================================================== */
const TASK_LISTS = ['Privat', 'Wohnung', 'Umzug'];
const REPEATS = { '': 'nie', d: 'täglich', w: 'wöchentlich', m: 'monatlich', y: 'jährlich' };
const SHOP_CATS = [
  ['Obst & Gemüse', /apfel|äpfel|banane|tomate|gurke|salat|paprika|zwiebel|kartoffel|beere|zitrone|avocado|brokkoli|karotte|möhre|spinat|pilz|champignon|knoblauch|ingwer|obst|gemüse|orange|mango|kiwi|traube|zucchini/],
  ['Brot & Backwaren', /brot|brötchen|toast|brezel|croissant|semmel|wrap|tortilla/],
  ['Kühlregal', /milch|joghurt|quark|skyr|käse|butter|sahne|\beier?\b|frischkäse|mozzarella|feta|hafermilch|aufschnitt/],
  ['Fleisch & Fisch', /hähnchen|huhn|pute|hack|steak|lachs|thunfisch|wurst|schinken|salami|fisch|fleisch|garnele/],
  ['Vorrat', /nudel|pasta|reis|mehl|zucker|öl\b|essig|hafer|müsli|linsen|bohnen|dose|gewürz|salz|pfeffer|honig|marmelade|erdnuss|soße|sauce|protein|nüsse|mandel/],
  ['Getränke', /wasser|saft|cola|bier|wein|kaffee|tee\b|limo|spezi|schorle/],
  ['Tiefkühl', /\btk\b|tiefkühl|pizza|eis\b|pommes/],
  ['Drogerie', /zahnpasta|zahnbürste|shampoo|duschgel|deo|rasier|klopapier|toilettenpapier|taschentücher|creme|seife|pflaster/],
  ['Haushalt', /spülmittel|müllbeutel|müll|schwamm|waschmittel|küchenrolle|alufolie|backpapier|batterie|glühbirne|putz|reiniger|tabs/]
];
// Längster Treffer gewinnt („Zahnpasta“ → Drogerie statt „Pasta“ → Vorrat)
const shopCat = name => {
  const n = name.toLowerCase();
  let best = null;
  SHOP_CATS.forEach(([cat, re]) => { const m = n.match(re); if (m && (!best || m[0].length > best.len)) best = { cat, len: m[0].length }; });
  return best ? best.cat : 'Sonstiges';
};
const MOVE_TASKS = [
  ['Internetanschluss für die neue Wohnung beauftragen', -35], ['Umzugshelfer und Transporter organisieren', -28], ['Stromvertrag für die neue Wohnung abschließen', -21],
  ['Umzugskartons besorgen', -14], ['Nachsendeauftrag bei der Post einrichten', -10], ['Hausratversicherung auf neue Adresse umstellen', -3],
  ['Zählerstände bei der Übergabe mit Foto festhalten', 0], ['Übergabeprotokoll prüfen und unterschreiben', 0], ['Namen an Briefkasten und Klingel anbringen', 2],
  ['Ummelden beim Bürgeramt (Frist: 2 Wochen)', 7], ['Abfuhrkalender und Mülltonnen klären', 7], ['Rundfunkbeitrag auf neue Adresse ändern', 14],
  ['Neue Adresse an Bank, Arbeitgeber, Krankenkasse und Versicherungen', 14], ['Smart-Home-Box (Raspberry Pi) einrichten', 21]
];

const Planner = {
  tasks() { return Store.get('tasks', []) || []; },
  saveTasks(a) { Store.set('tasks', a); },
  events() { return Store.get('events', []) || []; },
  saveEvents(a) { Store.set('events', a); },
  shopping() { return Store.get('shopping', []) || []; },
  saveShopping(a) { Store.set('shopping', a); },
  open() { return this.tasks().filter(t => !t.done); },
  due(k) { return this.open().filter(t => t.due && t.due <= k); },
  eventsOn(k) {
    const d = parseKey(k);
    return this.events().filter(e => {
      if (e.date === k) return true;
      if (!e.repeat || k < e.date) return false;
      const s = parseKey(e.date);
      if (e.repeat === 'd') return true;
      if (e.repeat === 'w') return s.getDay() === d.getDay();
      if (e.repeat === 'm') return s.getDate() === d.getDate();
      if (e.repeat === 'y') return s.getDate() === d.getDate() && s.getMonth() === d.getMonth();
      return false;
    }).sort((a, b) => (a.time || '') < (b.time || '') ? -1 : 1);
  },
  nextEvent() {
    const t = todayKey(), now = `${pad2(new Date().getHours())}:${pad2(new Date().getMinutes())}`;
    for (let i = 0; i < 60; i++) {
      const k = addDays(t, i);
      const e = this.eventsOn(k).find(x => i > 0 || !x.time || x.time >= now);
      if (e) return { e, k };
    }
    return null;
  }
};
function sortTasks(a) {
  return a.slice().sort((x, y) => (x.done - y.done) || ((x.due || '9999') < (y.due || '9999') ? -1 : (x.due || '9999') > (y.due || '9999') ? 1 : 0) || (y.prio || 0) - (x.prio || 0) || x.created - y.created);
}
function taskRow(t) {
  const over = t.due && t.due < todayKey() && !t.done;
  return `<div class="task${t.done ? ' done' : ''}"><button class="chk${t.done ? ' on' : ''}" data-act="taskToggle" data-id="${t.id}" aria-label="${t.done ? 'Als offen markieren' : 'Erledigt'}" aria-pressed="${!!t.done}">${icon('check', 'ic-s')}</button>
    <button class="task-main" data-act="taskEdit" data-id="${t.id}"><span class="li-title">${t.prio ? '<span class="prio-dot" aria-label="wichtig"></span>' : ''}${esc(t.title)}</span>
    <span class="li-sub">${esc(t.list || 'Privat')}${t.due ? ` · <span class="${over ? 'overdue' : ''}">${fmtDate(t.due, { day: true })}</span>` : ''}${t.repeat ? ' · ' + REPEATS[t.repeat] : ''}</span></button></div>`;
}
function eventRow(e, k) {
  return `<button class="li" data-act="eventEdit" data-id="${e.id}"><span class="ev-time">${e.time ? esc(e.time) : 'ganztägig'}</span><div class="li-main"><div class="li-title">${esc(e.title)}</div>
    <div class="li-sub">${[e.place, e.repeat ? REPEATS[e.repeat] : '', k && k !== todayKey() ? fmtDate(k, { day: true }) : ''].filter(Boolean).map(esc).join(' · ') || '&nbsp;'}</div></div></button>`;
}

/* ---------- Übersicht ---------- */
function renderPlanDash() {
  const t = todayKey(), evToday = Planner.eventsOn(t), due = sortTasks(Planner.due(t));
  const shop = Planner.shopping().filter(s => !s.done);
  const week = [];
  for (let i = 1; i <= 7; i++) {
    const k = addDays(t, i), ev = Planner.eventsOn(k), ts = Planner.open().filter(x => x.due === k);
    if (ev.length || ts.length) week.push({ k, ev, ts });
  }
  return `<form class="row" data-submit="taskQuick" style="margin-bottom:16px"><input class="input grow" name="title" placeholder="Aufgabe für heute" autocomplete="off" aria-label="Neue Aufgabe"><button class="btn btn-primary">${icon('plus')}<span class="desktop-only">Aufgabe</span></button></form>
    <div class="grid">
      <div class="card span-6"><div class="card-head"><h2>${icon('calendar')}Heute</h2><span class="muted small">${DAYS_LONG[new Date().getDay()]}, ${fmtDate(t, { plain: true })}</span></div>
        ${evToday.length ? `<div class="list">${evToday.map(e => eventRow(e)).join('')}</div>` : ''}
        ${due.length ? `<div class="tasks" style="margin-top:${evToday.length ? 10 : 0}px">${due.map(taskRow).join('')}</div>` : ''}
        ${!evToday.length && !due.length ? '<p class="empty">Heute steht nichts an</p>' : ''}
        <div class="row" style="margin-top:12px"><button class="btn btn-s" data-act="eventNew" data-d="${t}">${icon('plus', 'ic-s')}Termin</button><a class="btn btn-s btn-ghost" href="#/planer/kalender">Kalender</a></div></div>
      <div class="card span-6"><div class="card-head"><h2>${icon('cart')}Einkaufsliste</h2><a class="btn btn-ghost btn-s" href="#/planer/einkauf">${shop.length} offen</a></div>
        <form class="row" data-submit="shopAdd" style="margin-bottom:8px"><input class="input grow" name="name" placeholder="Was fehlt" autocomplete="off" aria-label="Artikel hinzufügen"></form>
        <div class="tasks">${shop.slice(0, 8).map(shopRow).join('') || '<p class="empty">Alles da</p>'}</div></div>
      <div class="card span-12"><div class="card-head"><h2>${icon('list')}Nächste 7 Tage</h2><a class="btn btn-ghost btn-s" href="#/planer/aufgaben">Alle Aufgaben</a></div>
        ${week.map(d => `<p class="stat-label" style="margin:12px 4px 4px">${fmtDate(d.k, { day: true })}</p>${d.ev.length ? `<div class="list">${d.ev.map(e => eventRow(e)).join('')}</div>` : ''}<div class="tasks">${d.ts.map(taskRow).join('')}</div>`).join('') || '<p class="empty">Keine Termine oder fälligen Aufgaben in den nächsten sieben Tagen</p>'}</div>
    </div>`;
}

/* ---------- Aufgaben ---------- */
let taskFilter = Local.get('taskFilter', ''), showDone = false;
function renderTasks() {
  const lists = Array.from(new Set(TASK_LISTS.concat(Planner.tasks().map(t => t.list).filter(Boolean))));
  const all = sortTasks(Planner.tasks().filter(t => !taskFilter || t.list === taskFilter));
  const open = all.filter(t => !t.done), done = all.filter(t => t.done);
  return `<form class="row" data-submit="taskQuick" style="margin-bottom:12px"><input class="input grow" name="title" placeholder="Neue Aufgabe" autocomplete="off" aria-label="Neue Aufgabe"><input type="hidden" name="list" value="${esc(taskFilter)}"><button class="btn btn-primary">${icon('plus')}<span class="desktop-only">Hinzufügen</span></button></form>
    <div class="row-between wrap" style="margin-bottom:16px"><div class="chips">${[''].concat(lists).map(l => `<button class="chip chip-btn${l === taskFilter ? ' active' : ''}" data-act="taskFilter" data-l="${esc(l)}">${l ? esc(l) : 'Alle'} <span class="muted">${Planner.open().filter(t => !l || t.list === l).length}</span></button>`).join('')}</div>
      <button class="btn btn-s" data-act="moveList">${icon('tasks', 'ic-s')}Umzugs-Checkliste</button></div>
    <div class="card"><div class="tasks">${open.map(taskRow).join('') || '<p class="empty">Keine offenen Aufgaben</p>'}</div>
      ${done.length ? `<button class="btn btn-ghost btn-s" style="margin-top:12px" data-act="toggleDone">${showDone ? 'Erledigte ausblenden' : `${done.length} erledigte anzeigen`}</button>${showDone ? `<div class="tasks">${done.map(taskRow).join('')}</div><button class="btn btn-ghost btn-s btn-danger" data-act="clearDone">Erledigte löschen</button>` : ''}` : ''}</div>`;
}
A.taskFilter = el => { taskFilter = el.dataset.l; Local.set('taskFilter', taskFilter); rerender(); };
A.toggleDone = () => { showDone = !showDone; rerender(); };
A.clearDone = () => confirmSheet('Erledigte löschen?', 'Erledigte Aufgaben werden endgültig entfernt.', 'Löschen', () => { Planner.saveTasks(Planner.tasks().filter(t => !t.done || taskFilter && t.list !== taskFilter)); rerender(); }, true);
A.taskQuick = f => {
  const d = formData(f), title = d.title.trim();
  if (!title) return;
  const onDash = route().sub === '';
  Planner.saveTasks(Planner.tasks().concat([{ id: uid(), title, list: d.list || (onDash ? 'Privat' : taskFilter || 'Privat'), due: onDash ? todayKey() : '', prio: 0, done: false, repeat: '', note: '', created: Date.now() }]));
  rerender();
  const i = $('input[name="title"]'); if (i) i.focus();
};
A.taskToggle = el => {
  const a = Planner.tasks().map(t => Object.assign({}, t));
  const t = a.find(x => x.id === el.dataset.id);
  if (!t) return;
  if (!t.done && t.repeat && t.due) {
    const n = { d: () => addDays(t.due, 1), w: () => addDays(t.due, 7), m: () => { const x = parseKey(t.due); x.setMonth(x.getMonth() + 1); return dkey(x); }, y: () => { const x = parseKey(t.due); x.setFullYear(x.getFullYear() + 1); return dkey(x); } }[t.repeat]();
    t.due = n; toast('Erledigt · nächstes Mal ' + fmtDate(n, { day: true }));
  } else { t.done = !t.done; t.doneAt = t.done ? Date.now() : null; }
  Planner.saveTasks(a); rerender();
};
A.taskEdit = el => {
  const t = Planner.tasks().find(x => x.id === el.dataset.id);
  if (t) taskSheet(clone(t), false);
};
function taskSheet(t, isNew) {
  const lists = Array.from(new Set(TASK_LISTS.concat(Planner.tasks().map(x => x.list).filter(Boolean))));
  Sheet.open(`${sheetHead(isNew ? 'Neue Aufgabe' : 'Aufgabe bearbeiten')}
    <form class="stack" data-submit="taskSave"><input type="hidden" name="id" value="${t.id}">
      <label class="field">Aufgabe<input class="input" name="title" value="${esc(t.title)}" required></label>
      <div class="fields"><label class="field">Liste<input class="input" name="list" value="${esc(t.list || 'Privat')}" list="taskLists"><datalist id="taskLists">${lists.map(l => `<option value="${esc(l)}"></option>`).join('')}</datalist></label>
        <label class="field">Fällig am<input class="input" type="date" name="due" value="${t.due || ''}"></label>
        <label class="field">Wiederholen<select class="input" name="repeat">${Object.keys(REPEATS).map(k => `<option value="${k}"${k === (t.repeat || '') ? ' selected' : ''}>${REPEATS[k]}</option>`).join('')}</select></label></div>
      <label class="check"><input type="checkbox" name="prio"${t.prio ? ' checked' : ''}> Wichtig</label>
      <label class="field">Notiz<textarea class="input" name="note">${esc(t.note || '')}</textarea></label>
      <div class="sheet-actions">${isNew ? '' : `<button type="button" class="btn btn-danger" data-act="taskDelete" data-id="${t.id}">${icon('trash')}Löschen</button>`}<button type="button" class="btn" data-act="closeSheet">Abbrechen</button><button class="btn btn-primary">Speichern</button></div></form>`);
}
A.taskNew = el => taskSheet({ id: uid(), title: '', list: taskFilter || 'Privat', due: el && el.dataset && el.dataset.d || '', prio: 0, done: false, repeat: '', note: '', created: Date.now() }, true);
A.taskSave = f => {
  const d = formData(f);
  if (!d.title.trim()) return toast('Bitte eine Aufgabe eingeben');
  const old = Planner.tasks().find(x => x.id === d.id);
  const t = Object.assign({ done: false, created: Date.now() }, old || {}, { id: d.id, title: d.title.trim(), list: d.list.trim() || 'Privat', due: d.due, repeat: d.repeat, prio: d.prio ? 1 : 0, note: d.note.trim() });
  Planner.saveTasks(Planner.tasks().filter(x => x.id !== t.id).concat([t]));
  Sheet.close(); rerender();
};
A.taskDelete = el => { Planner.saveTasks(Planner.tasks().filter(x => x.id !== el.dataset.id)); Sheet.close(); rerender(); };
A.moveList = () => Sheet.open(`${sheetHead('Umzugs-Checkliste', `${MOVE_TASKS.length} typische Aufgaben rund um den Einzug`)}
  <form class="stack" data-submit="moveListAdd"><label class="field">Übergabe- oder Umzugstag (optional)<input class="input" type="date" name="date"></label>
  <p class="small muted">Mit Datum bekommt jede Aufgabe einen passenden Termin davor oder danach. Die Aufgaben landen in der Liste „Umzug“.</p>
  <div class="sheet-actions"><button type="button" class="btn" data-act="closeSheet">Abbrechen</button><button class="btn btn-primary">Hinzufügen</button></div></form>`);
A.moveListAdd = f => {
  const date = formData(f).date;
  const have = new Set(Planner.tasks().map(t => t.title));
  const add = MOVE_TASKS.filter(([title]) => !have.has(title)).map(([title, off], i) => ({ id: uid() + i, title, list: 'Umzug', due: date ? addDays(date, off) : '', prio: off === 0 ? 1 : 0, done: false, repeat: '', note: '', created: Date.now() + i }));
  Planner.saveTasks(Planner.tasks().concat(add));
  taskFilter = 'Umzug'; Local.set('taskFilter', taskFilter);
  Sheet.close(); toast(`${add.length} Aufgaben hinzugefügt`);
  if (route().sub === 'aufgaben') rerender(); else go('planer/aufgaben');
};

/* ---------- Einkaufsliste ---------- */
function shopRow(s) {
  return `<div class="task${s.done ? ' done' : ''}"><button class="chk${s.done ? ' on' : ''}" data-act="shopToggle" data-id="${s.id}" aria-label="${s.done ? 'Wieder auf die Liste' : 'Eingekauft'}" aria-pressed="${!!s.done}">${icon('check', 'ic-s')}</button>
    <span class="task-main"><span class="li-title">${esc(s.name)}</span></span><button class="set-del" data-act="shopDel" data-id="${s.id}" aria-label="${esc(s.name)} entfernen">${icon('x', 'ic-s')}</button></div>`;
}
function renderShopping() {
  const items = Planner.shopping(), open = items.filter(s => !s.done), done = items.filter(s => s.done);
  const hist = Store.get('shopHistory', {}) || {};
  const onList = new Set(open.map(s => s.name.toLowerCase()));
  const freq = Object.keys(hist).filter(n => !onList.has(n.toLowerCase())).sort((a, b) => hist[b] - hist[a]).slice(0, 14);
  const groups = {};
  open.forEach(s => { const c = s.cat || shopCat(s.name); (groups[c] = groups[c] || []).push(s); });
  const order = SHOP_CATS.map(c => c[0]).concat(['Sonstiges']);
  return `<form class="row" data-submit="shopAdd" style="margin-bottom:12px"><input class="input grow" name="name" placeholder="Was fehlt, mehrere mit Komma" autocomplete="off" aria-label="Artikel hinzufügen"><button class="btn btn-primary">${icon('plus')}<span class="desktop-only">Hinzufügen</span></button></form>
    ${freq.length ? `<div class="chips" style="margin-bottom:16px">${freq.map(n => `<button class="chip chip-btn" data-act="shopQuick" data-n="${esc(n)}">${icon('plus', 'ic-s')}${esc(n)}</button>`).join('')}</div>` : ''}
    <div class="grid">${order.filter(c => groups[c]).map(c => `<div class="card span-4"><div class="card-head"><h2>${c}</h2><span class="muted small">${groups[c].length}</span></div><div class="tasks">${groups[c].map(shopRow).join('')}</div></div>`).join('')
      || `<div class="card span-12">${emptyState('cart', 'Die Einkaufsliste ist leer')}</div>`}
      ${done.length ? `<div class="card span-12"><div class="card-head"><h2>Im Wagen</h2><button class="btn btn-s" data-act="shopClear">Erledigte entfernen</button></div><div class="tasks">${done.map(shopRow).join('')}</div></div>` : ''}</div>`;
}
function addShopItems(text) {
  const names = text.split(/[,;\n]+/).map(s => s.trim()).filter(Boolean);
  if (!names.length) return 0;
  const items = Planner.shopping().slice(), hist = Object.assign({}, Store.get('shopHistory', {}) || {});
  names.forEach(n => {
    const name = n.charAt(0).toUpperCase() + n.slice(1);
    const ex = items.find(s => s.name.toLowerCase() === name.toLowerCase());
    if (ex) { ex.done = false; } else items.push({ id: uid() + items.length, name, cat: shopCat(name), done: false });
    hist[name] = (hist[name] || 0) + 1;
  });
  Planner.saveShopping(items.map(s => Object.assign({}, s)));
  Store.set('shopHistory', hist);
  return names.length;
}
A.shopAdd = f => { const n = addShopItems(formData(f).name); if (n) { rerender(); const i = $('input[name="name"]'); if (i) i.focus(); } };
A.shopQuick = el => { addShopItems(el.dataset.n); rerender(); };
A.shopToggle = el => { Planner.saveShopping(Planner.shopping().map(s => s.id === el.dataset.id ? Object.assign({}, s, { done: !s.done }) : s)); rerender(); };
A.shopDel = el => { Planner.saveShopping(Planner.shopping().filter(s => s.id !== el.dataset.id)); rerender(); };
A.shopClear = () => { Planner.saveShopping(Planner.shopping().filter(s => !s.done)); rerender(); };

/* ---------- Kalender ---------- */
let calMonth = todayKey().slice(0, 7), calDay = todayKey();
function renderCalendar() {
  const [y, m] = calMonth.split('-').map(Number);
  const first = `${calMonth}-01`, start = weekStart(first);
  const cells = [];
  for (let i = 0; i < 42; i++) {
    const k = addDays(start, i);
    if (i >= 35 && k.slice(0, 7) !== calMonth) break;
    cells.push(k);
  }
  const t = todayKey();
  const sel = calDay;
  const evs = Planner.eventsOn(sel), ts = Planner.tasks().filter(x => x.due === sel);
  const wos = Workouts.all().filter(w => dkey(w.start) === sel), rs = Runs.all().filter(r => dkey(r.start) === sel);
  return `<div class="grid"><div class="card span-7"><div class="card-head"><div class="date-nav"><button class="icon-btn bordered" data-act="calMonth" data-d="-1" aria-label="Vorheriger Monat">${icon('left')}</button>
      <b>${MONTHS_LONG[m - 1]} ${y}</b><button class="icon-btn bordered" data-act="calMonth" data-d="1" aria-label="Nächster Monat">${icon('right')}</button></div>
      ${calMonth !== t.slice(0, 7) ? `<button class="btn btn-s" data-act="calToday">Heute</button>` : ''}</div>
      <div class="cal" role="grid" aria-label="Kalender ${MONTHS_LONG[m - 1]}">${['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So'].map(d => `<span class="cal-wd">${d}</span>`).join('')}
      ${cells.map(k => {
        const e = Planner.eventsOn(k).length, d = Planner.open().some(x => x.due === k), sp = Workouts.all().some(w => dkey(w.start) === k) || Runs.all().some(r => dkey(r.start) === k) || NoopData.workouts().some(w => dkey(w.start) === k);
        return `<button class="cal-day${k.slice(0, 7) !== calMonth ? ' out' : ''}${k === t ? ' today' : ''}${k === sel ? ' sel' : ''}" data-act="calPick" data-d="${k}" aria-label="${fmtDate(k, { day: true, plain: true })}${e ? ', ' + e + ' Termine' : ''}">
          <span>${+k.slice(8)}</span><span class="cal-dots">${e ? '<i class="ev"></i>' : ''}${d ? '<i class="td"></i>' : ''}${sp ? '<i class="sp"></i>' : ''}</span></button>`;
      }).join('')}</div>
      <div class="legend" style="margin-top:12px"><span><i class="dot" style="background:var(--accent-mark)"></i>Termin</span><span><i class="dot" style="border:2px solid var(--ink-2)"></i>Aufgabe fällig</span><span><i class="dot" style="background:var(--s1)"></i>Sport</span></div></div>
    <div class="card span-5"><div class="card-head"><h2>${fmtDate(sel, { day: true })}</h2><div class="row"><button class="btn btn-s" data-act="taskNew" data-d="${sel}">${icon('plus', 'ic-s')}Aufgabe</button><button class="btn btn-s btn-primary" data-act="eventNew" data-d="${sel}">${icon('plus', 'ic-s')}Termin</button></div></div>
      ${evs.length ? `<div class="list">${evs.map(e => eventRow(e)).join('')}</div>` : ''}
      ${ts.length ? `<div class="tasks" style="margin-top:8px">${sortTasks(ts).map(taskRow).join('')}</div>` : ''}
      ${wos.concat(rs).length ? `<div class="list" style="margin-top:8px">${wos.map(w => `<a class="li" href="#/training/einheit/${w.id}">${icon('gym', 'ic-s')}<span class="li-main">${esc(w.name)}</span><span class="li-end muted small">${fmtTime(w.start)}</span></a>`).join('')}${rs.map(r => `<a class="li" href="#/laufen/lauf/${r.id}">${icon('run', 'ic-s')}<span class="li-main">${fmt(r.km, 1)} km ${esc(r.type || '')}</span><span class="li-end muted small">${fmtTime(r.start)}</span></a>`).join('')}</div>` : ''}
      ${!evs.length && !ts.length && !wos.length && !rs.length ? '<p class="empty">Nichts eingetragen</p>' : ''}</div></div>`;
}
A.calMonth = el => { calMonth = shiftMonth(calMonth, +el.dataset.d); calDay = calMonth === todayKey().slice(0, 7) ? todayKey() : calMonth + '-01'; rerender(); };
A.calToday = () => { calMonth = todayKey().slice(0, 7); calDay = todayKey(); rerender(); };
A.calPick = el => { calDay = el.dataset.d; calMonth = calDay.slice(0, 7); rerender(); };
let evDraft = null;
A.eventNew = el => { evDraft = { id: uid(), title: '', date: (el && el.dataset.d) || todayKey(), time: '', end: '', place: '', repeat: '', note: '' }; eventSheet(true); };
A.eventEdit = el => { const e = Planner.events().find(x => x.id === el.dataset.id); if (!e) return; evDraft = clone(e); eventSheet(false); };
function eventSheet(isNew) {
  const e = evDraft;
  Sheet.open(`${sheetHead(isNew ? 'Neuer Termin' : 'Termin bearbeiten')}
    <form class="stack" data-submit="eventSave"><label class="field">Titel<input class="input" name="title" value="${esc(e.title)}" required autofocus placeholder="z. B. Wohnungsübergabe"></label>
      <div class="fields"><label class="field">Datum<input class="input" type="date" name="date" value="${e.date}" required></label>
        <label class="field">Beginn<input class="input" type="time" name="time" value="${e.time || ''}"></label>
        <label class="field">Ende<input class="input" type="time" name="end" value="${e.end || ''}"></label></div>
      <div class="fields"><label class="field">Ort<input class="input" name="place" value="${esc(e.place || '')}"></label>
        <label class="field">Wiederholen<select class="input" name="repeat">${Object.keys(REPEATS).map(k => `<option value="${k}"${k === (e.repeat || '') ? ' selected' : ''}>${REPEATS[k]}</option>`).join('')}</select></label></div>
      <label class="field">Notiz<textarea class="input" name="note">${esc(e.note || '')}</textarea></label>
      <p class="tiny muted">Ohne Beginn gilt der Termin als ganztägig.</p>
      <div class="sheet-actions">${isNew ? '' : `<button type="button" class="btn btn-danger" data-act="eventDelete">${icon('trash')}Löschen</button>`}<button type="button" class="btn" data-act="closeSheet">Abbrechen</button><button class="btn btn-primary">Speichern</button></div></form>`);
}
A.eventSave = f => {
  const d = formData(f);
  if (!d.title.trim() || !d.date) return toast('Bitte Titel und Datum eingeben');
  const e = { id: evDraft.id, title: d.title.trim(), date: d.date, time: d.time, end: d.end, place: d.place.trim(), repeat: d.repeat, note: d.note.trim() };
  Planner.saveEvents(Planner.events().filter(x => x.id !== e.id).concat([e]));
  calDay = e.date; calMonth = e.date.slice(0, 7);
  Sheet.close(); toast('Termin gespeichert'); rerender();
};
A.eventDelete = () => { Planner.saveEvents(Planner.events().filter(x => x.id !== evDraft.id)); Sheet.close(); rerender(); };

V.planer = {
  render(r) {
    const body = { '': renderPlanDash, aufgaben: renderTasks, einkauf: renderShopping, kalender: renderCalendar }[r.sub] || renderPlanDash;
    return pageHead('Planer', '') + tabs('planer', [['', 'Übersicht'], ['aufgaben', 'Aufgaben'], ['einkauf', 'Einkauf'], ['kalender', 'Kalender']], r.sub) + body();
  }
};

/* =====================================================================
   NOOP-Sicherung lesen (.noopbak = ZIP mit noop-backup.sqlite).
   Eigener kleiner ZIP- und SQLite-Leser, ohne Bibliotheken.
   ===================================================================== */
const NoopBak = (() => {
  /* ---------- ZIP ---------- */
  async function unzipEntry(buf, wanted) {
    const dv = new DataView(buf), u8 = new Uint8Array(buf);
    let eocd = -1;
    for (let i = buf.byteLength - 22; i >= Math.max(0, buf.byteLength - 65557); i--) {
      if (dv.getUint32(i, true) === 0x06054b50) { eocd = i; break; }
    }
    if (eocd < 0) throw new Error('Die Datei ist keine NOOP-Sicherung (kein ZIP).');
    const count = dv.getUint16(eocd + 10, true);
    let p = dv.getUint32(eocd + 16, true);
    const dec = new TextDecoder();
    for (let n = 0; n < count; n++) {
      if (dv.getUint32(p, true) !== 0x02014b50) break;
      const method = dv.getUint16(p + 10, true), csize = dv.getUint32(p + 20, true);
      const nameLen = dv.getUint16(p + 28, true), extraLen = dv.getUint16(p + 30, true), commLen = dv.getUint16(p + 32, true);
      const local = dv.getUint32(p + 42, true);
      const name = dec.decode(u8.subarray(p + 46, p + 46 + nameLen));
      p += 46 + nameLen + extraLen + commLen;
      if (!wanted(name)) continue;
      const start = local + 30 + dv.getUint16(local + 26, true) + dv.getUint16(local + 28, true);
      const data = u8.subarray(start, start + csize);
      if (method === 0) return data.slice().buffer;
      if (method !== 8) throw new Error('Unbekannte Komprimierung in der Sicherung.');
      if (typeof DecompressionStream === 'undefined') throw new Error('Dieser Browser kann die Sicherung nicht entpacken (Safari 16.4 oder neuer nötig).');
      const stream = new Blob([data]).stream().pipeThrough(new DecompressionStream('deflate-raw'));
      return await new Response(stream).arrayBuffer();
    }
    throw new Error('In der Sicherung fehlt die Datenbank.');
  }

  /* ---------- SQLite ---------- */
  function openDb(buf) {
    const u8 = new Uint8Array(buf), dv = new DataView(buf);
    if (new TextDecoder().decode(u8.subarray(0, 15)) !== 'SQLite format 3') throw new Error('Keine SQLite-Datenbank in der Sicherung.');
    let pageSize = dv.getUint16(16);
    if (pageSize === 1) pageSize = 65536;
    const usable = pageSize - u8[20];
    const dec = new TextDecoder();
    const pageOff = n => (n - 1) * pageSize;

    // Nutzlast einer Tabellenzelle zusammensetzen (inkl. Überlaufseiten)
    function payload(pos, size) {
      const X = usable - 35;
      if (size <= X) return u8.subarray(pos, pos + size);
      const M = Math.floor((usable - 12) * 32 / 255) - 23;
      const K = M + (size - M) % (usable - 4);
      const localLen = K <= X ? K : M;
      const out = new Uint8Array(size);
      out.set(u8.subarray(pos, pos + localLen), 0);
      let got = localLen, next = dv.getUint32(pos + localLen);
      while (next && got < size) {
        const o = pageOff(next), take = Math.min(usable - 4, size - got);
        out.set(u8.subarray(o + 4, o + 4 + take), got);
        got += take; next = dv.getUint32(o);
      }
      return out;
    }
    function varintIn(p, pos) {
      let x = 0;
      for (let i = 0; i < 8; i++) {
        const b = p[pos + i];
        x = x * 128 + (b & 0x7f);
        if (!(b & 0x80)) return [x, i + 1];
      }
      return [x * 256 + p[pos + 8], 9];
    }
    function record(p) {
      const v = new DataView(p.buffer, p.byteOffset, p.byteLength);
      const [hdr, n] = varintIn(p, 0);
      const types = [];
      for (let pos = n; pos < hdr;) { const [t, k] = varintIn(p, pos); types.push(t); pos += k; }
      const vals = [];
      let d = hdr;
      for (const t of types) {
        if (t === 0) vals.push(null);
        else if (t === 8) vals.push(0);
        else if (t === 9) vals.push(1);
        else if (t >= 1 && t <= 6) {
          // Ganzzahl, Big Endian im Zweierkomplement (1–8 Bytes)
          const len = [0, 1, 2, 3, 4, 6, 8][t];
          let u = 0;
          for (let i = 0; i < len; i++) u = u * 256 + p[d + i];
          if (p[d] & 0x80) u -= Math.pow(2, 8 * len);
          vals.push(u); d += len;
        } else if (t === 7) { vals.push(v.getFloat64(d)); d += 8; }
        else if (t >= 12 && t % 2 === 0) { const len = (t - 12) / 2; vals.push(p.slice(d, d + len)); d += len; }
        else if (t >= 13) { const len = (t - 13) / 2; vals.push(dec.decode(p.subarray(d, d + len))); d += len; }
        else vals.push(null);
      }
      return vals;
    }
    // Alle Zeilen einer Tabelle ab ihrer Wurzelseite
    function* rows(root) {
      const stack = [root];
      while (stack.length) {
        const page = stack.pop();
        const o = pageOff(page), h = page === 1 ? o + 100 : o;
        const type = u8[h], cells = dv.getUint16(h + 3);
        if (type === 0x05) {
          const kids = [];
          for (let i = 0; i < cells; i++) kids.push(dv.getUint32(o + dv.getUint16(h + 12 + i * 2)));
          kids.push(dv.getUint32(h + 8));
          for (let i = kids.length - 1; i >= 0; i--) stack.push(kids[i]);
        } else if (type === 0x0d) {
          for (let i = 0; i < cells; i++) {
            let c = o + dv.getUint16(h + 8 + i * 2);
            const [size, a] = varintIn(u8, c); c += a;
            const [, b] = varintIn(u8, c); c += b;
            yield record(payload(c, size));
          }
        }
      }
    }
    const schema = {};
    for (const r of rows(1)) if (r[0] === 'table') schema[r[1]] = { root: r[3], cols: columnsOf(r[4] || '') };
    return {
      tables: Object.keys(schema),
      *select(table) {
        const t = schema[table];
        if (!t) return;
        for (const r of rows(t.root)) { const o = {}; t.cols.forEach((c, i) => { o[c] = i < r.length ? r[i] : null; }); yield o; }
      }
    };
  }
  // Spaltennamen aus CREATE TABLE lesen (auch per ALTER TABLE angehängte Spalten)
  function columnsOf(sql) {
    const body = sql.slice(sql.indexOf('(') + 1, sql.lastIndexOf(')'));
    const parts = [];
    let depth = 0, cur = '', q = null;
    for (const ch of body) {
      if (q) { cur += ch; if (ch === q) q = null; continue; }
      if (ch === '"' || ch === "'" || ch === '`' || ch === '[') { q = ch === '[' ? ']' : ch; cur += ch; continue; }
      if (ch === '(') depth++;
      if (ch === ')') depth--;
      if (ch === ',' && depth === 0) { parts.push(cur); cur = ''; } else cur += ch;
    }
    if (cur.trim()) parts.push(cur);
    return parts.map(s => s.trim()).filter(s => !/^(PRIMARY|UNIQUE|CHECK|FOREIGN|CONSTRAINT)\b/i.test(s))
      .map(s => { const m = s.match(/^("([^"]+)"|`([^`]+)`|\[([^\]]+)\]|(\S+))/); return m[2] || m[3] || m[4] || m[5]; });
  }

  /* ---------- NOOP-Daten herausziehen ---------- */
  const isComputed = id => /-noop$/.test(id || '');
  const prio = id => id === 'apple-health' ? 2 : isComputed(id) ? 1 : 0;   // importiert vor berechnet vor Apple
  async function read(file) {
    let buf = await file.arrayBuffer();
    const head = new TextDecoder().decode(new Uint8Array(buf, 0, Math.min(15, buf.byteLength)));
    let profile = {};
    if (head !== 'SQLite format 3') {
      try { profile = JSON.parse(new TextDecoder().decode(await unzipEntry(buf, n => n === 'settings.json'))); } catch (e) { profile = {}; }
      buf = await unzipEntry(buf, n => /\.sqlite$/i.test(n));
    }
    const db = openDb(buf);
    if (!db.tables.includes('dailyMetric')) throw new Error('Das ist keine NOOP-Datenbank.');
    const DAY_FIELDS = { recovery: 'rec', strain: 'strain', avgHrv: 'hrv', restingHr: 'rhr', totalSleepMin: 'sleep', deepMin: 'deep', remMin: 'rem', lightMin: 'light', efficiency: 'eff', steps: 'steps', respRateBpm: 'resp', spo2Pct: 'spo2', activeKcalEst: 'kcal' };
    const byDay = {};
    for (const r of db.select('dailyMetric')) {
      if (!r.day) continue;
      (byDay[r.day] = byDay[r.day] || []).push(r);
    }
    const days = {};
    Object.keys(byDay).forEach(day => {
      const rs = byDay[day].sort((a, b) => prio(a.deviceId) - prio(b.deviceId));
      const o = {};
      Object.keys(DAY_FIELDS).forEach(f => { const r = rs.find(x => x[f] != null); if (r) o[DAY_FIELDS[f]] = Math.round(r[f] * 100) / 100; });
      if (Object.keys(o).length) days[day] = o;
    });
    const seen = {}, workouts = [];
    for (const w of db.select('workout')) {
      if (!w.startTs || !w.endTs) continue;
      const key = Math.round(w.startTs / 120);
      const item = { start: w.startTs * 1000, end: w.endTs * 1000, sport: w.sport, src: w.source, dur: w.durationS || (w.endTs - w.startTs), kcal: w.energyKcal, avgHr: w.avgHr, maxHr: w.maxHr, strain: w.strain, dist: w.distanceM };
      if (seen[key] !== undefined) {
        const prev = workouts[seen[key]];
        if (prio(w.deviceId) < prev._p) workouts[seen[key]] = Object.assign(item, { _p: prio(w.deviceId) });
        continue;
      }
      seen[key] = workouts.length;
      workouts.push(Object.assign(item, { _p: prio(w.deviceId) }));
    }
    workouts.forEach(w => { delete w._p; Object.keys(w).forEach(k => { if (w[k] == null) delete w[k]; else if (typeof w[k] === 'number') w[k] = Math.round(w[k] * 10) / 10; }); });
    workouts.sort((a, b) => b.start - a.start);
    // Maximalpuls wie in NOOP: eigener Wert aus dem Profil, sonst Tanaka 208 − 0,7 × Alter
    const age = +profile['profile.age'] || 0;
    const hrMax = +profile['profile.hrMax'] || (age ? Math.round(208 - 0.7 * age) : 0);
    if (db.tables.includes('hrSample')) attachHr(db, workouts.slice(0, 30), hrMax);
    return { days, workouts, hrMax, profile: { age: age || undefined, weightKg: +profile['profile.weightKg'] || undefined } };
  }
  // Pulsverlauf (10-Sekunden-Mittel) und Zeit in den Zonen für die neuesten Workouts
  function attachHr(db, list, hrMax) {
    const wins = list.map(w => ({ w, s: Math.round(w.start / 1000), e: Math.round(w.end / 1000), b: {}, z: [0, 0, 0, 0, 0, 0], n: 0, sum: 0, max: 0 }));
    if (!wins.length) return;
    const lo = Math.min(...wins.map(x => x.s)), hi = Math.max(...wins.map(x => x.e));
    const bounds = hrMax ? [0.5, 0.6, 0.7, 0.8, 0.9].map(p => p * hrMax) : null;
    for (const r of db.select('hrSample')) {
      const ts = r.ts, bpm = r.bpm;
      if (ts < lo || ts > hi || !(bpm > 25 && bpm < 240) || /-noop$/.test(r.deviceId || '')) continue;
      for (const x of wins) {
        if (ts < x.s || ts > x.e) continue;
        const k = Math.floor((ts - x.s) / 10);
        const b = x.b[k] || (x.b[k] = [0, 0]); b[0] += bpm; b[1]++;
        x.n++; x.sum += bpm; if (bpm > x.max) x.max = bpm;
        if (bounds) { let z = 0; while (z < 5 && bpm >= bounds[z]) z++; x.z[z]++; }
      }
    }
    wins.forEach(x => {
      if (x.n < 30) return;
      const len = Math.ceil((x.e - x.s) / 10) + 1, v = [];
      for (let i = 0; i < len; i++) v.push(x.b[i] ? Math.round(x.b[i][0] / x.b[i][1]) : null);
      x.w.hr = { step: 10, v };
      if (bounds) { x.w.zones = x.z; x.w.hrMax = hrMax; }
      if (x.w.avgHr == null) x.w.avgHr = Math.round(x.sum / x.n);
      if (x.w.maxHr == null) x.w.maxHr = x.max;
    });
  }
  return { read, openDb, columnsOf, unzipEntry };
})();

/* =====================================================================
   NOOP-Werte anzeigen: Recovery, Schlaf, HRV, Belastung und NOOP-Workouts
   (Daten aus der NOOP-Sicherung, siehe noopbak.js)
   ===================================================================== */
const SPORT_DE = {
  running: 'Laufen', walking: 'Gehen', hiking: 'Wandern', cycling: 'Radfahren', strength: 'Krafttraining', weightlifting: 'Gewichtheben',
  powerlifting: 'Powerlifting', hiit: 'HIIT', swimming: 'Schwimmen', yoga: 'Yoga', rowing: 'Rudern', other: 'Sonstiges', detected: 'Erkannte Aktivität',
  'treadmill run': 'Laufband', 'treadmill walk': 'Laufband (Gehen)', functionalfitness: 'Functional Fitness', 'functional fitness': 'Functional Fitness',
  tennis: 'Tennis', football: 'Fußball', soccer: 'Fußball', basketball: 'Basketball', boxing: 'Boxen', climbing: 'Klettern', pilates: 'Pilates', handball: 'Handball'
};
const NOOP_RUN = /^(running|run|treadmill run|trail running|jogging|laufen)$/i;
const sportDe = s => SPORT_DE[String(s || '').toLowerCase()] || s || 'Workout';
const fmtSleep = m => m ? `${Math.floor(m / 60)}:${pad2(Math.round(m % 60))} h` : '–';
function recState(r) {
  if (r == null) return { label: '–', color: 'var(--muted)' };
  return r >= 67 ? { label: 'Erholt', color: 'var(--good)' } : r >= 34 ? { label: 'Mittel', color: '#c98500' } : { label: 'Niedrig', color: 'var(--bad)' };
}

const NoopData = {
  days() { return Store.get('noopDays', {}) || {}; },
  workouts() { return Store.get('noopWorkouts', []) || []; },
  meta() { return Store.get('noopMeta', null); },
  has() { return Object.keys(this.days()).length > 0 || this.workouts().length > 0; },
  latest(field) {
    const d = this.days(), keys = Object.keys(d).sort().reverse();
    const k = keys.find(x => d[x][field] != null);
    return k ? { day: k, v: d[k][field] } : null;
  },
  avg(field, n, before) {
    const d = this.days(), keys = Object.keys(d).sort().filter(k => !before || k < before).slice(-n).filter(k => d[k][field] != null);
    return keys.length ? sum(keys.map(k => d[k][field])) / keys.length : null;
  },
  save(r, fileName) {
    // Nur die letzten 400 Tage und 400 Workouts behalten (passt in den Cloud-Sync)
    const keep = {};
    Object.keys(r.days).sort().slice(-400).forEach(k => { keep[k] = r.days[k]; });
    Store.set('noopDays', keep);
    Store.set('noopWorkouts', r.workouts.slice(0, 400));
    const ks = Object.keys(keep).sort();
    Store.set('noopMeta', { loaded: Date.now(), file: fileName, from: ks[0], to: ks[ks.length - 1], days: ks.length, workouts: r.workouts.length });
    return this.toRuns(r.workouts) + this.toWeek(r.workouts);
  },
  // Läufe mit Distanz (in NOOP gestartet oder aus WHOOP) kommen unter Laufen, mit Puls und Zonen
  toRuns(list) {
    const from = Date.now() - 60 * 864e5, mine = Runs.all();
    let n = 0;
    list.filter(w => NOOP_RUN.test(w.sport) && w.dist > 0 && w.start >= from && (w.src === 'manual' || w.src === 'whoop')).forEach(w => {
      const id = 'noop-r-' + Math.round(w.start / 1000);
      const extra = { hrCurve: w.hr, zones: w.zones, hrMax: w.hrMax, maxHr: w.maxHr, strain: w.strain, kcal: w.kcal != null ? Math.round(w.kcal) : undefined };
      const had = mine.find(x => x.id === id);
      if (had) { if (w.hr && !had.hrCurve) Runs.save(Object.assign({}, had, extra)); return; }
      if (mine.some(x => x.start < w.end && x.start + x.sec * 1000 > w.start)) return;   // im Dashboard selbst aufgezeichnet
      Runs.save(Object.assign({ id, src: 'noop', start: w.start, sec: Math.round(w.dur || (w.end - w.start) / 1000), km: Math.round(w.dist / 10) / 100,
        type: /treadmill|laufband/i.test(w.sport) ? 'Laufband' : 'Locker', hr: w.avgHr, feel: 3, note: '' }, extra));
      n++;
    });
    return n;
  },
  // In NOOP selbst gestartete Trainings (Quelle „manual“) zählen auch in der Trainingswoche des Dashboards
  toWeek(list) {
    const from = Date.now() - 60 * 864e5, mine = Workouts.all();
    let n = 0;
    list.filter(w => w.src === 'manual' && w.start >= from && !(NOOP_RUN.test(w.sport) && w.dist > 0)).forEach(w => {
      const id = 'noop-' + Math.round(w.start / 1000);
      const had = mine.find(x => x.id === id);
      if (had) { if (w.hr && !had.hr) Workouts.save(Object.assign({}, had, { hr: w.hr, zones: w.zones, hrMax: w.hrMax })); return; }
      if (mine.some(x => x.start < w.end && (x.end || x.start) > w.start)) return;   // im Logger mitgeschrieben
      Workouts.save({ id, src: 'noop', name: sportDe(w.sport), sport: w.sport, start: w.start, end: w.end, items: [],
        strain: w.strain, kcal: w.kcal != null ? Math.round(w.kcal) : undefined, avgHr: w.avgHr, maxHr: w.maxHr, hr: w.hr, zones: w.zones, hrMax: w.hrMax });
      n++;
    });
    return n;
  }
};
A.noopLoad = async el => {
  const file = el.files && el.files[0];
  if (!file) return;
  toast('NOOP-Sicherung wird gelesen …');
  try {
    const r = await NoopBak.read(file);
    const added = NoopData.save(r, file.name);
    toast(`${Object.keys(r.days).length} Tage und ${r.workouts.length} Workouts aus NOOP geladen${added ? `, ${added} Trainings/Läufe übernommen` : ''}`);
    rerender();
  } catch (e) {
    toast(e && e.message ? e.message : 'Die Sicherung konnte nicht gelesen werden');
  }
  el.value = '';
};
const noopLoadBtn = (label, cls) => `<label class="btn ${cls || ''}" style="cursor:pointer">${icon('sync')}${label}<input type="file" accept=".noopbak,.zip,.sqlite,application/zip,application/octet-stream" data-change="noopLoad" hidden></label>`;
const NOOP_STEPS = `<ol class="steps small">
  <li>In NOOP: Einstellungen → Backup &amp; Sync → automatisches Backup einschalten und als Ordner einen in <b>iCloud Drive</b> wählen, z. B. „NOOP-Backup“. NOOP legt dann jeden Tag beim Öffnen eine Sicherung ab.</li>
  <li>Hier auf „NOOP laden“ tippen und im Ordner die neueste Datei <b>noop-backup-….noopbak</b> wählen.</li>
  <li>Das Dashboard liest nur Tageswerte und Workouts heraus. Die Sicherung selbst bleibt unverändert.</li></ol>`;

function renderNoop() {
  if (!NoopData.has()) {
    return `<div class="card" style="max-width:760px">${emptyState('pulse', 'Hier erscheinen deine Werte aus NOOP: Recovery, Schlaf, HRV, Belastung und alle Workouts, die NOOP erkannt hat', noopLoadBtn('NOOP laden', 'btn-primary'))}
      <hr class="divider"><h3 style="margin-bottom:12px">So geht’s</h3>${NOOP_STEPS}</div>`;
  }
  const d = NoopData.days(), meta = NoopData.meta() || {};
  const t = todayKey();
  const rec = NoopData.latest('rec'), hrv = NoopData.latest('hrv'), rhr = NoopData.latest('rhr'), sl = NoopData.latest('sleep'), st = NoopData.latest('strain');
  const hrv30 = NoopData.avg('hrv', 30, hrv && hrv.day), rhr30 = NoopData.avg('rhr', 30, rhr && rhr.day);
  const rs = recState(rec && rec.v);
  const last = n => { const out = []; for (let i = n - 1; i >= 0; i--) out.push(addDays(t, -i)); return out; };
  const recPts = last(30).filter(k => d[k] && d[k].rec != null).map(k => ({ x: parseKey(k).getTime(), y: d[k].rec, tip: `<b>${fmt(d[k].rec)} % Recovery</b><br>${esc(fmtDate(k, { plain: true, day: true }))}${d[k].hrv ? `<br>HRV ${fmt(d[k].hrv)} ms · Ruhepuls ${fmt(d[k].rhr)}` : ''}` }));
  const sleepBars = last(14).map(k => { const v = d[k] && d[k].sleep; const dd = parseKey(k); return { label: DAYS[dd.getDay()], value: v ? Math.round(v / 6) / 10 : 0, strong: k === t, tip: `<b>${fmtSleep(v)}</b> Schlaf<br>${esc(fmtDate(k, { plain: true, day: true }))}${d[k] && d[k].deep ? `<br>Tief ${fmt(d[k].deep)} · REM ${fmt(d[k].rem)} · Leicht ${fmt(d[k].light)} min` : ''}` }; });
  const strainBars = last(14).map(k => { const v = d[k] && d[k].strain; const dd = parseKey(k); return { label: DAYS[dd.getDay()], value: v ? Math.round(v) : 0, strong: k === t, tip: `<b>${v ? fmt(v) : '–'}</b> Belastung<br>${esc(fmtDate(k, { plain: true, day: true }))}` }; });
  const ws = NoopData.workouts();
  const delta = (v, base, unit, higherBetter) => {
    if (v == null || base == null) return '';
    const diff = v - base, good = higherBetter ? diff >= 0 : diff <= 0;
    return `<span class="${good ? 'delta-up' : 'delta-down'}">${diff >= 0 ? '+' : '−'}${fmt(Math.abs(diff))} ${unit}</span> zum 30-Tage-Schnitt`;
  };
  return `<div class="row-between wrap" style="margin-bottom:16px"><p class="muted small">Sicherung „${esc(meta.file || 'NOOP')}“ · geladen ${meta.loaded ? fmtDate(meta.loaded) + ', ' + fmtTime(meta.loaded) : ''} · Daten bis ${meta.to ? fmtDate(meta.to) : '–'}</p>
      ${noopLoadBtn('Neue Sicherung laden')}</div>
    <div class="kpis no-hl">
      <div class="card"><div class="stat-label">Recovery${rec && rec.day !== t ? ' · ' + fmtDate(rec.day) : ''}</div><div class="stat-value" style="color:${rs.color}">${rec ? fmt(rec.v) : '–'}<small>%</small></div><div class="stat-foot"><span class="chip"><span class="dot" style="background:${rs.color};width:8px;height:8px"></span>${rs.label}</span></div></div>
      <div class="card"><div class="stat-label">HRV</div><div class="stat-value">${hrv ? fmt(hrv.v) : '–'}<small>ms</small></div><div class="stat-foot">${delta(hrv && hrv.v, hrv30, 'ms', true)}</div></div>
      <div class="card"><div class="stat-label">Ruhepuls</div><div class="stat-value">${rhr ? fmt(rhr.v) : '–'}<small>bpm</small></div><div class="stat-foot">${delta(rhr && rhr.v, rhr30, 'bpm', false)}</div></div>
      <div class="card"><div class="stat-label">Schlaf${sl && sl.day !== t ? ' · ' + fmtDate(sl.day) : ''}</div><div class="stat-value">${sl ? fmtSleep(sl.v).replace(' h', '') : '–'}<small>h</small></div><div class="stat-foot">${sl && d[sl.day].eff ? 'Effizienz ' + fmt(d[sl.day].eff * 100) + ' %' : ''}${st ? ` · Belastung ${fmt(st.v)}` : ''}</div></div></div>
    <div class="grid">
      <div class="card span-12"><div class="card-head"><h2>${icon('chart')}Recovery · 30 Tage</h2><span class="muted small">grün ab 67 %, rot unter 34 %</span></div>
        ${Charts.slot({ type: 'line', points: recPts, height: 220, zero: true, max: 100, label: 'Recovery der letzten 30 Tage', yFmt: v => fmt(v) + ' %', empty: 'Keine Recovery-Werte in den letzten 30 Tagen' })}</div>
      <div class="card span-7"><div class="card-head"><h2>${icon('calendar')}Schlaf pro Nacht</h2><span class="muted small">Stunden</span></div>
        ${Charts.slot({ type: 'bars', bars: sleepBars, goal: 8, goalLabel: '8 h', height: 200, label: 'Schlaf pro Nacht', yFmt: v => fmt(v, 1), empty: 'Keine Schlafdaten' })}</div>
      <div class="card span-5"><div class="card-head"><h2>${icon('flame')}Belastung</h2><span class="muted small">letzte 7 Tage, 0–100</span></div>
        ${hbars(strainBars.slice(-7).reverse().map(b => ({ label: b.label + (b.strong ? ' (heute)' : ''), value: b.value })), v => fmt(v))}</div>
      <div class="card span-12"><div class="card-head"><h2>${icon('gym')}Workouts aus NOOP</h2><span class="muted small">${ws.length} gespeichert</span></div>
        <div class="list wrap-sub">${ws.slice(0, 20).map(w => `<div class="li"><span class="tile-ic" style="width:36px;height:36px;border-radius:11px">${icon(/run|walk|hik|treadmill/i.test(w.sport) ? 'run' : 'gym', 'ic-s')}</span>
          <div class="li-main"><div class="li-title">${esc(sportDe(w.sport))}${w.src === 'manual' ? ' <span class="chip">manuell</span>' : ''}</div>
          <div class="li-sub">${fmtDate(w.start, { day: true })}, ${fmtTime(w.start)} · ${fmtMin(w.dur)}${w.dist ? ' · ' + fmt(w.dist / 1000, 1) + ' km' : ''}${w.avgHr ? ` · Ø ${w.avgHr} / max ${w.maxHr || '–'} bpm` : ''}</div></div>
          <div class="li-end">${w.strain != null ? fmt(w.strain) : '–'}<div class="li-sub">${w.kcal ? fmt(w.kcal) + ' kcal' : 'Belastung'}</div></div></div>`).join('') || '<p class="empty">Keine Workouts in der Sicherung</p>'}</div></div>
    </div>`;
}

/* Kleine Karte für die Startseite */
function noopHomeCard() {
  if (!NoopData.has()) return '';
  const rec = NoopData.latest('rec'), sl = NoopData.latest('sleep'), hrv = NoopData.latest('hrv'), st = NoopData.latest('strain');
  const rs = recState(rec && rec.v);
  const w = NoopData.workouts()[0];
  return `<a class="card card-link span-12" href="training.html#/training/noop"><div class="card-head"><h2>${icon('pulse')}Erholung · NOOP</h2><span class="muted small">Stand ${rec ? fmtDate(rec.day) : '–'}</span></div>
    <div class="nutri-grid" style="grid-template-columns:repeat(4,minmax(0,1fr))">
      <div><b style="color:${rs.color}">${rec ? fmt(rec.v) + ' %' : '–'}</b><span>Recovery · ${rs.label}</span></div>
      <div><b>${sl ? fmtSleep(sl.v) : '–'}</b><span>Schlaf</span></div>
      <div><b>${hrv ? fmt(hrv.v) : '–'}</b><span>HRV (ms)</span></div>
      <div><b>${st ? fmt(st.v) : '–'}</b><span>Belastung</span></div></div>
    ${w ? `<p class="small muted" style="margin-top:12px">Letztes Workout: ${esc(sportDe(w.sport))}, ${fmtDate(w.start, { day: true })}${w.strain != null ? ' · Belastung ' + fmt(w.strain) : ''}</p>` : ''}</a>`;
}

/* =====================================================================
   Einstellungen und Datenverwaltung
   ===================================================================== */
V.einstellungen = {
  render() {
    const s = settings();
    const counts = `${Workouts.all().length} Trainings · ${Runs.all().length} Läufe · ${Store.keys('n-').reduce((n, k) => n + Object.keys(Store.get(k) || {}).length, 0)} Ernährungstage · ${Planner.tasks().length} Aufgaben · ${Planner.events().length} Termine · ${Store.keys('a-').reduce((n, k) => n + (Store.get(k) || []).length, 0)} Ausgaben`;
    const hasDemo = Demo.present();
    return `${pageHead('Einstellungen', '')}
    <div class="grid">
      <div class="card span-6"><div class="card-head"><h2>${icon('settings')}Allgemein</h2></div>
        <form class="stack" data-submit="settingsSave">
          <label class="field">Dein Name<input class="input" name="name" value="${esc(s.name)}"></label>
          <div class="field"><span>Darstellung</span><div class="seg">${[['auto', 'Automatisch'], ['light', 'Hell'], ['dark', 'Dunkel']].map(([k, l]) => `<button type="button" class="${s.theme === k ? 'active' : ''}" data-act="themeSet" data-k="${k}">${l}</button>`).join('')}</div></div>
          <div class="fields"><label class="field">Trainings pro Woche<input class="input" name="weekGoal" inputmode="numeric" value="${s.weekGoal}"></label>
            <label class="field">Standard-Pause (s)<input class="input" name="restSec" inputmode="numeric" value="${s.restSec}"></label>
            <label class="field">Laufziel im Jahr (km)<input class="input" name="runYearGoal" inputmode="numeric" value="${s.runYearGoal}"></label></div>
          <button class="btn btn-primary">Speichern</button></form></div>
      <div class="card span-6"><div class="card-head"><h2>${icon('house')}Zuhause</h2></div>
        <form class="stack" data-submit="homeSave">
          <label class="field">Adresse der TV-Fernbedienung<input class="input" name="tvUrl" value="${esc(s.tvUrl)}" placeholder="http://192.168.192.65:8090/"></label>
          <label class="field">Home Assistant (Adresse)<input class="input" name="haUrl" value="${esc(s.haUrl)}" placeholder="http://homeassistant.local:8123"></label>
          <label class="field">Home Assistant (Langzeit-Token)<input class="input" type="password" name="haToken" value="${esc(Local.get('haToken', ''))}" autocomplete="off" placeholder="nur auf diesem Gerät gespeichert"></label>
          <p class="tiny muted">Das Token bleibt nur in diesem Browser und wird nie synchronisiert oder exportiert.</p>
          <button class="btn btn-primary">Speichern</button></form></div>
      <div class="card span-12"><div class="card-head"><h2>${icon('sync')}Daten</h2><span class="muted small" data-sync>${esc(syncText())}</span></div>
        <p class="muted" style="margin-bottom:16px">${counts}</p>
        <div class="row wrap">
          <button class="btn" data-act="dataExport">Daten exportieren (JSON)</button>
          <label class="btn" style="cursor:pointer">Daten importieren<input type="file" accept="application/json,.json" data-change="dataImport" hidden></label>
          ${hasDemo ? `<button class="btn" data-act="demoRemove">Beispieldaten entfernen</button>` : `<button class="btn" data-act="demoLoad">Beispieldaten laden</button>`}
          <button class="btn btn-danger" data-act="dataReset">Alles löschen</button></div>
        <hr class="divider">
        <p class="small muted">${Sync.col ? 'Diese Seite läuft als Claude-Artifact: Deine Daten werden automatisch zwischen Mac und Handy synchronisiert.' : 'Deine Daten liegen in diesem Browser. Um sie auf ein anderes Gerät zu bringen: hier exportieren und dort importieren.'}
        Auf dem iPhone: In Safari „Teilen“ → „Zum Home-Bildschirm“, dann startet das Dashboard wie eine App.</p></div>
    </div>`;
  }
};
A.themeSet = el => { saveSettings({ theme: el.dataset.k }); rerender(); };
A.settingsSave = f => {
  const d = formData(f);
  saveSettings({ name: d.name.trim() || DEFAULT_SETTINGS.name, weekGoal: clamp(Math.round(num(d.weekGoal)) || 4, 1, 14), restSec: clamp(Math.round(num(d.restSec)) || 90, 10, 900), runYearGoal: Math.max(1, Math.round(num(d.runYearGoal)) || 600) });
  toast('Gespeichert'); rerender();
};
A.homeSave = f => {
  const d = formData(f);
  saveSettings({ tvUrl: d.tvUrl.trim(), haUrl: d.haUrl.trim() });
  Local.set('haToken', d.haToken.trim());
  HA.loaded = false; clearInterval(HA.iv); HA.iv = null;
  toast('Gespeichert'); rerender();
};
A.dataExport = async () => {
  const json = JSON.stringify({ app: 'zuhause-dashboard', version: 1, exported: new Date().toISOString(), data: Store.exportAll() }, null, 1);
  const filename = `dashboard-${todayKey()}.json`;
  if (window.claude && window.claude.use) {
    try {
      const dl = await window.claude.use('downloads');
      if (dl) { await dl.save({ filename, data: json }); return; }
    } catch (e) { if (e && e.code === 'declined') return; }
  }
  const a = document.createElement('a');
  a.href = URL.createObjectURL(new Blob([json], { type: 'application/json' }));
  a.download = filename;
  document.body.appendChild(a); a.click(); a.remove();
  setTimeout(() => URL.revokeObjectURL(a.href), 2000);
};
A.dataImport = el => {
  const file = el.files && el.files[0];
  if (!file) return;
  const r = new FileReader();
  r.onload = () => {
    try {
      const j = JSON.parse(r.result);
      if (!j || j.app !== 'zuhause-dashboard' || !j.data) throw new Error('format');
      confirmSheet('Daten importieren?', 'Die Einträge aus der Datei werden zu deinen vorhandenen hinzugefügt. Gleiche Einträge übernimmt das Dashboard aus der Datei, nichts wird gelöscht.', 'Importieren', () => { const n = Store.mergeAll(j.data); applyTheme(); renderTopbar(); toast(n ? `Import fertig: ${n} Bereiche ergänzt` : 'Alles war schon da'); rerender(); });
    } catch (e) { toast('Die Datei ist kein Dashboard-Export'); }
  };
  r.readAsText(file);
};
A.dataReset = () => confirmSheet('Wirklich alles löschen?', 'Alle Trainings, Läufe, Ernährungsdaten und Einstellungen werden gelöscht. Exportiere vorher, wenn du sie behalten willst.', 'Alles löschen', () => {
  Store.clearAll(); Local.set('timer', null); Local.set('liverun', null); RestTimer.stop(); applyTheme(); toast('Alles gelöscht'); go('heute');
}, true);
A.demoLoad = () => { Demo.load(); toast('Beispieldaten geladen'); go('heute'); };
A.demoRemove = () => { Demo.remove(); toast('Beispieldaten entfernt'); rerender(); };

/* =====================================================================
   Beispieldaten zum Ausprobieren (markiert mit demo: true, jederzeit
   unter Einstellungen wieder entfernbar)
   ===================================================================== */
const Demo = {
  rng(seed) { let s = seed; return () => { s = (s * 1664525 + 1013904223) % 4294967296; return s / 4294967296; }; },
  load() {
    this.remove();
    const R = this.rng(42), t = todayKey();
    const at = (k, h, m) => { const d = parseKey(k); d.setHours(h, m, 0, 0); return d.getTime(); };
    const base = { bench: 72.5, 'db-incline': 26, ohp: 45, 'lat-raise': 10, pushdown: 25, deadlift: 120, pullup: 0, 'cable-row': 60, facepull: 20, hammer: 16, squat: 95, rdl: 85, legpress: 160, 'leg-curl': 40, 'calf-stand': 70 };
    const plan = [DEFAULT_TEMPLATES[0], DEFAULT_TEMPLATES[1], DEFAULT_TEMPLATES[2]];
    const ws = {}, rs = {}, ns = {};
    const push = (obj, k, v) => { (obj[k] = obj[k] || []).push(v); };
    let n = 0;
    // 14 Wochen Training: Mo Push, Di Pull, Do Beine, Sa im Wechsel
    for (let day = 98; day >= 0; day--) {
      const k = addDays(t, -day), wd = (parseKey(k).getDay() + 6) % 7;
      let tpl = null;
      if (wd === 0) tpl = plan[0]; else if (wd === 1) tpl = plan[1]; else if (wd === 3) tpl = plan[2]; else if (wd === 5) tpl = plan[(n++) % 2];
      if (tpl && R() < 0.88 && day > 0) {
        const prog = 1 + (98 - day) / 98 * 0.12;
        const start = at(k, 17 + Math.floor(R() * 3), Math.floor(R() * 60));
        const items = tpl.items.map((it, idx) => {
          const sets = [];
          const top = Math.round(base[it.ex] * prog * (0.98 + R() * 0.04) / 2.5) * 2.5;
          if (idx === 0 && top > 40) sets.push({ kg: Math.round(top * 0.5 / 2.5) * 2.5, reps: 10, type: 'w' });
          for (let i = 0; i < it.sets; i++) {
            const reps = it.ex === 'pullup' ? 6 + Math.round((98 - day) / 30) + (i ? -1 : 0) : 6 + Math.floor(R() * 5) - (i > 2 ? 1 : 0);
            sets.push({ kg: it.ex === 'pullup' ? 0 : top - (i === it.sets - 1 && R() < 0.4 ? 2.5 : 0), reps: Math.max(3, reps), type: 'n' });
          }
          return { ex: it.ex, note: '', sets };
        });
        push(ws, 'w-' + monthOf(k), { id: 'demo-w' + day, demo: true, name: tpl.name, start, end: start + (52 + Math.floor(R() * 25)) * 60000, items });
      }
      // Laufen: Mi locker, So lang, manchmal Fr Tempo
      const runKm = wd === 2 ? 6 + R() * 2 : wd === 6 ? 10 + (98 - day) / 98 * 6 + R() * 2 : wd === 4 && R() < 0.4 ? 6 : 0;
      if (runKm && R() < 0.85 && day > 0) {
        const type = wd === 6 ? 'Lang' : wd === 4 ? 'Tempo' : 'Locker';
        const pace = (type === 'Tempo' ? 290 : type === 'Lang' ? 352 : 338) - (98 - day) / 98 * 14 + R() * 10;
        const km = Math.round(runKm * 100) / 100;
        const splits = Array.from({ length: Math.floor(km) }, () => Math.round(pace + (R() - 0.5) * 16));
        push(rs, 'r-' + monthOf(k), { id: 'demo-r' + day, demo: true, start: at(k, 7, 15 + Math.floor(R() * 30)), km, sec: Math.round(pace * km), type, feel: 3 + Math.floor(R() * 2), note: '', splits, route: this.route(R, km) });
      }
      // Ernährung der letzten 16 Tage
      if (day <= 15) {
        const pick = (name, g) => { const f = FOOD_BASE.find(x => x.name === name); return Object.assign({ id: uid(), food: f.id, name: f.name, brand: '', g, unit: 'g', qty: g }, scaleFood(f, g)); };
        const dinners = [[['Lachs roh', 150], ['Kartoffeln gekocht', 300], ['Brokkoli', 200]], [['Nudeln roh', 120], ['Rinderhackfleisch', 150], ['Tomate', 150]], [['Putenbrust roh', 180], ['Reis roh', 90], ['Paprika rot', 150]], [['Weizen-Wrap', 120], ['Hähnchenbrust roh', 150], ['Avocado', 80]]];
        const meals = {
          b: [pick('Haferflocken', 80), pick('Milch 1,5 %', 250), pick('Banane', 120)],
          l: [pick('Hähnchenbrust roh', 200), pick('Reis roh', 100), pick('Brokkoli', 200)],
          d: day === 0 ? [] : dinners[day % 4].map(([nm, g]) => pick(nm, g)),
          s: day === 0 ? [pick('Skyr natur', 250)] : [pick('Skyr natur', 250), pick(R() < 0.5 ? 'Proteinriegel' : 'Mandeln', R() < 0.5 ? 55 : 30)].concat(R() < 0.3 ? [pick('Zartbitterschokolade 70 %', 25)] : [])
        };
        const key = 'n-' + monthOf(k);
        ns[key] = ns[key] || {};
        ns[key][k] = { meals, water: day === 0 ? 4 : 6 + Math.floor(R() * 4), demo: true };
      }
    }
    Object.keys(ws).forEach(k => Store.set(k, (Store.get(k, []) || []).concat(ws[k])));
    Object.keys(rs).forEach(k => Store.set(k, (Store.get(k, []) || []).concat(rs[k])));
    Object.keys(ns).forEach(k => Store.set(k, Object.assign({}, Store.get(k, {}) || {}, ns[k])));
    const body = (Store.get('body', []) || []).slice();
    for (let day = 120; day >= 0; day -= 1 + Math.floor(R() * 3)) {
      const k = addDays(t, -day);
      if (!body.some(b => b.d === k)) body.push({ d: k, kg: Math.round((84.8 - (120 - day) / 120 * 2.6 + (R() - 0.5) * 0.9) * 10) / 10, demo: true });
    }
    Store.set('body', body);
    this.loadLife(R, t);
    saveSettings({ seenWelcome: true });
  },
  // Finanzen und Planer: erfundene, als Beispiel markierte Einträge
  loadLife(R, t) {
    const fx = [['Miete (kalt)', 620, 'm', 'Wohnen', 1], ['Nebenkosten-Vorauszahlung', 180, 'm', 'Wohnen', 1], ['Strom', 58, 'm', 'Energie', 5], ['Internet', 39.99, 'm', 'Kommunikation', 15],
      ['Handyvertrag', 15, 'm', 'Kommunikation', 20], ['Rundfunkbeitrag', 55.08, 'q', 'Wohnen', 15, 2], ['Haftpflichtversicherung', 59, 'y', 'Versicherung', 1, 3], ['EGYM Wellpass', 39, 'm', 'Sport', 1], ['Streaming', 13.99, 'm', 'Abos', 12]];
    Store.set('fixkosten', (Store.get('fixkosten', []) || []).concat(fx.map(([name, amount, interval, cat, day, startMonth], i) => ({ id: 'demo-f' + i, demo: true, name, amount, interval, cat, day, startMonth: startMonth || '', note: '', active: true }))));
    const spends = {}, cats = [['lebensmittel', 12, 70, 0.55], ['essen', 9, 45, 0.18], ['haushalt', 4, 30, 0.08], ['mobil', 20, 60, 0.07], ['freizeit', 10, 60, 0.1], ['kleidung', 25, 90, 0.03], ['einrichtung', 30, 250, 0.03]];
    for (let day = 160; day >= 0; day--) {
      const k = addDays(t, -day);
      cats.forEach(([cat, lo, hi, p]) => { if (R() < p) { const key = 'a-' + k.slice(0, 7); (spends[key] = spends[key] || []).push({ id: 'demo-a' + day + cat, demo: true, amount: Math.round((lo + R() * (hi - lo)) * 100) / 100, cat, note: '', date: k, ts: day }); } });
    }
    Object.keys(spends).forEach(k => Store.set(k, (Store.get(k, []) || []).concat(spends[k])));
    const meters = [];
    for (let i = 4; i >= 0; i--) {
      const k = addDays(t, -30 * i - 2);
      meters.push({ id: 'demo-z' + i, demo: true, type: 'strom', date: k, value: Math.round((12450 + (120 - 30 * i) * (6.2 + R())) * 10) / 10 });
      meters.push({ id: 'demo-w' + i, demo: true, type: 'wasser', date: k, value: Math.round((310 + (120 - 30 * i) * 0.11) * 10) / 10 });
    }
    Store.set('zaehler', (Store.get('zaehler', []) || []).concat(meters));
    const tk = [['Altkleider wegbringen', 0, 'Privat'], ['Zahnarzttermin vereinbaren', -1, 'Privat', 1], ['Fahrrad zur Inspektion bringen', 2, 'Privat'], ['Wohnzimmer ausmessen', 5, 'Wohnung'], ['Lampen für das Wohnzimmer aussuchen', 12, 'Wohnung'], ['Steuerunterlagen sortieren', '', 'Privat']];
    Store.set('tasks', (Store.get('tasks', []) || []).concat(tk.map(([title, off, list, prio], i) => ({ id: 'demo-t' + i, demo: true, title, list, due: off === '' ? '' : addDays(t, off), prio: prio || 0, done: false, repeat: '', note: '', created: i }))));
    const ev = [['Lauftreff', -6, '19:00', 'w', 'Stadtpark'], ['Abendessen mit Freunden', 3, '19:30', '', ''], ['Zahnreinigung', 9, '08:30', '', 'Praxis']];
    Store.set('events', (Store.get('events', []) || []).concat(ev.map(([title, off, time, repeat, place], i) => ({ id: 'demo-e' + i, demo: true, title, date: addDays(t, off), time, end: '', place, repeat, note: '' }))));
    Store.set('shopping', (Store.get('shopping', []) || []).concat(['Milch', 'Bananen', 'Haferflocken', 'Skyr', 'Brot', 'Spülmittel'].map((name, i) => ({ id: 'demo-s' + i, demo: true, name, cat: shopCat(name), done: false }))));
  },
  present() {
    return Workouts.all().some(w => w.demo) || Runs.all().some(r => r.demo) || Planner.tasks().some(x => x.demo) || Finance.fixed().some(x => x.demo);
  },
  route(R, km) {
    // gleichmäßige Runde mit leichtem Zittern rund um einen Startpunkt
    const lat = 53.5675, lon = 10.0005, r = 0.0016 * km / 2;
    const pts = [], n = 80;
    for (let i = 0; i <= n; i++) {
      const a = i / n * Math.PI * 2;
      const w = 1 + 0.25 * Math.sin(a * 3) + (R() - 0.5) * 0.04;
      pts.push([+(lat + Math.sin(a) * r * w * 0.6).toFixed(6), +(lon + Math.cos(a) * r * w).toFixed(6)]);
    }
    return pts;
  },
  remove() {
    Store.keys('w-').concat(Store.keys('r-')).forEach(k => { const a = Store.get(k); if (Array.isArray(a) && a.some(x => x.demo)) Store.set(k, a.filter(x => !x.demo)); });
    Store.keys('n-').forEach(k => {
      const m = Store.get(k);
      if (!m) return;
      const keep = {}; let changed = false;
      Object.keys(m).forEach(d => { if (m[d] && m[d].demo) changed = true; else keep[d] = m[d]; });
      if (changed) Store.set(k, keep);
    });
    ['body', 'fixkosten', 'zaehler', 'tasks', 'events', 'shopping'].concat(Store.keys('a-')).forEach(k => {
      const a = Store.get(k);
      if (Array.isArray(a) && a.some(x => x && x.demo)) Store.set(k, a.filter(x => !(x && x.demo)));
    });
  }
};

/* =====================================================================
   Start
   ===================================================================== */
// Laufende Anzeigen (Uhr, Trainingsdauer, Stoppuhr, Intervall, Live-Lauf)
setInterval(() => {
  $$('[data-tick]').forEach(el => {
    const k = el.dataset.tick, a = Active.get();
    if (k === 'wo' && a) el.textContent = fmtDur((Date.now() - a.start) / 1000);
    else if (k === 'sw') el.textContent = fmtSw(swElapsed());
    else if (k === 'iv' && IV.phase) el.textContent = fmtDur(Math.ceil(Math.max(0, IV.end - Date.now()) / 1000));
    else if (k === 'clock') el.textContent = fmtTime(Date.now());
  });
  if (LiveRun.st.status === 'running') LiveRun.paintLive();
}, 250);

function welcome() {
  if (settings().seenWelcome || Workouts.all().length || Runs.all().length || Store.keys('n-').length || Planner.tasks().length) return;
  if (Sync.state === 'connecting') return setTimeout(welcome, 1500);
  Sheet.open(`${sheetHead('Willkommen in deinem Dashboard')}
    <p>Training, Ernährung, Laufen, Finanzen, Planer und dein Zuhause, jeder Bereich auf seiner eigenen Seite. Willst du erst mit Beispieldaten schauen, wie alles aussieht?</p>
    <p class="small muted">Beispieldaten sind markiert und lassen sich unter Einstellungen mit einem Klick wieder entfernen.</p>
    <div class="sheet-actions"><button class="btn" data-act="welcomeEmpty">Leer starten</button><button class="btn btn-primary" data-act="welcomeDemo">Mit Beispieldaten</button></div>`);
}
A.welcomeEmpty = () => { saveSettings({ seenWelcome: true }); Sheet.close(); };
A.welcomeDemo = () => { Demo.load(); Sheet.close(); rerender(); };

applyTheme();
renderTopbar();
rerender();
if (RestTimer.st) RestTimer.run();
if (LiveRun.st.status === 'running') { LiveRun.listen(); LiveRun.wake(); }
Sync.init();
setTimeout(welcome, 900);
document.addEventListener('visibilitychange', () => {
  if (!document.hidden) {
    if (LiveRun.st.status === 'running') LiveRun.wake();
    if (RestTimer.st) RestTimer.tick();
    if (route().view === 'heute') rerender();
  }
});
