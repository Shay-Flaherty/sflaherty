// ---- Types ----

type BadgeVariant = 'default' | 'accent' | 'muted';

interface BadgeProps {
  label: string;
  variant?: BadgeVariant;
  className?: string;
}

// ---- Style maps ----

const variantStyles: Record<BadgeVariant, string> = {
  default: [
    'bg-[var(--color-bg-elevated)]',
    'text-[var(--color-text-secondary)]',
    'border border-[var(--color-border)]',
  ].join(' '),
  accent: [
    'bg-[var(--color-bg-elevated)]',
    'text-[var(--color-text-accent)]',
    'border border-[var(--color-border-subtle)]',
  ].join(' '),
  muted: [
    'bg-transparent',
    'text-[var(--color-text-muted)]',
    'border border-[var(--color-border)]',
  ].join(' '),
};

const baseStyles = [
  'inline-flex items-center',
  'px-2.5 py-1',
  'text-xs font-medium tracking-wide uppercase',
  'rounded-[var(--radius-md)]',
  'leading-none',
].join(' ');

// ---- Component ----

export function Badge({ label, variant = 'default', className = '' }: BadgeProps) {
  return (
    <span className={[baseStyles, variantStyles[variant], className].join(' ')}>
      {label}
    </span>
  );
}
