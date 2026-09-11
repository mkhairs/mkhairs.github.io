import { useEffect } from 'react';

export function useScrollReveal() {
  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (!('IntersectionObserver' in window)) return;
    const seen = new WeakSet<Element>();
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.05, rootMargin: '0px 0px -24px 0px' });
    const scan = () => {
      document.querySelectorAll<HTMLElement>('.reveal').forEach(element => {
        if (seen.has(element)) return;
        seen.add(element);
        if (media.matches) element.classList.add('active');
        else {
          element.classList.add('reveal-ready');
          observer.observe(element);
        }
      });
    };
    const disableMotion = () => {
      if (media.matches) {
        document.querySelectorAll('.reveal').forEach(element => element.classList.add('active'));
        observer.disconnect();
      }
    };
    // Keyboard focus must never enter a visually hidden card.
    const revealFocused = (event: FocusEvent) => {
      if (event.target instanceof HTMLElement) event.target.closest('.reveal')?.classList.add('active');
    };
    scan();
    const mutations = new MutationObserver(scan);
    const main = document.querySelector('main');
    if (main) mutations.observe(main, { childList: true, subtree: true });
    media.addEventListener('change', disableMotion);
    document.addEventListener('focusin', revealFocused);
    return () => {
      observer.disconnect(); mutations.disconnect();
      document.querySelectorAll('.reveal-ready').forEach(element => element.classList.remove('reveal-ready'));
      media.removeEventListener('change', disableMotion);
      document.removeEventListener('focusin', revealFocused);
    };
  }, []);
}
