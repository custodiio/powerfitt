/**
 * PowerFitt Academia - Analytics & Conversion Tracking Manager
 * Integrates Google Tag Manager (GTM), Google Analytics 4 (GA4), and Meta Pixel (Facebook/Instagram Ads)
 * Safely initializes only when environment variables are provided via .env
 */

const GTM_ID = import.meta.env.VITE_GTM_ID;
const GA4_ID = import.meta.env.VITE_GA4_ID;
const META_PIXEL_ID = import.meta.env.VITE_META_PIXEL_ID;

/**
 * Initializes all configured tracking scripts
 */
export function initAnalytics() {
  if (typeof window === "undefined") return;

  // Initialize DataLayer for GTM / GA4
  window.dataLayer = window.dataLayer || [];

  // 1. GOOGLE TAG MANAGER (GTM)
  if (GTM_ID && !window.__gtm_initialized) {
    window.__gtm_initialized = true;
    (function(w, d, s, l, i) {
      w[l] = w[l] || [];
      w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
      const f = d.getElementsByTagName(s)[0];
      const j = d.createElement(s);
      const dl = l !== "dataLayer" ? "&l=" + l : "";
      j.async = true;
      j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
      f.parentNode.insertBefore(j, f);
    })(window, document, "script", "dataLayer", GTM_ID);
  }

  // 2. GOOGLE ANALYTICS 4 (GA4)
  if (GA4_ID && !window.__ga4_initialized) {
    window.__ga4_initialized = true;
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`;
    document.head.appendChild(script);

    window.gtag = function() {
      window.dataLayer.push(arguments);
    };
    window.gtag("js", new Date());
    window.gtag("config", GA4_ID, {
      anonymize_ip: true,
      send_page_view: true
    });
  }

  // 3. META PIXEL (FACEBOOK / INSTAGRAM ADS)
  if (META_PIXEL_ID && !window.__meta_pixel_initialized) {
    window.__meta_pixel_initialized = true;
    (function(f, b, e, v, n, t, s) {
      if (f.fbq) return;
      n = f.fbq = function() {
        n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
      };
      if (!f._fbq) f._fbq = n;
      n.push = n;
      n.loaded = !0;
      n.version = "2.0";
      n.queue = [];
      t = b.createElement(e);
      t.async = !0;
      t.src = v;
      s = b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s);
    })(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js");

    window.fbq("init", META_PIXEL_ID);
    window.fbq("track", "PageView");
  }
}

/**
 * Unified conversion tracker for all platforms
 * @param {string} eventName - Standard or custom event name (e.g., 'Lead', 'Contact')
 * @param {object} params - Event metadata (e.g., { method: 'whatsapp', location: 'hero' })
 */
export function trackConversion(eventName, params = {}) {
  if (typeof window === "undefined") return;

  // 1. Google Tag Manager / dataLayer push
  if (window.dataLayer) {
    window.dataLayer.push({
      event: eventName,
      ...params,
      timestamp: new Date().toISOString()
    });
  }

  // 2. Google Analytics 4 (gtag)
  if (typeof window.gtag === "function") {
    // Map standard lead event
    const gaEventName = eventName === "Lead" ? "generate_lead" : eventName === "Contact" ? "contact" : eventName;
    window.gtag("event", gaEventName, params);
  }

  // 3. Meta Pixel (fbq)
  if (typeof window.fbq === "function") {
    // Check if it's a standard Meta Pixel event (Lead, Contact, ViewContent, CompleteRegistration, etc.)
    const standardEvents = ["Lead", "Contact", "ViewContent", "CompleteRegistration", "InitiateCheckout"];
    if (standardEvents.includes(eventName)) {
      window.fbq("track", eventName, params);
    } else {
      window.fbq("trackCustom", eventName, params);
    }
  }
}
