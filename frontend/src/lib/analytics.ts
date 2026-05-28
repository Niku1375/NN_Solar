/**
 * Google Analytics 4 Initialization Module
 * Handles GA4 tracking initialization with environment variables
 * Production-safe with no SSR/hydration issues
 */

/**
 * Initialize Google Analytics 4
 * Loads the GA4 script asynchronously and initializes gtag
 * 
 * @param measurementId - The GA4 Measurement ID (e.g., 'G-D9MY50NYC4')
 */
export function initializeGA4(measurementId: string): void {
  // Validate measurement ID format
  if (!measurementId || !measurementId.startsWith('G-')) {
    console.warn('[GA4] Invalid or missing measurement ID');
    return;
  }

  // Check if GA4 is already loaded to avoid duplicate tracking
  if (window.gtag !== undefined) {
    console.log('[GA4] Already initialized, skipping duplicate load');
    return;
  }

  // Create gtag function stub
  const dataLayer = (window.dataLayer = window.dataLayer || []);
  
  function gtag(...args: any[]) {
    dataLayer.push(arguments);
  }
  
  // Set initial properties
  gtag('js', new Date());
  gtag('config', measurementId, {
    // Anonymize IP for privacy compliance
    anonymize_ip: true,
    // Ensure client ID is consistent
    allow_google_signals: true,
    // Cookie consent mode (can be updated dynamically)
    allow_ad_personalization_signals: true,
  });

  // Attach gtag to window
  window.gtag = gtag;

  // Load GA4 script asynchronously
  loadGAScript(measurementId);
}

/**
 * Load Google Analytics script tag asynchronously
 * Uses async attribute to prevent blocking page render
 * 
 * @param measurementId - The GA4 Measurement ID
 */
function loadGAScript(measurementId: string): void {
  try {
    // Create script element
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    
    // Add attributes for better performance
    script.setAttribute('data-ga-id', measurementId);
    script.setAttribute('crossorigin', 'anonymous');
    
    // Error handling
    script.onerror = () => {
      console.error(`[GA4] Failed to load analytics script for ${measurementId}`);
    };

    script.onload = () => {
      console.log(`[GA4] Successfully loaded measurement ID: ${measurementId}`);
    };

    // Append to head for early execution
    const head = document.head || document.getElementsByTagName('head')[0];
    if (head) {
      head.appendChild(script);
    } else {
      // Fallback: append to document
      document.appendChild(script);
    }
  } catch (error) {
    console.error('[GA4] Error loading analytics script:', error);
  }
}

/**
 * Track custom events in GA4
 * 
 * @param eventName - Name of the event (e.g., 'solar_calculator_used')
 * @param eventData - Object containing event parameters
 */
export function trackEvent(eventName: string, eventData?: Record<string, any>): void {
  if (typeof window === 'undefined' || window.gtag === undefined) {
    console.warn('[GA4] gtag not available, event not tracked:', eventName);
    return;
  }

  try {
    window.gtag('event', eventName, eventData || {});
  } catch (error) {
    console.error('[GA4] Error tracking event:', eventName, error);
  }
}

/**
 * Track page view
 * Useful for SPAs where page changes don't trigger automatic tracking
 * 
 * @param pagePath - The path of the page (e.g., '/solar-calculator')
 * @param pageTitle - The title of the page
 */
export function trackPageView(pagePath: string, pageTitle?: string): void {
  if (typeof window === 'undefined' || window.gtag === undefined) {
    console.warn('[GA4] gtag not available, page view not tracked:', pagePath);
    return;
  }

  try {
    window.gtag('config', (window as any).GA_ID, {
      page_path: pagePath,
      page_title: pageTitle || document.title,
    });
  } catch (error) {
    console.error('[GA4] Error tracking page view:', pagePath, error);
  }
}

/**
 * Set user properties for GA4
 * 
 * @param properties - Object containing user properties
 */
export function setUserProperties(properties: Record<string, any>): void {
  if (typeof window === 'undefined' || window.gtag === undefined) {
    console.warn('[GA4] gtag not available, user properties not set');
    return;
  }

  try {
    window.gtag('set', {
      'user_properties': properties,
    });
  } catch (error) {
    console.error('[GA4] Error setting user properties:', error);
  }
}

/**
 * Declare gtag global type for TypeScript
 */
declare global {
  interface Window {
    gtag?: Function;
    dataLayer?: any[];
    GA_ID?: string;
  }
}
