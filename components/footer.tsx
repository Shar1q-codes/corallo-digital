import Link from "next/link";

import { NewsletterForm } from "@/components/newsletter-form";

const footerLinks = {
  company: [
    { label: "About", href: "/about" },
    { label: "Work", href: "/work" },
    { label: "Blog", href: "/blog" }
  ],
  services: [
    { label: "SEO", href: "/services/seo" },
    { label: "Paid Media", href: "/services/ppc" },
    { label: "Content", href: "/services/content" },
    { label: "Analytics", href: "/services/analytics" }
  ],
  resources: [
    { label: "Insights", href: "/blog" },
    { label: "Privacy", href: "#" },
    { label: "Terms", href: "#" }
  ]
};

const socials = [
  { name: "LinkedIn", href: "https://www.linkedin.com" },
  { name: "Instagram", href: "https://www.instagram.com" },
  { name: "YouTube", href: "https://www.youtube.com" }
];

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
      <div className="container mx-auto px-6 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 text-lg font-semibold tracking-tight text-primary dark:text-white">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 text-accent">CD</span>
              Corallo Digital
            </Link>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              Modern digital marketing for ambitious brands. Strategy, creative, and analytics working together.
            </p>
            <div className="space-y-1 text-sm text-slate-600 dark:text-slate-300">
              <p>902 Market Street</p>
              <p>San Francisco, CA 94103</p>
              <p>+1 (415) 555-1234</p>
            </div>
          </div>
          <div className="grid gap-8 sm:grid-cols-3 lg:col-span-2">
            {Object.entries(footerLinks).map(([group, items]) => (
              <div key={group} className="space-y-4">
                <h4 className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
                  {group}
                </h4>
                <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                  {items.map((item) => (
                    <li key={item.href}>
                      <Link className="hover:text-primary" href={item.href}>
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
              Newsletter
            </h4>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              Monthly insights on growth strategies, experimentation, and creative that converts.
            </p>
            <NewsletterForm />
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-4 border-t border-slate-200 pt-8 text-sm text-slate-500 dark:border-slate-800 dark:text-slate-400 md:flex-row md:items-center md:justify-between">
          <p>&copy; {new Date().getFullYear()} Corallo Digital. All rights reserved.</p>
          <div className="flex flex-wrap gap-4">
            {socials.map((social) => (
              <Link key={social.name} href={social.href} className="hover:text-primary">
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
