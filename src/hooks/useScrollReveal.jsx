import { useEffect, useRef, useState } from "react";

/**
 * Custom hook for scroll-reveal animations using IntersectionObserver.
 * Returns a ref to attach to the element and a boolean indicating visibility.
 * 
 * @param {Object} options
 * @param {number} options.threshold - Visibility threshold (0-1). Default: 0.15
 * @param {string} options.rootMargin - Root margin. Default: "0px 0px -60px 0px"
 * @param {boolean} options.triggerOnce - Only trigger once. Default: true
 */
export function useScrollReveal({
  threshold = 0.15,
  rootMargin = "0px 0px -60px 0px",
  triggerOnce = true,
} = {}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) observer.unobserve(el);
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin, triggerOnce]);

  return [ref, isVisible];
}

/**
 * Lightweight wrapper component that applies scroll-reveal animation.
 * Wrap any section with <ScrollReveal> to get a fade-up-in effect.
 * 
 * Props:
 *   - delay: CSS transition delay in ms (default: 0)
 *   - duration: CSS transition duration in ms (default: 700)
 *   - distance: translateY distance in px (default: 40)
 *   - className: additional classNames
 *   - as: HTML element to render (default: "div")
 *   - threshold: IntersectionObserver threshold (default: 0.12)
 */
export function ScrollReveal({
  children,
  delay = 0,
  duration = 700,
  distance = 40,
  className = "",
  as: Tag = "div",
  threshold = 0.12,
  style: externalStyle = {},
  ...rest
}) {
  const [ref, isVisible] = useScrollReveal({ threshold, triggerOnce: true });

  const baseStyle = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0)" : `translateY(${distance}px)`,
    transition: `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
    willChange: "opacity, transform",
    ...externalStyle,
  };

  return (
    <Tag ref={ref} className={className} style={baseStyle} {...rest}>
      {children}
    </Tag>
  );
}
