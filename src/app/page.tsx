import { Hero } from '@/components/sections/Hero';
import { profile } from '@/data/profile';

export default function Home() {
  return (
    <>
      <Hero profile={profile} />
    </>
  );
}
