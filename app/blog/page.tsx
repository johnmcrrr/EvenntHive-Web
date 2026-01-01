import Link from "next/link";
import type { Metadata } from "next";
import { blogPosts, pillarInfo } from "./data";

export const metadata: Metadata = {
    title: "Resources - Event Planning Insights for Central Nebraska | EvenntHive",
    description: "Expert guidance for planners, venues, and vendors in Grand Island, Kearney, and Hastings. Practical advice for hub-city event professionals.",
};

export default function BlogPage() {
    const pillarGroups = {
        "operational-defense": blogPosts.filter(p => p.pillar === "operational-defense"),
        "client-management": blogPosts.filter(p => p.pillar === "client-management"),
        "logistics-efficiency": blogPosts.filter(p => p.pillar === "logistics-efficiency"),
        "community-growth": blogPosts.filter(p => p.pillar === "community-growth"),
    };

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
                            <Link href="/blog" className="text-primary font-bold border-b-2 border-primary">
                                Resources
                            </Link>
                        </nav>
                    </div>
                </div>
            </header>

            {/* Hero */}
            <section className="py-16 px-6 bg-gradient-to-b from-header-footer-dark to-background">
                <div className="mx-auto max-w-4xl text-center">
                    <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-4">
                        Resources for Event Professionals
                    </p>
                    <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
                        Practical Wisdom for <span className="text-primary">Hub Cities</span>
                    </h2>
                    <p className="text-xl text-gray-300 leading-relaxed">
                        Expert guidance built for the realities of Central Nebraska event planning.
                        No fluff—just actionable insights.
                    </p>
                </div>
            </section>

            {/* Pillars Grid */}
            <section className="py-16 px-6">
                <div className="mx-auto max-w-7xl space-y-16">
                    {(Object.keys(pillarGroups) as Array<keyof typeof pillarGroups>).map((pillar) => (
                        <div key={pillar}>
                            <div className="mb-8">
                                <h3 className="text-3xl font-bold text-foreground mb-2">
                                    {pillarInfo[pillar].name}
                                </h3>
                                <p className="text-lg text-gray-400">
                                    {pillarInfo[pillar].description}
                                </p>
                            </div>

                            <div className="grid md:grid-cols-3 gap-6">
                                {pillarGroups[pillar].map((post) => (
                                    <Link
                                        key={post.slug}
                                        href={`/blog/${post.slug}`}
                                        className="group"
                                    >
                                        <article className="bg-header-footer-dark p-6 rounded-lg border-2 border-header-footer group-hover:border-primary transition-all h-full">
                                            <div className="flex items-center gap-2 mb-3">
                                                <span className="text-xs font-semibold text-primary uppercase tracking-wide">
                                                    {pillarInfo[post.pillar].name}
                                                </span>
                                                <span className="text-xs text-gray-500">•</span>
                                                <span className="text-xs text-gray-500">{post.readTime}</span>
                                            </div>
                                            <h4 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors leading-tight">
                                                {post.title}
                                            </h4>
                                            <p className="text-gray-400 leading-relaxed mb-4">
                                                {post.excerpt}
                                            </p>
                                            <div className="flex items-center text-primary font-medium group-hover:translate-x-2 transition-transform">
                                                Read more
                                                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                </svg>
                                            </div>
                                        </article>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 px-6 bg-primary">
                <div className="mx-auto max-w-3xl text-center">
                    <h3 className="text-3xl font-bold text-background mb-4">
                        Want More Insights Delivered?
                    </h3>
                    <p className="text-lg text-background/90 mb-8">
                        Join the EvenntHive community for early access to tools, resources, and regional event intelligence.
                    </p>
                    <button className="bg-background hover:bg-header-footer text-primary hover:text-foreground font-bold px-10 py-4 rounded-lg transition-all transform hover:scale-105 shadow-xl">
                        Join the Waitlist
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
                        <Link href="/vendors" className="text-gray-400 hover:text-primary transition-colors">Vendors</Link>
                        <Link href="/blog" className="text-primary font-semibold">Resources</Link>
                    </div>
                    <p className="text-sm text-gray-500">
                        © 2026 EvenntHive. All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    );
}
