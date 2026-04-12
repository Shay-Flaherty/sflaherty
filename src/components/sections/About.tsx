import { Section } from '@/components/layout/Section';
import type { Profile } from '@/types';

// ---- Types ----

interface AboutProps {
  profile: Profile;
}

// ---- Component ----

export function About({ profile }: AboutProps) {
  return (
    <Section id="about">
      <div className="flex flex-col gap-8">

        <div className="flex flex-col gap-2">
          <p className="text-xs font-medium uppercase tracking-widest text-[var(--color-text-muted)]">
            About
          </p>
          <h2 className="text-2xl md:text-3xl font-medium text-[var(--color-text-primary)]">
            Engineer by training. Developer by practice.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 text-[var(--color-text-body)] leading-relaxed">
          <div className="flex flex-col gap-4">
            <p>
              I started in aerospace — studied the discipline, grew up around my
              father&apos;s machine shop, and came to understand systems from the
              ground up. The same precision that goes into designing an aircraft
              structure is what I bring to software architecture.
            </p>
            <p>
              Over time I taught myself to code, and eventually that became the
              primary way I contribute. Today I lead development on enterprise
              systems at Boeing, building the data infrastructure that connects
              shop floors to decision-makers.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <p>
              My work sits at the intersection of hardware and software — IIoT
              systems, real-time data pipelines, 3D visualizations of physical
              spaces. I care about building things that are correct, maintainable,
              and actually useful to the people who depend on them.
            </p>
            <p>
              Based in {profile.location}. Currently at {profile.company}.
            </p>
          </div>
        </div>

      </div>
    </Section>
  );
}
