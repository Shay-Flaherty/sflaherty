import type { Project } from '@/types';

export const projects: Project[] = [
  {
    id: 'lotus',
    title: 'Project Lotus',
    summary: 'Enterprise Unified Namespace for Boeing manufacturing. MQTT-based data fabric connecting shop floor assets and business systems throughout the production line.',
    tags: ['MQTT', 'HighByte', 'Ignition', 'IIoT', 'TypeScript', 'SQL', 'Oracle', 'PostgreSQL'],
    status: 'demo',
  },
  {
    id: 'smart-factory',
    title: 'Smart Factory Viewer',
    summary: '3D isometric aircraft line viewer with real-time data overlays. Multi-layer security architecture supporting US and non-US person data visibility at the same site. Click any aircraft to drill into component-level status and shop metrics.',
    tags: ['Three.js', 'C#', 'ASP.NET Core', 'TypeScript', 'Bash'],
    status: 'demo',
  },
  {
    id: 'apogee',
    title: 'Apogee',
    summary: 'Full-stack engineering data platform supporting Space Launch System (SLS) assembly and fabrication. Tracked parts, components, and assembly instructions across the build flow.',
    tags: ['Vue 3', 'Python', 'Django', 'MySQL'],
    status: 'demo',
  },
  {
    id: 'soren',
    title: 'Project Soren',
    summary: 'Production AI memory and identity architecture co-developed with my spouse. Multi-namespace episodic memory system with edge functions, emotional state metabolism, workspace-based access control, and an encounter classifier pipeline. Deployed on Cloudflare Workers backed by Supabase.',
    tags: ['TypeScript', 'Cloudflare Workers', 'Supabase', 'PostgreSQL', 'Next.js', 'AI/LLM'],
    status: 'live',
    demoUrl: 'https://vibe-engine.dev',
  },
];
