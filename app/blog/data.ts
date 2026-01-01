// Blog Post Metadata Type
export interface BlogPost {
    slug: string;
    title: string;
    excerpt: string;
    pillar: "operational-defense" | "client-management" | "logistics-efficiency" | "community-growth";
    publishedDate: string;
    readTime: string;
    author: string;
}

// All cornerstone blog posts
export const blogPosts: BlogPost[] = [
    // Pillar 1: Operational Defense
    {
        slug: "scope-creep-shield-contract-lines",
        title: "The 'Scope Creep' Shield: 5 essential contract lines every Nebraska planner needs",
        excerpt: "Protect your profit margins from expanding expectations. These five contract clauses will save you from unpaid revisions and last-minute demands.",
        pillar: "operational-defense",
        publishedDate: "2026-01-01",
        readTime: "8 min read",
        author: "EvenntHive Team",
    },
    {
        slug: "deposit-basics-non-refundable-retainers",
        title: "Deposit Basics: A guide to non-refundable retainers for regional vendors",
        excerpt: "Secure your bookings and protect cash flow with properly structured deposits. Learn what works in Central Nebraska's market.",
        pillar: "operational-defense",
        publishedDate: "2026-01-02",
        readTime: "6 min read",
        author: "EvenntHive Team",
    },
    {
        slug: "no-go-list-vet-clients-before-quote",
        title: "The 'No-Go' List: How to professionally vet clients before you send a quote",
        excerpt: "Stop wasting time on tire-kickers. This vetting system helps you identify serious clients worth your proposal time.",
        pillar: "operational-defense",
        publishedDate: "2026-01-03",
        readTime: "7 min read",
        author: "EvenntHive Team",
    },

    // Pillar 2: Client Management
    {
        slug: "anti-ghosting-101-follow-up-small-town",
        title: "Anti-Ghosting 101: How to follow up with silent leads in a small-town market",
        excerpt: "When everyone knows everyone, ghosting follow-ups require finesse. Here's how to stay persistent without burning bridges.",
        pillar: "client-management",
        publishedDate: "2026-01-04",
        readTime: "6 min read",
        author: "EvenntHive Team",
    },
    {
        slug: "budget-talk-rising-costs-booking",
        title: "The Budget Talk: Talking about rising costs without losing the booking",
        excerpt: "Navigate inflation conversations while maintaining trust. The right framing keeps clients engaged instead of scared off.",
        pillar: "client-management",
        publishedDate: "2026-01-05",
        readTime: "7 min read",
        author: "EvenntHive Team",
    },
    {
        slug: "lead-to-legacy-long-term-referrers",
        title: "From Lead to Legacy: Turning one-time clients into long-term referrers in Central Nebraska",
        excerpt: "In hub cities, referrals are currency. Build a system that transforms happy clients into your marketing engine.",
        pillar: "client-management",
        publishedDate: "2026-01-06",
        readTime: "8 min read",
        author: "EvenntHive Team",
    },

    // Pillar 3: Logistics & Efficiency
    {
        slug: "inclement-weather-outdoor-nebraska-events",
        title: "Inclement Weather Planning: Managing wind and storms for outdoor Nebraska events",
        excerpt: "Nebraska weather is unpredictable. Here's your tactical playbook for wind, lightning, and last-minute pivots.",
        pillar: "logistics-efficiency",
        publishedDate: "2026-01-07",
        readTime: "9 min read",
        author: "EvenntHive Team",
    },
    {
        slug: "vendor-vetting-scorecard-budget-fit",
        title: "The Vendor Vetting Scorecard: A 5-point system to find the right fit for your budget",
        excerpt: "Stop guessing—start grading. This scorecard streamlines vendor selection so you book the right talent, fast.",
        pillar: "logistics-efficiency",
        publishedDate: "2026-01-08",
        readTime: "7 min read",
        author: "EvenntHive Team",
    },
    {
        slug: "regional-sourcing-niche-talent-kearney",
        title: "Regional Sourcing: Finding niche talent within a 100-mile radius of Kearney",
        excerpt: "You don't always need Omaha talent. Learn how to identify and leverage hidden gems within driving distance.",
        pillar: "logistics-efficiency",
        publishedDate: "2026-01-09",
        readTime: "8 min read",
        author: "EvenntHive Team",
    },

    // Pillar 4: Community & Growth
    {
        slug: "central-nebraska-event-report-destination-markets",
        title: "The Central Nebraska Event Report: Why hub cities are the new 'Destination' markets",
        excerpt: "Grand Island, Kearney, and Hastings are redefining regional events. Here's the data that proves hub cities are thriving.",
        pillar: "community-growth",
        publishedDate: "2026-01-10",
        readTime: "10 min read",
        author: "EvenntHive Team",
    },
    {
        slug: "pricing-for-profit-value-based-packages",
        title: "Pricing for Profit: Moving from 'Hourly' to 'Value-Based' packages",
        excerpt: "Hourly rates cap your income. Value-based pricing rewards your expertise—here's how to make the shift.",
        pillar: "community-growth",
        publishedDate: "2026-01-11",
        readTime: "9 min read",
        author: "EvenntHive Team",
    },
    {
        slug: "high-impact-low-cost-15k-to-50k",
        title: "High-Impact, Low-Cost: 5 ways to make a $15k event look like a $50k event",
        excerpt: "Strategic design choices that deliver luxury without blowing the budget. Proven tactics from Central Nebraska's top planners.",
        pillar: "community-growth",
        publishedDate: "2026-01-12",
        readTime: "8 min read",
        author: "EvenntHive Team",
    },
];

export const pillarInfo = {
    "operational-defense": {
        name: "Operational Defense",
        description: "Protect your time, profit, and sanity with contracts, vetting, and boundaries.",
        color: "#F8B000",
    },
    "client-management": {
        name: "Client Management",
        description: "Build lasting relationships that turn clients into advocates and referrers.",
        color: "#2A4145",
    },
    "logistics-efficiency": {
        name: "Logistics & Efficiency",
        description: "Streamline operations so you spend less time coordinating, more time creating.",
        color: "#F8B000",
    },
    "community-growth": {
        name: "Community & Growth",
        description: "Scale your business and contribute to Central Nebraska's event economy.",
        color: "#2A4145",
    },
};
