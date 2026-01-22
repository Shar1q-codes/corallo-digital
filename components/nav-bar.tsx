'use client';

import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { motion, useScroll } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';

import { Button } from '@/components/button';
import { cn } from '@/lib/utils';

const links = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

const headerVariants = {
  initial: { y: -32, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } },
};

export function NavBar() {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const unsubscribe = scrollY.on('change', (latest) => {
      setIsScrolled(latest > 80);
    });
    return () => unsubscribe();
  }, [scrollY]);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const linkItems = useMemo(
    () =>
      links.map((link) => {
        const currentPath = pathname ?? '/';
        const active =
          currentPath === link.href ||
          (link.href !== '/' && currentPath.startsWith(link.href));

        return (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              'relative text-sm font-medium transition-colors duration-200',
              'after:absolute after:left-0 after:bottom-0 after:h-px after:w-full after:scale-x-0 after:bg-gradient-to-r after:from-primary after:to-secondary after:transition-transform after:duration-300',
              'hover:text-primary focus-visible:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)]',
              'hover:after:scale-x-100',
              active
                ? 'text-primary after:scale-x-100'
                : 'text-[color:var(--text-secondary)]'
            )}
            aria-current={active ? 'page' : undefined}
          >
            {link.label}
          </Link>
        );
      }),
    [pathname]
  );

  return (
    <motion.header
      variants={headerVariants}
      initial="initial"
      animate="visible"
      className={cn(
        'sticky top-0 z-50 transition-all duration-300',
        isScrolled
          ? 'border-b border-[var(--color-border)] bg-surface/85 backdrop-blur-xl shadow-soft'
          : 'border-b border-transparent bg-transparent'
      )}
    >
      <div className="container mx-auto flex h-20 items-center justify-between gap-6 px-6 lg:px-8">
        <Link
          href="/"
          className="group flex items-center gap-3 text-lg font-semibold text-primary transition-colors duration-300"
        >
          <Image
            src="/images/CDS_LOGO.png"
            alt="Corallo Digital"
            width={176}
            height={110}
            priority
          />
        </Link>
        <nav
          className="hidden items-center gap-8 lg:flex"
          aria-label="Main navigation"
        >
          {linkItems}
        </nav>
        <div className="hidden items-center gap-4 lg:flex">
          <Button
            href="/services"
            variant="ghost"
            className="hover:translate-y-[-1px]"
          >
            View Services
          </Button>
          <Button
            href="/contact"
            variant="marketing"
            className="shadow-glow hover:shadow-strong"
          >
            Get a Proposal
          </Button>
        </div>
        <div className="flex items-center gap-3 lg:hidden">
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-border)] bg-surface/75 text-[color:var(--text-primary)] transition hover:bg-primary-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)]"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle navigation"
          >
            {isOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>
      <motion.div
        id="mobile-menu"
        initial={false}
        animate={
          isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }
        }
        transition={{ duration: 0.35, ease: 'easeInOut' }}
        className="overflow-hidden lg:hidden"
      >
        <nav
          className="border-t border-[var(--color-border)] bg-surface px-6 py-6 shadow-soft"
          aria-label="Mobile navigation"
        >
          <ul className="space-y-4">
            {links.map((link) => {
              const currentPath = pathname ?? '/';
              const active =
                currentPath === link.href ||
                (link.href !== '/' && currentPath.startsWith(link.href));
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      'flex items-center justify-between text-base font-medium transition hover:text-primary-600',
                      active
                        ? 'text-primary'
                        : 'text-[color:var(--text-secondary)]'
                    )}
                    aria-current={active ? 'page' : undefined}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="mt-6 flex flex-col gap-3">
            <Button href="/services" variant="ghost" className="justify-center">
              View Services
            </Button>
            <Button
              href="/contact"
              variant="marketing"
              className="justify-center shadow-glow"
            >
              Get a Proposal
            </Button>
          </div>
        </nav>
      </motion.div>
    </motion.header>
  );
}
