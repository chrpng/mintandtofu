import React, { useState } from 'react'
import { PageProps, graphql } from 'gatsby'

import SEO from '../components/SEO'

import { Grid, Image } from 'semantic-ui-react'
import { Button } from '../components/Buttons.styles'

import QuantityPicker from '../components/QuantityPicker'
import AddItemWidget from '../components/AddItemWidget'

import { useShoppingCart, formatCurrencyString } from 'use-shopping-cart'

//     return (
//       <Layout location={this.props.location}>
//         <SEO title={slug} />
//         <ProductSummary {...product} />
//         <ProductAttributes {...product} />
//       </Layout>
//     )
//   }
// }

type DataProps = {
  stripePrice: {
    id: string,
		active: boolean,
		currency: string,
		unit_amount: number,
		product: {
			id: string,
			name: string,
			images: string[],
			description: string,
		}
  }
}

const ProductPageTemplate: React.FC<PageProps<DataProps>> = ({ data }) => {
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
    <React.Fragment>
			<SEO title={stripePrice.product.name} />
			<Grid>
				<Grid.Row columns={2}>
					<Grid.Column>
						<Image wrapped src={product.image} alt={product.name} />
					</Grid.Column>
					<Grid.Column>
						<h3>{product.name}</h3>
						<h4>{formatCurrencyString({ value: product.price, currency: 'USD' })}</h4>

						<div style={{ width: `50%`, marginBottom: `32px` }}>
							<AddItemWidget product={product} />
						</div>

						<div>{product.description}</div>
					</Grid.Column>

				</Grid.Row>
			</Grid>
    </React.Fragment>
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
			}
		}
  }
`
