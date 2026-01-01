import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts, pillarInfo } from "../data";

// Import blog content
import { ScopeCreepShield } from "../posts/scope-creep-shield";
import { AntiGhosting } from "../posts/anti-ghosting";
import {
    DepositBasics,
    NoGoList,
    BudgetTalk,
    LeadToLegacy,
    InclementWeather,
    VendorScorecard,
    RegionalSourcing,
    CentralNebraskaReport,
    PricingForProfit,
    HighImpactLowCost
} from "../posts/placeholders";

const postComponents: Record<string, () => JSX.Element> = {
    "scope-creep-shield-contract-lines": ScopeCreepShield,
    "deposit-basics-non-refundable-retainers": DepositBasics,
    "no-go-list-vet-clients-before-quote": NoGoList,
    "anti-ghosting-101-follow-up-small-town": AntiGhosting,
    "budget-talk-rising-costs-booking": BudgetTalk,
    "lead-to-legacy-long-term-referrers": LeadToLegacy,
    "inclement-weather-outdoor-nebraska-events": InclementWeather,
    "vendor-vetting-scorecard-budget-fit": VendorScorecard,
    "regional-sourcing-niche-talent-kearney": RegionalSourcing,
    "central-nebraska-event-report-destination-markets": CentralNebraskaReport,
    "pricing-for-profit-value-based-packages": PricingForProfit,
    "high-impact-low-cost-15k-to-50k": HighImpactLowCost,
};

export function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) {
        return {
            title: "Post Not Found | EvenntHive",
        };
    }

    return {
        title: `${post.title} | EvenntHive`,
        description: post.excerpt,
    };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) {
        notFound();
    }

    const PostContent = postComponents[slug];

    if (!PostContent) {
        return (
            <div className="min-h-screen bg-background flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-foreground mb-4">Content Coming Soon</h1>
                    <p className="text-gray-400 mb-8">This post is currently being developed.</p>
                    <Link href="/blog" className="text-primary hover:text-primary-hover font-semibold">
                        ← Back to Blog
                    </Link>
                </div>
            </div>
        );
    }

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
                            <Link href="/blog" className="text-primary font-bold">
                                Blog
                            </Link>
                        </nav>
                    </div>
                </div>
            </header>

            {/* Article */}
            <article className="py-12 px-6">
                <div className="mx-auto max-w-3xl">
                    <Link href="/blog" className="text-primary hover:text-primary-hover font-medium inline-flex items-center mb-8">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Back to Blog
                    </Link>

                    <div className="mb-8">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="px-3 py-1 bg-primary/20 text-primary text-sm font-semibold rounded-full">
                                {pillarInfo[post.pillar].name}
                            </span>
                            <span className="text-sm text-gray-500">{post.readTime}</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
                            {post.title}
                        </h1>
                        <p className="text-xl text-gray-400 leading-relaxed">
                            {post.excerpt}
                        </p>
                    </div>

                    <div className="prose prose-invert prose-lg max-w-none">
                        <PostContent />
                    </div>
                </div>
            </article>

            {/* Related Posts */}
            <section className="py-12 px-6 bg-header-footer-dark">
                <div className="mx-auto max-w-6xl">
                    <h3 className="text-2xl font-bold text-foreground mb-8">More from {pillarInfo[post.pillar].name}</h3>
                    <div className="grid md:grid-cols-3 gap-6">
                        {blogPosts
                            .filter((p) => p.pillar === post.pillar && p.slug !== post.slug)
                            .slice(0, 3)
                            .map((relatedPost) => (
                                <Link
                                    key={relatedPost.slug}
                                    href={`/blog/${relatedPost.slug}`}
                                    className="group"
                                >
                                    <div className="bg-background p-6 rounded-lg border border-header-footer group-hover:border-primary transition-all">
                                        <p className="text-xs text-primary font-semibold mb-2 uppercase tracking-wide">
                                            {relatedPost.readTime}
                                        </p>
                                        <h4 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                                            {relatedPost.title}
                                        </h4>
                                        <p className="text-sm text-gray-400">{relatedPost.excerpt}</p>
                                    </div>
                                </Link>
                            ))}
                    </div>
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
                    <p className="text-sm text-gray-500">
                        © 2026 EvenntHive. All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    );
}
