import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import { Card, Image } from 'semantic-ui-react'
import { Link } from 'gatsby'

import ProductCard from './ProductCard'

const containerStyles = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  padding: '1rem 0 1rem 0',
}

const ProductMap = () => {
	const { prices } = useStaticQuery(graphql`
		query ProductPrices {
			prices: allStripePrice(
				filter: { active: { eq: true }, currency: { eq: "usd" } }
				sort: { fields: [unit_amount] }
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
							}
						}
					}
				}
			}
		}
	`)

	// const mapProductsToItems = products => (
	// 	products.edges.map(({ node: { product, id: priceId } }) => {
	// 		const { name, images, id } = product
	// 		console.log(images)
	// 		return {
	// 			as: Link,
	// 			to: `/${id}`,
	// 			image: (
	// 				<Image>
	// 					<img
	// 						src={images[0]}
	// 						alt={name}
	// 					/>
	// 				</Image>
	// 			),
	// 			content: name,
	// 		}
	// 	})
	// )

  // return (
	// 	<div style={containerStyles}>
	// 		{prices.edges.map(({ node: price }) => {
	// 			const newSku = {
	// 				sku: price.id,
	// 				name: price.product.name,
	// 				price: price.unit_amount,
	// 				currency: price.currency,
	// 				image: price.product.images,
	// 			}
	// 			return <ProductCard key={price.id} sku={newSku} />
	// 		})}
	// 	</div>
  // )

	const mapProductsToItems = products => (
		products.edges.map(({ node }) => {
			const newSku = {
				id: node.id,
				name: node.product.name,
				price: node.unit_amount,
				currency: node.currency,
				image: node.product.images,
				description: node.product.description,
				// pid: node.product.id,
				route: node.product.metadata.route
			}
			return <ProductCard key={node.id} sku={newSku} />
		})
	)

	return (
		// <Card.Group items={mapProductsToItems(prices)} itemsPerRow={2} stackable />
		// <div style={containerStyles}>
		<Card.Group itemsPerRow={2} stackable>
			{
				mapProductsToItems(prices)
			}
		</Card.Group>
		// </div>
	)
}

export default ProductMap