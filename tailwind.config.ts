import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6D28D9',
        secondary: '#F97316',
        accent: '#22D3EE',
        muted: '#1F2937'
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        display: ['Space Grotesk', 'ui-sans-serif', 'system-ui']
      },
      boxShadow: {
        glass: '0 25px 50px -12px rgba(109, 40, 217, 0.35)',
        glow: '0 0 30px rgba(34, 211, 238, 0.35)'
      },
      backgroundImage: {
        'mesh-gradient':
          'radial-gradient(circle at 20% 20%, rgba(34, 211, 238, 0.25), transparent 40%), radial-gradient(circle at 80% 0%, rgba(249, 115, 22, 0.15), transparent 35%), radial-gradient(circle at 10% 80%, rgba(109, 40, 217, 0.2), transparent 40%)'
      }
    }
  },
  plugins: []
};

export default config;
