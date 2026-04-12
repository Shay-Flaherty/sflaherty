import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Section } from '@/components/layout/Section';
import type { Project, ProjectStatus } from '@/types';

// ---- Types ----

interface ProjectsProps {
  projects: Project[];
}

// ---- Helpers ----

const STATUS_LABELS: Record<ProjectStatus, string> = {
  live: 'Live',
  demo: 'Demo',
  wip: 'In progress',
};

const STATUS_VARIANTS: Record<ProjectStatus, 'accent' | 'default' | 'muted'> = {
  live: 'accent',
  demo: 'default',
  wip: 'muted',
};

// ---- Sub-components ----

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex flex-col gap-4 rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-bg-surface)] p-6">
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-lg font-medium text-[var(--color-text-primary)]">
          {project.title}
        </h3>
        <Badge
          label={STATUS_LABELS[project.status]}
          variant={STATUS_VARIANTS[project.status]}
          className="shrink-0"
        />
      </div>

      <p className="flex-1 text-sm leading-relaxed text-[var(--color-text-body)]">
        {project.summary}
      </p>

      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <Badge key={tag} label={tag} variant="default" />
        ))}
      </div>

      {project.demoUrl && (
        <Button href={project.demoUrl} variant="ghost" size="sm">
          View demo
        </Button>
      )}
    </article>
  );
}

// ---- Component ----

export function Projects({ projects }: ProjectsProps) {
  return (
    <Section id="projects" className="bg-[var(--color-bg-surface)]">
      <div className="flex flex-col gap-8">

        <div className="flex flex-col gap-2">
          <p className="text-xs font-medium uppercase tracking-widest text-[var(--color-text-muted)]">
            Projects
          </p>
          <h2 className="text-2xl md:text-3xl font-medium text-[var(--color-text-primary)]">
            What I&apos;ve built
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

      </div>
    </Section>
  );
}
