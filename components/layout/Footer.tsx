import Link from 'next/link';

const footerLinks = [
  {
    title: 'Product',
    items: [
      { label: 'Features', href: '#experience' },
      { label: 'Composer', href: '#composer' },
      { label: 'Sound Design', href: '#sound-design' }
    ]
  },
  {
    title: 'Resources',
    items: [
      { label: 'Docs', href: '#' },
      { label: 'Community', href: '#' },
      { label: 'Support', href: '#' }
    ]
  },
  {
    title: 'Company',
    items: [
      { label: 'About', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Contact', href: '#' }
    ]
  }
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/80">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col gap-4">
          <span className="font-display text-lg font-semibold">MUSIK Studio</span>
          <p className="text-sm text-slate-300">
            Empowering creators with an intuitive, beautifully crafted environment for composing, arranging, and sharing music.
          </p>
        </div>

        {footerLinks.map((column) => (
          <div key={column.title} className="flex flex-col gap-3">
            <span className="text-sm font-semibold uppercase tracking-wider text-slate-400">{column.title}</span>
            <ul className="space-y-2 text-sm text-slate-300">
              {column.items.map((item) => (
                <li key={item.label}>
                  <Link className="transition hover:text-accent" href={item.href}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-white/10 py-6 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} MUSIK Studio. Crafted with precision for artists worldwide.
      </div>
    </footer>
  );
}
