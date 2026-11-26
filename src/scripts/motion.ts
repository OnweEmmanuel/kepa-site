// Shared motion helpers. Every effect checks `reduced` and, when motion is
// off, leaves (or puts) elements in their final state. Initial "before"
// states live in CSS under `.js` + `prefers-reduced-motion: no-preference`,
// so without JavaScript the page shows everything finished.

export const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/** A real mouse or trackpad (no tilt or magnet effects on touch). */
export const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

export const easeOut = 'cubic-bezier(0.22, 1, 0.36, 1)';
export const spring = 'cubic-bezier(0.34, 1.56, 0.64, 1)';

/** Runs `cb` once, the first time `el` is at least `threshold` in view. */
export function onceInView(el: Element, cb: () => void, threshold = 0.35) {
  if (!('IntersectionObserver' in window)) return cb();
  const io = new IntersectionObserver(
    (entries) => {
      if (entries.some((e) => e.isIntersecting)) {
        io.disconnect();
        cb();
      }
    },
    { threshold },
  );
  io.observe(el);
}

/** Calls `cb(true/false)` whenever `el` enters or leaves the viewport. */
export function watchInView(el: Element, cb: (visible: boolean) => void) {
  if (!('IntersectionObserver' in window)) return cb(true);
  new IntersectionObserver((entries) => entries.forEach((e) => cb(e.isIntersecting)), {
    threshold: 0.1,
  }).observe(el);
}

/** 1240 → "1,240.00" with `decimals` places, like the app's amounts. */
export function formatNumber(n: number, decimals: number) {
  const [int, frac] = n.toFixed(decimals).split('.');
  const grouped = int.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return frac ? `${grouped}.${frac}` : grouped;
}

/**
 * Counts every `[data-count]` element from `data-from` (default 0) to its
 * `data-count` value when it scrolls into view. `data-prefix` and
 * `data-decimals` shape the text. Tabular figures keep the width steady.
 */
export function countUps(root: ParentNode = document) {
  root.querySelectorAll<HTMLElement>('[data-count]').forEach((el) => {
    const to = Number(el.dataset.count);
    const from = Number(el.dataset.from ?? 0);
    const decimals = Number(el.dataset.decimals ?? 0);
    const prefix = el.dataset.prefix ?? '';
    const duration = Number(el.dataset.duration ?? 1600);
    const render = (v: number) => (el.textContent = prefix + formatNumber(v, decimals));
    if (reduced) return render(to);
    render(from);
    onceInView(el, () => {
      const start = performance.now();
      const tick = (now: number) => {
        const t = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - t, 3);
        render(from + (to - from) * eased);
        if (t < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    });
  });
}

export const wait = (ms: number) => new Promise((r) => setTimeout(r, ms));
