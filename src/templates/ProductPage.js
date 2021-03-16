import React, { useState } from 'react'
import { graphql } from 'gatsby'

import SEO from '../components/SEO'
import Layout from '../components/Layout'

import { Grid, Image } from 'semantic-ui-react'
import { Button } from '../components/Buttons.styles'

import QuantityPicker from '../components/QuantityPicker'

import { useShoppingCart } from 'use-shopping-cart'

//     return (
//       <Layout location={this.props.location}>
//         <SEO title={slug} />
//         <ProductSummary {...product} />
//         <ProductAttributes {...product} />
//       </Layout>
//     )
//   }
// }

const ProductPageTemplate = ({ data }) => {
	const { addItem } = useShoppingCart()
	const [ quantity, setQuantity ] = useState(1)

	const decreaseQuantity = () => {
		setQuantity(Math.max(quantity - 1, 1))
	}

	const increaseQuantity = () => [
		setQuantity(quantity + 1)
	]

	const handleButtonClick = (product, quantity) => {
		addItem(product, quantity)
	}

	const { stripePrice } = data

	const product = {
		id: stripePrice.id, // this is actually the price_id too
		name: stripePrice.product.name,
		price: stripePrice.unit_amount,
		currency: stripePrice.currency,
		image: stripePrice.product.images,
		description: stripePrice.product.description,
	}

  return (
    <Layout>
			<SEO title={stripePrice.product.name} />
			<Grid>
				<Grid.Row columns={2}>
					<Grid.Column>
						<Image wrapped src={product.image} alt={product.name} />
					</Grid.Column>
					<Grid.Column>
						<h1>{product.name}</h1>
						{/* <h2>{formatCurrencyString({ value: product.price, currency: 'USD' })}</h2> */}
						{/* <h2>{(product.price / 100).toLocaleString("en-US", {style:"currency", currency:"USD"})}</h2> */}
						<h2>${product.price}</h2>
						<div>{product.description}</div>

						<QuantityPicker
							decrementFunction={decreaseQuantity}
							incrementFunction={increaseQuantity}
							quantity={quantity}
						/>
						<Button onClick={() => handleButtonClick(product, quantity)}>
							ADD TO CART
						</Button>
					</Grid.Column>

				</Grid.Row>
			</Grid>
    </Layout>
  )
}

export default ProductPageTemplate

export const pageQuery = graphql`
  query PageById($uid: String!) {
    stripePrice(id: {eq: $uid }) {
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
`
