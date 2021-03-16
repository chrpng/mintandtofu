import React from 'react'

import { Image } from 'semantic-ui-react'
import { Card } from '../Card.styles'
import { Button } from '../Buttons.styles'
import { Link } from 'gatsby'

import { useShoppingCart, formatCurrencyString } from 'use-shopping-cart'

const ProductCard = ({ sku }) => {
  const { addItem, cartDetails } = useShoppingCart()

	const handleButtonClick = (e) => {
		e.preventDefault()
		const { description, route, ...minSku } = sku
		console.log(minSku)
		console.log(cartDetails[minSku.id])
		addItem(minSku)
		// e.stopPropagation()
	}

	return (
		<Card as={Link} to={`/${sku.route}`} className="card">
			<Image wrapped src={sku.image} alt={sku.name} />
			<Card.Content>
				<Card.Header>{sku.name}</Card.Header>
				<Card.Meta>
					{/* {(sku.price / 100).toLocaleString("en-US", {style:"currency", currency:"USD"})} */}
					{/* {formatCurrencyString({ value: sku.price, currency: 'USD' })} */}
				</Card.Meta>
				<Card.Description>{sku.description}</Card.Description>
			</Card.Content>
			<Card.Content extra>
				<Button onClick={(e) => handleButtonClick(e)}>
        	ADD TO CART
  	    </Button>
			</Card.Content>
		</Card>
	)
  // return (
  //   <div style={cardStyles}>
  //     <img src={sku.image} alt=""/>
  //     <h4>{sku.name}</h4>
  //     <p>
  //       Price:{' '}
  //       {formatCurrencyString({
  //         value: parseInt(sku.price),
  //         currency: sku.currency,
  //       })}
  //     </p>
  //     <button style={buttonStyles} onClick={() => addItem(sku)}>
  //       ADD TO CART
  //     </button>
  //   </div>
  // )
}

export default ProductCard