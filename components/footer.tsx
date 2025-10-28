import Link from "next/link";

const footerLinks = {
  company: [
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" }
  ],
  services: [
    { label: "SEO", href: "/services/seo" },
    { label: "Paid Media", href: "/services/ppc" },
    { label: "Content", href: "/services/content" },
    { label: "Analytics", href: "/services/analytics" }
  ],
  resources: [
    { label: "Privacy", href: "#" },
    { label: "Terms", href: "#" }
  ]
};

const socials = [
  { name: "LinkedIn", href: "https://www.linkedin.com" },
  { name: "Instagram", href: "https://www.instagram.com" },
  { name: "YouTube", href: "https://www.youtube.com" }
];

const partners = ["Google Partner", "Meta Business Partner", "HubSpot Solutions", "Shopify Plus"];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-surface">
      <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-primary via-secondary to-accent" />
      <div className="container relative mx-auto px-6 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3 text-lg font-semibold tracking-tight text-primary">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-primary text-inverse shadow-soft">
                CD
              </span>
              Corallo Digital
            </Link>
            <p className="text-sm text-secondary">
              We are a collective of growth strategists, creatives, analysts, and operators working as one embedded squad.
              Our mission is to help ambitious teams turn marketing into a compounding engine.
            </p>
            <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.35em] text-muted">
              {partners.map((partner) => (
                <span
                  key={partner}
                  className="rounded-full border border-[var(--color-border)] bg-white/60 px-4 py-2 text-[10px] font-semibold text-secondary shadow-soft"
                >
                  {partner}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {Object.entries(footerLinks).map(([group, items]) => (
              <div key={group} className="space-y-4">
                <h4 className="text-xs font-semibold uppercase tracking-[0.3em] text-muted">
                  {group}
                </h4>
                <ul className="space-y-2 text-sm text-secondary">
                  {items.map((item) => (
                    <li key={item.href}>
                      <Link className="group relative inline-flex items-center gap-2 leading-relaxed transition hover:text-primary" href={item.href}>
                        <span>{item.label}</span>
                        <span className="h-px w-6 bg-gradient-to-r from-primary/30 to-secondary/40 opacity-0 transition group-hover:opacity-100" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="space-y-4">
              <h4 className="text-xs font-semibold uppercase tracking-[0.3em] text-muted">Contact</h4>
              <p className="text-sm text-secondary">
                Reach out at hello@corallodigital.com to plan a working session, explore embedded pods, or request our latest case studies.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-6 border-t border-[var(--color-border)] pt-8 text-sm text-muted md:flex-row md:items-center md:justify-between">
          <p>&copy; {new Date().getFullYear()} Corallo Digital. All rights reserved.</p>
          <div className="flex flex-wrap gap-4 text-secondary">
            {socials.map((social) => (
              <Link
                key={social.name}
                href={social.href}
                className="transition hover:text-primary hover:underline"
              >
                <span className="sr-only">Follow us on {social.name}</span>
                {social.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
