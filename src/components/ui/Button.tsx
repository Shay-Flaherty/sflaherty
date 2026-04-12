import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';

// ---- Types ----

type ButtonVariant = 'primary' | 'ghost' | 'outline';
type ButtonSize = 'sm' | 'md' | 'lg';

interface BaseButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
}

type ButtonAsButton = BaseButtonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: never };

type ButtonAsAnchor = BaseButtonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

type ButtonProps = ButtonAsButton | ButtonAsAnchor;

// ---- Style maps ----

const variantStyles: Record<ButtonVariant, string> = {
  primary: [
    'bg-[var(--color-accent)] text-[var(--color-text-primary)]',
    'hover:bg-[var(--color-accent-hover)]',
    'border border-transparent',
  ].join(' '),
  ghost: [
    'bg-transparent text-[var(--color-text-accent)]',
    'hover:text-[var(--color-text-primary)] hover:bg-[var(--color-bg-elevated)]',
    'border border-[var(--color-border)]',
  ].join(' '),
  outline: [
    'bg-transparent text-[var(--color-text-secondary)]',
    'hover:text-[var(--color-text-primary)] hover:border-[var(--color-border-subtle)]',
    'border border-[var(--color-border)]',
  ].join(' '),
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-3 py-1.5 text-sm rounded-[var(--radius-md)]',
  md: 'px-5 py-2.5 text-sm rounded-[var(--radius-md)]',
  lg: 'px-6 py-3 text-base rounded-[var(--radius-lg)]',
};

const baseStyles = [
  'inline-flex items-center justify-center gap-2',
  'font-medium leading-none',
  'transition-colors duration-200',
  'cursor-pointer select-none',
  'focus-visible:outline-2 focus-visible:outline-[var(--color-accent)] focus-visible:outline-offset-2',
].join(' ');

// ---- Component ----

export function Button({
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}: ButtonProps) {
  const styles = [baseStyles, variantStyles[variant], sizeStyles[size], className].join(' ');

  if ('href' in props && props.href !== undefined) {
    const { href, ...anchorProps } = props as ButtonAsAnchor;
    return <a href={href} className={styles} {...anchorProps} />;
  }

  return <button className={styles} {...(props as ButtonAsButton)} />;
}
