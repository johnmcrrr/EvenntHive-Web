import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "For Venues - Reduce Operational Drag | EvenntHive",
    description: "Standardize B2B logistics, streamline vendor coordination, and fill your calendar with qualified events in Central Nebraska.",
};

export default function VenuesPage() {
    return (
        <div className="min-h-screen bg-background">
            {/* Header */}
            <header className="bg-header-footer border-b border-header-footer-dark">
                <div className="mx-auto max-w-7xl px-6 py-6">
                    <div className="flex items-center justify-between">
                        <Link href="/">
                            <h1 className="text-3xl font-bold text-foreground hover:text-primary transition-colors cursor-pointer">
                                Evennt<span className="text-primary">Hive</span>
                            </h1>
                        </Link>
                        <nav className="flex gap-6">
                            <Link href="/planners" className="text-foreground hover:text-primary transition-colors font-medium">
                                Planners
                            </Link>
                            <Link href="/venues" className="text-primary font-bold border-b-2 border-primary">
                                Venues
                            </Link>
                            <Link href="/vendors" className="text-foreground hover:text-primary transition-colors font-medium">
                                Vendors
                            </Link>
                        </nav>
                    </div>
                </div>
            </header>

            {/* Hero */}
            <section className="py-20 px-6 bg-gradient-to-b from-header-footer-dark to-background">
                <div className="mx-auto max-w-5xl text-center">
                    <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-4">
                        For Venues
                    </p>
                    <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
                        Reduce <span className="text-primary">Operational Drag</span>
                    </h2>
                    <p className="text-2xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
                        Stop juggling vendor coordination, last-minute cancellations, and tire-kickers.
                        Standardize your B2B logistics and fill your calendar with qualified events.
                    </p>
                    <button className="bg-primary hover:bg-primary-hover text-background font-bold px-10 py-5 rounded-lg transition-all transform hover:scale-105 shadow-xl text-lg">
                        Join the Waitlist
                    </button>
                </div>
            </section>

            {/* The Problem */}
            <section className="py-16 px-6">
                <div className="mx-auto max-w-4xl">
                    <h3 className="text-3xl font-bold text-foreground mb-8">The Venue Owner's Dilemma</h3>
                    <div className="space-y-6">
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center mt-1">
                                <span className="text-background font-bold">!</span>
                            </div>
                            <div>
                                <h4 className="text-xl font-semibold text-foreground mb-2">Every Planner Has Different Requirements</h4>
                                <p className="text-gray-400 leading-relaxed">
                                    One planner needs AV setup at 8 AM, another at noon. Some bring their own vendors, others expect
                                    you to coordinate. You're running a venue, not a project management service—but you're forced to do both.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center mt-1">
                                <span className="text-background font-bold">!</span>
                            </div>
                            <div>
                                <h4 className="text-xl font-semibold text-foreground mb-2">Tire-Kickers vs. Serious Bookings</h4>
                                <p className="text-gray-400 leading-relaxed">
                                    You spend hours on site tours and quote generation only to have inquiries ghost or cancel.
                                    Without pre-qualified leads, you're wasting prime sales time on low-conversion prospects.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center mt-1">
                                <span className="text-background font-bold">!</span>
                            </div>
                            <div>
                                <h4 className="text-xl font-semibold text-foreground mb-2">Calendar Gaps in a Hub Market</h4>
                                <p className="text-gray-400 leading-relaxed">
                                    Unlike metro venues that can rely on walk-in traffic or Knot/WeddingWire volume, hub-city venues
                                    need direct relationships with planners—but there's no efficient way to build that network.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Solution */}
            <section className="py-16 px-6 bg-header-footer-dark">
                <div className="mx-auto max-w-6xl">
                    <div className="text-center mb-12">
                        <h3 className="text-4xl font-bold text-foreground mb-4">How EvenntHive Reduces Operational Drag</h3>
                        <p className="text-xl text-gray-400">
                            Built to streamline B2B logistics for Central Nebraska venues
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-background p-8 rounded-lg border-2 border-header-footer">
                            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                                <svg className="w-6 h-6 text-background" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                </svg>
                            </div>
                            <h4 className="text-2xl font-bold text-foreground mb-3">Standardized Event Specs</h4>
                            <p className="text-gray-400 leading-relaxed mb-4">
                                Planners fill out a standard event profile: guest count, setup time, vendor types, AV needs.
                                No more back-and-forth to figure out basic logistics—you get complete info upfront.
                            </p>
                            <p className="text-primary font-semibold">
                                Eliminate 80% of pre-event coordination emails.
                            </p>
                        </div>

                        <div className="bg-background p-8 rounded-lg border-2 border-header-footer">
                            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                                <svg className="w-6 h-6 text-background" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h4 className="text-2xl font-bold text-foreground mb-3">Pre-Qualified Inquiries Only</h4>
                            <p className="text-gray-400 leading-relaxed mb-4">
                                Leads come with verified budgets, confirmed dates, and realistic expectations.
                                Your sales pipeline fills with serious bookings, not browsing.
                            </p>
                            <p className="text-primary font-semibold">
                                Increase conversion rates by 40%.
                            </p>
                        </div>

                        <div className="bg-background p-8 rounded-lg border-2 border-header-footer">
                            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                                <svg className="w-6 h-6 text-background" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                            <h4 className="text-2xl font-bold text-foreground mb-3">Direct Planner Network Access</h4>
                            <p className="text-gray-400 leading-relaxed mb-4">
                                Get visibility to active planners in Grand Island, Kearney, and Hastings who need venue
                                partners. Build relationships that fill your shoulder seasons and weekday slots.
                            </p>
                            <p className="text-primary font-semibold">
                                Close calendar gaps with recurring clients.
                            </p>
                        </div>

                        <div className="bg-background p-8 rounded-lg border-2 border-header-footer">
                            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                                <svg className="w-6 h-6 text-background" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h4 className="text-2xl font-bold text-foreground mb-3">Automated Availability Management</h4>
                            <p className="text-gray-400 leading-relaxed mb-4">
                                Sync your calendar once. Planners see real-time availability, book instantly, and you avoid
                                double-booking or manual calendar checking for every inquiry.
                            </p>
                            <p className="text-primary font-semibold">
                                Save 5+ hours per week on scheduling.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* B2B Standards Section */}
            <section className="py-16 px-6">
                <div className="mx-auto max-w-5xl">
                    <h3 className="text-3xl font-bold text-foreground mb-8 text-center">
                        One Format. One Process. Zero Chaos.
                    </h3>
                    <div className="bg-header-footer-dark p-8 rounded-lg border-2 border-primary">
                        <p className="text-xl text-gray-300 leading-relaxed mb-6">
                            Every event using EvenntHive follows the same logistics playbook:
                        </p>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <svg className="w-6 h-6 text-primary flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <p className="text-gray-300 text-lg">
                                    <span className="font-semibold text-foreground">Standard contract templates</span> — No more custom negotiations for basic terms
                                </p>
                            </li>
                            <li className="flex items-start gap-3">
                                <svg className="w-6 h-6 text-primary flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <p className="text-gray-300 text-lg">
                                    <span className="font-semibold text-foreground">Unified payment schedules</span> — Deposits, balances, and refund policies aligned across all events
                                </p>
                            </li>
                            <li className="flex items-start gap-3">
                                <svg className="w-6 h-6 text-primary flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <p className="text-gray-300 text-lg">
                                    <span className="font-semibold text-foreground">Pre-event vendor coordination</span> — Setup times, load-in protocols, and vendor manifests managed centrally
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* ROI Section */}
            <section className="py-16 px-6">
                <div className="mx-auto max-w-4xl">
                    <h3 className="text-3xl font-bold text-foreground mb-8 text-center">The Bottom Line</h3>
                    <div className="bg-header-footer-dark p-8 rounded-lg border-2 border-primary">
                        <div className="grid md:grid-cols-3 gap-8 text-center">
                            <div>
                                <p className="text-5xl font-bold text-primary mb-2">40%</p>
                                <p className="text-gray-300 font-semibold">Higher Conversions</p>
                                <p className="text-sm text-gray-400 mt-2">From qualified leads</p>
                            </div>
                            <div>
                                <p className="text-5xl font-bold text-primary mb-2">80%</p>
                                <p className="text-gray-300 font-semibold">Fewer Emails</p>
                                <p className="text-sm text-gray-400 mt-2">Pre-event coordination</p>
                            </div>
                            <div>
                                <p className="text-5xl font-bold text-primary mb-2">5+</p>
                                <p className="text-gray-300 font-semibold">Hours Saved</p>
                                <p className="text-sm text-gray-400 mt-2">Per week</p>
                            </div>
                        </div>
                        <div className="mt-8 pt-8 border-t border-header-footer text-center">
                            <p className="text-xl text-foreground mb-4">
                                <span className="text-primary font-bold">Translation:</span> More bookings. Less admin.
                                Predictable operations.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 px-6 bg-primary">
                <div className="mx-auto max-w-3xl text-center">
                    <h3 className="text-4xl font-bold text-background mb-4">
                        Ready to Standardize Your Operations?
                    </h3>
                    <p className="text-xl text-background/90 mb-8">
                        Join the waitlist for early access to EvenntHive's venue tools.
                    </p>
                    <button className="bg-background hover:bg-header-footer text-primary hover:text-foreground font-bold px-10 py-5 rounded-lg transition-all transform hover:scale-105 shadow-xl text-lg">
                        Get Early Access
                    </button>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-header-footer border-t border-header-footer-dark py-12 px-6">
                <div className="mx-auto max-w-7xl text-center">
                    <Link href="/">
                        <h2 className="text-2xl font-bold text-foreground mb-4 hover:text-primary transition-colors cursor-pointer">
                            Evennt<span className="text-primary">Hive</span>
                        </h2>
                    </Link>
                    <p className="text-gray-400 mb-6">
                        The OS for event professionals in hub cities
                    </p>
                    <div className="flex justify-center gap-6 mb-6">
                        <Link href="/planners" className="text-gray-400 hover:text-primary transition-colors">Planners</Link>
                        <Link href="/venues" className="text-primary font-semibold">Venues</Link>
                        <Link href="/vendors" className="text-gray-400 hover:text-primary transition-colors">Vendors</Link>
                    </div>
                    <p className="text-sm text-gray-500">
                        © 2026 EvenntHive. All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    );
}
