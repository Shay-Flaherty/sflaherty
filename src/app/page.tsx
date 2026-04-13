import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Experience } from '@/components/sections/Experience';
import { Skills } from '@/components/sections/Skills';
import { Projects } from '@/components/sections/Projects';
import { Contact } from '@/components/sections/Contact';
import { profile } from '@/data/profile';
import { experience } from '@/data/experience';
import { skills } from '@/data/skills';
import { projects } from '@/data/projects';

export default function Home() {
  return (
    <>
      <Hero profile={profile} />
      <About profile={profile} />
      <Experience items={experience} />
      <Skills groups={skills} />
      <Projects projects={projects} />
      <Contact profile={profile} />
    </>
  );
}
