/**
 * EvenntHive Brand Configuration
 * 
 * This file contains the core brand DNA for EvenntHive.
 * Always use this as the source of truth for brand consistency.
 */

export const brandConfig = {
    /**
     * Brand Name
     * IMPORTANT: Always spell with double 'n' - EvenntHive
     */
    name: "EvenntHive",

    /**
     * Brand Colors
     * These colors define the visual identity of EvenntHive
     */
    colors: {
        // Background: Deep charcoal for a modern, sophisticated feel
        background: "#181818",

        // Buttons & Highlights: Warm golden yellow for calls-to-action
        primary: "#F8B000",
        primaryHover: "#e0a000",

        // Headers & Footers: Teal-gray for professional structure
        headerFooter: "#2A4145",
        headerFooterDark: "#1f3135",

        // Text
        foreground: "#ededed",
        textMuted: "#9ca3af",
    },

    /**
     * Target Geography
     * Focus on Central Nebraska's isolated regional hubs
     */
    geography: {
        primary: ["Grand Island", "Kearney", "Hastings"],
        region: "Central Nebraska",
        description: "Serving communities at least an hour from major metros",
    },

    /**
     * Brand Voice Guidelines
     * How we communicate with our audience
     */
    voice: {
        approachableExpertise: {
            description: "Credible for professionals, helpful for first-timers",
            tone: ["knowledgeable", "accessible", "clear", "professional"],
        },
        connectorEnergy: {
            description: "Optimistic but grounded in logistics",
            tone: ["enthusiastic", "realistic", "solution-focused", "empowering"],
        },
    },

    /**
     * Content Principles
     */
    contentPrinciples: [
        "Speak to both seasoned event planners and first-time organizers",
        "Acknowledge the unique challenges of Central Nebraska event planning",
        "Celebrate local vendors, venues, and community connections",
        "Be honest about logistics while maintaining optimism",
        "Provide actionable, practical guidance",
    ],
} as const;

export type BrandConfig = typeof brandConfig;
