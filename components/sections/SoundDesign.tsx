import { Code2, Equalizer, Sliders, Waveform } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/Card';

const soundDesignFeatures = [
  {
    icon: Equalizer,
    title: 'Modular Sound Lab',
    description:
      'Design patches with drag-and-drop modules, visual signal flow, and smart cable management that stays tidy and legible.'
  },
  {
    icon: Sliders,
    title: 'Macro Performance',
    description:
      'Group controls into macros that react across instruments, giving performers immediate, expressive control.'
  },
  {
    icon: Waveform,
    title: 'Spectral Vision',
    description:
      'Inspect frequencies through color-coded layers and spot mix issues instantly with accessibility-friendly contrast.'
  },
  {
    icon: Code2,
    title: 'Scripting Toolkit',
    description:
      'Extend MUSIK with TypeScript-based scripts, automation recipes, and remote control integrations.'
  }
];

export function SoundDesign() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24" id="sound-design">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-6">
          <span className="badge">Sound Design</span>
          <h2 className="section-title">A sound design lab built for experimentation</h2>
          <p className="section-subtitle">
            Navigate modular synthesis with clarity. MUSIK provides consistent hierarchy, visible affordances, and tactile feedback
            cues that keep exploration intuitive.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          {soundDesignFeatures.map((feature) => (
            <Card key={feature.title}>
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
                  <feature.icon className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="card-title">{feature.title}</h3>
              </CardHeader>
              <CardContent>
                <p className="card-description">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
