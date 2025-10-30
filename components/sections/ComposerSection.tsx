import dynamic from 'next/dynamic';
import Image from 'next/image';
import { Card, CardContent, CardHeader } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

const SequencerPad = dynamic(() => import('@/components/composer/SequencerPad').then((module) => module.SequencerPad), {
  ssr: false,
  loading: () => (
    <div className="glass-panel flex h-[420px] items-center justify-center rounded-[2.5rem] text-sm text-slate-400">
      Initializing audio engine…
    </div>
  )
});

const composerHighlights = [
  {
    title: 'Scene-based Arrangement',
    description: 'Capture variations as “scenes” and layer them into expressive arrangements with fluid transitions.'
  },
  {
    title: 'Gesture Automation',
    description: 'Record parameter movements and gestures that translate to expressive automation lanes instantly.'
  }
];

export function ComposerSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24" id="composer">
      <div className="grid gap-16 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-10">
          <span className="badge">Composer</span>
          <h2 className="section-title">Craft grooves in a sequencer designed for flow</h2>
          <p className="section-subtitle">
            The MUSIK sequencer provides immediate visual feedback, contextual controls, and haptic-friendly interactions to keep
            your ideas moving.
          </p>
          <SequencerPad />
        </div>

        <div className="space-y-6">
          {composerHighlights.map((highlight) => (
            <Card key={highlight.title}>
              <CardHeader>
                <h3 className="card-title">{highlight.title}</h3>
              </CardHeader>
              <CardContent>
                <p className="card-description">{highlight.description}</p>
              </CardContent>
            </Card>
          ))}

          <Card>
            <CardHeader className="gap-4">
              <div className="relative h-40 w-full overflow-hidden rounded-2xl">
                <Image
                  alt="Collaboration interface"
                  fill
                  sizes="(max-width: 1024px) 100vw, 420px"
                  src="/images/collaboration.svg"
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <h3 className="card-title">Invite collaborators in seconds</h3>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="card-description">
                Share live sessions with secure links, see edits unfold in real-time, and keep track of feedback threads inside the
                project timeline.
              </p>
              <Button intent="secondary">Explore Collaboration</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
