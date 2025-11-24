"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  animation?:
    | "fade-up"
    | "fade-down"
    | "fade-left"
    | "fade-right"
    | "zoom-in"
    | "fade";
  delay?: number;
  threshold?: number;
}

export function ScrollReveal({
  children,
  className = "",
  animation = "fade-up",
  delay = 0,
  threshold = 0.1,
}: ScrollRevealProps) {
  const { ref, isVisible } = useScrollReveal({ threshold, triggerOnce: true });

  const animationClasses = {
    "fade-up": "translate-y-12 opacity-0",
    "fade-down": "-translate-y-12 opacity-0",
    "fade-left": "translate-x-12 opacity-0",
    "fade-right": "-translate-x-12 opacity-0",
    "zoom-in": "scale-95 opacity-0",
    fade: "opacity-0",
  };

  const visibleClasses = "translate-y-0 translate-x-0 scale-100 opacity-100";

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${
        isVisible ? visibleClasses : animationClasses[animation]
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
