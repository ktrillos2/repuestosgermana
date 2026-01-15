export const GA_CONVERSION_ID = "AW-17876761326/YzvzCPDOo-QbEO71psxC"

declare global {
    interface Window {
        gtag: (...args: any[]) => void
    }
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const reportConversion = (url?: string) => {
    const callback = () => {
        if (typeof url !== "undefined" && url) {
            // Use window.open for external links (like WhatsApp) to stay on page or standard nav
            // For conversion tracking, usually we want to proceed to the link.
            // Since WhatsApp links are usually target="_blank", we might just want to fire the event.
            // However, the provided snippet redirects. Let's adapt it to be safe for React/Next.js
            window.location.href = url
        }
    }

    // Check if gtag is available (it might be blocked by adblockers)
    if (typeof window.gtag !== "undefined") {
        window.gtag("event", "conversion", {
            send_to: GA_CONVERSION_ID,
            value: 1.0,
            currency: "COP",
            event_callback: callback,
        })
    } else {
        // If gtag is not loaded, just proceed to the URL if provided
        if (url) callback()
    }

    return false
}

// Helper specific for WhatsApp buttons that usually open in new tab
export const handleWhatsAppClick = (e: React.MouseEvent<HTMLAnchorElement>, url: string) => {
    // We want to track the conversion but NOT prevent default immediately if we want to support ctrl+click etc.
    // However, the requested snippet uses a callback to redirect. 
    // For external links opening in new tab, the callback redirecting window.location is wrong (it would redirect the current page).
    // The provided snippet:
    /*
      function gtag_report_conversion(url) {
        var callback = function () {
          if (typeof(url) != 'undefined') {
            window.location = url;
          }
        };
        // ...
        return false;
      }
    */
    // Since most WhatsApp links are target="_blank", modifying window.location of the current tab is invalid behavior (it would navigate away from the site).
    // Strategy: Fire the event, and let the browser handle the new tab opening. 
    // We won't use the 'event_callback' to redirect for target="_blank" links, just for tracking.

    if (typeof window.gtag !== "undefined") {
        window.gtag("event", "conversion", {
            send_to: GA_CONVERSION_ID,
            value: 1.0,
            currency: "COP",
            // unique_transaction_id: ... // Optional
        })
    }
    // We don't return false here so the link proceeds naturally
}
