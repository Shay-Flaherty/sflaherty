import { Badge } from '@/components/ui/Badge';
import { Section } from '@/components/layout/Section';
import type { SkillGroup } from '@/types';

// ---- Types ----

interface SkillsProps {
  groups: SkillGroup[];
}

// ---- Sub-components ----

function SkillCategory({ group }: { group: SkillGroup }) {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-xs font-medium uppercase tracking-widest text-[var(--color-text-muted)]">
        {group.category}
      </h3>
      <div className="flex flex-wrap gap-2">
        {group.skills.map((skill) => (
          <Badge key={skill} label={skill} variant="accent" />
        ))}
      </div>
    </div>
  );
}

// ---- Component ----

export function Skills({ groups }: SkillsProps) {
  return (
    <Section id="skills">
      <div className="flex flex-col gap-8">

        <div className="flex flex-col gap-2">
          <p className="text-xs font-medium uppercase tracking-widest text-[var(--color-text-muted)]">
            Skills
          </p>
          <h2 className="text-2xl md:text-3xl font-medium text-[var(--color-text-primary)]">
            Tools &amp; technologies
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {groups.map((group) => (
            <SkillCategory key={group.category} group={group} />
          ))}
        </div>

      </div>
    </Section>
  );
}
