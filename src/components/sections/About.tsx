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
            From the shop floor to the server room.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 text-[var(--color-text-body)] leading-relaxed">
          <div className="flex flex-col gap-4">
            <p>
              My father ran a machine shop, and by fourteen I wasn&apos;t just
              watching — I was writing the CNC programs, modifying G-code, running
              the machines, grinding burrs, and driving shipments. That hands-on
              foundation gave me something most engineers and most developers
              never get: an instinct for how physical systems actually behave
              when they leave the drawing.
            </p>
            <p>
              I studied aerospace engineering out of genuine fascination with
              things that fly. Coding came later, initially out of necessity —
              the kind of analysis work I was doing demanded automation or it
              simply couldn&apos;t be done at scale. So I taught myself to code
              and my eyes instantly opened to the possibilities. The
              inefficiencies around me became impossible to ignore — hand-written
              plans, redundant processes, engineers doing by hand what a
              well-placed script could do in seconds. I started fixing those
              problems one at a time: MATLAB, then VBA, then web applications,
              then enterprise platforms.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <p>
              Eventually my manager recognized what was happening and moved me
              into pure software development. That transition wasn&apos;t a departure
              from engineering — it was an extension of it. The same instinct
              that drove me to automate a structural analysis pipeline drove me
              to architect a Unified Namespace for a manufacturing floor.
              The domain changes. The approach doesn&apos;t.
            </p>
            <p>
              I understand what a technician needs on the floor, what a program
              manager needs in a briefing, and what an executive needs to trust
              a system. I&apos;ve built for all of them — and while I&apos;ve made
              mistakes and learned from them along the way, I believe in the
              products I&apos;ve built and would stand behind them at any level.
              No formal CS training. Dozens of languages and stacks.
              Currently leading enterprise development at {profile.company}.
            </p>
          </div>
        </div>

      </div>
    </Section>
  );
}
