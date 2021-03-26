/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Resume. Sanjib Adhya.",
    description: "Minimal online resume for Sanjib Adhya",
    author: "Sanjib Adhya",
  },
  plugins: [
    {
      resolve: "gatsby-plugin-sass",
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.inline\.svg$/,
          omitKeys: [
            "xmlnsDc",
            "xmlnsCc",
            "xmlnsRdf",
            "xmlnsSvg",
            "xmlnsSodipodi",
            "xmlnsInkscape",
          ],
        },
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-offline",
  ],
}
