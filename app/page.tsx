import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { Experience } from '@/components/sections/Experience';
import { ComposerSection } from '@/components/sections/ComposerSection';
import { SoundDesign } from '@/components/sections/SoundDesign';
import { PresetGallery } from '@/components/sections/PresetGallery';
import { Pricing } from '@/components/sections/Pricing';

export default function Page() {
  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[540px] w-[540px] -translate-x-1/2 rounded-full bg-primary/20 blur-[160px]" />
        <div className="absolute right-[-120px] top-32 h-[420px] w-[420px] rounded-full bg-secondary/20 blur-[140px]" />
      </div>
      <Header />
      <main>
        <Hero />
        <Experience />
        <ComposerSection />
        <SoundDesign />
        <PresetGallery />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}
