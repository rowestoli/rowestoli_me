// Duck eyes: pupils follow the pointer (up to 3 art-pixels in any direction), blink now and then,
// glance around when idle, and the hero duck quacks when clicked.

const MAX = 3; // max pupil travel in art pixels
const QUACKS = ['Quack!', 'Quack quack.', 'Hi there.', 'Try QuackLog.', 'Okay, that tickles.'];

let pointer: { x: number; y: number } | null = null;
let lastMove = 0;
let frame = 0;
let idleTimer: number | undefined;
let blinkTimer: number | undefined;
let quackCount = 0;
let cleanup: (() => void) | null = null;

const reduceMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const ducks = () => Array.from(document.querySelectorAll<HTMLElement>('[data-duck]'));

function setPupils(duck: HTMLElement, ox: number, oy: number) {
  const pupils = duck.querySelector<SVGGElement>('[data-pupils]');
  if (pupils) pupils.style.transform = `translate(${ox}px, ${oy}px)`;
}

function look(duck: HTMLElement, tx: number, ty: number) {
  const r = duck.getBoundingClientRect();
  if (!r.width) return;
  // Eyes sit about a third of the way down the full duck, lower in the head-only crop
  const cx = r.left + r.width / 2;
  const cy = r.top + r.height * (duck.classList.contains('duck--head') ? 0.45 : 0.32);
  const dx = tx - cx;
  const dy = ty - cy;
  const dist = Math.hypot(dx, dy) || 1;
  // Reach full travel once the pointer is a duck-width or so away
  const reach = Math.min(1, dist / Math.max(60, r.width * 0.9));
  let ox = Math.round((dx / dist) * MAX * reach);
  let oy = Math.round((dy / dist) * MAX * reach);
  if (Math.hypot(ox, oy) > MAX + 0.2) {
    ox = Math.round(ox * 0.75);
    oy = Math.round(oy * 0.75);
  }
  setPupils(duck, ox, oy);
}

function update() {
  frame = 0;
  if (!pointer) return;
  for (const d of ducks()) look(d, pointer.x, pointer.y);
}
const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };

function onMove(e: PointerEvent) {
  pointer = { x: e.clientX, y: e.clientY };
  lastMove = performance.now();
  schedule();
}

function blink() {
  for (const d of ducks()) {
    d.classList.add('is-blinking');
    window.setTimeout(() => d.classList.remove('is-blinking'), 120);
  }
  blinkTimer = window.setTimeout(blink, 2500 + Math.random() * 4000);
}

function idle() {
  if (performance.now() - lastMove > 4000) {
    const ox = Math.round(Math.random() * 2 * MAX - MAX);
    const oy = Math.round(Math.random() * 2 * (MAX - 1) - (MAX - 1));
    for (const d of ducks()) setPupils(d, ox, oy);
  }
  idleTimer = window.setTimeout(idle, 1800 + Math.random() * 2200);
}

function quack(duck: HTMLElement) {
  const bubble = duck.querySelector<HTMLElement>('[data-bubble]');
  duck.classList.remove('is-quacking');
  void duck.offsetWidth;
  duck.classList.add('is-quacking');
  if (bubble) {
    bubble.textContent = QUACKS[Math.min(quackCount, QUACKS.length - 1)];
    bubble.classList.add('is-on');
    window.clearTimeout(Number(bubble.dataset.t));
    bubble.dataset.t = String(window.setTimeout(() => bubble.classList.remove('is-on'), 1400));
  }
  quackCount++;
}

function init() {
  cleanup?.();
  const interactive = document.querySelectorAll<HTMLElement>('.duck--interactive');
  const onClick = (e: Event) => quack(e.currentTarget as HTMLElement);
  const onKey = (e: KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      quack(e.currentTarget as HTMLElement);
    }
  };
  interactive.forEach((d) => {
    d.addEventListener('click', onClick);
    d.addEventListener('keydown', onKey);
  });
  window.addEventListener('pointermove', onMove, { passive: true });
  window.addEventListener('pointerdown', onMove, { passive: true });
  if (!reduceMotion()) {
    blinkTimer = window.setTimeout(blink, 2000);
    idleTimer = window.setTimeout(idle, 3000);
  }
  schedule();

  cleanup = () => {
    interactive.forEach((d) => {
      d.removeEventListener('click', onClick);
      d.removeEventListener('keydown', onKey);
    });
    window.removeEventListener('pointermove', onMove);
    window.removeEventListener('pointerdown', onMove);
    window.clearTimeout(blinkTimer);
    window.clearTimeout(idleTimer);
  };
}

document.addEventListener('astro:page-load', init);
