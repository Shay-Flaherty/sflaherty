<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

<!-- BEGIN:project-coding-standards -->
# Project coding standards — read before writing any code

This is a portfolio site. Code quality is visible to recruiters and hiring engineers.
Every file in this repo is part of the portfolio. Write accordingly.

## File and component structure

- One component per file. No exceptions.
- Pages in `src/app/` are thin — they import sections and pass data. No logic, no JSX beyond layout.
- Components live in `src/components/` organized by type:
  - `ui/` — primitives: Button, Card, Badge, Tag, Pill, Table. Dumb, fully parameterized.
  - `layout/` — Nav, Footer, Section, PageWrapper.
  - `sections/` — Hero, About, Experience, ProjectGrid. Compose ui/ components.
  - `projects/` — per-project demo components.
- Data lives in `src/data/` as typed objects. Never hardcode content inside components.
- Pure functions and helpers live in `src/lib/`. Hooks live in `src/hooks/`.
- Types and interfaces live in `src/types/`.

## Component rules

- If a component exceeds ~100 lines, ask whether it is doing too much.
- Props must be typed with a TypeScript interface defined in the same file or imported from `src/types/`.
- Reusable before specific — if you are building something similar to an existing component, parameterize the existing one rather than duplicating it.
- No inline styles except for dynamic values that cannot be expressed in Tailwind.

## Function rules

- Maximum cyclomatic complexity of 15 per function (SonarQube default). If logic requires more, extract helpers.
- No function longer than 50 lines. Extract if needed.
- No nested ternaries. Use early returns or extracted variables.
- Side effects belong in hooks, not in component bodies.

## General rules

- Never commit node_modules, .env.local, or .next/.
- All new UI must meet WCAG AA contrast minimums (4.5:1 for normal text, 3:1 for large text).
- Prefer named exports over default exports for components (exception: page.tsx files require default export per Next.js convention).
- No `any` types in TypeScript. Use `unknown` and narrow, or define a proper interface.
- Always check whether a component or utility already exists before creating a new one.
<!-- END:project-coding-standards -->
