const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('./tailwind.config.colors.js')

module.exports = {
  mode: 'jit',
  purge: [
    './**/*.html',
    './**/*.svg'
  ],
  darkMode: 'class',
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#000',
      white: '#fff',
      gray: colors.gray,
      primary: colors.red,
      secondary: colors.blue,
      amber: colors.amber,
      green: colors.green,
      purple: colors.purple,
      error: colors.red,
      social: {
        twitter: '#1DA1F2',
        linkedin: '#1a91da',
        instagram: '#e1306c',
        facebook: '#3b5998',
        youtube: '#ff0000',
      },
    },
    boxShadow: {
      sm: '0 1px 2px 0 rgba(96, 115, 143, 0.05)',
      DEFAULT: '0 1px 3px 0 rgba(96, 115, 143, 0.1), 0 1px 2px 0 rgba(96, 115, 143, 0.06)',
      md: '0 4px 6px -1px rgba(96, 115, 143, 0.1), 0 2px 4px -1px rgba(96, 115, 143, 0.06)',
      lg: '0 10px 15px -3px rgba(96, 115, 143, 0.1), 0 4px 6px -2px rgba(96, 115, 143, 0.05)',
      xl: '0 20px 25px -5px rgba(96, 115, 143, 0.1), 0 10px 10px -5px rgba(96, 115, 143, 0.04)',
      '2xl': '0 25px 50px -12px rgba(96, 115, 143, 0.45)',
      inner: 'inset 0 2px 4px 0 rgba(96, 115, 143, 0.06)',
      link: '0 -4px 0 0 rgba(178, 245, 234, .7) inset',
      none: 'none',
    },
    extend: {
      fontFamily: {
        sans: ['F37 Jan', ...defaultTheme.fontFamily.sans],
        display: ['F37 Bobby', ...defaultTheme.fontFamily.sans],
      },
      lineHeight: {
        '4.5': '1.125rem',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            'ol > li::before': {
              fontWeight: '700',
              color: theme('colors.secondary.500'),
            },
            'ul > li::before': {
              backgroundColor: theme('colors.secondary.500'),
            },
            a: {
              color: theme('colors.secondary.500'),
              '&:hover': {
                color: theme('colors.secondary.600'),
              },
            },
            'blockquote p:first-of-type::before': {
              color: theme('colors.secondary.500'),
            },
            'blockquote p:last-of-type::after': {
              color: theme('colors.secondary.500'),
            },
            h1: {
              fontFamily: `${theme('fontFamily.display')}`,
              fontWeight: '400',
            },
            h2: {
              fontFamily: `${theme('fontFamily.display')}`,
              fontWeight: '400',
            },
            h3: {
              fontFamily: `${theme('fontFamily.display')}`,
              fontWeight: '400',
            },
            h4: {
              fontFamily: `${theme('fontFamily.display')}`,
              fontWeight: '400',
            },
            h5: {
              fontFamily: `${theme('fontFamily.display')}`,
              fontWeight: '400',
            },
            h6: {
              fontFamily: `${theme('fontFamily.display')}`,

            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}
