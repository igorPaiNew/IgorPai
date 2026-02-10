/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}', './public/**/*.html'],
    theme: {
        extend: {
            fontSize: {
                xs: ['0.75rem', { lineHeight: '1.2', letterSpacing: '0.02em', fontWeight: '400' }],
                sm: ['0.875rem', { lineHeight: '1.3', letterSpacing: '0.02em', fontWeight: '400' }],
                base: ['1rem', { lineHeight: '1.5', letterSpacing: '0.025em', fontWeight: '400' }],
                lg: ['1.125rem', { lineHeight: '1.5', letterSpacing: '0.025em', fontWeight: '400' }],
                xl: ['1.25rem', { lineHeight: '1.6', letterSpacing: '0.03em', fontWeight: '600' }],
                '2xl': ['1.5rem', { lineHeight: '1.6', letterSpacing: '0.03em', fontWeight: '600' }],
                '3xl': ['1.875rem', { lineHeight: '1.4', letterSpacing: '0.04em', fontWeight: '700' }],
                '4xl': ['2.25rem', { lineHeight: '1.3', letterSpacing: '0.04em', fontWeight: '700' }],
                '5xl': ['3rem', { lineHeight: '1.2', letterSpacing: '0.05em', fontWeight: '800' }],
                '6xl': ['3.75rem', { lineHeight: '1.1', letterSpacing: '0.05em', fontWeight: '800' }],
                '7xl': ['4.5rem', { lineHeight: '1.1', letterSpacing: '0.06em', fontWeight: '900' }],
                '8xl': ['6rem', { lineHeight: '1', letterSpacing: '0.06em', fontWeight: '900' }],
                '9xl': ['8rem', { lineHeight: '1', letterSpacing: '0.07em', fontWeight: '900' }],
            },
            fontFamily: {
                heading: "Manrope, Inter Tight, sans-serif",
                paragraph: "Inter, sans-serif"
            },
            colors: {
                buttonbackground: '#c9a84c',
                buttonforeground: '#0f0e0c',
                textlight: '#9a9080',
                textbody: '#e8e0d0',
                bordersubtle: '#2a261f',
                foreground: '#e8e0d0',
                destructive: '#c0392b',
                destructiveforeground: '#f5f0e8',
                background: '#1a1814',
                secondary: '#c9a84c',
                'secondary-foreground': '#0f0e0c',
                'primary-foreground': '#e8c97a',
                primary: '#0f0e0c'
            },
        },
    },
    future: {
        hoverOnlyWhenSupported: true,
    },
    plugins: [require('@tailwindcss/container-queries'), require('@tailwindcss/typography')],
}
