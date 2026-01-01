// Full blog post content for EvenntHive Resources
// Focused on Central Nebraskahub cities: Grand Island, Kearney, Hastings

import React from 'react';

export function DepositBasics() {
    return (
        <div className="space-y-6">
            <p className="text-lg">
                In the Central Nebraska event market, a handshake used to be enough. But as professional planners and vendors in hub cities like Grand Island and Kearney, we know that clear financial boundaries are what actually protect relationships.
            </p>
            <h3 className="text-2xl font-bold text-primary mt-8">The "Skin in the Game" Rule</h3>
            <p>
                A non-refundable retainer isn't just a down payment; it's a commitment. For regional vendors, we recommend a <strong>30/40/30</strong> structure:
            </p>
            <ul className="list-disc pl-6 space-y-2">
                <li><strong>30% Retainer:</strong> Due at signing to lock the date. This covers initial admin and prevents "date-shopping."</li>
                <li><strong>40% Mid-Point:</strong> Due halfway between signing and the event. This funds material costs and keeps cash flow steady.</li>
                <li><strong>30% Final Balance:</strong> Due 14 days <em>before</em> the event. Never chase a check on the day of.</li>
            </ul>
            <div className="bg-header-footer p-6 rounded-xl border border-primary/20 italic">
                "In a community where everyone knows everyone, the best way to stay friends is to have a crystal-clear contract."
            </div>
        </div>
    );
}

export function NoGoList() {
    return (
        <div className="space-y-6">
            <p className="text-lg">
                Not every lead is a good lead. In a "Hub-City" market, your reputation is your most valuable asset, and a bad-fit client can do more damage than a lost booking is worth.
            </p>
            <h3 className="text-2xl font-bold text-primary mt-8">The Red Flag Scorecard</h3>
            <p>Before you send that detailed quote, look for these three signs:</p>
            <ol className="list-decimal pl-6 space-y-4">
                <li>
                    <strong>The "Price Over Platform" Buyer:</strong> If their first question is "What's your cheapest option?" they aren't looking for expertise; they're looking for a commodity.
                </li>
                <li>
                    <strong>The Communication Ghost:</strong> If it takes 5 days to get a simple answer during the sales process, it will take 5 weeks during the planning process.
                </li>
                <li>
                    <strong>The Scope Squeezer:</strong> Clients who ask for "just one quick favor" before even signing are testing your boundaries.
                </li>
            </ol>
        </div>
    );
}

export function BudgetTalk() {
    return (
        <div className="space-y-6">
            <p className="text-lg">
                Talking about money is uncomfortable. Talking about <em>rising</em> costs in a tight-knit market like Hastings or Kearney is even harder. Here is how to frame it with "Approachable Expertise."
            </p>
            <h3 className="text-2xl font-bold text-primary mt-8">Transparency Over Apology</h3>
            <p>
                Don't apologize for your rates. Instead, explain the logistics. When fuel costs rise or venue staffing becomes more expensive, it affects the "Operational Drag" of the event.
            </p>
            <div className="bg-header-footer p-6 rounded-xl border border-primary/20">
                <h4 className="font-bold mb-2">The Script:</h4>
                <p>"To maintain the quality of service we’re known for in Central Nebraska, our rates reflect the current cost of logistics and talent. This ensure we can deliver [specific outcome] without any operational compromises."</p>
            </div>
        </div>
    );
}

export function LeadToLegacy() {
    return (
        <div className="space-y-6">
            <p className="text-lg">
                In hub cities, word-of-mouth isn't just a marketing channel—it's the foundation of your business. Turning a one-time client into a legacy referrer requires a post-event system.
            </p>
            <h3 className="text-2xl font-bold text-primary mt-8">The 48-Hour Follow-Through</h3>
            <p>
                The work doesn't end when the lights go down. Within 48 hours, every EvenntHive professional should:
            </p>
            <ul className="list-disc pl-6 space-y-2">
                <li>Send a <strong>curated "High-Impact" photo</strong> from the event.</li>
                <li>Ask for feedback on <strong>logistical efficiency</strong>, not just "Did you have fun?"</li>
                <li>Mention a specific vendor you enjoyed working with.</li>
            </ul>
        </div>
    );
}

