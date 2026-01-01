import Link from "next/link";

export default function Home() {
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

      {/* Hero Section - Hub-City Manifesto */}
      <section className="py-24 px-6 bg-gradient-to-b from-background to-header-footer-dark">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-4">
              The Hub-City Manifesto
            </p>
            <h2 className="text-6xl md:text-7xl font-bold text-foreground mb-8 leading-tight">
              Right Talent. <br />
              Right Venue. <br />
              <span className="text-primary">Right Now.</span>
            </h2>
            <p className="text-2xl text-gray-300 mb-6 max-w-4xl mx-auto leading-relaxed">
              The operating system for event professionals at least an hour from major metros
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Grand Island. Kearney. Hastings. We're building the infrastructure that hub cities deserve—
              connecting the right people, streamlining the chaos, and protecting your profit margins.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link href="/planners">
              <button className="bg-primary hover:bg-primary-hover text-background font-semibold px-8 py-4 rounded-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-xl w-full sm:w-auto">
                For Planners
              </button>
            </Link>
            <Link href="/venues">
              <button className="border-2 border-primary text-primary hover:bg-primary hover:text-background font-semibold px-8 py-4 rounded-lg transition-all w-full sm:w-auto">
                For Venues
              </button>
            </Link>
            <Link href="/vendors">
              <button className="border-2 border-primary text-primary hover:bg-primary hover:text-background font-semibold px-8 py-4 rounded-lg transition-all w-full sm:w-auto">
                For Vendors
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Value Propositions by Audience */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-7xl">
          <h3 className="text-4xl font-bold text-foreground text-center mb-4">
            Built for Operational Efficiency
          </h3>
          <p className="text-xl text-gray-400 text-center mb-16 max-w-3xl mx-auto">
            We understand the unique challenges of hub cities. Here's how we solve them.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Planners */}
            <Link href="/planners" className="group">
              <div className="bg-header-footer-dark p-8 rounded-lg border-2 border-header-footer group-hover:border-primary transition-all h-full transform group-hover:-translate-y-2">
                <div className="w-14 h-14 bg-primary rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-background" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                </div>
                <h4 className="text-2xl font-bold text-foreground mb-3">Event Planners</h4>
                <p className="text-lg text-primary font-semibold mb-3">
                  Reclaim 15+ Hours of Vetting Time
                </p>
                <p className="text-gray-400 leading-relaxed">
                  Stop chasing down vendors and venues. Pre-vetted talent, standardized logistics,
                  and transparent pricing protect your time and your profit margins.
                </p>
                <p className="text-primary mt-4 font-medium flex items-center group-hover:translate-x-2 transition-transform">
                  Learn more
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </p>
              </div>
            </Link>

            {/* Venues */}
            <Link href="/venues" className="group">
              <div className="bg-header-footer-dark p-8 rounded-lg border-2 border-header-footer group-hover:border-primary transition-all h-full transform group-hover:-translate-y-2">
                <div className="w-14 h-14 bg-primary rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-background" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h4 className="text-2xl font-bold text-foreground mb-3">Venues</h4>
                <p className="text-lg text-primary font-semibold mb-3">
                  Reduce Operational Drag
                </p>
                <p className="text-gray-400 leading-relaxed">
                  Standardize B2B logistics, streamline vendor coordination, and fill your calendar
                  with qualified events—not tire-kickers.
                </p>
                <p className="text-primary mt-4 font-medium flex items-center group-hover:translate-x-2 transition-transform">
                  Learn more
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </p>
              </div>
            </Link>

            {/* Vendors */}
            <Link href="/vendors" className="group">
              <div className="bg-header-footer-dark p-8 rounded-lg border-2 border-header-footer group-hover:border-primary transition-all h-full transform group-hover:-translate-y-2">
                <div className="w-14 h-14 bg-primary rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-background" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h4 className="text-2xl font-bold text-foreground mb-3">Vendors</h4>
                <p className="text-lg text-primary font-semibold mb-3">
                  Match Talent to Opportunity
                </p>
                <p className="text-gray-400 leading-relaxed">
                  Get matched to the right events in your region while maintaining profitability.
                  No more underpricing to compete—just qualified leads.
                </p>
                <p className="text-primary mt-4 font-medium flex items-center group-hover:translate-x-2 transition-transform">
                  Learn more
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Hub Cities Matter */}
      <section className="py-20 px-6 bg-header-footer-dark">
        <div className="mx-auto max-w-5xl">
          <h3 className="text-4xl font-bold text-foreground text-center mb-8">
            Why Hub Cities Deserve Better
          </h3>
          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              Grand Island, Kearney, and Hastings aren't "too small" for world-class events—
              they're <span className="text-primary font-semibold">strategic hubs</span> serving
              regional populations with distinct needs.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed mb-6">
              But the infrastructure built for Omaha and Lincoln doesn't work here. You're juggling
              scattered vendor networks, building relationships from scratch for every event, and
              losing hours to logistics that should be standardized.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed">
              <span className="text-primary font-semibold">EvenntHive changes that.</span> We're
              the central nervous system connecting planners, venues, and vendors in hub cities—
              built for your scale, your geography, and your timelines.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-header-footer border-t border-header-footer-dark py-12 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Evennt<span className="text-primary">Hive</span>
              </h2>
              <p className="text-gray-400">
                The OS for event professionals in hub cities
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-3">For Professionals</h4>
              <ul className="space-y-2">
                <li><Link href="/planners" className="text-gray-400 hover:text-primary transition-colors">Event Planners</Link></li>
                <li><Link href="/venues" className="text-gray-400 hover:text-primary transition-colors">Venues</Link></li>
                <li><Link href="/vendors" className="text-gray-400 hover:text-primary transition-colors">Vendors</Link></li>
                <li><Link href="/blog" className="text-gray-400 hover:text-primary transition-colors">Resources</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-3">Hub Cities</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Grand Island, NE</li>
                <li>Kearney, NE</li>
                <li>Hastings, NE</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-3">Connect</h4>
              <p className="text-gray-400">
                Building the infrastructure<br />
                hub cities deserve
              </p>
            </div>
          </div>
          <div className="border-t border-header-footer-dark pt-8 text-center">
            <p className="text-sm text-gray-500">
              © 2026 EvenntHive. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
