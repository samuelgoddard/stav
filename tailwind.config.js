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
