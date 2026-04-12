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
    id: 'shiftr',
    title: 'Shiftr',
    summary: 'Work order and schedule management application within the Smart Factory platform. Tracked installation packages, work orders, and production schedules across the aircraft line.',
    tags: ['TypeScript', 'Node.js', 'Cloud Foundry', 'Tanzu'],
    status: 'wip',
  },
];
