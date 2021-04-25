import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import { Card } from 'semantic-ui-react'

import ProductCard from './ProductCard'

const ProductMap = () => {
	const { prices } = useStaticQuery(graphql`
		query StickerPrices {
			prices: allStripePrice(
				filter: {currency: {eq: "usd"}, product: {active: {eq: true}, metadata: {type: {eq: "sticker"}}}}
				sort: {fields: [unit_amount]}
			) {
				edges {
					node {
						id
						active
						currency
						unit_amount
						product {
							id
							name
							images
							description
							metadata {
								route
								type
							}
						}
					}
				}
			}
		}
	`)

	const mapProductsToItems = products => (
		products.edges
		// .filter(({ node }) => {
		// 	return node.product.metadata.type === "sticker"
		// })
		.map(({ node }) => {
			const newSku = {
				id: node.id,
				name: node.product.name,
				price: node.unit_amount,
				currency: node.currency,
				image: node.product.images,
				description: node.product.description,
				route: node.product.metadata.route
			}
			return <ProductCard key={node.id} sku={newSku} />
		})
	)

	return (
		// <Card.Group items={mapProductsToItems(prices)} itemsPerRow={2} stackable />
		<Card.Group itemsPerRow={4} doubling stackable>
			{mapProductsToItems(prices)}
		</Card.Group>
	)
}

export default ProductMap