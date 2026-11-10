// Page interactions: project filters, card tilt and highlight, and the photo lightbox.
// Everything re-binds on astro:page-load because the site uses client-side page transitions.

type Cleanup = () => void;
let cleanups: Cleanup[] = [];

const reduceMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function withTransition(update: () => void) {
  const doc = document as Document & { startViewTransition?: (cb: () => void) => unknown };
  if (doc.startViewTransition && !reduceMotion()) doc.startViewTransition(update);
  else update();
}

function initFilters() {
  const chips = Array.from(document.querySelectorAll<HTMLButtonElement>('[data-filter]'));
  if (!chips.length) return;
  const rows = Array.from(document.querySelectorAll<HTMLElement>('[data-category]'));
  const empty = document.querySelector<HTMLElement>('[data-empty]');

  const apply = (id: string) => {
    let shown = 0;
    rows.forEach((r) => {
      const show = id === 'all' || r.dataset.category === id;
      r.hidden = !show;
      if (show) shown++;
    });
    chips.forEach((c) => c.setAttribute('aria-pressed', String(c.dataset.filter === id)));
    if (empty) empty.hidden = shown > 0;
    const url = new URL(location.href);
    if (id === 'all') url.searchParams.delete('type');
    else url.searchParams.set('type', id);
    history.replaceState(history.state, '', url);
  };

  const handlers = chips.map((chip) => {
    const h = () => withTransition(() => apply(chip.dataset.filter || 'all'));
    chip.addEventListener('click', h);
    return () => chip.removeEventListener('click', h);
  });
  const initial = new URL(location.href).searchParams.get('type');
  if (initial && chips.some((c) => c.dataset.filter === initial)) apply(initial);
  cleanups.push(() => handlers.forEach((off) => off()));
}

function initTilt() {
  if (reduceMotion() || !window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
  const MAX = 5; // degrees
  const els = Array.from(document.querySelectorAll<HTMLElement>('[data-tilt]'));
  const offs = els.map((el) => {
    const move = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width;
      const py = (e.clientY - r.top) / r.height;
      el.classList.add('is-tilting');
      el.style.setProperty('--ry', `${((px - 0.5) * 2 * MAX).toFixed(2)}deg`);
      el.style.setProperty('--rx', `${((0.5 - py) * 2 * MAX * 0.7).toFixed(2)}deg`);
      el.style.setProperty('--mx', `${(px * 100).toFixed(1)}%`);
      el.style.setProperty('--my', `${(py * 100).toFixed(1)}%`);
    };
    const leave = () => {
      el.classList.remove('is-tilting');
      el.style.setProperty('--rx', '0deg');
      el.style.setProperty('--ry', '0deg');
    };
    el.addEventListener('pointermove', move);
    el.addEventListener('pointerleave', leave);
    return () => {
      el.removeEventListener('pointermove', move);
      el.removeEventListener('pointerleave', leave);
    };
  });
  cleanups.push(() => offs.forEach((off) => off()));
}

function initLightbox() {
  const dialog = document.querySelector<HTMLDialogElement>('[data-lightbox-dialog]');
  if (!dialog) return;
  const frame = dialog.querySelector<HTMLElement>('[data-lightbox-frame]')!;
  const close = dialog.querySelector<HTMLButtonElement>('[data-lightbox-close]')!;
  const items = Array.from(document.querySelectorAll<HTMLElement>('[data-lightbox]'));

  const offs = items.map((item) => {
    const open = () => {
      frame.replaceChildren(...Array.from(item.children).map((c) => c.cloneNode(true)));
      dialog.showModal();
    };
    item.addEventListener('click', open);
    return () => item.removeEventListener('click', open);
  });
  const shut = () => dialog.close();
  const backdrop = (e: MouseEvent) => { if (e.target === dialog) dialog.close(); };
  close.addEventListener('click', shut);
  dialog.addEventListener('click', backdrop);
  cleanups.push(() => {
    offs.forEach((off) => off());
    close.removeEventListener('click', shut);
    dialog.removeEventListener('click', backdrop);
  });
}

document.addEventListener('astro:page-load', () => {
  cleanups.forEach((c) => c());
  cleanups = [];
  initFilters();
  initTilt();
  initLightbox();
});
