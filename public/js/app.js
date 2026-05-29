const API = '/api/products';

/* ── SVG ilustrasi baju per kategori ── */
const catSVG = {
  Atasan: `<svg width="70" height="76" viewBox="0 0 80 90" xmlns="http://www.w3.org/2000/svg">
    <polygon points="20,18 0,32 10,36 10,82 70,82 70,36 80,32 60,18 52,26 40,22 28,26"
      fill="#e07a3a" stroke="#c4652a" stroke-width="1.5" stroke-linejoin="round"/>
    <polygon points="20,18 28,26 40,22 52,26 60,18 52,10 40,14 28,10"
      fill="#f5a06a" stroke="#c4652a" stroke-width="1"/>
    <rect x="26" y="30" width="28" height="3" rx="1.5" fill="#c4652a" opacity="0.25"/>
    <rect x="26" y="37" width="28" height="3" rx="1.5" fill="#c4652a" opacity="0.25"/>
    <rect x="26" y="44" width="28" height="3" rx="1.5" fill="#c4652a" opacity="0.25"/>
  </svg>`,
  Bawahan: `<svg width="70" height="76" viewBox="0 0 80 90" xmlns="http://www.w3.org/2000/svg">
    <rect x="8"  y="10" width="28" height="65" rx="6" fill="#e07a3a" stroke="#c4652a" stroke-width="1.5"/>
    <rect x="44" y="10" width="28" height="65" rx="6" fill="#e07a3a" stroke="#c4652a" stroke-width="1.5"/>
    <rect x="8"  y="10" width="64" height="16" rx="4" fill="#f5a06a" stroke="#c4652a" stroke-width="1"/>
    <rect x="34" y="10" width="12" height="16" rx="2" fill="#c4652a" opacity="0.2"/>
    <rect x="14" y="32" width="16" height="3" rx="1.5" fill="#c4652a" opacity="0.25"/>
    <rect x="50" y="32" width="16" height="3" rx="1.5" fill="#c4652a" opacity="0.25"/>
    <rect x="14" y="40" width="16" height="3" rx="1.5" fill="#c4652a" opacity="0.2"/>
    <rect x="50" y="40" width="16" height="3" rx="1.5" fill="#c4652a" opacity="0.2"/>
  </svg>`,
  Dress: `<svg width="70" height="76" viewBox="0 0 80 90" xmlns="http://www.w3.org/2000/svg">
    <path d="M40,8 C40,8 52,12 58,18 L68,30 L58,34 L62,82 L18,82 L22,34 L12,30 L22,18 C28,12 40,8 40,8 Z"
      fill="#e05a8a" stroke="#b8366a" stroke-width="1.5" stroke-linejoin="round"/>
    <path d="M22,34 Q40,28 58,34" fill="none" stroke="#b8366a" stroke-width="1"/>
    <path d="M20,50 Q40,44 60,50" fill="none" stroke="#b8366a" stroke-width="0.8" opacity="0.5"/>
    <path d="M19,60 Q40,54 61,60" fill="none" stroke="#b8366a" stroke-width="0.8" opacity="0.4"/>
    <circle cx="30" cy="43" r="2.5" fill="#f590b8" opacity="0.8"/>
    <circle cx="40" cy="40" r="2.5" fill="#f590b8" opacity="0.8"/>
    <circle cx="50" cy="43" r="2.5" fill="#f590b8" opacity="0.8"/>
    <circle cx="35" cy="53" r="2"   fill="#f590b8" opacity="0.6"/>
    <circle cx="45" cy="53" r="2"   fill="#f590b8" opacity="0.6"/>
  </svg>`,
  Jaket: `<svg width="70" height="76" viewBox="0 0 80 90" xmlns="http://www.w3.org/2000/svg">
    <path d="M15,22 L0,30 L8,50 L18,46 L18,82 L62,82 L62,46 L72,50 L80,30 L65,22
             L60,16 L52,20 L40,18 L28,20 L20,16 Z"
      fill="#7c5abf" stroke="#5a3a9a" stroke-width="1.5" stroke-linejoin="round"/>
    <path d="M28,20 L40,18 L52,20 L52,30 L40,32 L28,30 Z"
      fill="#9b7ed4" stroke="#5a3a9a" stroke-width="1"/>
    <rect x="36" y="38" width="8" height="24" rx="2" fill="#5a3a9a" opacity="0.2"/>
    <rect x="36" y="38" width="8" height="3"  rx="1" fill="#5a3a9a" opacity="0.4"/>
    <rect x="36" y="44" width="8" height="1.5" rx="0.75" fill="#5a3a9a" opacity="0.3"/>
    <rect x="36" y="48" width="8" height="1.5" rx="0.75" fill="#5a3a9a" opacity="0.3"/>
    <rect x="36" y="52" width="8" height="1.5" rx="0.75" fill="#5a3a9a" opacity="0.3"/>
    <rect x="36" y="56" width="8" height="1.5" rx="0.75" fill="#5a3a9a" opacity="0.3"/>
    <circle cx="22" cy="50" r="2" fill="#9b7ed4" opacity="0.5"/>
    <circle cx="22" cy="57" r="2" fill="#9b7ed4" opacity="0.5"/>
    <circle cx="22" cy="64" r="2" fill="#9b7ed4" opacity="0.5"/>
  </svg>`,
  Tidur: `<svg width="70" height="76" viewBox="0 0 80 90" xmlns="http://www.w3.org/2000/svg">
    <polygon points="22,16 0,28 10,34 10,82 70,82 70,34 80,28 58,16 50,24 40,20 30,24"
      fill="#2d9b6f" stroke="#1e7550" stroke-width="1.5" stroke-linejoin="round"/>
    <polygon points="22,16 30,24 40,20 50,24 58,16 50,8 40,12 30,8"
      fill="#5cc49a" stroke="#1e7550" stroke-width="1"/>
    <circle cx="26" cy="46" r="3"   fill="#5cc49a" opacity="0.7"/>
    <circle cx="40" cy="42" r="3"   fill="#5cc49a" opacity="0.7"/>
    <circle cx="54" cy="46" r="3"   fill="#5cc49a" opacity="0.7"/>
    <circle cx="33" cy="56" r="2.5" fill="#5cc49a" opacity="0.5"/>
    <circle cx="47" cy="56" r="2.5" fill="#5cc49a" opacity="0.5"/>
    <circle cx="40" cy="65" r="2.5" fill="#5cc49a" opacity="0.5"/>
  </svg>`,
};

