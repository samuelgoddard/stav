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
    extend: {
      fontFamily: {
        sans: ["OldschoolGrotesk", "Helvetica", "Arial", "sans-serif"],
      },
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
