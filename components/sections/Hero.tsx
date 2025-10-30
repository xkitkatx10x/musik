'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Chip } from '@/components/ui/Chip';

export function Hero() {
  return (
    <section className="relative mx-auto flex max-w-6xl flex-col gap-12 px-6 pt-32 pb-24 md:flex-row md:items-center">
      <div className="flex-1 space-y-8">
        <Chip icon={Sparkles} label="AI-Assisted Music Creation" />
        <motion.h1
          animate={{ y: 0, opacity: 1 }}
          className="text-5xl font-display font-bold leading-tight md:text-6xl"
          initial={{ y: 30, opacity: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          Compose immersive soundscapes with human intuition and AI precision.
        </motion.h1>
        <p className="max-w-xl text-lg text-slate-300">
          MUSIK Studio merges tactile controls with adaptive intelligence to guide you from inspiration to polished tracks. Explore
          a workflow designed for flow state, collaboration, and sonic discovery.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Button>
            Start Creating
            <ArrowRight className="h-4 w-4" />
          </Button>
          <Button intent="secondary">
            Watch Experience Tour
          </Button>
        </div>
        <div className="flex gap-8 text-sm text-slate-400">
          <div>
            <span className="block text-2xl font-semibold text-white">12k+</span>
            Creators active monthly
          </div>
          <div>
            <span className="block text-2xl font-semibold text-white">4.9/5</span>
            UX research satisfaction
          </div>
        </div>
      </div>
      <motion.div
        animate={{ opacity: 1, scale: 1 }}
        className="relative flex-1"
        initial={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <div className="gradient-border rounded-[2.5rem]">
          <div className="glass-panel relative h-[480px] overflow-hidden rounded-[2.5rem] border border-white/10 p-8">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,211,238,0.25),transparent_50%)]" />
            <div className="relative z-10 flex h-full flex-col justify-between">
              <div>
                <h2 className="font-display text-2xl text-white">Live Session</h2>
                <p className="mt-2 text-sm text-slate-300">Adaptive controls respond to your creative intent in real-time.</p>
              </div>
              <div className="grid grid-cols-4 gap-4">
                {[0, 1, 2, 3].map((column) => (
                  <div key={column} className="space-y-3 rounded-2xl bg-white/5 p-4">
                    {[0, 1, 2, 3].map((row) => (
                      <span
                        key={row}
                        className="block h-12 rounded-xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5"
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
