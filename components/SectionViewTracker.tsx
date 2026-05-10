"use client";

import { useEffect } from "react";
import { trackSectionView } from "@/lib/gtag";

/** React Strict Mode の再マウントでも二重送信しない */
const sectionViewSent = new Set<string>();

export function SectionViewTracker() {
  useEffect(() => {
    const nodes = document.querySelectorAll<HTMLElement>("[data-analytics-section]");

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const name = entry.target.getAttribute("data-analytics-section");
          if (!name || sectionViewSent.has(name)) continue;
          sectionViewSent.add(name);
          trackSectionView(name);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.5 }
    );

    nodes.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return null;
}
