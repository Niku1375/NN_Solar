export function initializeGA4(measurementId: string): void {
  if (typeof window === "undefined") return;

  if (!measurementId || !measurementId.startsWith("G-")) {
    console.warn("[GA4] Invalid measurement ID");
    return;
  }

  // prevent double init
  if ((window as any).__GA_INITIALIZED__) return;
  (window as any).__GA_INITIALIZED__ = true;

  window.dataLayer = window.dataLayer || [];

  function gtag(...args: any[]) {
    window.dataLayer!.push(args);
  }

  window.gtag = gtag;

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(script);

  gtag("js", new Date());

  gtag("config", measurementId, {
    page_path: window.location.pathname,
  });

  console.log("[GA4] Initialized:", measurementId);
}

export function trackPageView(path: string) {
  if (window.gtag) {
    window.gtag("config", "G-D9MY50NYC4", {
      page_path: path,
    });
  }
}

export function trackEvent(name: string, params?: Record<string, any>) {
  if (window.gtag) {
    window.gtag("event", name, params || {});
  }
}
