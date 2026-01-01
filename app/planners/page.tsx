import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "For Event Planners - Reclaim 15+ Hours | EvenntHive",
    description: "Stop chasing vendors and venues. EvenntHive helps Central Nebraska event planners reclaim 15+ hours of vetting time while protecting profit margins.",
};

export default function PlannersPage() {
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
                            <Link href="/planners" className="text-primary font-bold border-b-2 border-primary">
                                Planners
                            </Link>
                            <Link href="/venues" className="text-foreground hover:text-primary transition-colors font-medium">
                                Venues
                            </Link>
                            <Link href="/vendors" className="text-foreground hover:text-primary transition-colors font-medium">
                                Vendors
                            </Link>
                            <Link href="/blog" className="text-foreground hover:text-primary transition-colors font-medium">
                                Resources
                            </Link>
                        </nav>
                    </div>
                </div>
            </header>

            {/* Hero */}
            <section className="py-20 px-6 bg-gradient-to-b from-header-footer-dark to-background">
                <div className="mx-auto max-w-5xl text-center">
                    <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-4">
                        For Event Planners
                    </p>
                    <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
                        Reclaim <span className="text-primary">15+ Hours</span> of Vetting Time
                    </h2>
                    <p className="text-2xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
                        Stop chasing down vendors. Stop rebuilding your network for every event.
                        Start protecting your time and your profit.
                    </p>
                    <button className="bg-primary hover:bg-primary-hover text-background font-bold px-10 py-5 rounded-lg transition-all transform hover:scale-105 shadow-xl text-lg">
                        Join the Waitlist
                    </button>
                </div>
            </section>

            {/* The Problem */}
            <section className="py-16 px-6">
                <div className="mx-auto max-w-4xl">
                    <h3 className="text-3xl font-bold text-foreground mb-8">The Hub-City Reality</h3>
                    <div className="space-y-6">
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center mt-1">
                                <span className="text-background font-bold">!</span>
                            </div>
                            <div>
                                <h4 className="text-xl font-semibold text-foreground mb-2">Scattered Vendor Networks</h4>
                                <p className="text-gray-400 leading-relaxed">
                                    Unlike Omaha or Lincoln, there's no central directory of pre-vetted talent. You're starting
                                    from scratch, asking for referrals, and hoping vendors are available before you invest time
                                    in detailed conversations.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center mt-1">
                                <span className="text-background font-bold">!</span>
                            </div>
                            <div>
                                <h4 className="text-xl font-semibold text-foreground mb-2">Inconsistent Logistics Standards</h4>
                                <p className="text-gray-400 leading-relaxed">
                                    Every vendor has different setup requirements, payment terms, and contract formats.
                                    Coordinating 8-12 vendors means juggling 8-12 different workflows—eating into your margins.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center mt-1">
                                <span className="text-background font-bold">!</span>
                            </div>
                            <div>
                                <h4 className="text-xl font-semibold text-foreground mb-2">Price Opacity = Profit Risk</h4>
                                <p className="text-gray-400 leading-relaxed">
                                    Without transparent baseline pricing, you're quoting clients before you know real costs—
                                    or padding estimates so much you lose competitive bids.
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
                        <h3 className="text-4xl font-bold text-foreground mb-4">How EvenntHive Protects Your Time & Profit</h3>
                        <p className="text-xl text-gray-400">
                            Built specifically for the operational realities of Central Nebraska
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-background p-8 rounded-lg border-2 border-header-footer">
                            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                                <svg className="w-6 h-6 text-background" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.012-3.012a9 9 0 11-12.724 0" />
                                </svg>
                            </div>
                            <h4 className="text-2xl font-bold text-foreground mb-3">Pre-Vetted Vendor Network</h4>
                            <p className="text-gray-400 leading-relaxed mb-4">
                                Access availability, portfolios, and past client feedback in real-time. No more cold-calling
                                or wondering if a caterer can handle 200 guests.
                            </p>
                            <p className="text-primary font-semibold">
                                Save 8-10 hours per event on vendor research alone.
                            </p>
                        </div>

                        <div className="bg-background p-8 rounded-lg border-2 border-header-footer">
                            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                                <svg className="w-6 h-6 text-background" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                                </svg>
                            </div>
                            <h4 className="text-2xl font-bold text-foreground mb-3">Transparent Baseline Pricing</h4>
                            <p className="text-gray-400 leading-relaxed mb-4">
                                See vendor pricing ranges upfront. Quote clients with confidence knowing your markup is protected
                                and you won't get undercut mid-planning.
                            </p>
                            <p className="text-primary font-semibold">
                                Reduce quote revision cycles by 60%.
                            </p>
                        </div>

                        <div className="bg-background p-8 rounded-lg border-2 border-header-footer">
                            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                                <svg className="w-6 h-6 text-background" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                            </div>
                            <h4 className="text-2xl font-bold text-foreground mb-3">Standardized B2B Workflows</h4>
                            <p className="text-gray-400 leading-relaxed mb-4">
                                One contract format. One payment process. One communication hub. Coordinate multiple vendors
                                without drowning in spreadsheets and email threads.
                            </p>
                            <p className="text-primary font-semibold">
                                Cut coordination overhead by 40%.
                            </p>
                        </div>

                        <div className="bg-background p-8 rounded-lg border-2 border-header-footer">
                            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                                <svg className="w-6 h-6 text-background" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h4 className="text-2xl font-bold text-foreground mb-3">Local + Regional Matching</h4>
                            <p className="text-gray-400 leading-relaxed mb-4">
                                Find the right talent within 100 miles of your event. Whether you need a Grand Island DJ or
                                a specialty caterer from Lincoln, match based on geography, budget, and availability.
                            </p>
                            <p className="text-primary font-semibold">
                                Expand your options without expanding your search radius.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ROI Section */}
            <section className="py-16 px-6">
                <div className="mx-auto max-w-4xl">
                    <h3 className="text-3xl font-bold text-foreground mb-8 text-center">The Real ROI</h3>
                    <div className="bg-header-footer-dark p-8 rounded-lg border-2 border-primary">
                        <div className="grid md:grid-cols-3 gap-8 text-center">
                            <div>
                                <p className="text-5xl font-bold text-primary mb-2">15+</p>
                                <p className="text-gray-300 font-semibold">Hours Saved</p>
                                <p className="text-sm text-gray-400 mt-2">Per event</p>
                            </div>
                            <div>
                                <p className="text-5xl font-bold text-primary mb-2">60%</p>
                                <p className="text-gray-300 font-semibold">Fewer Revisions</p>
                                <p className="text-sm text-gray-400 mt-2">On quotes</p>
                            </div>
                            <div>
                                <p className="text-5xl font-bold text-primary mb-2">40%</p>
                                <p className="text-gray-300 font-semibold">Less Overhead</p>
                                <p className="text-sm text-gray-400 mt-2">On coordination</p>
                            </div>
                        </div>
                        <div className="mt-8 pt-8 border-t border-header-footer text-center">
                            <p className="text-xl text-foreground mb-4">
                                <span className="text-primary font-bold">Translation:</span> More events. Higher margins.
                                Less chaos.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 px-6 bg-primary">
                <div className="mx-auto max-w-3xl text-center">
                    <h3 className="text-4xl font-bold text-background mb-4">
                        Ready to Protect Your Profit?
                    </h3>
                    <p className="text-xl text-background/90 mb-8">
                        Join the waitlist for early access to EvenntHive's planner tools.
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
                        <Link href="/planners" className="text-primary font-semibold">Planners</Link>
                        <Link href="/venues" className="text-gray-400 hover:text-primary transition-colors">Venues</Link>
                        <Link href="/vendors" className="text-gray-400 hover:text-primary transition-colors">Vendors</Link>
                        <Link href="/blog" className="text-gray-400 hover:text-primary transition-colors">Resources</Link>
                    </div>
                    <p className="text-sm text-gray-500">
                        © 2026 EvenntHive. All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    );
}
