import React, { useState, useRef, useEffect } from "react";

/**
 * OptimizedImage — lazy-loaded image component with blur-up placeholder.
 * Uses native IntersectionObserver for deferred loading and a smooth
 * CSS transition from blurred placeholder to crisp final image.
 *
 * Props:
 *   - src: image source URL (required)
 *   - alt: alt text (required)
 *   - className: additional CSS classes
 *   - wrapClassName: wrapper CSS classes
 *   - eager: set true for above-fold images (skips lazy loading)
 *   - All other props forwarded to <img>
 */
export default function OptimizedImage({
  src,
  alt,
  className = "",
  wrapClassName = "",
  eager = false,
  style = {},
  ...rest
}) {
  const [loaded, setLoaded] = useState(false);
  const [inView, setInView] = useState(eager);
  const imgRef = useRef(null);

  useEffect(() => {
    if (eager || inView) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px 0px" } // Start loading 200px before entering viewport
    );

    if (imgRef.current) observer.observe(imgRef.current);
    return () => observer.disconnect();
  }, [eager, inView]);

  return (
    <div ref={imgRef} className={`optimized-img-wrap ${wrapClassName}`}>
      {inView && (
        <img
          src={src}
          alt={alt}
          className={`optimized-img ${loaded ? "img-loaded" : "img-loading"} ${className}`}
          onLoad={() => setLoaded(true)}
          loading={eager ? "eager" : "lazy"}
          decoding="async"
          style={style}
          {...rest}
        />
      )}
    </div>
  );
}
