// ============================================================
//  Lenovo Clone – Variant B (Top Bar / Dropdown Chip Filter)
//  Product data + filtering logic
// ============================================================

const PRODUCTS = [
  {
    id: 1, name: "ThinkPad X1 Carbon Gen 12",
    series: "ThinkPad", type: "Ultrabook",
    processor: "Intel Core Ultra 7 155H", processorBrand: "Intel",
    ram: 16, storage: "512GB SSD", screen: 14.0,
    price: 1499, origPrice: 1899, savings: 400,
    rating: 4.8, reviews: 245, badge: "Best Seller", color: "Black",
    cardBg: "#1a2340", cardAccent: "#294E95"
  },
  {
    id: 2, name: "IdeaPad Slim 5 Gen 9",
    series: "IdeaPad", type: "Everyday",
    processor: "AMD Ryzen 5 7530U", processorBrand: "AMD",
    ram: 8, storage: "256GB SSD", screen: 15.6,
    price: 549, origPrice: 699, savings: 150,
    rating: 4.5, reviews: 312, badge: "", color: "Arctic Grey",
    cardBg: "#1e3a5f", cardAccent: "#4a90d9"
  },
  {
    id: 3, name: "Legion 5 Pro Gen 8",
    series: "Legion", type: "Gaming",
    processor: "AMD Ryzen 7 7745HX", processorBrand: "AMD",
    ram: 16, storage: "1TB SSD", screen: 16.0,
    price: 1299, origPrice: 1499, savings: 200,
    rating: 4.7, reviews: 189, badge: "Gaming Pick", color: "Onyx Grey",
    cardBg: "#1a0a2e", cardAccent: "#7c3aed"
  },
  {
    id: 4, name: "Yoga 9i Gen 9",
    series: "Yoga", type: "2-in-1",
    processor: "Intel Core Ultra 7 165H", processorBrand: "Intel",
    ram: 16, storage: "1TB SSD", screen: 14.0,
    price: 1199, origPrice: 1599, savings: 400,
    rating: 4.9, reviews: 156, badge: "Editor's Choice", color: "Oatmeal",
    cardBg: "#3d2b1f", cardAccent: "#c9881a"
  },
  {
    id: 5, name: "ThinkBook 14 Gen 6",
    series: "ThinkBook", type: "Business",
    processor: "Intel Core i5-1335U", processorBrand: "Intel",
    ram: 8, storage: "256GB SSD", screen: 14.0,
    price: 799, origPrice: 999, savings: 200,
    rating: 4.4, reviews: 98, badge: "", color: "Arctic Grey",
    cardBg: "#1a3050", cardAccent: "#3a7bd5"
  },
  {
    id: 6, name: "IdeaPad Gaming 3 Gen 8",
    series: "IdeaPad", type: "Gaming",
    processor: "Intel Core i7-13620H", processorBrand: "Intel",
    ram: 16, storage: "512GB SSD", screen: 15.6,
    price: 799, origPrice: 1099, savings: 300,
    rating: 4.6, reviews: 203, badge: "Value Pick", color: "Onyx Grey",
    cardBg: "#0f1a2e", cardAccent: "#e1251b"
  },
  {
    id: 7, name: "ThinkPad E14 Gen 5",
    series: "ThinkPad", type: "Business",
    processor: "Intel Core i7-1355U", processorBrand: "Intel",
    ram: 16, storage: "512GB SSD", screen: 14.0,
    price: 899, origPrice: 1099, savings: 200,
    rating: 4.5, reviews: 134, badge: "", color: "Graphite Black",
    cardBg: "#141c2b", cardAccent: "#294E95"
  },
  {
    id: 8, name: "Yoga 7i Gen 9 2-in-1",
    series: "Yoga", type: "2-in-1",
    processor: "Intel Core Ultra 5 125H", processorBrand: "Intel",
    ram: 16, storage: "512GB SSD", screen: 16.0,
    price: 999, origPrice: 1299, savings: 300,
    rating: 4.7, reviews: 167, badge: "", color: "Storm Grey",
    cardBg: "#2a3040", cardAccent: "#5b8dd9"
  },
  {
    id: 9, name: "Legion Slim 5 Gen 8",
    series: "Legion", type: "Gaming",
    processor: "AMD Ryzen 7 7745HX", processorBrand: "AMD",
    ram: 16, storage: "512GB SSD", screen: 15.6,
    price: 1099, origPrice: 1399, savings: 300,
    rating: 4.8, reviews: 221, badge: "", color: "Misty Grey",
    cardBg: "#1a0f2e", cardAccent: "#9c4dcc"
  },
  {
    id: 10, name: "IdeaPad Flex 5 Gen 8",
    series: "IdeaPad", type: "2-in-1",
    processor: "AMD Ryzen 5 7530U", processorBrand: "AMD",
    ram: 8, storage: "256GB SSD", screen: 14.0,
    price: 449, origPrice: 599, savings: 150,
    rating: 4.3, reviews: 278, badge: "Budget Pick", color: "Abyss Blue",
    cardBg: "#0f2040", cardAccent: "#1565c0"
  },
  {
    id: 11, name: "ThinkPad L14 Gen 4",
    series: "ThinkPad", type: "Business",
    processor: "AMD Ryzen 7 PRO 7730U", processorBrand: "AMD",
    ram: 32, storage: "1TB SSD", screen: 14.0,
    price: 1099, origPrice: 1399, savings: 300,
    rating: 4.6, reviews: 87, badge: "", color: "Thunder Black",
    cardBg: "#0d1520", cardAccent: "#294E95"
  },
  {
    id: 12, name: "Yoga 6 Gen 8",
    series: "Yoga", type: "2-in-1",
    processor: "AMD Ryzen 7 7730U", processorBrand: "AMD",
    ram: 16, storage: "512GB SSD", screen: 13.3,
    price: 849, origPrice: 999, savings: 150,
    rating: 4.7, reviews: 143, badge: "", color: "Storm Grey",
    cardBg: "#2e2030", cardAccent: "#9c27b0"
  }
];

