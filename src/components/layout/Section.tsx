import type { HTMLAttributes } from 'react';

// ---- Types ----

interface SectionProps extends HTMLAttributes<HTMLElement> {
  id?: string;
  contained?: boolean;
  className?: string;
  children: React.ReactNode;
}

// ---- Component ----

export function Section({
  id,
  contained = true,
  className = '',
  children,
  ...props
}: SectionProps) {
  return (
    <section
      id={id}
      className={['py-16 md:py-24', className].join(' ')}
      {...props}
    >
      {contained ? (
        <div className="mx-auto w-full max-w-4xl px-6 md:px-8">
          {children}
        </div>
      ) : children}
    </section>
  );
}