const catClass = {
  Atasan:'cat-atasan', Bawahan:'cat-bawahan',
  Dress:'cat-dress', Jaket:'cat-jaket', Tidur:'cat-tidur',
};

/* ── Dark mode ── */
const darkToggle = document.getElementById('darkToggle');
if (localStorage.getItem('dark') === '1') { document.body.classList.add('dark'); darkToggle.textContent = '☀️'; }
darkToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  const d = document.body.classList.contains('dark');
  darkToggle.textContent = d ? '☀️' : '🌙';
  localStorage.setItem('dark', d ? '1' : '0');
});

/* ── Helpers ── */
function rp(n) { return 'Rp ' + Number(n).toLocaleString('id-ID'); }
function escHtml(s) { return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }
function stokBadge(s) {
  if (s == 0)  return `<span class="badge b-empty">Habis</span>`;
  if (s <= 10) return `<span class="badge b-low">Menipis</span>`;
  return `<span class="badge b-ok">Tersedia</span>`;
}

/* ── Toast ── */
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg; t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2500);
}

/* ── Modal ── */
function showModal(p) {
  document.getElementById('modalTitle').textContent = p.name;
  document.getElementById('modalContent').innerHTML = `
    <div class="modal-row"><strong>Kategori</strong><span>${p.category}</span></div>
    <div class="modal-row"><strong>Harga</strong><span>${rp(p.price)}</span></div>
    <div class="modal-row"><strong>Stok</strong><span>${p.stock} pcs &nbsp;${stokBadge(p.stock)}</span></div>
    <div class="modal-row"><strong>Ditambah</strong><span>${new Date(p.created_at).toLocaleDateString('id-ID',{day:'numeric',month:'long',year:'numeric'})}</span></div>
    <div class="modal-row"><strong>Diupdate</strong><span>${new Date(p.updated_at).toLocaleDateString('id-ID',{day:'numeric',month:'long',year:'numeric'})}</span></div>
  `;
  document.getElementById('modal').style.display = 'flex';
}
function closeModal() { document.getElementById('modal').style.display = 'none'; }
document.getElementById('modal').addEventListener('click', e => {
  if (e.target === document.getElementById('modal')) closeModal();
});

/* ── Stats ── */
async function loadStats() {
  try {
    const res  = await fetch(`${API}/stats`);
    const { data } = await res.json();
    document.getElementById('statTotal').textContent  = data.total_produk  || 0;
    document.getElementById('statStok').textContent   = data.total_stok    || 0;
    document.getElementById('statMurah').textContent  = data.harga_termurah ? rp(data.harga_termurah) : '-';
    document.getElementById('statMahal').textContent  = data.harga_termahal ? rp(data.harga_termahal) : '-';
    document.getElementById('statKat').textContent    = data.total_kategori || 0;
  } catch (e) { console.error(e); }
}

