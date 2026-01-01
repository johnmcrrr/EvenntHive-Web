import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "For Vendors - Match Talent to Opportunity | EvenntHive",
    description: "Get matched to the right events in Central Nebraska while maintaining profitability. No more underpricing—just qualified leads.",
};

export default function VendorsPage() {
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
                            <Link href="/venues" className="text-foreground hover:text-primary transition-colors font-medium">
                                Venues
                            </Link>
                            <Link href="/vendors" className="text-primary font-bold border-b-2 border-primary">
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
                        For Vendors
                    </p>
                    <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
                        Match <span className="text-primary">Talent to Opportunity</span>
                    </h2>
                    <p className="text-2xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
                        Stop underpricing to compete. Start getting matched to the right regional events
                        that value your expertise and protect your margins.
                    </p>
                    <button className="bg-primary hover:bg-primary-hover text-background font-bold px-10 py-5 rounded-lg transition-all transform hover:scale-105 shadow-xl text-lg">
                        Join the Waitlist
                    </button>
                </div>
            </section>

            {/* The Problem */}
            <section className="py-16 px-6">
                <div className="mx-auto max-w-4xl">
                    <h3 className="text-3xl font-bold text-foreground mb-8">The Vendor Struggle in Hub Cities</h3>
                    <div className="space-y-6">
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center mt-1">
                                <span className="text-background font-bold">!</span>
                            </div>
                            <div>
                                <h4 className="text-xl font-semibold text-foreground mb-2">The Race to the Bottom</h4>
                                <p className="text-gray-400 leading-relaxed">
                                    Without a centralized marketplace, you're competing on price alone—slashing rates just to
                                    land gigs that barely cover costs, let alone turn a profit.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center mt-1">
                                <span className="text-background font-bold">!</span>
                            </div>
                            <div>
                                <h4 className="text-xl font-semibold text-foreground mb-2">Mismatched Opportunities</h4>
                                <p className="text-gray-400 leading-relaxed">
                                    You're either too expensive for backyard BBQs or not premium enough for upscale weddings.
                                    There's no efficient way to connect with events that match your skill level and pricing tier.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center mt-1">
                                <span className="text-background font-bold">!</span>
                            </div>
                            <div>
                                <h4 className="text-xl font-semibold text-foreground mb-2">Feast or Famine Booking</h4>
                                <p className="text-gray-400 leading-relaxed">
                                    Your calendar is either slammed with overlapping inquiries or completely empty. Without visibility
                                    to upcoming events, you can't plan inventory, staffing, or cash flow.
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
                        <h3 className="text-4xl font-bold text-foreground mb-4">How EvenntHive Protects Your Profitability</h3>
                        <p className="text-xl text-gray-400">
                            Intelligent matching that respects your expertise and your rates
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-background p-8 rounded-lg border-2 border-header-footer">
                            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                                <svg className="w-6 h-6 text-background" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                </svg>
                            </div>
                            <h4 className="text-2xl font-bold text-foreground mb-3">Budget-Aligned Matching</h4>
                            <p className="text-gray-400 leading-relaxed mb-4">
                                Only see inquiries from planners whose budgets match your pricing tier. No more wasting time
                                quoting $5,000 packages to clients with $2,000 budgets.
                            </p>
                            <p className="text-primary font-semibold">
                                Stop competing on price—start competing on value.
                            </p>
                        </div>

                        <div className="bg-background p-8 rounded-lg border-2 border-header-footer">
                            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                                <svg className="w-6 h-6 text-background" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                                </svg>
                            </div>
                            <h4 className="text-2xl font-bold text-foreground mb-3">Regional + Local Reach</h4>
                            <p className="text-gray-400 leading-relaxed mb-4">
                                Get matched to events within your service radius—whether that's Grand Island-only or
                                willing to travel to Lincoln. Expand or limit your reach based on your capacity.
                            </p>
                            <p className="text-primary font-semibold">
                                Fill your calendar without overextending your geography.
                            </p>
                        </div>

                        <div className="bg-background p-8 rounded-lg border-2 border-header-footer">
                            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                                <svg className="w-6 h-6 text-background" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h4 className="text-2xl font-bold text-foreground mb-3">Transparent Rate Visibility</h4>
                            <p className="text-gray-400 leading-relaxed mb-4">
                                Set your baseline pricing and availability. Planners see what to expect before they reach out,
                                eliminating awkward budget negotiations and last-minute lowball offers.
                            </p>
                            <p className="text-primary font-semibold">
                                Respect your worth—get clients who do too.
                            </p>
                        </div>

                        <div className="bg-background p-8 rounded-lg border-2 border-header-footer">
                            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                                <svg className="w-6 h-6 text-background" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h4 className="text-2xl font-bold text-foreground mb-3">Forward-Looking Calendar</h4>
                            <p className="text-gray-400 leading-relaxed mb-4">
                                See upcoming events in your area 30-90 days out. Plan staffing, manage inventory, and avoid
                                double-booking—all from a single dashboard.
                            </p>
                            <p className="text-primary font-semibold">
                                Steady pipeline = steady revenue.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Vendor Types */}
            <section className="py-16 px-6">
                <div className="mx-auto max-w-5xl">
                    <h3 className="text-3xl font-bold text-foreground mb-8 text-center">
                        Built for Every Type of Vendor
                    </h3>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-header-footer-dark p-6 rounded-lg border border-header-footer">
                            <h4 className="text-xl font-bold text-foreground mb-3">Catering & Food Services</h4>
                            <p className="text-gray-400">
                                Match to events by guest count, dietary needs, and service style.
                            </p>
                        </div>
                        <div className="bg-header-footer-dark p-6 rounded-lg border border-header-footer">
                            <h4 className="text-xl font-bold text-foreground mb-3">DJs & Entertainment</h4>
                            <p className="text-gray-400">
                                Get booked for the right vibe—corporate, wedding, or high-energy celebration.
                            </p>
                        </div>
                        <div className="bg-header-footer-dark p-6 rounded-lg border border-header-footer">
                            <h4 className="text-xl font-bold text-foreground mb-3">Photographers & Videographers</h4>
                            <p className="text-gray-400">
                                Connect with clients who value your portfolio and pricing tier.
                            </p>
                        </div>
                        <div className="bg-header-footer-dark p-6 rounded-lg border border-header-footer">
                            <h4 className="text-xl font-bold text-foreground mb-3">Florists & Décor</h4>
                            <p className="text-gray-400">
                                Match to events based on aesthetic, budget, and seasonal availability.
                            </p>
                        </div>
                        <div className="bg-header-footer-dark p-6 rounded-lg border border-header-footer">
                            <h4 className="text-xl font-bold text-foreground mb-3">Rental Companies</h4>
                            <p className="text-gray-400">
                                Coordinate inventory and delivery for multi-vendor events.
                            </p>
                        </div>
                        <div className="bg-header-footer-dark p-6 rounded-lg border border-header-footer">
                            <h4 className="text-xl font-bold text-foreground mb-3">Specialty Services</h4>
                            <p className="text-gray-400">
                                Bartenders, photo booths, transportation—find your niche.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ROI Section */}
            <section className="py-16 px-6">
                <div className="mx-auto max-w-4xl">
                    <h3 className="text-3xl font-bold text-foreground mb-8 text-center">The Vendor Advantage</h3>
                    <div className="bg-header-footer-dark p-8 rounded-lg border-2 border-primary">
                        <div className="grid md:grid-cols-3 gap-8 text-center">
                            <div>
                                <p className="text-5xl font-bold text-primary mb-2">70%</p>
                                <p className="text-gray-300 font-semibold">Better Conversions</p>
                                <p className="text-sm text-gray-400 mt-2">Budget-aligned leads</p>
                            </div>
                            <div>
                                <p className="text-5xl font-bold text-primary mb-2">2x</p>
                                <p className="text-gray-300 font-semibold">More Bookings</p>
                                <p className="text-sm text-gray-400 mt-2">Same effort</p>
                            </div>
                            <div>
                                <p className="text-5xl font-bold text-primary mb-2">$0</p>
                                <p className="text-gray-300 font-semibold">Race to Bottom</p>
                                <p className="text-sm text-gray-400 mt-2">Maintain margins</p>
                            </div>
                        </div>
                        <div className="mt-8 pt-8 border-t border-header-footer text-center">
                            <p className="text-xl text-foreground mb-4">
                                <span className="text-primary font-bold">Translation:</span> More qualified leads.
                                Better rates. Predictable revenue.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="py-16 px-6 bg-header-footer-dark">
                <div className="mx-auto max-w-5xl">
                    <h3 className="text-3xl font-bold text-foreground mb-12 text-center">
                        Simple Setup, Powerful Results
                    </h3>
                    <div className="grid md:grid-cols-4 gap-6">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-background text-2xl font-bold">
                                1
                            </div>
                            <h4 className="font-semibold text-foreground mb-2">Create Profile</h4>
                            <p className="text-sm text-gray-400">
                                Set your service area, pricing, and availability
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-background text-2xl font-bold">
                                2
                            </div>
                            <h4 className="font-semibold text-foreground mb-2">Get Matched</h4>
                            <p className="text-sm text-gray-400">
                                Receive notifications for relevant events
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-background text-2xl font-bold">
                                3
                            </div>
                            <h4 className="font-semibold text-foreground mb-2">Connect</h4>
                            <p className="text-sm text-gray-400">
                                Respond to qualified leads directly
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-background text-2xl font-bold">
                                4
                            </div>
                            <h4 className="font-semibold text-foreground mb-2">Book & Deliver</h4>
                            <p className="text-sm text-gray-400">
                                Manage contracts and logistics in one place
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 px-6 bg-primary">
                <div className="mx-auto max-w-3xl text-center">
                    <h3 className="text-4xl font-bold text-background mb-4">
                        Ready to Protect Your Margins?
                    </h3>
                    <p className="text-xl text-background/90 mb-8">
                        Join the waitlist for early access to EvenntHive's vendor marketplace.
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
                        <Link href="/venues" className="text-gray-400 hover:text-primary transition-colors">Venues</Link>
                        <Link href="/vendors" className="text-primary font-semibold">Vendors</Link>
                    </div>
                    <p className="text-sm text-gray-500">
                        © 2026 EvenntHive. All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    );
}
