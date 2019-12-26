module.exports = {
  siteMetadata: {
    title: `Stefano Yushinski`,
    description: `This website is mainly to try out gatsby and build a personal website.
     Probably don't need gatsby for this, but wanted to try it out.`,
    author: `@syushinski`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `ystefano`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#729D39`,
        theme_color: `#729D39`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
