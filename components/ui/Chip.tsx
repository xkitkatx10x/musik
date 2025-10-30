import type { ComponentType } from 'react';

export function Chip({ label, icon: Icon }: { label: string; icon?: ComponentType<{ className?: string }> }) {
  return (
    <span className="badge">
      {Icon ? <Icon className="h-4 w-4" /> : null}
      {label}
    </span>
  );
}
