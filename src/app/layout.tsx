import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { Nav } from '@/components/layout/Nav';
import { Footer } from '@/components/layout/Footer';
import { profile } from '@/data/profile';
import type { NavLink } from '@/types';
import './globals.css';

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Shay Flaherty — Aerospace Engineer & Software Developer',
    template: '%s | Shay Flaherty',
  },
  description: 'Lead Developer at Boeing. Building enterprise systems where precision engineering meets modern software.',
  openGraph: {
    type: 'website',
    url: 'https://shayflaherty.com',
    siteName: 'Shay Flaherty',
  },
};

const NAV_LINKS: NavLink[] = [
  { label: 'About',      href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills',     href: '#skills' },
  { label: 'Projects',   href: '#projects' },
  { label: 'Contact',    href: '#contact' },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <Nav links={NAV_LINKS} />
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>
        <Footer name={profile.name} />
      </body>
    </html>
  );
}
