'use client';

import { forwardRef } from 'react';
import type { ButtonHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';
import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';

const buttonStyles = cva(
  'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950',
  {
    variants: {
      intent: {
        primary:
          'bg-gradient-to-r from-primary via-violet-600 to-secondary text-white shadow-glow hover:shadow-[0_0_45px_rgba(34,211,238,0.45)]',
        secondary:
          'border border-white/10 bg-white/10 text-white hover:border-accent/60 hover:bg-white/15',
        ghost: 'text-slate-200 hover:bg-white/10'
      },
      size: {
        sm: 'px-4 py-2 text-xs',
        md: 'px-6 py-3 text-sm',
        lg: 'px-8 py-4 text-base'
      }
    },
    defaultVariants: {
      intent: 'primary',
      size: 'md'
    }
  }
);

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof buttonStyles>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { className, intent, size, ...props },
  ref
) {
  return <button ref={ref} className={twMerge(buttonStyles({ intent, size }), className)} {...props} />;
});
