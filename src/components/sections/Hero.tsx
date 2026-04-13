import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Section } from '@/components/layout/Section';
import type { Profile } from '@/types';

// ---- Types ----

interface HeroProps {
  profile: Profile;
}

// ---- Component ----

export function Hero({ profile }: HeroProps) {
  return (
    <Section id="hero" className="pt-32 md:pt-40 pb-16 md:pb-24">
      <div className="flex flex-col gap-6">

        <Badge
          label={profile.tagline}
          variant="accent"
          className="self-start"
        />

        <div className="flex flex-col gap-2">
          <h1 className="text-4xl md:text-6xl font-medium tracking-tight text-[var(--color-text-primary)]">
            {profile.name}
          </h1>
          <p className="text-lg md:text-xl text-[var(--color-text-secondary)]">
            {profile.title}{' '}
            <span className="text-[var(--color-text-accent)]">
              · {profile.company}
            </span>
          </p>
        </div>

        <p className="max-w-xl text-base md:text-lg leading-relaxed text-[var(--color-text-body)]">
          {profile.bio}
        </p>

        <div className="flex flex-wrap gap-3 pt-2">
          <Button href="#projects" variant="primary" size="md">
            View projects
          </Button>
          <Button href="#contact" variant="ghost" size="md">
            Get in touch
          </Button>
        </div>

      </div>
    </Section>
  );
}
