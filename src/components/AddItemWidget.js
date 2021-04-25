import React, { useState } from 'react'
import { Button } from './Buttons.styles'

import QuantityPicker from './QuantityPicker'

import { useShoppingCart } from 'use-shopping-cart'

const AddItemButton = ({ product }) => {
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

  return (
		<React.Fragment>
			<QuantityPicker
				decrementFunction={decreaseQuantity}
				incrementFunction={increaseQuantity}
				quantity={quantity}
			/>
			<Button onClick={() => handleButtonClick(product, quantity)}>
				ADD TO CART
			</Button>
		</React.Fragment>
  )
}

export default AddItemButton