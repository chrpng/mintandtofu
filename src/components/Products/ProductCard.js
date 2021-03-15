import React from 'react'

import { Card, Image, Button } from 'semantic-ui-react'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

import { useShoppingCart, formatCurrencyString } from 'use-shopping-cart'

const cardStyles = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  alignItems: 'flex-start',
  padding: '1rem',
  marginBottom: '1rem',
  boxShadow: '5px 5px 25px 0 rgba(46,61,73,.2)',
  backgroundColor: '#fff',
  borderRadius: '6px',
  maxWidth: '300px',
}
const buttonStyles = {
  fontSize: '13px',
  textAlign: 'center',
  color: '#fff',
  outline: 'none',
  padding: '12px',
  boxShadow: '2px 5px 10px rgba(0,0,0,.1)',
  backgroundColor: 'rgb(255, 178, 56)',
  borderRadius: '6px',
  letterSpacing: '1.5px',
	position: 'relative',
	zIndex: '10'
}

const ProductCard = ({sku}) => {
  const { addItem } = useShoppingCart()

	const handleButtonClick = (e) => {
		e.preventDefault()
		addItem(sku)
		// e.stopPropagation()
	}

	return (
		<Card as={Link} to={`/${sku.route}`}>
			<Image wrapped ui src={sku.image} alt={sku.name} />
			<Card.Content>
				<Card.Header>{sku.name}</Card.Header>
				<Card.Meta>
					{/* {(sku.price / 100).toLocaleString("en-US", {style:"currency", currency:"USD"})} */}
					${(sku.price / 100).toFixed( 2 )}
				</Card.Meta>
				<Card.Description>{sku.description}</Card.Description>
			</Card.Content>
			<Card.Content extra>
				<Button style={buttonStyles} onClick={(e) => handleButtonClick(e)}>
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