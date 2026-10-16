/* Gadsden: piezas de la ficha de producto (barra fija, variantes, galería, características, ofertas). */
(function () {
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

  /* ---------- sincronizar con la variante elegida ---------- */
  // Dawn vuelve a pedir la sección al cambiar de variante; acá se reemplaza todo lo marcado con data-gad-sync.
  function syncFromHtml(html) {
    document.querySelectorAll('[data-gad-sync][id]').forEach((el) => {
      const fresh = html.getElementById(el.id);
      if (fresh) el.innerHTML = fresh.innerHTML;
    });
    if (window.Gadsden && Gadsden.refresh) Gadsden.refresh(document);
  }

  function onVariantChange({ data }) {
    if (!data || !data.html) return;
    syncFromHtml(data.html);
    skipSoldOut(data);
    filterGallery();
    document.querySelectorAll('gad-sticky-bar').forEach((bar) => bar.measure());
  }

  function subscribeVariant() {
    if (typeof subscribe === 'function' && typeof PUB_SUB_EVENTS !== 'undefined') subscribe(PUB_SUB_EVENTS.variantChange, onVariantChange);
  }

  /* ---------- PX4: ocultar y saltear agotadas ---------- */
  function skipSoldOut(data) {
    const variant = data.variant;
    if (variant && variant.available) return;
    const selects = document.querySelector('variant-selects[data-gad-hide-sold-out]');
    if (!selects) return;
    // La opción que quedó en un valor agotado pasa al primer valor disponible.
    const groups = Array.from(selects.querySelectorAll(':scope > fieldset, :scope > .product-form__input--dropdown')).reverse();
    for (const group of groups) {
      const select = group.querySelector('select');
      if (select) {
        const current = select.selectedOptions[0];
        if (current && current.textContent.trim() !== current.value) {
          const next = Array.from(select.options).find((o) => o.textContent.trim() === o.value);
          if (next) {
            Array.from(select.options).forEach((o) => o.removeAttribute('selected'));
            next.setAttribute('selected', 'selected');
            select.value = next.value;
            select.dispatchEvent(new Event('change', { bubbles: true }));
            return;
          }
        }
        continue;
      }
      const checked = group.querySelector('input:checked');
      if (checked && (checked.classList.contains('disabled') || checked.classList.contains('visually-disabled'))) {
        const next = group.querySelector('input:not(.disabled):not(.visually-disabled)');
        if (next) {
          next.click();
          return;
        }
      }
    }
  }

  /* ---------- PX6: saltear carrito y "comprar ahora" ---------- */
  async function addAndCheckout(form, btn) {
    btn && btn.classList.add('loading');
    const spinner = btn && btn.querySelector('.loading__spinner');
    if (spinner) spinner.classList.remove('hidden');
    try {
      const res = await fetch(window.routes.cart_add_url, {
        method: 'POST',
        headers: { 'X-Requested-With': 'XMLHttpRequest', Accept: 'application/javascript' },
        body: new FormData(form),
      });
      const json = await res.json();
      if (json.status) {
        const wrap = form.closest('product-form');
        const msg = wrap && wrap.querySelector('.product-form__error-message');
        if (msg) {
          msg.textContent = json.description || json.message || window.cartStrings.error;
          msg.closest('.product-form__error-message-wrapper').hidden = false;
        }
        return;
      }
      window.location.href = `${(window.Shopify && Shopify.routes && Shopify.routes.root) || '/'}checkout`;
    } finally {
      btn && btn.classList.remove('loading');
      if (spinner) spinner.classList.add('hidden');
    }
  }

  document.addEventListener(
    'submit',
    (e) => {
      const form = e.target;
      if (!form.matches || !form.matches('form[data-type="add-to-cart-form"]')) return;
      const buttons = form.querySelector('[data-gad-skip-cart="true"]');
      if (!buttons) return;
      e.preventDefault();
      e.stopImmediatePropagation();
      addAndCheckout(form, form.querySelector('.product-form__submit'));
    },
    true
  );

  document.addEventListener('click', (e) => {
    const btn = e.target.closest && e.target.closest('[data-gad-buy-now]');
    if (!btn) return;
    e.preventDefault();
    const form = btn.closest('form');
    if (form) addAndCheckout(form, btn);
  });

  /* ---------- P10: estrellas que llevan a una sección ---------- */
  document.addEventListener('click', (e) => {
    const a = e.target.closest && e.target.closest('a[data-gad-scroll]');
    if (!a) return;
    const id = decodeURIComponent((a.getAttribute('href') || '').replace('#', ''));
    const target = id && document.getElementById(id);
    if (!target) return;
    e.preventDefault();
    if (window.Gadsden && Gadsden.scrollToTarget) Gadsden.scrollToTarget(target);
    else target.scrollIntoView({ behavior: 'smooth' });
  });

  /* ---------- PX1: galería (puntos en mobile, flechas en desktop, filtro por opción) ---------- */
  function initGallery(gallery) {
    if (gallery._gad) return;
    gallery._gad = true;
    const list = gallery.querySelector('.product__media-list');
    const dots = gallery.querySelector('.gad-gallery__dots');
    if (list && dots) {
      const build = () => {
        const items = Array.from(list.querySelectorAll(':scope > .product__media-item')).filter((li) => !li.hidden);
        dots.innerHTML = '';
        if (items.length < 2) return;
        items.forEach((item, i) => {
          const b = document.createElement('button');
          b.type = 'button';
          b.tabIndex = -1;
          b.className = 'gad-gallery__dot';
          b.addEventListener('click', () => list.scrollTo({ left: item.offsetLeft - list.offsetLeft, behavior: 'smooth' }));
          dots.appendChild(b);
        });
        update();
      };
      const update = () => {
        const items = Array.from(list.querySelectorAll(':scope > .product__media-item')).filter((li) => !li.hidden);
        if (!items.length) return;
        const center = list.scrollLeft + list.clientWidth / 2;
        let best = 0;
        let bestDist = Infinity;
        items.forEach((item, i) => {
          const mid = item.offsetLeft - list.offsetLeft + item.offsetWidth / 2;
          const d = Math.abs(mid - center);
          if (d < bestDist) {
            bestDist = d;
            best = i;
          }
        });
        Array.from(dots.children).forEach((d, i) => d.classList.toggle('is-active', i === best));
      };
      list.addEventListener('scroll', () => requestAnimationFrame(update), { passive: true });
      gallery._gadBuildDots = build;
      build();
    }
    gallery.addEventListener('click', (e) => {
      const btn = e.target.closest('[data-gad-gallery-step]');
      if (!btn) return;
      const step = parseInt(btn.dataset.gadGalleryStep, 10);
      const thumbs = Array.from(gallery.querySelectorAll('.thumbnail-list__item')).filter((li) => !li.hidden);
      const items = Array.from(gallery.querySelectorAll('.product__media-list > .product__media-item')).filter((li) => !li.hidden);
      const activeIndex = Math.max(0, items.findIndex((li) => li.classList.contains('is-active')));
      const next = items[(activeIndex + step + items.length) % items.length];
      if (!next) return;
      const thumb = thumbs.find((t) => t.dataset.target === next.dataset.mediaId);
      if (thumb) thumb.querySelector('button').click();
      else if (gallery.setActiveMedia) gallery.setActiveMedia(next.dataset.mediaId, false);
    });
  }

  function filterGallery() {
    document.querySelectorAll('media-gallery[data-gad-filter-option]').forEach((gallery) => {
      const optionName = gallery.dataset.gadFilterOption.toLowerCase();
      const info = gallery.closest('product-info') || document;
      const selects = info.querySelector('variant-selects');
      if (!selects) return;
      let selected = null;
      const values = [];
      selects.querySelectorAll('fieldset, .product-form__input--dropdown').forEach((group) => {
        const input = group.querySelector('input[data-option-name], select');
        const name = (input && (input.dataset.optionName || (input.name || '').replace(/^options\[|\]$/g, ''))) || '';
        if (name.toLowerCase() !== optionName) return;
        group.querySelectorAll('input, option').forEach((o) => values.push((o.value || '').toLowerCase()));
        const checked = group.querySelector('input:checked') || (group.querySelector('select') && group.querySelector('select').selectedOptions[0]);
        if (checked) selected = (checked.value || '').toLowerCase();
      });
      if (!selected) return;
      const match = (alt) => {
        const a = (alt || '').toLowerCase().trim();
        return a === selected || !values.includes(a);
      };
      gallery.querySelectorAll('.product__media-list > .product__media-item, .thumbnail-list__item').forEach((li) => {
        li.hidden = !match(li.dataset.alt);
      });
      const active = gallery.querySelector('.product__media-list > .product__media-item.is-active');
      if (active && active.hidden) {
        const first = gallery.querySelector('.product__media-list > .product__media-item:not([hidden])');
        if (first && gallery.setActiveMedia) gallery.setActiveMedia(first.dataset.mediaId, false);
      }
      if (gallery._gadBuildDots) gallery._gadBuildDots();
    });
  }

  /* ---------- P08/P09: ventanas de las características ---------- */
  document.addEventListener('click', (e) => {
    const opener = e.target.closest && e.target.closest('[data-gad-feature-open]');
    if (opener) {
      if (opener.closest('gad-carousel.is-dragging')) return;
      const dialog = document.getElementById(opener.dataset.gadFeatureOpen);
      if (!dialog) return;
      const video = dialog.querySelector('.gad-feature-modal__video');
      if (video && !video.querySelector('iframe')) {
        const iframe = document.createElement('iframe');
        iframe.src = video.dataset.src;
        iframe.title = video.dataset.title || '';
        iframe.allow = 'autoplay; encrypted-media; picture-in-picture; fullscreen';
        iframe.loading = 'lazy';
        video.appendChild(iframe);
      }
      dialog.showModal();
      document.documentElement.classList.add('gad-modal-open');
      return;
    }
    const closer = e.target.closest && e.target.closest('[data-gad-feature-close]');
    const dialog = e.target.matches && e.target.matches('dialog.gad-feature-modal') ? e.target : null;
    if (closer) closer.closest('dialog').close();
    else if (dialog) dialog.close();
  });
  document.addEventListener(
    'close',
    (e) => {
      if (!e.target.matches || !e.target.matches('dialog.gad-feature-modal')) return;
      const iframe = e.target.querySelector('.gad-feature-modal__video iframe');
      if (iframe) iframe.remove();
      document.documentElement.classList.remove('gad-modal-open');
    },
    true
  );

  /* ---------- PX10: descuentos por cantidad ---------- */
  function applyOffer(input) {
    const box = input.closest('gad-quantity-offers');
    const qty = parseInt(input.value, 10) || 1;
    box.querySelectorAll('.gad-offers__item').forEach((item) => item.classList.toggle('is-selected', item.contains(input)));
    const info = box.closest('product-info') || document;
    const target = info.querySelector('.quantity__input') || box.querySelector('[data-gad-offers-qty]');
    if (target) {
      target.value = qty;
      target.dispatchEvent(new Event('change', { bubbles: true }));
    }
    box.dataset.qty = qty;
  }
  document.addEventListener('change', (e) => {
    if (e.target.matches && e.target.matches('.gad-offers__input')) applyOffer(e.target);
  });

  function initOffers() {
    document.querySelectorAll('gad-quantity-offers').forEach((box) => {
      const remembered = box.dataset.qty;
      let input = remembered && box.querySelector(`.gad-offers__input[value="${remembered}"]`);
      if (input) input.checked = true;
      input = input || box.querySelector('.gad-offers__input:checked');
      if (input) applyOffer(input);
    });
  }

  /* ---------- arranque ---------- */
  function init() {
    document.querySelectorAll('media-gallery.gad-gallery').forEach(initGallery);
    filterGallery();
    initOffers();
  }

  document.addEventListener('DOMContentLoaded', () => {
    subscribeVariant();
    init();
  });
  document.addEventListener('shopify:section:load', init);
  if (typeof subscribe === 'function' && typeof PUB_SUB_EVENTS !== 'undefined')
    subscribe(PUB_SUB_EVENTS.variantChange, () => setTimeout(initOffers, 0));
  window.GadProduct = { syncFromHtml, filterGallery, sleep };
})();

