import Link from 'next/link';

const footerLinks = {
  company: [
    { label: 'About', href: '/about' },
    { label: 'Ecosystem', href: '/services' },
    { label: 'Contact', href: '/contact' },
  ],
  ecosystem: [
    { label: 'Analytics Dashboards', href: '/services#analytics-dashboards' },
    { label: 'ATS', href: '/services#ats' },
    { label: 'TaxOps', href: '/services#taxops' },
  ],
  resources: [
    { label: 'Privacy', href: '#' },
    { label: 'Terms', href: '#' },
  ],
};

const socials = [
  { name: 'LinkedIn', href: 'https://www.linkedin.com' },
  { name: 'Instagram', href: 'https://www.instagram.com' },
  { name: 'YouTube', href: 'https://www.youtube.com' },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-surface">
      <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-primary via-secondary to-accent" />
      <div className="container relative mx-auto px-6 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <Link
              href="/"
              className="flex items-center gap-3 text-lg font-semibold tracking-tight text-primary"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-primary text-inverse shadow-soft">
                CD
              </span>
              Corallo Digital
            </Link>
            <p className="text-sm text-secondary">
              We build and operate a portfolio of digital systems designed for
              clarity, integration, and long-term coherence.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {Object.entries(footerLinks).map(([group, items]) => (
              <div key={group} className="space-y-4">
                <h4 className="text-xs font-semibold uppercase tracking-[0.3em] text-muted">
                  {group}
                </h4>
                <ul className="space-y-2 text-sm text-secondary">
                  {items.map((item) => (
                    <li key={`${group}-${item.label}`}>
                      <Link
                        className="group relative inline-flex items-center gap-2 leading-relaxed transition hover:text-primary"
                        href={item.href}
                      >
                        <span>{item.label}</span>
                        <span className="h-px w-6 bg-gradient-to-r from-primary/30 to-secondary/40 opacity-0 transition group-hover:opacity-100" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="space-y-4">
              <h4 className="text-xs font-semibold uppercase tracking-[0.3em] text-muted">
                Contact
              </h4>
              <p className="text-sm text-secondary">
                Reach out at hello@corallodigital.com for product access,
                partnerships, or general ecosystem inquiries.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-6 border-t border-[var(--color-border)] pt-8 text-sm text-muted md:flex-row md:items-center md:justify-between">
          <p>
            &copy; {new Date().getFullYear()} Corallo Digital. All rights
            reserved.
          </p>
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

