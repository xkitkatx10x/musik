import presetsData from '@/public/data/presets.json';
import { Card, CardContent, CardHeader } from '@/components/ui/Card';

type Preset = {
  id: string;
  name: string;
  description: string;
  mood: string;
  tempo: number;
  tags: string[];
};

const presets = presetsData as Preset[];

export function PresetGallery() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <div className="flex flex-col gap-6 text-left sm:flex-row sm:items-end sm:justify-between">
        <div>
          <span className="badge">Sound Library</span>
          <h2 className="section-title mt-4">Curated presets to accelerate inspiration</h2>
          <p className="section-subtitle mt-4 max-w-2xl">
            Discover expertly crafted sounds that cover cinematic, electronic, and organic palettes. Filter by mood, tempo, or tags
            to jump-start your composition.
          </p>
        </div>
        <p className="text-sm text-slate-400">New collections released every Friday with community feedback loops.</p>
      </div>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {presets.map((preset) => (
          <Card key={preset.id}>
            <CardHeader className="gap-2">
              <h3 className="card-title">{preset.name}</h3>
              <p className="text-xs uppercase tracking-wider text-accent">{preset.mood} · {preset.tempo} BPM</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="card-description">{preset.description}</p>
              <div className="flex flex-wrap gap-2">
                {preset.tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-white/10 px-3 py-1 text-xs text-slate-200">
                    {tag}
                  </span>
                ))}
              </div>
              <button className="text-sm font-semibold text-accent underline underline-offset-4">Preview preset</button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