/* ---------- P01: barra de compra fija ---------- */
class GadStickyBar extends HTMLElement {
  connectedCallback() {
    if (this._moved) return;
    if (this.closest('quick-add-modal, product-info[data-original-section]')) {
      this.remove();
      return;
    }
    // La barra vive al final del <body>: los ancestros con transformaciones romperían position: fixed.
    document.querySelectorAll(`body > gad-sticky-bar#${CSS.escape(this.id)}`).forEach((old) => old !== this && old.remove());
    this._moved = true;
    document.body.appendChild(this);
    this.section = this.dataset.section;
    this.form = document.getElementById(this.dataset.form);
    this.visible = this.dataset.show === 'always';
    this.addEventListener('click', (e) => this.onClick(e));
    this.addEventListener('change', (e) => this.onChange(e));
    this.onScroll = () => {
      if (this._raf) return;
      this._raf = requestAnimationFrame(() => {
        this._raf = null;
        this.check();
      });
    };
    window.addEventListener('scroll', this.onScroll, { passive: true });
    window.addEventListener('resize', this.onScroll);
    this.spacer = document.createElement('div');
    this.spacer.className = 'gad-sticky-spacer';
    this.spacer.setAttribute('aria-hidden', 'true');
    document.body.appendChild(this.spacer);
    if (window.subscribe && typeof PUB_SUB_EVENTS !== 'undefined') {
      this.unsubCart = subscribe(PUB_SUB_EVENTS.cartUpdate, () => this.stopLoading());
      this.unsubErr = subscribe(PUB_SUB_EVENTS.cartError, () => this.stopLoading());
    }
    document.addEventListener('shopify:section:unload', (e) => {
      if (e.target.id === `shopify-section-${this.section}`) this.destroy();
    });
    this.measure();
    this.check();
  }