// ── Filter Definitions ─────────────────────────────────────
const FILTER_DEFS = [
  { key: 'series',        label: 'Series',      type: 'multi',
    options: ['ThinkPad','IdeaPad','Legion','Yoga','ThinkBook'] },
  { key: 'processorBrand',label: 'Processor',   type: 'multi',
    options: ['Intel','AMD'] },
  { key: 'type',          label: 'Type',        type: 'multi',
    options: ['Ultrabook','Everyday','Gaming','Business','2-in-1'] },
  { key: 'ram',           label: 'RAM',         type: 'multi',
    options: [8, 16, 32] },
  { key: 'storage',       label: 'Storage',     type: 'multi',
    options: ['256GB SSD','512GB SSD','1TB SSD'] },
  { key: 'screen',        label: 'Screen Size', type: 'multi',
    options: [13.3, 14.0, 15.6, 16.0] },
  { key: 'price',         label: 'Price',       type: 'range',
    min: 0, max: 2000 }
];

// ── State ─────────────────────────────────────────────────
let filters = {
  series: [], processorBrand: [], type: [],
  ram: [], storage: [], screen: [],
  priceMin: 0, priceMax: 2000
};
let sortBy = 'relevance';
let openDropdown = null;

// ── Build top filter bar ───────────────────────────────────
function buildFilterBar() {
  const bar = document.getElementById('filter-bar');
  if (!bar) return;

  bar.innerHTML = FILTER_DEFS.map(def => {
    if (def.type === 'range') {
      return `
      <div class="chip-wrapper" data-key="price">
        <button class="filter-chip" data-key="price" onclick="toggleDropdown('price')">
          Price <svg class="chip-arrow" viewBox="0 0 10 6"><path d="M0 0l5 6 5-6z" fill="currentColor"/></svg>
        </button>
        <div class="chip-dropdown" id="dd-price">
          <div class="price-range-wrapper">
            <label>Min Price: <strong id="price-min-lbl">$0</strong></label>
            <input type="range" id="price-min" min="0" max="2000" step="50" value="0" oninput="onPriceChange()">
            <label>Max Price: <strong id="price-max-lbl">$2000</strong></label>
            <input type="range" id="price-max" min="0" max="2000" step="50" value="2000" oninput="onPriceChange()">
          </div>
        </div>
      </div>`;
    }
    const opts = def.options.map(o => {
      const display = def.key === 'ram'    ? o + 'GB'  :
                      def.key === 'screen' ? o + '"'   : o;
      return `<label class="dd-option">
        <input type="checkbox" class="filter-checkbox" data-key="${def.key}" value="${o}" onchange="onCheckboxChange('${def.key}')">
        <span>${display}</span>
      </label>`;
    }).join('');
    return `
    <div class="chip-wrapper" data-key="${def.key}">
      <button class="filter-chip" data-key="${def.key}" onclick="toggleDropdown('${def.key}')">
        ${def.label} <svg class="chip-arrow" viewBox="0 0 10 6"><path d="M0 0l5 6 5-6z" fill="currentColor"/></svg>
      </button>
      <div class="chip-dropdown" id="dd-${def.key}">${opts}</div>
    </div>`;
  }).join('');
}

