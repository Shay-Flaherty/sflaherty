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
            The full package.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 text-[var(--color-text-body)] leading-relaxed">
          <div className="flex flex-col gap-4">
            <p>
              I grew up in a machine shop. My father ran one, and I spent years
              learning how manufactured things actually come together — not from
              a textbook, but from watching metal get cut, inspected, rejected,
              and reworked. That experience shaped how I think about systems
              before I ever wrote a line of code.
            </p>
            <p>
              I studied aerospace engineering because I wanted to understand the
              design side. Then I taught myself to program because the tools
              available to engineers weren&apos;t good enough and I decided to
              build better ones. No CS degree. No bootcamp. Just hard problems
              and a refusal to stop until they were solved.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <p>
              That path means I carry context that most developers don&apos;t
              have. I understand what a maintenance technician needs on the floor,
              what a program manager needs in a briefing, and what a CTO needs to
              see to trust a system. I&apos;ve built for all of them — and I&apos;ve
              had to defend those decisions at every level.
            </p>
            <p>
              I&apos;ve proven out robust systems across dozens of languages and
              stacks, without formal training in any of them. I&apos;m now the lead
              developer on enterprise-level programs at {profile.company} with
              visibility at the executive level. The work is watched closely.
              I build accordingly.
            </p>
          </div>
        </div>

      </div>
    </Section>
  );
}
