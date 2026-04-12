import { Button } from '@/components/ui/Button';
import { Section } from '@/components/layout/Section';
import type { Profile } from '@/types';

// ---- Types ----

interface ContactProps {
  profile: Profile;
}

// ---- Component ----

export function Contact({ profile }: ContactProps) {
  return (
    <Section id="contact">
      <div className="flex flex-col gap-8">

        <div className="flex flex-col gap-2">
          <p className="text-xs font-medium uppercase tracking-widest text-[var(--color-text-muted)]">
            Contact
          </p>
          <h2 className="text-2xl md:text-3xl font-medium text-[var(--color-text-primary)]">
            Get in touch
          </h2>
        </div>

        <div className="flex flex-col gap-6 max-w-lg">
          <p className="text-[var(--color-text-body)] leading-relaxed">
            I&apos;m not actively looking, but I&apos;m always open to interesting
            conversations — especially around IIoT, manufacturing systems, or
            anything at the intersection of aerospace and software.
          </p>

          <div className="flex flex-col gap-3">
            <Button
              href={`mailto:${profile.email}`}
              variant="primary"
              size="md"
              className="self-start"
            >
              Send an email
            </Button>

            <div className="flex flex-wrap gap-4 pt-2">
              {profile.socials.map((social) => (
                <Button
                  key={social.platform}
                  href={social.href}
                  variant="outline"
                  size="sm"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                >
                  {social.platform}
                </Button>
              ))}
            </div>
          </div>
        </div>

      </div>
    </Section>
  );
}