function toggleDropdown(key) {
  if (openDropdown && openDropdown !== key) {
    closeDropdown(openDropdown);
  }
  const dd   = document.getElementById('dd-' + key);
  const chip = document.querySelector(`.filter-chip[data-key="${key}"]`);
  if (!dd) return;

  const isOpen = dd.classList.contains('open');
  if (isOpen) {
    closeDropdown(key);
  } else {
    // Position the fixed dropdown directly below the chip button
    if (chip) {
      const rect = chip.getBoundingClientRect();
      dd.style.top  = (rect.bottom + 6) + 'px';
      dd.style.left = rect.left + 'px';
    }
    dd.classList.add('open');
    chip && chip.classList.add('active');
    openDropdown = key;
  }
}

function closeDropdown(key) {
  const dd = document.getElementById('dd-' + key);
  const chip = document.querySelector(`.filter-chip[data-key="${key}"]`);
  if (dd) dd.classList.remove('open');
  if (chip && !hasActiveFilterForKey(key)) chip.classList.remove('active');
  if (openDropdown === key) openDropdown = null;
}

function hasActiveFilterForKey(key) {
  if (key === 'price') return filters.priceMin > 0 || filters.priceMax < 2000;
  return (filters[key] || []).length > 0;
}

// Close dropdowns on outside click
document.addEventListener('click', e => {
  if (!e.target.closest('.chip-wrapper') && openDropdown) {
    closeDropdown(openDropdown);
  }
});

function onCheckboxChange(key) {
  const vals = [...document.querySelectorAll(`.filter-checkbox[data-key="${key}"]:checked`)].map(c => c.value);
  if (key === 'ram' || key === 'screen') {
    filters[key] = vals.map(Number);
  } else {
    filters[key] = vals;
  }
  updateChipState(key);
  applyFiltersAndRender();
}

function onPriceChange() {
  const pMin = parseInt(document.getElementById('price-min').value) || 0;
  const pMax = parseInt(document.getElementById('price-max').value) || 2000;
  filters.priceMin = Math.min(pMin, pMax);
  filters.priceMax = Math.max(pMin, pMax);
  document.getElementById('price-min-lbl').textContent = '$' + filters.priceMin;
  document.getElementById('price-max-lbl').textContent = '$' + filters.priceMax;
  updateChipState('price');
  applyFiltersAndRender();
}

function updateChipState(key) {
  const chip = document.querySelector(`.filter-chip[data-key="${key}"]`);
  if (!chip) return;
  const active = hasActiveFilterForKey(key);
  if (active) chip.classList.add('has-filter');
  else chip.classList.remove('has-filter');
}

