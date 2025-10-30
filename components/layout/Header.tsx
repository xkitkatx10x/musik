'use client';

import Link from 'next/link';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Menu, X } from 'lucide-react';

const links = [
  { href: '#experience', label: 'Experience' },
  { href: '#composer', label: 'Composer' },
  { href: '#sound-design', label: 'Sound Design' },
  { href: '#pricing', label: 'Pricing' }
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-40 mx-auto flex max-w-6xl items-center justify-between rounded-full border border-white/10 bg-slate-950/70 px-6 py-3 backdrop-blur-xl">
      <Link className="flex items-center gap-2 font-display text-lg font-semibold tracking-tight" href="#">
        <span className="h-2 w-2 rounded-full bg-accent" />
        MUSIK Studio
      </Link>

      <nav className="hidden items-center gap-8 md:flex">
        {links.map((link) => (
          <Link key={link.href} className="text-sm text-slate-200 transition hover:text-white" href={link.href}>
            {link.label}
          </Link>
        ))}
      </nav>

      <div className="hidden md:flex">
        <Button intent="secondary">Launch App</Button>
      </div>

      <button
        aria-label="Toggle menu"
        className="md:hidden"
        onClick={() => setOpen((prev) => !prev)}
      >
        {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      <AnimatePresence>
        {open ? (
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="absolute left-0 right-0 top-16 mx-6 origin-top rounded-3xl border border-white/10 bg-slate-900/95 p-6 shadow-glass md:hidden"
            exit={{ opacity: 0, y: -12 }}
            initial={{ opacity: 0, y: -12 }}
          >
            <div className="flex flex-col gap-4">
              {links.map((link) => (
                <Link
                  key={link.href}
                  className="text-base text-slate-200 transition hover:text-white"
                  href={link.href}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Button className="w-full" intent="primary">
                Launch App
              </Button>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
