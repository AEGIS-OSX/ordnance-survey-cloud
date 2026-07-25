import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Transparent, usage-based pricing for geospatial tile delivery.",
};

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)]">
      {/* Hero Section */}
      <section className="max-w-[1280px] mx-auto px-6 py-[var(--space-16)]">
        <h1 className="font-[family-name:var(--font-display)] text-[length:var(--text-display-md)] md:text-[length:var(--text-display-lg)] font-medium leading-[1.08] tracking-[-0.02em] mb-4">
          Simple, usage-based pricing
        </h1>
        <p className="font-[family-name:var(--font-body)] text-[length:var(--text-body-lg)] text-[var(--color-fog)] max-w-2xl">
          Pay for what you serve. No seat licences. No hidden egress fees.
        </p>
      </section>

      {/* Pricing Table Section */}
      <section className="bg-[var(--color-bg-dark)] border-y border-[var(--color-grid)]">
        <div className="max-w-[1280px] mx-auto px-6 py-16 overflow-x-auto">
          <table role="table" className="w-full border-collapse text-left min-w-[800px]">
            <thead>
              <tr className="border-b border-[var(--color-grid)]">
                <th className="py-6 pr-4 border-r border-[var(--color-grid)] w-1/5"></th>
                <th className="py-6 px-8 border-r border-[var(--color-grid)] w-1/5">
                  <div className="font-[family-name:var(--font-display)] text-[length:var(--text-heading-sm)] mb-1">Free</div>
                </th>
                <th className="py-6 px-8 border-r border-[var(--color-grid)] w-1/5">
                  <div className="font-[family-name:var(--font-display)] text-[length:var(--text-heading-sm)] mb-1">Developer</div>
                </th>
                <th className="py-6 px-8 border-r border-[var(--color-grid)] w-1/5 relative">
                  <div className="flex flex-col">
                    <span className="text-[length:var(--text-label)] font-medium uppercase tracking-[0.04em] text-[var(--color-survey-orange)] mb-2">Most used</span>
                    <div className="font-[family-name:var(--font-display)] text-[length:var(--text-heading-sm)]">Scale</div>
                  </div>
                </th>
                <th className="py-6 pl-8 w-1/5">
                  <div className="font-[family-name:var(--font-display)] text-[length:var(--text-heading-sm)] mb-1">Enterprise</div>
                </th>
              </tr>
            </thead>
            <tbody className="font-[family-name:var(--font-body)] text-[length:var(--text-body-md)]">
              <tr className="border-b border-[var(--color-grid)]">
                <td className="py-4 pr-4 border-r border-[var(--color-grid)] font-medium">Monthly tile requests</td>
                <td className="py-4 px-8 border-r border-[var(--color-grid)] font-[family-name:var(--font-mono)] text-[length:var(--text-mono)]">500K</td>
                <td className="py-4 px-8 border-r border-[var(--color-grid)] font-[family-name:var(--font-mono)] text-[length:var(--text-mono)]">5M</td>
                <td className="py-4 px-8 border-r border-[var(--color-grid)] font-[family-name:var(--font-mono)] text-[length:var(--text-mono)]">50M</td>
                <td className="py-4 px-8 font-[family-name:var(--font-mono)] text-[length:var(--text-mono)]">Unlimited</td>
              </tr>
              <tr className="border-b border-[var(--color-grid)]">
                <td className="py-4 pr-4 border-r border-[var(--color-grid)] font-medium">Zoom levels</td>
                <td className="py-4 px-8 border-r border-[var(--color-grid)]">0–14</td>
                <td className="py-4 px-8 border-r border-[var(--color-grid)]">0–16</td>
                <td className="py-4 px-8 border-r border-[var(--color-grid)]">0–18</td>
                <td className="py-4 px-8">0–18</td>
              </tr>
              <tr className="border-b border-[var(--color-grid)]">
                <td className="py-4 pr-4 border-r border-[var(--color-grid)] font-medium">SLA uptime</td>
                <td className="py-4 px-8 border-r border-[var(--color-grid)] text-[var(--color-fog)]">None</td>
                <td className="py-4 px-8 border-r border-[var(--color-grid)]">99.5%</td>
                <td className="py-4 px-8 border-r border-[var(--color-grid)]">99.9%</td>
                <td className="py-4 px-8">99.95%</td>
              </tr>
              <tr className="border-b border-[var(--color-grid)]">
                <td className="py-4 pr-4 border-r border-[var(--color-grid)] font-medium">Support</td>
                <td className="py-4 px-8 border-r border-[var(--color-grid)]">Community</td>
                <td className="py-4 px-8 border-r border-[var(--color-grid)]">Email</td>
                <td className="py-4 px-8 border-r border-[var(--color-grid)]">Priority</td>
                <td className="py-4 px-8">Dedicated</td>
              </tr>
              <tr className="border-b border-[var(--color-grid)]">
                <td className="py-4 pr-4 border-r border-[var(--color-grid)] font-medium">Price</td>
                <td className="py-4 px-8 border-r border-[var(--color-grid)] font-[family-name:var(--font-display)] text-[length:var(--text-heading-sm)]">£0/mo</td>
                <td className="py-4 px-8 border-r border-[var(--color-grid)] font-[family-name:var(--font-display)] text-[length:var(--text-heading-sm)]">£49/mo</td>
                <td className="py-4 px-8 border-r border-[var(--color-grid)] font-[family-name:var(--font-display)] text-[length:var(--text-heading-sm)]">£299/mo</td>
                <td className="py-4 px-8 font-[family-name:var(--font-display)] text-[length:var(--text-heading-sm)]">Custom</td>
              </tr>
              <tr>
                <td className="py-8 pr-4 border-r border-[var(--color-grid)]"></td>
                <td className="py-8 px-8 border-r border-[var(--color-grid)]">
                  <Link href="/contact" className="btn-primary inline-block w-full text-center py-3 bg-[var(--color-survey-orange)] text-[var(--color-ink)] font-medium transition-opacity hover:opacity-90">
                    Get started
                  </Link>
                </td>
                <td className="py-8 px-8 border-r border-[var(--color-grid)]">
                  <Link href="/contact" className="btn-primary inline-block w-full text-center py-3 bg-[var(--color-survey-orange)] text-[var(--color-ink)] font-medium transition-opacity hover:opacity-90">
                    Get started
                  </Link>
                </td>
                <td className="py-8 px-8 border-r border-[var(--color-grid)]">
                  <Link href="/contact" className="btn-primary inline-block w-full text-center py-3 bg-[var(--color-survey-orange)] text-[var(--color-ink)] font-medium transition-opacity hover:opacity-90">
                    Get started
                  </Link>
                </td>
                <td className="py-8 px-8">
                  <Link href="/contact" className="btn-primary inline-block w-full text-center py-3 bg-[var(--color-survey-orange)] text-[var(--color-ink)] font-medium transition-opacity hover:opacity-90">
                    Contact sales
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-[1280px] mx-auto px-6 py-[var(--space-16)]">
        <h2 className="font-[family-name:var(--font-display)] text-[length:var(--text-display-md)] font-medium mb-12">
          Common questions
        </h2>
        <div className="space-y-4 max-w-3xl">
          <details className="group border-b border-[var(--color-grid)] pb-4">
            <summary className="flex justify-between items-center cursor-pointer list-none font-[family-name:var(--font-body)] text-[length:var(--text-body-lg)] font-medium hover:text-[var(--color-paper)] transition-colors">
              What counts as a tile request?
              <span className="text-[var(--color-survey-orange)] transition-transform group-open:rotate-45">+</span>
            </summary>
            <p className="mt-4 font-[family-name:var(--font-body)] text-[length:var(--text-body-md)] text-[var(--color-fog)] leading-relaxed">
              Each HTTP request for a single map tile (PNG, WebP, or MVT vector tile) counts as one request.
            </p>
          </details>

          <details className="group border-b border-[var(--color-grid)] pb-4">
            <summary className="flex justify-between items-center cursor-pointer list-none font-[family-name:var(--font-body)] text-[length:var(--text-body-lg)] font-medium hover:text-[var(--color-paper)] transition-colors">
              Can I upgrade mid-month?
              <span className="text-[var(--color-survey-orange)] transition-transform group-open:rotate-45">+</span>
            </summary>
            <p className="mt-4 font-[family-name:var(--font-body)] text-[length:var(--text-body-md)] text-[var(--color-fog)] leading-relaxed">
              Yes. Upgrades take effect immediately. You are billed pro-rata for the remainder of the month.
            </p>
          </details>

          <details className="group border-b border-[var(--color-grid)] pb-4">
            <summary className="flex justify-between items-center cursor-pointer list-none font-[family-name:var(--font-body)] text-[length:var(--text-body-lg)] font-medium hover:text-[var(--color-paper)] transition-colors">
              Is there a trial period?
              <span className="text-[var(--color-survey-orange)] transition-transform group-open:rotate-45">+</span>
            </summary>
            <p className="mt-4 font-[family-name:var(--font-body)] text-[length:var(--text-body-md)] text-[var(--color-fog)] leading-relaxed">
              The Free tier is permanent. No trial expiry, no credit card required.
            </p>
          </details>
        </div>
      </section>
    </main>
  );
}