function applyFiltersAndRender() {
  let results = PRODUCTS.filter(p => {
    if (filters.series.length         && !filters.series.includes(p.series))            return false;
    if (filters.processorBrand.length  && !filters.processorBrand.includes(p.processorBrand)) return false;
    if (filters.type.length            && !filters.type.includes(p.type))               return false;
    if (filters.ram.length             && !filters.ram.includes(p.ram))                 return false;
    if (filters.storage.length         && !filters.storage.includes(p.storage))         return false;
    if (filters.screen.length          && !filters.screen.includes(p.screen))           return false;
    if (p.price < filters.priceMin || p.price > filters.priceMax)                       return false;
    return true;
  });

  switch (sortBy) {
    case 'price-asc':  results.sort((a, b) => a.price - b.price); break;
    case 'price-desc': results.sort((a, b) => b.price - a.price); break;
    case 'rating':     results.sort((a, b) => b.rating - a.rating); break;
    case 'savings':    results.sort((a, b) => b.savings - a.savings); break;
    case 'newest':     results.sort((a, b) => b.id - a.id); break;
  }

  const countEl = document.getElementById('results-count');
  if (countEl) countEl.textContent = results.length;

  renderProducts(results);
  renderActiveTags();
}

function renderProducts(products) {
  const grid = document.getElementById('products-grid');
  if (!grid) return;
  if (!products.length) {
    grid.innerHTML = `
      <div class="no-results">
        <div class="no-results-icon">🔍</div>
        <h3>No laptops match your filters</h3>
        <p>Try adjusting or clearing your filters.</p>
        <button class="btn btn-primary" onclick="clearAllFilters()">Clear All Filters</button>
      </div>`;
    return;
  }
  grid.innerHTML = products.map(productCard).join('');
}

function productCard(p) {
  const savePct = Math.round((p.savings / p.origPrice) * 100);
  const stars   = renderStars(p.rating);
  const badge   = p.badge ? `<div class="product-badge">${p.badge}</div>` : '';
  return `
<article class="product-card" data-id="${p.id}">
  ${badge}
  <div class="product-img" style="background:linear-gradient(135deg,${p.cardBg} 0%,${p.cardAccent}55 100%)">
    ${laptopSVG(p.cardAccent)}
    <span class="series-chip" style="background:${p.cardAccent}">${p.series}</span>
  </div>
  <div class="product-body">
    <h3 class="product-name">${p.name}</h3>
    <ul class="product-specs">
      <li><span>CPU</span>${p.processor}</li>
      <li><span>RAM</span>${p.ram}GB</li>
      <li><span>Storage</span>${p.storage}</li>
      <li><span>Display</span>${p.screen}" · ${p.color}</li>
    </ul>
    <div class="product-rating">${stars}<span class="review-count">(${p.reviews})</span></div>
    <div class="product-pricing">
      <span class="price-current">$${p.price.toLocaleString()}</span>
      <span class="price-original">$${p.origPrice.toLocaleString()}</span>
      <span class="price-save">Save $${p.savings} (${savePct}% off)</span>
    </div>
    <div class="product-actions">
      <button class="btn btn-primary" onclick="addToCart(${p.id})">Add to Cart</button>
      <button class="btn btn-ghost" onclick="learnMore(${p.id})">Learn More</button>
    </div>
    <button class="btn btn-compare" id="cmp-btn-${p.id}" onclick="toggleCompare(${p.id})">⊕ Compare</button>
  </div>
</article>`;
}

function laptopSVG(accent) {
  return `<svg class="laptop-svg" viewBox="0 0 220 145" xmlns="http://www.w3.org/2000/svg">
    <rect x="18" y="8" width="184" height="112" rx="10" fill="${accent}" opacity="0.25"/>
    <rect x="24" y="14" width="172" height="100" rx="7" fill="#0a0a1a" opacity="0.9"/>
    <rect x="30" y="20" width="160" height="88" rx="4" fill="#111827" opacity="0.8"/>
    <line x1="30" y1="60" x2="190" y2="60" stroke="${accent}" stroke-width="0.5" opacity="0.3"/>
    <circle cx="110" cy="17" r="2.5" fill="${accent}" opacity="0.6"/>
    <rect x="2" y="120" width="216" height="16" rx="5" fill="${accent}" opacity="0.3"/>
    <rect x="85" y="123" width="50" height="7" rx="3" fill="${accent}" opacity="0.2"/>
    <text x="110" y="72" font-size="26" text-anchor="middle" fill="${accent}" opacity="0.35" font-family="monospace">⌨</text>
  </svg>`;
}

