import type { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

export function Card({ className, children }: { className?: string; children: ReactNode }) {
  return <div className={twMerge('glass-panel relative overflow-hidden', className)}>{children}</div>;
}

export function CardHeader({
  className,
  children
}: {
  className?: string;
  children: ReactNode;
}) {
  return <div className={twMerge('flex flex-col gap-3 px-6 pt-6', className)}>{children}</div>;
}

export function CardContent({
  className,
  children
}: {
  className?: string;
  children: ReactNode;
}) {
  return <div className={twMerge('px-6 pb-6', className)}>{children}</div>;
}
