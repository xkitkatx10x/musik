import { Lightbulb, Sparkle, Touchpad, Workflow } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/Card';

const experiences = [
  {
    icon: Sparkle,
    title: 'Adaptive Inspiration Engine',
    description:
      'AI-curated motifs evolve with your session to suggest progressions, rhythms, and textures based on your creative direction.'
  },
  {
    icon: Touchpad,
    title: 'Tactile-first Interface',
    description:
      'Modular panels and gesture-friendly controls ensure the surface adapts to your workflow on desktop, tablet, or stage.'
  },
  {
    icon: Workflow,
    title: 'Collaborative Flow',
    description:
      'Invite collaborators into shared scenes, leave timestamped notes, and branch into alternate arrangements without friction.'
  },
  {
    icon: Lightbulb,
    title: 'Focus-driven UX',
    description:
      'Layered information architecture keeps critical actions within reach while background processes fade into the periphery.'
  }
];

export function Experience() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24" id="experience">
      <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
        <span className="badge">Experience</span>
        <h2 className="section-title mt-4">Designed with UX and UI best practices at the core</h2>
        <p className="section-subtitle mt-4">
          Every interaction is crafted around user research, prototyping, and heuristics to amplify clarity, reduce friction, and
          celebrate creativity.
        </p>
      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-2">
        {experiences.map((experience) => (
          <Card key={experience.title}>
            <CardHeader>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
                <experience.icon className="h-6 w-6 text-accent" />
              </div>
              <h3 className="card-title">{experience.title}</h3>
            </CardHeader>
            <CardContent>
              <p className="card-description">{experience.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
