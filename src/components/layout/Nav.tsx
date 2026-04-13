'use client';

import { useState } from 'react';
import type { NavLink } from '@/types';

// ---- Types ----

interface NavProps {
  links: NavLink[];
}

// ---- Constants ----

const NAV_STYLES = {
  wrapper: [
    'fixed top-0 left-0 right-0 z-50',
    'border-b border-[var(--color-border)]',
    'bg-[var(--color-bg-base)]/90 backdrop-blur-sm',
  ].join(' '),
  inner: 'mx-auto flex h-16 max-w-4xl items-center justify-between px-6 md:px-8',
  logo: 'text-[var(--color-text-primary)] font-medium text-base tracking-wide',
  desktopLinks: 'hidden md:flex items-center gap-8',
  link: [
    'text-sm text-[var(--color-text-secondary)]',
    'hover:text-[var(--color-text-primary)]',
    'transition-colors duration-200',
  ].join(' '),
  mobileButton: [
    'md:hidden flex flex-col gap-1.5 p-2 cursor-pointer',
    'text-[var(--color-text-secondary)]',
  ].join(' '),
  mobileMenu: [
    'md:hidden border-t border-[var(--color-border)]',
    'bg-[var(--color-bg-base)] px-6 py-4 flex flex-col gap-4',
  ].join(' '),
};

// ---- Helpers ----

function MobileMenuIcon({ open }: { open: boolean }) {
  return (
    <button
      aria-label={open ? 'Close menu' : 'Open menu'}
      aria-expanded={open}
      className={NAV_STYLES.mobileButton}
    >
      <span className={`block h-px w-5 bg-current transition-transform duration-200 ${open ? 'translate-y-2 rotate-45' : ''}`} />
      <span className={`block h-px w-5 bg-current transition-opacity duration-200 ${open ? 'opacity-0' : ''}`} />
      <span className={`block h-px w-5 bg-current transition-transform duration-200 ${open ? '-translate-y-2 -rotate-45' : ''}`} />
    </button>
  );
}

// ---- Component ----

export function Nav({ links }: NavProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className={NAV_STYLES.wrapper} role="banner">
      <div className={NAV_STYLES.inner}>
        <a href="/" className={NAV_STYLES.logo} aria-label="Shay Flaherty — home">
          SF
        </a>
        <nav aria-label="Primary navigation" className={NAV_STYLES.desktopLinks}>
          {links.map((link) => (
            <a key={link.href} href={link.href} className={NAV_STYLES.link}>
              {link.label}
            </a>
          ))}
        </nav>
        <div onClick={() => setMobileOpen((prev) => !prev)}>
          <MobileMenuIcon open={mobileOpen} />
        </div>
      </div>
      {mobileOpen && (
        <nav aria-label="Mobile navigation" className={NAV_STYLES.mobileMenu}>
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={NAV_STYLES.link}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
