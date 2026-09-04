"use client";

import { useEffect } from "react";

export default function ScrollReveal() {
  useEffect(() => {
    const items = document.querySelectorAll("[data-reveal]");
    if (!items.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );

    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return null;
}