function renderStars(rating) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5 ? 1 : 0;
  const empty = 5 - full - half;
  return `<span class="stars" aria-label="${rating} out of 5">` +
    '★'.repeat(full) + (half ? '½' : '') + '☆'.repeat(empty) +
    `</span><span class="rating-val">${rating}</span>`;
}

function renderActiveTags() {
  const row = document.getElementById('active-tags-row');
  if (!row) return;
  const tags = [];
  const push = (key, val, label) => tags.push({key, val, label});

  filters.series.forEach(v         => push('series',         v, v));
  filters.processorBrand.forEach(v  => push('processorBrand', v, v + ' CPU'));
  filters.type.forEach(v            => push('type',           v, v));
  filters.ram.forEach(v             => push('ram',            v, v + 'GB RAM'));
  filters.storage.forEach(v         => push('storage',        v, v));
  filters.screen.forEach(v          => push('screen',         v, v + '"'));
  if (filters.priceMin > 0 || filters.priceMax < 2000) {
    tags.push({key:'price', val:'range', label:`$${filters.priceMin}–$${filters.priceMax}`});
  }

  if (!tags.length) { row.innerHTML = ''; row.style.display = 'none'; return; }
  row.style.display = 'flex';
  row.innerHTML =
    `<span class="tags-label">Active:</span>` +
    tags.map(t =>
      `<button class="active-tag" onclick="removeTag('${t.key}','${t.val}')">${t.label} ×</button>`
    ).join('') +
    `<button class="clear-tags-btn" onclick="clearAllFilters()">Clear All</button>`;
}

function removeTag(key, rawVal) {
  if (key === 'price') {
    filters.priceMin = 0; filters.priceMax = 2000;
    const pMin = document.getElementById('price-min');
    const pMax = document.getElementById('price-max');
    if (pMin) pMin.value = 0;
    if (pMax) pMax.value = 2000;
    document.getElementById('price-min-lbl').textContent = '$0';
    document.getElementById('price-max-lbl').textContent = '$2000';
  } else {
    const val = (key === 'ram' || key === 'screen') ? Number(rawVal) : rawVal;
    const cb = document.querySelector(`.filter-checkbox[data-key="${key}"][value="${rawVal}"]`);
    if (cb) cb.checked = false;
    filters[key] = (filters[key] || []).filter(v => v !== val);
  }
  updateChipState(key);
  applyFiltersAndRender();
}

function clearAllFilters() {
  document.querySelectorAll('.filter-checkbox').forEach(cb => cb.checked = false);
  const pMin = document.getElementById('price-min');
  const pMax = document.getElementById('price-max');
  if (pMin) pMin.value = 0;
  if (pMax) pMax.value = 2000;
  const pMinLbl = document.getElementById('price-min-lbl');
  const pMaxLbl = document.getElementById('price-max-lbl');
  if (pMinLbl) pMinLbl.textContent = '$0';
  if (pMaxLbl) pMaxLbl.textContent = '$2000';
  filters = { series:[], processorBrand:[], type:[], ram:[], storage:[], screen:[], priceMin:0, priceMax:2000 };
  FILTER_DEFS.forEach(d => updateChipState(d.key));
  sortBy = 'relevance';
  const sortEl = document.getElementById('sort-select');
  if (sortEl) sortEl.value = 'relevance';
  applyFiltersAndRender();
}

// ── Cart (localStorage) ───────────────────────────────────
const CART_KEY = 'lenovo_cart';

function getCart() {
  try { return JSON.parse(localStorage.getItem(CART_KEY)) || []; }
  catch { return []; }
}
function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}
function loadCartCount() {
  const total = getCart().reduce((s, i) => s + i.quantity, 0);
  const el = document.getElementById('cart-count');
  if (el) el.textContent = total;
}

function addToCart(id) {
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;
  const cart = getCart();
  const existing = cart.find(i => i.id === id);
  if (existing) { existing.quantity += 1; }
  else { cart.push({ ...p, quantity: 1 }); }
  saveCart(cart);
  loadCartCount();
  showToast(`${p.name} added to cart!`);
}
function learnMore(id) {
  window.location.href = `product.html?id=${id}`;
}
function showToast(msg) {
  const t = document.createElement('div');
  t.className = 'toast';
  t.textContent = msg;
  document.body.appendChild(t);
  setTimeout(() => t.classList.add('show'), 10);
  setTimeout(() => { t.classList.remove('show'); setTimeout(() => t.remove(), 400); }, 2500);
}