/* ── Load & Render ── */
let searchTimeout = null;
async function loadProducts() {
  const q   = document.getElementById('searchInput').value;
  const cat = document.getElementById('filterCat').value;
  let url   = `${API}?`;
  if (q)   url += `search=${encodeURIComponent(q)}&`;
  if (cat) url += `category=${cat}&`;

  try {
    const res  = await fetch(url);
    const { data } = await res.json();
    renderProducts(data || []);
    loadStats();
  } catch (e) { showToast('❌ Gagal memuat data'); }
}

function renderProducts(list) {
  const grid = document.getElementById('productGrid');
  if (!list.length) {
    grid.innerHTML = `<div class="empty-state"><div class="empty-icon">🛍️</div><p>Belum ada produk. Yuk tambahkan!</p></div>`;
    return;
  }
  grid.innerHTML = list.map(p => `
    <div class="product-card ${catClass[p.category] || ''}">
      <div class="card-img">${catSVG[p.category] || ''}</div>
      <div class="product-name">${escHtml(p.name)}</div>
      <div class="product-price">${rp(p.price)}</div>
      <div class="product-meta">
        <span class="badge b-cat">${p.category}</span>
        ${stokBadge(p.stock)}
        <span class="stok-txt">Stok: ${p.stock}</span>
      </div>
      <div class="card-actions">
        <button class="btn-edit" onclick="editProduct(${p.id})">✏️ Edit</button>
        <button class="btn-del"  onclick="deleteProduct(${p.id})">🗑</button>
      </div>
    </div>
  `).join('');

  grid.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('click', e => {
      if (e.target.closest('button')) return;
      const idx = Array.from(grid.querySelectorAll('.product-card')).indexOf(card);
      showModal(list[idx]);
    });
  });
}

/* ── Form Submit ── */
document.getElementById('productForm').addEventListener('submit', async e => {
  e.preventDefault();
  const id   = document.getElementById('editId').value;
  const body = {
    name:     document.getElementById('iName').value.trim(),
    price:    document.getElementById('iPrice').value,
    stock:    document.getElementById('iStock').value,
    category: document.getElementById('iCat').value,
  };
  try {
    const res  = await fetch(id ? `${API}/${id}` : API, {
      method:  id ? 'PUT' : 'POST',
      headers: { 'Content-Type': 'application/json' },
      body:    JSON.stringify(body),
    });
    const json = await res.json();
    if (json.success) {
      showToast(id ? '✏️ Produk diperbarui!' : '✅ Produk ditambahkan!');
      resetForm();
      loadProducts();
    } else { showToast('❌ ' + json.message); }
  } catch (e) { showToast('❌ Gagal menyimpan'); }
});

/* ── Edit ── */
async function editProduct(id) {
  try {
    const res  = await fetch(`${API}/${id}`);
    const { data } = await res.json();
    document.getElementById('editId').value  = data.id;
    document.getElementById('iName').value   = data.name;
    document.getElementById('iPrice').value  = data.price;
    document.getElementById('iStock').value  = data.stock;
    document.getElementById('iCat').value    = data.category;
    document.getElementById('formTitle').textContent     = '✏️ Edit Produk';
    document.getElementById('submitBtn').textContent     = 'Update';
    document.getElementById('cancelBtn').style.display  = 'block';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } catch (e) { showToast('❌ Gagal memuat data'); }
}

/* ── Delete ── */
async function deleteProduct(id) {
  if (!confirm('Yakin hapus produk ini?')) return;
  try {
    const res  = await fetch(`${API}/${id}`, { method: 'DELETE' });
    const json = await res.json();
    if (json.success) { showToast('🗑 Produk dihapus'); loadProducts(); }
    else showToast('❌ ' + json.message);
  } catch (e) { showToast('❌ Gagal menghapus'); }
}

/* ── Cancel ── */
document.getElementById('cancelBtn').addEventListener('click', resetForm);
function resetForm() {
  document.getElementById('productForm').reset();
  document.getElementById('editId').value = '';
  document.getElementById('formTitle').textContent    = '+ Tambah Produk';
  document.getElementById('submitBtn').textContent    = 'Simpan';
  document.getElementById('cancelBtn').style.display = 'none';
}

/* ── Filter & Search ── */
document.getElementById('searchInput').addEventListener('input', () => {
  clearTimeout(searchTimeout);
  searchTimeout = setTimeout(loadProducts, 350);
});
document.getElementById('filterCat').addEventListener('change', loadProducts);

/* ── Init ── */
loadProducts();
