module.exports = {
  theme: {
    customForms: theme => ({
      default: {
        input: {
          borderRadius: theme("borderRadius.sm"),
          backgroundColor: theme("colors.gray.300"),
          padding: theme("spacing.4"),
          "&:focus": {
            backgroundColor: theme("colors.gray.400"),
          },
        },
        select: {
          borderRadius: theme("borderRadius.sm"),
          backgroundColor: theme("colors.gray.300"),
          padding: theme("spacing.4"),
          "&:focus": {
            backgroundColor: theme("colors.gray.400"),
          },
        },
      },
    }),
    fontSize: {
      'xs': '.75rem',
      'sm': '.875rem',
      'tiny': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '3.5rem',
      '7xl': '4.5rem',
    },
    colors: {
      black: '#000000',
      white: '#FFFFFF',
      primary: {
        default: '#5c33a2' // Purple
      },
      secondary: {
        default: '#FFBA00' // Yellow
      },
      tertiary: {
        default: '#f25e21' // Orange
      }
    },
    extend: {
      fontFamily: {
        sans: ["OldschoolGrotesk", "Helvetica", "Arial", "sans-serif"],
        suisse: ["SuisseIntl", "Helvetica", "Arial", "sans-serif"],
      },
      maxWidth: {
        'tiny': '4.5rem'
      }
    },
  },
  plugins: [
    require("tailwindcss-transition")({
      standard: "all .3s ease",
    }),
    require("@tailwindcss/custom-forms"),
  ],
  corePlugins: {
    container: false,
  },
}
