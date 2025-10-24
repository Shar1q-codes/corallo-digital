"use client";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { Button } from "@/components/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" }
];

export function NavBar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/60 bg-white/80 shadow-sm backdrop-blur dark:border-slate-800/60 dark:bg-slate-950/80">
      <div className="container mx-auto flex h-20 items-center justify-between gap-6 px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 text-xl font-semibold tracking-tight text-primary dark:text-white">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 text-accent">CD</span>
          Corallo Digital
        </Link>
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main navigation">
          {links.map((link) => {
            const active = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium text-slate-600 transition hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 dark:text-slate-300",
                  active && "text-primary dark:text-white"
                )}
                aria-current={active ? "page" : undefined}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
        <div className="hidden items-center gap-4 lg:flex">
          <ThemeToggle />
          <Button href="/work" variant="ghost">
            View Work
          </Button>
          <Button href="/contact" variant="primary">
            Get a Proposal
          </Button>
        </div>
        <div className="flex items-center gap-3 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle navigation"
          >
            {isOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
          </button>
        </div>
      </div>
      <div
        id="mobile-menu"
        className={cn(
          "lg:hidden",
          isOpen ? "block" : "hidden"
        )}
      >
        <nav className="border-t border-slate-200 bg-white px-6 py-6 shadow-lg dark:border-slate-800 dark:bg-slate-900" aria-label="Mobile navigation">
          <ul className="space-y-4">
            {links.map((link) => {
              const active = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      "flex items-center justify-between text-base font-medium text-slate-700 transition hover:text-primary dark:text-slate-200",
                      active && "text-primary dark:text-white"
                    )}
                    aria-current={active ? "page" : undefined}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="mt-6 flex flex-col gap-3">
            <Button href="/work" variant="ghost" className="justify-center">
              View Work
            </Button>
            <Button href="/contact" className="justify-center">
              Get a Proposal
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