  destroy() {
    window.removeEventListener('scroll', this.onScroll);
    window.removeEventListener('resize', this.onScroll);
    if (this.unsubCart) this.unsubCart();
    if (this.unsubErr) this.unsubErr();
    if (this.spacer) this.spacer.remove();
    document.documentElement.style.setProperty('--gad-sticky-bar-h', '0px');
    this.remove();
  }

  get anchor() {
    return document.getElementById(`ProductSubmitButton-${this.section}`) || document.getElementById(`ProductInfo-${this.section}`);
  }

  measure() {
    const h = this.offsetHeight;
    this.spacer.style.height = `${h}px`;
    const footer = document.querySelector('.footer') || document.querySelector('footer');
    if (footer) this.spacer.style.backgroundColor = getComputedStyle(footer).backgroundColor;
    document.documentElement.style.setProperty('--gad-sticky-bar-full-h', `${h}px`);
  }

  check() {
    let show = true;
    if (this.dataset.show !== 'always') {
      const anchor = this.anchor;
      show = anchor ? anchor.getBoundingClientRect().bottom < 0 : false;
    }
    this.classList.toggle('is-visible', show);
    this.setAttribute('aria-hidden', show ? 'false' : 'true');
    this.inert = !show;
    document.documentElement.style.setProperty('--gad-sticky-bar-h', show ? `${this.offsetHeight}px` : '0px');
  }

