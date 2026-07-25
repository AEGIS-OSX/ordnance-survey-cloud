import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Transparent pricing tiers for geospatial tile delivery.",
};

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)]">
      {/* Pricing Table Section */}
      <section className="max-w-[1280px] mx-auto px-6 py-16 overflow-x-auto">
        <table className="w-full border-collapse text-left min-w-[800px]">
          <thead>
            <tr className="border-b border-[var(--color-grid)]">
              <th className="py-6 pr-4 border-r border-[var(--color-grid)] w-1/5"></th>
              <th className="py-6 px-8 border-r border-[var(--color-grid)] w-1/5">
                <div className="font-[family-name:var(--font-display)] text-[length:var(--text-heading-sm)]">Free</div>
              </th>
              <th className="py-6 px-8 border-r border-[var(--color-grid)] w-1/5">
                <div className="font-[family-name:var(--font-display)] text-[length:var(--text-heading-sm)]">Developer</div>
              </th>
              <th className="py-6 px-8 border-r border-[var(--color-grid)] w-1/5">
                <span className="label">Most used</span>
                <div className="font-[family-name:var(--font-display)] text-[length:var(--text-heading-sm)] mt-2">Scale</div>
              </th>
              <th className="py-6 pl-8 w-1/5">
                <div className="font-[family-name:var(--font-display)] text-[length:var(--text-heading-sm)]">Enterprise</div>
              </th>
            </tr>
          </thead>
          <tbody className="font-[family-name:var(--font-body)] text-[length:var(--text-body-md)]">
            <tr className="border-b border-[var(--color-grid)]">
              <td className="py-4 pr-4 border-r border-[var(--color-grid)] font-medium">Monthly tile requests</td>
              <td className="py-4 px-8 border-r border-[var(--color-grid)]">10,000</td>
              <td className="py-4 px-8 border-r border-[var(--color-grid)]">500,000</td>
              <td className="py-4 px-8 border-r border-[var(--color-grid)]">5,000,000</td>
              <td className="py-4 px-8">Unlimited</td>
            </tr>
            <tr className="border-b border-[var(--color-grid)]">
              <td className="py-4 pr-4 border-r border-[var(--color-grid)] font-medium">Zoom levels</td>
              <td className="py-4 px-8 border-r border-[var(--color-grid)]">0–12</td>
              <td className="py-4 px-8 border-r border-[var(--color-grid)]">0–16</td>
              <td className="py-4 px-8 border-r border-[var(--color-grid)]">0–18</td>
              <td className="py-4 px-8">0–22</td>
            </tr>
            <tr className="border-b border-[var(--color-grid)]">
              <td className="py-4 pr-4 border-r border-[var(--color-grid)] font-medium">SLA uptime</td>
              <td className="py-4 px-8 border-r border-[var(--color-grid)] text-[var(--color-fog)]">None</td>
              <td className="py-4 px-8 border-r border-[var(--color-grid)]">99.5%</td>
              <td className="py-4 px-8 border-r border-[var(--color-grid)]">99.9%</td>
              <td className="py-4 px-8">99.99%</td>
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
              <td className="py-4 px-8 border-r border-[var(--color-grid)] font-[family-name:var(--font-display)] text-[length:var(--text-heading-sm)]">$0/mo</td>
              <td className="py-4 px-8 border-r border-[var(--color-grid)] font-[family-name:var(--font-display)] text-[length:var(--text-heading-sm)]">$49/mo</td>
              <td className="py-4 px-8 border-r border-[var(--color-grid)] font-[family-name:var(--font-display)] text-[length:var(--text-heading-sm)]">$299/mo</td>
              <td className="py-4 px-8 font-[family-name:var(--font-display)] text-[length:var(--text-heading-sm)]">Contact us</td>
            </tr>
            <tr>
              <td className="py-8 pr-4 border-r border-[var(--color-grid)]"></td>
              <td className="py-8 px-8 border-r border-[var(--color-grid)]">
                <a href="/contact" className="btn-primary">Get started</a>
              </td>
              <td className="py-8 px-8 border-r border-[var(--color-grid)]">
                <a href="/contact" className="btn-primary">Get started</a>
              </td>
              <td className="py-8 px-8 border-r border-[var(--color-grid)]">
                <a href="/contact" className="btn-primary">Get started</a>
              </td>
              <td className="py-8 px-8">
                <a href="/contact" className="btn-primary">Get started</a>
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* FAQ Section */}
      <section className="max-w-[1280px] mx-auto px-6 py-16">
        <h2 className="font-[family-name:var(--font-display)] text-[length:var(--text-display-md)] font-medium mb-12">
          Frequently asked questions
        </h2>
        <div className="space-y-4 max-w-3xl">
          <details className="group border-b border-[var(--color-grid)] pb-4">
            <summary className="flex justify-between items-center cursor-pointer list-none font-[family-name:var(--font-body)] text-[length:var(--text-body-lg)] font-medium hover:text-[var(--color-paper)] transition-colors">
              Can I upgrade or downgrade my plan at any time?
              <span className="text-[var(--color-accent)] transition-transform group-open:rotate-45">+</span>
            </summary>
            <p className="mt-4 font-[family-name:var(--font-body)] text-[length:var(--text-body-md)] text-[var(--color-fog)] leading-relaxed">
              Yes, you can change your plan at any time from your account dashboard. Changes take effect immediately and your next invoice will be prorated accordingly.
            </p>
          </details>

          <details className="group border-b border-[var(--color-grid)] pb-4">
            <summary className="flex justify-between items-center cursor-pointer list-none font-[family-name:var(--font-body)] text-[length:var(--text-body-lg)] font-medium hover:text-[var(--color-paper)] transition-colors">
              Do tile requests roll over month to month?
              <span className="text-[var(--color-accent)] transition-transform group-open:rotate-45">+</span>
            </summary>
            <p className="mt-4 font-[family-name:var(--font-body)] text-[length:var(--text-body-md)] text-[var(--color-fog)] leading-relaxed">
              Tile requests do not roll over. Your allowance resets at the start of each billing cycle based on your current plan.
            </p>
          </details>

          <details className="group border-b border-[var(--color-grid)] pb-4">
            <summary className="flex justify-between items-center cursor-pointer list-none font-[family-name:var(--font-body)] text-[length:var(--text-body-lg)] font-medium hover:text-[var(--color-paper)] transition-colors">
              Is there a free trial for paid plans?
              <span className="text-[var(--color-accent)] transition-transform group-open:rotate-45">+</span>
            </summary>
            <p className="mt-4 font-[family-name:var(--font-body)] text-[length:var(--text-body-md)] text-[var(--color-fog)] leading-relaxed">
              We offer a 14-day free trial on the Developer and Scale plans. No credit card is required to start your trial.
            </p>
          </details>
        </div>
      </section>
    </main>
  );
}
