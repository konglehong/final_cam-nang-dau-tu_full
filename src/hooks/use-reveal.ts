import { useEffect } from "react";

/**
 * Adds .is-visible to any element with .reveal as it scrolls into view.
 * Re-scans the DOM whenever `key` changes (e.g. on route change).
 */
export function useReveal(key?: string) {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const scan = () => {
      const els = document.querySelectorAll<HTMLElement>(".reveal:not(.is-visible)");
      if (!els.length) return null;

      if (!("IntersectionObserver" in window)) {
        els.forEach((el) => el.classList.add("is-visible"));
        return null;
      }

      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              io.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -60px 0px" },
      );

      els.forEach((el) => io.observe(el));
      return io;
    };

    // Slight delay so newly-mounted route DOM is in place
    const t = setTimeout(scan, 30);
    const io = scan();

    return () => {
      clearTimeout(t);
      io?.disconnect();
    };
  }, [key]);
}
