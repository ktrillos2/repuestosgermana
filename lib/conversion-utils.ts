"use client"

import { sendConversionAlert } from "@/actions/track-conversion"

// Google Ads ID
export const GA_CONVERSION_ID = "AW-17876761326/YzvzCPDOo-QbEO71psxC"

declare global {
    interface Window {
        gtag: (...args: any[]) => void
    }
}

/**
 * Handles a conversion click (e.g. WhatsApp button).
 * 1. Fires Google Ads conversion event.
 * 2. Sends an email alert to the admin.
 * 3. Opens the destination URL (if provided).
 */
export const trackContactInteraction = async (
    e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>,
    url: string,
    sourceName: string
) => {
    // 1. Send Email Alert (Non-blocking)
    // We don't await this because we want the user to proceed immediately.
    // However, if the page unloads too quickly (same tab navigation), this might fail.
    // Since most are target="_blank" (WhatsApp), it should be fine.
    sendConversionAlert(sourceName, url).catch(err => console.error("Alert error:", err))

    // 2. Fire Google Ads Conversion
    if (typeof window !== "undefined" && window.gtag) {
        window.gtag("event", "conversion", {
            send_to: GA_CONVERSION_ID,
            value: 1.0,
            currency: "COP",
        })
    }

    // 3. Handle Navigation
    // If it's a standard link with target="_blank", the browser handles it.
    // If we need to enforce tracking before navigation for same-tab links, we would use e.preventDefault().
    // For WhatsApp, we generally let it bubble up.
}
