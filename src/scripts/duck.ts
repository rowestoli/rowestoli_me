// Duck eye: the pupil follows the pointer (up to 3 fine pixels sideways, 2 up or down), blinks now
// and then, glances around when idle, and the hero duck quacks when clicked.

const MAX = 3; // max sideways pupil travel, in fine pixels
const MAX_Y = 2; // max vertical travel (the eye is a little wider than tall)
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
  // Aim from the eye itself, wherever it sits in this crop of the duck
  const eye = duck.querySelector('[data-eye]')?.getBoundingClientRect();
  const cx = eye && eye.width ? eye.left + eye.width / 2 : r.left + r.width / 2;
  const cy = eye && eye.width ? eye.top + eye.height / 2 : r.top + r.height / 3;
  const dx = tx - cx;
  const dy = ty - cy;
  const dist = Math.hypot(dx, dy) || 1;
  // Reach full travel once the pointer is a duck-width or so away
  const reach = Math.min(1, dist / Math.max(60, r.width * 0.9));
  const ox = Math.round((dx / dist) * MAX * reach);
  const oy = Math.round((dy / dist) * MAX_Y * reach);
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
    const oy = Math.round(Math.random() * 2 * MAX_Y - MAX_Y);
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
