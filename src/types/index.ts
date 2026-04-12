// ============================================================
// Shared TypeScript interfaces and types
// Import from here — never redefine types in component files
// ============================================================

// --- Navigation ---

export interface NavLink {
  label: string;
  href: string;
}

// --- Profile / Hero ---

export interface SocialLink {
  platform: string;
  href: string;
  label: string;
}

export interface Profile {
  name: string;
  tagline: string;
  title: string;
  company: string;
  location: string;
  bio: string;
  email: string;
  socials: SocialLink[];
}

// --- Experience ---

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  summary: string;
  highlights: string[];
  tags: string[];
}

// --- Skills ---

export interface SkillGroup {
  category: string;
  skills: string[];
}

// --- Projects ---

export type ProjectStatus = 'live' | 'demo' | 'wip';

export interface Project {
  id: string;
  title: string;
  summary: string;
  tags: string[];
  status: ProjectStatus;
  demoUrl?: string;
  repoUrl?: string;
}
