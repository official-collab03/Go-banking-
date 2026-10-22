// ============================================
// GoBank — Firebase Config
// ============================================

const firebaseConfig = {
  apiKey: "AIzaSyAueqbCcGN_LKDTd6YnPkPcWSIufFqsqwM",
  authDomain: "fedex-4bdba.firebaseapp.com",
  projectId: "fedex-4bdba",
  storageBucket: "fedex-4bdba.firebasestorage.app",
  messagingSenderId: "770647474446",
  appId: "1:770647474446:web:8a3a4c595b2286e7ab575f"
};

if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const STB_ADMIN_EMAIL = 'avaboremiracle@gmail.com';

function stbMoney(n) {
  return '₱' + Number(n || 0).toLocaleString('en-PH', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}
function stbDate(ts) {
  if (!ts) return '—';
  const d = ts.toDate ? ts.toDate() : new Date(ts);
  return d.toLocaleString('en-PH', { month: 'short', day: 'numeric', year: 'numeric', hour: 'numeric', minute: '2-digit' });
}
function stbGenAccountNumber() {
  let s = '';
  for (let i = 0; i < 10; i++) s += Math.floor(Math.random() * 10);
  return s;
}
function stbGenRoutingNumber() {
  let s = '';
  for (let i = 0; i < 9; i++) s += Math.floor(Math.random() * 10);
  return s;
}
function stbGenReference() {
  const d = new Date();
  return `GB-${d.getFullYear()}${String(d.getMonth() + 1).padStart(2, '0')}${String(d.getDate()).padStart(2, '0')}-${Math.floor(1000 + Math.random() * 9000)}`;
}
function stbHashPin(pin) {
  return btoa('gobank$' + pin + '$2026');
}
function stbToast(msg, type) {
  let el = document.getElementById('stb-toast');
  if (!el) { el = document.createElement('div'); el.id = 'stb-toast'; document.body.appendChild(el); }
  el.textContent = msg;
  el.className = 'stb-toast show' + (type ? ' ' + type : '');
  clearTimeout(el._t);
  el._t = setTimeout(() => { el.className = 'stb-toast'; }, 2800);
}