import type { Project } from '@/types';

export const projects: Project[] = [
  {
    id: 'lotus',
    title: 'Project Lotus',
    summary: 'Enterprise Unified Namespace for Boeing manufacturing. MQTT-based data fabric connecting shop floor assets across the aircraft production line.',
    tags: ['MQTT', 'HighByte', 'Ignition', 'IIoT', 'TypeScript'],
    status: 'demo',
  },
  {
    id: 'smart-factory',
    title: 'Smart Factory Viewer',
    summary: '3D isometric aircraft line viewer with real-time data overlays. Click any aircraft to drill into component-level status and shop metrics.',
    tags: ['Three.js', 'C#', 'ASP.NET Core', 'TypeScript'],
    status: 'demo',
  },
  {
    id: 'apogee',
    title: 'Apogee',
    summary: 'Full-stack engineering data platform for aircraft program management. Vue 3 frontend backed by a Python Django REST API.',
    tags: ['Vue 3', 'Python', 'Django', 'PostgreSQL'],
    status: 'demo',
  },
  {
    id: 'shiftr',
    title: 'Shiftr',
    summary: 'Manufacturing schedule and compliance tool that contributed to $96M cost avoidance during Boeing FAA recertification.',
    tags: ['TypeScript', 'Node.js', 'Cloud Foundry', 'Tanzu'],
    status: 'wip',
  },
];
