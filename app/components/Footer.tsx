import Link from "next/link";

const columns = [
  {
    heading: "Product",
    links: [
      { label: "Pricing", href: "/pricing" },
      { label: "Integrations", href: "/integrations" },
      { label: "Status", href: "/status" },
      { label: "Changelog", href: "/changelog" },
    ],
  },
  {
    heading: "Governance",
    links: [
      { label: "Security", href: "/security" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
  {
    heading: "Organization",
    links: [
      { label: "About", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer role="contentinfo" className="bg-[var(--color-ink)]">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[var(--space-8)] md:gap-[var(--space-12)] pt-[var(--space-16)]">
          {columns.map((col) => (
            <div key={col.heading}>
              <h3 className="text-[var(--color-fog)] text-[var(--text-label)] font-medium tracking-[0.04em] uppercase mb-[var(--space-4)]">
                {col.heading}
              </h3>
              <ul className="flex flex-col gap-[var(--space-2)] list-none p-0 m-0">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[var(--color-fog)] text-[var(--text-body-md)] leading-[1.6] no-underline hover:text-[var(--color-paper)] transition-colors duration-150 ease-out"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-[var(--space-3)] md:gap-0 py-[var(--space-6)] border-t border-[var(--color-grid)]">
          <p className="text-[var(--color-fog)] text-[var(--text-body-md)] m-0">
            &copy; 2026 Ordnance Survey Cloud. All rights reserved.
          </p>
          <span className="mono font-[var(--font-mono)] text-[var(--text-mono)] text-[var(--color-fog)]">
            2026-07-25 14:42:01 UTC
          </span>
        </div>
      </div>
    </footer>
  );
}