// ── Init ──────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  const searchBtn = document.getElementById('search-toggle');
  const searchBox = document.getElementById('search-box');
  if (searchBtn && searchBox) {
    searchBtn.addEventListener('click', () => searchBox.classList.toggle('open'));
  }

  const sortEl = document.getElementById('sort-select');
  if (sortEl) sortEl.addEventListener('change', e => { sortBy = e.target.value; applyFiltersAndRender(); });

  loadCartCount();
  if (document.getElementById('products-grid')) {
    buildFilterBar();
    applyFiltersAndRender();
    injectCompareTray();
  }
});

// ── Compare ───────────────────────────────────────────────
const COMPARE_KEY = 'lenovo_compare';
const COMPARE_MAX = 4;

function getCompare() {
  try { return JSON.parse(localStorage.getItem(COMPARE_KEY)) || []; }
  catch { return []; }
}
function saveCompare(ids) { localStorage.setItem(COMPARE_KEY, JSON.stringify(ids)); }

function toggleCompare(id) {
  let ids = getCompare();
  if (ids.includes(id)) {
    ids = ids.filter(x => x !== id);
  } else {
    if (ids.length >= COMPARE_MAX) {
      showToast(`Max ${COMPARE_MAX} laptops can be compared.`);
      return;
    }
    ids.push(id);
  }
  saveCompare(ids);
  loadCompareState();
  renderCompareTray();
}

function loadCompareState() {
  const ids = getCompare();
  PRODUCTS.forEach(p => {
    const btn = document.getElementById(`cmp-btn-${p.id}`);
    if (!btn) return;
    const inList = ids.includes(p.id);
    btn.textContent = inList ? '✓ Added' : '⊕ Compare';
    btn.classList.toggle('cmp-active', inList);
    btn.disabled = !inList && ids.length >= COMPARE_MAX;
  });
}

function renderCompareTray() {
  const ids = getCompare();
  const tray = document.getElementById('compare-tray');
  if (!tray) return;
  if (ids.length === 0) {
    tray.classList.remove('visible');
    document.body.classList.remove('cmp-bar-open');
    return;
  }
  tray.classList.add('visible');
  document.body.classList.add('cmp-bar-open');
  const slots = ids.map(id => {
    const p = PRODUCTS.find(x => x.id === id);
    return `<div class="cmp-slot">
      <span class="cmp-slot-name">${p.name}</span>
      <button class="cmp-slot-remove" onclick="toggleCompare(${p.id})" title="Remove">×</button>
    </div>`;
  }).join('');
  const empty = ids.length < COMPARE_MAX
    ? `<div class="cmp-slot cmp-slot-empty">+ Add laptop</div>` : '';
  document.getElementById('cmp-slots').innerHTML = slots + empty;
  document.getElementById('cmp-go-btn').textContent = `Compare (${ids.length})`;
}

function goCompare() {
  const ids = getCompare();
  if (ids.length < 2) { showToast('Select at least 2 laptops to compare.'); return; }
  window.location.href = `compare.html?ids=${ids.join(',')}`;
}

function clearCompare() {
  saveCompare([]);
  loadCompareState();
  renderCompareTray();
}

function injectCompareTray() {
  const tray = document.createElement('div');
  tray.id = 'compare-tray';
  tray.className = 'compare-tray';
  tray.innerHTML = `
    <div class="compare-tray-inner">
      <div class="cmp-tray-label">🔍 Compare</div>
      <div class="cmp-slots" id="cmp-slots"></div>
      <div class="cmp-tray-actions">
        <button class="btn btn-primary" id="cmp-go-btn" onclick="goCompare()">Compare</button>
        <button class="btn btn-ghost" onclick="clearCompare()">Clear</button>
      </div>
    </div>`;
  document.body.appendChild(tray);
  loadCompareState();
  renderCompareTray();
}