  scrollTarget() {
    const action = this.dataset.action;
    let target = null;
    if (action === 'scroll_variants') target = document.querySelector(`#variant-selects-${this.section}`);
    if (action === 'scroll_offers') target = document.querySelector('[data-gad-qty-offers]');
    if (action === 'scroll_plans') target = document.querySelector('[data-gad-plans]');
    return target || document.getElementById(`ProductInfo-${this.section}`);
  }

  onClick(e) {
    const btn = e.target.closest('[data-gad-sticky-btn]');
    if (!btn || btn.disabled) return;
    if (this.dataset.action !== 'add_to_cart') {
      const target = this.scrollTarget();
      if (target && window.Gadsden) Gadsden.scrollToTarget(target);
      return;
    }
    const form = document.getElementById(this.dataset.form);
    if (!form) return;
    btn.classList.add('loading');
    const spinner = btn.querySelector('.loading__spinner');
    if (spinner) spinner.classList.remove('hidden');
    clearTimeout(this._loadingTimer);
    this._loadingTimer = setTimeout(() => this.stopLoading(), 6000);
    if (form.requestSubmit) form.requestSubmit();
    else form.querySelector('[type="submit"]').click();
  }

  stopLoading() {
    clearTimeout(this._loadingTimer);
    this.querySelectorAll('[data-gad-sticky-btn]').forEach((btn) => {
      btn.classList.remove('loading');
      const spinner = btn.querySelector('.loading__spinner');
      if (spinner) spinner.classList.add('hidden');
    });
  }

  /* elegir una variante en la barra cambia la de la ficha (y viceversa, por la sincronización) */
  onChange(e) {
    const selects = document.querySelector(`#variant-selects-${this.section}`);
    if (!selects) return;
    let wanted = [];
    if (e.target.matches('[data-gad-sticky-variant]')) {
      const opt = e.target.selectedOptions[0];
      wanted = (opt.dataset.options || '').split('|||');
    } else if (e.target.matches('[data-gad-sticky-option]')) {
      wanted = [];
      wanted[parseInt(e.target.dataset.gadStickyOption, 10) - 1] = e.target.value;
    } else return;
    const groups = Array.from(selects.querySelectorAll(':scope > fieldset, :scope > .product-form__input--dropdown'));
    let last = null;
    groups.forEach((group, i) => {
      const value = wanted[i];
      if (value === undefined) return;
      const select = group.querySelector('select');
      if (select) {
        const option = Array.from(select.options).find((o) => o.value === value);
        if (!option || option.selected) return;
        Array.from(select.options).forEach((o) => o.removeAttribute('selected'));
        option.setAttribute('selected', 'selected');
        select.value = value;
        last = select;
      } else {
        const input = Array.from(group.querySelectorAll('input')).find((x) => x.value === value);
        if (!input || input.checked) return;
        input.checked = true;
        last = input;
      }
    });
    if (last) last.dispatchEvent(new Event('change', { bubbles: true }));
  }
}

if (!customElements.get('gad-sticky-bar')) customElements.define('gad-sticky-bar', GadStickyBar);
