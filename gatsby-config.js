require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Mint and Tofu`,
    description: `Mint and Tofu's corner of the internet`,
    author: `@doodletofuu`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
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
        name: `mint-and-tofu`,
        short_name: `mintofu`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/mintofuicon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
		{
			resolve: `gatsby-source-stripe`,
			options: {
				objects: ["Price", "Sku", "Product"],
				secretKey: process.env.GATSBY_STRIPE_SECRET_KEY,
				downloadFiles: false,
			}
		},
		`gatsby-plugin-styled-components`,
		{
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: `Poppins`,
              variants: [`300`, `300i`],
						},
						{
							family: `Syncopate`,
							variants: [`400`]
						},
						{
							family: `Varela Round`,
							variants: [`400`]
						},
          ],
        },
      },
		},
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
