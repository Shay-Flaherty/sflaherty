import { Badge } from '@/components/ui/Badge';
import { Section } from '@/components/layout/Section';
import type { ExperienceItem } from '@/types';

// ---- Types ----

interface ExperienceProps {
  items: ExperienceItem[];
}

// ---- Sub-components ----

function ExperienceCard({ item }: { item: ExperienceItem }) {
  return (
    <article className="flex flex-col gap-4 border-l-2 border-[var(--color-border)] pl-6">
      <div className="flex flex-col gap-1">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h3 className="text-lg font-medium text-[var(--color-text-primary)]">
            {item.role}
          </h3>
          <span className="text-sm text-[var(--color-text-muted)] font-mono">
            {item.period}
          </span>
        </div>
        <p className="text-sm text-[var(--color-text-accent)]">
          {item.company} · {item.location}
        </p>
      </div>

      <p className="text-[var(--color-text-body)] leading-relaxed">
        {item.summary}
      </p>

      <ul className="flex flex-col gap-2">
        {item.highlights.map((highlight) => (
          <li
            key={highlight}
            className="flex gap-3 text-sm text-[var(--color-text-body)] leading-relaxed"
          >
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent)]" />
            {highlight}
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-2">
        {item.tags.map((tag) => (
          <Badge key={tag} label={tag} variant="default" />
        ))}
      </div>
    </article>
  );
}

// ---- Component ----

export function Experience({ items }: ExperienceProps) {
  return (
    <Section id="experience" className="bg-[var(--color-bg-surface)]">
      <div className="flex flex-col gap-8">

        <div className="flex flex-col gap-2">
          <p className="text-xs font-medium uppercase tracking-widest text-[var(--color-text-muted)]">
            Experience
          </p>
          <h2 className="text-2xl md:text-3xl font-medium text-[var(--color-text-primary)]">
            Where I&apos;ve worked
          </h2>
        </div>

        <div className="flex flex-col gap-12">
          {items.map((item) => (
            <ExperienceCard key={item.id} item={item} />
          ))}
        </div>

      </div>
    </Section>
  );
}
