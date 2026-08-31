import { useEffect } from 'react';

export const useScrollReveal = () => {
  useEffect(() => {
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: '0px 0px -40px 0px',
      threshold: 0.05,
    });

    const observeAll = () => {
      const revealElements = document.querySelectorAll('.reveal');
      revealElements.forEach((el) => {
        if (!el.classList.contains('active')) {
          observer.observe(el);
        }
      });
    };

    observeAll();

    // Observe dynamic DOM changes so new elements are automatically revealed
    const mutationObserver = new MutationObserver(() => {
      observeAll();
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);
};
