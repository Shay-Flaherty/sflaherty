// ---- Types ----

interface FooterProps {
  name: string;
}

// ---- Component ----

export function Footer({ name }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer
      className="border-t border-[var(--color-border)] py-8"
      role="contentinfo"
    >
      <div className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-4 px-6 md:flex-row md:px-8">
        <p className="text-sm text-[var(--color-text-muted)]">
          © {year} {name}
        </p>
        <p className="text-xs text-[var(--color-text-muted)]">
          Built with Next.js · Deployed on Vercel
        </p>
      </div>
    </footer>
  );
}
