import type { ExperienceItem } from '@/types';

export const experience: ExperienceItem[] = [
  {
    id: 'boeing-lead',
    role: 'Lead Developer',
    company: 'Boeing',
    period: '2021 — Present',
    location: 'Portland, OR',
    summary: 'Lead developer and architectural authority on Project Lotus, an enterprise Unified Namespace implementation for Boeing manufacturing.',
    highlights: [
      'Led development of Project Lotus — enterprise UNS using MQTT, HighByte Intelligence Hub, and Ignition across Boeing manufacturing',
      'Architected and delivered Smart Factory — a 3D isometric aircraft line viewer with multi-layer security, contributing to $96M cost avoidance during FAA recertification',
      'Nominated for Associate Technical Fellow in Software Development under Materials, Processes & Physics',
      'Systems briefed directly to the Boeing CTO — built and maintained with executive visibility',
    ],
    tags: ['MQTT', 'HighByte', 'Ignition', 'IIoT', 'C#', 'TypeScript', 'Three.js'],
  },
  {
    id: 'boeing-dev',
    role: 'Software Developer',
    company: 'Boeing',
    period: '2017 — 2021',
    location: 'Portland, OR',
    summary: 'Full-stack development across Boeing enterprise platforms, with a focus on manufacturing data systems.',
    highlights: [
      'Built and maintained full-stack applications supporting aircraft manufacturing operations',
      'Contributed to enterprise data platform development across multiple programs',
    ],
    tags: ['Vue 3', 'Python', 'Django', 'PostgreSQL', 'Cloud Foundry'],
  },
];
