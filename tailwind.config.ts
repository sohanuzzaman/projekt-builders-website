import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-josefin)', 'Josefin Sans', 'system-ui', 'sans-serif'],
      },
      colors: {
        coastal: {
          background: '#F5F5EF',
          text: '#1F2839',
          gold: '#B69D74',
          taupe: '#C8BDB1',
          lightgrey: '#E6E6E0',
          placeholder: '#999999',
        },
      },
      maxWidth: {
        'coastal': '1280px',
      },
      letterSpacing: {
        'coastal': '0.1em',
      },
      fontSize: {
        'coastal-xs': ['0.75rem', { lineHeight: '1.4' }],
        'coastal-sm': ['0.875rem', { lineHeight: '1.5' }],
        'coastal-base': ['1rem', { lineHeight: '1.7' }],
        'coastal-lg': ['1.125rem', { lineHeight: '1.6' }],
        'coastal-xl': ['1.25rem', { lineHeight: '1.6' }],
        'coastal-2xl': ['1.5rem', { lineHeight: '1.3' }],
        'coastal-3xl': ['1.875rem', { lineHeight: '1.3' }],
        'coastal-4xl': ['2.25rem', { lineHeight: '1.3' }],
        'coastal-5xl': ['3rem', { lineHeight: '1.2' }],
        'coastal-6xl': ['3.75rem', { lineHeight: '1.1' }],
        'coastal-7xl': ['4.5rem', { lineHeight: '1.1' }],
      },
      spacing: {
        'coastal-xs': '0.5rem',    // 8px
        'coastal-sm': '1rem',      // 16px
        'coastal-md': '1.5rem',    // 24px
        'coastal-lg': '2.5rem',    // 40px
        'coastal-xl': '4rem',      // 64px
        'coastal-2xl': '6rem',     // 96px
      },
    },
  },
  plugins: [],
}
export default config