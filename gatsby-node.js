/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */
const path = require('path')

exports.onCreateWebpackConfig = ({ actions }) => {
	actions.setWebpackConfig({
		resolve: {
			fallback: {
				crypto: false, // this may need to be set to require.resolve("crypto-browserify")
			}
		}
	})
}

exports.createPages = async ({ graphql, actions }) => {
	const { createPage } = actions
	
	const pages = await graphql(`
		{
			allStripePrice(filter: {active: {eq: true}, currency: {eq: "usd"}}) {
				edges {
					node {
						id
						product {
							metadata {
								route
							}
						}
					}
				}
			}
		}
	`)

	const productPageTemplate = path.resolve("src/templates/ProductPage.jsx")

	pages.data.allStripePrice.edges.forEach(edge => {
		createPage({
			path: `/${edge.node.product.metadata.route}`,
      component: productPageTemplate,
      context: {
        uid: edge.node.id,
      },
		})
	})
}