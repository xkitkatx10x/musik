import { Check } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader } from '@/components/ui/Card';

const tiers = [
  {
    name: 'Creator',
    price: '$14',
    billing: 'per month',
    description: 'Essential tools for independent artists crafting their sonic identity.',
    features: ['Unlimited sessions', 'AI motif suggestions', 'Up to 3 collaborators', 'In-app mastering previews'],
    highlighted: false
  },
  {
    name: 'Studio',
    price: '$29',
    billing: 'per month',
    description: 'Advanced control for producers and small studios managing multiple projects.',
    features: ['Everything in Creator', 'Unlimited collaborators', 'Advanced automation', 'Stem exporting with versions'],
    highlighted: true
  },
  {
    name: 'Enterprise',
    price: 'Let’s talk',
    billing: 'Custom plans',
    description: 'Tailored solutions with onboarding, integrations, and premium support.',
    features: ['Dedicated success manager', 'Custom integrations', 'Security reviews', 'Priority roadmap input'],
    highlighted: false
  }
];

export function Pricing() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24" id="pricing">
      <div className="mx-auto max-w-3xl text-center">
        <span className="badge">Pricing</span>
        <h2 className="section-title mt-4">Choose the plan that fits your creative flow</h2>
        <p className="section-subtitle mt-4">
          Simple, transparent pricing with inclusive features across accessibility, collaboration, and performance.
        </p>
      </div>
      <div className="mt-16 grid gap-8 lg:grid-cols-3">
        {tiers.map((tier) => (
          <Card
            key={tier.name}
            className={`flex h-full flex-col border ${tier.highlighted ? 'border-accent/60 bg-white/10 shadow-glow' : 'border-white/10 bg-white/5'}`}
          >
            <CardHeader className="gap-4">
              <div className="flex items-center justify-between">
                <h3 className="card-title">{tier.name}</h3>
                {tier.highlighted ? <span className="badge bg-accent/20 text-accent">Most Popular</span> : null}
              </div>
              <div className="flex items-baseline gap-2 text-white">
                <span className="text-4xl font-semibold">{tier.price}</span>
                <span className="text-sm text-slate-400">{tier.billing}</span>
              </div>
              <p className="card-description">{tier.description}</p>
            </CardHeader>
            <CardContent className="flex flex-1 flex-col justify-between gap-6">
              <ul className="space-y-3 text-sm text-slate-200">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 text-accent" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button intent={tier.highlighted ? 'primary' : 'secondary'}>Get Started</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