export function InclementWeather() {
    return (
        <div className="space-y-6">
            <p className="text-lg">
                Nebraska weather is a logistical beast. If you're planning an outdoor event in the Tri-City area, "hope" is not a strategy.
            </p>
            <h3 className="text-2xl font-bold text-primary mt-8">The 15-Mile Rule</h3>
            <p>
                Storms in our region move fast. We recommend a staggered decision timeline:
            </p>
            <ul className="list-disc pl-6 space-y-2">
                <li><strong>72 Hours Out:</strong> Review the long-range radar. Secure "Plan B" venue availability.</li>
                <li><strong>24 Hours Out:</strong> Call the rental company. If tents are needed, they must be booked now.</li>
                <li><strong>4 Hours Out:</strong> The final "Go/No-Go."</li>
            </ul>
        </div>
    );
}

export function VendorScorecard() {
    return (
        <div className="space-y-6">
            <p className="text-lg">
                Stop vetting vendors from scratch for every event. Use the EvenntHive scorecard to find the right fit for your budget and location.
            </p>
            <h3 className="text-2xl font-bold text-primary mt-8">The 5 Core Metrics</h3>
            <table className="w-full border-collapse border border-header-footer/50">
                <thead>
                    <tr className="bg-header-footer">
                        <th className="p-3 text-left">Metric</th>
                        <th className="p-3 text-left">What we check</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border-b border-header-footer/50">
                        <td className="p-3 font-bold">Responsiveness</td>
                        <td className="p-3">Do they reply within 24 business hours?</td>
                    </tr>
                    <tr className="border-b border-header-footer/50">
                        <td className="p-3 font-bold">Standardization</td>
                        <td className="p-3">Do they have a B2B-ready rate sheet?</td>
                    </tr>
                    <tr className="border-b border-header-footer/50">
                        <td className="p-3 font-bold">Regional IQ</td>
                        <td className="p-3">Do they know the local venue loading docks?</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export function RegionalSourcing() {
    return (
        <div className="space-y-6">
            <p className="text-lg">
                You don't always need to pull talent from Omaha or Lincoln. Kearney and Grand Island have incredible niche vendors—if you know where to look.
            </p>
            <h3 className="text-2xl font-bold text-primary mt-8">The Hub-City Advantage</h3>
            <p>
                Sourcing locally reduces travel fees and increases accountability. Look for vendors who have regular "residencies" at local venues like the Bosselman Center or The Lark.
            </p>
        </div>
    );
}

export function CentralNebraskaReport() {
    return (
        <div className="space-y-6">
            <p className="text-lg">
                Why are we seeing a surge in events in the Tri-Cities? The data shows that hub cities are becoming the preferred alternative to over-saturated metro markets.
            </p>
            <h3 className="text-2xl font-bold text-primary mt-8">The 2026 Outlook</h3>
            <p>
                With more professionals working remotely in Central Nebraska, the demand for high-end corporate retreats and standardized weddings in Grand Island has increased by 22% year-over-year.
            </p>
        </div>
    );
}

export function PricingForProfit() {
    return (
        <div className="space-y-6">
            <p className="text-lg">
                If you bill by the hour, you are penalizing yourself for being efficient. In the EvenntHive ecosystem, we move toward value-based packages.
            </p>
            <h3 className="text-2xl font-bold text-primary mt-8">Stop Selling Time</h3>
            <p>
                Clients don't want your hours; they want the <strong>peace of mind</strong> that comes from your 15+ hours of vetting and logistical expertise.
            </p>
        </div>
    );
}

export function HighImpactLowCost() {
    return (
        <div className="space-y-6">
            <p className="text-lg">
                A $15,000 budget in Grand Island can look like a $50,000 event in Chicago if you spend strategically on "Momentum Makers."
            </p>
            <h3 className="text-2xl font-bold text-primary mt-8">The Strategic Splurge</h3>
            <p>
                Instead of spreading money thin, pick one "Impact Anchor":
            </p>
            <ul className="list-disc pl-6 space-y-2">
                <li>Professional Lighting (Atmosphere)</li>
                <li>Single Signature Service (Experience)</li>
                <li>Hub-City Venue (Access)</li>
            </ul>
        </div>
    );
}
