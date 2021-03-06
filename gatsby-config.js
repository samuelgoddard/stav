require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: `Student Availability`,
    description: `An opinionated starter for Gatsby v2 with TailwindCSS, PostCSS and Framer Motion page transitions.`,
    author: `@samuelgoddard`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-153500527-1",
        head: true,
        anonymize: true,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true,
        tailwind: true,
        whitelistPatterns: [/is-active/],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `stav`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#000000`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`,
      },
    },
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: process.env.DATO_API_KEY,
      },
    },
  ],
}
