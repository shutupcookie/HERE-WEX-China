/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './styles/**/*.{css}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--hds-background-primary)',
        foreground: 'var(--hds-foreground-primary)',
        'button-primary': 'var(--hds-button-primary-bg)',
        'button-primary-text': 'var(--hds-button-primary-text)',
      },
      spacing: {
        0: '0rem',
        '1px': '1px',
        1: '0.25rem',
        2: '0.5rem',
        3: '0.75rem',
        4: '1rem',
        5: '1.25rem',
        6: '1.5rem',
        7: '1.75rem',
        8: '2rem',
        9: '2.5rem',
        10: '3rem',
        11: '3.5rem',
        12: '4rem',
        13: '5rem',
        14: '6rem',
        15: '7rem',
      },
      fontFamily: {
        firago: ['FiraGO', 'sans-serif'],
      },
      fontSize: {
        headline: 'var(--hds-headline-01-font-size)',
        body: 'var(--hds-body-01-font-size)',
        cta: 'var(--hds-cta-font-size)',
      },
      lineHeight: {
        headline: 'var(--hds-headline-01-line-height)',
        body: '1.5',
        cta: '1.4',
      },
      letterSpacing: {
        headline: 'var(--hds-headline-01-letter-spacing)',
      },
      fontWeight: {
        headline: 'var(--hds-headline-01-font-weight)',
        body: '400',
        cta: '500',
      },
    },
  },
  plugins: [],
}
